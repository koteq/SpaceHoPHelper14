import { invoke } from '@tauri-apps/api';
import { $settings } from './state';

const profileSelect = document.querySelector('#profiles-select');

const getProfilesList = async () => {
    return import.meta.env.VITE_WEB 
        ? JSON.parse(await (await fetch(window.location.href + '/profiles/meta.json')).text()) 
        : await invoke('get_profiles_list');
}

// TODO: Save and load settings from config

document.addEventListener('DOMContentLoaded', async () => {
    const profiles = await getProfilesList();
    for (const profile of Object.keys(profiles)) {
        const option = document.createElement('option');
        option.value = profile;
        option.textContent = profile;
        profileSelect.appendChild(option);
    }

    $settings.profile = profileSelect.value;
    $settings.profiles = profiles

    console.log("Current profile: " + $settings.profile);
});

profileSelect.addEventListener('change', async () => {
    $settings.profile = profileSelect.value;
    console.log("Current profile: " + $settings.profile);
});