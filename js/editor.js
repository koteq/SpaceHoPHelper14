import 'https://unpkg.com/sceditor@3.2.0/minified/sceditor.min.js';
import 'https://unpkg.com/sceditor@3.2.0/minified/plugins/undo.js';
import 'https://unpkg.com/sceditor@3.2.0/minified/formats/bbcode.js';
import 'https://unpkg.com/sceditor@3.2.0/minified/icons/monocons.js';
import 'https://unpkg.com/sceditor@3.2.0/languages/ru.js';
import * as dom from 'https://unpkg.com/sceditor@3.2.0/src/lib/dom.js';
import { showToast, saveContentToFile } from './utils.js';

// See https://github.com/space-syndicate/space-station-14/blob/master/Content.Client/Paper/UI/PaperWindow.xaml.cs#L18

[
  'b',
  'i',
  'u',
  's',
  'sub',
  'sup',
  'font',
  'size',
  // 'color',
  'ul',
  'list',
  'ol',
  'li',
  '*',
  'table',
  'tr',
  'th',
  'td',
  'emoticon',
  'hr',
  'img',
  'url',
  'email',
  'quote',
  'code',
  'left',
  'center',
  'right',
  'justify',
  'youtube',
  'rtl',
  'ltr',
  'ignore',
].map((name) => sceditor.formats.bbcode.remove(name));

sceditor.locale['ru'].Print = 'Скачать для печати';

sceditor.command.set('bold', {
  txtExec: ['[bold]', '[/bold]'],
});
sceditor.command.set('italic', {
  txtExec: ['[italic]', '[/italic]'],
});
sceditor.command.set('orderedlist', {
  exec: function (caller, selected) {
    let i = 1;
    this.insertText(`${i++}. ` + selected.split(/\r?\n/).join(`${i++}. `));
  },
  txtExec: function (caller, selected) {
    let i = 1;
    this.insertText(`${i++}. ` + selected.split(/\r?\n/).join(`${i++}. `));
  },
});
sceditor.command.set('bulletlist', {
  txtExec: function (caller, selected) {
    this.insertText('[bullet/]' + selected.split(/\r?\n/).join('[bullet/]'));
  },
});
sceditor.command.set('horizontalrule', {
  txtExec: ['============================================='],
});
// sceditor.command.set('code', {
//   exec: function () {
//     this.wysiwygEditorInsertHtml(
//         '<code>',
//         '</code>'
//     );
//   },
//   txtExec: ['[mono]', '[/mono]'],
// });
sceditor.command.set('size', {
  _dropDown: function (editor, caller, callback) {
    const content = dom.createElement('div');

    dom.on(content, 'click', 'a', function (e) {
      callback(dom.data(this, 'size'));
      editor.closeDropDown(true);
      e.preventDefault();
    });

    for (let i = 1; i <= 3; i++) {
      dom.appendChild(
        content,
        dom.parseHTML(
          `<a class="sceditor-fontsize-option" data-size="${i}" href="#"><font size="${7 - i}">Заголовок ${i}</font></a>`
        )
      );
    }

    editor.createDropDown(caller, 'fontsize-picker', content);
  },
});
sceditor.command.set('color', {
  _dropDown: function (editor, caller, callback) {
    const content = dom.createElement('div');
    const cmd = sceditor.command.get('color');
    let html = '';

    if (!cmd._htmlCache) {
      [
        [
          [
            ['#3167bd', 'Синяя ручка'],
            ['purple', 'Фиолетовая ручка'],
          ],
        ],
        [
          [
            ['#228B22', 'Зеленый ЦК'],
            ['#1b487e', 'Синий НТ'],
            ['#d4a406', 'Золотой'],
          ],
        ],
        [
          [
            ['#ab1f1f', 'Служба безопасности'],
            ['#9c593a', 'Снабжение'],
            ['#00a8a8', 'Медицинский'],
            ['#663a9c', 'Научный'],
            ['#cc9900', 'Инженерный'],
            ['#699811', 'Сервисный'],
          ],
        ],
      ].map(([colors]) => {
        const htmlColors = colors
          .map(
            ([color, name]) => `<a
              href="#"
              class="sceditor-color-option"
              title="${name}"
              style="background-color: ${color}; display: inline-block; vertical-align: middle;"
              data-color="${color}"
            ></a>`
          )
          .join('');
        html += `<div>${htmlColors}</div>`;
      });
      html += '<br>';

      editor.opts.colors.split('|').forEach(function (column) {
        html += '<div class="sceditor-color-column">';

        column.split(',').forEach(function (color) {
          html +=
            '<a href="#" class="sceditor-color-option"' +
            ' style="background-color: ' +
            color +
            '"' +
            ' data-color="' +
            color +
            '"></a>';
        });

        html += '</div>';
      });

      cmd._htmlCache = html;
    }

    dom.appendChild(content, dom.parseHTML(cmd._htmlCache));

    dom.on(content, 'click', 'a', function (e) {
      callback(dom.data(this, 'color'));
      editor.closeDropDown(true);
      e.preventDefault();
    });

    editor.createDropDown(caller, 'color-picker', content);
  },
});
sceditor.command.set('copy', {
  exec: function () {
    navigator.clipboard
      .writeText(this.val())
      .then(() => showToast('toastCopy'))
      .catch((error) => console.error('Error copying:', error));
  },
});
sceditor.command.set('print', {
  exec: function (target) {
    const cardTitle = target
      .closest('.card')
      .querySelector('.card-title')
      .innerText.trim();
    saveContentToFile(this.val(), `${cardTitle}.txt`);
  },
});

sceditor.formats.bbcode.set('bold', {
  tags: {
    b: null,
    strong: null,
  },
  styles: {
    'font-weight': ['bold', 'bolder', '700', '800', '900'],
  },
  format: '[bold]{0}[/bold]',
  html: '<strong>{0}</strong>',
});
sceditor.formats.bbcode.set('italic', {
  tags: {
    i: null,
    em: null,
  },
  styles: {
    'font-style': ['italic', 'oblique'],
  },
  format: '[italic]{0}[/italic]',
  html: '<em>{0}</em>',
});
sceditor.formats.bbcode.set('bolditalic', {
  format: '[bolditalic]{0}[/bolditalic]',
  html: '<strong><em>{0}</em></strong>',
});
// sceditor.formats.bbcode.set('mono', {
//   tags: {
//     code: null,
//   },
//   format: '[mono]{0}[/mono]',
//   html: '<code>{0}</code>',
// });
sceditor.formats.bbcode.set('head', {
  tags: {
    h1: null,
    h2: null,
    h3: null,
    h4: null,
    h5: null,
    h6: null,
    font: {
      size: null,
    },
  },
  styles: {
    'font-size': null,
  },
  format: function (element, content) {
    const dom = sceditor.dom;
    const css = dom.css;
    const attr = dom.attr;

    let fontSize = attr(element, 'size');
    let size = 2;

    if (!fontSize) {
      fontSize = css(element, 'fontSize');
    }

    // Most browsers return px value but IE returns 1-7
    if (fontSize.indexOf('px') > -1) {
      // convert size to an int
      fontSize = fontSize.replace('px', '') - 0;

      if (fontSize < 12) {
        size = 1;
      }
      if (fontSize > 15) {
        size = 3;
      }
      if (fontSize > 17) {
        size = 4;
      }
      if (fontSize > 23) {
        size = 5;
      }
      if (fontSize > 31) {
        size = 6;
      }
      if (fontSize > 47) {
        size = 7;
      }
    } else {
      size = fontSize;
    }

    return '[head=' + size + ']' + content + '[/head]';
  },
  html: '<font size="{defaultattr}">{!0}</font>',
});
sceditor.formats.bbcode.set('bullet', {
  allowsEmpty: true,
  isSelfClosing: true,
  html: ' · {0}',
});
sceditor.formats.bbcode.set('bullet/', {
  allowsEmpty: true,
  isSelfClosing: true,
  html: ' · {0}',
});

// TODO hide slash in `\[  ] FooBar`

export function initBbcodeEditor(element) {
  //   element.value = `[color=#b8972d]███[/color][color=#1d7a1d]░███░░░░██░░░░[/color][color=#b8972d]                          ★ ★ ★[/color][color=#1d7a1d]
  // ░██░████░░░██░░░░           [head=3]Бланк документа[/head]
  // ░░█░██░██░░██░█░░                   [head=3]NanoTrasen[/head]
  // ░░░░██░░██░██░██░                        [bold]ЦК-КОМ[/bold]
  // ░░░░██░░░████░[/color][color=#b8972d]███[/color][color=#b8972d]                          ★ ★ ★[/color]
  // ==================================================[bold]
  //                                          ЦЕЛЬ СТАНЦИИ[/bold]
  // ==================================================[bold]
  // Цель смены станции Dev — приспособить станцию к мощным гиперэнергетическим потокам.[/bold]
  //
  // Необходимо пристроить по комнате, далее именуемой как “бункер”, следующим отделам: Службы Безопасности, Медицинскому и Командному. В них экипаж станции мог бы укрыться от последствий гиперэнергетических потоков.
  //
  // Общие требования к бункерам:
  // 1. Минимальный размер 25м².
  // 2. Укреплённые стены.
  // 3. Вход через два непрозрачных шлюза с соответствующим отделу доступом.
  // 4. От четырех кресел пилота.
  // 5. Содержать базовые лекарства в виде таблеток со справкой о их назначении и наборы от механических повреждений.
  // 6. Запасы провизии с расчетом на четыре человека, на срок от 72 часов.
  // 7. Автономное питание и канистры с воздухом и кислородом.
  // 8. Шкафчики со снаряжением для биологической и радиационной защиты. Так же аварийные скафандры EVA и костюм сапёра.
  //
  // Бункер отдела Службы Безопасности должен так же включать в себя два Силовика и три Раздатчика летальных ружейных патронов.
  // Бункер Медицинского отдела должен дополнительно оснащаться Дефиблилятором и зарядником батарей.
  //
  // Слава NanoTrasen!
  // ==================================================[italic]
  //                                       Место для печати[/italic]`;
  // document.querySelectorAll('.card-text.editable-content.p-3').forEach(field => {
  // element.style.height = element.scrollHeight + 5 + 'px';
  sceditor.create(element, {
    icons: 'monocons',
    format: 'bbcode',
    plugins: 'undo',
    style: './css/editor.css',
    toolbar: 'bold,italic,size,color,removeformat|source|print,copy', //|bulletlist,orderedlist
    locale: 'ru-RU',
    emoticonsEnabled: false,
    width: 503,
    resizeMinWidth: 503,
    resizeMaxWidth: 503 * 3,
    height: 635,
    resizeMinHeight: 635,
    resizeMaxHeight: 635 * 3,
  });
}
