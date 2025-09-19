import fs from 'node:fs';

const dir = fs.readdirSync('./news');

const items = [];
for (const file of dir.sort().reverse()) {
    if (!file.endsWith('.md')) continue;

    const article = String(fs.readFileSync(`./news/${file}`));

    const lines = article.split('\n');
    const jsonObject = {};

    let preamble = false;
    let body = [];

    lines.forEach(line => {
        if (line.trim() === '---' && !preamble) {
            preamble = true;
            return;
        } else if (line.trim() === '---') {
            preamble = false;
            return;
        }

        if (preamble) {
            const [key, value] = line.split(': ');
            if (value.startsWith('[') && value.endsWith(']')) {
                jsonObject[key] = JSON.parse(value);
            } else {
                jsonObject[key] = value;
            }
        } else {
            body.push(line);
        }
    });

    jsonObject.date = file.replace(/.md/, '');
    jsonObject.body = body.join('\n');

    items.push(jsonObject);
}

fs.writeFileSync('./news.json', JSON.stringify({
    items
}, null, 4))
