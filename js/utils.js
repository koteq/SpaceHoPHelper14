import { Toast } from 'https://unpkg.com/bootstrap@5.3.3/dist/js/bootstrap.esm.min.js?module';

export function showErrorToast(message) {
  const element = document.querySelector('#errorToast');
  element.querySelector('.toast-body').innerHTML = message;
  new Toast(element).show();
}

export function showToast(toastId) {
  new Toast(document.getElementById(toastId)).show();
}

export function removeOptions(selectElement) {
  if (Array.isArray(selectElement)) {
    selectElement.forEach((el) => removeOptions(el));
  } else {
    selectElement.innerHTML = '';
  }
}

export function info(message) {
  console.log(message);
}

export function trace(message) {
  console.log(message);
}

export function error(message) {
  console.error(message);
}

export function group(message) {
  console.group(message);
}

export function groupEnd(message) {
  console.log(message);
  console.groupEnd();
}

export function saveContentToFile(content, fileName) {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(url);
  link.remove();
  showToast('toastSave');
}
