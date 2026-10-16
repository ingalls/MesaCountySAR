import {
    IconUsersGroup,
    IconCompass,
    IconTrekking,
    IconStethoscope,
    IconLasso,
    IconTargetArrow,
    IconBackpack,
    IconClipboardCheck,
    IconClipboardText,
    IconMoonStars,
    IconConfetti,
    IconSchoolOff,
    IconCalendarX,
    IconChecklist
} from '@tabler/icons-vue';

const SO = { name: "Mesa County Sheriff's Office - Main Conference Room", url: 'https://maps.app.goo.gl/UY96dX6jL7VTWCP79' };
const GEER = { name: 'Geer Building', url: 'https://maps.app.goo.gl/wPm9riUFucWdXepo7' };
const PEPSI = { name: 'Pepsi Building', url: 'https://maps.app.goo.gl/Ypc6qtt8znjXkxTk6' };
const SECRET = { name: 'Disclosed the day of 🤫' };

export const SIGNUP_CLOSE = '2026-11-08';
export const PREREQ_DEADLINE = '2027-02-23';
export const COURSE_FEE = '$125';
export const COURSE_SEATS = 20;

export const sessions = [{
    date: '2027-03-02',
    time: '1800 - 2100',
    location: SO,
    icon: IconUsersGroup,
    topic: 'Introduction + Expectations + Gear Review + SO Tour',
    description: "An introduction to the team, the PM course, and expectations for members. Additionally, a review of required personal gear and a tour of the Sheriff's Office. The MCSAR Bylaws, Policies and Procedures, & Mesa County SO Code of Conduct will be provided for review and should be read and signed prior to the next training."
}, {
    date: '2027-03-04',
    time: '1800 - 2100',
    location: SO,
    icon: IconCompass,
    topic: 'Navigation With COTAK',
    description: "Students will learn the basics of utilizing COTAK, Colorado's first responder situational awareness tool, for navigation, including map reading.",
    links: [{ label: 'COTAK', url: 'https://cotak.gov/' }]
}, {
    date: '2027-03-06',
    time: '0800 - Afternoon',
    location: { name: 'Lunch Loops Trailhead', url: 'https://maps.app.goo.gl/7T45ah24hnVi37X97' },
    icon: IconTrekking,
    topic: 'Search Theory & Fitness Hike',
    description: 'Students will learn the basics of performing a search operation, including a high level overview of search theory, and a detailed overview of MCSAR expectations when responding to a callout. The day will conclude with the MCSAR annual fitness hike. Successful completion of the fitness hike with the allotted weight and within the allotted time is required before the Overnighter.'
}, {
    date: '2027-03-11',
    time: '1800 - 2100',
    location: GEER,
    icon: IconStethoscope,
    topic: 'Primary Assessment Rodeo',
    description: 'Students will spend the evening practicing patient assessments on a variety of patients and scenarios, focusing on building confidence and proficiency in primary assessment skills.'
}, {
    date: '2027-03-13',
    time: '0800 - 1700',
    location: { name: "Opal Hill/Devil's Canyon Trailhead", url: 'https://maps.app.goo.gl/VxYkHj1SxWYGXVA9A' },
    icon: IconStethoscope,
    topic: 'Patient Packaging & Litter Skills',
    description: 'Students will learn how to properly package a patient in a litter for transport, including litter assembly & selection, patient packaging techniques, and litter movement in the field.'
}, {
    date: '2027-03-18',
    time: '1800 - 2100',
    location: GEER,
    icon: IconLasso,
    topic: 'Basic System Intro + Anchors + Litter Bridles',
    description: 'Students will be introduced to fundamental technical rescue concepts, starting with basic forces and load factors and graduating to practicing applications in a hands-on environment.'
}, {
    type: 'break',
    date: '2027-03-20',
    end: '2027-03-28',
    icon: IconSchoolOff,
    topic: 'D51 Spring Break - No Training'
}, {
    date: '2027-04-01',
    time: '1800 - 2100',
    location: PEPSI,
    icon: IconLasso,
    topic: 'Personal Rope Skills',
    description: 'Students will learn essential rope skills for personal safety and movement in a vertical environment, focusing on ascending, descending, & changeovers.'
}, {
    date: '2027-04-03',
    time: '0800 - 1700',
    location: { name: 'Bangs Canyon', url: 'https://maps.app.goo.gl/g9iWQiRfQPcmAvL77' },
    icon: IconLasso,
    topic: 'Low Angle Field Day + System Safety',
    description: 'Students will practice low angle team based rescue in a field environment, learning how to identify low vs high angle terrain and to recognize hazards in the field.'
}, {
    date: '2027-04-08',
    time: '1730 - 0000',
    location: SECRET,
    icon: IconTargetArrow,
    topic: 'Mini Mission',
    description: 'The "mini mission" will be the first time PMs are put to the test in a realistic search and rescue scenario, covering all skills introduced up to this point.'
}, {
    date: '2027-04-10',
    time: '0800 - 1700',
    location: { name: 'Shareholder Canyon', url: 'https://maps.app.goo.gl/ZNPFogtMeJZP99g19' },
    icon: IconBackpack,
    topic: 'Vertical Field Day + Pack Check',
    description: 'Students will practice high angle rescue skills in a field environment. Additionally, students will have their personal gear inspected to ensure they are carrying the required equipment for field operations.'
}, {
    date: '2027-04-15',
    time: '1800 - 2200',
    location: PEPSI,
    icon: IconClipboardCheck,
    topic: 'PM Annuals Testing',
    description: "The PM course up until this point is designed to prepare you for the team's annual testing. You will be tested on your rope skills, patient packaging skills, and first aid knowledge. Note: Passing annuals is required to complete the PM course. An additional retest date will be scheduled for those who do not pass on the first attempt."
}, {
    date: '2027-04-17',
    time: '1800 - 0800 (Overnight)',
    location: SECRET,
    icon: IconMoonStars,
    topic: 'Overnighter',
    description: 'The "overnighter" is a mock mission designed to simulate a real search and rescue operation, testing all the skills and knowledge acquired during the PM course. Successful completion of the overnighter is required to complete the PM course.'
}, {
    date: '2027-04-18',
    time: '0800 - 1000',
    location: { name: 'Overnighter Morning Location' },
    icon: IconClipboardText,
    topic: 'Overnighter Evaluation',
    description: 'The team will evaluate PM performance and call PMs that evening to notify if they will be offered a seat on the team.',
    highlight: true
}, {
    date: '2027-04-22',
    time: '1800 - 2000',
    location: { name: 'Main SO', url: 'https://maps.app.goo.gl/UY96dX6jL7VTWCP79' },
    icon: IconConfetti,
    topic: 'Post PM Logistics & Potluck',
    description: 'Finalize administrative tasks and celebrate the completion of the 2027 PM course.'
}].sort(byDate);

export const milestones = [{
    type: 'deadline',
    date: SIGNUP_CLOSE,
    icon: IconCalendarX,
    topic: 'Interview sign-up closes',
    description: "Last day to reserve an interview slot. Interviews are held at the Mesa County Sheriff's Office."
}, {
    type: 'deadline',
    date: PREREQ_DEADLINE,
    icon: IconChecklist,
    topic: 'WFA certification & required gear deadline',
    description: 'Hold a current WFA (or higher) certification and have all required gear in hand before the first session.'
}].sort(byDate);

export default sessions;

export function byDate(a, b) {
    return a.date.localeCompare(b.date);
}

export function isBreak(event) {
    return event.type === 'break';
}

export function isDeadline(event) {
    return event.type === 'deadline';
}

export function parseDate(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d);
}

export function weekday(iso) {
    return parseDate(iso).toLocaleDateString('en-US', { weekday: 'long' });
}

export function longDate(iso) {
    return parseDate(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function shortDate(iso) {
    return parseDate(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
