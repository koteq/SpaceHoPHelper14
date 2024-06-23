import re
import yaml
import ruamel.yaml
from bs4 import BeautifulSoup, NavigableString

literal = ruamel.yaml.scalarstring.LiteralScalarString
yaml = ruamel.yaml.YAML()

with open('scripts/index.html', 'r', encoding='utf-8') as file:
    html = file.read()

groups = []
notnavig = lambda e: not isinstance(e, NavigableString)
selector = BeautifulSoup(html, 'html.parser').select_one('select#statement-type')
for group in filter(notnavig, selector.children):
    sections = []
    for section in filter(notnavig, group.children):
        sections.append({
            'name': section.get_text().strip(),
            'id': section.get('value').strip()
        })
    groups.append({
        'name': group.get('label').strip(),
        'sections': sections
    })

pattern = re.compile(
    r"if\s*\(statementType\s*===\s*'(\d+)'\)\s*\{[^{}]*?statementTemplate\s*=\s*`([^`]*)`;[^{}]*\}", 
    re.DOTALL
)
matches = pattern.findall(html)

def get_text(element):
    text = '\n'.join(map(lambda x: x.strip(), element.select_one('.card-text').get_text().split('\n'))).strip()
    return text
def extract_data_from_html(html, name):
    soup = BeautifulSoup(html, 'html.parser')
    get_category = lambda: section['categories'][[index for (index, item) in enumerate(section['categories']) if item['name'] == category][0]]
    get_subcategory = lambda: get_category()['subcategories'][[index for (index, item) in enumerate(get_category()['subcategories']) if item['name'] == sub][0]]
    section = {
        'name': name,
        'fields': [],
        'categories': []
    }
    section['categories'].append({
        'name': "default",
        'subcategories': []
    })
    section['categories'][0]['subcategories'].append({
        'name': "default",
        'items': []
    })
    category = 'default'
    sub = 'default'

    for element in filter(notnavig, soup.contents):
        if element.name == 'div' and element.get('class') is not None and 'row' in element.get('class'):
            templates = []
            for child in filter(notnavig, element.children):
                if child.name == 'h3':
                    category = child.get_text().strip()
                    section['categories'].append({
                        'name': category,
                        'subcategories': []
                    })
                    section['categories'][-1]['subcategories'].append({
                        'name': sub,
                        'items': []
                    })
                    continue
                if child.name == 'h4':
                    sub = child.get_text().strip()
                    section['categories'][-1]['subcategories'].append({
                        'name': sub,
                        'items': []
                    })
                    continue
                if child.name == 'div':
                    templates.append({
                        'title': child.select_one('.card-title').get_text().strip(),
                        'template': get_text(child)
                    })
            get_subcategory()['items'].append({
                'type': "row",
                'templates': templates
            })
        elif element.name == 'div' and element.get('class') is not None and 'card' in element.get('class'):
            templates = []
            templates.append({
                'title': element.select_one('.card-title').get_text().strip(),
                'template': get_text(element)
            })
            while element.next_sibling.name == 'div' and element.next_sibling.get('class') is not None and 'card' in element.next_sibling.get('class'):
                element = element.next_sibling
                templates.append({
                    'title': element.select_one('.card-title').get_text().strip(),
                    'template': get_text(element)
                })
            get_subcategory()['items'].append({
                'type': "column",
                'templates': templates
            })
        elif element.name == 'h3':
            category = element.get_text().strip()
            section['categories'].append({
                'name': category,
                'subcategories': []
            })
            section['categories'][-1]['subcategories'].append({
                'name': sub,
                'items': []
            })
        elif element.name == 'h4':
            sub = element.get_text().strip()
            section['categories'][-1]['subcategories'].append({
                'name': sub,
                'items': []
            })

    fields = []
    blacklist = ['addSpaces', 'timerFromStart', 'currentDate', 'stationNumber']
    rename = {
        'departmentType': 'department',
        'selectedDepartmentCode': 'departmentCode', 
        'yourName': 'fullName', 
        'newSelectedPosition': 'positionNew',
        'selectedPositionObject': 'positionObject',
        'selectedPosition': 'position',
        'timerFromStart': 'time', 'currentDate': 'date',
        'addSpaces': 'spaces',
    }
    pattern = re.compile(r"\$\{(\w+)\}", re.DOTALL)
    for category in section['categories']:
        for subcategory in category['subcategories']:
            for item in subcategory['items']:
                for template in item['templates']:
                    matches = pattern.findall(template['template'])
                    for match in matches:
                        newName = match
                        if (match in rename.keys()):
                            newName = rename[match]
                        
                        cleaned_body = re.sub(r"\$\{" + match + r"\}", "${{" + newName + "}}",  template['template']).replace('\\xa0', ' ')
                        template['template'] = literal(cleaned_body)
                        
                        if (match in blacklist):
                            continue
                        fields.append(newName)

    section['fields'] = list(set(fields))

    return section

profile = {
    'profile': 'Corvax',
    'groups': []
}
for group in groups:
    g = {
        'name': group['name'],
        'sections': []
    }
    for section in group['sections']:
        sec = extract_data_from_html(next(x for x in matches if x[0] == section['id'])[1], section['name'])
        g['sections'].append({
            'name': section['name'],
            'fields': sec['fields'],
            'categories': sec['categories']
        })
    
    profile['groups'].append(g)


with open('assets/profiles/corvax.yaml', 'w', encoding='utf-8') as file:
    yaml.dump(profile, file)