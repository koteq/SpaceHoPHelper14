if (-not (Get-Module -ListAvailable -Name PSToml)) {
    Install-Module -Name PSToml -Scope CurrentUser -Force
}
$manifest = Get-Content -Path 'Cargo.toml' | ConvertFrom-Toml

$outPath = "target/publish"

$targetType = "nsis"
$appName = "$($manifest.bin[0].name)"
$baseName = "$($appName)_$($manifest.package.version)_x64-setup"
$targetPath = "target"
$bundleDir = "target/release/bundle/$targetType/"
$bundlePath = "$bundleDir$baseName.$targetType.zip"
$sign = Get-Content "$bundlePath.sig"

$userName = $manifest.package.repository.Split("/")[3].ToLower()

$latest = [PSCustomObject]@{
    version = "v$($manifest.package.version)"
    pub_date = [Xml.XmlConvert]::ToString((get-date),[Xml.XmlDateTimeSerializationMode]::Utc)
    platforms = [PSCustomObject]@{
        "windows-x86_64" = [PSCustomObject]@{
            signature = "$sign"
            url = "https://$userName.github.io/$appName/bundles/$baseName.$targetType.zip"
        }
    }
}

New-Item -Path "$outPath/bundles" -ItemType Directory -Force | Out-Null

$latest | ConvertTo-Json -Compress | Out-File -FilePath "$outPath/latest.json"

Copy-Item -Path "$targetPath/view/*" -Destination "$outPath" -Force
Copy-Item -Path "$bundlePath" -Destination "$outPath/bundles" -Force

$latest | ConvertTo-Json | Write-Host