//▆▆▆▆▆▆ Создание объекта с настройками для каждого типа заявления ▆▆▆▆▆▆▆▆▆▆
const statementTypeSettings = {
    'vrio_captain_1': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'vrio_head_2': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true },
    'passenger_employment_8': { fullNameLabel: true, fullName: true, newPositionSelectLabel: true, newPositionSelect: true, departmentLabel: true, department: true },
    'new_profession_9': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, newPositionSelectLabel: true, newPositionSelect: true, departmentLabel: true, department: true },
    'dismissal_6': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true },
    'dismissal_order_22': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'new_access_10': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentCodeLabel: true, departmentCode: true },
    'delete_access_7': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'security_equipment_11': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true },
    'captains_order_12': { fullNameLabel: true, fullName: true, departmentLabel: true, department: true, departmentCodeLabel: true, departmentCode: true, stationGoalLabel: true, stationGoal: true, fullNameObjectLabel: true, fullNameObject: true },
    'department_performance_report_3': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'worker_report_4': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true, departmentCodeLabel: true, departmentCode: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'station_status_13': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, stationGoalLabel: true, stationGoal: true },
    'request_swat_14': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'request_bonus_15': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'diploma_16': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'cargo_order_17': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentCodeLabel: true, departmentCode: true },
    'production_order_18': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentCodeLabel: true, departmentCode: true },
    'upgrade_prof_certificate_19': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'complaint_20': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'request_to_ck_21': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'senate_report_5': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'standart_form_23': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true, departmentCodeLabel: true, departmentCode: true },
    'violations_eliminated_24': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'movement_permit_25': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'request_threat_level_26': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'request_shuttle_27': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'appeal_28': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'get_use_equipment_29': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'complaint_labor_discipline_30': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true },
    'shuttle_registration_31': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'order_special_equipment_32': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'object_study_report_33': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true, departmentCodeLabel: true, departmentCode: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'internal_investigation_report_34': { fullNameLabel: true, fullName: true, departmentCodeLabel: true, departmentCode: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'start_trial_35': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true },
    'court_decision_36': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'agency_request_for_documents_37': { fullNameLabel: true, fullName: true, departmentCodeLabel: true, departmentCode: true },
    'cassation_appeal_38': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentCodeLabel: true, departmentCode: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'offense_complaint_39': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'judicial_verdict_40': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'offense_evidence_41': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'indictment_42': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'search_warrant_43': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'parole_process_44': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, newPositionSelectLabel: true, newPositionSelect: true },
    'weapon_permit_45': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'investigation_report_46': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentCodeLabel: true, departmentCode: true },
    'drug_receipt_47': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'health_certificate_48': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'medical_intervention_49': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentCodeLabel: true, departmentCode: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'euthanasia_request_50': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'death_certificate_51': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'body_disposal_52': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'building_permit_53': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentCodeLabel: true, departmentCode: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'tech_condition_report_54': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'construct_work_request_55': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentCodeLabel: true, departmentCode: true },
    'experiment_report_56': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'creature_rights_57': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true },
    'modernization_request_58': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentCodeLabel: true, departmentCode: true, departmentLabel: true, department: true },
    'disposal_report_59': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'custom_cargo_order_60': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentCodeLabel: true, departmentCode: true },
    'expedition_report_61': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'marriage_process_62': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'bill_of_fare_63': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'request_pda_id_64': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true },
    'promotion_65': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, newPositionSelectLabel: true, newPositionSelect: true, departmentLabel: true, department: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'nonstandard_position_66': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, departmentLabel: true, department: true, fullNameObjectLabel: true, fullNameObject: true },
    'procedure_violation_67': { fullNameLabel: true, fullName: true, positionSelectLabel: true, positionSelect: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },
    'operator_CC_forms_68': { fullNameLabel: true, fullName: true },
    'syndicate_forms_69': { fullNameLabel: true, fullName: true, fullNameObjectLabel: true, fullNameObject: true, positionObjectSelectLabel: true, positionObjectSelect: true },



    // Добавьте настройки для остальных типов заявления
    /*
        'x': { fullNameLabel: true, fullName: true, positionSelectLabel: false, positionSelect: false, newPositionSelectLabel: false, newPositionSelect: false, departmentLabel: false, department: false, ...}
    */
};


//▞▞▞▞▞▞▞▞▞▞▞▞▞▞▞▞▞▞▞▞▞▞ ЗАЯВЛЕНИЯ ▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚
document.addEventListener('DOMContentLoaded', function () {
    // 🗎 Документ и его тип
    const form = document.getElementById('application-form');
    const statementContainer = document.getElementById('generated-statement');
    const statementTypeSelect = document.getElementById('statement-type');

    // 📇 Значение в полях "Номер станции" и "Ваше имя"
    const yourName = document.getElementById('your-name');
    const stationNumber = document.getElementById('station-number');

    // 📇 Значение в дополнительных полях
    const fullNameLabel = document.getElementById('full-name-label');
    const fullName = document.getElementById('full-name');
    const positionSelect = document.getElementById('position');
    const positionSelectLabel = document.getElementById('position-label');
    const newPositionSelect = document.getElementById('position-new');
    const newPositionSelectLabel = document.getElementById('position-new-label');
    const departmentLabel = document.getElementById('department-label');
    const department = document.getElementById('department');
    const departmentCodeLabel = document.getElementById('department-code-label');
    const departmentCode = document.getElementById('department-code');
    const stationGoalLabel = document.getElementById('station-goal-label');
    const stationGoal = document.getElementById('station-goal');
    const fullNameObjectLabel = document.getElementById('full-name-object-label');
    const fullNameObject = document.getElementById('full-name-object');
    const positionObjectSelect = document.getElementById('position-object');
    const positionObjectSelectLabel = document.getElementById('position-object-label');

    //▆▆▆▆ ⏱️ Работа таймера "Время от начала смены" ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆
    const timeInput = document.getElementById("time-input");
    const timerOutput = document.getElementById("timer-output");
    const startButton = document.getElementById("start-timer");
    const addNamesButton = document.getElementById("add-names-button");

    let timerFromStart = 0;
    let initialSeconds = 0;
    let countdown;
    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const sec = seconds % 60;

        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    }
    function convertInputToSeconds(inputValue) {
        //проверка на неверный формат
        const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
        let inputValueTime = inputValue;
        if (!timeRegex.test(inputValueTime)) {
            inputValueTime = "000000"
            showToast('toastFailTimer'); //toast
        }
        else {
            showToast('toastStartTimer'); // toast
        }

        console.log("TIME " + inputValueTime);
        inputValueTime = inputValueTime.replace(/\D/g, '');

        // конвертируем 6 цифр "013324"
        const hh = inputValueTime.slice(0, 2);
        const mm = inputValueTime.slice(2, 4);
        const ss = inputValueTime.slice(4, 6);

        return (parseInt(hh) * 3600) + (parseInt(mm) * 60) + parseInt(ss);
    }
    function startTimer() {
        // Сбрасываем предыдущий таймер
        clearInterval(countdown);

        const inputTime = timeInput.value ? timeInput.value : '00:00:00';
        initialSeconds = convertInputToSeconds(inputTime);
        let startTime = Date.now() / 1000;


        countdown = setInterval(function () {
            const currentTime = Date.now() / 1000;
            const elapsedSeconds = Math.floor(currentTime - startTime);

            timerFromStart = formatTime(initialSeconds + elapsedSeconds);
            timerOutput.value = timerFromStart;
        }, 1000);
    }
    startButton.addEventListener("click", startTimer);

    //По нажатию на Enter в поле ввода времени запускаем таймер
    timeInput.addEventListener("keydown", (event) => {
        if (event.isComposing || event.keyCode === 13) {
            startTimer()
        }
    });
    //▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆



    //▆▆▆▆▆ Добавить список имен ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆
    function addUniqueValuesToList() {
        // Получаем элементы
        var inputAddNames = document.getElementById('addNamesTextArea');
        var datalist = document.getElementById('datalistOptionsFullName');
        var excludedValuesAddNames = ["Инженерный отдел", "Медицинский отдел", "Отдел снабжения", "Сервисный отдел", "Научный отдел", "Служба безопасности", "Юридический департамент", "Командование"];

        // Получаем текущий список значений из datalist
        var datalistOptions = Array.from(datalist.getElementsByTagName('option'));
        var values = Array.from(datalistOptions).map(option => option.value);

        // Получаем новое значение из текстового поля
        var newValues = inputAddNames.value.trim().split('\n').map(value => value.trim());

        // Проверяем, существует ли уже такое значение
        newValues.forEach(newValue => {
            if (!excludedValuesAddNames.includes(newValue) && values.indexOf(newValue) === -1 && newValue !== "") {
                // Создаем новый элемент option и добавляем его в datalist
                var option = document.createElement('option');
                option.value = newValue;
                datalist.appendChild(option);
                values.push(newValue); // Добавляем значение в массив для проверки уникальности
                inputAddNames.value = ""; // Очищаем форму
                showToast('toastAddNames'); // toast
            }
        });
    }
    addNamesButton.addEventListener("click", addUniqueValuesToList);
    //▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆



    //▆▆▆▆✅ КНОПКА СОЗДАТЬ ЗАЯВЛЕНИЕ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращает стандартное действие отправки формы
        let statementTemplate = ''; // очищаем поле вывода заявления

        // Тип заявления из выпадающего списка
        const statementType = statementTypeSelect.value;

        //Основные поля "Номер станции", "Ваше имя", "Время от начала смены"
        const stationNumber = document.getElementById('station-number').value;
        const yourName = document.getElementById('your-name').value;

        //Поля "Полное имя", "Цель станции", "Полное имя объекта"
        const fullName = document.getElementById('full-name').value;
        const stationGoal = document.getElementById('station-goal').value;
        const fullNameObject = document.getElementById('full-name-object').value;

        //Расчет пробелов для строк наименования станции
        let maxLength = 31;
        let addSpaces = "\xa0".repeat(Math.max((maxLength - stationNumber.length) / 2, 0));

        //Добавляем новое значение в datalists для полей ФИО, если оно уникально
        var datalistOptionsFullName = document.getElementById('datalistOptionsFullName');
        // Получаем текущий список значений из datalist, если значение уникально – добавляем в список
        var datalistOptions = Array.from(datalistOptionsFullName.getElementsByTagName('option'));
        var values = Array.from(datalistOptions).map(option => option.value);
        if (values.indexOf(fullName) === -1) {
            var option = document.createElement('option');
            option.value = fullName;
            datalistOptionsFullName.appendChild(option);
        }
        if (values.indexOf(fullNameObject) === -1) {
            var option = document.createElement('option');
            option.value = fullNameObject;
            datalistOptionsFullName.appendChild(option);
        }





        //ВРиО Капитан
        if (statementType === '1') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                            ВрИО Капитана
                        </h4>
                        <div class="d-flex">
                            <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                            <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card-text editable-content p-3" contenteditable="true">
            [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                            [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                            [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                            [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                            [color=#1b487e]░░░░██░░░████░███[/color]<br>
                            =============================================<br>
                            \xa0\xa0ЗАЯВЛЕНИЕ О НАЗНАЧЕНИИ НА ВРИО КАПИТАНА<br>
                            =============================================<br>
                            Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                            Составитель документа: <span class="maFi">${fullName}</span> <br>
                            Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                            <br>
                            Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу согласовать мое назначение на должность [italic]временно исполняющего обязанности[/italic] [bold][color=#1b487e]Капитана[/color][/bold].<br>
                            <br>
                            При вступлении в должность обязуюсь следовать Стандартным Рабочим Процедурам и до появления Капитана с Центрального Командования обеспечивать порядок и управление станцией, обеспечивать сохранность вверяемых мне особо ценных предметов и снаряжения.<br>
                            <br>
                            По прибытии Капитана с Центрального Командования обязуюсь сдать повышенный доступ, особо ценные предметы и снаряжение.<br>
                            <br>
                            Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                            =============================================<br>
                            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                        </div>
                    </div>
                </div>
            `;
        } //ВРиО Глава отдела
        else if (statementType === '2') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Заявление на ВрИО главы отдела
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                    [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                                    [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                    [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                    [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                                    [color=#1b487e]░░░░██░░░████░███[/color]<br>
                                    =============================================<br>
                                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ О НАЗНАЧЕНИИ<br>
                                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0НА ВРИО ГЛАВЫ ОТДЕЛА<br>
                                    =============================================<br>
                                    Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                    Составитель документа: <span class="maFi">${fullName}</span> <br>
                                    Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                    <br>
                                    Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу согласовать мое назначение на должность [italic]временно исполняющего обязанности[/italic] [bold][color=#1b487e]Главы <span class="maFi">${departmentType}</span>[/color][/bold].<br>
                                    <br>
                                    При вступлении в должность обязуюсь следовать Стандартным Рабочим Процедурам и до появления Главы <span class="maFi">${departmentType}</span> с Центрального Командования обеспечивать порядок и управление отделом, обеспечивать сохранность вверяемых мне особо ценных предметов и снаряжения.<br>
                                    <br>
                                    По прибытии Главы отдела с Центрального Командования обязуюсь сдать повышенный доступ, особо ценные предметы и снаряжение.<br>
                                    <br>
                                    Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                                    =============================================<br>
                                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Приказ капитана о принудительном назначении главы отдела
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                                    [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                    [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                    [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                                    [color=#1b487e]░░░░██░░░████░███[/color]<br>
                                    =============================================<br>
                                    \xa0\xa0\xa0\xa0ПРИКАЗ О НАЗНАЧЕНИИ ВРИО ГЛАВЫ ОТДЕЛА<br>
                                    =============================================<br>
                                    Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                    Составитель документа: <span class="maFi">${yourName}</span><br>
                                    Должность составителя: Капитан<br>
                                    <br>
                                    Я, [bold][color=#3167bd]${yourName}[/color][/bold], в должности [italic][color=#1b487e]Капитан[/color][/italic], в соответствии с положениями [italic][color=SteelBlue]4 пункта "Процедуры назначения ВрИО Главы отдела"[/color][/italic], принимаю следующее решение:<br>
                                    <br>
                                    1. Назначить [italic]временно исполняющим обязанности[/italic] [bold][color=Indigo]Главы <span class="maFi">${departmentType}</span>[/color][/bold] сотрудника [color=purple][bold]<span class="maFi">${fullName}</span>[/bold][/color], занимающего должность [italic][color=Indigo]<span class="maFi">${selectedPosition}</span>[/color][/italic] (далее – [italic]назначенный сотрудник[/italic]).
                                    <br>
                                    2. Назначенный сотрудник обязуется следовать Стандартным Рабочим Процедурам и обеспечивать порядок и управление отделом до появления Главы отдела с Центрального Командования.
                                    <br>
                                    3. Назначенный сотрудник принимает на себя ответственность за сохранность вверяемых ему особо ценных предметов и снаряжения.
                                    <br>
                                    4. По прибытии Главы отдела с Центрального Командования назначенный сотрудник обязуется сдать повышенный доступ, особо ценные предметы и снаряжение.
                                    <br>
                                    5. Настоящий приказ вступает в силу с момента его подписания.
                                    <br><br>
                                    [italic][color=DarkGray]Назначенный сотрудник должен быть уведомлен о своем назначении, а также получить копию данного документа в кратчайшие сроки.<br>
                                    Внимание! Отказ от выполнения данного приказа может повлечь за собой ответственность согласно 207 статье Корпоративного Закона и возможное увольнение сотрудника.[/italic][/color]<br>
                                    <br>
                                    Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                                    =============================================<br>
                                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
            `;
        }
        //Заявление о трудоустройстве пассажира (расширенное, лаконичное)
        else if (statementType === '8') {
            const newSelectedPosition = newPositionSelect.options[newPositionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Лаконичное заявление
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ О ТРУДОУСТРОЙСТВЕ ПАССАЖИРА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: Пассажир<br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], прошу назначить меня сотрудником [color=#3167bd][italic]<span class="maFi">${departmentType}</span>[/italic][/color] на должность [bold][color=#3167bd]${newSelectedPosition}[/color][/bold].
                        <br>Обязуюсь следовать Стандартным Рабочим Процедурам отдела.<br>
                        <br><br><br><br><br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>

                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Полное заявление с анкетой
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ О ТРУДОУСТРОЙСТВЕ ПАССАЖИРА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: Пассажир<br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], прошу назначить меня сотрудником [color=#3167bd][italic]<span class="maFi">${departmentType}</span>[/italic][/color] на должность [bold][color=#3167bd]${newSelectedPosition}[/color][/bold].
                        <br>Обязуюсь следовать Стандартным Рабочим Процедурам отдела.
                        <br><br>
                        [bold]Причина трудоустройства:[/bold] [color=#3167bd][italic]<br>
                        <span class="edFi"><почему вы хотите получить данную должность></span><br>[/italic][/color]<br>
                        [bold]Опыт, навыки и компетенции:[/bold] [color=#3167bd][italic]<br>
                        <span class="edFi"><уровень образования | навыки, необходимые для должности | опыт работы в других организациях></span><br>[/italic][/color]<br>
                        [bold]Личные качества и увлечения:[/bold] [color=#3167bd][italic]<br>
                        <span class="edFi"><основные достоинства и недостатки| хобби | наличие ограничений по здоровью></span><br>[/italic][/color]<br>

                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3" title="feat. Stratuzzz">
                        РП Анкета ✍️
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b67a5]█▄ █ ▀█▀    [head=3]Заявление на получение должности[/head]<br>
                                █ ▀█     █        Ответственный за найм:[/color] <span class="maFi">${yourName}</span><br>
                                ──────────────────────────────────────────
                                [color=#aaaaaa]▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀[/color]<br>
                                [head=1]Анкета[/head]<br>
                                [head=3]ФИ(О): <span class="maFi">${fullName}</span>[/head]<br>
                                [color=#aaaaaa]▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬[/color]<br>
                                [head=3]ПРОФЕССИОНАЛЬНЫЕ НАВЫКИ[/head]  [color=#e5e5e5]█████████████[/color]<br>
                                [bullet/]<span class="edFi"><навык></span><br>
                                [bullet/]<span class="edFi"><навык></span><br>
                                [bullet/]<span class="edFi"><навык></span><br>
                                <br>
                                <br>
                                [head=3]ОБРАЗОВАНИЕ[/head][color=#e5e5e5]████████████████████████████[/color]<br>
                                [bold]<span class="edFi"><заведение></span>[/bold] - <span class="edFi"><период></span><br>
                                [bullet/]<span class="edFi"><полученное образование></span><br>
                                [bold]<span class="edFi"><заведение></span>[/bold] - <span class="edFi"><период></span><br>
                                [bullet/]<span class="edFi"><полученное образование></span><br>
                                <br>
                                <br>
                                [head=3]ОПЫТ РАБОТЫ[/head][color=#e5e5e5]█████████████████████████████[/color]<br>
                                [bullet/][bold]<span class="edFi"><должность></span>[/bold] - <span class="edFi"><период></span><br>
                                [bullet/][bold]<span class="edFi"><должность></span>[/bold] - <span class="edFi"><период></span><br>
                                [bullet/][bold]<span class="edFi"><должность></span>[/bold] - <span class="edFi"><период></span><br>
                                ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾<br>
                                Пожалуйста, отметьте предпочитаемые должности. Вы можете выставить приоритет получения должности в рамках ([italic]напр. 1 - высший приоритет, 2 - запасной вариант ИЛИ отметьте желаемые должности крестиком, если приоритет для вас не имеет значения[/italic])<br>
                                [bold]Выберите 3 желаемые должности, т.к. не все могут быть доступны.<br>
                                [/bold][color=red]Должности со звёздочкой* могут быть не доступны вам по определённым причинам. Проконсультируйтесь с Главой Персонала[/color]<br>
                                <br>
                                Сервисный отдел:<br>
                                \[  ] Бармен<br>
                                \[  ] Ботаник<br>
                                \[  ] Священник<br>
                                \[  ] Шеф-повар<br>
                                \[  ] Клоун<br>
                                \[  ] Уборщик<br>
                                \[  ] Боксёр<br>
                                \[  ] Зоотехник<br>
                                \[  ] Библиотекарь<br>
                                \[  ] Мим<br>
                                \[  ] Музыкант<br>
                                \[  ] Сервисный ассистент<br>
                                \[  ] Журналист<br>
                                <br>
                                Отдел снабжения:<br>
                                \[  ] Грузчик<br>
                                \[  ] Утилизатор<br>
                                <br>
                                Инженерный отдел:<br>
                                \[  ] Атмосферный техник*<br>
                                \[  ] Инженер<br>
                                \[  ] Технический ассистент<br>
                                <br>
                                Служба безопасности:<br>
                                \[  ] Кадет<br>
                                \[  ] Детектив*<br>
                                \[  ] Офицер*<br>
                                \[  ] Смотритель*<br>
                                <br>
                                Медицинский отдел:<br>
                                \[  ] Химик<br>
                                \[  ] Врач<br>
                                \[  ] Интерн<br>
                                <br>
                                Научно-исследовательский отдел:<br>
                                \[  ] Учёный<br>
                                \[  ] Научный ассистент<br>
                                <br>
                                Иная должность (в случае отсутствия желаемой):<br>
                                \[  ] <span class="edFi"><должность></span><br>
                                <br>
                    </div>
                </div>
            </div>
            `;
        }
        //Заявления о смене должности
        else if (statementType === '9') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const newSelectedPosition = newPositionSelect.options[newPositionSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Лаконичное заявление о смене должности
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                                    [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                    [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                    [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                                    [color=#1b487e]░░░░██░░░████░███[/color]<br>
                                    =============================================<br>
                                    \xa0ЗАЯВЛЕНИЕ О ПЕРЕВОДЕ НА ДРУГУЮ ДОЛЖНОСТЬ<br>
                                    =============================================<br>
                                    Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                    Составитель документа: <span class="maFi">${fullName}</span> <br>
                                    Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                    <br>
                                    Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в текущей должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу назначить меня сотрудником [italic][color=#3167bd]${departmentType}[/color][/italic] на должность [bold][color=MediumBlue]<span class="otFi">${newSelectedPosition}</span>[/color][/bold].<br>
                                    Обязуюсь следовать Стандартным Рабочим Процедурам отдела. <br>
                                    Обязуюсь сдать рабочее снаряжение и экипировку отдела при переводе.<br>
                                    <br>
                                    [bold]Причина смены должности:[/bold] [color=#3167bd][italic]<br>
                                    <span class="edFi"><опишите причину смены должности></span><br>[/italic][/color]<br>
                                    <br>
                                    Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                                    =============================================<br>
                                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Полное заявление о смене должности
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0ЗАЯВЛЕНИЕ О ПЕРЕВОДЕ НА ДРУГУЮ ДОЛЖНОСТЬ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в текущей должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу назначить меня сотрудником [italic][color=#3167bd]${departmentType}[/color][/italic] на должность [bold][color=MediumBlue]<span class="otFi">${newSelectedPosition}</span>[/color][/bold].<br>
                        Подтверждаю, что я успешно прошел обучение и обладаю всеми необходимыми навыками для указанной должности. Обязуюсь предоставить сертификаты о повышении квалификации при необходимости.<br>
                        Обязуюсь следовать Стандартным Рабочим Процедурам отдела. <br>
                        Обязуюсь сдать рабочее снаряжение и экипировку отдела при переводе.<br>
                        <br>
                        [bold]Причина смены должности:[/bold] [color=#3167bd][italic]<br>
                        <span class="edFi"><опишите причину смены должности></span><br>[/italic][/color]<br>
                        [bold]Пройденные образовательные программы:[/bold] [color=#3167bd][italic]<br>
                        <span class="edFi"><укажите пройденные курсы по повышению квалификации></span><br>[/italic][/color]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Свидетельство о повышении квалификации
        else if (statementType === '19') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;

            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Свидетельство о повышении квалификации
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        СВИДЕТЕЛЬСТВО О ПОВЫШЕНИИ КВАЛИФИКАЦИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в текущей должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], свидетельствую, что сотрудник [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в
                        должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], успешно завершил образовательный курс
                        "[bold][color=Navy]<span class="edFi"><НАЗВАНИЕ КУРСА></span>[/color][/bold]" и был аттестован.<br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>

                    </div>
                </div>
            </div>
            `;
        }
        //Заявление об увольнении
        else if (statementType === '6') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Заявление об увольнении
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ЗАЯВЛЕНИЕ ОБ УВОЛЬНЕНИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в текущей должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], хочу уволится с [color=#3167bd][italic]<span class="maFi">${departmentType}</span>[/italic][/color] по причине:[color=#3167bd][italic]<br>
                        <span class="edFi"><опишите причину увольнения></span>
                        <br>[/italic][/color]<br>
                        <br>
                        [italic]Обязуюсь заплатить штраф, установленный условиями расторжения срочного/бессрочного контракта, на станции Центрального Командования.[/italic]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Приказ об увольнении
        else if (statementType === '22') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const departmentType = department.options[department.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Приказ об увольнении
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ ОБ УВОЛЬНЕНИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в текущей должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                        приказываю уволить сотрудника [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][italic],
                        из [italic][color=purple]<span class="maFi">${departmentType}</span>[/color][/italic] по причине:[color=#3167bd][italic]<br>
                        <span class="edFi"><опишите причину (или причины) увольнения сотрудника></span>
                        <br>[/italic][/color]<br>
                        [italic][color=DarkGray]Сотрудник должен быть уведомлен о своем увольнении, после чего он обязан сдать рабочее снаряжение, доступы и экипировку.
                        В случае игнорирования приказа изъятие вещей должно быть произведено с содействием Службы Безопасности.[/color][/italic]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Причины отстранения от должности</h3>
            - совершение преступления тяжкого уровня и выше.<br>
            - многочисленные незначительные нарушения СРП.<br>
            - серьезное нарушение СРП.<br>
            - нахождение на рабочем месте в пьяном виде.<br>
            - отказ следовать законным требования вышестоящего руководителя.<br>
            - критичная некомпетентность сотрудника.<br>
            - смерть сотрудника.<br>
            - бездействие сотрудника.<br>
            - создание токсичной среды на рабочем месте<br>
            - злоупотребление полномочиями.<br>
            - уход с должности по собственному желанию.<br>
         `;
        }
        //Заявление на получение доступа
        else if (statementType === '10') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Запрос доступа для себя
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ ДОСТУПА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу предоставить мне следующие доступы:[color=Navy]<br>
                        1. <span class="edFi"><укажите доступ></span><br>
                        2. <span class="edFi"><укажите доступ></span><br>
                        3. <span class="edFi"><укажите доступ></span><br>
                        4. <span class="edFi"><укажите доступ></span><br>
                        [/color]
                        <br>
                        [bold]Причина получения повышенного доступа[/bold]:<br>
                        <span class="edFi"><опишите причину получения доступов в вышеперечисленные отделы></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Доступ для нескольких сотрудников (от Капитана или Главы отдела)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ОРДЕР НА ПОВЫШЕНИЕ ДОСТУПА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу предоставить доступ(-ы) следующим сотрудникам: [color=Navy]<br>
                        - <span class="edFi"><ФИО></span><br>
                        [bullet/]Доступы: <span class="edFi"><укажите доступы></span><br>
                        <br>
                        - <span class="edFi"><ФИО></span><br>
                        [bullet/]Доступы: <span class="edFi"><укажите доступы></span><br>
                        <br>
                        - сотрудникам отдела <span class="edFi"><наименование отдела></span><br>
                        [bullet/]Доступы: <span class="edFi"><укажите доступы></span><br>
                        [/color]<br>
                        <br>
                        [bold]Причина получения повышенного доступа[/bold]:<br>
                        <span class="edFi"><опишите причину получения доступов в вышеперечисленные отделы></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <h3 style="user-select: none;">Набор стандартных заявлений</h3>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Расширенный доступ 🔓
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ ДОСТУПА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу предоставить мне [color=Navy][bold]расширенный доступ[/bold][/color].<br>
                        <br>
                        [bold]Причина получения повышенного доступа[/bold]: выполнение своих профессиональных обязанностей в соответствии с утвержденными Стандартными Рабочими Процедурами.<br>
                        <br>
                        [bold]Дополнительная информация[/bold]:<br>[italic]Расширенный доступ[/italic] охватывает все категории доступа, за исключением: "Оружейная", "Атмосферный", "Капитан", "Глава персонала", "Главный врач", "Научный руководитель", "Старший инженер", "Квартирмейстер", "Глава службы безопасности".<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3" title="feat. Kartofunych and fern2">
                        Запрос аварийных карт для СБ 🎟️
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ СНАРЯЖЕНИЯ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                        прошу подготовить [bold]ID - карты аварийного доступа[/bold] для следующих сотрудников Службы безопасности:<br>
                        1. <span class="edFi"><ФИО></span><br>
                        2. <span class="edFi"><ФИО></span><br>
                        3. <span class="edFi"><ФИО></span><br>
                        4. <span class="edFi"><ФИО></span><br>
                        5. <span class="edFi"><ФИО></span><br>
                        <br>
                        [bold]Причина получения повышенного доступа[/bold]:<br>При введении красного кода или в случае чрезвычайной ситуации сотрудники Службы Безопасности часто нуждаются в расширенном доступе, получение которого обычно отнимает много времени.<br>Внедрение аварийных карт доступа позволит значительно ускорить реагирование на экстренные ситуации, уменьшить возможные потери и повысить шансы на задержание подозреваемых.<br>
                        <br>
                        [bold]Дополнительная информация[/bold]:<br>[italic]Расширенный доступ[/italic] охватывает все категории доступа, за исключением: "Оружейная", "Атмосферный", "Капитан", "Глава персонала", "Главный врач", "Научный руководитель", "Старший инженер", "Квартирмейстер", "Глава службы безопасности".<br>
                        <br>
                        [color=DimGray][italic]Глава службы безопасности / Смотритель обязаны обеспечить безопасное и ограниченное хранение аварийных карт доступа в месте, недоступном для посторонних лиц.<br>
                        Передача аварийных карт доступа сотрудникам Службы Безопасности осуществляется следующим образом:<br>
                        [bullet/]при [color=blue]CИНЕМ коде[/color] – с устного разрешения Капитана;<br>
                        [bullet/]при [color=red]КРАСНОМ коде[/color][color=black] и выше[/color] – без ограничений.<br>
                        По завершении чрезвычайной ситуации сотрудники обязаны немедленно вернуть карты доступа на их обычное место хранения и уведомить Главу службы безопасности / Смотрителя о возврате. Нарушение данного положения может повлечь за собой применение дисциплинарных мер.[/color][/italic]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Расширенный доступ:</h3>
            <b><i>Все доступы, кроме</i></b>: Оружейная, Атмосферный, Капитан, Глава персонала, Главный врач, Научный руководитель,
            Старший инженер, Квартирмейстер, Глава службы безопасности<br>
            <b><i>Причина получения доступа</i></b>: выполнение рабочих обязанностей<br>
            <br>
            <br>
            <h3 style="user-select: none;">Cтратегические точки:</h3>
            - Мостик (Командование)<br>
            - Отсек с ДАМ (Инженерный)<br>
            - Жилые каюты и рабочие кабинеты должностных лиц (Капитан, Глава персонала, Главный врач, Научный руководитель, Старший инженер, Квартирмейстер, Глава службы безопасности)<br>
            - Химическая лаборатория (Химия)<br>
            - Зоны службы безопасности (Бриг, Служба безопасности)<br>
            - EVA (Глава персонала, Командование)<br>
            - Телекоммуникационные сервера (Командование)<br>
            - Солнечные панели (Инженерный) <br>
            <br>
            <h3 style="user-select: none;">Защищенные точки:</h3>
            - Шаттл представителей ЦК (Командование)<br>
            - Атмосферика (Атмосферный)<br>
            - Токсикология (Медотсек)<br>
            - Хранилище (Командование)<br>
            - Арсенал (Оружейная)<br>
            - Ядро ИИ (Командование)<br>
            - Серверная (Командование)<br>
            - Хранилище плат (Командование)<br>
            - Отсек генератора гравитации (Командование)<br>
            - Отсек с Ускорителем частиц (Инженерный)<br>
            - Каюта капитана (Капитан)<br>
            <br>
            <h3 style="user-select: none;">Все доступы:</h3>
            - Оружейная<br>
            - Капитан<br>
            - Главный врач<br>
            - Глава персонала<br>
            - Юридический<br>
            - Научный руководитель<br>
            - Атмосферный<br>
            - Снабжение<br>
            - Командование<br>
            - Глава службы безопасности<br>
            - Техобслуживание<br>
            - Утилизаторский<br>
            - Бар<br>
            - Церковь<br>
            - Криогеника<br>
            - Гидропоника<br>
            - Медицинский<br>
            - Служба безопасности<br>
            - Бриг<br>
            - Химия<br>
            - Инженерный<br>
            - Уборщик<br>
            - Квартирмейстер<br>
            - Сервис<br>
            - Детектив<br>
            - Старший инженер<br>
            - Внешний<br>
            - Кухня<br>
            - Научный<br>
            - Театр<br>
            `;
        }
        //Приказ о лишении доступа
        else if (statementType === '7') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Приказ о лишении доступа
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ О ЛИШЕНИИ ДОСТУПА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], приказываю лишить сотрудника
                        [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], следующего(-их) доступа(-ов):[color=Navy]<br>
                        1. <span class="edFi"><укажите доступ></span><br>
                        2. <span class="edFi"><укажите доступ></span><br>
                        3. <span class="edFi"><укажите доступ></span><br>
                        4. <span class="edFi"><укажите доступ></span><br>
                        [/color]
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Все доступы:</h3>
            - Оружейная<br>
            - Капитан<br>
            - Главный врач<br>
            - Глава персонала<br>
            - Юридический<br>
            - Научный руководитель<br>
            - Атмосферный<br>
            - Снабжение<br>
            - Командование<br>
            - Глава службы безопасности<br>
            - Техобслуживание<br>
            - Утилизаторский<br>
            - Бар<br>
            - Церковь<br>
            - Криогеника<br>
            - Гидропоника<br>
            - Медицинский<br>
            - Служба безопасности<br>
            - Бриг<br>
            - Химия<br>
            - Инженерный<br>
            - Уборщик<br>
            - Квартирмейстер<br>
            - Сервис<br>
            - Детектив<br>
            - Старший инженер<br>
            - Внешний<br>
            - Кухня<br>
            - Научный<br>
            - Театр<br>
            `;
        }
        //Акт предоставления оборудования для ГСБ
        else if (statementType === '11') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Акт передачи оборудования ГСБ
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#0a2c63][color=red]███[/color][color=#0a2c63]░███░░░░██░░░░[/color] <br>
                        [color=#0a2c63]░██░██[color=red]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#0a2c63]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#0a2c63]░░░░██░░[color=red]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-СБ[/bold]<br>
                        [color=#0a2c63]░░░░██░░░████░[/color][color=red]███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0АКТ ПЕРЕДАЧИ ОБОРУДОВАНИЯ<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ГЛАВЕ СЛУЖБЫ БЕЗОПАСНОСТИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        [color=Navy][bold]Главе службы безопасности ([color=DarkMagenta]<span class="obFi">${fullNameObject}</span>[/color]) было выдано следующее оборудование:[/color][/bold]<br>
                        – [bold][color=Crimson]2 аварийные карты доступа[/color][/bold], обеспечивающие [bold]расширенный доступ[/bold].<br>
                        <br>
                        [bold]Причина[/bold]: предоставление неотложных средств обеспечения безопасности с целью своевременной реакции на угрозы во время чрезвычайных ситуаций.<br>
                        <br>
                        <br>
                        [head=3]Дополнительные инструкции:[/head]<br>
                        [color=#ffffff]=============================================[/color]<br>
                        1) Согласно этому акту, Глава службы безопасности несет полную ответственность за предоставленное ему оборудование.<br>
                        2) Глава службы безопасности должен гарантировать безопасное и ограниченное хранение аварийных карт доступа в месте, недоступном для посторонних лиц.<br>
                        3) Глава службы безопасности имеет право передать карты доступа сотрудникам Службы Безопасности только в случае чрезвычайного положения, требующего усиленных мер безопасности и координации. По окончании чрезвычайного положения, сотрудники обязаны незамедлительно вернуть карты доступа на их обычное место хранения и уведомить Главу о возврате. Возврат карт после окончания чрезвычайного положения является обязательным и несоблюдение этого правила может повлечь за собой дисциплинарные меры.<br>
                        4) По окончании смены Глава службы безопасности обязан сдать предоставленное оборудование на станции Центрального командования.<br>
                        5) Данный акт является конфиденциальным и подлежит строгому соблюдению.<br>
                        [color=#ffffff]=============================================[/color]<br>
                        <br>
                        [bold]Подпись составителя заявления (<span class="maFi">${selectedPosition}</span>):\xa0[/bold][italic][color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color][/italic]
                        [bold]Подпись Главы службы безопасности:\xa0[/bold][italic][color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color][/italic]
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Дополнительное оборудование</h3><br>
            – [bold][color=Crimson]пинпоинтер[/color][/bold], отслеживающий диск ядерной авторизации.<br>
            – [bold][color=Crimson]диск ядерной авторизации[/color][/bold].<br>
            – [bold][color=Crimson]капитанские перчатки[/color][/bold], обеспечивающие полную защиту от электричества.<br>
            `;
        }
        //Приказ Капитана
        else if (statementType === '12') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const departmentType = department.options[department.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Цель смены (приказ для ключевого отдела)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
            [color=#0a2c63][color=#d4af37]███[/color][color=#0a2c63]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
            [color=#0a2c63]░██░██[color=#d4af37]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
            [color=#0a2c63]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
            [color=#0a2c63]░░░░██░░[color=#d4af37]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-<span class="otFi">${selectedDepartmentCode}</span>[/bold]<br>
            [color=#0a2c63]░░░░██░░░████░[/color][color=#d4af37]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
            =============================================<br>
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ КАПИТАНА<br>
            =============================================<br>
            Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
            Составитель документа: <span class="maFi">${fullName}</span> <br>
            Должность составителя: Капитан<br>
            <br>
            [bold]Текущая цель станции:[/bold]<br>
            [color=Navy]<span class="otFi">${stationGoal}</span>[/color]<br>
            <br>
            [color=Navy][bold]Приказываю [color=purple]Главе <span class="maFi">${departmentType}</span>[/color] ([color=DarkMagenta]<span class="obFi">${fullNameObject}</span>[/color]) немедленно приступить к реализации текущей цели станции.[/bold][/color]<br>
            <br>
            [bold]В связи с этим от вас требуется:[/bold]<br>
            1. Составить план реализации цели, определить необходимые ресурсы и технологии.<br>
            2. Распределить задачи между сотрудниками, учитывая их профессиональные навыки и компетенции. Определить четкие сроки выполнения каждой задачи в соответствии с общим планом реализации цели.<br>
            3. Координировать деятельность своего отдела, гарантируя ему необходимую поддержку и ресурсы для успешного выполнения задач в самые короткие сроки. В случае необходимости лично участвовать в достижении поставленной цели. <br>
            4. Осуществлять постоянный мониторинг прогресса в выполнении цели и регулярно информировать об этом через командный канал или по факсу.<br>
            5. Учитывать [bold][color=blue]критерии успешной реализации проекта[/color][/bold], описанные в приложении к приказу ниже.<br>
            <br>
            Вы имеете право обратиться ко мне лично или к руководителям других отделов для получения необходимой помощи в случае, если это потребуется для успешной реализации поставленной задачи.<br>
            [color=purple][bold][italic]Если в течение 5 минут не будет получен ответ, прошу отправить обращение в свободной форме на факс получателю, а также в каюту Капитана.[/italic][/bold][/color]<br>
            <br>
            [italic]Прошу вас отнестись к вашей работе с максимальной ответственностью, тщательно контролируя рабочие процессы и соблюдая все стандарты безопасности NanoTrasen.<br>
            Ваши усилия имеют стратегическое значение для общего успеха станции. Ожидаю, что вы успешно справитесь с поставленными задачами![/italic]<br>
            <br>
            [color=DarkGray]Настоящий приказ вступает в силу с ${currentDate}, ${timerFromStart} от начала смены.[/color]<br>
            <br>
            С уважением,<br>
            Капитан станции [color=Indigo]${stationNumber}[/color]<br>
            [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold]<br>
            [color=#0902cc][italic]<span class="edFi"><ПОДПИСЬ КАПИТАНА></span><br>[/italic][/color]
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            [head=2]Приложение к приказу[/head]<br>
            [color=#ffffff]=============================================[/color]<br>
            [italic]Критерии успешной реализации проекта:[/italic]<br>
            <br>
            1.\xa0<span class="edFi"><опишите критерий></span><br>
            2.\xa0<span class="edFi"><опишите критерий></span><br>
            3.\xa0<span class="edFi"><опишите критерий></span><br>
            4.\xa0<span class="edFi"><опишите критерий></span><br>
            5.\xa0<span class="edFi"><опишите критерий></span><br>
            6.\xa0<span class="edFi"><опишите критерий></span><br>
            <br>
            [italic]Прошу учесть эти дополнительные требования и обеспечить их выполнение в рамках реализации цели.[/italic]<br>
            =============================================<br>
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Цель смены (второстепенный отдел)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
            [color=#0a2c63][color=#d4af37]███[/color][color=#0a2c63]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
            [color=#0a2c63]░██░██[color=#d4af37]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
            [color=#0a2c63]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
            [color=#0a2c63]░░░░██░░[color=#d4af37]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-<span class="otFi">${selectedDepartmentCode}</span>[/bold]<br>
            [color=#0a2c63]░░░░██░░░████░[/color][color=#d4af37]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
            =============================================<br>
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ КАПИТАНА<br>
            =============================================<br>
            Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
            Составитель документа: <span class="maFi">${fullName}</span> <br>
            Должность составителя: Капитан<br>
            <br>
            [bold]Текущая цель станции:[/bold]<br>
            [color=Navy]<span class="otFi">${stationGoal}</span>[/color]<br>
            <br>
            [color=Navy][bold]Приказываю [color=purple]Главе <span class="maFi">${departmentType}</span>[/color] ([color=DarkMagenta]<span class="obFi">${fullNameObject}</span>[/color]) немедленно приступить к выполнению следующих задач:[/bold][/color]<br>
            <br>
            1.[color=Navy][bold]<span class="edFi"><опишите задачу></span><br>[/bold]
            [italic]Дополнительные критерии[/italic][/color]: <span class="edFi"><опишите критерии></span><br>
            <br>
            2. [color=Navy][bold]<span class="edFi"><опишите задачу></span><br>[/bold]
            [italic]Дополнительные критерии[/italic][/color]: <span class="edFi"><опишите критерии></span><br>
            <br>
            3.[color=Navy][bold]<span class="edFi"><опишите задачу></span><br>[/bold]
            [italic]Дополнительные критерии[/italic][/color]: <span class="edFi"><опишите критерии></span><br>
            <br>
            4.[color=Navy][bold]<span class="edFi"><опишите задачу></span><br>[/bold]
            [italic]Дополнительные критерии[/italic][/color]: <span class="edFi"><опишите критерии></span><br>
            <br>
            <br>
            <br>
            [head=3]Инструкция к выполнению приказа[/head]<br>
            [color=#ffffff]=============================================[/color]<br>
            1. Определите шаги и ресурсы, которые необходимы вашему отделу для успешной реализации поставленных задач.<br>
            2. Обеспечьте координацию деятельности вашего отдела в соответствии со Стандартными Рабочими Процедурами и нормами безопасности NanoTrasen.<br>
            3. Проводите непрерывный мониторинг хода выполнения поставленных задач, регулярно информируйте о прогрессе и возможных трудностях.<br>
            4. Обязательно учитывайте [bold][color=blue]дополнительные критерии[/color][/bold] к задачам.<br>
            5. При необходимости обращайтесь ко мне или к руководителям других отделов для получения помощи, либо для согласования совместных действий.<br>
            [color=purple][bold][italic]Если в течение 5 минут не будет получен ответ, прошу отправить обращение в свободной форме на факс получателю, а также в каюту Капитана.[/italic][/bold][/color]<br>
            <br>
            [italic]Ожидаю от вас эффективного выполнения поставленных задач. Не сомневаюсь в вашей способности успешно справиться с ними![/italic]<br>
            <br>
            [color=DarkGray]Настоящий приказ вступает в силу с ${currentDate}, ${timerFromStart} от начала смены.[/color]<br>
            <br>
            С уважением,<br>
            Капитан станции [color=Indigo]${stationNumber}[/color]<br>
            [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold]<br>
            [color=#0902cc][italic]<span class="edFi"><ПОДПИСЬ КАПИТАНА></span><br>[/italic][/color]
            <br>
            =============================================<br>
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Отчет о работе отдела
        else if (statementType === '3') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчёт о работе отдела
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ О РАБОТЕ ОТДЕЛА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        [bold]Количество сотрудников в отделе[/bold]: <span class="edFi"><кол-во></span><br>
                        [bold]Количество стажёров[/bold]: <span class="edFi"><кол-во></span><br>
                        [bold]Неактивные сотрудники отдела[/bold]:<br>
                        1. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span>, <span class="edFi"><ПРИЧИНА></span><br>
                        2. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span>, <span class="edFi"><ПРИЧИНА></span><br>
                        3. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span>, <span class="edFi"><ПРИЧИНА></span><br>
                        [bold]Общее состояние отдела[/bold]: <span class="edFi"><состояние отдела></span><br>
                        <br>
                        [bold]Степень готовности цели[/bold]: <span class="edFi"><статус цели></span><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Причина неактивности</h3>
            - временно нетрудоспособен в связи с болезнью<br>
            - пропавший без вести<br>
            - погиб<br><br>
            <h3 style="user-select: none;">Общее состояние отдела</h3>
            <b>Все хорошо:</b> Общее состояние отдела оценивается как отличное. Команда успешно справляется со всеми задачами.<br>
            <b>Все хорошо:</b> Общее состояние отдела - благоприятное, работа идет по плану, сотрудники продемонстрировали высокую производительность.<br>
            <b>Небольшие проблемы:</b> Отдел функционирует стабильно, но имеются небольшие аспекты, требующие оптимизации и совершенствования.<br>
            <b>Небольшие проблемы:</b> В отделе имеются некоторые мелкие проблемы, требующие внимания и оптимизации, но общее состояние остается удовлетворительным.<br>
            <b>Большие проблемы:</b> В текущий момент имеются серьезные проблемы, затрудняющие нормальное функционирование и производительность отдела.<br>
            <b>Большие проблемы:</b> На текущий момент, отдел столкнулся с серьезными проблемами. Производительность упала, и операции испытывают задержки.<br>
            <b>Критическое состояние:</b> Отдел находится в критическом состоянии. Необходима срочная переорганизации отдела и внедрения корректирующих мер.<br>
            <b>Критическое состояние:</b> Состояние отдела требует серьезного внимания и усилий, поскольку наблюдаются значительные трудности и ухудшение производительности. Процессы находятся на грани коллапса.<br>
            <b>Кадровый дефицит:</b> Отдел столкнулся с кадровым дефицитом, что приводит к серьезным трудностям в выполнении задач и стандартных рабочих процедур.<br>
            <b>Кадровый дефицит:</b> Отдел находится в ситуации кадрового дефицита, что серьезно осложняет его работу. Для нормализации ситуации необходимо немедленно найти и привлечь дополнительный персонал.<br>
            <b>Некомпетентные сотрудники:</b> Отдел испытывает сложности из-за присутствия некомпетентных сотрудников, что негативно влияет на качество и результаты работы.<br>
            <b>Некомпетентные сотрудники:</b> Общее состояние отдела ухудшилось из-за присутствия сотрудников, не обладающих необходимыми навыками и компетенциями. Требуется обучение и переподбор кадров для повышения производительности и качества работы.<br>
            <br>
            <h3 style="user-select: none;">Степень готовности цели</h3>
            <b>Отсутствует цель:</b> В данное время цель смены не установлена, и отдел соблюдает стандартные рабочие процедуры.<br>
            <b>Происходит обсуждение цели:</b> Главы отделов и Капитан находятся в процессе обсуждения и формулирования цели. Цель еще не установлена, но проводится анализ и выработка плана.<br>
            <b>Планирование и поиск ресурсов:</b> Процесс планирования выполнения цели и определения необходимых ресурсов находится в активной стадии. Подготовка к выполнению цели в процессе.<br>
            <b>Ожидание ресурсов для выполнения цели:</b> Отдел ожидает выделения необходимых ресурсов для выполнения цели. Сотрудники готовы приступить к работе после их получения.<br>
            <b>Отсутствует достаточное количество сотрудников для выполнения цели:</b> Для выполнения поставленной цели необходимо больше сотрудников, чем доступно на данный момент. Кадровый дефицит препятствует выполнению задачи.<br>
            <b>Цель на начальном этапе выполнения:</b> Выполнение поставленной цели находится в начальной стадии реализации. На данном этапе значительные результаты еще не достигнуты.<br>
            <b>Половина цели достигнута:</b> Достигнут значительный прогресс в выполнении цели, и половина задачи уже выполнена.<br>
            <b>Цель выполнена:</b> Цель успешно достигнута и выполнена в полном объеме.<br>
            <b>Цель не может быть выполнена:</b> Обстоятельства не позволяют выполнить поставленную цель. Решение о невыполнении принято по объективным причинам.<br>
            <b>Цель процент выполнения:</b> Цель находится в процессе выполнения, и выполнено определенное количество задач. Процент выполнения  - 44%.<br>
            <b>Цель отменена:</b> Решено отменить выполнение поставленной цели по каким-либо обстоятельствам.<br>
            `;
        }
        //Отчет о работе сотрудника
        else if (statementType === '4') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;

            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчет о СВОЕЙ проделанной работе
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ О РАБОТЕ СОТРУДНИКА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], в ходе исполнения своих обязанностей выполнил положенный объем работ, включая:<br>
                        1. <span class="edFi"><опишите выполненные работы></span><br>
                        2. <span class="edFi"><опишите выполненные работы></span><br>
                        3. <span class="edFi"><опишите выполненные работы></span><br>
                        <br>
                        Прошу принять результат работ [italic][color=purple]Главой <span class="maFi">${departmentType}</span>[/color][/italic].<br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчет Главы отдела о работе сотрудника
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЕТ О РАБОТЕ СОТРУДНИКА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Согласно своим обязанностям [bold][color=#1b487e]Главы <span class="maFi">${departmentType}</span>[/color][/bold], предоставляю информацию о проделанной работе сотрудника —
                        [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold] в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic].<br>
                        <br>
                        В рамках своей должности сотрудник выполнил следующие задачи: <br>
                        1. <span class="edFi"><опишите выполненные работы></span><br>
                        2. <span class="edFi"><опишите выполненные работы></span><br>
                        3. <span class="edFi"><опишите выполненные работы></span><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Отчет о ситуации на станции, отчет о статусе выполнения цели
        else if (statementType === '13') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчёт о ситуации на станции
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ О СИТУАЦИИ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Цель[/bold]: <span class="otFi">${stationGoal}</span><br>
                                [bold]Статус выполнения цели[/bold]: <span class="edFi"><статус цели></span><br>
                                <br>
                                [bold]Код уровня угрозы[/bold]: <span class="edFi"><код на станции></span><br>
                                [bold]Причина установления кода[/bold]: <span class="edFi"><причина кода></span><br>
                                [bold]Активные угрозы для станции[/bold]: <span class="edFi"><активные угрозы></span><br>
                                [bold]Потери среди экипажа[/bold]: <span class="edFi"><кол-во></span><br>
                                <br>
                                [bold]Повреждения на станции[/bold]: <span class="edFi"><повреждения></span><br>
                                [bold]Общее состояние станции[/bold]: <span class="edFi"><состояние станции></span><br>
                                <br>
                                [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                                <br>
                                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                                <br>[color=#9c9492][italic]Данный документ считается официальным только при наличии подписи уполномоченного лица и соответствующего его должности штампа. В случае отсутствия любого из указанных элементов данный документ не является официальным и рекомендуется его удалить с любого информационного носителя. <br>
                                <br>
                                ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ: Корпорация NanoTrasen не несёт ответственности, если данный документ не попал в руки первоначального предполагаемого получателя. Однако, корпорация NanoTrasen запрещает использование любой имеющейся в данном документе информации третьими лицами и сообщает, что это преследуется по закону, даже если информация в данном документе не является достоверной.[/italic]
                                [/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Статус выполнения цели</h3>
            <b>Отсутствует цель:</b><br>
            - В данное время цель смены не установлена. Экипаж станции продолжает свою деятельность, сосредоточившись на выполнении своих обычных обязанностей и обеспечении безопасности станции.<br>
            - На данный момент не определена конкретная цель смены, и экипаж станции продолжает осуществлять свои обязанности в соответствии с установленными Стандартными Рабочими Процедурами.<br>
            - Цель смены не назначена. Экипаж станции придерживается стандартных рабочих процедур для обеспечения нормального функционирования систем.<br>
            <br>
            <b>Происходит обсуждение цели:</b><br>
            - Члены командования находятся в процессе обсуждения и формулирования цели. Цель еще не установлена, но проводится анализ и выработка плана.<br>
            - Командование приступает к обсуждению цели, чтобы определить наилучший способ достижения поставленных задач.<br>
            - Главы отделов и Капитан активно обсуждают цель смены, нацеливаясь на определение наиболее эффективных стратегий, приоритетных задач и методов их реализации.<br>
            - Происходит совещание членов командования, направленное на выработку конкретного плана действий и распределение ресурсов для достижения поставленной цели.<br>
            <br>
            <b>Планирование и поиск ресурсов:</b><br>
            - Члены командования находятся в стадии активного планирования и выделения требуемых ресурсов для выполнения поставленной цели.<br>
            - Ведется планирование и поиск требуемых ресурсов, призванных обеспечить успешное достижение цели.<br>
            - Станции в процессе поиска и подготовки необходимых ресурсов для выполнения цели, с учетом всех требований и ограничений.<br>
            - Отделы осуществляют поиск ресурсов, учитывая различные факторы и возможности для достижения цели.<br>
            - Ведется активная подготовка и поиск ресурсов, необходимых для выполнения цели.<br>
            <br>
            <b>Ожидание ресурсов для выполнения цели:</b><br>
            - Сейчас станция находится в стадии подготовки. Происходит закупка и добыча необходимых ресурсов. Как только ресурсы будут доступны, наши сотрудники начнут выполнение цели.<br>
            - Проводится закупка и добыча необходимых ресурсов. После завершения этой подготовительной фазы сотрудники немедленно приступят к выполнению цели.<br>
            - Фаза подготовки, в рамках которой осуществляется приобретение и добыча необходимых ресурсов.<br>
            - Сейчас станция находится на этапе активной подготовки, в том числе осуществляется закупка и распределение ресурсов для последующего выполнения цели.<br>
            - Цель находится в фазе подготовки; осуществляется координация усилий, чтобы обеспечить необходимые ресурсы для реализации задач.<br>
            <br>
            <b>Отсутствует достаточное количество сотрудников для выполнения цели:</b>
            - Для выполнения поставленной цели необходимо больше сотрудников, чем доступно на данный момент. Кадровый дефицит препятствует выполнению задачи.<br>
            - Недостаточное количество сотрудников на станции для выполнения цели смены; ведется оценка ситуации и планирование дальнейших шагов.<br>
            - В свете ограниченного числа сотрудников на станции реализация цель смены временно недоступна.<br>
            - Отсутствие достаточного количества персонала приводит к невозможности полного выполнения цели смены.<br>
            <br>
            <b>Цель на начальном этапе выполнения:</b><br>
            - Выполнение поставленной цели находится в начальной стадии реализации. На данном этапе значительные результаты еще не достигнуты.<br>
            - Цель смены только на начальном этапе своего выполнения, и пока что прогресс достигнут лишь в незначительной степени.<br>
            - Цель только начинает реализовываться; производится оценка и доработка стратегии для более эффективного достижения поставленных задач.<br>
            - Достигнуты лишь незначительные результаты; предпринимаются меры для повышения продуктивности и эффективности.<br>
            <br>
            <b>Половина цели достигнута:</b><br>
            - Достигнут значительный прогресс в выполнении цели, и половина задачи уже выполнена.<br>
            - Цель достигнута на 50%. Продолжаем следовать установленному графику.<br>
            - Половина цели достигнута. Продолжаем выполнение задач в соответствии с планом действий.<br>
            - Процесс достижения цели успешно стартовал, и в настоящее время достигнуто половина поставленных задач. Планируется продолжение работы для завершения оставшейся части.<br>
            <br>
            <b>Цель выполнена:</b><br>
            - Цель успешно достигнута и выполнена в полном объеме.<br>
            - Цель достигнута, полученные результаты соответствуют установленным критериям.<br>
            - Все поставленные задачи выполнены, требуемые результаты получены в полном объеме. В данный момент ожидается вызов эвакуационного шаттла для завершения смены.<br>
            - Цель смены завершена, ожидается эвакуация.<br>
            - Выполнение задачи завершено, начинаем подготовку к отбытию<br>
            <br>
            <b>Цель не может быть выполнена:</b><br>
            - Обстоятельства не позволяют выполнить поставленную цель. Решение о невыполнении принято по объективным причинам.<br>
            - Цель недостижима из-за неожиданных обстоятельств и/или технических сложностей.<br>
            - Цель оказалась невыполнимой из-за ограничений времени и/или ресурсов.<br>
            - Цель не может быть выполнена из-за непредвиденных обстоятельств.<br>
            <br>
            <b>Цель: процент выполнения:</b><br>
            - Цель находится в процессе выполнения, процент выполнения - [ПРОЦЕНТ]%. Выполнены определенное количество задач: [ПЕРЕЧИСЛИТЬ ВЫПОЛНЕННЫЕ ЗАДАЧИ]<br>
            - Цель выполнена на [процент]%. Предполагаемое время завершения: [ориентировочное время].<br>
            - Выполнение цели находится на уровне [процент]%.<br>
            - Реализация цели завершена на [процент]%.<br>
            <br>
            <b>Цель отменена:</b><br>
            - Решено отменить выполнение поставленной цели по следующим обстоятельствам: [ПЕРЕЧИСЛИТЬ ОБСТОЯТЕЛЬСТВА].<br>
            - Цель отменена из-за изменения приоритетов командования.<br>
            - Отмена цели в результате финансовых, ресурсных или кадровых ограничений.<br>
            <br>
            <h3 style="user-select: none;">Код уровня угрозы</h3>
            <ol>
            <li><span style="color:green; line-height:3;">[color=green]Зеленый[/color]</span><br></li>
            <li><span style="color:blue; line-height:3;">[color=blue]Синий[/color]</span><br></li>
            <li><span style="color:red; line-height:3;">[color=red]Красный[/color]</span><br></li>
            <li><span style="color:#808000; line-height:3;">[color=#808000]Желтый[/color]</span><br></li>
            <li><span style="color:#9932CC; line-height:3;">[color=#9932CC]Фиолетовый[/color]</span><br></li>
            <li><span style="color:#C6A500; line-height:3;">[color=#C6A500]Гамма[/color]</span><br></li>
            <li><span style="color:#800080; line-height:3;">[color=#800080]Дельта[/color]</span><br></li>
            </ol>
            <br>
            <h3 style="user-select: none;">Повреждения на станции</h3>
            - Технические коридоры недоступны из-за утечки газа.<br>
            - Обнаружено нарушение герметичности в церковном помещении станции.<br>
            - Обнаружены повреждение внешней обшивки корпуса станции в зоне эвакуации.<br>
            - В Медицинском отделе обнаружена неисправность оборудования для клонирования.<br>
            - Инженеры регистрируют разрыв электрического кабеля в Генераторном отсеке.<br>
            - Научный отдел докладывает о повреждении экспериментального оборудования.<br>
            - Отдел Снабжения отмечает поломку экспедиционного шаттла.<br>
            - Отсутствует возможность добычи ресурсов из-за повреждения оборудования.<br>
            - Повреждена консоль связи на мостике командования.<br><br>
            <h3 style="user-select: none;">Общее состояние станции</h3>
            - Общее состояние станции отличное, все системы работают без нареканий.<br>
            - На данный момент общее состояние станции стабильно, но есть некоторые незначительные технические неполадки.<br>
            - Общее состояние станции стабильное, без происшествий. Требуется регулярная диагностика.<br>
            - Состояние станции оценивается как нормальное, незначительные поломки в инженерных системах.<br>
            - Общее состояние станции ухудшается из-за проблем с энергоснабжением.<br>
            - Состояние станции ухудшилось из-за проблем в атмосферной системе, необходимы ремонтные работы.<br>
            - Станция находится в критическом состоянии из-за сбоя в системе жизнеобеспечения.<br>
            - Состояние станции оценивается как опасное из-за выхода сингулярности из-под контроля.<br>
            - Общее состояние станции критическое из-за возгорания в одном из отделов. Требуется немедленная эвакуация.<br>
            - Общее состояние станции находится в процессе стабилизации после нашествия ксеносов.<br>
            - Общее состояние станции будет известно после проведения запланированного обслуживания.<br>
            - Станция находится под воздействием роя метеоритов, но все системы работают нормально.<br>
            - Общее состояние станции может быть оценено как неудовлетворительное из-за нехватки квалифицированных сотрудников.<br>
            <br>
            `;
        }
        //Запрос на вызов членов ЦК, ДСО
        else if (statementType === '14') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <h2 style="user-select: none;">Быстрые заявления</h2>
            <p style="color:#ada7a6; user-select: none;"><i>Я (Ваше имя, Должность)</i>.</p>
            <div class="row">
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Ядерные опера 👺
                            </h5>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС НА ВЫЗОВ ЧЛЕНОВ ЦК, ДСО<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${yourName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                Я, [bold][color=#3167bd]${yourName}[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу рассмотреть возможность вызова на станцию:<br>
                                [bold][color=purple]Отряда Быстрого Реагирования (ОБР), специализация: вооруженные оперативники[/color][/bold]<br>
                                <br>
                                [bold]Причина вызова[/bold]: вторжения вооруженных ядерных оперативников на станцию.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Зомби 🧟‍♀️
                            </h5>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС НА ВЫЗОВ ЧЛЕНОВ ЦК, ДСО<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${yourName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                Я, [bold][color=#3167bd]${yourName}[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу рассмотреть возможность вызова на станцию:<br>
                                [bold][color=purple]Отряда Радиоактивной, Химической, Биологической и Зомби Защиты (РХБЗЗ)[/color][/bold]<br>
                                <br>
                                [bold]Причина вызова[/bold]: наличие зараженных зомби-вирусом на станции.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Революция 🤬
                            </h5>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС НА ВЫЗОВ ЧЛЕНОВ ЦК, ДСО<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${yourName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                Я, [bold][color=#3167bd]${yourName}[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу рассмотреть возможность вызова на станцию:<br>
                                [bold][color=purple]Отряда Быстрого Реагирования (ОБР), специализация: вооруженные оперативники[/color][/bold]<br>
                                <br>
                                [bold]Причина вызова[/bold]: массовые беспорядки и попытка захвата власти.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Опасные существа 👾
                            </h5>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС НА ВЫЗОВ ЧЛЕНОВ ЦК, ДСО<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${yourName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                Я, [bold][color=#3167bd]${yourName}[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу рассмотреть возможность вызова на станцию:<br>
                                [bold][color=purple]Отряда Радиоактивной, Химической, Биологической и Зомби Защиты (РХБЗЗ)[/color][/bold] с усиленным вооружением.<br>
                                <br>
                                [bold]Причина вызова[/bold]: нападение агрессивных существ, которые способны уничтожить станцию и экипаж.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Составление заявления
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС НА ВЫЗОВ ЧЛЕНОВ ЦК, ДСО<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу рассмотреть возможность вызова на станцию:<br>
                        <span class="edFi"><наименование вызываемого отряда></span><br>
                        <br>
                        [bold]Причина вызова[/bold]: <span class="edFi"><причина вызова></span><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Кого можно вызвать:</h3>
            <h5 style="user-select: none;">Спецотряды:</h5>
            [bold][color=brown]Отряда быстрого реагирования (вооруженные оперативники)[/color][/bold]<br>
            [bold][color=brown]Отряда Радиоактивной, Химической, Биологической и Зомби защиты (РХБЗЗ)[/color][/bold]<br>
            [bold][color=brown]Отряда быстрого реагирования (инженерный спецотряд)[/color][/bold]<br>
            [bold][color=brown]Отряда быстрого реагирования (специалисты по паранормальной активности)[/color][/bold]<br>
            [bold][color=brown]Отряда быстрого реагирования (уборщики)[/color][/bold]<br>
            [bold][color=brown]Эскадрон Смерти[/color][/bold]<br><br>
            <h5 style="user-select: none;">Представители командования, юридического отдела и т.д.:</h5>
            [bold][color=brown]Представителя Центрального Командования[/color][/bold]<br>
            [bold][color=brown]Магистрата[/color][/bold]<br>
            [bold][color=brown]Офицера "Синий Щит"[/color][/bold]<br>
            <br>
            <br>
            <h3 style="user-select: none;">Причина вызова:</h3>
            <h5 style="user-select: none;">Опасности и неполадки</h5>
            <ul>
            <li>на станции присутствуют враждебные агенты, которые могут представлять серьезную угрозу для станции.</li><br>
            <li>проникновение ядерных оперативников на станцию.</li><br>
            <li>вторжения враждебных сил.</li><br>
            <li>революция или попытка захвата власти.</li><br>
            <li>массовые беспорядки.</li><br>
            <li>Служба безопасности неспособна справиться с текущей угрозой.</li><br>
            <li>Служба безопасности была полностью или почти полностью нейтрализована.</li><br>
            <li>зафиксировано присутствие опасного существа, представляющее критическую угрозу для станции.</li><br>
            <li>обнаружена потенциально опасная неопознанная аномалия.</li><br>
            <li>обнаружено наличие паранормальных существ или иных явлений на станции.</li><br>
            <li>присутствие зараженных зомби-вирусом на станции.</li><br>
            <li>ускоренное распространение зомби-вируса среди экипажа станции. Ситуация выходит из-под контроля.</li><br>
            <li>распространение сорняка кудза. Ситуация выходит из-под контроля.</li><br>
            <li>распространение мясистых сухожилий. Ситуация выходит из-под контроля.</li><br>
            <li>критическое состояние станции.</li><br>
            <li>требуется группа для восстановительных работ на станции после серьезных структурных повреждений.</li><br>
            <li>необходима бригада по очистке станции от загрязнений для предотвращения возможных вспышек болезней из-за избыточного наличия потенциально опасного биоматериала.</li></ul><br>
            <h5 style="user-select: none;">Магистрат</h5>
            <ul>
            <li>инцидент с нарушением Корпоративного Закона/Основных Прав Разумных Существ/Стандартных Рабочих Процедур требует вмешательства Магистрата.</li><br>
            <li>вызывается Магистрат для организации судебного разбирательства в отношении подозреваемого в совершении тяжкого преступления на территории станции.</li><br>
            <li>вызывается Магистрат для проведения суда над одним из членов командования/Капитана.</li><br>
            <li>требуется присутствие Магистрата для рассмотрения вопроса о лишении юридической неприкосновенности.</li><br>
            <li>требуется Магистрат с целью пересмотра ранее заверенного документа.</li><br>
            <li>обсуждение юридических аспектов нового приказа. Необходима оценка законности и соответствия действующим нормам НаноТрейзен.</li><br>
            <li>судебное разбирательство: сотрудник подал жалобу на неправомерные действия своего руководителя. Требуется участие Магистрата в вынесении судебного решения.</li><br>
            <li>вызывается Магистрат для пересмотра вынесенного приговора в связи с подачей кассационной жалобы.</li><br>
            </ul>
            <h5 style="user-select: none;">АВД</h5>
            <ul>
            <li>Агент Внутренних Дел приглашается с целью обеспечения защиты Основных Прав Разумных Существ.</li><br>
            <li>инцидент с нарушением Корпоративного Закона/Основных Прав Разумных Существ/Стандартных Рабочих Процедур требует вмешательства Агента Внутренних Дел.</li><br>
            <li>для проведения проверки по предполагаемому нарушению Корпоративного Закона.</li><br>
            <li>проведение внутреннего расследования по возможному нарушению Стандартных Рабочих Процедур и/или Корпоративной этики</li><br>
            <li>проведение проверки внутреннего документооборота станции.</li><br>
            <li>предоставление юридических услуг, включая консультации и адвокатскую поддержку.</li><br>
            </ul>
            <h5 style="user-select: none;">Представитель Центрального Командования</h5>
            <ul>
            <li>требуется Представитель Центрального Командования для проведения проверки выполнения поставленных задач на станции.</li><br>
            <li>необходимо присутствие Представителя Центрального Командования для оценки выполнения цели станции.</li><br>
            <li>необходимо участие Представителя Центрального Командования в разрешении конфликта между членами командования.</li><br>
            <li>инцидент с нарушением Корпоративного Закона/Основных Прав Разумных Существ/Стандартных Рабочих Процедур требует вмешательства Представителя Центрального Командования.</li><br>
            </ul>
            <h5 style="user-select: none;">Офицер Синего Щита</h5>
            <ul>
            <li>покушение на члена командования.</li><br>
            <li>покушение на члена Представителя Центрального Командования/Магистрата.</li><br>
            <li>требуется дополнительная защита Представителя Центрального Командования/Магистрата.</li><br>
            </ul>
            `;
        }
        //Приказ о поощрении
        else if (statementType === '15') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const departmentType = department.options[department.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Награждение сотрудника
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ О ПООЩРЕНИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], награждаю [bold][color=orange]<span class="edFi"><наименование награды></span>[/color][/bold] сотрудника
                        [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], за следующие заслуги:<br>
                        1) [italic]<span class="edFi"><заслуга></span>[/italic]<br>
                        2) [italic]<span class="edFi"><заслуга></span>[/italic]<br>
                        <br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>

                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Награждение отдела
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ О ПООЩРЕНИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], награждаю [bold][color=orange]<span class="edFi"><наименование награды></span>[/color][/bold] сотрудников
                        [bold][color=purple]<span class="maFi">${departmentType}</span>[/color][/bold] за следующие заслуги:<br>
                        1) [italic]<span class="edFi"><заслуга></span>[/italic]<br>
                        2) [italic]<span class="edFi"><заслуга></span>[/italic]<br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Наименование награды</h3>
            - медалью<br>
            - грамотой<br>
            - памятной вещью<br>
            - премией в размере 15% к текущей заработной плате<br>
            <br><h3 style="user-select: none;">Заслуга</h3>
            <b>ВРИО</b><br>
            - руководство отделом во время отсутствия Главы отдела<br>
            - временное исполнение обязанностей руководителя отдела<br>
            - временное управление отделом в отсутствие начальства<br>
            <b>Выполнение цели</b><br>
            - успешное достижение цели смены<br>
            - отличное выполнение поставленных задач<br>
            - выдающийся вклад в работу над целью смены<br>
            - проявление профессионализма и преданность своей работе<br>
            <b>Профессиональные качества</b><br>
            - профессионализм и высокий уровень навыков в своей области<br>
            - высокий уровень компетенции и преданности своей профессии<br>
            - выдающиеся профессиональные успехи<br>
            - превосходное исполнение профессиональных обязанностей<br>
            - эффективное управление и достижение целей<br>
            <b>Выполнение чужих обязанностей</b><br>
            - солидарность и готовность помогать в трудных ситуациях<br>
            - способность выполнять дополнительные обязанности в интересах команды<br>
            - гибкость и способность адаптироваться к непредвиденным обстоятельствам<br>
            - проявление инициативы и готовности взять на себя дополнительную нагрузку<br>
            - помощь коллегам в выполнении их обязанностей в чрезвычайных ситуациях<br>
            <b>Спасение экипажа</b><br>
            - спасение экипажа в критической ситуации<br>
            - героическое спасение членов экипажа в экстренной ситуации<br>
            - за проявленное мужество и решительные действия при спасении членов экипажа из опасных условий<br>
            - активное участие в координации и проведении операций по спасению экипажа<br>
            - за проявленное мужество и решительные действия, когда каждая секунда имела значение<br>
            <b>Преступник и монстры</b><br>
            - успешное задержание преступника и обеспечение безопасности станции<br>
            - профессионализм и храбрость в предотвращении угрозы экипажу станции<br>
            - эффективное пресечение угрозы со стороны [ПРИЧИНА]<br>
            - успешное обезвреживание преступника и защита экипажа от угрозы<br>
            - предотвращение действий против корпорации НаноТрейзен<br>
            - защита станции от внешних угроз<br>
            - смелость и отвагу в борьбе против врагов корпорации НаноТрейзен<br>
            `;
        }
        //Грамота
        else if (statementType === '16') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Стандартная грамота
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ПД[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ГРАМОТА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], награждается грамотой за следующие заслуги:<br>
                        1) [italic]<span class="edFi"><заслуга></span>[/italic]<br>
                        2) [italic]<span class="edFi"><заслуга></span>[/italic]<br>
                        <br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Улучшенная грамота (но требуется дальнейшее форматирование)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#0a2c63][color=purple]███[/color][color=#0a2c63]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
                        [color=#0a2c63]░██░██[color=purple]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#0a2c63]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#0a2c63]░░░░██░░[color=purple]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ПД[/bold]<br>
                        [color=#0a2c63]░░░░██░░░████░[/color][color=purple]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]
                        <br>
                        <br>
                        [color=#3e76e6]░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░[/color]<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=1][bold]ПОЧЕТНАЯ ГРАМОТА[/bold][/head]<br>
                        [color=#3e76e6]░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░[/color]<br><br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0✶ [color=purple]✶[/color] ✶<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0награждается<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=2][bold][italic][color=#094cb8]<span class="obFi">${fullNameObject}</span>[/color][/italic][/bold][/head]<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[color=#0a2c63] в должности <span class="obFi">${selectedPositionObject}</span>[/color]<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0✶ [color=purple]✶[/color] ✶<br>
                        <br>
                        [head=3][italic]    <span class="edFi"><ЗАСЛУГА></span>   [/italic][/head]<br>
                        <br>
                        <br>
                        <br>
                        <br>
                        Текущая дата: ${currentDate}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 [italic]<span class="edFi"><ПОДПИСЬ СОСТАВИТЕЛЯ></span>[/italic]<br>
                        <span class="maFi">${selectedPosition}</span>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <span class="maFi">${fullName}</span><br>
                        <br>
                        [color=#3e76e6]░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░[/color]<br><br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Заслуга</h3>
            <b>ВРИО</b><br>
            - В знак высокой оценки за проявленный профессионализм и управленческие навыки в критические моменты, когда отдел нуждался в руководстве и поддержке.<br>
            - За образцовое временное управление отделом в период отсутствия начальства, обеспечивающее стабильность и эффективность работы.<br>
            - В знак признания и благодарности за выдающееся временное управление отделом в период, когда руководитель отсутствовал.<br>
            - Успешное выполнение обязанностей ВрИО главы отдела.<br>
            - Ваши умения и преданность позволили эффективно управлять отделом в отсутствие начальства, а ваша способность контролировать обстановку вдохновляет каждого из нас.<br>
            - <br>
            <b>Выполнение цели</b><br>
            - За яркое и полное достижение целей смены, что служит примером для всего экипажа!<br>
            - За образцовое выполнение поставленных задач. Вы продемонстрировали истинные качества настоящего профессионала.<br>
            - В знак благодарности за выдающийся вклад в совместное достижение цели смены.<br>
            - Ваш выдающийся вклад в работу над целью смены был ключевым фактором в ее успешном завершении. Ваше уверенное руководство вдохновляет нас всех.<br>
            <b>Профессиональные качества</b><br>
            - За высокий уровень компетенции, преданность и выдающееся выполнение своих профессиональных обязанностей.<br>
            - В знак признания высокого уровня профессионализма и мастерства в своей области.<br>
            - За образцовое исполнение своих профессиональных обязанностей, что служит примером для всех.<br>
            - За превосходное выполнение своих профессиональных обязанностей<br>
            - За выдающееся управление, приводящее к эффективному выполнению задач и успешным результатам.<br>
            <b>Выполнение чужих обязанностей</b><br>
            - За солидарность и готовность помогать в трудных ситуациях.<br>
            - За способность выполнять дополнительные обязанности в интересах команды<br>
            - За гибкость и способность адаптироваться к непредвиденным обстоятельствам<br>
            - За проявление инициативы и готовность взять на себя дополнительную нагрузку<br>
            - За вашу невероятную готовность к помощи и выдающееся выполнение чужих обязанностей в трудные времена. Ваши усилия спасли станцию.<br>
            - За помощь коллегам в выполнении их обязанностей во время тяжелой ситуации<br>
            - За проявление высокого уровня компетенции и профессионализма при выполнении чужих обязанностей. Ваши усилия сыграли важную роль в нашем успехе.<br>
            <b>Спасение экипажа</b><br>
            - За спасение экипажа в критической ситуации<br>
            - В признание ваших героических усилий во время чрезвычайной ситуации. Ваши доблестные действия заслуживают особого внимания.<br>
            - За вашу смелость и решимость, которые привели спасению членов экипажа в экстренной ситуации<br>
            <b>Преступник и монстры</b><br>
            - В признание ваших выдающихся усилий по спасению экипажа. Ваша смелость в обороне станции от внешних угроз и ваша преданность были решающими в моменты критической опасности.<br>
            - За успешное задержание преступника и обеспечение безопасности на станции<br>
            - За профессионализм и храбрость в предотвращении угрозы экипажу станции<br>
            - За эффективное пресечение угрозы со стороны [ПРИЧИНА]. Ваша самоотверженность, решимость и стойкость останутся навечно в нашей памяти.<br>
            - За отвагу и профессионализм в обеспечении безопасности на станции. Ваши смелые действия при сдерживании внешних угроз являются примером для всех сотрудников.<br>
            - За предотвращение враждебных действий, направленных против корпорации НаноТрейзен<br>
            - За блестящее выполнение обязанностей по защите станции от внешних угроз. Ваши навыки и преданность служению НаноТрейзен стали неоценимыми в поддержании нашей безопасности.<br>
            - ЗА ЧЕСТЬ И ОТВАГУ!<br>
            <b>Обучение персонала</b><br>
            - В признание вашей важной роли в обучении и поддержке новых членов экипажа. Ваше терпение и преданность внесли значительный вклад в подготовку следующего поколения работников.<br>
            - За выдающееся руководство и обучение новых членов экипажа. Ваши знания и способность делиться ими помогли нашей станции развиваться и процветать.<br>
            - За вашу преданность и терпеливое обучение персонала. Ваши усилия способствуют не только развитию навыков других, но и укреплению единства нашей станции.<br>
            `;
        }
        //Заказ карго и Заказ на закупку вооружения
        else if (statementType === '17') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Заказ на закупку ресурсов, снаряжения
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                        [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                        [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        [bold]Перечень товаров для заказа[/bold]: <br>
                        1. <span class="edFi"><заказ></span>, <span class="edFi"><количество></span><br>
                        2. <span class="edFi"><заказ></span>, <span class="edFi"><количество></span><br>
                        3. <span class="edFi"><заказ></span>, <span class="edFi"><количество></span><br>
                        <br>
                        [bold]Место доставки товара[/bold]: <span class="edFi"><укажите место доставки></span><br>
                        <br>
                        [bold]Причина заказа[/bold]: <span class="edFi"><укажите причину заказа></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Заказ на закупку вооружения
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#9c593a][color=red]███[/color]░███░░░░██░░░░[/color] <br>
                        [color=#9c593a]░██░██[color=red]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#9c593a]░░░░██░░[color=red]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                        [color=#9c593a]░░░░██░░░████░[/color][color=red]███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ ВООРУЖЕНИЯ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], декларирую неотложную потребность в закупке боевого вооружения и/или боевой экипировки через Отдел Снабжения.<br>
                        <br>
                        [bold]Место доставки товара[/bold]: <span class="edFi"><укажите место доставки></span><br>
                        <br>
                        [bold]Причина заказа[/bold]: <span class="edFi"><укажите причину заказа></span><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        [italic][color=darkGray]Заявитель несет полную юридическую ответственность за использование заказанного вооружения.
                        Заявитель обязуется принять заказ в Отделе Снабжения, провести инвентаризацию полученного вооружения и осуществить его оборот в соответствии с кодом на станции, объявленным в момент получения заказа.[/color][/italic]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Набор стандартных заявлений</h3>
            <br>
            <h4 style="user-select: none;">Инженерный отдел</h4>
            <div class="row">
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Топливо для генераторов 🔋
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                - Уран, 90 ед.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Инженерный отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: необходимо для обеспечения энергетических потребностей станции.<br>
                                <br>
                                [bold]Дополнительная информация[/bold]: требуется немедленная поставка топлива. Просим осуществлять его доставку незамедлительно, частями, не дожидаясь полного заказа.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Ресурсы для инженеров 🏗️
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик стали, 3 шт.<br>
                                2. Ящик стекла, 2 шт.<br>
                                3. Ящик пластика, 1 шт.<br>
                                4. Ящик пластали, 2 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Инженерный отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: требуется для создания необходимого запаса материалов на станции.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Строительство Сингулярного двигателя 🧿
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик стали, 5 шт.<br>
                                2. Ящик кабелей различного вольтажа, 1 шт.<br>
                                3. Ящик с генератором сингулярности, 1 шт.<br>
                                4. Ящик с коллектором радиации, 9 шт.<br>
                                5. Ящик с ускорителем частиц, 1 шт.<br>
                                6. Ящик с генератором сдерживающего поля, 4 шт.<br>
                                7. Ящик антиматериевого топлива, 1 шт.<br>
                                8. Ящик стекла, 1 шт.<br>
                                9. Ящик пластика, 1 шт.<br>
                                10. Ящик кабеля ВВ, 1 шт.<br>
                                11. Ящик пополнения газовых баллонов, 1 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Инженерный отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: требуется для реализации двигателя Сингулярности.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Строительство солнечных панелей 🪟
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик стали, 4 шт.<br>
                                2. Ящик кабелей различного вольтажа, 1 шт.<br>
                                3. Ящик стекла, 3 шт.<br>
                                4. Ящик пластика, 1 шт.<br>
                                5. Ящик сборных солнечных панелей, 16 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Инженерный отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: требуется для развертывания двух новых веток солнечных панелей.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Строительство шаттла 🚀
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик стали, 3 шт.<br>
                                2. Ящик кабелей различного вольтажа, 1 шт.<br>
                                3. Ящик стекла, 2 шт.<br>
                                4. Ящик пластика, 1 шт.<br>
                                5. Ящик пластали, 3 шт.<br>
                                6. Ящик с ракетным двигателем, 4 шт.<br>
                                7. Ящик с гироскопом, 1 шт.<br>
                                8. Канистра воздуха, 2 шт.<br>
                                9. Уран, 2 ед.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Инженерный отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: сборка космического шаттла.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Строительство двигателя Тесла ⚡
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик стали, 3 шт.<br>
                                2. Ящик стекла, 1 шт.<br>
                                3. Ящик пластика, 1 шт.<br>
                                4. Ящик кабелей различного вольтажа, 1 шт.<br>
                                5. Ящик с ускорителем частиц, 1 шт.<br>
                                6. Ящик с катушкой Теслы, 8 шт.<br>
                                7. Ящик с заземляющим стержнем Теслы, 6 шт.<br>
                                8. Ящик с генератором Теслы, 1 шт.<br>
                                9. Ящик с генератором сдерживающего поля, 4 шт.<br>
                                10. Ящик антиматериевого топлива, 1 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Инженерный отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: реализация двигателя Теслы.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Эмиттеры 💠🔫
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик с эмиттером, 4 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Инженерный отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: требуются для активации генераторов сдерживающего поля.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Канистры с газами ⛽
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Канистра плазмы, 1 шт.<br>
                                2. Канистра азота, 1 шт.<br>
                                3. Канистра кислорода, 1 шт.<br>
                                4. Канистра углекислого газа, 1 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Инженерный отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: необходимо для работы атмосферному технику.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <h4 style="user-select: none;">Научный отдел</h4>
            <div class="row">
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Ресурсы для НИО 🔬
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик стали, 3 шт.<br>
                                2. Ящик стекла, 3 шт.<br>
                                3. Ящик пластика, 3 шт.<br>
                                4. Ящик твёрдой плазмы, 1 шт.<br>
                                5. Золотой слиток, 90 ед.<br>
                                6. Серебряный слиток, 90 ед.<br>
                                7. Уран, 90 ед.<br>
                                8. Канистра плазмы, 1 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Научный отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: материальные ресурсы, необходимые для проведения научных исследований и разработок.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Заказ артефактов 🦪
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Артефакт, 2 шт.<br>
                                2. Контейнер артефактов, 2 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Научный отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: исследование инопланетных артефактов и их свойств.<br>
                                <br>
                                [bold]Дополнительная информация[/bold]: перенос артефактов по станции допускается только в специальных контейнерах.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <h4 style="user-select: none;">Медицинский отдел</h4>
            <div class="row">
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3" title="feat. OfflyAnelles">
                                Пополнение ХимкоМат 🧪
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик пополнения ХимкоМат, 1 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Медицинский отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: синтез лекарственных препаратов.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3" title="feat. OfflyAnelles and Mecheniy3365">
                                Ресурсы для Медотдела 💉
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик стали, 1 шт.<br>
                                2. Ящик стекла, 1 шт.<br>
                                3. Ящик пластика, 1 шт.<br>
                                4. Ткань, 30 ед.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Медицинский отдел.<br>
                                <br>
                                [bold]Причина заказа[/bold]: пополнение медицинского ТехФаба.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <br>
            <h4 style="user-select: none;">Сервисный отдел</h4>
            <div class="row">
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3" title="feat. OfflyAnelles">
                               Семена в ботанику 🍄🫘
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик лекарственных семян, 1 шт.<br>
                                2. Ящик экзотических семян, 1 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: отдел Гидропоники.<br>
                                <br>
                                [bold]Причина заказа[/bold]: для обеспечения многообразия лекарственных и экзотических растений в гидропонном отделе.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3" title="feat. OfflyAnelles and Mecheniy3365">
                               Появление Кудзу 🎍
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик гербицида Plant-B-Gone, 1 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: самовывоз.<br>
                                <br>
                                [bold]Причина заказа[/bold]: средство для борьбы с сорняками.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Пополнение вендинговых автоматов 🛍️
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                [bullet/] Ящик пополнения раздатчика алкоголя, 1 шт.<br>
                                [bullet/] Ящик пополнения раздатчика безалкоголя, 1 шт.<br>
                                [bullet/] Ящик пополнения Лучшие горячие напитки Солнечной, <br>1 шт.<br>
                                [bullet/] Ящик пополнения Robust Softdrinks, 1 шт.<br>
                                [bullet/] Ящик пополнения Getmore Chocolate Corp, 1 шт.<br>
                                [bullet/] Ящик пополнения Chang, 1 шт.<br>
                                [bullet/] Ящик пополнения Donut, 1 шт.<br>
                                [bullet/] Ящик пополнения Discount Dans, 1 шт.<br>
                                [bullet/] Ящик пополнения АлкоМат, 1 шт.<br>
                                [bullet/] Ящик пополнения ShadyCigs Делюкс, 1 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: самовывоз.<br>
                                <br>
                                [bold]Причина заказа[/bold]: пополнение вендинговых автоматов.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Разное 🛒
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                [bullet/] Ящик руководств, 1 шт.<br>
                                [bullet/] Ящик с уборочным инвентарём, 1 шт.<br>
                                [bullet/] Ящик запасных лампочек, 1 шт.<br>
                                [bullet/] Тележка горячей еды, 1 шт.<br>
                                [bullet/] Тележка холодной еды, 1 шт.<br>
                                [bullet/] Бочка кваса, 1 шт.<br>
                                [bullet/] Катастрофическая доставка пиццы, 1 шт.<br>
                                [bullet/] Большая переноска для животных, 1 шт.<br>
                                [bullet/] Набор станционных маяков, 1 шт.<br>
                                [bullet/] Термостат, 1 шт.<br>
                                [bullet/] Ящик картона, 1 шт.<br>
                                [bullet/] Ящик латуни, 1 шт.<br>
                                [bullet/] Ящик бумаги, 1 шт.<br>
                                [bullet/] Ящик текстиля, 1 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: самовывоз.<br>
                                <br>
                                [bold]Причина заказа[/bold]: <span class="edFi"><укажите причину></span>.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <h4 style="user-select: none;">Отдел службы безопасности</h4>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Ресурсы для СБ 🪖
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#9c593a][color=#d4a406]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=#d4a406]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=#d4a406]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=#d4a406]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ РЕСУРСОВ, СНАРЯЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик стали, 3 шт.<br>
                                2. Ящик пластика, 2 шт.<br>
                                3. Ящик стекла, 1 шт.<br>
                                <br>
                                [bold]Место доставки товара[/bold]: Отдел Службы Безопасности.<br>
                                <br>
                                [bold]Причина заказа[/bold]: требуется для обеспечения необходимого материального резерва Отдела Службы Безопасности.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Вооружение и броня 🚨
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=red]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=red]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=red]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=red]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ ВООРУЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], декларирую неотложную потребность в закупке боевого вооружения и/или боевой экипировки через Отдел Снабжения.<br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик дробовиков, 2 шт. <br>
                                2. Ящик пистолетов-пулемётов, 2 шт. <br>
                                3. Ящик с броней, 2 шт. <br>
                                4. Пополнения СБТех, 1 шт. <br>
                                <br>
                                [bold]Место доставки товара[/bold]: Отдел Службы Безопасности (если доставка в данный отдел невозможна, просим проинформировать об этом посредством радиосвязи).<br>
                                <br>
                                [bold]Причина заказа[/bold]: чрезвычайная ситуации на станции.<br>
                                <br>
                                [bold]Дополнительная информация[/bold]: отправляйте заказ частями, по возможности, не дожидаясь завершения всего заказа. После заказа всех товаров из перечня, продолжайте заказ грузов "Ящик дробовиков" и "Ящик пистолетов-пулемётов" до получения дальнейших инструкций.<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                                Массовые беспорядки 📣
                            </h4>
                            <div class="d-flex">
                                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-text editable-content p-3" contenteditable="true">
                                [color=#9c593a][color=red]███[/color]░███░░░░██░░░░[/color] <br>
                                [color=#9c593a]░██░██[color=red]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                                [color=#9c593a]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                                [color=#9c593a]░░░░██░░[color=red]██[/color]░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                                [color=#9c593a]░░░░██░░░████░[/color][color=red]███[/color]<br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ЗАКУПКУ ВООРУЖЕНИЯ<br>
                                =============================================<br>
                                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                                Составитель документа: <span class="maFi">${fullName}</span> <br>
                                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                                <br>
                                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], декларирую неотложную потребность в закупке боевого вооружения и/или боевой экипировки через Отдел Снабжения.<br>
                                <br>
                                [bold]Перечень товаров для заказа[/bold]: <br>
                                1. Ящик снаряжения против беспорядков, 3 шт. <br>
                                2. Ящик имплантов Щит разума, 3 шт. <br>
                                3. Ящик нелетального снаряжения, 2 шт. <br>
                                <br>
                                [bold]Место доставки товара[/bold]: Отдел Службы Безопасности (если доставка в данный отдел невозможна, просим проинформировать об этом посредством радиосвязи).<br>
                                <br>
                                [bold]Причина заказа[/bold]: возможны массовые беспорядки на станции.<br>
                                <br>
                                [bold]Дополнительная информация[/bold]: прошу чередовать заказы: сначала "Ящик снаряжения против беспорядков", затем "Ящик имплантов "Щит разума".<br>
                                <br>
                                =============================================<br>
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        //Заказ на производство продукта (по отделам)
        else if (statementType === '18') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `<h3 style="user-select: none;">Заказы по отделам</h3>
            <div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Медицинский отдел ⚕️
                </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1оb487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-МЕД[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#00a8a8]Медицинским отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                2. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                3. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                <br>
                [bold]Причина заказа[/bold]: <span class="edFi"><причина заказа></span><br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Научный Отдел 🤖
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-НИО[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#663a9c]Научным отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                2. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                3. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                <br>
                [bold]Причина заказа[/bold]: <span class="edFi"><причина заказа></span><br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Сервисный отдел 🍹
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СРВ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#699811]Сервисным отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                2. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                3. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                <br>
                [bold]Причина заказа[/bold]: <span class="edFi"><причина заказа></span><br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Инженерный отдел 🦺
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-ИНЖ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#CC9900]Инженерным отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                2. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                3. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                <br>
                [bold]Причина заказа[/bold]: <span class="edFi"><причина заказа></span><br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Служба Безопасности 🛡️
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СБ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#AB1F1F]Отделом Службы Безопасности[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                2. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                3. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                <br>
                [bold]Причина заказа[/bold]: <span class="edFi"><причина заказа></span><br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Отдел Снабжения ⛏️
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#9c593a]Отделом Снабжения[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                2. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                3. <span class="edFi"><заказ></span>, <span class="edFi"><исполнение и количество></span><br>
                <br>
                [bold]Причина заказа[/bold]: <span class="edFi"><причина заказа></span><br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
<br>
<br>
<h3 style="user-select: none;">Набор стандартных заявлений</h3>
<br>
<h4 style="user-select: none;">Заказы к медицинскому отделу</h4>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3" title="feat. Mecheniy3365">
                ГВ. Производство лекарств (таблетки) 💊
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0\xa0[bold]${stationNumber} МЕД[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#00a8a8]в химической лаборатории[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Бикаридин, 30 таблеток<br>
                2. Дермалин, 30 таблеток<br>
                3. Диловен, 30 таблеток<br>
                4. Дексалин плюс, 30 таблеток<br>
                5. Железо, 30 таблеток<br>
                6. Медь, 15 таблеток<br>
                7. Сигинат, 30 таблеток<br>
                8. Аритразин, 20 таблеток<br>
                9. Фалангимин, 10 таблеток<br>
                <br>
                [bold]Причина заказа[/bold]: необходимо пополнить запасы лекарственных препаратов для поддержания высокого уровня медицинского обслуживания, включая создание резервов для чрезвычайных ситуаций.<br>
                <br>
                [bold]Дополнительная информация[/bold]: дозировка – 20 ед.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                ГВ. Производство лекарств (жидкости) ⚗️
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0\xa0[bold]${stationNumber} МЕД[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#00a8a8]в химической лаборатории[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Бикаридин, 200 ед.<br>
                2. Дексалин плюс, 200 ед.<br>
                3. Дермалин + Трикордразин (2:1), 200 ед.<br>
                4. Дифенгидрамин, 200 ед.<br>
                5. Бруизин + Трикордразин (2:1), 200 ед.<br>
                6. Лацеринол + Трикордразин (2:1), 200 ед.<br>
                7. Пунктураз + Трикордразин (2:1), 200 ед.<br>
                8. Трикордразин, 200 ед.<br>
                9. Аритразин + Трикордразин (1:1), 200 ед.<br>
                10. Сигинат, 200 ед.<br>
                11. Фалангимин+Аритразин+Трикордразин (1:1:1), 200 ед.<br>
                12. Физраствор + Транексамовая кислота (3:1), 200 ед.<br>
                13. Эпинефрин, 200 ед.<br>
                <br>
                [bold]Оборудование для исполнения[/bold]: кувшины.<br>
                <br>
                [bold]Причина заказа[/bold]: требуется подготовить запасы лекарственных препаратов для обеспечения медицинского отдела необходимыми ресурсами для лечения и поддержания здоровья членов экипажа.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        ГВ. Производство лекарств для криокапсулы 🧬
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0\xa0[bold]${stationNumber} МЕД[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#00a8a8]в химической лаборатории[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Криоксадон, 400 ед.<br>
                2. Оппорозидон, 200 ед.<br>
                3. Доксарубиксадон, 200 ед.<br>
                4. Некрозол, 400 ед.<br>
                5. Алоксадон, 400 ед.<br>
                <br>
                [bold]Оборудование для исполнения[/bold]: кувшины.<br>
                <br>
                [bold]Причина заказа[/bold]: лекарственные препараты для использования криокапсулы.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Производство лекарств (война) ⚔️💊
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}-МЕД</span>[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#00a8a8]Медицинским отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Пунктураз + Дермалин (1:1), 50 таблеток<br>
                2. Дифенилметиламин (или аналоги), 25 таблеток<br>
                3. Медицинская нить (или аналоги), 15 шт.<br>
                4. Регенеративная сеть (или аналоги), 15 шт.<br>
                5. Пакет крови (или аналоги), 10 шт.<br>
                <br>
                [bold]Место доставки[/bold]: отдел службы безопасности.<br>
                <br>
                [bold]Причина заказа[/bold]: обеспечение оперативной и эффективной первой помощи в условиях боевых действий.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Лекарства для экспедиции ⛏️👽
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-МЕД[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#00a8a8]Медицинским отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Регенеративная сеть (или аналоги), 20 шт.<br>
                2. Медицинская нить (или аналоги), 20 шт.<br>
                3. Пакет крови (или аналоги), 10 шт.<br>
                4. Бинты, 10 шт.<br>
                5. Уголь (или аналоги), 30 таблеток.<br>
                6. Дефибриллятор, 1 шт.<br>
                7. Прибор для прижигания, 3 шт.<br>
                <br>
                [bold]Причина заказа[/bold]: необходимый набор первой помощи на экспедициях.<br>
                <br>
                [bold]Дополнительная информация[/bold]: прошу организовать обучение по использованию [bold]прибора для прижигания[/bold] для одного из утилизаторов.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
               Ботаник. Удобрения 🪴
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-МЕД[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#00a8a8]Медицинским отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Робаст харвест, 200 ед.<br>
                2. Диэтиламин, 200 ед.<br>
                3. EZ-нутриенты, 200 ед.<br>
                <br>
                [bold]Причина заказа[/bold]: поддержание оптимальных условий для роста и развития растений.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Ботаник. Мутация растений 🍂
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-МЕД[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#00a8a8]Медицинским отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Нестабильный мутаген, 200 ед.<br>
                2. Left-4-zed, 100 ед.<br>
                3. Пипетка, 2 шт.<br>
                4. Криоксадон, 90 ед.<br>
                5. Фалангимин, 90 ед.<br>
                <br>
                [bold]Причина заказа[/bold]: создания новых гибридов растений, либо улучшение свойств уже существующих.<br>
                <br>
                [bold]Дополнительная информация[/bold]: криоксадон в небольших дозах способен лечить и оживлять растения.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
<h4 style="user-select: none;">Заказы к сервисному отделу</h4>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Заказ лекарственных растений (ботаник) 🍃
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СРВ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#699811]отделом Гидропоники[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Алоэ, 100 шт.<br>
                2. Галакточертополох, 100 шт.<br>
                3. Мак, 100 шт.<br>
                4. Линчжи, 100 шт.<br>
                <br>
                [bold]Причина заказа[/bold]: получение необходимых химических веществ для синтеза эффективных лекарственных препаратов.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Омнизин (ботаник) 🤍
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СРВ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#699811]отделом Гидропоники[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Культивируемое растение, содержащее органический [bold]омнизин[/bold], 100 шт.<br>
                <br>
                [bold]Причина заказа[/bold]: синтез крайне эффективных лекарственных препаратов.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Доски (ботаник) 🪵
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СРВ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#699811]отделом Гидропоники[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Деревянные доски, 120 шт.<br>
                <br>
                [bold]Причина заказа[/bold]: необходимы материалы для строительства.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Ингредиенты для кухни (ботаник) 🌾
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СРВ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#699811]отделом Гидропоники[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Пшеница, 100 шт.<br>
                2. Яйцефрут, 60 шт.<br>
                3. Помидор, 50 шт.<br>
                4. Лук, 30 шт.<br>
                5. Морковь, 50 шт.<br>
                6. Баклажан, 30 шт.<br>
                7. Кукуруза, 30 шт.<br>
                8. Перец чили, 30 шт.<br>
                9. Лисичка, 30 шт.<br>
                <br>
                [bold]Причина заказа[/bold]: ингредиенты для приготовления блюд.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>

<br>
<h4 style="user-select: none;">Заказы к научному отделу</h4>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Эмиттеры 💠🔫
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-НИО[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#663a9c]Научным отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Эмиттер, 8 шт.<br>
                <br>
                [bold]Причина заказа[/bold]: требуются для активации генераторов сдерживающего поля.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Компоненты шаттла 🚀
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-НИО[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#663a9c]Научным отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Консоль управления шаттлом, 1 шт.<br>
                2. Мини-генератор гравитации, 1 шт.<br>
                3. Сканер массы, 1 шт.<br>
                4. Ракетный двигатель, 4 шт.<br>
                5. Гироскоп, 1 шт.<br>
                <br>
                [bold]Причина заказа[/bold]: сборка космического шаттла.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Компоненты системы солнечных панелей 🪟
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-НИО[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#663a9c]Научным отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                1. Консоль контроля солнечных батарей, 2 шт.<br>
                2. Микросхема трекера солнечных лучей, 2 шт.<br>
                <br>
                [bold]Причина заказа[/bold]: сборка системы солнечных панелей.<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Разные технологии и инструменты ⚙️🧰💻
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-НИО[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#663a9c]Научным отделом[/color][/bold].<br>
                <br>
                [bold]Перечень необходимых продуктов:[/bold]<br>
                [bullet/]Шахтерский бур, 2 шт.<br>
                [bullet/]Сумка хранения для руды, 2 шт.<br>
                [bullet/]Промышленный переработчик руды, 1 шт.<br>
                [bullet/]Грузовой телепад, 1 шт.<br>
                [bullet/]Адская охладительная термомашина, 1 шт.<br>
                [bullet/]Чистобот, 2 шт.<br>
                [bullet/]Медбот, 2 шт.<br>
                [bullet/]Продвинутая швабра, 1 шт.<br>
                [bullet/]Мега-распылитель, 1 шт.<br>
                [bullet/]Музыкальный автомат, 1 шт.<br>
                [bullet/]Автолат, 1 шт.<br>
                [bullet/]Протолат, 1 шт.<br>
                [bullet/]Переработчик материалов, 1 шт.<br>
                [bullet/]Конденсатор газа, 1 шт.<br>
                [bullet/]Переработчик биомассы, 1 шт.<br>
                [bullet/]Лазерная винтовка (или лучше), 2 шт.<br>
                [bullet/]Продвинутый лазерный пистолет или лазерный пистолет Свалинн, 1 шт.<br>
                [bullet/]Зарядник энергоооружия, 2 шт.<br>
                [bullet/]Переносной зарядник, 2 шт.<br>
                [bullet/]Набор продвинутых инструментов (экспериментальный сварочный аппарат, электродрель, челюсти жизни), 2 шт.<br>
                [bullet/]PTK-800 "Дематериализатор материи", 2 шт.<br>
                [bullet/]Батарея высокой ёмкости (или лучше), 2 шт.<br>
                [bullet/]Маршрутизатор камер наблюдения, 1 шт.<br>
                [bullet/]Телекоммуникационный сервер, 1 шт.<br>
                [bullet/]Цифровая звуковая рабочая станция, 1 шт.<br>
                [bullet/]Консоль СМИ, 1 шт.<br>
                [bullet/]Рипли АВП (с установленными как минимум 2-мя гидравлическими клешнями), 1 шт.<br>
                [bullet/]Магнитные ботинки, 1 шт.<br>
                <br>
                [bold]Причина заказа[/bold]: <span class="edFi"><причина заказа></span><br><br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Создание киборгов 🤖🛠️🕹️
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
            [color=#1b487e]███░███░░░░██░░░░[/color]<br>
            [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
            [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
            [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-НИО[/bold]<br>
            [color=#1b487e]░░░░██░░░████░███[/color]<br>
            =============================================<br>
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
            =============================================<br>
            Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
            Составитель документа: <span class="maFi">${fullName}</span> <br>
            Должность составителя: <span class="maFi">${selectedPosition}</span><br>
            <br>
            Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#663a9c]Научным отделом[/color][/bold].<br>
            <br>
            [bold]Перечень необходимых продуктов:[/bold]<br>
            [bullet/]Киборг общего назначения, 1 шт.<br>
            [bullet/]Киборг инженерного отдела, 1 шт.<br>
            [bullet/]Киборг медицинского отдела, 1 шт.<br>
            [bullet/]Киборг-шахтёр, 1 шт.<br>
            [bullet/]Киборг сервисного отдела, 1 шт.<br>
            [bullet/]Киборг-уборщик, 1 шт.<br>
            [bullet/]Киборг научного отдела, 1 шт.<br>
            <br>
            [bold]Причина заказа[/bold]: замена неэффективных сотрудников с целью повышения производительности, сокращения издержек и оптимизации рабочих процессов на станции.<br>
            <br>
            [bold]Дополнительная информация[/bold]: прошу установить последнюю версию модулей инструментов (согласно специализации киборга) и проводить его периодическое техобслуживание.<br>
            <br>
            Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
            =============================================<br>
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3" title="feat. fern2">
                Химические гранаты 💣🧨
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color]<br>
            [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
            [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
            [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-НИО[/bold]<br>
            [color=#1b487e]░░░░██░░░████░███[/color]<br>
            =============================================<br>
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ НА ПРОИЗВОДСТВО ПРОДУКТА<br>
            =============================================<br>
            Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
            Составитель документа: <span class="maFi">${fullName}</span> <br>
            Должность составителя: <span class="maFi">${selectedPosition}</span><br>
            <br>
            Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу произвести продукцию [bold][color=#663a9c]Научным отделом[/color][/bold].<br>
            <br>
            [bold]Перечень необходимых продуктов:[/bold]<br>
            [bullet/]Нейтрализирующая химическая граната с таймером, 10 шт.<br>
            При срабатывании должна нейтрализовать противника, минимизируя нанесение вреда его здоровью. Задержка взрыва в 5 секунд (или менее).<br>
            [bullet/]Фугасная химическая граната с таймером, 10 шт.<br>
            При активации должна наносить максимальный ущерб здоровью противника с целью вывода его из строя. Задержка взрыва в 5 секунд (или менее).<br>
            <br>
            [bold]Причина заказа[/bold]: требуются для эффективного участия в операциях против действий террористических структур.<br>
            <br>
            Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
            =============================================<br>
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
          `;
        }
        //Понижение и сокращение выплат
        else if (statementType === '20') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            statementTemplate = `

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Повышение-понижение ЗП для сотрудника
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0ЗАПРОС НА ИЗМЕНЕНИЕ ЗАРАБОТНОЙ ПЛАТЫ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу рассмотреть возможность [bold]<span class="edFi">повышения/понижения</span>[/bold] заработной платы на [color=MediumSlateBlue][bold]<span class="edFi"><ЗНАЧЕНИЕ></span>[/bold][/color] сотруднику [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold] в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic].<br>
                        <br>
                        [bold]Причина изменения заработной платы[/bold]:<br>
                        <span class="edFi"><причина изменения></span><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Повышение-понижение ЗП для отдела
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0ЗАПРОС НА ИЗМЕНЕНИЕ ЗАРАБОТНОЙ ПЛАТЫ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу рассмотреть возможность [bold]<span class="edFi">повышения/понижения</span>[/bold] заработной платы у [bold][color=purple]<span class="maFi">${departmentType}</span>[/color][/bold] на [color=MediumSlateBlue][bold]<span class="edFi"><ЗНАЧЕНИЕ></span>[/bold][/color].<br>
                        <br>
                        [bold]Причина изменения заработной платы[/bold]:<br>
                        <span class="edFi"><причина изменения></span><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Причина понижения ЗП</h3>
            - за нарушение трудовой дисциплины и невыполнении стандартных рабочих процедур.<br>
            - низкая производительность работы над поставленными задачами.<br>
            - за несоответствие требованиям, предъявляемым к его должности.<br>
            - за нарушение протоколов безопасности в зоне станции во время чрезвычайной ситуации.<br>
            - сотрудник не соблюдает правила безопасности на рабочем месте и создает угрозу себе и окружающим.<br>
            - за нарушение корпоративных норм и стандартов деловой этики корпорации Нанотрейзен.<br>
            - нарушения стандартов деловой этики, включая моральное и этическое поведение.<br>
            - по результатам анализа производительности и качества работы сотрудника, обнаружено, что его навыки и компетенции не соответствуют требованиям, предъявляемым к должности.<br>
            - сотрудник игнорирует возможности обучения и развития, не стремится улучшить свои навыки и знания.<br>
            - сотрудник регулярно отсутствует на рабочем месте без уважительной причины.<br>
            - сотрудник регулярно игнорирует попытки связаться с ним и не отвечает на важные сообщения.<br>
            - участия сотрудника в незаконных действиях, которые могут негативно повлиять на компанию.<br>
            <br>
            <h3 style="user-select: none;">Дополнительная информация</h3>
            С учетом вышеизложенного и с целью обеспечения более эффективного функционирования станции, принято решение о понижении в должности сотрудника [ПОЛНОЕ ИМЯ] до [ДОЛЖНОСТЬ].<br>
            Также сотруднику предложено пройти обучение и повышение квалификации по окончанию смены.<br>
            <br>
            <h3 style="user-select: none;">Причина повышения ЗП</h3>
            <b>ВРИО</b><br>
            - Образцовое управление отделом в период отсутствия начальства, обеспечивающее стабильность и эффективность работы, является ключевым аспектом успешного функционирования отдела, что делает повышение заработной платы необходимым для поддержания высокого уровня профессионализма и мотивации сотрудника.<br>
            - В знак признания и благодарности за выдающееся временное управление отделом в период, когда руководитель отсутствовал, следует рассмотреть вопрос о повышении заработной платы данного сотрудника, что будет служить стимулом для поддержания высокой производительности и лояльности.<br>
            - В часы испытаний и отсутствия Главы отдела, ваше лидерство в отделе, подкрепленное выдающимися навыками и преданностью, было просто бесценным.<br>
            - В часы испытаний и отсутствия Главы отдела, лидерство и профессионализм данного сотрудника были бесценными для обеспечения непрерывности работы и достижения целей отдела, что делает необходимым рассмотрение вопроса о повышении его заработной платы как признание его важной роли в коллективе.<br>
            - Умения и преданность данного сотрудника позволили эффективно управлять отделом в отсутствие начальства, что привело к стабильности и успешным результатам работы. Повышение его заработной платы будет справедливым и обоснованным шагом для поддержания его мотивации и профессионального роста, а также для признания его вклада в успех отдела.<br>
            - Временное исполнение обязанностей главы отдела данным сотрудником было успешным и эффективным, обеспечивая стабильность и непрерывность работы отдела, что представляет основание для рассмотрения вопроса о повышении его заработной платы.<br>
            - Эффективное временное управление отделом данным сотрудником является основанием для обсуждения повышения его заработной платы.<br>
            - Успешное управление отделом данным сотрудником поддержало стабильность и эффективность работы, что представляет основание для рассмотрения вопроса о повышении его заработной платы.<br>
            <b>Выполнение цели</b><br>
            - Эффективное выполнение поставленных задач подтверждает профессиональные качества сотрудника и служит основанием для рассмотрения вопроса о повышении его заработной платы.<br>
            - В знак признания за эффективное выполнение поставленных задач и выдающийся вклад в совместное достижение цели смены.<br>
            - Значимый вклад в достижение цели смены был ключевым моментом в ее успешном завершении<br>
            - Предлагается учесть успешное достижение целей смены и эффективное выполнение поставленных задач данным сотрудником.<br>
            <b>Профессиональные качества</b><br>
            - В знак признания его высокого уровня профессионализма и мастерства в своей области.<br>
            - Высокий уровень компетенции, преданность и выдающееся выполнение профессиональных обязанностей.<br>
            - Постоянное демонстрирование высокого уровня профессиональной компетентности и надежности в выполнении обязанностей, что подтверждает его ценность для команды.<br>
            - Превосходное выполнение профессиональных обязанностей. <br>
            - Высокий уровень профессиональной ответственности и дисциплинированности, отражающийся в точности и своевременности выполнения задач.<br>
            - Постоянное стремление к достижению высоких результатов и превзойтию ожиданий, что делает его ценным активом для команды и организации в целом.<br>
            <b>Выполнение чужих обязанностей</b><br>
            - Способность к выполнению дополнительной нагрузки в периоды отсутствия коллег, что обеспечивает непрерывность работы отдела. <br>
            - Готовность сотрудника взять на себя дополнительные обязанности или проекты для помощи коллегам в периоды перегрузок или увеличения объема работы.<br>
            - Сотрудник помогает выполнять обязанности коллег в их отсутствие (или в экстренных ситуациях), что обеспечивает непрерывность работы отдела и предотвращает простои.<br>
            - Готовность брать на себя дополнительные обязанности и помогать коллегам в периоды перегрузки работы<br>
            - Эффективное совмещение собственных обязанностей с выполнением задач коллег во избежание простоев и срывов в работе, что способствует общей продуктивности команды.<br>
            <b>Спасение экипажа</b><br>
            - За спасение экипажа в критической ситуации.<br>
            - Демонстрация высокой степени ответственности и преданности к коллегам в ситуациях, где их безопасность находится под угрозой.<br>
            - Готовность рисковать собственной безопасностью во имя спасения или защиты членов экипажа станции, что является примером высокой духовной силы и самоотверженности.<br>
            - Проявление инициативы и организационных способностей при координации усилий по спасению членов экипажа.<br>
            <b>Преступник и монстры</b><br>
            - За успешное задержание преступника и обеспечение безопасности на станции<br>
            - За профессионализм и храбрость в предотвращении угрозы экипажу станции<br>
            - За эффективное пресечение угрозы со стороны [ПРИЧИНА].<br>
            - За отвагу и профессионализм в обеспечении безопасности на станции. Активные действия при сдерживании внешних угроз.<br>
            - За предотвращение враждебных действий, направленных против корпорации НаноТрейзен<br>
            - За блестящее выполнение обязанностей по защите станции от внешних угроз. <br>
            <b>Обучение персонала</b><br>
            - Активное содействие в развитии и профессиональном росте коллег путем обучения и передачи опыта, что способствует повышению уровня компетенции команды.<br>
            - Оказание профессиональной поддержки и консультаций коллегам в решении сложных вопросов или задач, что способствует улучшению результатов команды в целом.<br>
            - Активное содействие в обучении новых сотрудников или передача опыта и знаний коллегам для улучшения их профессиональных навыков и адаптации к рабочей среде.<br>
            - Предоставление коллегам необходимой информации, инструкций или ресурсов для успешного выполнения их обязанностей, что способствует повышению производительности и качества работы.<br>
            `;
        }
        //Запрос цели или информации
        else if (statementType === '21') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Запрос к Центральному Командованию
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0ЗАПРОС К ЦЕНТРАЛЬНОМУ КОМАНДОВАНИЮ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Уважаемое Центральное Командование,<br>
                <br>
                к вам обращается [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic] станции [color=indigo]${stationNumber}[/color]<br>
                <span class="edFi"><опишите ваш запрос к ЦК></span><br>
                <br>
                <br>
                <br>
                С уважением,<br>
                [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic] [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold]<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Обращение к Центральному Командованию
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0ОБРАЩЕНИЕ К ЦЕНТРАЛЬНОМУ КОМАНДОВАНИЮ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Уважаемое Центральное Командование!<br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                прошу Вас рассмотреть моё обращение.<br>
                <br>
                [bold]Содержание обращения[/bold]: <span class="edFi"><содержание вашего обращения></span><br>
                <br>
                [bold]Причины его написания[/bold]: <span class="edFi"><опишите причину></span><br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
            <br>
            <br>
            <h3 style="user-select: none;">Запрос</h3>
            <h4 style="user-select: none;">Смена цели смены</h4>
            - В связи с <укажите обстоятельства>, просим пересмотреть и скорректировать цель нашей смены.<br>
            - Прошу рассмотреть возможность изменения цели смены на более приоритетную или актуальную задачу, учитывая <укажите обстоятельства>.<br>
            - С учетом текущих обстоятельств, я обращаюсь к вам с предложением пересмотреть цель текущей смены на космической станции ${stationNumber}.<br>
            - В связи с недавними событиями/изменениями/угрозами, которые могут повлиять на безопасность и нормальное функционирование станции, мы считаем необходимым запросить корректировку текущую цели смены.<br>
            <br>
            <h4 style="user-select: none;">Запрос цели</h4>
            - Прошу предоставить цель текущей смены для станции ${stationNumber}. Мы ждем ваши инструкции, чтобы эффективно выполнять свои обязанности и служить интересам корпорации Нанотрейзен.<br>
            - Просим предоставить цель смены. Ждем ваших указаний.<br>
            - Запрос на цель смены. Пожалуйста, укажите, какие задачи мы должны выполнить.<br>
            - Пожалуйста, сообщите цель текущей смены нашей станции. Укажите, какие задачи мы должны решить в эту смену.<br>
            - Прошу предоставить цель текущей смены. Готовы к выполнению задач.<br>
            <br>
            <h4 style="user-select: none;">События</h4>
            - На радаре обнаружен неизвестный шаттл, приближающийся к станции. Прошу предоставить дальнейшие указания: поднять уровень угрозы до красного кода, отправить экипаж для обследования шаттла или попробовать немедленно его уничтожить?<br>
            - На станции была обнаружена необычная фауна: [ОПИСАНИЕ МОНСТРОВ], которая не соответствует нашим обычным научным представлениям. Ждем ваших официальных указаний: требуется ли полностью уничтожить существ или попытаться захватить их и изучить? Также запрашиваем возможность поставок продвинутого вооружения по дополнительному запросу.<br>
            - Обнаружены признаки заражения экипажа Зомби-вирусом. Прошу предоставить указания по эвакуации и возможности вызова группы РХБЗЗ.<br>
            - Станция подверглась нападению Ядерных оперативников. Прошу предоставить немедленные указания по мерам обороны, эвакуации и возможности отправки ОБР на станцию.<br>
            - Для успешного выполнения цели смены требуется дополнительное количество <span class="edFi"><Тип ресурса></span>. Прошу предоставить указания по возможности заказа, доставке и использованию этого ресурса на станции.<br>
            `;
        }
        //Отчет о собрании глав
        else if (statementType === '5') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчет о собрании глав
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                            [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                            [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                            [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                            [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                            [color=#1b487e]░░░░██░░░████░███[/color]<br>
                            =============================================<br>
                            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЕТ О СОБРАНИИ ГЛАВ<br>
                            =============================================<br>
                            Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                            Составитель документа: <span class="maFi">${fullName}</span> <br>
                            Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                            <br>
                            [bold]Причина созыва Собрания Глав[/bold]:<br>
                            [italic]<span class="edFi"><опишите причину></span>[/italic] <br>
                            [bold]Формулировка поставленного перед Главами вопроса[/bold]:<br>[italic]<span class="edFi"><формулировка вопроса></span>[/italic]<br>
                            <br>
                            [color=#008000][bold]Количество голосов «За»[/bold]: <span class="edFi"><кол-во></span><br>
                            [bold]Проголосовавшие «За»[/bold]: <br>
                            1. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span><br>
                            2. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span><br>
                            3. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span><br>
                            [/color]
                            <br>[color=#ff0000][bold]Количество голосов «Против»[/bold]: <span class="edFi"><кол-во></span><br>
                            [bold]Проголосовавшие «Против»[/bold]:  <br>
                            1. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span><br>
                            2. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span><br>
                            3. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span><br>
                            [/color]
                            <br>[color=#808080][bold]Количество воздержавшихся от голосования[/bold]: <span class="edFi"><кол-во></span><br>
                            [bold]Воздержавшиеся от голосования[/bold]:  <br>
                            1. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span><br>
                            2. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span><br>
                            3. <span class="edFi"><ФИО></span>, <span class="edFi"><ДОЛЖНОСТЬ></span><br>
                            [/color]
                            <br>
                            [bold]Решение Собрания Глав:<br>[color=purple]
                            <span class="edFi"><опишите итоговое решение глав></span>[/color]
                            <br>
                            [/bold]
                            <br>
                            Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                            =============================================<br>
                            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Должность</h3>
            - Капитан<br>
            - ВрИО Капитана<br>
            - Глава персонала<br>
            - ВрИО Главы персонала<br>
            - Глава службы безопасности<br>
            - ВрИО Главы службы безопасности<br>
            - Старший Инженер<br>
            - ВрИО Старшего Инженера<br>
            - Научный руководитель<br>
            - ВрИО Научного руководителя<br>
            - Главный врач<br>
            - ВрИО Главного врача<br>
            - Квартирмейстер<br>
            - ВрИО Квартирмейстера<br>
            `;
        }
        //Стандартная форма
        else if (statementType === '23') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Стандартный бланк с оформлением
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОД-<span class="otFi">${selectedDepartmentCode}</span>[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<span class="edFi"><НАИМЕНОВАНИЕ ДОКУМЕНТА></span><br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, <span class="maFi">${fullName}</span>, в должности <span class="maFi">${selectedPosition}</span>, из <span class="maFi">${departmentType}</span>...<br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Бланк без оформления
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        ${stationNumber} КОД-<span class="otFi">${selectedDepartmentCode}</span><br>
                        =============================================<br>
                        <span class="edFi"><НАИМЕНОВАНИЕ ДОКУМЕНТА></span><br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, <span class="maFi">${fullName}</span>, в должности <span class="maFi">${selectedPosition}</span>, из <span class="maFi">${departmentType}</span>...<br>
                        =============================================<br>
                        Место для печатей<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3" title="feat. Stratuzzz">
                        Письмо (альтернативная форма)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b67a5]█▄ █ ▀█▀    [head=3]Письмо[/head]<br>
                        █ ▀█     █        От кого: <span class="maFi">${yourName}</span><br>
                                            Кому: <span class="maFi">${fullName}</span><br>
                                            Тема: <span class="edFi"><тема письма></span>[/color]<br>
                        ──────────────────────────────────────────<br>
                        <span class="edFi"><текст письма></span>[/color]<br>
                        <br>
                        <br>
                        <br>
                        ──────────────────────────────────────────<br>
                        С уважением, ${yourName}<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Отчет об устранении нарушений
        else if (statementType === '24') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчет об устранении нарушений (один сотрудник)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ ОБ УСТРАНЕНИИ НАРУШЕНИЙ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], отчитываюсь об устранении нарушений в работе,
                        выявленных у сотрудника – [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic].<br>
                        <br>
                        [bold]Предъявленные нарушения[/bold]: <span class="edFi"><опишите предъявленные нарушения></span><br>
                        <br>
                        [bold]Причина нарушений[/bold]: <span class="edFi"><опишите причины и обстоятельства возможных нарушений с вашей точки зрения></span><br>
                        <br>
                        [bold]Проведенные мероприятия по устранению нарушений[/bold]: <span class="edFi"><опишите проведенные мероприятия></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчет об устранении нарушений (несколько сотрудников)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ ОБ УСТРАНЕНИИ НАРУШЕНИЙ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], отчитываюсь об устранении выявленных нарушений в работе [bold][color=#3167bd]${departmentType}[/color][/bold].<br>
                        <br>
                        [bold]Перечень причастных сотрудников[/bold]:<br>
                        1. <span class="obFi">${fullNameObject}</span>, в должности <span class="obFi">${selectedPositionObject}</span><br>
                        2. <span class="edFi"><ФИО></span>, в должности <span class="edFi"><ДОЛЖНОСТЬ></span><br>
                        3. <span class="edFi"><ФИО></span>, в должности <span class="edFi"><ДОЛЖНОСТЬ></span><br>
                        <br>
                        [bold]Предъявленные нарушения[/bold]: <span class="edFi"><опишите предъявленные нарушения></span><br>
                        <br>
                        [bold]Причина нарушений[/bold]: <span class="edFi"><опишите причины и обстоятельства возможных нарушений с вашей точки зрения></span><br>
                        <br>
                        [bold]Проведенные мероприятия по устранению нарушений[/bold]: <span class="edFi"><опишите проведенные мероприятия></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Причины нарушений и мероприятия по устранению нарушений</h3>
            ${violations_eliminated_reasons}
            `;
        }
        //Разрешение на передвижение при угрозе
        else if (statementType === '25') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Разрешение на передвижение при угрозе (один сотрудник)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                    [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                    [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                    [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                    [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                    [color=#1b487e]░░░░██░░░████░███[/color]<br>
                    =============================================<br>
                    \xa0\xa0\xa0\xa0\xa0РАЗРЕШЕНИЕ НА ПЕРЕДВИЖЕНИЕ ПРИ УГРОЗЕ<br>
                    =============================================<br>
                    Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                    Составитель документа: <span class="maFi">${fullName}</span> <br>
                    Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                    <br>
                    Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], разрешаю сотруднику
                    [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], передвижение по станции с целью выполнения им рабочих обязанностей.<br>
                    <br>
                    [bold]Уровни кодов угроз, при которых дается данное разрешение[/bold]:<br>
                    <span class="edFi"><укажите разрешенные коды угроз></span><br>
                    <br>
                    [bold]Разрешенные части станции для местонахождения сотрудника[/bold]:<br>
                    <span class="edFi"><укажите разрешенные части станции></span><br>
                    <br>
                    Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                    =============================================<br>
                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Разрешение на передвижение при угрозе: для сотрудников отдела
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0РАЗРЕШЕНИЕ НА ПЕРЕДВИЖЕНИЕ ПРИ УГРОЗЕ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], разрешаю сотрудникам [bold][color=purple]<span class="maFi">${departmentType}</span>[/color][/bold] передвижение по станции с целью выполнения ими своих рабочих обязанностей.<br>
                <br>
                [bold]Уровни кодов угроз, при которых дается данное разрешение[/bold]:<br>
                <span class="edFi"><укажите разрешенные коды угроз></span><br>
                <br>
                [bold]Разрешенные части станции для местонахождения сотрудника[/bold]:<br>
                <span class="edFi"><укажите разрешенные части станции></span><br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Код уровня угрозы</h3>
            <ol>
            <li><span style="color:red; line-height:3;">[color=red]Красный[/color]</span></li>
            <li><span style="color:#808000; line-height:3;">[color=#808000]Желтый[/color]</span></li>
            <li><span style="color:#9932CC; line-height:3;">[color=#9932CC]Фиолетовый[/color]</span></li>
            <li><span style="color:#C6A500; line-height:3;">[color=#C6A500]Гамма[/color]</span></li>
            <li><span style="color:#800080; line-height:3;">[color=#800080]Дельта[/color]</span></li>
            </ol>
            <br>
            <h3>Разрешенные части станции</h3>
            - Вся станция<br>
            - Общественные коридоры и помещения<br>
            - Технические помещения<br>
            - Доступ в космос<br>
            - Мостик командования<br>
            - Инженерный отдел<br>
            - Сервисный отдел<br>
            - Научный отдел<br>
            - Отдел Службы Безопасности<br>
            - Медицинский отдел<br>
            - Отдел снабжения<br>
            `;
        }
        //Запрос установления уровня угрозы
        else if (statementType === '26') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Запрос установления уровня угроз
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС УСТАНОВЛЕНИЯ УРОВНЯ УГРОЗЫ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в текущей должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу рассмотреть возможность установления на станции уровня угрозы: <span class="edFi"><укажите код уровня угрозы></span><br>
                        <br>
                        [bold]Причина установления кода[/bold]: <span class="edFi"><укажите причину></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Код уровня угрозы</h3>
            <ol>
            <li><span style="color:red; line-height:3;">[color=red]Красный[/color]</span><br></li>
            <li><span style="color:#808000; line-height:3;">[color=#808000]Желтый[/color]</span><br></li>
            <li><span style="color:#9932CC; line-height:3;">[color=#9932CC]Фиолетовый[/color]</span><br></li>
            <li><span style="color:#C6A500; line-height:3;">[color=#C6A500]Гамма[/color]</span><br></li>
            <li><span style="color:#800080; line-height:3;">[color=#800080]Дельта[/color]</span><br></li>
            </ol>
            <br>
            `;
        }
        //Запрос эвакуационного шаттла
        else if (statementType === '27') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Запрос эвакуационного шаттла
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС ЭВАКУАЦИОННОГО ШАТТЛА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Уважаемое Центральное Командование!<br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в текущей должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу запустить протоколы эвакуации и прислать эвакуационный шаттл, приняв решение об окончании смены.<br>
                        <br>
                        [bold]Причина окончания смены[/bold]: <span class="edFi"><опишите причину></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <h3 style="user-select: none;">Причина окончания смены</h3>
            <b>Цель выполнена:</b><br>
            - Цель успешно достигнута.<br>
            - Цель достигнута.<br>
            - Все поставленные задачи выполнены.<br>
            - Выполнение задачи завершено.<br>
            <br>
            <b>Цель не может быть выполнена:</b><br>
            - Агрессивные внешние угрозы.<br>
            - Возникновение аварийной ситуации.<br>
            - Цель не может быть выполнена из-за непредвиденных обстоятельств.<br>
            - Недостаточное количество сотрудников на станции для выполнения цели смены<br>
            - Отсутствие достаточного количества персонала приводит к невозможности полного выполнения цели смены.<br>
            - Многочисленные аварии или дефекты на станции, отказ критически важных систем.<br>
            - Возникновение аварийных ситуаций или поломок критически важных систем на станции.<br>
            - Недостаточно времени и/или ресурсов для выполнения цели.<br>
            - Отмена цели в результате финансовых или ресурсных ограничений.<br>
            - Недостаток ресурсов и проблемы с поставками критически важных материалов.<br>
            - Cаботаж со стороны враждебных агентов помешал выполнению цели смены.<br>
            - Вторжения враждебных организаций делает выполнение цели смены невозможным.<br>
            - Серьезные угрозы со стороны агрессивной фауны, что делает выполнение цели смены невозможным.<br>
            - Угроза заражения зомби-вирусом. Прошу организовать эвакуацию с учетом данной информации.<br>
            - Решено отменить выполнение поставленной цели по следующим обстоятельствам: [ПЕРЕЧИСЛИТЬ ОБСТОЯТЕЛЬСТВА].<br>
            - Цель отменена из-за изменения приоритетов командования.<br>
            <br>
            `;
        }
        //Обращение
        else if (statementType === '28') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Обращение
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-<span class="edFi">КОМ</span>[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОБРАЩЕНИЕ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                        прошу рассмотреть моё обращение сотрудником [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в текущей должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic].<br>
                        <br>
                        [bold]Содержание обращения[/bold]: <span class="edFi"><содержание вашего обращения></span><br>
                        <br>
                        [bold]Причины его написания[/bold]: <span class="edFi"><опишите причину></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Дополнительная информация</h3>
            <p style="color: DimGray;">Пишется лицом с целью официального обращения к какому-либо должностному лицу или сотруднику со свободным содержанием. Может содержать какую-либо просьбу, совет или жалобу в официальном или полу-официальном формате.<br>
            <br>
            Обращения могут быть направлены и в Центральное Командование, в таком случае код обращения будет ПД-ЦК.<br>
            <br>
            Также по данной форме пишется обращение к Магистрату с целью урегулирования ситуации, в таком случае код обращения будет ПД-ЮР, обращение осуществляется по соответствующей процедуре. Примеры ситуаций:<br>
            - Возникновение ситуации, при которой Корпоративный Закон не способен защитить ущемление ОПРС какого-либо лица.<br>
            - Необходимость оспорить приговор, вынесенный Капитаном.<br>
            - Необходимость отстранить от работы Агента Внутренних Дел при нарушении им ОПРС, КЗ или СРП.<br>
            - Необходимость проведения судебной процедуры.</p>
            `;
        }
        //Заявление на получение снаряжения и Разрешение на использование снаряжения
        else if (statementType === '29') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `

            <h3 style="user-select: none;">Заявление на получение снаряжения</h3>
            <div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Снаряжение отдела
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ СНАРЯЖЕНИЯ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                прошу выдать мне следующее снаряжение [italic][color=Indigo]<span class="maFi">${departmentType}</span>[/color][/italic]:<br>
                1. <span class="edFi"><укажите требуемое снаряжение></span><br>
                2. <span class="edFi"><укажите требуемое снаряжение></span><br>
                3. <span class="edFi"><укажите требуемое снаряжение></span><br>
                <br>
                [bold]Причина получения снаряжения[/bold]:<br>
                <span class="edFi"><опишите причину></span>
                <br>
                <br>[color=DarkGray][italic]Данный документ разрешает использование предоставленного снаряжения исключительно в рамках выполнения вами служебных обязанностей.<br>Использование снаряжения в личных целях без предварительного согласования с руководством категорически запрещено и может повлечь за собой ответственность.[/italic][/color]<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Личное снаряжение
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ СНАРЯЖЕНИЯ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [color=#3167bd][italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic][/color],
                прошу выдать мне следующее [color=Indigo][italic]личное снаряжение[/italic][/color]:<br>
                1. <span class="edFi"><укажите требуемое снаряжение></span><br>
                2. <span class="edFi"><укажите требуемое снаряжение></span><br>
                3. <span class="edFi"><укажите требуемое снаряжение></span><br>
                <br>
                [bold]Причина получения снаряжения[/bold]:<br>
                <span class="edFi"><опишите причину></span>
                <br>
                <br>[color=DarkGray][italic]Данный документ разрешает использование предоставленного снаряжения исключительно в рамках выполнения вами служебных обязанностей.<br>Использование снаряжения в личных целях без предварительного согласования с руководством категорически запрещено и может повлечь за собой ответственность.[/italic][/color]<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Разрешение на использование снаряжения
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0\xa0[bold]${stationNumber} КОМ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0РАЗРЕШЕНИЕ НА ИСПОЛЬЗОВАНИЕ СНАРЯЖЕНИЯ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                разрешаю сотруднику [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в текущей должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], использовать следующее рабочее снаряжение отдела:<br>
                1. <span class="edFi"><укажите требуемое снаряжение></span><br>
                2. <span class="edFi"><укажите требуемое снаряжение></span><br>
                3. <span class="edFi"><укажите требуемое снаряжение></span><br>
                <br>
                <br>[color=DarkGray][italic]Разрешение на использование снаряжения действует исключительно в рамках выполнения вами служебных обязанностей.<br>Использование снаряжения в личных целях без предварительного согласования с руководством категорически запрещено и может повлечь за собой ответственность.[/italic][/color]<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Разрешение на использование и получение снаряжения (всему отделу)
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0РАЗРЕШЕНИЕ НА ИСПОЛЬЗОВАНИЕ СНАРЯЖЕНИЯ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                прошу выдать сотрудникам [italic][color=Indigo]<span class="maFi">${departmentType}</span>[/color][/italic] следующее рабочее снаряжение:<br>
                1. <span class="edFi"><укажите требуемое снаряжение></span><br>
                2. <span class="edFi"><укажите требуемое снаряжение></span><br>
                3. <span class="edFi"><укажите требуемое снаряжение></span><br>
                <br>
                <br>
                [bold]Сотрудники, для которых данное разрешение НЕ действует[/bold]:<br>
                <span class="edFi"><укажите исключаемых сотрудников></span>
                <br>
                <br>[color=DarkGray][italic]Данный документ разрешает использование предоставленного снаряжения исключительно в рамках выполнения сотрудниками своих служебных обязанностей.<br>
                Использование снаряжения в личных целях без предварительного согласования с руководством категорически запрещено и может повлечь за собой дисциплинарную ответственность.[/italic][/color]<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
            <br>
            <br>
            <h3 style="user-select: none;">Набор стандартных заявлений</h3>
            <div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Запрос НИО на инструменты разных отделов 🌌
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ СНАРЯЖЕНИЯ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [color=#3167bd][italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic][/color],
                прошу выдать мне следующее снаряжение:<br>
                1. Магнитные ботинки, 1 шт.<br>
                2. Изолированные перчатки, 1 шт.<br>
                3. Музыкальный инструмент (любой), 1 шт.<br>
                4. Кубик с обезьяной или кобольдом, 4 шт.<br>
                <br>
                [bold]Причина получения снаряжения[/bold]: проведение научных экспериментов в отделе ксеноархеологии.
                <br>
                <br>[color=DarkGray][italic]Данный документ разрешает использование предоставленного снаряжения исключительно в рамках выполнения вами служебных обязанностей.<br>
                Использование снаряжения в личных целях без предварительного согласования с руководством категорически запрещено и может повлечь за собой ответственность.<br>
                Получение экипировки по данному документу требует наличия печатей Главы персонала и Старшего инженера, либо Капитана.<br>
                [/italic][/color]<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Запрос снаряжения для утилизаторов ♻️
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ СНАРЯЖЕНИЯ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [color=#3167bd][italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic][/color],
                прошу выдать мне следующее снаряжение:<br>
                1. Инженерный очки, 2 шт.<br>
                2. Изолированные перчатки, 2 шт.<br>
                3. Полный набор инструментов (включая пояс и мультитул), 2 шт.<br>
                <br>
                [bold]Причина получения снаряжения[/bold]: эффективность утилизации обломков и скорость прохождения экспедиций повысятся при использовании полного набора инструментов.<br>
                <br>
                <br>[color=DarkGray][italic]Данный документ разрешает использование предоставленного снаряжения исключительно в рамках выполнения вами служебных обязанностей.<br>
                Использование снаряжения в личных целях без предварительного согласования с руководством категорически запрещено и может повлечь за собой ответственность.<br>
                Получение экипировки по данному документу требует наличия печати Старшего инженера, либо Капитана.<br>
                [/italic][/color]<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
`;
        }
        //Жалоба на нарушение трудового порядка
        else if (statementType === '30') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Жалоба на нарушение трудового порядка
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-ЮР[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0ЖАЛОБА НА НАРУШЕНИЕ ТРУДОВОГО ПОРЯДКА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                        считаю, что в ходе работы [bold][color=purple]<span class="maFi">${departmentType}</span>[/color][/bold] были допущены следующие нарушения:<br>
                        [bullet/]<span class="edFi"><укажите нарушения></span><br>
                        [bullet/]<span class="edFi"><укажите нарушения></span><br>
                        [bullet/]<span class="edFi"><укажите нарушения></span><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Прошу провести внутреннюю проверку по данным фактам нарушений.<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Запрос регистрации шаттла
        else if (statementType === '31') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Запрос регистрации шаттла
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС РЕГИСТРАЦИИ ШАТТЛА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                        прошу провести регистрацию шаттла в системе NanoTrasen для его идентификации.<br>
                        <br>
                        Размеры шаттла:<br>
                        <span class="edFi"><укажите размер шаттла></span><br>
                        Класс шаттла:<br>
                        <span class="edFi"><укажите класс шаттла></span><br>
                        Ответственный за постройку:<br>
                        <span class="edFi"><укажите ответственного за строительство></span><br>
                        Запрашиваемое наименование:<br>
                        <span class="edFi"><укажите название шаттла></span><br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h4>Размеры шаттла</h3>
                - Малый (S)<br>
                - Средний (M)<br>
                - Крупный (L)<br>
                - Огромный (XL)<br>
                - Гигантский (XXL)<br>
            <br>
            <h4>Класс шаттла</h3>
                - Пассажирский<br>
                - Грузовой<br>
                - Исследовательский<br>
                - Медицинский<br>
                - Военный<br>
                - Развлекательный<br>
                - Колонизационный<br>
                - Ремонтно-строительный<br>
                - Шпионский<br>
                - Экспериментальный<br>
                <br>
            `;
        }
        //Заказ специального снаряжения
        else if (statementType === '32') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Заказ специального снаряжения
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКАЗ СПЕЦИАЛЬНОГО СНАРЯЖЕНИЯ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу предоставить специальное снаряжение станции от Центрального Командования.<br>
                        <br>
                        [bold]Перечень запрашиваемого снаряжения[/bold]:<br>
                        1. <span class="edFi"><заказ></span>, <span class="edFi"><количество></span><br>
                        2. <span class="edFi"><заказ></span>, <span class="edFi"><количество></span><br>
                        3. <span class="edFi"><заказ></span>, <span class="edFi"><количество></span><br>
                        <br>
                        [bold]Причина запроса[/bold]: <span class="edFi"><укажите причину запроса></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Отчет об изучении объекта
        else if (statementType === '33') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Официальная передача объекта от отдела
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0\xa0[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ ОБ ИЗУЧЕНИИ ОБЪЕКТА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Для проведения экспертизы от [bold][color=#3167bd]${departmentType}[/color][/bold] было представлено приспособление с неизученными свойствами.<br>
                        В ходе экспертизы объект был изучен, были установлены свойства объекта и его видовая принадлежность.<br>
                        <br>
                        [bold]Внешнее описание объекта[/bold]:<br>
                        <span class="edFi"><опишите объект></span><br>
                        <br>
                        [bold]Выявленные свойства объекта[/bold]:<br>
                        <span class="edFi"><опишите выявленные свойства объекта></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Личная передача объекта от сотрудника
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0\xa0[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ ОБ ИЗУЧЕНИИ ОБЪЕКТА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Для проведения экспертизы сотрудником [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], было представлено приспособление с неизученными свойствами.<br>
                        В ходе экспертизы объект был изучен, были установлены свойства объекта и его видовая принадлежность.<br>
                        <br>
                        [bold]Внешнее описание объекта[/bold]:<br>
                        <span class="edFi"><опишите объект></span><br>
                        <br>
                        [bold]Выявленные свойства объекта[/bold]:<br>
                        <span class="edFi"><опишите выявленные свойства объекта></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Отчет о внутреннем расследовании от АВД
        else if (statementType === '34') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчет о внутреннем расследовании (от АВД)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ЮР-<span class="otFi">${selectedDepartmentCode}</span>[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ О ВНУТРЕННЕМ РАСЛЕДОВАНИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: Агент Внутренних Дел<br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#1b487e]Агент Внутренних Дел[/color][/italic], в ходе внутренней проверки, запрошенной сотрудником [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], по причине <span class="edFi"><укажите причину проверки></span> выявил [bold]следующие нарушения[/bold]: <br>
                        1. <span class="edFi"><опишите нарушение></span><br>
                        2. <span class="edFi"><опишите нарушение></span><br>
                        3. <span class="edFi"><опишите нарушение></span><br>
                        <br>
                        [bold]Также хочу сообщить о следующем:[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Решение о начале судебного процесса
        else if (statementType === '35') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Решение о начале судебного процесса
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                            [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                            [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                            [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                            [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} ЮР[/bold]<br>
                            [color=#1b487e]░░░░██░░░████░███[/color]<br>
                            =============================================<br>
                            \xa0\xa0\xa0\xa0\xa0\xa0РЕШЕНИЕ О НАЧАЛЕ СУДЕБНОГО ПРОЦЕССА<br>
                            =============================================<br>
                            Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                            Составитель документа: <span class="maFi">${fullName}</span> <br>
                            Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                            <br>
                            Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], сообщаю о начале судебного разбирательства по делу [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold] в связи со сложностью и неоднозначностью дела.<br>
                            <br>
                            [bold]Предъявляемые правонарушения[/bold]:<br>
                            1. <span class="edFi"><опишите нарушение></span><br>
                            2. <span class="edFi"><опишите нарушение></span><br>
                            3. <span class="edFi"><опишите нарушение></span><br>
                            <br>
                            <br>
                            [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                            <br>
                            Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                            =============================================<br>
                            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Судебное решение
        else if (statementType === '36') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Судебное решение
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} ЮР[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0СУДЕБНОЕ РЕШЕНИЕ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], выношу решение по судебному разбирательству в отношении [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic].<br>
                        <br>
                        [bold]Предъявляемые правонарушения[/bold]:<br>
                        1. <span class="edFi"><опишите нарушение></span><br>
                        2. <span class="edFi"><опишите нарушение></span><br>
                        3. <span class="edFi"><опишите нарушение></span><br>
                        <br>
                        [bold]Решение приговора Службы Безопасности[/bold]:<br>
                        <span class="edFi"><опишите решение СБ></span><br>
                        <br>
                        [bold]Проведенное до судебного разбирательства время ареста[/bold]: <span class="edFi">00</span> минут<br>
                        <br>
                        [bold]Данное лицо нарушило следующие статьи Корпоративного Закона[/bold]:<br>
                        1. <span class="edFi">XXX - <наименование статьи></span><br>
                        2. <span class="edFi">XXX - <наименование статьи></span><br>
                        3. <span class="edFi">XXX - <наименование статьи></span><br>
                        <br>
                        [bold]С учетом всех смягчающих и отягчающих обстоятельств, правовое наказание данного лица представлено в виде[/bold]:<br>
                        <span class="edFi"><00 минут заключения под стражей / пожизненного заключения / приговора к казни></span><br>
                        <br>
                        [bold]Административное наказание[/bold]:<br>
                        <span class="edFi"><понижение в должности /  увольнение></span><br>
                        <br>
                        [bold]Срок заключения под стражу отсчитывается с[/bold]: <span class="edFi">00:00</span> от начала смены, ${currentDate}<br>
                        [bold]Мое решение обосновано (тем, что)[/bold]: <span class="edFi"><опишите обоснование вынесенного решения></span><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
        `;
        }
        //Запрос предоставления документов от АВД
        else if (statementType === '37') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Запрос копий документов
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ЮР-<span class="otFi">${selectedDepartmentCode}</span>[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС ПРЕДОСТАВЛЕНИЯ ДОКУМЕНТОВ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: Агент Внутренних Дел<br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#1b487e]Агент Внутренних Дел[/color][/italic], прошу предоставить для проверки соответствия Корпоративному Закону [bold]копии[/bold] следующих документов:<br>
                        1. <span class="edFi"><наименование документа></span><br>
                        2. <span class="edFi"><наименование документа></span><br>
                        3. <span class="edFi"><наименование документа></span><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Запрос оригиналов документов
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ЮР-<span class="otFi">${selectedDepartmentCode}</span>[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС ПРЕДОСТАВЛЕНИЯ ДОКУМЕНТОВ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: Агент Внутренних Дел<br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#1b487e]Агент Внутренних Дел[/color][/italic], прошу предоставить для проверки соответствия Корпоративному Закону [bold]оригиналы[/bold] следующих документов:<br>
                        1. <span class="edFi"><наименование документа></span><br>
                        2. <span class="edFi"><наименование документа></span><br>
                        3. <span class="edFi"><наименование документа></span><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Кассационная жалоба
        else if (statementType === '38') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Кассационная жалоба
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ЮР-<span class="otFi">${selectedDepartmentCode}</span>[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0КАССАЦИОННАЯ ЖАЛОБА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу пересмотреть вынесенный в <span class="edFi"><время от начала смены и дата, указанные в приговоре: 00:00, ${currentDate}></span>, <span class="edFi"><ФИО должностного лица органа судебной власти></span></b>, в должности <b><span class="edFi"><Смотритель / Глава службы безопасности / Капитан / Представитель Центрального Командования / Магистрат></span></b>, приговор в отношении сотрудника [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], находящегося на момент вынесения приговора в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic] и ныне <span class="edFi"><занимающий должность (ДОЛЖНОСТЬ) / занимающий аналогичную должность / не являющийся сотрудником NanoTrasen в виду административного наказания></span>.<br>
                        <br>
                        [bold]Данное лицо было обвинено в нарушении следующих статей Корпоративного Закона[/bold]:<br>
                        1. <span class="edFi">XXX - <наименование статьи></span><br>
                        2. <span class="edFi">XXX - <наименование статьи></span><br>
                        3. <span class="edFi">XXX - <наименование статьи></span><br>
                        <br>
                        [bold]С учётом всех смягчающих и отягчающих обстоятельств, правовое наказание данного лица было представлено в виде[/bold]:<br>
                        <span class="edFi"><суммарного срока в 00 мин. / пожизненного заключения / приговора к казни></span><br>
                        [bold]Административное наказание[/bold]:<br>
                        <span class="edFi"><понижение в должности / увольнение></span><br>
                        <br>
                        [bold]Привожу следующие прямые и косвенные доказательства[/bold]:<br>
                        1. По статье (<span class="edFi">XXX</span>) Корпоративного Закона в пользу <span class="edFi"><вины / невиновности></span> данного лица:<br>
                        <span class="edFi"><перечислите доказательства></span><br>
                        2. По статье (<span class="edFi">XXX</span>) Корпоративного Закона в пользу <span class="edFi"><вины / невиновности></span> данного лица:<br>
                        <span class="edFi"><перечислите доказательства></span><br>
                        3. По статье (<span class="edFi">XXX</span>) Корпоративного Закона в пользу <span class="edFi"><вины / невиновности></span> данного лица:<br>
                        <span class="edFi"><перечислите доказательства></span><br>
                        <br>
                        [bold]Таким образом, считаю необходимым пересмотреть выданные, с учётом всех смягчающих и отягчающих обстоятельств, правовое наказание данного лица, представив в виде[/bold]:<br>
                        <span class="edFi"><освобождения от заключения / суммарного срока в 00 мин. / пожизненного заключения / приговора к казни></span><br>
                        [bold]Административное наказание[/bold]:<br>
                        <span class="edFi"><возвращение на должность до введения в действие приговора [ПЕЧАТЬ ЦК ОБЯЗАТЕЛЬНА] / понижение в должности / увольнение></span><br>
                        Срок заключения под стражу изменению не подлежит и отсчитывается с: <время начала заключения: <span class="edFi">00:00</span> от начала смены, ${currentDate}><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
        `;
        }
        //Жалоба на правонарушение
        else if (statementType === '39') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Жалоба на правонарушение
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-СБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЖАЛОБА НА ПРАВОНАРУШЕНИЕ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], считаю, что [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], нарушил Корпоративный Закон, потому что <b><span class="edFi"><укажите причину></span></b>.<br>
                        <br>
                        [bold]Произошедшее с моей точки зрения[/bold]: <span class="edFi"><опишите события с вашей точки зрения></span><br>
                        <br>
                        [color=DarkGray][italic]Информируем, что заявитель освобождается от ответственности за содержание данного документа, даже в случае недостоверности представленной информации.[/italic][/color]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Приговор
        else if (statementType === '40') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Приговор
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} СБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИГОВОР<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], выношу приговор согласно данным мне полномочиям в отношении [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic].<br>
                        <br>
                        [bold]Данное лицо нарушило следующие статьи Корпоративного Закона[/bold]:<br>
                        1. <span class="edFi">XXX - <наименование статьи></span><br>
                        2. <span class="edFi">XXX - <наименование статьи></span><br>
                        3. <span class="edFi">XXX - <наименование статьи></span><br>
                        <br>
                        [bold]С учетом всех смягчающих и отягчающих обстоятельств, правовое наказание данного лица представлено в виде[/bold]:<br>
                        <span class="edFi"><00 минут заключения под стражей / пожизненного заключения / приговора к казни></span><br>
                        <br>
                        [bold]Административное наказание[/bold]:<br>
                        <span class="edFi"><понижение в должности / увольнение></span><br>
                        <br>
                        [bold]Срок заключения под стражу отсчитывается с[/bold]: <span class="edFi">00:00</span> от начала смены, ${currentDate}<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
        `;
        }
        //Свидетельство о правонарушении
        else if (statementType === '41') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Свидетельство о правонарушении (свидетель)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-СБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0СВИДЕТЕЛЬСТВО О ПРАВОНАРУШЕНИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], свидетельствую о правонарушениях, предусмотренных статьями:<br>
                        1. <span class="edFi">XXX - <наименование статьи></span><br>
                        2. <span class="edFi">XXX - <наименование статьи></span><br>
                        3. <span class="edFi">XXX - <наименование статьи></span><br>
                        <br>
                        По данному инциденту могу пояснить следующее.<br>
                        <br>
                        [bold]Место преступления[/bold]: <span class="edFi"><укажите место преступления></span><br>
                        [bold]Лица, причастные к преступлению[/bold]: <span class="edFi"><опишите лиц, причастных к преступлению, их внешние признаки или особые приметы></span><br>
                        [bold]Против кого или чего было совершено преступление[/bold]: <span class="edFi"><укажите предполагаемую цель преступления></span><br>
                        [bold]Мотивы совершения преступления[/bold]: <span class="edFi"><укажите предполагаемые мотивы преступления></span><br>
                        [bold]Характер и размер вреда, причиненного преступлением[/bold]: <span class="edFi"><укажите характер и размер нанесенного вреда></span><br>
                        [bold]Полная хронология событий[/bold]:<br>
                        <span class="edFi"><опишите полную хронологию событий></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Свидетельство о правонарушении (явка с повинной)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-СБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0СВИДЕТЕЛЬСТВО О ПРАВОНАРУШЕНИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], [color=Indigo][bold]самолично признаюсь в совершении правонарушений[/bold][/color], предусмотренных статьями:<br>
                        1. <span class="edFi">XXX - <наименование статьи></span><br>
                        2. <span class="edFi">XXX - <наименование статьи></span><br>
                        3. <span class="edFi">XXX - <наименование статьи></span><br>
                        <br>
                        По данному инциденту могу пояснить следующее.<br>
                        <br>
                        [bold]Место преступления[/bold]: <span class="edFi"><укажите место преступления></span><br>
                        [bold]Мотивы совершения преступления[/bold]: <span class="edFi"><укажите мотивы преступления></span><br>
                        [bold]Против кого или чего было совершено преступление[/bold]: <span class="edFi"><укажите цель преступления></span><br>
                        [bold]Характер и размер вреда, причиненного преступлением[/bold]: <span class="edFi"><укажите характер и размер причиненного вреда></span><br>
                        [bold]Пособники в преступлении[/bold]: <span class="edFi"><укажите пособников в преступлении></span><br>
                        [bold]Полная хронология событий[/bold]:<br>
                        <span class="edFi"><опишите полную хронологию событий></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
         `;
        }
        //Обвинительное заключение
        else if (statementType === '42') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Обвинительное заключение
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} СБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОБВИНИТЕЛЬНОЕ ЗАКЛЮЧЕНИЕ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], разрешаю произвести арест сотрудника [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], в связи с подозрением в совершении данным лицом следующих правонарушений:<br>
                        1. <span class="edFi"><опишите нарушение></span><br>
                        2. <span class="edFi"><опишите нарушение></span><br>
                        3. <span class="edFi"><опишите нарушение></span><br>
                        <br>
                        В ходе предварительного следствия были обнаружены доказательства, указывающие на совершение правонарушения данным лицом.<br>
                        <br>
                        [bold]Прямые доказательства:[/bold]<br>
                        <span class="edFi"><опишите прямые доказательства преступления></span><br>
                        <br>
                        [bold]Косвенные доказательства:[/bold]<br>
                        <span class="edFi"><опишите косвенные доказательства преступления></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
        `;
        }
        //Разрешение на обыск
        else if (statementType === '43') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Разрешение на обыск сотрудника
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} СБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0РАЗРЕШЕНИЕ НА ОБЫСК<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], разрешаю произвести обыск сотрудника [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic].<br>
                        <br>
                        [bold]Причина обыска[/bold]: <span class="edFi"><укажите причину обыска></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>

                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Разрешение на обыск отдела
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} СБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0РАЗРЕШЕНИЕ НА ОБЫСК<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                        разрешаю произвести обыск [bold][color=purple]<span class="maFi">${departmentType}</span>[/color][/bold] и всех его сотрудников (за исключением Главы отдела, если у него присутствует имплант лояльности).<br>
                        <br>
                        [bold]Причина обыска[/bold]: <span class="edFi"><укажите причину обыска></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Приказ об УДО заключенного
        else if (statementType === '44') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const newSelectedPosition = newPositionSelect.options[newPositionSelect.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Приказ об УДО заключенного
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]\xa0\xa0\xa0\xa0${addSpaces}[bold]${stationNumber} СБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ ОБ УДО ЗАКЛЮЧЕННОГО<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в текущей должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                        разрешаю применить условно-досрочное освобождение к заключенному [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], который отбывает наказание в <span class="edFi">бриге/пермабриге</span>.<br>
                        После выдачи УДО заключенному будет предоставлена гражданская профессия с обязательной работой до конца смены.<br>
                        <br>
                        [bold]Выдаваемая профессия[/bold]: [bold][color=purple]<span class="otFi">${newSelectedPosition}</span>[/color][/bold]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Разрешение на ношение оружия
        else if (statementType === '45') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Разрешение на ношение оружия
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
            [color=#1b487e]███░███░░░░██░░░░[/color] <br>
            [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
            [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
            [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} СБ[/bold]<br>
            [color=#1b487e]░░░░██░░░████░███[/color]<br>
            =============================================<br>
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0РАЗРЕШЕНИЕ НА НОШЕНИЕ ОРУЖИЯ<br>
            =============================================<br>
            Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
            Составитель документа: <span class="maFi">${fullName}</span> <br>
            Должность составителя: <span class="maFi">${selectedPosition}</span><br>
            <br>
            Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], разрешаю ношение оружия сотруднику [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], до тех пор, пока оно используется по назначению.<br>
            При нарушении правил использования, разрешение аннулируется, оружие изымается Службой Безопасности.<br>
            <br>
            [bold]Оружие и тип патронов к нему[/bold]: <span class="edFi"><укажите оружие и тип патронов></span><br>
            [bold]Способ получения оружия и патронов к нему[/bold]: <span class="edFi"><укажите способ получения оружия></span><br>
            [bold]Причина выдачи разрешения[/bold]: <span class="edFi"><укажите причину></span><br>
            <br>
            Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
            =============================================<br>
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <h3 style="user-select: none;">Оружие</h3>
            - Холодное оружие (дубинка-шокер)<br>
            - Гранаты (светошумовая, слезоточивая)<br>
            - Станнер (станнер-пулемёт)<br>
            - Пистолет МК-58<br>
            - Лазерный пистолет (лазерный пистолет Свалинн, импульсный пистолет, старомодный лазерный бластер, продвинутый лазерный пистолет, самодельный лазерный пистолет)<br>
            - Лазерная винтовка (рентгеновская пушка, лазерная пушка)<br>
            - Тазер<br>
            - Ружьё (обрез, двуствольное ружьё) <br>
            - Дробовик (Бульдог, Каммерер, самодельный дробовик, Силовик)<br>
            - Пистолет-пулемёт (C-20r, WT550, Атрейдес) <br>
        `;
        }
        //Отчет о проведенном расследовании
        else if (statementType === '46') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчет детектива
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ О ПРОВЕДЁННОМ РАССЛЕДОВАНИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: Детектив<br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#1b487e]Детектив[/color][/italic], провел расследование о деле [bold]<span class="edFi"><укажите наименование дела></span>[/bold].<br>
                        <br>
                        [bold]Мною были допрошены свидетели:[/bold]<br>
                        1. <span class="edFi"><ФИО свидетеля></span>, <span class="edFi"><должность свидетеля></span><br>
                        2. <span class="edFi"><ФИО свидетеля></span>, <span class="edFi"><должность свидетеля></span><br>
                        3. <span class="edFi"><ФИО свидетеля></span>, <span class="edFi"><должность свидетеля></span><br>
                        <br>
                        [bold]Взяты и приложены к делу следующие отпечатки:[/bold]<br>
                        1. <span class="edFi"><улика></span> – <span class="edFi"><распечатка крим. сканера></span><br>
                        2. <span class="edFi"><улика></span> – <span class="edFi"><распечатка крим. сканера></span><br>
                        3. <span class="edFi"><улика></span> – <span class="edFi"><распечатка крим. сканера></span><br>
                        <br>
                        [bold]В ходе расследования доказано:[/bold]<br>
                        <span class="edFi"><опишите результаты расследования></span><br>
                        <br>
                        [bold]Дальнейшее расследование бессмысленно по причине:[/bold]<br>
                        <span class="edFi"><укажите причину / дело раскрыто / недостаточно доказательств></span><br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Детальный отчет о проведенном расследовании для СБ
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]\xa0\xa0\xa0${addSpaces}[bold]${stationNumber} СБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ О ПРОВЕДЁННОМ РАССЛЕДОВАНИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], предоставляю детальный отчет о результатах расследования, проведенного в соответствии с моими служебными обязанностями.<br>
                        <br>
                        [bold]Время, дата и место происшествия:[/bold] с <span class="edFi">00:00</span> до <span class="edFi">00:00</span> от начала смены, ${currentDate}, <span class="edFi"><укажите место инцидента></span>.<br>
                        [bold]Описание событий:[/bold]<br>
                        <span class="edFi"><краткое описание инцидента и обстоятельств, ведущих к расследованию></span><br>
                        [bold]Ход расследования:[/bold]<br>
                        <span class="edFi"><опишите ваши действия во время процесса расследования инцидента: первичный осмотр места происшествия, получение свидетельских показаний, анализ обнаруженных улик и т.д.></span><br>
                        <br>
                        <br>
                        [bold]Список подозреваемых[/bold]:<br>
                        1. <span class="edFi"><ФИО подозреваемого></span>, сотрудник подозревается по статье(-ям): <span class="edFi">XXX</span><br>
                        2. <span class="edFi"><ФИО подозреваемого></span>, сотрудник подозревается по статье(-ям): <span class="edFi">XXX</span><br>
                        [bold]Список свидетелей[/bold]:<br>
                        1. <span class="edFi"><ФИО свидетеля></span>, <span class="edFi"><должность свидетеля></span>.
                        <br>[italic]Показания свидетеля[/italic]: <span class="edFi"><краткое описание показаний></span><br>
                        2. <span class="edFi"><ФИО свидетеля></span>, <span class="edFi"><должность свидетеля></span>.
                        <br>[italic]Показания свидетеля[/italic]: <span class="edFi"><краткое описание показаний></span><br>
                        3. <span class="edFi"><ФИО свидетеля></span>, <span class="edFi"><должность свидетеля></span>.
                        <br>[italic]Показания свидетеля[/italic]: <span class="edFi"><краткое описание показаний></span><br>
                        [bold]Список улик[/bold]:<br>
                        1. Улика #1: <span class="edFi"><улика | распечатка крим. сканера></span><br>
                        2. Улика #2: <span class="edFi"><улика | распечатка крим. сканера></span><br>
                        3. Улика #3: <span class="edFi"><улика | распечатка крим. сканера></span><br>
                        [bold]Экспертный отчет[/bold]:<br>
                        1. Экспертный отчет #1: <span class="edFi"><ФИО эксперта></span>, <span class="edFi"><должность эксперта></span> – <span class="edFi"><итоговой вывод></span><br>
                        2. Экспертный отчет #2: <span class="edFi"><ФИО эксперта></span>, <span class="edFi"><должность эксперта></span> – <span class="edFi"><итоговой вывод></span><br>
                        3. Экспертный отчет #3: <span class="edFi"><ФИО эксперта></span>, <span class="edFi"><должность эксперта></span> – <span class="edFi"><итоговой вывод></span><br>
                        <br>
                        [bold]Результаты расследования[/bold]:<br>
                        <span class="edFi"><опишите результаты расследования></span><br>
                        <br>
                        [bold]Заключение[/bold]:<br>
                        <span class="edFi"><опишите выводы относительно обстоятельств инцидента и возможных дальнейших действий></span><br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3" title="feat. Stratuzzz">
                        Заключение по делу (частный детектив)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#624f39]█▀█    █\xa0\xa0\xa0[head=3]Частный Детектив [/head]<br>
                        █▀▀    █       [bold]Заключение по делу[/bold]<br>
                        █\xa0\xa0\xa0\xa0\xa0\xa0█       Ответственный детектив:<span class="maFi">${yourName}</span>[/color]<br>
                        ──────────────────────────────────────────<br>
                        <br>
                        ФИ(О) Обвиняемого:    [color=#002AAF]<span class="maFi">${fullName}</span>[/color]<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾<br>
                        Должность обвиняемого:    [color=#002AAF]<span class="maFi">${selectedPosition}</span>[/color]<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾<br>
                        Обвиняется в: <span class="edFi"><укажите обвинения></span><br>
                        <br>
                        Найденные улики:<br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите улику></span>[/color]<br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите улику></span>[/color]<br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите улику></span>[/color]<br>
                        <br>
                        Показания свидетелей:<br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите ФИ(О) Свидетеля></span>[/color]<br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите показания></span>[/color]<br>
                        <br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите ФИ(О) Свидетеля></span>[/color]<br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите показания></span>[/color]<br>
                        <br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите ФИ(О) Свидетеля></span>[/color]<br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите показания></span>[/color]<br>
                        <br>
                        Иные сведения и примечания:<br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите примечание></span>[/color]<br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите примечание></span>[/color]<br>
                        <br>
                        Версия следователя:<br>
                        [color=#002AAF][bullet/]<span class="edFi"><укажите версию></span>[/color]<br>
                        <br><br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3" title="feat. Stratuzzz">
                        Криминалистическое заключение (частный следователь)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                       [color=#624f39]█▀█    █\xa0\xa0\xa0[head=3]Частный следователь[/head]<br>
                            █▀▀    █\xa0[bold]Криминалистическое заключение[/bold]<br>
                            █\xa0\xa0\xa0\xa0\xa0\xa0█\xa0\xa0Ответственный детектив: <span class="maFi">${yourName}</span>[/color]<br>
                            ──────────────────────────────────────────<br>
                            <br>
                            ФИ(О) погибшего: [color=#002AAF]<span class="maFi">${fullName}</span>[/color]<br>
                            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾<br>
                            Местонахождение<br>
                            погибшего: [color=#002AAF]<span class="edFi"><укажите местоположение></span>[/color]<br>
                            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾<br>
                            Раса погибшего:<br>
                            \[ ] Человек \[ ] Унатх<br>
                            \[ ] Слаймолюд \[ ] Дварф<br>
                            \[ ] Арахнид \[ ] Дионея<br>
                            \[ ] Ниан \[ ] Иная:<br>
                            Иная раса: [color=#002AAF][/color]<br>
                                                ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾<br>
                            Пол погибшего:<br>
                            \[ ] Мужской \[ ] Женский \[ ] Неопределённый<br>
                            <br>
                            Должность: [color=#002AAF]<span class="maFi">${selectedPosition}</span>[/color]<br>
                                                ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾<br>
                            Причина смерти: [color=#002AAF]<span class="edFi"><укажите причину></span>[/color]<br>
                                                            ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾<br>
                            Состояние тела погибшего:<br>
                            \[ ] Критическая стадия гниения \[ ] Неизвестно \[ ] В морге \[ ] Готово к реабилитации \[ ] Реабилитации не подлежит<br>
                            <br>
                            Пропавшие предметы погибшего:<br>
                            \[ ] КПК \[ ] Одежда \[ ] Рюкзак \[ ] Гарнитура:<br>
                            \[ ] Другие: [color=#002AAF][/color]<br>
                            ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾<br>
                            Место преступления(смерти):<br>
                            [color=#002AAF]<span class="edFi"><укажите место></span>[/color]<br>
                            <br>
                            Примечания:<br>
                            [color=#002AAF]<span class="edFi"><примечание></span>[/color] <br>
                            <br>
                    </div>
                </div>
            </div>
            `;
        }
        //Разрешение на рецептурный препарат
        else if (statementType === '47') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Разрешение на рецептурный препарат
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} МЕД-ПД[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0РАЗРЕШЕНИЕ НА РЕЦЕПТУРНЫЙ ПРЕПАРАТ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], разрешаю хранение и использование рецептурного препарата или наркотического препарата [bold][color=MediumSlateBlue]"<span class="edFi"><полное наименование вещества></span>"[/color][/bold] пациенту [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic].<br>
                        <br>
                        [bold]Поставленный диагноз[/bold]: <span class="edFi"><укажите поставленный диагноз></span><br>
                        <br>
                        [bold]Причина выдачи препарата[/bold]: <span class="edFi"><укажите причину></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Заключение о состоянии здоровья | Заключение о психологическом здоровье
        else if (statementType === '48') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Общее заключение о состоянии здоровья
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} МЕД-ПД[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАКЛЮЧЕНИЕ О СОСТОЯНИИ ЗДОРОВЬЯ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Пациент [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], был направлен на медицинское обследование в связи с <span class="edFi"><причина прохождения обследования></span>.<br>
                        Был произведён полный осмотр пациента, проведены необходимые исследования и анализы.<br>
                        <br>
                        [bold]Состав врачебной комиссии[/bold]:<br>
                        1. <span class="maFi">${fullName}</span>, <span class="maFi">${selectedPosition}</span><br>
                        2. <span class="edFi"><ФИО></span>, <span class="edFi"><должность / специализация></span><br>
                        3. <span class="edFi"><ФИО></span>, <span class="edFi"><должность / специализация></span><br>
                        <br>
                        [bold]Состояние пациента при поступлении[/bold]:<br>
                        <span class="edFi"><результаты первичного осмотра></span><br>
                        <br>
                        [bold]Поставленный диагноз[/bold]:<br>
                        <span class="edFi"><заключительный диагноз></span><br>
                        <br>
                        [bold]Психологическое состояние пациента[/bold]:<br>
                        <span class="edFi"><психологический диагноз></span><br>
                        <br>
                        [bold]Оказанное лечение в ходе госпитализации[/bold]:<br>
                        <span class="edFi"><оказанное лечение></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Заключение о психологическом здоровье
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} МЕД-ПД[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0ЗАКЛЮЧЕНИЕ О ПСИХОЛОГИЧЕСКОМ ЗДОРОВЬЕ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Данное заключение составлено на основе проведенного психологического исследования пациента [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold].<br>
                        Исследование включало в себя анализ психологического состояния, поведенческих реакций, а также беседу с пациентом.<br>
                        <br>
                        [bold]Психологический анамнез[/bold]:<br>
                        <span class="edFi"><к работе не годен / психически нездоров / опасен для окружающих / маниакальное расстройство и т.д.></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h4>Психологический анамнез</h4>
            <b>Отлично (+ экспедиции)</b> [Имя пациента] прошел/а комплексное психологическое исследование перед трудоустройством. Исследование включало в себя
            оценку стрессоустойчивости, адаптивности к изменяющимся условиям и социальной адаптации. Результаты исследования свидетельствуют о высоком уровне
            психологической подготовленности [Имя пациента] к условиям экспедиционной деятельности.<br>
            <b>Нормально</b> По результатам психологической оценки подтверждается отсутствие значительных психических расстройств.
            Сотрудник способен эффективно справляться с рабочими задачами и взаимодействовать в коллективе.<br>
            <b>Нормально</b> Психологическая оценка показала отсутствие серьезных психических расстройств. Кандидат обладает стабильным эмоциональным
            фоном и способностью адаптироваться к новым условиям.<br>
            <b>Нормально</b> Проведенная оценка психологического состояния кандидата свидетельствует о его психическом здоровье, соответствующем нормам
            для эффективной и продуктивной работы.<br>
            <b>Нормально</b> [Имя пациента] прошел/а оценку психического здоровья, и результаты свидетельствуют об отсутствии клинических проявлений
            психических расстройств.<br>
            <b>Нормально</b> [Имя пациента] проявляет стабильное психологическое состояние, отсутствие признаков серьезных психических расстройств.
            Пациент обладает адекватной самооценкой, социальной адаптацией и способностью к эмоциональной регуляции.<br>
            <b>Нормально</b> В ходе беседы, [Имя пациента] демонстрировал/а уверенность в себе, адекватное восприятие окружающей среды и готовность к
            взаимодействию с окружающими. Отмечается отсутствие явных психопатологических симптомов.<br>
            <b>Нормально</b> Пациент [Имя пациента] был подвергнут/а психологической оценке с целью определения готовности к вступлению в трудовую
            деятельность. В ходе исследования выявлено, что пациент обладает стабильным эмоциональным состоянием, социальной адаптацией и высоким уровнем
            мотивации к работе. Психологические показатели [Имя пациента] позволяют сделать вывод о его/ее готовности к успешному выполнению трудовых
            обязанностей.<br>
            <b>Почти нормально</b> В ходе психологической оценки выявлены небольшие особенности, но они не представляют существенных препятствий
            для трудоустройства. Рекомендуется уделить внимание некоторым аспектам психического благополучия.<br>
            <b>Почти нормально</b> Согласно результатам психологической экспертизы, кандидат признан пригодным для трудоустройства.
            Замечены лишь незначительные аспекты, требующие внимания в процессе адаптации в коллективе.<br>
            <b>Нужно продолжать наблюдение</b> Сотрудник обладает устойчивым психическим здоровьем. Однако, рекомендуется продолжать наблюдение
            психологического состояния кандидата в рабочей обстановке.<br>
            <b>Нужно продолжать наблюдение</b> В целом, психологическое состояние кандидата не представляет серьезных ограничений для трудовой деятельности.
            Рекомендуется дополнительное наблюдение и поддержка со стороны психолога в рабочей среде.<br>
            <b>Отрицательно</b> На основе психологического обследования выявлены факторы, указывающие на наличие психических расстройств, что создает риски
            для трудовой деятельности.<br>
            <b>Отрицательно</b> Психологическое заключение свидетельствует о том, что кандидат не соответствует требованиям психического здоровья,
            необходимым для успешного выполнения трудовых обязанностей.<br>
            <b>Отрицательно</b> Психиатрическое заключение подтверждает наличие психических расстройств, представляющих серьезное препятствие для успешного
             трудоустройства.<br>
            <b>Отрицательно</b> Проведенный анализ выявил отрицательные аспекты психологического статуса кандидата, что может повлиять на его способность
            к адекватному выполнению профессиональных обязанностей.<br>
            <b>Отказ</b> Анализ выявил наличие психических нарушений, представляющих риск для безопасности и производительности на рабочем месте.<br>
            <b>Отказ</b> Психологическое заключение свидетельствует о непригодности кандидата к трудоустройству в связи с выраженными психическими
             нарушениями.<br>
            <b>Представляет опасность</b> Психологическое состояние [Имя пациента] представляет опасность для окружающих.
            Выявлены агрессивные и непредсказуемые поведенческие паттерны. Необходимо предпринять срочные меры по изоляции пациента в целях обеспечения
            безопасности экипажа станции.<br>
             <b>Стресс</b> [Имя пациента] обратился/ась за психологической помощью в связи с семейными трудностями.
            В ходе сессий установлены факторы стресса, воздействующие на пациента. Рекомендуется психологическая поддержка, направленная на решение
            семейных конфликтов и укрепление отношений.<br>
            <b>Депрессия</b> Пациент [Имя пациента] находится в состоянии депрессии, что подтверждается клиническими проявлениями, включая ухудшение
             настроения, потерю интереса к повседневным активностям и снижение активности. Рекомендуется начать терапевтические мероприятия для стабилизации
              эмоционального состояния.<br>
            <b>Тревожное расстройство</b> [Имя пациента] прошел/а оценку в связи с клиническими проявлениями тревожного расстройства. Обнаружены симптомы,
            такие как повышенная тревожность, навязчивые мысли и физиологические проявления тревоги. Рекомендуется курс когнитивно-поведенческой терапии и
            методов релаксации.<br>
            <b>Тревожное расстройство</b> [Имя пациента] проявляет характерные симптомы тревожного расстройства, такие как чрезмерная тревожность, беспокойство и
             физиологические проявления тревоги. Рекомендуется психотерапия для управления тревожными симптомами.<br>
            <b>ПТСР</b> [Имя пациента] прошел/ла психологическую оценку после переживания травматического события [описание события],
            чтобы определить его/ее эмоциональное состояние и необходимость терапевтического вмешательства. В результате исследования выявлены симптомы
            посттравматического стрессового расстройства (ПТСР), такие как повторные воспоминания, кошмары и повышенная тревожность.
            Рекомендуется дальнейшее психотерапевтическое вмешательство и мониторинг состояния.<br>
            <b>Маниакальное расстройство</b> Психологическое состояние [Имя пациента] характеризуется маниакальным расстройством.
            Обнаружены симптомы эйфории, повышенной активности, потери реальности и неадекватного поведения. Рекомендуется дальнейшая консультация
            психиатра и назначение соответствующего лечения.<br>
          `;
        }
        //Распоряжение о медицинском вмешательстве
        else if (statementType === '49') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;

            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Распоряжение о медицинском вмешательстве
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-МЕД[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        ================================================<br>
                        \xa0РАСПОРЯЖЕНИЕ О МЕДИЦИНСКОМ ВМЕШАТЕЛЬСТВЕ<br>
                        ================================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], распоряжаюсь провести медицинское вмешательство с целью <span class="edFi"><опишите цель медицинского вмешательства></span>, в отношении [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold] в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic].<br>
                        <br>
                        [bold]Основание для проведения операции[/bold]: <span class="edFi"><укажите основание></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Запрос на проведение эвтаназии
        else if (statementType === '50') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Запрос на проведение эвтаназии
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                    [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                    [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                    [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                    [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} ПД-МЕД[/bold]<br>
                    [color=#1b487e]░░░░██░░░████░███[/color]<br>
                    =============================================<br>
                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС НА ПРОВЕДЕНИЕ ЭВТАНАЗИИ<br>
                    =============================================<br>
                    Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                    Составитель документа: <span class="maFi">${fullName}</span> <br>
                    Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                    <br>
                    Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу содействие медицинского отдела в проведении эвтаназии в качестве врачебного лечения по причине <span class="edFi"><укажите причину запроса></span>.<br>
                    <br>
                    С последствиями данного решения ознакомлен, медицинским персоналом была установлена рациональность и гуманность данного решения.<br>
                    Претензий к к медицинскому отделу при соблюдении ими протоколов эвтаназии не имею.<br>
                    <br>
                    По окончании процедуры прошу утилизировать тело путём <span class="edFi"><способ утилизации></span> при наличии на это возможности.<br>
                    <br>
                    Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                    =============================================<br>
                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
        `;
        }
        //Свидетельство о смерти
        else if (statementType === '51') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Свидетельство о смерти
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} МЕД[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0СВИДЕТЕЛЬСТВО О СМЕРТИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        [bold]ФИО умершего[/bold]: [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold]<br>
                        [bold]Должность умершего[/bold]: [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic]<br>
                        [bold]Раса[/bold]: <span class="edFi"><укажите расу></span><br>
                        [bold]Пол[/bold]: <span class="edFi"><укажите пол></span><br>
                        [bold]Причина смерти[/bold]: <span class="edFi"><укажите причину смерти></span><br>
                        [bold]Возможность проведения реанимации или клонирования[/bold]: <span class="edFi"><укажите возможность></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
        `;
        }
        //Разрешение на утилизацию тела
        else if (statementType === '52') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Разрешение на утилизацию тела (сотрудник станции)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} МЕД[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0РАЗРЕШЕНИЕ НА УТИЛИЗАЦИЮ ТЕЛА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], разрешаю утилизировать тело сотрудника [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic] в связи с невозможностью его реанимации или клонирования.<br>
                        <br>
                        [bold]Способ утилизации[/bold]: <span class="edFi"><укажите способ утилизации></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Разрешение на утилизацию тела (незарегистрированное лицо)
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} МЕД[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0РАЗРЕШЕНИЕ НА УТИЛИЗАЦИЮ ТЕЛА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], разрешаю утилизировать тело <span class="edFi">незарегистрированного / неопознанного</span> на станции [color=Indigo]${stationNumber}[/color] лица в связи с <span class="edFi"><опишите причину></span>.<br>
                        <br>
                        [bold]Информация о теле[/bold]: <span class="edFi"><любые сведения о погибшем></span><br>
                        <br>
                        [bold]Способ утилизации[/bold]: <span class="edFi"><укажите способ утилизации></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
        `;
        }
        //Разрешение на строительство
        else if (statementType === '53') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Разрешение на строительство
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} ИНЖ-<span class="otFi">${selectedDepartmentCode}</span>[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0РАЗРЕШЕНИЕ НА СТРОИТЕЛЬСТВО<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], разрешаю произвести сотруднику [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], перепланировку части станции <span class="edFi"><укажите место перепланировки></span> по причине <span class="edFi"><укажите причину></span>.<br>
                        <br>
                        [bold]Согласованный объем перепланировки[/bold]:<br>
                        <span class="edFi"><опишите объем перепланировки></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Отчёт о техническом состоянии
        else if (statementType === '54') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчет о техническом состоянии
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} ИНЖ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ О ТЕХНИЧЕСКОМ СОСТОЯНИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Выполнена проверка работоспособности [bold][color=MediumSlateBlue]<span class="edFi"><название системы / объекта></span>[/color][/bold].
                        <br>
                        Результаты проверки подверглись детальному анализу с целью выявления основных факторов, влияющих на нестабильную работу объекта.<br>
                        <br>
                        [bold]Причина поломки объекта[/bold]:<br>
                        <span class="edFi"><укажите причину></span><br>
                        <br>
                        [bold]Выявленные повреждения объекта[/bold]:<br>
                        <span class="edFi"><опишите повреждения></span><br>
                        <br>
                        [bold]Произведенный ремонт объекта[/bold]:<br>
                        <span class="edFi"><укажите действия по ремонту объекта></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
          `;
        }
        //Запрос на проведение строительных работ
        else if (statementType === '55') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Запрос на проведение строительных работ
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-ИНЖ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0ЗАПРОС НА ПРОВЕДЕНИЕ СТРОИТЕЛЬНЫХ РАБОТ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу провести строительные работы в <span class="edFi"><название отдела / объекта></span> по причине <span class="edFi"><укажите причину></span>.<br>
                        <br>
                        [bold]Перечень строительных работ[/bold]:<br>
                        1. <span class="edFi"><опишите требование></span><br>
                        2. <span class="edFi"><опишите требование></span><br>
                        3. <span class="edFi"><опишите требование></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;" title="feat. fern2">Перечень строительных работ</h3>
            - Автономная система энергопитания для отдела, которую, при отсутствии основного питания на станции, можно будет запустить вручную неспециалисту. В остальное время отдел должен быть подключен к основному источнику энергии станции.<br>
            - Установка конденсатора газа.<br>
            - Установка и настройка аппарата клонирования.<br>
            - Установка и настройка криокапсулы.<br>
            - Установка скруббера.<br>
            - Установка термостата.<br>
            `;
        }
        //Отчёт об эксперименте
        else if (statementType === '56') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчет об эксперименте
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} НИО[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ ОБ ЭКСПЕРИМЕНТЕ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        [bold][color=#1b487e]Внешнее описание объекта эксперимента[/color][/bold]:<br>
                        <span class="edFi"><опишите внешние характеристики объекта></span><br>
                        <br>
                        [bold][color=#1b487e]Участники эксперимента[/color][/bold]:<br>
                        1. <span class="maFi">${fullName}</span> (<span class="maFi">${selectedPosition}</span>)<br>
                        2. <span class="edFi"><ФИО></span>, (<span class="edFi"><должность></span>)<br>
                        3. <span class="edFi"><ФИО></span>, (<span class="edFi"><должность></span>)<br>
                        <br>
                        <br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3][color=#3167bd][bold]Эксперимент №00[/bold][/color][/head]<br>
                        [color=#ffffff]=============================================[/color]<br>
                        [bold][color=#1b487e]Описание эксперимента[/color][/bold]:<br>
                        <span class="edFi"><опишите ход эксперимента></span><br>
                        <br>
                        [bold][color=#1b487e]Ожидаемый результат[/color][/bold]:<br>
                        <span class="edFi"><опишите ожидаемый результат></span><br>
                        <br>
                        [bold][color=#1b487e]Используемое оборудование[/color][/bold]:<br>
                        <span class="edFi"><укажите перечень использованного оборудования></span><br>
                        <br>
                        [bold][color=#1b487e]Фактический результат[/color][/bold]:<br>
                        <span class="edFi"><опишите фактический результат></span><br>
                        [color=#ffffff]=============================================[/color]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
        `;
        }
        //Приказ о признании разумности существа
        else if (statementType === '57') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Приказ о признании разумности существа
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} НИО[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0ПРИКАЗ О ПРИЗНАНИИ РАЗУМНОСТИ СУЩЕСТВА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate}<br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        В ходе тестирования существа были зафиксированы признаки высшей мозговой активности и разумности, включая способности к мышлению и обучению, понимание моральных принципов и наличие здравого смысла в принимаемых решениях.<br>
                        <br>
                        Таким образом я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], исходя из принципов равенства прав всех разумных существ, установленного ОПРС, признаю данное существо разумным.<br>
                        <br>
                        [bold]Внешний вид существа:[/bold]<br>
                        <span class="edFi"><укажите внешние признаки существа></span><br>
                        <br>
                        [bold]Устанавливаемое полное имя существа:[/bold]<br>
                        [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold]<br>
                        <br>
                        Существо [bold]<span class="edFi"><принято/не принято></span>[/bold] в качестве пассажира станции до окончания смены.<br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
        `;
        }
        //Запрос на проведение модернизации
        else if (statementType === '58') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Запрос на проведение модернизации отдела
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-НИО[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС НА ПРОВЕДЕНИЕ МОДЕРНИЗАЦИИ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу модернизировать электрические приборы [bold][color=#3167bd]<span class="maFi">${departmentType}</span>[/color][/bold] по причине <span class="edFi"><укажите причину запроса></span>.<br>
                <br>
                [bold]Перечень модернизации:[/bold]<br>
                1. <span class="edFi"><укажите объект модернизации></span><br>
                2. <span class="edFi"><укажите объект модернизации></span><br>
                3. <span class="edFi"><укажите объект модернизации></span><br>
                <br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Запрос на проведение модернизации системы-объекта
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-НИО[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС НА ПРОВЕДЕНИЕ МОДЕРНИЗАЦИИ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу модернизировать приборы в <span class="edFi"><укажите систему / объект></span> по причине <span class="edFi"><укажите причину запроса></span>.<br>
                <br>
                [bold]Перечень модернизации:[/bold]<br>
                1. <span class="edFi"><укажите объект модернизации></span><br>
                2. <span class="edFi"><укажите объект модернизации></span><br>
                3. <span class="edFi"><укажите объект модернизации></span><br>
                <br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
`;
        }
        //Отчёт об утилизации
        else if (statementType === '59') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчет об утилизации
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} СНБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ ОБ УТИЛИЗАЦИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate}<br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Отделом Снабжения была произведена утилизация объектов при <span class="edFi"><укажите метод утилизации></span>.<br>
                        В ходе утилизации были обнаружены ценные предметы и вещи, ценные предметы были переданы в соответствующие отделы для их использования.<br>
                        <br>
                        [bold]Перечень найденных вещей[/bold]:<br>
                        1. <span class="edFi"><укажите предмет></span><br>
                        2. <span class="edFi"><укажите предмет></span><br>
                        3. <span class="edFi"><укажите предмет></span><br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Метод утилизации</h3>
                - утилизации обломков<br>
                - проведении экспедиции<br>
                - переработке мусора и излишних предметов<br>
             `;
        }
        //Заявка на поставку товара
        else if (statementType === '60') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedDepartmentCode = departmentCode.options[departmentCode.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Заявка на поставку товара
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} <span class="otFi">${selectedDepartmentCode}</span>-СНБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВКА НА ПОСТАВКУ ТОВАРА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу [bold][color=#9c593a]Отдел Снабжения[/color][/bold] организовать поставку продукции/сырья/материалов.<br>
                        <br>
                        [bold]Перечень необходимых товаров:[/bold]<br>
                        1. <span class="edFi"><заказ></span>, <span class="edFi"><количество></span><br>
                        2. <span class="edFi"><заказ></span>, <span class="edFi"><количество></span><br>
                        3. <span class="edFi"><заказ></span>, <span class="edFi"><количество></span><br>
                        <br>
                        [bold]Причина заказа[/bold]: <span class="edFi"><причина заказа></span><br>
                        <br>
                        [bold]Место доставки товара[/bold]: <span class="edFi"><укажите место доставки></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Доступные ресурсы</h3>
            - Бананиум<br>
            - Бронестекло<br>
            - Золотой слиток<br>
            - Плазма<br>
            - Плазменное бронестекло<br>
            - Плазменное стекло<br>
            - Серебряный слиток<br>
            - Сталь<br>
            - Стекло<br>
            - Уран<br>
            - Руда бананиума<br>
            - Руда кварца<br>
            - Руда железа<br>
            - Уголь<br>
            - Руда золота<br>
            - Руда плазмы<br>
            - Руда серебра<br>
            - Руда урана<br>
            - Набор плат для аппарата клонирования: медицинский сканер (машинная плата), капсула клонирования (машинная плата), консоль клонирования (консольная плата)<br>
            - СМЭС, подстанция, генератор, РИТЭГ, микросхема настенной ВСУ, микросхема настенной подстанции, микросхема настенного генератора<br>
            - Мини-генератор гравитации, гироскоп, консоль управления шаттлом, ракетный двигатель, сканер массы<br>
            - Консоль контроля солнечных батарей, трекер солнечных лучей<br>
            - Труп карпа<br>
            - Артефакт<br>
            `;
        }
        //Отчёт об экспедиции
        else if (statementType === '61') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Отчет об экспедиции
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} СНБ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ ОБ ЭКСПЕДИЦИИ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        В представленном отчёте рассматриваются итоги проведенной экспедиции утилизаторов.<br>
                        <br>
                        [bold]Состояние атмосферы[/bold]:<br>
                        <span class="edFi"><опишите состояние атмосферы: пригодная для жизни / загрязнена></span><br><br>
                        [bold]Состояние аванпоста:[/bold]<br>
                        <span class="edFi"><укажите степень разрушенности и наличие/отсутствие света></span><br><br>
                        [bold]Враждебная фауна:[/bold]<br>
                        <span class="edFi"><укажите тип существ и их количество, при наличии></span><br><br>
                        [bold]Погибшие при исследовании:[/bold]<br>
                        <span class="edFi"><перечислите погибших во время экспедиции (включая обнаруженные неизвестные тела)></span><br><br>
                        [bold]Стоимость эвакуированного оборудования:[/bold]<br>
                        <span class="edFi"><укажите общую стоимость эвакуированного оборудования></span><br>
                        <br>
                        [bold]Дополнительная информация[/bold]: <span class="edFi"><дополнительная информация></span><br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Свидетельство о заключении брака | Разрешение на расширение брака | Свидетельство о расторжении брака
        else if (statementType === '62') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Свидетельство о заключении брака
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} СРВ-ПД[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0СВИДЕТЕЛЬСТВО О ЗАКЛЮЧЕНИИ БРАКА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], заключаю брак между:<br>
                        <br>
                        [bold]<span class="edFi"><ФИО></span>, в должности <span class="edFi"><должность></span>[/bold],<br>
                        [bold]<span class="edFi"><ФИО></span>, в должности <span class="edFi"><должность></span>[/bold]<br>
                        <br>
                        После заключения брака брачующимся были присвоены следующие полные имена:<br>
                        <br>
                        [head=3]<span class="edFi"><ФИО></span>[/head],<br>
                        [head=3]<span class="edFi"><ФИО></span>[/head]<br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Разрешение на расширение брака
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-СРВ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0РАЗРЕШЕНИЕ НА РАСШИРЕНИЕ БРАКА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], даю своё разрешение на расширение брака, заключённого между:<br>
                        <br>
                        [bold]<span class="edFi"><ФИО></span>, в должности <span class="edFi"><должность></span>[/bold],<br>
                        [bold]<span class="edFi"><ФИО></span>, в должности <span class="edFi"><должность></span>[/bold]<br>
                        <br>
                        Для вступления в данный брак новых супругов:<br>
                        <br>
                        [head=3]<span class="edFi"><ФИО></span>[/head],<br>
                        [head=3]<span class="edFi"><ФИО></span>[/head]<br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Свидетельство о расторжении брака
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color]<br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} СРВ-ПД[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0РАЗРЕШЕНИЕ НА РАСШИРЕНИЕ БРАКА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], расторгаю брак между:<br>
                        <br>
                        [bold]<span class="edFi"><ФИО></span>, в должности <span class="edFi"><должность></span>[/bold],<br>
                        [bold]<span class="edFi"><ФИО></span>, в должности <span class="edFi"><должность></span>[/bold]<br>
                        <br>
                        После расторжения брака бывшим супругам были присвоены следующие полные имена:<br>
                        <br>
                        [head=3]<span class="edFi"><ФИО></span>[/head],<br>
                        [head=3]<span class="edFi"><ФИО></span>[/head]<br>
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
        `;
        }
        //Меню столовой | Меню бара
        else if (statementType === '63') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Меню столовой
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=LimeGreen]
                                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>
                                    ░░███░░░░███░███████░███░░░░██░██░░░░██░░<br>
                                    ░░████░░████░██░░░░░░████░░░██░██░░░░██░░<br>
                                    ░░██░████░██░█████░░░██░██░░██░██░░░░██░░<br>
                                    ░░██░░██░░██░██░░░░░░██░░██░██░██░░░░██░░<br>
                                    ░░██░░░░░░██░███████░██░░░████░░██████░░░<br>
                                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░[/color]<br>
                                    <br>
                                    [head=2][color=green]╔══════════════════════════╗[/head]<br>
                                    [head=2]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПЕРВЫЕ БЛЮДА[/head]<br>
                                    [head=2]╚══════════════════════════╝[/head][/color]<br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    <br>
                                    [head=2][color=#A60800]╔══════════════════════════╗[/head]<br>
                                    [head=2]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ВТОРЫЕ БЛЮДА[/head]<br>
                                    [head=2]╚══════════════════════════╝[/head][/color]<br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    <br>
                                    [head=2][color=#A68B00]╔══════════════════════════╗[/head]<br>
                                    [head=2]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ГАРНИРЫ[/head]<br>
                                    [head=2]╚══════════════════════════╝[/head][/color]<br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    <br>
                                    [head=2][color=#230672]╔══════════════════════════╗[/head]<br>
                                    [head=2]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0САЛАТЫ[/head]<br>
                                    [head=2]╚══════════════════════════╝[/head][/color]<br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    <br>
                                    [head=2][color=pink]╔══════════════════════════╗[/head]<br>
                                    [head=2]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ДЕСЕРТЫ[/head]<br>
                                    [head=2]╚══════════════════════════╝[/head][/color]<br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    [bullet]<span class="edFi"><наименование блюда></span><br>
                                    <br>
                                    <br>
                                    <br>
                                    [italic][color=DarkGray]Заведующий столовой оставляет за собой право внесение изменений в действующее меню. Наличие блюда в меню не дает полной гарантии его наличия в настоящем или будущем времени.[/color][/italic]<br>
                                    <br>
                                    [bold]Дата[/bold]: ${currentDate} <br>
                                    [bold]Ответственный за меню[/bold]: <span class="maFi">${fullName}</span>, <span class="maFi">${selectedPosition}</span> <br>
                                    [bold]Подпись[/bold]: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span>[/italic][/color]<br>
                                    =============================================<br>
                                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Меню бара
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=DarkViolet]
                                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>
                                    ░░░░░░░░░██████░░░█████░░██████░░░░░░░░░<br>
                                    ░░░░░░░░░██░░░██░██░░░██░██░░░██░░░░░░░░<br>
                                    ░░░░░░░░░██████░░███████░██████░░░░░░░░░<br>
                                    ░░░░░░░░░██░░░██░██░░░██░██░░░██░░░░░░░░<br>
                                    ░░░░░░░░░██████░░██░░░██░██░░░██░░░░░░░░<br>
                                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                                    [/color]<br>
                                    <br>
                                    [color=#530FAD][head=2]╔══════════════════════════╗[/head]<br>
                                    [head=2]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0АЛКОГОЛЬНЫЕ НАПИТКИ[/head]<br>
                                    [head=2]╚══════════════════════════╝[/head][/color]<br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    <br>
                                    [color=#7109AA][head=2]╔══════════════════════════╗[/head]<br>
                                    [head=2]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0КОКТЕЙЛИ[/head]<br>
                                    [head=2]╚══════════════════════════╝[/head][/color]<br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    <br>
                                    [color=Violet][head=2]╔══════════════════════════╗[/head]<br>
                                    [head=2]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ[/head]<br>
                                    [head=2]╚══════════════════════════╝[/head][/color]<br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    [bullet]<span class="edFi"><наименование напитка></span><br>
                                    <br>
                                    <br>
                                    <br>
                                    [bold]Дата[/bold]: ${currentDate} <br>
                                    [bold]Ответственный за меню[/bold]: <span class="maFi">${fullName}</span>, <span class="maFi">${selectedPosition}</span> <br>
                                    [bold]Подпись[/bold]: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span>[/italic][/color]<br>
                                    =============================================<br>
                                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Заявление на получение КПК | ID-карты
        if (statementType === '64') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Заявление на КПК и ID-карту
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ КПК и ID-КАРТЫ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу выдать мне новый КПК и ID-карту взамен <span class="edFi"><украденных/потерянных></span>.<br>
                        <br>
                        Мою внешность возможно подтвердить биометрией.<br>
                        <br>
                        Я согласен(на), что мне будет выдан штраф за утерю оборудования NanoTrasen.<br>
                        <br>
                        [italic][color=DarkGray]В случае нахождения старого КПК и ID-карты штраф аннулируется.[/color][/italic]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Новый член экипажа станции
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ КПК и ID-КАРТЫ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: Пассажир<br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], прошу выдать мне КПК и ID-карту в качестве идентификационных документов в рамках моего пребывания на станции [color=Indigo]${stationNumber}[/color].<br>
                        <br>
                        Подтверждаю свое согласие на обработку моих персональных и биометрических данных корпорацией NanoTrasen.<br>
                        Обязуюсь соблюдать все установленные правила и нормы корпорации NanoTrasen, включая Основные Права Разумных Существ (ОПРС), Корпоративный Закон (КЗ) и Стандартные Рабочие Процедуры (СРП).<br>
                        <br>
                        [italic][color=DarkGray]По первому запросу новый член экипажа должен предоставить «Приказ о признании разумности существа» и «Заключение о психологическом здоровье» принимающему данное заявление.[/color][/italic]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Только КПК
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                    [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                    [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                    [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                    [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                    [color=#1b487e]░░░░██░░░████░███[/color]<br>
                    =============================================<br>
                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ КПК<br>
                    =============================================<br>
                    Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                    Составитель документа: <span class="maFi">${fullName}</span> <br>
                    Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                    <br>
                    Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу выдать мне новый КПК взамен <span class="edFi"><украденного/потерянного></span>.<br>
                    <br>
                    Я согласен(на), что мне будет выдан штраф за утерю оборудования NanoTrasen.<br>
                    <br>
                    [italic][color=DarkGray]В случае нахождения старого КПК штраф аннулируется.[/color][/italic]<br>
                    <br>
                    Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                    =============================================<br>
                    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Только ID-карта
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} ПД-КОМ[/bold]<br>
                [color=#1b487e]░░░░██░░░████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ ID-КАРТЫ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span> <br>
                Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                <br>
                Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу выдать мне новую ID-карту взамен <span class="edFi"><украденной/потерянной></span>.<br>
                <br>
                Мою внешность возможно подтвердить биометрией.<br>
                Я согласен(на), что мне будет выдан штраф за утерю оборудования NanoTrasen.<br>
                <br>
                [color=DarkGray]В случае нахождения старой ID-карты штраф аннулируется.[/color]<br>
                <br>
                Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
`;
        }
        //Запрос повышение
        else if (statementType === '65') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const newSelectedPosition = newPositionSelect.options[newPositionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Запрос повышения
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС ПОВЫШЕНИЯ<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в текущей должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic],
                        прошу рассмотреть возможность повышения сотрудника [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold],
                        в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], согласно иерархии командования.<br>
                        Сотрудник получил необходимую для данной работы квалификацию.<br>
                        <br>
                        [bold]Запрашиваемая должность[/bold]:<br>
                        [bold][color=Indigo]<span class="otFi">${newSelectedPosition}</span>[/color][/bold]<br>
                        <br>
                        [bold]Ответственный за работника глава или сотрудник[/bold]:<br>
                        [italic][color=Indigo]Глава <span class="maFi">${departmentType}</span>[/color][/italic]<br>
                        <br>
                        [bold]Причина повышения[/bold]: [color=#3167bd][italic]<br>
                        <span class="edFi"><укажите причину повышения сотрудника></span><br>[/italic][/color]<br>
                        [bold]Пройденные курсы профессионального развития:[/bold][color=#3167bd][italic]<br>
                        <span class="edFi"><укажите пройденные сотрудником курсы></span><br>[/italic][/color]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Запрос внеперечневого трудоустройства
        else if (statementType === '66') {
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const departmentType = department.options[department.selectedIndex].text;
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Запрос внеперечневого трудоустройства
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}[bold]${stationNumber} КОМ-ЦК[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0ЗАПРОС ВНЕПЕРЕЧНЕВОГО ТРУДОУСТРОЙСТВА<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [bold][color=#3167bd]<span class="maFi">${fullName}</span>[/color][/bold], в текущей должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], прошу рассмотреть возможность принятия в рабочий штат текущей смены сотрудника [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold] на внеперечневую должность.<br>
                        <br>
                        [bold]Полное наименование должности[/bold]:<br>
                        [bold][color=purple]<span class="edFi"><укажите наименование должности></span>[/color][/bold]<br>
                        <br>
                        [bold]Ответственный за работника глава или сотрудник[/bold]:<br>
                        [italic][color=Indigo]Глава <span class="maFi">${departmentType}</span>[/color][/italic]<br>
                        <br>
                        [bold]Выполняемые работы в должности (СРП)[/bold]:[color=#3167bd][italic]<br>
                        <span class="edFi"><укажите СРП сотрудника></span><br>[/italic][/color]
                        <br>
                        [bold]Предоставляемые доступы работнику:[/bold] [color=#3167bd][italic]<br>
                        <span class="edFi"><укажите доступы></span><br>[/italic][/color]
                        <br>
                        [bold]Причина трудоустройства:[/bold] [color=#3167bd][italic]<br>
                        <span class="edFi"><укажите причину трудоустройства></span><br>[/italic][/color]
                        <br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h3 style="user-select: none;">Расширенный доступ:</h3>
            <b><i>Все доступы, кроме</i></b>: Оружейная, Атмосферный, Капитан, Глава персонала, Главный врач, Научный руководитель,
            Старший инженер, Квартирмейстер, Глава службы безопасности<br><br>
            <h3 style="user-select: none;">Все доступы:</h3>
            - Оружейная<br>
            - Капитан<br>
            - Главный врач<br>
            - Глава персонала<br>
            - Юридический<br>
            - Научный руководитель<br>
            - Атмосферный<br>
            - Снабжение<br>
            - Командование<br>
            - Глава службы безопасности<br>
            - Техобслуживание<br>
            - Утилизаторский<br>
            - Бар<br>
            - Церковь<br>
            - Криогеника<br>
            - Гидропоника<br>
            - Медицинский<br>
            - Служба безопасности<br>
            - Бриг<br>
            - Химия<br>
            - Инженерный<br>
            - Уборщик<br>
            - Квартирмейстер<br>
            - Сервис<br>
            - Детектив<br>
            - Старший инженер<br>
            - Внешний<br>
            - Кухня<br>
            - Научный<br>
            - Театр<br>
                `;
        }
        //Анонимный донос | Заявление о нарушении СРП членом экипажа
        else if (statementType === '67') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Анонимный донос
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=DarkSlateGray]${stationNumber} ПД-ЮР<br>
                        =============================================<br>
                        АНОНИМНЫЙ ДОНОС<br>
                        =============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        <br>
                        [bold]Субъект жалобы:[/bold] <span class="obFi">${fullNameObject}</span><br>
                        [bold]Обстоятельства:[/bold] <span class="edFi"><опишите обстоятельства произошедшего></span><br>
                        <br>[/color]
                        [color=DarkGray][italic]Данный документ, после его написания, должен быть предоставлен Агенту Внутренних Дел, как лично, так и при помощи факса.<br>
                        Данный документ не имеет юридической силы, однако, может быть использован в материалах дела расследования или в иных делах в качестве формы "Показания".<br>
                        Данный документ полностью закреплен за Агентом Внутренних Дел и не может находиться в иных руках, кроме заявителя и Агента Внутренних Дел. Исключение составляет Магистрат, а так же представитель Центрального Командования, либо Командир Отряда Быстрого Реагирования.<br>
                        За хранение документа в отличных от списка руках будет следовать юридическая ответственность, в зависимости от тяжести нарушения, описанного в доносе.[/italic][/color]<br>
                        =============================================<br>
                        Место для печатей<br>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Заявление о нарушении СРП членом экипажа
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#1b487e]███░███░░░░██░░░░[/color] <br>
                        [color=#1b487e]░██░████░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#1b487e]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                        [color=#1b487e]░░░░██░░██░██░██░[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} ПД-КОМ[/bold]<br>
                        [color=#1b487e]░░░░██░░░████░███[/color]<br>
                        ===============================================<br>
                        \xa0ЗАЯВЛЕНИЕ О НАРУШЕНИИ СРП ЧЛЕНОМ ЭКИПАЖА<br>
                        ===============================================<br>
                        Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                        Составитель документа: <span class="maFi">${fullName}</span> <br>
                        Должность составителя: <span class="maFi">${selectedPosition}</span><br>
                        <br>
                        Я, [color=#3167bd][bold]<span class="maFi">${fullName}</span>[/bold][/color], в должности [italic][color=#3167bd]<span class="maFi">${selectedPosition}</span>[/color][/italic], заявляю, что член экипажа [bold][color=purple]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [italic][color=purple]<span class="obFi">${selectedPositionObject}</span>[/color][/italic], нарушил один (или несколько) пунктов из Стандартных Рабочих Процедур, а именно:<br>
                        1. <span class="edFi"><укажите пункт СРП></span><br>
                        2. <span class="edFi"><укажите пункт СРП></span><br>
                        3. <span class="edFi"><укажите пункт СРП></span><br>
                        <br>
                        [color=DarkGray][italic]После принятия решения по делу о предполагаемом нарушении, рекомендуется уведомить заявителя о результатах.[/italic][/color]<br>
                        <br>
                        Подпись: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                    </div>
                </div>
            </div>
            `;
        }
        //Формы для Оператора ЦК
        else if (statementType === '68') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            statementTemplate = `
            <div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Приказ Штаба ЦК
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#2db548]███[/color][color=#228B22]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
                [color=#228B22]░██░██[color=#2db548]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#228B22]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#228B22]░░░░██░░[color=#2db548]██[/color]░██░██░[/color]${addSpaces}[bold]для ${stationNumber} ЦК-КОМ[/bold]<br>
                [color=#228B22]░░░░██░░░████░[/color][color=#2db548]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ СЕКТОРАЛЬНОГО ШТАБА ЦК<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span><br>
                Должность составителя: Оператор ЦК<br>
                <br>
                <span class="edFi">Уважаемое(ый) Командование станции (Капитан/Глава Персонала/пр.)</span> ${stationNumber}!<br>
                <br>
                В соответствии с действующим регламентом уведомляем вас об отправке вам следующего приказа:<br>[bold]<span class="edFi"><опишите суть приказа></span><br>
                [/bold]<br>
                Сообщаем вам, что вы должны выполнять действующий приказ беспрекословно. В случае нарушения, к вам будут применены административные санкции корпорации.<br>
                <br>
                За вами остаётся право запросить уточнение по действующему приказу.<br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Ответ Штаба ЦК
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#2db548]███[/color][color=#228B22]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
                [color=#228B22]░██░██[color=#2db548]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#228B22]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#228B22]░░░░██░░[color=#2db548]██[/color]░██░██░[/color]${addSpaces}[bold]для ${stationNumber} ЦК-КОМ[/bold]<br>
                [color=#228B22]░░░░██░░░████░[/color][color=#2db548]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТВЕТ СЕКТОРАЛЬНОГО ШТАБА ЦК<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span><br>
                Должность составителя: Оператор ЦК<br>
                <br>
                <span class="edFi">Уважаемое(ый) Командование станции (Капитан/Глава Персонала/пр.)</span> ${stationNumber}!<br>
                <br>
                Ваше сообщение получено Штабом Центрального Командования Сектора и принято к сведению.<br>
                <br>
                Информируем вас, что <span class="edFi"><текст ответа></span>.<br>
                <br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Запрос о прогрессе цели
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#2db548]███[/color][color=#228B22]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
                [color=#228B22]░██░██[color=#2db548]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#228B22]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#228B22]░░░░██░░[color=#2db548]██[/color]░██░██░[/color]${addSpaces}[bold]для ${stationNumber} ЦК-КОМ[/bold]<br>
                [color=#228B22]░░░░██░░░████░[/color][color=#2db548]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС СЕКТОРАЛЬНОГО ШТАБА ЦК<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0О ПРОГРЕССЕ ЦЕЛИ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span><br>
                Должность составителя: Оператор ЦК<br>
                <br>
                Уважаемое Командование станции ${stationNumber}!<br>
                <br>
                В рамках регулярной проверки, Секторальный Штаб Центрального Командования запрашивает у вас [bold][color=purple]отчёт о прогрессе выполнения цели смены[/color][/bold].<br>
                <br>
                У вас есть [bold]пятнадцать (15) минут[/bold] с момента получения данного факса для предоставления полного отчёта о прогрессе выполнения цели.<br>
                <br>
                Напоминаем вам, что игнорирование в предоставлении отчёта может быть приравнено к невозможности выполнить цель смены.<br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Запрос о статусе станции
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#2db548]███[/color][color=#228B22]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
                [color=#228B22]░██░██[color=#2db548]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#228B22]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#228B22]░░░░██░░[color=#2db548]██[/color]░██░██░[/color]${addSpaces}[bold]для ${stationNumber} ЦК-КОМ[/bold]<br>
                [color=#228B22]░░░░██░░░████░[/color][color=#2db548]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ЗАПРОС СЕКТОРАЛЬНОГО ШТАБА ЦК<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0О СТАТУСЕ СТАНЦИИ<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span><br>
                Должность составителя: Оператор ЦК<br>
                <br>
                Уважаемое Командование станции ${stationNumber}!<br>
                <br>
                В рамках регулярной проверки, Секторальный Штаб Центрального Командования запрашивает у вас [bold][color=purple]полный отчёт о состоянии станции[/color][/bold].<br>
                <br>
                У вас есть [bold]пятнадцать (15) минут[/bold] с момента получения данного факса для предоставления полного отчёта о ситуации на станции.<br>
                <br>
                Напоминаем вам, что игнорирование в предоставлении отчёта может повлечь за собой ряд санкций, вплоть до досрочного завершения смены с отменой всех выплат.<br>
                <br>
                <br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Приказ о ведении отчётов
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#2db548]███[/color][color=#228B22]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
                [color=#228B22]░██░██[color=#2db548]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#228B22]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#228B22]░░░░██░░[color=#2db548]██[/color]░██░██░[/color]${addSpaces}[bold]для ${stationNumber} ЦК-КОМ[/bold]<br>
                [color=#228B22]░░░░██░░░████░[/color][color=#2db548]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ СЕКТОРАЛЬНОГО ШТАБА ЦК<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span><br>
                Должность составителя: Оператор ЦК<br>
                <br>
                <span class="edFi">Уважаемый (Капитан/Глава Персонала/Старший инженер/Главный врач/пр.)</span> станции ${stationNumber}!<br>
                <br>
                Информируем вас, что в виду усиления бюрократизации и стандартизации отчётов, вам направляется приказ о ведении отчёта за кодифицированным номером [bold][color=purple]«<span class="edFi"><укажите код отчета, см. ниже></span>» «<span class="edFi"><укажите название отчёта></span>»[/color][/bold].<br>
                <br>
                Данный отчёт будет запрошен ближе к концу смены, и от его полноты и оперативности в предоставлении будет зависеть зарплата не только Главы, но и всего отдела.<br>
                <br>
                Относитесь к данному приказу ответственно и не игнорируйте его.<br>
                <br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Приказ об уменьшении выплаты за смену
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#2db548]███[/color][color=#228B22]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
                [color=#228B22]░██░██[color=#2db548]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#228B22]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#228B22]░░░░██░░[color=#2db548]██[/color]░██░██░[/color]${addSpaces}[bold]для ${stationNumber} ЦК-КОМ[/bold]<br>
                [color=#228B22]░░░░██░░░████░[/color][color=#2db548]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ СЕКТОРАЛЬНОГО ШТАБА ЦК<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span><br>
                Должность составителя: Оператор ЦК<br>
                <br>
                <span class="edFi">Уважаемый (Капитан/Глава Персонала/Старший инженер/Главный врач/пр.)</span> станции ${stationNumber}!<br>
                <br>
                В связи с полученными отчётами, Центральное Командование приняло решение об уменьшении зарплаты в соответствии со следующей информацией: <br><br>
                1. <span class="edFi"><ФИО наказуемого></span><br>
                - <span class="edFi"><должность наказуемого></span><br>
                - <span class="edFi"><причина наказания></span><br>
                - <span class="edFi"><размер от стандартного оклада></span><br>
                <br>
                2. <span class="edFi"><ФИО наказуемого></span><br>
                - <span class="edFi"><должность наказуемого></span><br>
                - <span class="edFi"><причина наказания></span><br>
                - <span class="edFi"><размер от стандартного оклада></span><br>
                <br>
                3. <span class="edFi"><ФИО наказуемого></span><br>
                - <span class="edFi"><должность наказуемого></span><br>
                - <span class="edFi"><причина наказания></span><br>
                - <span class="edFi"><размер от стандартного оклада></span><br>
                <br>
                Данная информация будет учтена при формировании приказа окончания смены. <br>
                <br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Приказ об увольнении члена Командного Состава Станции
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#2db548]███[/color][color=#228B22]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
                [color=#228B22]░██░██[color=#2db548]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#228B22]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#228B22]░░░░██░░[color=#2db548]██[/color]░██░██░[/color]${addSpaces}[bold]для ${stationNumber} ЦК-КОМ[/bold]<br>
                [color=#228B22]░░░░██░░░████░[/color][color=#2db548]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ СЕКТОРАЛЬНОГО ШТАБА ЦК<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span><br>
                Должность составителя: Оператор ЦК<br>
                <br>
                Уважаемое Командование станции ${stationNumber}!<br>
                <br>
                В связи с полученными отчётами, Центральное Командование приняло решение о снятии с должности члена Командного Состава станции ${stationNumber} в соответствии со следующей информацией:<br>
                - <span class="edFi"><ФИО></span><br>
                - <span class="edFi"><должность наказуемого></span><br>
                - <span class="edFi"><причина снятия с должности></span><br>
                <br>
                В связи с данным приказом, Командование станции обязуется назначить ВрИО Главы взамен уволенного сотрудника.<br>
                Информируем вас, что отсутствие подписи Начальника Штаба ЦК в данном документе признаёт документ недействительным.<br>
                <br>
                Подпись Начальника Штаба Центрального Командования: [color=#0902cc][italic]<span class="edFi"><ВАША ПОДПИСЬ></span><br>[/italic][/color]<br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Уведомление АВД об игнорировании Главами Приветствия ЦК
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#2db548]███[/color][color=#228B22]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
                [color=#228B22]░██░██[color=#2db548]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#228B22]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#228B22]░░░░██░░[color=#2db548]██[/color]░██░██░[/color]${addSpaces}[bold]для ${stationNumber} ЦК-ЮР[/bold]<br>
                [color=#228B22]░░░░██░░░████░[/color][color=#2db548]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0УКАЗАНИЕ СЕКТОРАЛЬНОГО ШТАБА ЦК<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span><br>
                Должность составителя: Оператор ЦК<br>
                <br>
                Уважаемый Агент Корпорации!<br>
                <br>
                Стандартные 15 минут для предоставления ответов на приветственное сообщение Главами истекли.<br>
                <br>
                Информируем вас об игнорировании некоторыми главами факса со Станции Центрального Командования (СЦК).<br>
                <br>
                Главы, проигнорировавшие сообщение:<br>
                1. <span class="edFi"><ФИО></span>, <span class="edFi"><должность></span><br>
                2. <span class="edFi"><ФИО></span>, <span class="edFi"><должность></span><br>
                3. <span class="edFi"><ФИО></span>, <span class="edFi"><должность></span><br>
                <br>
                Главы, нарушившие форму:<br>
                1. <span class="edFi"><ФИО></span>, <span class="edFi"><должность></span><br>
                2. <span class="edFi"><ФИО></span>, <span class="edFi"><должность></span><br>
                3. <span class="edFi"><ФИО></span>, <span class="edFi"><должность></span><br>
                <br>
                Агент, у вас есть 15 минут для проведения разбирательства с целью обеспечить предоставление указанными Главами факсов для СЦК в корректной форме.<br>
                <br>
                В случае отсутствия результатов, выплаты Главам, указанным выше и не приславшим ответ, буду понижены.<br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Запрос отчёта по приказу (унифицировано)
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#2db548]███[/color][color=#228B22]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
                [color=#228B22]░██░██[color=#2db548]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#228B22]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#228B22]░░░░██░░[color=#2db548]██[/color]░██░██░[/color]${addSpaces}[bold]для ${stationNumber} ЦК-КОМ[/bold]<br>
                [color=#228B22]░░░░██░░░████░[/color][color=#2db548]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ СЕКТОРАЛЬНОГО ШТАБА ЦК<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span><br>
                Должность составителя: Оператор ЦК<br>
                <br>
                Уважаемый <span class="edFi">Капитан/Агент/Глава отдела <ФИО></span> станции ${stationNumber}!</b><br>
                <br>
                В начале смены вам были высланы приказы по ведению конкретных отчётов.<br>
                Ввиду приближения окончания смены, Секторальный Штаб ЦК запрашивает у вас данный отчёт.<br>
                <br>
                Напоминаем, что игнорирование в предоставлении отчёта может привести к уменьшению выплаты не только Главе, но и отделу в целом.<br>
                <br>
                У вас есть [bold]пятнадцать (15) минут[/bold] с момента получения данного факса, для предоставления отчёта согласно приказу.<br>
                <br>
                Приказы без Кодифицированного Номера или полученные после истечения данного срока, приниматься не будут.<br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>

            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Стандартный бланк
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#2db548]███[/color][color=#228B22]░███░░░░██░░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br>
                [color=#228B22]░██░██[color=#2db548]██[/color]░░░██░░░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#228B22]░░█░██░██░░██░█░░[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]NanoTrasen[/head]<br>
                [color=#228B22]░░░░██░░[color=#2db548]██[/color]░██░██░[/color]${addSpaces}[bold]для ${stationNumber} ЦК-КОМ[/bold]<br>
                [color=#228B22]░░░░██░░░████░[/color][color=#2db548]███\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0★★★[/color]<br><br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ПРИКАЗ СЕКТОРАЛЬНОГО ШТАБА ЦК<br>
                =============================================<br>
                Время от начала смены и дата: ${timerFromStart}, ${currentDate} <br>
                Составитель документа: <span class="maFi">${fullName}</span><br>
                Должность составителя: Оператор ЦК<br>
                <br>
                <span class="edFi">Уважаемое(ый) Командование Станции (Капитан/ГП/пр)</span> ${stationNumber}!<br>
                <br>
                <span class="edFi"><Полное содержание документа со всей необходимой информацией и описанием></span>
                <br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
<br>
<h3>Список отчётов, которые могут быть запрошены:</h3>
<h5>Капитан</h5>
NT-CMD-01 Отчёт о состоянии станции<br>
NT-CMD-02 Отчёт о прогрессе Цели<br>
NT-CMD-03 Отчёт о дееспособности всех Глав на Станции (базовый)<br>
NT-CMD-04 Отчёт о состоянии Хранилища Станции<br>
NT-CMD-05 Отчёт о выдачи материалов из Хранилища Станции в течение смены (базовый)<br>
NT-CMD-06 Отчёт об изменении Кодов Статуса станции с указанием причин (базовый)<br><br>
<h5>Глава Персонала (сервисный отдел)</h5>
NT-SRV-01 Отчёт об актуальном меню бара и столовой с указанием количества и названий блюд<br>
NT-SRV-02 Отчёт о заключённых рабочих контрактах (базовый)<br>
NT-SRV-03 Отчёт о доступности досуга и общем энтузиазме станции<br>
NT-SRV-04 Отчёт об изменении допусков Экипажа станции (базовый)<br><br>
<h5>Юридический отдел (АВД)</h5>
NT-AIA-01 Отчёты о нарушениях СРП и КЗ (базовый)<br>
NT-AIA-02 Отчёты о проведённых расследованиях<br>
NT-AIA-03 Отчёт о предоставленных жалобах (базовый)<br>
NT-AIA-04 Отчёт об Адвокатской деятельности<br>
NT-AIA-05 Отчёт о предоставленных УДО за время смены<br><br>
<h5>Служба Безопасности</h5>
NT-SEC-01 Информация о задержанных за смену (базовый)<br>
NT-SEC-02 Запрос ситуации по обеспечению безопасности станции<br>
NT-SEC-03 Отчёт о конфискованном имуществе (базовый)<br>
NT-SEC-04 Отчёт о расстановке постов и патрулей станции<br>
NT-SEC-05 Отчёт о выданном оружии из оружейной брига<br><br>
<h5>Инженерный отдел</h5>
NT-ENG-01 Отчёт о состоянии цели<br>
NT-ENG-02 Отчёт об используемых источниках питания<br>
NT-ENG-04 Отчёт о запуске сингулярности<br>
NT-ENG-05 Отчёт о настройке атмосферной системы на станции (базовый)<br>
NT-ENG-06 Отчёт о нарушении целостности станции в течение смены<br>
NT-ENG-07 Отчёт о проведённых на станции ремонтных работах (базовый)<br>
NT-ENG-08 Отчёт о проведённых модификациях станции<br>
NT-ENG-09 Отчёт о проведённых восстановительных работах заброшенных частей станции<br><br>
<h5>Отдел Снабжения</h5>
NT-SUP-01 Отчёт о одобренных заказах (базовый)<br>
NT-SUP-02 Отчёт о доходе с отдела Поставок (базовый)<br>
NT-SUP-03 Отчёт о выполнении стандартного пополнения автоматов на станции<br>
NT-SUP-06 Отчёт о добытых утилизаторами ресурсах (сложный)<br>
NT-SUP-07 Отчёт об используемых в интересах Отдела Поставок ресурсов<br><br>
<h5>Исследовательский отдел</h5>
NT-RND-01 Отчёт о найденных и активированных аномалиях (базовый)<br>
NT-RND-02 Отчёт об исследованиях артефактов (базовый)<br>
NT-RND-03 Отчёт об исследованных технологиях<br>
NT-RND-04 Отчёт об использованных материалах научным отделом<br>
NT-RND-05 Отчёт о проведённых опытах<br>
NT-RND-06 Отчёт о содержании и выполнении заказов, поступающих в Исследовательский отдел<br><br>
<h5>Медицинский отдел</h5>
NT-MED-01 Отчёт о вспышках вирусов (базовый)<br>
NT-MED-02 Отчёт о создании и использовании сильнодействующих и опиоидных препаратов<br>
NT-MED-03 Отчёт о деятельности химиков (базовый)<br>
NT-MED-05 Отчёт об использованных за смену препаратах (сложный)<br>
NT-MED-06 Отчёт о стерильности медблока, с указанием времени проведения регулярных уборок<br>
NT-MED-07 Отчёт о предоставлении ухода больным, находящимся на длительном лечении<br>
NT-MED-08 Отчёт об использовании медицинским персоналом стерильными средствами индивидуальной защиты<br>
NT-MED-09 Отчёт о погибших и клонированных за смену (базовый)<br>
NT-MED-10 Отчёт о проведённых операциях<br>
NT-MED-11 Отчёт о проведённых беседах штатного психолога<br>
NT-MED-12 Приказ и отчёт о создании и ведении медкарт<br>
        `;
        }
        //ERR*?*%!SyndicateSyndicateSyndicateSyndicateSyndicateSyndicateSyndicate!!!!
        else if (statementType === '69') {
            const currentDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1000)).toLocaleDateString();
            const selectedPosition = positionSelect.options[positionSelect.selectedIndex].text;
            const selectedPositionObject = positionObjectSelect.options[positionObjectSelect.selectedIndex].text;
            statementTemplate = `
            <div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                Отчет о выполнении целей
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                        [color=#B50F1D] ███░██████░███[/color]<br>
                        [color=#B50F1D] █░░░██░░░░░░░█[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                        [color=#B50F1D] █░░░░████░░░░█[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Syndicate[/head]<br>
                        [color=#B50F1D] █░░░░░░░██░░░█[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} ПД-СИН[/bold]<br>
                        [color=#B50F1D] ███░██████░███[/color]<br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ОТЧЁТ О ВЫПОЛНЕНИИ ЦЕЛЕЙ
                        =============================================<br>
                        Дата: ${currentDate} <br>
                        Позывной Агента: <span class="maFi">${fullName}</span> <br>
                        <br>
                        Я, [color=#B50F1D][bold]<span class="maFi">${fullName}</span>[/bold][/color], успешно выполнил поставленные передо мной руководством Синдиката цели.<br>
                        Прошу принять отчёт о выполнении.<br>
                        <br>
                        [bold]Отчёт[/bold]:<br>
                        <span class="edFi"><опишите ваши успехи></span><br>
                        <br>
                        <br>
                        <br>
                        =============================================<br>
                        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                УвЕдОмЛеНиЕ о ЛиКвИдАцИи
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#B50F1D] ███░██████░███[/color]<br>
                [color=#B50F1D] █░░░██░░░░░░░█[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#B50F1D] █░░░░████░░░░█[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Syndicate[/head]<br>
                [color=#B50F1D] █░░░░░░░██░░░█[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} СИН-ПД[/bold]<br>
                [color=#B50F1D] ███░██████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0УВЕДОМЛЕНИЕ О ЛИКВИДАЦИИ
                =============================================<br>
                Дата: ${currentDate} <br>
                Позывной Агента: <span class="maFi">${fullName}</span> <br>
                <br>
                Уважаемый(ая) [bold][color=#B50F1D]<span class="obFi">${fullNameObject}</span>[/color][/bold], в должности [color=#B50F1D]<span class="obFi">${selectedPositionObject}</span>[/color][/italic]!<br><br>
                Руководством Синдиката принято решение о вашей немедленной ликвидации в ходе данной смены.<br>
                Просим заранее подготовить завещание и направить его Медицинскому отделу станции.<br>
                Уничтожение вашего тела будет произведено силами Синдиката.<br>
                <br>
                [bold]Причина ликвидации[/bold]: <span class="edFi"><укажите причину></span><br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
<div class="row">
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                ДеЛоВаЯ сДеЛкА
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#B50F1D] ███░██████░███[/color]<br>
                [color=#B50F1D] █░░░██░░░░░░░█[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#B50F1D] █░░░░████░░░░█[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Syndicate[/head]<br>
                [color=#B50F1D] █░░░░░░░██░░░█[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} СИН-ПД[/bold]<br>
                [color=#B50F1D] ███░██████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ДЕЛОВАЯ СДЕЛКА
                =============================================<br>
                Дата: ${currentDate} <br>
                Позывной Агента: <span class="maFi">${fullName}</span> <br>
                <br>
                Синдикат любезно предлагает заключить сделку между станцией и агентом [bold][color=#B50F1D]<span class="maFi">${fullName}</span>[/color][/bold].<br>
                <br>
                [bold]Со стороны станции необходимо[/bold]:<br>
                <span class="edFi"><укажите требования></span><br>
                <br>
                [bold]Причина выполнения условий сделки[/bold]:<br>
                <span class="edFi"><укажите причину></span><br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
<div class="col-6 d-flex align-items-stretch">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                НоТа О нАчАлЕ вОеНнЫх ДеЙсТвИй
            </h4>
            <div class="d-flex">
                <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text editable-content p-3" contenteditable="true">
                [color=#B50F1D] ███░██████░███[/color]<br>
                [color=#B50F1D] █░░░██░░░░░░░█[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#B50F1D] █░░░░████░░░░█[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Syndicate[/head]<br>
                [color=#B50F1D] █░░░░░░░██░░░█[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} СИН[/bold]<br>
                [color=#B50F1D] ███░██████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0НОТА О НАЧАЛЕ ВОЕННЫХ ДЕЙСТВИЙ
                =============================================<br>
                Дата: ${currentDate} <br>
                Позывной Агента: <span class="maFi">${fullName}</span> <br>
                <br>
                Неуважаемые корпоративные крысы NanoTrasen!<br>
                <br>
                Синдикат официально объявляет о начале военных действий с вами, а также о начале операции по вашему истреблению.<br>
                <br>
                [bold]Причина предъявления ноты[/bold]: <span class="edFi"><укажите причину></span><br>
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
            </div>
        </div>
    </div>
</div>
</div>
<br>
<div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title mt-3 mb-1 flex-grow-1 ms-3">
                        Оͬ͌̔̄̀Ш̫̼̈ͭͧͅИ̣̩̰̳Б̥̜̥̇͊̿͆̍̚̕К̫̽̍̋ͫ́͛͑А̛̼̚ загрузки заголовка формы
                    </h4>
                    <div class="d-flex">
                        <button class="btn mt-2 me-2" onclick="saveCardContent(this)" title="Сохранить в файл">💾</button>
                        <button class="btn mt-2 copy-content-btn" onclick="copyCardContent(this)" title="Копировать">📑</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text editable-content p-3" contenteditable="true">
                [color=#B50F1D] ███░██████░███[/color]<br>
                [color=#B50F1D] █░░░██░░░░░░░█[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Бланк документа[/head]<br>
                [color=#B50F1D] █░░░░████░░░░█[/color]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[head=3]Syndicate[/head]<br>
                [color=#B50F1D] █░░░░░░░██░░░█[/color]${addSpaces}\xa0\xa0\xa0[bold]${stationNumber} СИН[/bold]<br>
                [color=#B50F1D] ███░██████░███[/color]<br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0НАИМЕНОВАНИЕ ДОКУМЕНТА
                =============================================<br>
                Дата: ${currentDate} <br>
                Позывной Агента: <span class="maFi">${fullName}</span> <br>
                <br>
                Полное содержание документа со всей необходимой информацией и описанием
                <br>
                =============================================<br>
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[italic]Место для печатей[/italic]<br>
                        </div>
                </div>
            </div>
        `;
        }



        statementContainer.innerHTML = statementTemplate;
    });
    //▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆



    //▆▆▆▆▆▆▆▆▆ Функция для обновления видимости полей ввода ▆▆▆▆▆▆▆▆▆
    function updateFieldsVisibility(settings) {
        // Проверяем каждый параметр на undefined и устанавливаем false, если он не передан
        const fullNameLabelVisible = settings.fullNameLabel !== undefined ? settings.fullNameLabel : false;
        const fullNameVisible = settings.fullName !== undefined ? settings.fullName : false;
        const positionSelectLabelVisible = settings.positionSelectLabel !== undefined ? settings.positionSelectLabel : false;
        const positionSelectVisible = settings.positionSelect !== undefined ? settings.positionSelect : false;
        const newPositionSelectLabelVisible = settings.newPositionSelectLabel !== undefined ? settings.newPositionSelectLabel : false;
        const newPositionSelectVisible = settings.newPositionSelect !== undefined ? settings.newPositionSelect : false;
        const departmentLabelVisible = settings.departmentLabel !== undefined ? settings.departmentLabel : false;
        const departmentVisible = settings.department !== undefined ? settings.department : false;
        const departmentCodeLabelVisible = settings.departmentCodeLabel !== undefined ? settings.departmentCodeLabel : false;
        const departmentCodeVisible = settings.departmentCode !== undefined ? settings.departmentCode : false;
        const stationGoalLabelVisible = settings.stationGoalLabel !== undefined ? settings.stationGoalLabel : false;
        const stationGoalVisible = settings.stationGoal !== undefined ? settings.stationGoal : false;

        const fullNameObjectLabelVisible = settings.fullNameObjectLabel !== undefined ? settings.fullNameObjectLabel : false;
        const fullNameObjectVisible = settings.fullNameObject !== undefined ? settings.fullNameObject : false;
        const positionObjectSelectLabelVisible = settings.positionObjectSelectLabel !== undefined ? settings.positionObjectSelectLabel : false;
        const positionObjectSelectVisible = settings.positionObjectSelect !== undefined ? settings.positionObjectSelect : false;




        // Применяем значения к элементам (по умолчанию скрыты)
        fullNameLabelVisible ? fullNameLabel.classList.remove('d-none') : fullNameLabel.classList.add('d-none');
        fullNameVisible ? fullName.classList.remove('d-none') : fullName.classList.add('d-none');
        positionSelectLabelVisible ? positionSelectLabel.classList.remove('d-none') : positionSelectLabel.classList.add('d-none');
        positionSelectVisible ? positionSelect.classList.remove('d-none') : positionSelect.classList.add('d-none');
        newPositionSelectLabelVisible ? newPositionSelectLabel.classList.remove('d-none') : newPositionSelectLabel.classList.add('d-none');
        newPositionSelectVisible ? newPositionSelect.classList.remove('d-none') : newPositionSelect.classList.add('d-none');
        departmentLabelVisible ? departmentLabel.classList.remove('d-none') : departmentLabel.classList.add('d-none');
        departmentVisible ? department.classList.remove('d-none') : department.classList.add('d-none');
        departmentCodeLabelVisible ? departmentCodeLabel.classList.remove('d-none') : departmentCodeLabel.classList.add('d-none');
        departmentCodeVisible ? departmentCode.classList.remove('d-none') : departmentCode.classList.add('d-none');
        stationGoalLabelVisible ? stationGoalLabel.classList.remove('d-none') : stationGoalLabel.classList.add('d-none');
        stationGoalVisible ? stationGoal.classList.remove('d-none') : stationGoal.classList.add('d-none');

        fullNameObjectLabelVisible ? fullNameObjectLabel.classList.remove('d-none') : fullNameObjectLabel.classList.add('d-none');
        fullNameObjectVisible ? fullNameObject.classList.remove('d-none') : fullNameObject.classList.add('d-none');
        positionObjectSelectLabelVisible ? positionObjectSelectLabel.classList.remove('d-none') : positionObjectSelectLabel.classList.add('d-none');
        positionObjectSelectVisible ? positionObjectSelect.classList.remove('d-none') : positionObjectSelect.classList.add('d-none');



        statementContainer.innerHTML = '';
    }


    // ▆▆▆▆▆▆▆▆▆ Использование функции видимости полей при переключении типов заявлений ▆▆▆▆▆▆▆▆▆
    statementTypeSelect.addEventListener('change', function () {
        const selectedValue = statementTypeSelect.value;
        const settings = statementTypeSettings[selectedValue];

        if (selectedValue === '1') {
            updateFieldsVisibility(statementTypeSettings['vrio_captain_1']);

        } else if (selectedValue === '2') {
            updateFieldsVisibility(statementTypeSettings['vrio_head_2']);

        }
        else if (selectedValue === '3') {
            updateFieldsVisibility(statementTypeSettings['department_performance_report_3']);
        }
        else if (selectedValue === '4') {
            updateFieldsVisibility(statementTypeSettings['worker_report_4']);

        }
        else if (selectedValue === '5') {
            updateFieldsVisibility(statementTypeSettings['senate_report_5']);

        }
        else if (selectedValue === '6') {
            updateFieldsVisibility(statementTypeSettings['dismissal_6']);

        }
        else if (selectedValue === '7') {
            updateFieldsVisibility(statementTypeSettings['delete_access_7']);

        }
        else if (selectedValue === '8') {
            updateFieldsVisibility(statementTypeSettings['passenger_employment_8']);
        }
        else if (selectedValue === '9') {
            updateFieldsVisibility(statementTypeSettings['new_profession_9']);

        }
        else if (selectedValue === '10') {
            updateFieldsVisibility(statementTypeSettings['new_access_10']);

        }
        else if (selectedValue === '11') {
            updateFieldsVisibility(statementTypeSettings['security_equipment_11']);
        }
        else if (selectedValue === '12') {
            updateFieldsVisibility(statementTypeSettings['captains_order_12']);

        }
        else if (selectedValue === '13') {
            updateFieldsVisibility(statementTypeSettings['station_status_13']);

        }
        else if (selectedValue === '14') {
            updateFieldsVisibility(statementTypeSettings['request_swat_14']);

        }
        else if (selectedValue === '15') {
            updateFieldsVisibility(statementTypeSettings['request_bonus_15']);

        }
        else if (selectedValue === '16') {
            updateFieldsVisibility(statementTypeSettings['diploma_16']);

        }
        else if (selectedValue === '17') {
            updateFieldsVisibility(statementTypeSettings['cargo_order_17']);

        }
        else if (selectedValue === '18') {
            updateFieldsVisibility(statementTypeSettings['production_order_18']);

        }
        else if (selectedValue === '19') {
            updateFieldsVisibility(statementTypeSettings['upgrade_prof_certificate_19']);

        }
        else if (selectedValue === '20') {
            updateFieldsVisibility(statementTypeSettings['complaint_20']);

        }
        else if (selectedValue === '21') {
            updateFieldsVisibility(statementTypeSettings['request_to_ck_21']);

        }
        else if (selectedValue === '22') {
            updateFieldsVisibility(statementTypeSettings['dismissal_order_22']);

        }
        else if (selectedValue === '23') {
            updateFieldsVisibility(statementTypeSettings['standart_form_23']);

        }
        else if (selectedValue === '24') {
            updateFieldsVisibility(statementTypeSettings['violations_eliminated_24']);

        }
        else if (selectedValue === '25') {
            updateFieldsVisibility(statementTypeSettings['movement_permit_25']);

        }
        else if (selectedValue === '26') {
            updateFieldsVisibility(statementTypeSettings['request_threat_level_26']);

        }
        else if (selectedValue === '27') {
            updateFieldsVisibility(statementTypeSettings['request_shuttle_27']);

        }
        else if (selectedValue === '28') {
            updateFieldsVisibility(statementTypeSettings['appeal_28']);

        }
        else if (selectedValue === '29') {
            updateFieldsVisibility(statementTypeSettings['get_use_equipment_29']);

        }
        else if (selectedValue === '30') {
            updateFieldsVisibility(statementTypeSettings['complaint_labor_discipline_30']);

        }
        else if (selectedValue === '31') {
            updateFieldsVisibility(statementTypeSettings['shuttle_registration_31']);

        }
        else if (selectedValue === '32') {
            updateFieldsVisibility(statementTypeSettings['order_special_equipment_32']);

        }
        else if (selectedValue === '33') {
            updateFieldsVisibility(statementTypeSettings['object_study_report_33']);

        }
        else if (selectedValue === '34') {
            updateFieldsVisibility(statementTypeSettings['internal_investigation_report_34']);

        }
        else if (selectedValue === '35') {
            updateFieldsVisibility(statementTypeSettings['start_trial_35']);

        }
        else if (selectedValue === '36') {
            updateFieldsVisibility(statementTypeSettings['court_decision_36']);

        }
        else if (selectedValue === '37') {
            updateFieldsVisibility(statementTypeSettings['agency_request_for_documents_37']);

        }
        else if (selectedValue === '38') {
            updateFieldsVisibility(statementTypeSettings['cassation_appeal_38']);

        }
        else if (selectedValue === '39') {
            updateFieldsVisibility(statementTypeSettings['offense_complaint_39']);

        }
        else if (selectedValue === '40') {
            updateFieldsVisibility(statementTypeSettings['judicial_verdict_40']);

        }
        else if (selectedValue === '41') {
            updateFieldsVisibility(statementTypeSettings['offense_evidence_41']);

        }
        else if (selectedValue === '42') {
            updateFieldsVisibility(statementTypeSettings['indictment_42']);

        }
        else if (selectedValue === '43') {
            updateFieldsVisibility(statementTypeSettings['search_warrant_43']);

        }
        else if (selectedValue === '44') {
            updateFieldsVisibility(statementTypeSettings['parole_process_44']);

        }
        else if (selectedValue === '45') {
            updateFieldsVisibility(statementTypeSettings['weapon_permit_45']);

        }
        else if (selectedValue === '46') {
            updateFieldsVisibility(statementTypeSettings['investigation_report_46']);

        }
        else if (selectedValue === '47') {
            updateFieldsVisibility(statementTypeSettings['drug_receipt_47']);

        }
        else if (selectedValue === '48') {
            updateFieldsVisibility(statementTypeSettings['health_certificate_48']);

        }
        else if (selectedValue === '49') {
            updateFieldsVisibility(statementTypeSettings['medical_intervention_49']);

        }
        else if (selectedValue === '50') {
            updateFieldsVisibility(statementTypeSettings['euthanasia_request_50']);

        }
        else if (selectedValue === '51') {
            updateFieldsVisibility(statementTypeSettings['death_certificate_51']);

        }
        else if (selectedValue === '52') {
            updateFieldsVisibility(statementTypeSettings['body_disposal_52']);

        }
        else if (selectedValue === '53') {
            updateFieldsVisibility(statementTypeSettings['building_permit_53']);

        }
        else if (selectedValue === '54') {
            updateFieldsVisibility(statementTypeSettings['tech_condition_report_54']);

        }
        else if (selectedValue === '55') {
            updateFieldsVisibility(statementTypeSettings['construct_work_request_55']);

        }
        else if (selectedValue === '56') {
            updateFieldsVisibility(statementTypeSettings['experiment_report_56']);

        }
        else if (selectedValue === '57') {
            updateFieldsVisibility(statementTypeSettings['creature_rights_57']);

        }
        else if (selectedValue === '58') {
            updateFieldsVisibility(statementTypeSettings['modernization_request_58']);

        }
        else if (selectedValue === '59') {
            updateFieldsVisibility(statementTypeSettings['disposal_report_59']);

        }
        else if (selectedValue === '60') {
            updateFieldsVisibility(statementTypeSettings['custom_cargo_order_60']);

        }
        else if (selectedValue === '61') {
            updateFieldsVisibility(statementTypeSettings['expedition_report_61']);

        }
        else if (selectedValue === '62') {
            updateFieldsVisibility(statementTypeSettings['marriage_process_62']);

        }
        else if (selectedValue === '63') {
            updateFieldsVisibility(statementTypeSettings['bill_of_fare_63']);

        }
        else if (selectedValue === '64') {
            updateFieldsVisibility(statementTypeSettings['request_pda_id_64']);

        }
        else if (selectedValue === '65') {
            updateFieldsVisibility(statementTypeSettings['promotion_65']);

        }
        else if (selectedValue === '66') {
            updateFieldsVisibility(statementTypeSettings['nonstandard_position_66']);

        }
        else if (selectedValue === '67') {
            updateFieldsVisibility(statementTypeSettings['procedure_violation_67']);

        }
        else if (selectedValue === '68') {
            updateFieldsVisibility(statementTypeSettings['operator_CC_forms_68']);

        }
        else if (selectedValue === '69') {
            updateFieldsVisibility(statementTypeSettings['syndicate_forms_69']);

        }











    });
    //▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆

    //▆▆▆▆▆▆▆▆▆ При открытии страницы скрывает поля ввода значений ▆▆▆▆▆▆▆▆▆
    //fullNameLabel.classList.add('d-none');
    //fullName.classList.add('d-none');
    //positionSelect.classList.add('d-none');
    //positionSelectLabel.classList.add('d-none');
    newPositionSelect.classList.add('d-none');
    newPositionSelectLabel.classList.add('d-none');
    department.classList.add('d-none');
    departmentLabel.classList.add('d-none');
    departmentCodeLabel.classList.add('d-none');
    departmentCode.classList.add('d-none');
    stationGoalLabel.classList.add('d-none');
    stationGoal.classList.add('d-none');
    fullNameObjectLabel.classList.add('d-none');
    fullNameObject.classList.add('d-none');
    positionObjectSelectLabel.classList.add('d-none');
    positionObjectSelect.classList.add('d-none');

    statementContainer.innerHTML = '';

});

//Таблица для жалоб и отчёта об устранении нарушений (не редактировалась)
const violations_eliminated_reasons = `
    <h5 style="color: red;">Таблица требует доработки</h5>
    <style type="text/css">
    .tg  {border-collapse:collapse;border-spacing:0;}
    .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
    overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
    font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-cly1{vertical-align:middle}
    .tg .tg-lfxj{text-align:left;vertical-align:middle,font-weight: bold;}
    .tg .tg-zqhz{text-align:left;vertical-align:top,font-weight: bold;}
    .tg .tg-0lax{text-align:left;vertical-align:top}
    .highlighted-row {
        background-color: #ebd8ae35;
        font-weight: bold;
        text-align: center;
    }
    </style>
    <table class="tg">
    <thead>
    <tr>
        <th class="tg-lfxj" style="font-weight: bold; text-align: center;">Причина нарушений</th>
        <th class="tg-zqhz" style="font-weight: bold; text-align: center;">Проведенные мероприятия по устранению нарушений </th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="tg-cly1 highlighted-row" colspan="2">Технические проблемы</td>
    </tr>
    <tr>
        <td class="tg-0lax">В процессе технического обслуживания оборудования были допущены ошибки, приведшие к временному отключению систем. </td>
        <td class="tg-0lax">Пересмотрены процедуры обслуживания для предотвращения будущих инцидентов.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Несанкционированное вмешательство в работу систем безопасности.</td>
        <td class="tg-0lax">Усилены меры безопасности в зоне потенциального риска.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Нарушение правил обслуживания и регулярной проверки оборудования</td>
        <td class="tg-0lax">Внедрены новые процедуры контроля и мониторинга&nbsp;&nbsp;состояния технического оборудования</td>
    </tr>
    <tr>
        <td class="tg-0lax">В работе отдела выявлены ошибки при настройке оборудования, что привело к сбоям в энергосистеме. </td>
        <td class="tg-0lax">Отдел активно приступил к немедленному устранению последствий, направляя все усилия на восстановление нормальной работы станции</td>
    </tr>
    <tr>
        <td class="tg-0lax" colspan="2">Игнорирование стандартов и служебных обязанностей</td>
    </tr>
    <tr>
        <td class="tg-0lax">В ответ на внешнюю угрозу не были реализованы стандартные процедуры выявления и ликвидации инцидента.</td>
        <td class="tg-0lax">Были предприняты меры по улучшению контроля над процессом (работы с опасными веществами/производства/транспортировки материалов/хранения материалов/выдачи доступа).</td>
    </tr>
    <tr>
        <td class="tg-0lax">Произошел опасный инцидент на станции, который потребовал немедленного вмешательства экипажа и привлечения экстренных мер для предотвращения возможных последствий и обеспечения безопасности всех присутствующих.</td>
        <td class="tg-0lax">Проведено внутреннее расследование инцидента, включая допросы отдельных свидетелей и анализ документации для полного выяснения обстоятельств произошедшего. Приняты меры для предотвращения подобных нарушений в будущем.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник регулярно злоупотреблял рабочим временем, занимаясь личными делами вместо выполнения своих служебных обязанностей. </td>
        <td class="tg-0lax">Приняты шаги по устранению нарушений, ужесточен контроль и улучшено командное взаимодействие.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Установлены факты отклонения от Стандартных Рабочих Процедур, что привело к неэффективной работе. | Выявлены нарушения Стандартных Рабочих Процедур, что вызвало случаи ненадлежащего выполнения обязанностей и халатности.</td>
        <td class="tg-0lax">Приняты меры для предотвращения подобных нарушений в будущем.<br>Сотрудники приступили к повторному изучению своих стандартных рабочих процедур.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Низкий уровень профессиональной компетенции. | Отсутствие опыта в решении аналогичных ситуаций. | Неумение применять теоретические знания на практике. | Отсутствие требуемых квалификаций для исполнения обязанностей. | Низкая производительность из-за невысокого уровня мастерства. | Недостаточная подготовка к специфическим аспектам работы. | Ошибки, обусловленные недостаточным опытом в сфере деятельности. | Использование устаревших методов или технологий. | Недостаточная экспертиза в конкретной области работы. </td>
        <td class="tg-0lax">Сотрудники направлены на курсы повышения квалификации. | Сотрудники получили всю необходимую поддержку для успешного выполнения поставленной задачи.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Неспособность адекватно реагировать на нестандартные ситуации.| Неумение адаптироваться к изменяющимся обстоятельствам. | Неспособность быстро реагировать на изменения внешних факторов. | Отсутствие стратегии и плана действий при внезапных изменениях. | Ограниченная способность быстро адаптироваться к переменам в рабочей обстановке.</td>
        <td class="tg-0lax">Для устранения нарушений проведено обучение сотрудников по действиям в условиях чрезвычайных ситуаций. <br>Проведено обучение навыкам принятия решений в условиях неопределенности и нестандартных сценариев.<br>Практические упражнения по обучению навыкам адаптации к неожиданным ситуациям в рабочей среде.<br>Регулярные тренировки по поддержанию эффективности деятельности в условиях постоянной динамики.</td>
    </tr>
    <tr>
        <td class="tg-0lax">В процессе проверки выявлены факты игнорирования установленных стандартов безопасности и нарушения правил обращения с оборудованием, приведшее к нештатным ситуациям. </td>
        <td class="tg-0lax">Внедрены корректирующие меры, проведено дополнительное обучение сотрудников.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Обнаруженные нарушения были связаны с ошибками в работе оборудования, вызванными неправильной настройкой и несовместимостью систем.</td>
        <td class="tg-0lax">Были заменены неисправные компоненты и внедрены дополнительные механизмы контроля.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Несанкционированный доступ лиц без соответствующих разрешений создал потенциальную угрозу безопасности. | Несоблюдение распоряжений по ограничению доступа к опасным зонам.</td>
        <td class="tg-0lax">Были предприняты меры по улучшению контроля и усилению безопасности в данной зоне.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Члены командования не справились с кризисной ситуацией, выявив свою неспособность эффективного руководства в подобных условиях. </td>
        <td class="tg-0lax">Был проведен анализ произошедших событий, разработаны улучшенные стратегии реакции на подобные инциденты.</td>
    </tr>
    <tr>
        <td class="tg-cly1 highlighted-row" colspan="2">Коммуникация</td>
    </tr>
    <tr>
        <td class="tg-0lax">Конфликт возник в связи с различиями в подходах и стилях работы среди сотрудников. Разные предпочтения и подходы к задачам привели к напряженным отношениям.</td>
        <td class="tg-0lax">Проведен тренинг по коммуникации и согласованию методов работы. </td>
    </tr>
    <tr>
        <td class="tg-0lax">Конфликт возник из-за неясного распределения обязанностей и ответственности между сотрудниками. </td>
        <td class="tg-0lax">В команде установлены ясные и четкие роли, что обеспечит понимание задач и ответственностей каждого участника.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Конфликт возник из-за личных разногласий между сотрудниками. Вне рабочего контекста индивидуальные различия и непонимание могут влиять на взаимодействие в команде, поскольку участники обладают разнообразными личными взглядами и ценностями. </td>
        <td class="tg-0lax">Разработаны новые механизмы поощрения и мотивации с целью устранения излишней конкуренции.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Отсутствие эффективной коммуникации привело к недопониманию и конфликтам, что обусловило напряженную обстановку в отделе. </td>
        <td class="tg-0lax">Проведение тренингов и семинаров для сотрудников с акцентом на развитие эффективных коммуникационных навыков.<br>Установление регулярных встреч и обсуждений, нацеленных на выявление и разрешение конфликтов в открытом формате.<br>Развитие и внедрение общих ценностей и принципов для коллектива, способствующих улучшению взаимопонимания.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник допустил нарушение этических норм, участвуя в деятельности, противоречащей принципам корпорации. </td>
        <td class="tg-0lax">Были предприняты шаги по исправлению поведения сотрудника и приведению его в соответствие с корпоративными этическими стандартами компании.</td>
    </tr>
    <tr>
        <td class="tg-cly1 highlighted-row" colspan="2">Ресурсы</td>
    </tr>
    <tr>
        <td class="tg-0lax">Распределение ограниченных ресурсов привело к конфликту интересов среди сотрудников, вызвав чувство неудовлетворенности и недовольства.</td>
        <td class="tg-0lax">Стратегический план был пересмотрен с учётом мнений всех заинтересованных сторон. </td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудником были превышены установленные нормы использования ограниченных ресурсов.</td>
        <td class="tg-0lax">Внедрены методы по оптимизации использования ресурсов.<br>Сотрудники были осведомлены&nbsp;&nbsp;о правилах и нормах использования ресурсов и последствиях их превышения.<br>Введена обязанность ведения отчетности, включающей детальную информацию о расходе ресурсов каждым сотрудником отдела.</td>
    </tr>
    <tr>
        <td class="tg-cly1 highlighted-row" colspan="2">Служба безопасности</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник службы безопасности превысил свои полномочия, применяя излишнюю силу в отношении подозреваемого. </td>
        <td class="tg-0lax">Приняты дисциплинарные меры в отношении сотрудников, участвовавших в происшествии – (замечание, выговор, лишение стимулирующих выплат, увольнение) </td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник службы безопасности применил физическое насилие в отношении подозреваемого, нарушив Основные Права Разумных Существ. </td>
        <td class="tg-0lax">Введена система мониторинга и контроля за процедурами обращения с заключенными с целью предупреждения подобных инцидентов в будущем. <br>Сотрудники службы безопасности прошли повторное обучение по соблюдению Основных Прав Разумных Существ, и внесены изменения в применение силы в подобных ситуациях.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник службы безопасности применил силу без необходимых законных оснований. </td>
        <td class="tg-0lax">Организованы обучающие мероприятия и лекции, направленные на повторное изучение ОПРС и этических аспектах деятельности службы безопасности.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник службы безопасности нарушил право на конфиденциальность, получив несанкционированный доступ к личной информации подозреваемого. </td>
        <td class="tg-0lax"></td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник службы безопасности использовал пытки в отношении подозреваемого, что нарушило его ОПРС и принципы гуманного обращения. </td>
        <td class="tg-0lax">Проведено внутреннее расследование инцидента с участием сотрудника службы безопасности для анализа причин и установления ответственности. </td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник службы безопасности применил недопустимые методы допроса. </td>
        <td class="tg-0lax">Внесены изменения в процедуры взаимодействия с подозреваемыми.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник службы безопасности произвел незаконный арест, не подтвердив основание для задержания. | Сотрудник службы безопасности произвел неправомерное задержание подозреваемого без достаточных оснований. </td>
        <td class="tg-0lax">Установлены строгие меры дисциплинарного воздействия за неправомерные задержания, включая штрафы, временное отстранение от должности или другие административные меры.<br>Организация тренингов и семинаров для сотрудников службы безопасности с акцентом на законные основания и процедуры задержания.<br>Проведение практических упражнений, симулирующих различные сценарии задержания, для закрепления правильных методов и действий.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник службы безопасности предъявил обвинения подозреваемому без наличия достаточных доказательств. | Сотрудник службы безопасности не соблюдал установленных процедур при проведении обыска, что привело к нарушению прав подозреваемого. </td>
        <td class="tg-0lax">Внедрена система регулярного контроля и оценки деятельности службы безопасности с учетом соблюдения ОПРС и СРП отдела. </td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник службы безопасности отказывал в предоставлении прав на защиту подозреваемому во время допроса. </td>
        <td class="tg-0lax">Запущена инициатива по предоставлению поддержки и юридических консультаций для подозреваемого, а также для сотрудников службы безопасности, замешанных в инциденте. </td>
    </tr>
    <tr>
        <td class="tg-0lax">Несоблюдение сотрудником службы безопасности профессиональных этических стандартов подорвало доверие к принципам справедливости в системе правосудия корпорации. </td>
        <td class="tg-0lax">Проведено дополнительное обучение сотрудников службы безопасности в части обращения с подозреваемыми и заключенными. </td>
    </tr>
    <tr>
        <td class="tg-0lax">Запрос заключенного на получение пищи и воды был отвергнут сотрудником службы безопасности. </td>
        <td class="tg-0lax">Оказано содействие в возможности удовлетворения потребностей заключенного в еде и воде, в том числе предоставление необходимых ресурсов.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Нарушение процедур обращения с заключенными.</td>
        <td class="tg-0lax">Обеспечена психологическая поддержка заключенного, включая проведение беседы и предоставление рекомендаций по дальнейшим действиям. </td>
    </tr>
    <tr>
        <td class="tg-0lax">Неверное толкование положений служебных инструкций и процедур. </td>
        <td class="tg-0lax">Внедрены регулярные проверки и аудит действий сотрудников, чтобы удостовериться в соблюдении установленных процедур и предотвратить незаконные действия.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Отдел службы безопасности допустил побег заключенного из места постоянного заключения. </td>
        <td class="tg-0lax">Проведена оперативная блокировка зоны побега.<br>Введен повышенный режим безопасности на всей территории станции.<br>Осуществлен контроль за всеми сотрудниками службы безопасности.<br>Проведено расследование причин побега для предотвращения подобных инцидентов в будущем.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудник службы безопасности посадил заключенного на неверный срок заключения. </td>
        <td class="tg-0lax">Проведена проверка всех записей о сроках заключения.<br>Установлено точное время и место, когда произошла ошибка.<br>Проведено обучение сотрудников службы безопасности по правильному оформлению документов.<br>Осуществлен контроль за соблюдением законов и правил при заключении.</td>
    </tr>
    <tr>
        <td class="tg-cly1">Отдел службы безопасности не справился с обычной угрозой на станции, что привело к потерям личного состава.</td>
        <td class="tg-0lax">Проведена оценка эффективности работы отдела службы безопасности.<br>Организована тренировка сотрудников по реагированию на обычные угрозы.<br>Произведена модернизация системы безопасности для повышения ее эффективности.<br>Укреплено взаимодействие с другими отделами станции для координации действий в экстренных ситуациях.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Отдел службы безопасности не отреагировал на произошедшее правонарушение. </td>
        <td class="tg-0lax">Проведено расследование событий, приведших к правонарушению.<br>Осуществлен контроль за соблюдением правил службы безопасности.<br>Разработаны дополнительные меры по предотвращению подобных инцидентов.<br>Проведены тренинги для повышения реакции сотрудников на подобные ситуации.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Отдел службы безопасности не отреагировал на запрос по радиосвязи. </td>
        <td class="tg-0lax">Проведено обучение сотрудников по правилам работы с радиосвязью.<br>Разработаны процедуры приема и обработки радиосигналов.<br>Введен контроль за соблюдением правил радиосвязи среди сотрудников службы безопасности.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Отдел службы безопасности не занялся расследованием правонарушения или не отреагировал на показания свидетеля преступления </td>
        <td class="tg-0lax">Немедленно запущено расследование инцидента с привлечением опытных сотрудников.<br>Осуществлен контроль за деятельностью сотрудников службы безопасности в рамках расследования.<br>Усилено взаимодействие с отделами, имеющими отношение к расследуемому случаю.<br>Внедрены дополнительные меры по сбору и анализу доказательств.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Отдел службы безопасности не предоставил достаточных доказательств, что не позволило доказать вину подозреваемого. </td>
        <td class="tg-0lax">Пересмотрена система сбора и хранения доказательств для обеспечения их полноты и достоверности.<br>Проведено обучение сотрудников по правильному документированию доказательств.<br>Осуществлен контроль за процессом сбора и предоставления доказательств в рамках следствия.<br>Улучшена координация работы судебных и следственных инстанций для обеспечения надежного доказательственного материала.</td>
    </tr>
    <tr>
        <td class="tg-cly1 highlighted-row" colspan="2">Медицинский отдел</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудники медицинского отдела не провели своевременно процедуру реанимации члена экипажа. | Сотрудники медицинского отдела не оказали своевременную помощь, что привело к смерти пациента. </td>
        <td class="tg-0lax">Проведено внутреннее расследование обстоятельств случившегося.<br>Обеспечено дополнительное обучение медицинского персонала по срочной медицинской помощи.<br>Внедрены процедуры для более оперативного реагирования на случаи экстренной медицинской помощи.<br>Введен мониторинг состояния здоровья членов экипажа с целью оперативного выявления потенциальных проблем.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудники медицинского отдела не оказали своевременную медицинскую помощь (не намеренно). </td>
        <td class="tg-0lax">Проведено внутреннее расследование с участием сторонних экспертов.<br>Организованы тренинги по быстрому и качественному предоставлению медицинской помощи.<br>Создан механизм контроля за своевременностью предоставления медицинской помощи.<br>Внедрены процедуры для систематического обновления знаний и навыков медицинского персонала</td>
    </tr>
    <tr>
        <td class="tg-cly1">Сотрудники медицинского отдела отказали в предоставлении своевременной медицинской помощи (намеренно).</td>
        <td class="tg-0lax">Произведено немедленное отстранение ответственных сотрудников от занимаемых должностей.<br>Проведено внутреннее расследование с привлечением независимых экспертов.<br>Разработаны новые протоколы предоставления медицинской помощи с учетом наказания за отказ.<br>Проведено обучение медицинского персонала этике и профессиональным стандартам.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудники медицинского отдела не провели своевременно процедуру клонирования члена экипажа. </td>
        <td class="tg-0lax">Произведена детальная проверка всех процессов, связанных с клонированием.<br>Осуществлен переобучение персонала медицинского отдела по технике и этике клонирования.<br>Введены системы контроля за правильностью и своевременностью проведения клонирования.</td>
    </tr>
    <tr>
        <td class="tg-cly1">Химик своевременно не синтезировал достаточное количество лекарств для оказания помощи пациентам</td>
        <td class="tg-0lax">Проведена оценка потребности в лекарствах на станции с учетом возможных чрезвычайных ситуаций.<br>Разработаны регулярные графики синтеза лекарств для обеспечения их наличия в необходимом количестве.<br>Введена система контроля за запасами лекарств и их использованием для предотвращения нехватки.<br>Обучение химиков новым методам и технологиям для повышения эффективности производства лекарств.</td>
    </tr>
    <tr>
        <td class="tg-cly1 highlighted-row" colspan="2">Научный отдел</td>
    </tr>
    <tr>
        <td class="tg-cly1">Сотрудники научного отдела провели исследования нетребуемой технологии.</td>
        <td class="tg-0lax">Проведено тщательное обсуждение и оценка целесообразности предыдущих исследований.<br>Разработаны строгие критерии для выбора тем исследований с учетом полезности для станции.<br>Усилен контроль над бюджетом исследовательских проектов с целью избежания ресурсных затрат на ненужные технологии.<br>Введены системы оценки эффективности исследований перед началом их проведения.</td>
    </tr>
    <tr>
        <td class="tg-cly1">Сотрудники научного отдела своевременно не ликвидировали аномалию в общественном месте.</td>
        <td class="tg-0lax">Организована система мониторинга за обнаружением и обработкой аномалий в общественных зонах.<br>Проведены тренинги сотрудников научного отдела по ликвидации аномалий в публичных местах.<br>Разработаны протоколы действий при обнаружении аномалий, в том числе организация эвакуации.<br>Обновлены стандарты безопасности для научного отдела, включая процедуры по работе с аномалиями.</td>
    </tr>
    <tr>
        <td class="tg-cly1">Сотрудники научного отдела допустили побег артефакта из зоны обследования.</td>
        <td class="tg-0lax">Проведено внутреннее расследование обстоятельств побега артефакта.<br>Пересмотрены и усилены протоколы безопасности для работы с артефактами.<br>Введены дополнительные меры по контролю за доступом и перемещением артефактов.<br>Произведено обучение персонала по технике работы с артефактами и их безопасному хранению.</td>
    </tr>
    <tr>
        <td class="tg-cly1">Сотрудники научного отдела вынесли опасную экипировку или аппаратуру с территории научного отдела</td>
        <td class="tg-0lax">Введена система контроля за перемещением оборудования и экипировки в пределах отдела.<br>Организована служба безопасности для мониторинга действий сотрудников научного отдела.<br>Разработаны правила оформления и утверждения запросов на перемещение опасной экипировки.<br>Обучение сотрудников отдела по соблюдению правил безопасного обращения с техникой.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сотрудники не провели модернизацию оборудования других отделов.</td>
        <td class="tg-0lax">Организована служба технического обслуживания для регулярной проверки и модернизации оборудования.<br>Разработаны графики технического обслуживания для каждого отдела с учетом стандартов безопасности.<br>Введены процедуры проверки состояния оборудования перед началом каждой рабочей смены.<br>Обучение сотрудников служб технического обслуживания и персонала отделов по соблюдению технических стандартов.</td>
    </tr>
    <tr>
        <td class="tg-cly1 highlighted-row" colspan="2">Сервисный отдел</td>
    </tr>
    <tr>
        <td class="tg-cly1">Сотрудники сервисного отдела некачественно обслужили экипаж станции.</td>
        <td class="tg-0lax">Проведена ревизия и обучение сотрудников службы обслуживания по стандартам качественного обслуживания.<br>Введена система обратной связи от экипажа для оценки уровня удовлетворенности обслуживанием.<br>Разработаны инструкции по обслуживанию конкретных видов техники и оборудования.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Шеф-повар или бармен не предупредил о наличии наркотических или токсичных веществ (включая алкоголь) в предоставляемой пище или напитках. </td>
        <td class="tg-0lax">Разработаны четкие правила описания состава блюд и напитков с указанием наличия потенциально опасных веществ.<br>Введена система маркировки и предупреждения о наличии аллергенов и токсичных компонентов в меню.<br>Проведено дополнительное обучение персонала кухни и бара о правилах безопасного приготовления и подачи блюд.<br>Создан механизм регулярного обновления знаний персонала о новых требованиях по безопасности пищевых продуктов.</td>
    </tr>
    <tr>
        <td class="tg-cly1">Шеф-повар не подготовил мясные блюда для экипажа, состоящего из представителей плотоядных рас.</td>
        <td class="tg-0lax">Разработано универсальное меню, учитывающее различные предпочтения и потребности членов экипажа.<br>Введена система предварительного определения диетарных предпочтений членов экипажа.<br>Организовано обучение персонала кухни по приготовлению пищи, соответствующей различным диетам и религиозным убеждениям.<br>Введены стандарты контроля качества приготовления пищи, чтобы удовлетворить потребности разнообразного экипажа.</td>
    </tr>
    <tr>
        <td class="tg-cly1">Уборщик не выполнил свои обязанности по очистке помещений станции и замене сломанных ламп.</td>
        <td class="tg-0lax">Введены жесткие графики уборки помещений, учитывающие высокие требования к чистоте в космической станции.<br>Созданы механизмы контроля и надзора за выполнением уборочных работ.<br>Проведено дополнительное обучение уборщиков по эффективным методам уборки и использованию профессиональных средств.<br>Разработаны стандарты замены сломанных ламп с целью обеспечения безопасности и поддержания освещения в станции.</td>
    </tr>
    <tr>
        <td class="tg-0lax">Сервисный отдел не осуществил пополнение торговых автоматов. </td>
        <td class="tg-0lax">Разработана система автоматического контроля запасов товаров в торговых автоматах.<br>Созданы графики регулярного пополнения запасов с учетом предпочтений экипажа.<br>Введены стандарты качества товаров в автоматах и системы контроля сроков годности.<br>Проведено обучение персонала сервисного отдела по организации эффективного управления торговыми автоматами</td>
    </tr>
    <tr>
        <td class="tg-0lax">Шутки или розыгрыши клоуна привели к физической или моральной травме члена экипажа. </td>
        <td class="tg-0lax">Организовано обучение клоуна правилам этики и ответственного поведения в станции.<br>Установлены границы для проведения развлекательных мероприятий, исключающие возможность физического или морального воздействия на экипаж.<br>Разработаны стандарты контроля за действиями клоуна, предусматривающие обязательное соблюдение правил безопасности.<br>Введены меры ответственности для клоуна в случае нарушения установленных норм.</td>
    </tr>
    <tr>
        <td class="tg-cly1 highlighted-row" colspan="2">Отдел снабжения</td>
    </tr>
    <tr>
        <td class="tg-cly1">Сотрудник Отдела Снабжения не доставил груз в требуемый срок.</td>
        <td class="tg-0lax">Создана система мониторинга и отслеживания перемещения грузов с целью предотвращения задержек.<br>Разработаны протоколы срочной доставки для ситуаций, требующих быстрого реагирования.<br>Введены дополнительные тренинги для сотрудников по организации эффективного управления грузоперевозками.<br>Созданы автоматизированные системы уведомлений и контроля за выполнением графика доставок.</td>
    </tr>
    <tr>
        <td class="tg-cly1">Сотрудник Отдела снабжения отказал в заказе требуемого груза.</td>
        <td class="tg-0lax">Внедрены процедуры обязательного рассмотрения и утверждения всех запросов на поставку грузов.<br>Разработана система обоснования отказов в заказах с предоставлением альтернативных вариантов.<br>Проведены тренинги для сотрудников по обучению эффективной коммуникации с заказчиками.<br>Введена система обратной связи от отделов станции по качеству и своевременности поставок.</td>
    </tr>
    <tr>
        <td class="tg-cly1">Утилизаторы используют экипировку, оборудование и оружие вне экспедиционных миссий.</td>
        <td class="tg-0lax">Созданы четкие правила и ограничения по использованию утилизаторами оборудования и оружия.<br>Разработаны программы обучения утилизаторов по безопасному обращению с техникой.<br>Введены системы отслеживания и контроля за использованием экипировки утилизаторами.<br>Организованы регулярные проверки и аудиты деятельности утилизаторов для контроля за соблюдением правил и предотвращения возможных нарушений.</td>
    </tr>
    </tbody>
    </table>`;


// ▆▆▆▆▆▆▆▆▆ функция кнопки «наверх» ▆▆▆▆▆▆▆▆▆
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 1) {
        document.getElementById("myBtnUP").style.display = "block";
    } else {
        document.getElementById("myBtnUP").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.getElementById('myBtnUP').addEventListener('click', topFunction);

//▆▆▆▆▆▆▆▆▆ DARK THEME – переключение на темную тему и обратно ▆▆▆▆▆▆▆▆▆
const themeToggleBtn = document.getElementById('darkModeToggleBtn');
themeToggleBtn.addEventListener('click', function () {
    // Переключаем между светлой и темной темой
    document.documentElement.classList.toggle('dark-mode');
    // Меняем содержимое кнопки
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    const darkModeText = isDarkMode ? 'Space HoP Helper 14 🌚' : 'Space HoP Helper 14 🌞';
    themeToggleBtn.textContent = darkModeText;
});

//▆▆▆▆▆▆▆▆▆ Отображения toast-сообщения, которое найдено по ID ▆▆▆▆▆▆▆▆▆
function showToast(toastId) {
    var toast = new bootstrap.Toast(document.getElementById(toastId)).show();
}

//▆▆▆▆▆▆▆▆▆ Функция для копирования содержимого карточки в буфер обмена ▆▆▆▆▆▆▆▆▆
function copyCardContent(button) {
    const cardBody = button.closest('.card').querySelector('.editable-content');

    navigator.clipboard.writeText(cardBody.innerText.trim())
        .then(() => {
            showToast('toastCopy');
        })
        .catch(error => {
            console.error('Ошибка при копировании: ', error);
        });
}

//▆▆▆▆▆▆▆▆▆ Функция для копирования содержимого карточки в буфер обмена ▆▆▆▆▆▆▆▆▆
function saveContentToFile(content, name) {
    // Создаем новый объект Blob с текстовым содержимым
    var blob = new Blob([content], { type: 'text/plain' });
    // Создаем ссылку на объект Blob
    var url = window.URL.createObjectURL(blob);
    // Создаем элемент <a> для скачивания файла
    var a = document.createElement('a');
    // Устанавливаем атрибут href с URL объекта Blob
    a.href = url;
    // Устанавливаем атрибут download для указания имени файла
    a.download = name;
    // Добавляем элемент в DOM
    document.body.appendChild(a);
    // Симулируем клик для скачивания файла
    a.click();
    // Освобождаем URL объекта Blob
    window.URL.revokeObjectURL(url);
    // Удаляем элемент из DOM
    a.remove();
    // toast
    showToast('toastSave');
}
function saveCardContent(button) {
    const cardBody = button.closest('.card').querySelector('.editable-content');
    const cardTitle = button.closest('.card').querySelector('.card-title').innerText.trim();
    console.log(cardTitle);
    saveContentToFile(cardBody.innerText.trim(), cardTitle);
}

//▆▆▆▆▆▆▆▆▆ Форматирование поля "Станция" при нажатии Enter  ▆▆▆▆▆▆▆▆▆
function handleKeyDown(event) {

    if (event.key === 'Enter') {

        var inputText = document.getElementById('station-number').value;

        // Первая часть паттерна, тут можно добавить вашу карту
        var part1Pattern = new RegExp("(Atlas|TestTeg|Fland|Maus|Delta|Avrite|Paper|Silly|Meta|Packed|Gate|Gelta|Cluster|Omega|Astra|Bagel|Origin|CentComm|Outpost|Ishimura|NukieOutpost|Box|Europa|Spectrum|Saltern|Core|Marathon|MeteorArena|Atlas|Reach|Train|Oasis|Pillar|Aspid|Barratry|Gemini|Lighthouse|Moose|Split)", "i");
        var part1Match = inputText.match(part1Pattern);
        var part1 = part1Match ? part1Match[0] : 'Station';

        // Вторая часть паттерна
        var part2Pattern = new RegExp("\\s[A-Za-z]{2}-\\d{3}", "i");
        var part2Match = inputText.match(part2Pattern);
        var part2 = part2Match ? part2Match[0] : ' XX-000';

        // Склеиваем части паттерна и меняем значение в поле
        var result = part1.charAt(0).toUpperCase() + part1.slice(1).toLowerCase() + part2.toUpperCase();
        document.getElementById('station-number').value = result;
    }
}

//▆▆▆▆▆▆▆▆▆ Форматирование поля "Время от начала смены" ▆▆▆▆▆▆▆▆▆
function formatTime(input) {
    let value = input.value;

    // Удаляем все символы, кроме цифр и ":"
    value = value.replace(/[^\d:]/g, '');

    // Добавляем двоеточия
    if (value.length === 2 || value.length === 5) {
        value += ':';
    }

    // Устанавливаем отформатированное значение обратно в поле
    input.value = value;
}