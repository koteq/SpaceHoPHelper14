import 'https://unpkg.com/sceditor@3.2.0/minified/sceditor.min.js';
import './ss14-bbcode-format.js';
import 'https://unpkg.com/sceditor@3.2.0/minified/plugins/undo.js';
import 'https://unpkg.com/sceditor@3.2.0/minified/icons/monocons.js';
import 'https://unpkg.com/sceditor@3.2.0/languages/ru.js';
import { showToast, saveContentToFile } from './utils.js';

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

sceditor.locale['ru'].Print = 'Скачать для печати';
sceditor.locale['ru']['Bold italic'] = 'Жирный курсив';
sceditor.locale['ru']['Header 1'] = 'Заголовок 1';
sceditor.locale['ru']['Header 2'] = 'Заголовок 2';
sceditor.locale['ru']['Header 3'] = 'Заголовок 3';


/*
import * as dom from 'https://unpkg.com/sceditor@3.2.0/src/lib/dom.js';

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
*/

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


  // See https://github.com/space-syndicate/space-station-14/blob/master/Content.Client/Paper/UI/PaperWindow.xaml.cs#L18
  sceditor.create(element, {
    icons: 'monocons',
    format: 'bbcode',
    plugins: 'undo',
    style: './css/editor.css',
    toolbar: 'bold,italic,bolditalic,size,color,removeformat|source|print,copy', //|bulletlist,orderedlist
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
