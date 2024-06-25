import 'sceditor/minified/sceditor.min.js'

export function editorsInit() {
    document.querySelectorAll('.card-text.editable-content.p-3').forEach(field => {
        field.style.height = field.scrollHeight + 5 + 'px';
        sceditor.create(field, {
            format: 'bbcode',
            style: 'sceditor/minified/themes/content/default.min.css',
            toolbar: 'bold,italic,underline|source',
	        locale: 'ru-RU'
        });
    });
}

export function removeEditor(element) {
    console.log(element);
    console.log(sceditor.instance(element))
}