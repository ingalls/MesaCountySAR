<template>
    <div class='page page-center'>
        <div class='d-print-none'>
            <PageHeader
                label='PM Course Outline'
                sublabel='Prospective Member (PM) Course · 2026-2027'
            />
        </div>

        <h1 class='d-none d-print-block container-xl mt-4'>
            MCSAR Prospective Member Course · 2026-2027
        </h1>

        <div class='container-xl py-4 d-print-none'>
            <div class='row g-2 align-items-center'>
                <div class='col d-flex'>
                    <ol
                        class='breadcrumb'
                        aria-label='breadcrumbs'
                    >
                        <li class='breadcrumb-item'>
                            <router-link to='/'>
                                Home
                            </router-link>
                        </li>
                        <li class='breadcrumb-item'>
                            <router-link to='/apply'>
                                Join Us
                            </router-link>
                        </li>
                        <li class='breadcrumb-item active'>
                            <a>PM Course</a>
                        </li>
                    </ol>
                </div>
                <div class='col-auto d-flex gap-2'>
                    <button
                        type='button'
                        class='btn btn-sm btn-outline-secondary'
                        @click='downloadCalendar([...sessions, ...milestones])'
                    >
                        <IconDownload
                            :size='16'
                            stroke='1.5'
                            class='me-1'
                        />
                        Add to Calendar
                    </button>
                    <button
                        type='button'
                        class='btn btn-sm btn-outline-secondary'
                        @click='print'
                    >
                        <IconPrinter
                            :size='16'
                            stroke='1.5'
                            class='me-1'
                        />
                        Print
                    </button>
                </div>
            </div>
        </div>

        <div class='container-xl'>
            <div class='row row-cards mb-6'>
                <div class='alert alert-danger d-flex d-print-none'>
                    <div>
                        <IconAlertTriangle
                            :size='32'
                            stroke='1'
                            class='text-danger'
                        />
                    </div>
                    <div>
                        Interview slots are only available to those who have submitted an application and spoken with our Prospective Member Coordinator.
                        To apply to join the team, and be given an interview slot, please visit the <router-link to='/apply'>Application Page</router-link>.
                    </div>
                </div>

                <div
                    id='overview'
                    class='card'
                >
                    <div class='card-header'>
                        <h3 class='card-title'>
                            2026-2027 Prospective Member Training Schedule
                        </h3>
                    </div>
                    <div class='card-body'>
                        <p>
                            Thank you for your interest in joining Mesa County Search &amp; Rescue (MCSAR).
                            The following document outlines the process for becoming a member of MCSAR.
                        </p>
                        <p>
                            A roster of current leadership can be found on the <router-link to='/team'>Team</router-link> page.
                        </p>
                        <p>
                            Throughout the process, any questions should be directed to the Prospective Member Coordinator at <a href='tel:2023906116'>(202) 390-6116</a>.
                        </p>

                        <div class='steps steps-counter my-4 d-print-none'>
                            <a
                                v-for='step in steps'
                                :key='step.label'
                                :href='step.href'
                                class='step-item'
                                :class='{ active: step.active }'
                                v-tooltip='step.detail'
                            >
                                {{ step.label }}
                            </a>
                        </div>

                        <div class='row g-3'>
                            <div class='col-lg-7'>
                                <h4 class='subheader'>
                                    Key Dates
                                </h4>
                                <table class='table table-sm table-borderless mb-0'>
                                    <tbody>
                                        <tr
                                            v-for='entry in keyDates'
                                            :key='entry.what'
                                        >
                                            <td class='key-when strong pe-3'>
                                                {{ entry.when }}
                                            </td>
                                            <td>
                                                <a
                                                    v-if='entry.href'
                                                    :href='entry.href'
                                                >{{ entry.what }}</a>
                                                <template v-else>
                                                    {{ entry.what }}
                                                </template>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class='col-lg-5 d-print-none'>
                                <h4 class='subheader'>
                                    On This Page
                                </h4>
                                <div class='d-flex flex-wrap gap-2'>
                                    <a
                                        v-for='section in sections'
                                        :key='section.href'
                                        :href='section.href'
                                        class='badge bg-blue-lt'
                                    >{{ section.label }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id='interview'
                    class='card'
                >
                    <div class='card-header'>
                        <IconUsersGroup
                            :size='24'
                            stroke='1.5'
                            class='me-2 text-primary'
                        />
                        <h3 class='card-title'>
                            Interview Slots
                        </h3>
                    </div>
                    <div class='card-body'>
                        <p>
                            Please sign up for an interview slot using the link below. Interviews will be held at
                            the <a
                                href='https://maps.app.goo.gl/NCf72in9pKp27j468'
                                target='_blank'
                                rel='noopener'
                            >Mesa County Sheriff's Office building</a>.
                        </p>
                        <div class='alert alert-info d-flex'>
                            <div>
                                <IconInfoSquareRounded
                                    :size='32'
                                    stroke='1'
                                    class='text-info'
                                />
                            </div>
                            <div>
                                The Google Map link provided above is directly on the door you will enter for your interview. Do not attempt to enter through the main entrance of the Sheriff's Office
                                or the Jail. If you have trouble finding the interview location, please call or text the Prospective Member Coordinator at <a href='tel:2023906116'>(202) 390-6116</a>.
                            </div>
                        </div>
                        <p>
                            On the day of your interview, please arrive 10 minutes early and bring a valid Colorado State ID or Driver's License. Your license will be submitted to the Sheriff's Office
                            for a background check done by the Colorado Bureau of Investigation (CBI).
                        </p>
                        <p>
                            The interview will last approximately 30 minutes and will be conducted by a panel of MCSAR members.
                            You will be asked about your interest in search and rescue, your availability, and any relevant experience you may have.
                        </p>
                        <p>
                            MCSAR will review all applications the week following interviews and notify applicants of their status by mid November at the latest.
                            Please note that our PM course is limited to {{ COURSE_SEATS }} new members, and not all applicants will be accepted.
                        </p>
                        <p>
                            All subsequent sections below are contingent on being offered one of the {{ COURSE_SEATS }} PM seats.
                        </p>

                        <div class='d-flex align-items-center flex-wrap gap-2 d-print-none'>
                            <span
                                v-if='signupClosed'
                                class='text-secondary'
                            >
                                Interview sign-ups closed {{ longDate(SIGNUP_CLOSE) }}.
                            </span>
                            <span
                                v-else
                                class='text-secondary'
                            >
                                Sign-ups close {{ longDate(SIGNUP_CLOSE) }}.
                            </span>
                            <a
                                class='btn btn-primary ms-auto'
                                :class='{ disabled: signupClosed }'
                                :aria-disabled='signupClosed'
                                :tabindex='signupClosed ? -1 : undefined'
                                href='https://www.signupgenius.com/go/10C0A4FABAB2BA5F5C34-65950654-mesasar'
                                target='_blank'
                                rel='noopener'
                            >
                                Sign Up for Interview
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    id='fee'
                    class='card'
                >
                    <div class='card-header'>
                        <IconCash
                            :size='24'
                            stroke='1.5'
                            class='me-2 text-primary'
                        />
                        <h3 class='card-title'>
                            PM Course Fee
                        </h3>
                        <span class='badge bg-blue-lt ms-auto'>Due ~1 week after offer</span>
                    </div>
                    <div class='card-body'>
                        <div class='row g-3'>
                            <div class='col-lg-10 col-md-8 col-sm-12'>
                                <p>
                                    The 2026-2027 PM Course fee is {{ COURSE_FEE }}, due approximately one week after you are offered a seat.
                                    This fee will cover the cost of certification, training materials, and expendables used during training.
                                </p>
                                <p>
                                    Please note that this fee is non-refundable, except in the extremely unlikely case that MCSAR is unable to offer the PM course.
                                </p>
                                <p class='mb-0'>
                                    Payment can be made by Venmo to <a
                                        href='https://venmo.com/u/Mesa-SAR'
                                        target='_blank'
                                        rel='noopener'
                                    >@Mesa-SAR</a> or by scanning the QR code.
                                </p>
                            </div>
                            <div class='col-lg-2 col-md-4 col-sm-12 d-flex justify-content-center align-items-center'>
                                <img
                                    src='/venmo.jpg'
                                    alt='Venmo QR Code for @Mesa-SAR'
                                    style='height: 200px;'
                                    class='rounded'
                                >
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id='wfa'
                    class='card'
                >
                    <div class='card-header'>
                        <IconFirstAidKit
                            :size='24'
                            stroke='1.5'
                            class='me-2 text-primary'
                        />
                        <h3 class='card-title'>
                            Wilderness First Aid Course
                        </h3>
                        <span class='badge bg-blue-lt ms-auto'>Date to be announced</span>
                    </div>
                    <div class='card-body'>
                        <p>
                            Prospective Members must hold a current Wilderness First Aid (WFA) certification from a WMEC member provider, or a higher certification, by {{ longDate(PREREQ_DEADLINE) }}.
                        </p>
                        <p>
                            Alternate certifications that meet this requirement include:
                        </p>

                        <ul>
                            <li>Current WMEC Wilderness First Responder (WFR)</li>
                            <li>Current Outdoor Emergency Care (OEC) - National Ski Patrol</li>
                            <li>Current Emergency Medical Technician (EMT), NREMT Certificate</li>
                            <li>Current Paramedic (EMT-P), NREMT Certificate</li>
                            <li>Licensed Practical Nurse (LPN)</li>
                            <li>Registered Nurse (RN)</li>
                            <li>Physician (MD or DO)</li>
                        </ul>

                        <p class='mb-0'>
                            To assist PMs who do not already hold one of the above certifications, MCSAR will host a WFA course, date to be announced, at no
                            cost provided the PM completes the PM Course. Registration details will be provided to those PMs who are offered a seat and require certification. PMs are
                            also welcome to obtain certification through other providers, but doing so will be at your own expense. Please ensure the provider is accepted by MCSAR prior
                            to enrolling in a course by contacting the Prospective Member Coordinator.
                        </p>
                    </div>
                </div>

                <div
                    id='prereqs'
                    class='card'
                >
                    <div class='card-header'>
                        <IconChecklist
                            :size='24'
                            stroke='1.5'
                            class='me-2 text-primary'
                        />
                        <h3 class='card-title'>
                            Pre-Course Requirements
                        </h3>
                        <span class='badge bg-orange-lt ms-auto'>Due {{ longDate(PREREQ_DEADLINE) }}</span>
                    </div>
                    <div class='card-body'>
                        <p>
                            Prior to the start of the PM course, all applicants must complete or obtain the following:
                        </p>
                        <ul>
                            <li>
                                Pay the PM Course fee after accepting your seat in the PM course.
                            </li>
                            <li>
                                Hold a WFA (or higher) certification by {{ longDate(PREREQ_DEADLINE) }}.
                            </li>
                            <li>
                                Complete the following no-cost FEMA ICS courses before the start of the PM Course.
                                A FEMA Student ID is required to take these courses, which can be obtained for free by creating an account at
                                <a
                                    href='https://cdp.dhs.gov/femasid'
                                    target='_blank'
                                    rel='noopener'
                                >FEMA SID</a>.
                                <ul>
                                    <li
                                        v-for='course in femaCourses'
                                        :key='course.url'
                                    >
                                        <a
                                            :href='course.url'
                                            target='_blank'
                                            rel='noopener'
                                        >{{ course.label }}</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Obtain the required gear listed below by {{ longDate(PREREQ_DEADLINE) }}.
                            </li>
                        </ul>
                        <p class='mb-0'>
                            Failure to complete these requirements by the specified deadlines may result in disqualification from the PM course.
                        </p>
                    </div>
                </div>

                <div
                    id='gear'
                    class='card'
                >
                    <div class='card-header'>
                        <IconBackpack
                            :size='24'
                            stroke='1.5'
                            class='me-2 text-primary'
                        />
                        <h3 class='card-title'>
                            Required Gear
                        </h3>
                        <span class='badge bg-orange-lt ms-auto'>Due {{ longDate(PREREQ_DEADLINE) }}</span>
                    </div>
                    <div class='card-body'>
                        <p>
                            Check items off as you acquire them. Your progress is saved in this browser.
                        </p>
                        <GearChecklist />
                        <p class='text-secondary mt-3 mb-0'>
                            Additional gear may be required after the course as our winter season approaches. Once on the team you will gain access to gear discounts
                            through various partnerships which can reduce the cost of gear by 20-50%.
                        </p>
                    </div>
                </div>

                <div
                    id='timeline'
                    class='card'
                >
                    <div class='card-header'>
                        <IconCalendarStats
                            :size='24'
                            stroke='1.5'
                            class='me-2 text-primary'
                        />
                        <h3 class='card-title'>
                            PM Course Timeline
                        </h3>
                        <span class='badge bg-blue-lt ms-auto'>{{ shortDate(firstSession.date) }} - {{ shortDate(lastSession.date) }}</span>
                    </div>
                    <div class='card-body'>
                        <p>
                            The PM Course is the foundational training program for applicants wishing to join MCSAR.
                        </p>
                        <p>
                            PM Course Dates are <span class='strong text-red'>MANDATORY</span> and attendance is required to successfully complete the PM course and be considered for membership.
                            Please review the schedule before attending your interview to ensure you will be able to attend all sessions if offered a seat on the team.
                        </p>
                        <div class='d-flex mb-3 d-print-none'>
                            <div
                                class='btn-group ms-auto'
                                role='group'
                            >
                                <button
                                    type='button'
                                    class='btn btn-sm'
                                    :class='view === "timeline" ? "btn-primary" : "btn-outline-primary"'
                                    @click='view = "timeline"'
                                >
                                    <IconTimelineEvent
                                        :size='16'
                                        stroke='1.5'
                                        class='me-1'
                                    />
                                    Timeline
                                </button>
                                <button
                                    type='button'
                                    class='btn btn-sm'
                                    :class='view === "calendar" ? "btn-primary" : "btn-outline-primary"'
                                    @click='view = "calendar"'
                                >
                                    <IconCalendarMonth
                                        :size='16'
                                        stroke='1.5'
                                        class='me-1'
                                    />
                                    Calendar
                                </button>
                            </div>
                        </div>
                        <div
                            v-if='view === "calendar"'
                            class='d-print-none'
                        >
                            <CourseCalendar :events='[...sessions, ...milestones]' />
                        </div>
                        <div :class='view === "calendar" ? "d-none d-print-block" : ""'>
                            <CourseTimeline :events='sessions' />
                        </div>
                    </div>
                </div>

                <div
                    id='post-course'
                    class='card'
                >
                    <div class='card-header'>
                        <IconFlag3
                            :size='24'
                            stroke='1.5'
                            class='me-2 text-primary'
                        />
                        <h3 class='card-title'>
                            Post-Course Requirements
                        </h3>
                    </div>
                    <div class='card-body'>
                        <p>
                            If offered a seat on the team, probationary members must maintain the following requirements to remain in good standing with the team:
                        </p>
                        <ul class='mb-0'>
                            <li>
                                Better than or equal to 50% training attendance (8 Trainings/Quarter - 5 after first year)
                            </li>
                            <li>
                                Better than or equal to 33% mission attendance.
                            </li>
                            <li>
                                Minimum of 1 PSAR (parade, hug-a-tree, etc.).
                            </li>
                            <li>
                                Practice and maintain fundamental SAR skills.
                            </li>
                            <li>
                                Maintain a high level of fitness and readiness to respond to missions.
                            </li>
                            <li>
                                Willingness to learn new skills, work as a team and take direction from others.
                            </li>
                            <li>
                                Represent MCSAR in a professional and respectable manner.
                            </li>
                            <li>
                                Maintain a valid WFA (or higher) certification.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class='d-print-none'>
            <PageFooter />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import PageHeader from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';
import CourseTimeline from './PMCourse/CourseTimeline.vue';
import CourseCalendar from './PMCourse/CourseCalendar.vue';
import GearChecklist from './PMCourse/GearChecklist.vue';
import {
    sessions,
    milestones,
    isBreak,
    parseDate,
    longDate,
    shortDate,
    SIGNUP_CLOSE,
    PREREQ_DEADLINE,
    COURSE_FEE,
    COURSE_SEATS
} from './PMCourse/schedule.js';
import { downloadCalendar } from './PMCourse/ics.js';
import {
    IconCalendarMonth,
    IconCalendarStats,
    IconTimelineEvent,
    IconAlertTriangle,
    IconInfoSquareRounded,
    IconUsersGroup,
    IconCash,
    IconFirstAidKit,
    IconChecklist,
    IconBackpack,
    IconFlag3,
    IconDownload,
    IconPrinter
} from '@tabler/icons-vue';

const view = ref(window.location.hash === '#calendar' ? 'calendar' : 'timeline');

const today = new Date();
const signupClosed = today >= new Date(parseDate(SIGNUP_CLOSE).getTime() + 24 * 60 * 60 * 1000);

const courseSessions = sessions.filter((session) => !isBreak(session));
const firstSession = courseSessions[0];
const lastSession = courseSessions[courseSessions.length - 1];
const overnighter = courseSessions.find((session) => session.topic === 'Overnighter');

const sections = [
    { label: 'Interview', href: '#interview' },
    { label: 'Course Fee', href: '#fee' },
    { label: 'Wilderness First Aid', href: '#wfa' },
    { label: 'Pre-Course Requirements', href: '#prereqs' },
    { label: 'Required Gear', href: '#gear' },
    { label: 'Course Timeline', href: '#timeline' },
    { label: 'Post-Course', href: '#post-course' }
];

const stepDefinitions = [
    { label: 'Apply', href: '/apply', until: '2026-11-01', detail: 'Submit an application and speak with the Prospective Member Coordinator' },
    { label: 'Interview', href: '#interview', until: SIGNUP_CLOSE, detail: `Sign up for an interview slot by ${longDate(SIGNUP_CLOSE)}` },
    { label: 'Offer', href: '#interview', until: '2026-11-20', detail: 'Applicants are notified by mid November' },
    { label: 'Fee', href: '#fee', until: '2026-11-30', detail: `${COURSE_FEE} course fee due about a week after your offer` },
    { label: 'Prerequisites', href: '#prereqs', until: PREREQ_DEADLINE, detail: `WFA, FEMA courses, and gear by ${longDate(PREREQ_DEADLINE)}` },
    { label: 'Course', href: '#timeline', until: lastSession.date, detail: `${longDate(firstSession.date)} through ${longDate(lastSession.date)}` },
    { label: 'Team', href: '#post-course', until: '9999-12-31', detail: 'Probationary membership begins' }
];

const steps = computed(() => {
    const activeIndex = Math.max(0, stepDefinitions.findIndex((step) => today < parseDate(step.until)));
    return stepDefinitions.map((step, index) => ({ ...step, active: index === activeIndex }));
});

const keyDates = [
    { when: longDate(SIGNUP_CLOSE), what: 'Interview sign-up closes', href: '#interview' },
    { when: 'Mid November 2026', what: `Offers sent to the ${COURSE_SEATS} selected applicants`, href: '#interview' },
    { when: '~1 week after offer', what: `${COURSE_FEE} course fee due`, href: '#fee' },
    { when: 'To be announced', what: 'MCSAR hosted Wilderness First Aid course', href: '#wfa' },
    { when: longDate(PREREQ_DEADLINE), what: 'WFA certification, FEMA courses, and required gear deadline', href: '#prereqs' },
    { when: longDate(firstSession.date), what: 'PM Course begins', href: '#timeline' },
    { when: `${longDate(overnighter.date)} - ${shortDate(lastSession.date)}`, what: 'Overnighter, evaluation, and course wrap-up', href: '#timeline' }
];

const femaCourses = [
    { label: 'FEMA - Emergency Management Institute (EMI) Course | IS-100.C: Introduction to the Incident Command System, ICS 100', url: 'https://www.firstrespondertraining.gov/frts/npccatalog?id=2304' },
    { label: 'FEMA - Emergency Management Institute (EMI) Course | IS-200.C: Basic Incident Command System for Initial Response', url: 'https://www.firstrespondertraining.gov/frts/npccatalog?id=2322' },
    { label: 'FEMA - Emergency Management Institute (EMI) Course | IS-700.B: An Introduction to the National Incident Management System', url: 'https://www.firstrespondertraining.gov/frts/npccatalog?id=2404' }
];

function print() {
    view.value = 'timeline';
    setTimeout(() => window.print(), 50);
}

onMounted(() => {
    document.title = 'PM Course | Mesa County SAR';
});
</script>

<style scoped>
.card[id] {
    scroll-margin-top: 5.5rem;
}

@media (min-width: 768px) {
    .key-when {
        white-space: nowrap;
    }
}

@media (max-width: 575.98px) {
    .steps .step-item {
        min-width: 6rem;
    }
}

@media print {
    .card {
        break-inside: avoid;
        border: 1px solid #ccc;
        box-shadow: none;
    }

    a[href^='http']::after {
        content: ' (' attr(href) ')';
        font-size: 0.75em;
        color: #666;
    }
}
</style>
