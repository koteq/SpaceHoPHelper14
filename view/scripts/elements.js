export const Group = (name) => {
    const element = document.createElement('optgroup');
    element.setAttribute('label', name);
    return element
};
export const Section = (group, section) => {
    const element = document.createElement('option');
    element.setAttribute('value', section.id);
    element.textContent = section.name;
    if (group !== null) group.appendChild(element);
    return element
}

export const CardHeader = (title) => {
    const headerElement = document.createElement('div');
    headerElement.classList.add('card-header', 'd-flex', 'justify-content-between', 'align-items-center');

    const titleElement = document.createElement('h4');
    titleElement.classList.add('card-title', 'mt-3', 'mb-1', 'flex-grow-1', 'ms-3')
    titleElement.textContent = title;

    const buttonsListElement = document.createElement('div');
    buttonsListElement.classList.add('d-flex');

    const downloadButton = document.createElement('button');
    downloadButton.classList.add('btn', 'mt-2', 'me-2', 'download-content-button');
    downloadButton.title = "Сохранить в файл";
    downloadButton.textContent = '💾';
    downloadButton.addEventListener('click', saveCardContent);

    const copyButton = document.createElement('button');
    copyButton.classList.add('btn', 'mt-2', 'copy-content-btn');
    copyButton.title = "Скопировать в буфер обмена";
    copyButton.textContent = '📋';
    copyButton.addEventListener('click', copyCardContent);

    buttonsListElement.appendChild(downloadButton);
    buttonsListElement.appendChild(copyButton);
    headerElement.appendChild(titleElement);
    headerElement.appendChild(buttonsListElement);

    return headerElement
}
export const CardBody = (content) => {
    const bodyElement = document.createElement('div');
    bodyElement.classList.add('card-body');

    const editField = document.createElement('div');
    editField.classList.add('card-text', 'editable-content', 'p-3');
    editField.contentEditable = true;
    editField.innerText = content;
    bodyElement.appendChild(editField);

    return bodyElement
}
export const Card = (title, template) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'mb-4');
    cardElement.appendChild(CardHeader(title));
    cardElement.appendChild(CardBody(template));

    return cardElement
}
export const CategoryPrototype = (name, level) => {
    const element = document.createElement('div');
    if (name !== "default") {
        const titleElement = document.createElement('h' + level);
        titleElement.classList.add(`mt-${level == 3 ? 5 : 2}`, `mb-${level == 3 ? 3 : 2}`);
        titleElement.textContent = name;
        element.appendChild(titleElement);
    }
    return element
}
export const Subcategory = (name) => CategoryPrototype(name, 4);
export const Category = (name) => CategoryPrototype(name, 3);
export const Row = () => {
    const element = document.createElement('div');
    element.classList.add('row');
    return element;
}
export const RowItem = (item) => {
    const element = document.createElement('div');
    element.classList.add('col-6', 'd-flex', 'align-items-stretch');
    element.appendChild(item);
    return element
}

function copyCardContent(event) {
    const card = event.currentTarget.closest('.card');
    const content = card.querySelector('.editable-content').innerText.trim();

    navigator.clipboard.writeText(content)
        .then(() => showToast('toastCopy'))
        .catch(error => console.error('Error copying:', error));
}

function saveContentToFile(content, fileName) {
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

function saveCardContent(event) {
    const cardContent = event.currentTarget.closest('.card').querySelector('.editable-content');
    const cardTitle = event.currentTarget.closest('.card').querySelector('.card-title').innerText.trim();
    saveContentToFile(cardContent.innerText.trim(), `${cardTitle}.txt`);
}