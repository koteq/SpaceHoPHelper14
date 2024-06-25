import { Toast } from "bootstrap";

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