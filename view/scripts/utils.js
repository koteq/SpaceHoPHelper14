import { Toast } from "bootstrap";

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