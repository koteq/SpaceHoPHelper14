use std::collections::HashMap;

#[derive(Debug, serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ProfileField {
    FullName,
    Position,
    PositionNew,
    FullNameObject,
    PositionObject,
    Department,
    DepartmentCode,
    StationGoal
}

#[derive(Debug, serde::Serialize, serde::Deserialize)]
pub struct ProfileTemplate {
    title: String,
    template: String,
}

#[derive(Debug, serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ProfileTemplateType {
    Column,
    Row
}
impl Default for ProfileTemplateType {
    fn default() -> Self { Self::Column }
}

#[derive(Debug, serde::Serialize, serde::Deserialize)]
pub struct ProfileSubcategoryItem {
    #[serde(default)]
    #[serde(rename = "type")]
    type_: ProfileTemplateType,
    templates: Vec<ProfileTemplate>,
}

#[derive(Debug, serde::Serialize, serde::Deserialize)]
pub struct ProfileSubategory {
    #[serde(default = "defaults::category_name")]
    name: String,
    items: Vec<ProfileSubcategoryItem>,
}

#[derive(Debug, serde::Serialize, serde::Deserialize)]
pub struct ProfileCategory {
    #[serde(default = "defaults::category_name")]
    name: String,
    subcategories: Vec<ProfileSubategory>,
}


#[derive(Debug, serde::Serialize, serde::Deserialize)]
pub struct ProfileSection {
    name: String,
    fields: Vec<ProfileField>,
    categories: Vec<ProfileCategory>,
}

#[derive(Debug, serde::Serialize, serde::Deserialize)]
pub struct ProfileGroup {
    name: String,
    sections: Vec<ProfileSection>,
}

#[derive(Debug, serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Profile {
    #[serde(rename = "profile")]
    name: String,
    #[serde(default = "defaults::positions")]
    positions: HashMap<String, Vec<String>>,
    #[serde(default = "defaults::departments")]
    departments: Vec<String>,
    #[serde(default = "defaults::dep_codes")]
    departments_codes: Vec<String>,
    groups: Vec<ProfileGroup>,
}

mod defaults {
    use std::vec;

    use super::*;

    pub fn category_name() -> String {
        "default".to_owned()
    }

    pub fn positions() -> HashMap<String, Vec<String>> {
        let mut positions = HashMap::new();
        
        positions.insert("undefined".to_owned(), vec!["<ДОЛЖНОСТЬ>".to_owned()]);
        positions.insert("Командование".to_owned(), vec![
            "Капитан".to_owned(),
            "Глава персонала".to_owned(),
            "Глава службы безопасности".to_owned(),
            "Главный врач".to_owned(),
            "Научный руководитель".to_owned(),
            "Старший инженер".to_owned(),
            "Квартирмейстер".to_owned(),
        ]);
        positions.insert("Медицинский отдел".to_owned(), vec![
            "Химик".to_owned(),
            "Парамедик".to_owned(),
            "Врач".to_owned(),
            "Психолог".to_owned(),
            "Интерн".to_owned(),
        ]);
        positions.insert("Научный отдел".to_owned(), vec![
            "Учёный".to_owned(),
            "Научный ассистент".to_owned(),
        ]);
        positions.insert("Инженерный отдел".to_owned(), vec![
            "Атмосферный техник".to_owned(),
            "Инженер".to_owned(),
            "Технический ассистент".to_owned(),
        ]);
        positions.insert("Отдел снабжения".to_owned(), vec![
            "Утилизатор".to_owned(),
            "Грузчик".to_owned(),
        ]);
        positions.insert("Сервисный отдел".to_owned(), vec![
            "Шеф-повар".to_owned(),
            "Ботаник".to_owned(),
            "Бармен".to_owned(),
            "Сервисный работник".to_owned(),
            "Боксёр".to_owned(),
            "Уборщик".to_owned(),
            "Библиотекарь".to_owned(),
            "Священник".to_owned(),
            "Зоотехник".to_owned(),
            "Репортёр".to_owned(),
            "Музыкант".to_owned(),
            "Пассажир".to_owned(),
            "Мим".to_owned(),
            "Клоун".to_owned(),
        ]);
        positions.insert("Юридический отдел".to_owned(), vec![
            "Магистрат".to_owned(),
            "Агент Внутренних Дел".to_owned(),
        ]);
        positions.insert("Отдел Службы Безопасности".to_owned(), vec![
            "Смотритель".to_owned(),
            "Детектив".to_owned(),
            "Пилот СБ".to_owned(),
            "Офицер СБ".to_owned(),
            "Кадет СБ".to_owned(),
        ]);
        positions.insert("Иное".to_owned(), vec![
            "ВрИО Капитана".to_owned(),
            "Инструктор СБ".to_owned(),
            "Ведущий врач".to_owned(),
            "Ведущий инженер".to_owned(),
            "Ведущий учёный".to_owned(),
            "Бригмедик".to_owned(),
            "Патологоанатом".to_owned(),
            "Хирург".to_owned(),
            "Вирусолог".to_owned(),
        ]);

        positions
    }

    pub fn departments() -> Vec<String> {
        vec![
            "<НАИМЕНОВАНИЕ ОТДЕЛА>".to_owned(),
            "Командования".to_owned(),
            "Медицинского отдела".to_owned(),
            "Научного отдела".to_owned(),
            "Отдела снабжения".to_owned(),
            "Инженерного отдела".to_owned(),
            "Сервисного отдела".to_owned(),
            "Службы безопасности".to_owned(),
            "Юридического департамента".to_owned(),
        ]
    }

    pub fn dep_codes() -> Vec<String> {
        vec![
            "<КОД ОТДЕЛА>".to_owned(),
            "ПД".to_owned(),
            "КОМ".to_owned(),
            "МЕД".to_owned(),
            "НИО".to_owned(),
            "СБ".to_owned(),
            "СНБ".to_owned(),
            "СРВ".to_owned(),
            "ЦК".to_owned(),
            "ЮР".to_owned(),
        ]
    }
}