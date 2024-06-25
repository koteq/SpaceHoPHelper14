import { invoke } from '@tauri-apps/api';
import { $settings } from './state';
import { Card, Category, Group, Row, RowItem, Section, Subcategory } from './elements';
import { error, group, groupEnd, info, removeOptions, showErrorToast, trace } from './utils';

export async function setProfile(profileName) {
    await trace(`Setting profile to ${profileName}`);
    
    let profilePath;
    let profile;
    if (import.meta.env.VITE_WEB) {
        const url = import.meta.env.PROD ? 'profiles/' : `${import.meta.env.VITE_PAGE_URL}/profiles/`;
        profilePath = url + $settings.profiles[profileName];
        await trace(`Fetching profile from ${profilePath}`);
        profile = JSON.parse(await(await fetch(profilePath)).text());
    } else {
        profilePath = $settings.profiles[profileName];
        try {
            profile = await invoke('get_profile', { path: profilePath });
        } catch (e) {
            showErrorToast(`(${profileName}) <span class="fw-bold">${Object.keys(e)[0]}</span>: ${e[Object.keys(e)[0]]}`);
            error(`${Object.keys(e)[0]}: ${e[Object.keys(e)[0]]}`);
            return;
        }
    }

    // Mapping sections
    let id = 1;
    profile.groups.forEach(group => {
        group.sections.forEach(section => {
            section.id = id;
            id++;
        })
    })
    const sectionsById = new Map(profile.groups.flatMap(group => group.sections.map(section => [section.id, section])));

    // Selectors
    const positionSelects = [
        document.querySelector('#position-field > select')
        , document.querySelector('#position-new-field > select')
        , document.querySelector('#position-object-field > select')];
    const departmentSelect = document.querySelector('#department-field > select');
    const departmentCodeSelect = document.querySelector('#department-code-field > select');
    const statementTypeSelect = document.querySelector('#statement-type');
    const output = document.querySelector('#generated-statement');

    removeOptions([...positionSelects, departmentSelect, departmentCodeSelect, statementTypeSelect]);

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
        const departmentOption = Section(null, { id: i + 1, name: department });
        departmentSelect.appendChild(departmentOption);
    });

    // Init list of department codes
    profile.departmentsCodes.forEach((code, i) => {
        const codeOption = Section(null, { id: i + 1, name: code });
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

    document.getElementById('application-form').addEventListener('submit', e => {
        trace("Generating statement...");
        e.preventDefault();
        trace("Clearing output...");
        while (output.firstChild) {
            output.removeChild(output.lastChild);
        }
    
        const camelize = s => s.replace(/-./g, x => x[1].toUpperCase())
        const selectFields = (d) => {
            trace("Collecting fields data...");
            const obj = {};
            currentFields.forEach(k => {
                const s = document.querySelector(`#${k}-field > select`);
                const val = s !== null ? s.options[d.get(k) - 1].textContent : d.get(k);
                obj[camelize(k)] = val;
                trace(`Field ${camelize(k)}: ${val}`);
            });
            obj['date'] = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            obj['stationNumber'] = document.querySelector('#station-number').value;
            obj['time'] = document.querySelector('#timer-output').value || '00:00:00';
            obj['spaces'] = " ".repeat(Math.max((31 - obj['stationNumber'].length) / 2, 0));
            trace(`Field data: ${obj['date']}`);
            trace(`Field time: ${obj['time']}`);
            trace(`Field stationNumber: ${obj['stationNumber']}`);
            trace(`Field spaces: " " x ${Math.max((31 - obj['stationNumber'].length) / 2, 0)}`);
            if (!import.meta.env.PROD) {
                console.log(obj);
            }
            return obj;
        };
    
        const data = new FormData(e.target);
        const dataObject = selectFields(data);
    
        const section = sectionsById.get(parseInt(statementTypeSelect.value));
        
        trace(`Working with section ${section.name}...`);
        section.categories.forEach(category => {
            trace(`Generating category ${category.name}...`);
            const categoryElement = Category(category.name);
    
            category.subcategories.forEach(sub => {
                trace(`Generating subcategory ${sub.name}...`);
                const subcategoryElement = Subcategory(sub.name);
    
                sub.items.forEach(item => {
                    const { type, templates } = item;
                    const row = type === 'row' ? Row() : null;
                    trace(`Generating ${type} item...`);
    
                    templates.forEach(templateData => {
                        trace(`Working with template "${templateData.title}"...`);
                        const { title, template } = templateData;
                        trace(`Replacing macros...`);
                        const cardTemplate = template.replace(/\$\{{2}([\w]+)\}{2}/g, (_, key) => dataObject[key]);
                        trace(`Generating card...`);
                        const card = Card(title, cardTemplate);
    
                        if (row) {
                            trace(`Adding card to row...`);
                            row.appendChild(RowItem(card));
                        } else {
                            trace(`Adding card to subcategory ${sub.name}...`);
                            subcategoryElement.appendChild(card);
                        }
                    });
    
                    if (row) {
                        trace(`Adding row to subcategory ${sub.name}...`);
                        subcategoryElement.appendChild(row);
                    }
                });
    
                trace(`Adding subcategory ${sub.name} to category ${category.name}...`);
                categoryElement.appendChild(subcategoryElement);
            });

            trace(`Adding category ${category.name} to output...`);
            output.appendChild(categoryElement);
        });

        trace(`Statement "${section.name}" generated`);
    });

    await info(`The profile used is ${profile.profile}`)
}