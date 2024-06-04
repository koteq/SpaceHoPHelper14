import { invoke } from '@tauri-apps/api';
import { relaunch } from "@tauri-apps/api/process";
import { checkUpdate, installUpdate, onUpdaterEvent } from "@tauri-apps/api/updater";
import { Modal } from 'bootstrap';

if (!import.meta.env.VITE_WEB) {
    invoke('get_repository').then(res => {
        document.querySelectorAll('.repo-link').forEach(link => {
            link.setAttribute('href', res); 
        });
    })
    
    const unlisten = await onUpdaterEvent(({ error, status }) => {
        console.log('Updater event', error, status)
    })
    
    try {
        const update = await checkUpdate();
    
        if (update.shouldUpdate) {
            const modal = document.querySelector('#updateModal .modal-body > p');
            modal.textContent = modal.textContent.replace('{newVersion}', update.manifest.version);
            new Modal(document.getElementById('updateModal')).show();
        }
    } catch (err) {
        console.error(err)
    }
    
    document.querySelector('#update-button').addEventListener('click', async () => {
        await installUpdate();
        await relaunch();
    });
    
    unlisten();   
}