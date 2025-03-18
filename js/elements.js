import { initBbcodeEditor } from './editor.js';

export const Group = (name) => {
  const element = document.createElement('optgroup');
  element.setAttribute('label', name);
  return element;
};
export const Section = (group, section) => {
  const element = document.createElement('option');
  element.setAttribute('value', section.id);
  element.textContent = section.name;
  if (group !== null) group.appendChild(element);
  return element;
};

export const CardHeader = (title) => {
  const headerElement = document.createElement('div');
  headerElement.classList.add(
    'card-header',
    'd-flex',
    'justify-content-between',
    'align-items-center'
  );

  const titleElement = document.createElement('h4');
  titleElement.classList.add(
    'card-title',
    'mt-3',
    'mb-1',
    'flex-grow-1',
    'ms-3'
  );
  titleElement.textContent = title;

  const buttonsListElement = document.createElement('div');
  buttonsListElement.classList.add('d-flex');

  headerElement.appendChild(titleElement);
  headerElement.appendChild(buttonsListElement);

  return headerElement;
};
export const CardBody = (content) => {
  const bodyElement = document.createElement('div');
  bodyElement.classList.add('card-body');

  const editField = document.createElement('textarea');
  editField.classList.add('card-text', 'p-3');
  editField.value = content;
  bodyElement.appendChild(editField);
  setTimeout(() => initBbcodeEditor(editField), 0);

  return bodyElement;
};
export const Card = (title, template) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card', 'mb-4');
  cardElement.appendChild(CardHeader(title));
  cardElement.appendChild(CardBody(template));

  return cardElement;
};
export const CategoryPrototype = (name, level) => {
  const element = document.createElement('div');
  if (name !== 'default') {
    const titleElement = document.createElement('h' + level);
    titleElement.classList.add(
      `mt-${level === 3 ? 5 : 2}`,
      `mb-${level === 3 ? 3 : 2}`
    );
    titleElement.textContent = name;
    element.appendChild(titleElement);
  }
  return element;
};
export const Subcategory = (name) => CategoryPrototype(name, 4);
export const Category = (name) => CategoryPrototype(name, 3);
export const Row = () => {
  const element = document.createElement('div');
  element.classList.add('row');
  return element;
};
export const RowItem = (item) => {
  const element = document.createElement('div');
  element.classList.add('col-6', 'd-flex', 'align-items-stretch');
  element.appendChild(item);
  return element;
};
