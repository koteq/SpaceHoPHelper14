import { invoke } from '@tauri-apps/api';
import { $settings } from './state';
import { setProfile } from './profiles';
import { resolveResource } from '@tauri-apps/api/path';
import { open } from '@tauri-apps/api/shell';
import { info, trace } from './utils';

export async function initSettings() {
    await trace("Initializing the settings module...");

    const profileSelect = document.querySelector('#profiles-select');

    const getProfilesList = async () => {
        if (import.meta.env.VITE_WEB) {
            const url = import.meta.env.PROD ? 'profiles/meta.json' : `${import.meta.env.VITE_PAGE_URL}/profiles/meta.json`;
            await trace(`Fetching profiles list from ${url}`);
            return JSON.parse(await (await fetch(url)).text());
        } else {
            return await invoke('get_profiles_list');
        }
    }
    
    // TODO: Save and load settings from config
    const profiles = await getProfilesList();
    trace("Loaded profiles: " + JSON.stringify(profiles));
    for (const profile of Object.keys(profiles)) {
        const option = document.createElement('option');
        option.value = profile;
        option.textContent = profile;
        profileSelect.appendChild(option);
    }
    
    $settings.profile = profileSelect.value;
    $settings.profiles = profiles

    await info(`Using profile ${$settings.profile}`);
    
    await setProfile($settings.profile);

    profileSelect.addEventListener('change', async () => {
        $settings.profile = profileSelect.value;
        await info(`Changed profile to ${$settings.profile}`);
        await setProfile($settings.profile);
    });

    if (!import.meta.env.VITE_WEB) {
        document.querySelector('#open-profiles').addEventListener('click', async () => {
            const profilesFolder = await resolveResource('assets/profiles');
            await trace(`Opening profiles folder (${profilesFolder})...`);
            await open(profilesFolder);
        });
        document.querySelectorAll('.open-logs').forEach(el => el.addEventListener('click', async () => {
            const logsFolder = await resolveResource('logs');
            await trace(`Opening logs folder (${logsFolder})...`);
            await open(logsFolder);
        }));
    }

    await trace("Initialized the settings module!");
}