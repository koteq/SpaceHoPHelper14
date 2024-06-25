import { relaunch } from "@tauri-apps/api/process";
import { checkUpdate, installUpdate, onUpdaterEvent } from "@tauri-apps/api/updater";
import { Modal } from 'bootstrap';
import { error, info, trace } from "./utils";

export async function checkUpdates() {
    if (!import.meta.env.VITE_WEB && import.meta.env.PROD) {
        await trace('Checking for updates...');
        const unlisten = await onUpdaterEvent(({ error, status }) => {
            info('Updater event', error, status)
        })
        
        try {
            const update = await checkUpdate();
        
            if (update.shouldUpdate) {
                const modal = document.querySelector('#updateModal .modal-body > p');
                modal.textContent = modal.textContent.replace('{newVersion}', update.manifest.version);
                new Modal(document.getElementById('updateModal')).show();
            }
        } catch (err) {
            error(err);
        }
        
        document.querySelector('#update-button').addEventListener('click', async () => {
            await installUpdate();
            await relaunch();
        });
        
        unlisten();

        await trace('The update check module has been initialized.')
    } else {
        await trace('The update check module has not been initialized because the program is in DEV mode.')
    }
}