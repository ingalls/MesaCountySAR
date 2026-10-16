import { parseDate, isBreak } from './schedule.js';

const DAY = 24 * 60 * 60 * 1000;

function pad(n) {
    return String(n).padStart(2, '0');
}

function stamp(date) {
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
}

function dateOnly(date) {
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
}

function escape(text) {
    return String(text).replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
}

function fold(line) {
    const out = [];
    let rest = line;
    while (rest.length > 73) {
        out.push(rest.slice(0, 73));
        rest = ' ' + rest.slice(73);
    }
    out.push(rest);
    return out.join('\r\n');
}

function times(event) {
    const match = /^(\d{2})(\d{2})(?:\s*-\s*(\d{2})(\d{2}))?/.exec(event.time || '');
    if (!match) return null;

    const start = parseDate(event.date);
    start.setHours(Number(match[1]), Number(match[2]));

    let end;
    if (match[3]) {
        end = parseDate(event.date);
        end.setHours(Number(match[3]), Number(match[4]));
        if (end <= start) end = new Date(end.getTime() + DAY);
    } else {
        end = new Date(start.getTime() + 6 * 60 * 60 * 1000);
    }

    return { start, end };
}

export function buildCalendar(events) {
    const now = new Date();
    const dtstamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;

    const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Mesa County SAR//PM Course//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'X-WR-CALNAME:MCSAR PM Course 2027'
    ];

    for (const event of events) {
        if (isBreak(event)) continue;

        const slug = event.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const range = times(event);

        lines.push('BEGIN:VEVENT');
        lines.push(`UID:${event.date}-${slug}@mesacountysar.com`);
        lines.push(`DTSTAMP:${dtstamp}`);

        if (range) {
            lines.push(`DTSTART:${stamp(range.start)}`);
            lines.push(`DTEND:${stamp(range.end)}`);
        } else {
            const start = parseDate(event.date);
            lines.push(`DTSTART;VALUE=DATE:${dateOnly(start)}`);
            lines.push(`DTEND;VALUE=DATE:${dateOnly(new Date(start.getTime() + DAY))}`);
        }

        lines.push(`SUMMARY:${escape(`MCSAR PM: ${event.topic}`)}`);
        if (event.location) lines.push(`LOCATION:${escape(event.location.name)}`);
        if (event.location && event.location.url) lines.push(`URL:${event.location.url}`);

        const description = [event.description, event.time ? `Time: ${event.time}` : null].filter(Boolean).join('\n');
        if (description) lines.push(`DESCRIPTION:${escape(description)}`);

        lines.push('END:VEVENT');
    }

    lines.push('END:VCALENDAR');

    return lines.map(fold).join('\r\n') + '\r\n';
}

export function downloadCalendar(events, filename = 'mcsar-pm-course-2027.ics') {
    const blob = new Blob([buildCalendar(events)], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}
