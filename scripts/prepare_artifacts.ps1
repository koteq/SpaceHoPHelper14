Write-Host "Checking dependencies"
if (-not (Get-Module -ListAvailable -Name PSToml)) {
    Write-Host "Installing the 'PSToml' module"
    Install-Module -Name PSToml -Scope CurrentUser -Force
}

Write-Host "Parsing the " -NoNewLine 
Write-Host "Cargo.toml" -ForegroundColor Green -NoNewline
Write-Host " file"
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

$color = "Green"

# Info

Write-Host
Write-Host "Installer type: " -NoNewline
Write-Host "$targetType" -ForegroundColor $color

Write-Host "App name: " -NoNewline
Write-Host "$appName" -ForegroundColor $color

Write-Host "App version: " -NoNewline
Write-Host "v$($manifest.package.version)" -ForegroundColor $color

Write-Host "Bundle name: " -NoNewline
Write-Host "$baseName.$targetType.zip" -ForegroundColor $color

Write-Host "Publish folder: " -NoNewline
Write-Host "$outPath" -ForegroundColor $color
Write-Host

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

# Web folder

Write-Host "Initialization of " -NoNewline
Write-Host "'$outPath/bundles/'" -NoNewline -ForegroundColor $color
Write-Host " folders"
New-Item -Path "$outPath/bundles" -ItemType Directory -Force | Out-Null

Get-ChildItem -Path "$targetPath/web" | ForEach-Object {
    Write-Host "Copying " -NoNewline
    Write-Host "'$targetPath/web/$($_.Name)'" -NoNewline -ForegroundColor $color
    Write-Host " file to " -NoNewline
    Write-Host "'$outPath/$($_.Name)'" -NoNewline -ForegroundColor $color
    Write-Host

    Copy-Item -Path "$targetPath/web/$($_.Name)" -Destination "$outPath" -Force
}

# Profiles

Write-Host "Initialization of " -NoNewline
Write-Host "'$outPath/profiles/'" -NoNewline -ForegroundColor $color
Write-Host " folders"
New-Item -Path "$outPath/profiles" -ItemType Directory -Force | Out-Null

Write-Host "Reading a list of profiles:"

$profiles = @()
Get-ChildItem -Path "assets/profiles" | ForEach-Object {
    Write-Host "`t + $($_.Name)" -ForegroundColor $color
    $profileObj = Get-Content -Path "assets/profiles/$($_.Name)" | ConvertFrom-Json
    $profiles += [PSCustomObject]@{
        "$($profileObj.profile)" = "$($_.Name)"
    }
    Copy-Item -Path "assets/profiles/$($_.Name)" -Destination "$outPath/profiles" -Force
}
Write-Host "Writing " -NoNewline
Write-Host "'$outPath/profiles/meta.json'" -ForegroundColor $color
$profiles | ConvertTo-Json -Compress | Out-File -FilePath "$outPath/profiles/meta.json"
$profiles | ConvertTo-Json | Write-Host

# Bundles

Write-Host "Copying " -NoNewline 
Write-Host "'$bundlePath'" -NoNewline -ForegroundColor $color
Write-Host " bundle to " -NoNewline
Write-Host "'$outPath/bundles/$baseName.$targetType.zip'" -ForegroundColor $color

Copy-Item -Path "$bundlePath" -Destination "$outPath/bundles" -Force

Write-Host "Writing " -NoNewline
Write-Host "'$outPath/latest.json'" -ForegroundColor $color
$latest | ConvertTo-Json -Compress | Out-File -FilePath "$outPath/latest.json"

$latest | ConvertTo-Json | Write-Host