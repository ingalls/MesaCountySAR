import fs from 'node:fs';

const dir = fs.readdirSync('./news');

const items = [];
for (const file of dir.sort()) {
    if (!file.endsWith('.md')) continue;

    const article = String(fs.readFileSync(`./news/${file}`));

    const keyValueStore = article.match(/---\n([\s\S]*?)\n---/)[1];
    const lines = keyValueStore.split('\n');
    const jsonObject = {};

    lines.forEach(line => {
        const [key, value] = line.split(': ');
        if (value.startsWith('[') && value.endsWith(']')) {
            jsonObject[key] = JSON.parse(value);
        } else {
            jsonObject[key] = value;
        }
    });

    jsonObject.date = file.replace(/.md/, '');

    items.push(jsonObject);
}

fs.writeFileSync('./news.json', JSON.stringify({
    items
}, null, 4))
