import { Toast } from "bootstrap";
import { info as i, trace as t } from "tauri-plugin-log-api";

export function showErrorToast(message) {
    const element = document.querySelector('#errorToast');
    element.querySelector('.toast-body').innerHTML = message;
    new Toast(element).show();
}

export function showToast(toastId) {
    var toast = new Toast(document.getElementById(toastId)).show();
}

export function removeOptions(selectElement) {
    if (Array.isArray(selectElement)) {
        selectElement.forEach(el => removeOptions(el));
    } else {
        selectElement.innerHTML = '';
    }
}

export async function info(message) {
    if (import.meta.env.VITE_WEB) {
        console.log(message);
    } else {
        await i(message);
    }
}

export async function trace(message) {
    if (import.meta.env.VITE_WEB) {
        console.log(message);
    } else {
        await t(message);
    }
}

export async function error(message) {
    if (import.meta.env.VITE_WEB) {
        console.error(message);
    } else {
        await error(message);
    }
}

export async function warn(message) {
    if (import.meta.env.VITE_WEB) {
        console.warn(message);
    } else {
        await warn(message);
    }
}

export async function group(message) {
    if (import.meta.env.VITE_WEB) {
        console.group(message);
    } else {
        console.group(message);
        await trace(message);
    }
}

export async function groupEnd(message) {
    if (import.meta.env.VITE_WEB) {
        console.log(message);
        console.groupEnd();
    } else {
        if (message) {
            await trace(message);
        }
        console.groupEnd();
    }
}