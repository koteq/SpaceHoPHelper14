import { resolveResource } from '@tauri-apps/api/path'
import { readTextFile } from '@tauri-apps/api/fs'

let profilePath;
let profile;
if (import.meta.env.VITE_WEB) {
    profilePath = window.location.href + '/profiles/corvax.json';
    profile = JSON.parse(await (await fetch(profilePath)).text());
}
if (!import.meta.env.VITE_WEB) {
    // Load profile
    profilePath = await resolveResource('assets/profiles/corvax.json')
    profile = JSON.parse(await readTextFile(profilePath))
}

// Mapping sections
const sectionsById = new Map(profile.groups.flatMap(group => group.sections.map(section => [section.id, section])));

// Selectors
const positionSelects = [
        document.querySelector('#position-field > select')
    ,   document.querySelector('#position-new-field > select')
    ,   document.querySelector('#position-object-field > select')];
const departmentSelect = document.querySelector('#department-field > select');
const departmentCodeSelect = document.querySelector('#department-code-field > select');
const statementTypeSelect = document.querySelector('#statement-type');
const output = document.querySelector('#generated-statement');

const Group = (name) => {
    const element = document.createElement('optgroup');
    element.setAttribute('label', name);
    return element
};
const Section = (group, section) => {
    const element = document.createElement('option');
    element.setAttribute('value', section.id);
    element.textContent = section.name;
    if (group !== null) group.appendChild(element);
    return element
}

// Init list of statement types
profile.groups.forEach(group => {
    const groupElement = Group(group.name);
    group.sections.forEach(section => {
        const sectionElement = Section(groupElement, section);
    })
    statementTypeSelect.appendChild(groupElement);
})

// Init list of positions
positionSelects.forEach(select => {
    const undefinedOption = Section(null, { id: 1, name: profile.positions.undefined });
    select.appendChild(undefinedOption);

    let nextId = 2;
    Object.entries(profile.positions).forEach(([department, positions]) => {
        if (department === 'undefined') return;
        const departmentGroup = Group(department);
        positions.forEach(position => {
            const positionOption = Section(departmentGroup, { id: nextId, name: position });
            nextId += 1;
            departmentGroup.appendChild(positionOption);
        });
        select.appendChild(departmentGroup);
    });
})

// Init list of departments
profile.departments.forEach((department, i) => {
    const departmentOption = Section(null, { id: i+1, name: department }); 
    departmentSelect.appendChild(departmentOption);
});

// Init list of department codes
profile.departmentsCodes.forEach((code, i) => {
    const codeOption = Section(null, { id: i+1, name: code }); 
    departmentCodeSelect.appendChild(codeOption);
});

// TODO: Rewrite it in human language...
let currentFields = [];
const formFields = document.querySelectorAll('#application-form > .row > div > div');
const hideFields = () => { formFields.forEach(field => field.classList.add('d-none')); currentFields = []; };
const updateFields = (id) => {
    hideFields();
    const kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());

    const section = sectionsById.get(parseInt(id));
    section.fields.forEach(field => {
        const kebabizedField = kebabize(field);
        const fieldElement = document.querySelector(`#${kebabizedField}-field`);
        fieldElement.classList.remove('d-none');
        currentFields.push(kebabizedField);
    })
}
statementTypeSelect.addEventListener('change', e => updateFields(e.target.value));
updateFields(statementTypeSelect.value);

const CardHeader = (title) => {
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
const CardBody = (content) => {
    const bodyElement = document.createElement('div');
    bodyElement.classList.add('card-body');

    const editField = document.createElement('div');
    editField.classList.add('card-text', 'editable-content', 'p-3');
    editField.contentEditable = true;
    editField.innerText = content;
    bodyElement.appendChild(editField);

    return bodyElement
}
const Card = (title, template) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'mb-4');
    cardElement.appendChild(CardHeader(title));
    cardElement.appendChild(CardBody(template));

    return cardElement
}
const CategoryPrototype = (name, level) => {
    const element = document.createElement('div');
    if (name !== "default") {
        const titleElement = document.createElement('h' + level);
        titleElement.classList.add(`mt-${level == 3 ? 5 : 2}`, `mb-${level == 3 ? 3 : 2}`);
        titleElement.textContent = name;
        element.appendChild(titleElement);
    }
    return element
}
const Subcategory = (name) => CategoryPrototype(name, 4);
const Category = (name) => CategoryPrototype(name, 3);
const Row = () => {
    const element = document.createElement('div');
    element.classList.add('row');
    return element;
}
const RowItem = (item) => {
    const element = document.createElement('div');
    element.classList.add('col-6', 'd-flex', 'align-items-stretch');
    element.appendChild(item);
    return element
}
document.getElementById('application-form').addEventListener('submit', e => {
    e.preventDefault();
    while (output.firstChild) {
        output.removeChild(output.lastChild);
    }

    const camelize = s => s.replace(/-./g, x => x[1].toUpperCase())
    const selectFields = (d) => {
        const obj = {};
        currentFields.forEach(k => {
            const s = document.querySelector(`#${k}-field > select`);
            const val = s !== null ? s.options[d.get(k) - 1].textContent : d.get(k);
            obj[camelize(k)] = val;
        });
        obj['date'] = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
        obj['stationNumber'] = document.querySelector('#station-number').value;
        obj['time'] = document.querySelector('#timer-output').value || '00:00:00';
        return obj;
    };

    const data = new FormData(e.target);
    const dataObject = selectFields(data);
    console.log(dataObject);

    const section = sectionsById.get(parseInt(statementTypeSelect.value));

    section.categories.forEach(category => {
        const categoryElement = Category(category.name);

        console.log(category.subcategories);
        category.subcategories.forEach(sub => {
            const subcategoryElement = Subcategory(sub.name);

            sub.items.forEach(item => {
                const { type, templates } = item;
                const row = type === 'row' ? Row() : null;

                templates.forEach(templateData => {
                    const { title, template } = templateData;
                    const cardTemplate = template.replace(/\$\{{2}([\w]+)\}{2}/g, (_, key) => dataObject[key]);
                    console.log(cardTemplate);
                    const card = Card(title, cardTemplate);

                    if (row) {
                        row.appendChild(RowItem(card));
                    } else {
                        subcategoryElement.appendChild(card);
                    }
                });

                if (row) {
                    subcategoryElement.appendChild(row);
                }
            });
            categoryElement.appendChild(subcategoryElement);
        });
        output.appendChild(categoryElement);
    });
});

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