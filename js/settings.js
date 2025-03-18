import { $settings } from './state.js';
import { setProfile } from './profiles.js';
import { info, trace } from './utils.js';

export async function initSettings() {
  await trace('Initializing the settings module...');

  const profileSelect = document.querySelector('#profiles-select');

  const getProfilesList = async () => {
    const url = './profiles/profiles.txt';
    const profiles = await (await fetch(url)).text();
    return profiles
      .trim()
      .split('\n')
      .reduce((acc, profile) => {
        acc[profile] = `${profile}.yaml`;
        return acc;
      }, {});
  };

  // TODO: Save and load settings from config
  const profiles = await getProfilesList();
  trace('Loaded profiles: ' + JSON.stringify(profiles));
  for (const profile of Object.keys(profiles)) {
    const option = document.createElement('option');
    option.value = profile;
    option.textContent = profile;
    profileSelect.appendChild(option);
  }

  $settings.profile = profileSelect.value;
  $settings.profiles = profiles;

  await info(`Using profile ${$settings.profile}`);

  await setProfile($settings.profile);

  profileSelect.addEventListener('change', async () => {
    $settings.profile = profileSelect.value;
    await info(`Changed profile to ${$settings.profile}`);
    await setProfile($settings.profile);
  });

  await trace('Initialized the settings module!');
}
