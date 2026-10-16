<template>
    <div>
        <div class='sticky-top'>
            <Call911 />
        </div>

        <section class='hero'>
            <div class='hero-panel container-xl'>
                <div class='hero-copy animate__animated animate__fadeIn'>
                    <h1 class='hero-title'>
                        Mesa County<br>Search and Rescue
                    </h1>
                    <p class='hero-lead'>
                        Dedicated to saving lives. We have been serving Mesa County for over 20 years.
                    </p>
                    <div class='d-flex flex-wrap gap-2'>
                        <a
                            :href='PAYPAL'
                            target='_blank'
                            rel='noopener'
                            class='btn btn-danger btn-lg px-4'
                        >
                            Donate
                        </a>
                        <router-link
                            to='/apply'
                            class='btn btn-outline-light btn-lg px-4'
                        >
                            Join the Team
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <div class='emergency-strip'>
            <div class='container-xl d-flex flex-wrap align-items-center justify-content-center gap-2 text-center'>
                <span class='strong d-inline-flex align-items-center gap-2'>
                    <IconPhoneCall
                        :size='22'
                        stroke='2'
                        class='flex-shrink-0'
                    />
                    In an emergency, call 911 and ask for Search and Rescue.
                </span>
                <span class='d-none d-md-inline opacity-75'>We respond at the request of the Mesa County Sheriff's Office.</span>
            </div>
        </div>

        <section class='py-6 py-md-7 bg-sand'>
            <div class='container-xl'>
                <div class='row g-5 align-items-center'>
                    <div class='col-lg-5'>
                        <h2 class='section-title'>
                            A year on the team
                        </h2>
                        <p class='text-secondary mb-4'>
                            We are a small team with a big backyard. Mesa County covers canyon country, desert, the Grand Mesa,
                            and two major rivers, and we train year-round to work in all of it.
                        </p>
                        <div class='row g-4'>
                            <div
                                v-for='stat in stats'
                                :key='stat.key'
                                :ref='(el) => (statRefs[stat.key] = el)'
                                class='col-4'
                                :data-stat='stat.key'
                            >
                                <div class='stat-number'>
                                    {{ counts[stat.key].toLocaleString() }}+
                                </div>
                                <div class='stat-label'>
                                    {{ stat.label }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-lg-7'>
                        <div class='row g-3'>
                            <div class='col-6'>
                                <figure class='photo-card'>
                                    <img
                                        src='/home/rope.webp'
                                        alt='A team member on rope at a cliff edge above the valley'
                                        loading='lazy'
                                        width='1200'
                                        height='900'
                                    >
                                    <figcaption>Rope practice above the Grand Valley</figcaption>
                                </figure>
                            </div>
                            <div class='col-6'>
                                <figure class='photo-card'>
                                    <img
                                        src='/home/heli.webp'
                                        alt='A helicopter landed on a mesa with team members nearby'
                                        loading='lazy'
                                        width='1200'
                                        height='900'
                                    >
                                    <figcaption>Working with air resources on a carry-out</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class='py-6 py-md-7'>
            <div class='container-xl'>
                <div class='row g-5'>
                    <div class='col-lg-4'>
                        <h2 class='section-title'>
                            More than lost hikers
                        </h2>
                        <p class='text-secondary'>
                            Most callouts start the same way: someone is overdue, hurt, or stuck somewhere a truck can't reach.
                            What happens next depends on the terrain, the weather, and the hour. Our members are trained across all of it,
                            from map and compass to high-angle rope systems to packaging a patient for a long carry.
                        </p>
                        <p class='text-secondary'>
                            Every member is an unpaid professional. Many hold wilderness medical certifications. All of them carry a pager.
                        </p>
                        <ul class='list-unstyled fact-list mb-0'>
                            <li>100% volunteer</li>
                            <li>100% donation and grant funded</li>
                            <li>Never a charge for rescue</li>
                        </ul>
                    </div>
                    <div class='col-lg-8'>
                        <div class='row g-3'>
                            <div
                                v-for='scene in scenes'
                                :key='scene.title'
                                class='col-6'
                            >
                                <figure class='scene'>
                                    <img
                                        :src='scene.src'
                                        :alt='scene.alt'
                                        loading='lazy'
                                        width='1200'
                                        height='900'
                                    >
                                    <figcaption>
                                        <div class='scene-title'>
                                            {{ scene.title }}
                                        </div>
                                        <div class='scene-text'>
                                            {{ scene.text }}
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            v-if='posts.length'
            class='py-6 py-md-7 bg-sand'
        >
            <div class='container-xl'>
                <div class='d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4'>
                    <h2 class='section-title mb-0'>
                        From the field
                    </h2>
                    <router-link
                        to='/news'
                        class='link-danger fw-bold'
                    >
                        All mission reports
                    </router-link>
                </div>
                <div class='row g-3'>
                    <div
                        v-for='post in posts'
                        :key='post.date + post.name'
                        class='col-md-4'
                    >
                        <router-link
                            to='/news'
                            class='card h-100 post-card text-decoration-none'
                        >
                            <div class='card-body'>
                                <div class='post-date'>
                                    {{ postDate(post.date) }}
                                </div>
                                <h3 class='h4 mt-1 mb-2'>
                                    {{ post.name }}
                                </h3>
                                <p class='text-secondary mb-0'>
                                    {{ excerpt(post.body) }}
                                </p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <section class='join-band'>
            <div class='container-xl'>
                <div class='join-card'>
                    <template v-if='recruiting'>
                        <div class='hero-eyebrow text-red'>
                            Applications open through {{ longDate(SIGNUP_CLOSE) }}
                        </div>
                        <h2 class='h1 mb-3'>
                            We're building the 2027 class.
                        </h2>
                        <p class='text-secondary mb-4'>
                            No search and rescue experience required. Bring fitness, dependability, and a willingness to learn,
                            and we'll teach the rest over a spring of training.
                        </p>
                        <div class='d-flex flex-wrap gap-2'>
                            <router-link
                                to='/apply'
                                class='btn btn-danger btn-lg'
                            >
                                Apply to Join
                            </router-link>
                            <router-link
                                to='/contact'
                                class='btn btn-outline-dark btn-lg'
                            >
                                Ask a Question
                            </router-link>
                        </div>
                    </template>
                    <template v-else>
                        <div class='hero-eyebrow text-red'>
                            Volunteer
                        </div>
                        <h2 class='h1 mb-3'>
                            We train a new class every spring.
                        </h2>
                        <p class='text-secondary mb-4'>
                            Applications open each fall. No search and rescue experience required, just fitness, dependability,
                            and a willingness to learn. Get in touch if you'd like a heads-up when applications open.
                        </p>
                        <div class='d-flex flex-wrap gap-2'>
                            <router-link
                                to='/contact'
                                class='btn btn-danger btn-lg'
                            >
                                Contact Us
                            </router-link>
                        </div>
                    </template>
                </div>
            </div>
        </section>

        <section class='py-6 py-md-7'>
            <div class='container-xl'>
                <div class='donate-box'>
                    <div class='row g-4 align-items-center'>
                        <div class='col-lg-7'>
                            <h2 class='h1 mb-3'>
                                Rescue is free. Running a rescue team isn't.
                            </h2>
                            <p class='text-secondary mb-0'>
                                Rope wears out. Radios break. Litters, medical supplies, and training all cost money, and none of it is billed
                                to the people we help. Donations and grants cover every dollar.
                            </p>
                        </div>
                        <div class='col-lg-5'>
                            <div class='d-grid gap-2'>
                                <a
                                    :href='PAYPAL'
                                    target='_blank'
                                    rel='noopener'
                                    class='btn btn-danger btn-lg'
                                >
                                    Donate with PayPal
                                </a>
                                <a
                                    href='https://venmo.com/u/Mesa-SAR'
                                    target='_blank'
                                    rel='noopener'
                                    class='btn btn-outline-dark btn-lg'
                                >
                                    Venmo @Mesa-SAR
                                </a>
                            </div>
                            <p class='small text-secondary mt-3 mb-0'>
                                Heading into the backcountry? A
                                <a
                                    href='https://cpw.state.co.us/backcountry-search-and-rescue-program'
                                    target='_blank'
                                    rel='noopener'
                                >Colorado CORSAR card</a>
                                costs $5 a year and helps fund teams like ours statewide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <SiteFooter />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import SiteFooter from './util/SiteFooter.vue';
import Call911, { PAYPAL } from './util/Call911.vue';
import { longDate, parseDate, SIGNUP_CLOSE } from './PMCourse/schedule.js';
import { IconPhoneCall } from '@tabler/icons-vue';

const recruiting = new Date() < new Date(parseDate(SIGNUP_CLOSE).getTime() + 24 * 60 * 60 * 1000);

const scenes = [{
    src: '/home/search.webp',
    alt: 'Team members searching a sandstone canyon',
    title: 'Searches',
    text: 'Overdue hikers, bikers, hunters, and climbers, from the Monument to the Grand Mesa.'
}, {
    src: '/home/litter.webp',
    alt: 'Team members practicing patient packaging in a litter',
    title: 'Carry-outs',
    text: 'Packaging an injured patient and getting them out by litter, wheel, rope, or helicopter.'
}, {
    src: '/home/winter.webp',
    alt: 'Team members training in deep snow',
    title: 'Winter',
    text: 'Snow on the Grand Mesa does not cancel a callout. It just changes the gear list.'
}, {
    src: '/home/river.webp',
    alt: 'A team member piloting a boat on the river',
    title: 'Rivers and canyons',
    text: 'The Colorado and the Dolores run through our county, and so do the people who float them.'
}];

const stats = [
    { key: 'missions', label: 'Missions a year', target: 100 },
    { key: 'members', label: 'Members', target: 40 },
    { key: 'hours', label: 'Hours donated', target: 5000 }
];

const counts = reactive({ missions: 0, members: 0, hours: 0 });
const statRefs = ref({});
let observer = null;

function animateStat(stat) {
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        counts[stat.key] = Math.floor(stat.target * ease);
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

const posts = ref([]);

function excerpt(body) {
    const text = (body || '')
        .split('\n\n')[0]
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/[*_#>]/g, '')
        .trim();
    if (text.length <= 170) return text;
    return text.slice(0, 170).replace(/\s+\S*$/, '') + '…';
}

function postDate(iso) {
    return parseDate(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

onMounted(async () => {
    observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const stat = stats.find((s) => s.key === entry.target.dataset.stat);
            if (stat) animateStat(stat);
            observer.unobserve(entry.target);
        }
    }, { threshold: 0.5 });

    for (const el of Object.values(statRefs.value)) {
        if (el) observer.observe(el);
    }

    try {
        const res = await fetch('/news.json');
        const data = await res.json();
        posts.value = data.items.filter((item) => item.type === 'news').slice(0, 3);
    } catch {
        posts.value = [];
    }
});

onBeforeUnmount(() => {
    if (observer) observer.disconnect();
});
</script>

<style scoped>
.hero {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 65vh;
    color: #fff;
    background: #1f2a37 url(/hero-sm.webp) no-repeat center center;
    background-size: cover;
}

.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(20, 28, 38, 0.82) 0%, rgba(20, 28, 38, 0.55) 45%, rgba(20, 28, 38, 0.15) 100%);
}

.hero-panel {
    position: relative;
    z-index: 1;
    padding-top: 3rem;
    padding-bottom: 3rem;
}

.hero-copy {
    --animate-duration: 0.6s;
    max-width: 36rem;
}

.hero-eyebrow {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.8;
    margin-bottom: 1rem;
}

.hero-title {
    font-size: 2.5rem;
    line-height: 1.05;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1.25rem;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
}

.hero-lead {
    font-size: 1.15rem;
    line-height: 1.5;
    opacity: 0.92;
    margin-bottom: 1.75rem;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
}

@media (min-width: 768px) {
    .hero {
        background-image: url(/hero.webp);
    }

    .hero-title {
        font-size: 3.75rem;
    }

    .hero-lead {
        font-size: 1.35rem;
    }
}

@media (max-width: 767.98px) {
    .hero::before {
        background: linear-gradient(180deg, rgba(20, 28, 38, 0.25) 0%, rgba(20, 28, 38, 0.75) 60%, rgba(20, 28, 38, 0.9) 100%);
    }

    .hero-panel {
        align-self: flex-end;
        padding-bottom: 3rem;
    }
}

.emergency-strip {
    background: var(--tblr-red);
    color: #fff;
    padding: 0.75rem 0;
    font-size: 1.05rem;
}

.bg-sand {
    background: #f6f1e9;
}

.section-title {
    font-size: 2rem;
    line-height: 1.15;
    font-weight: 700;
    color: #1f2a37;
    margin-bottom: 1rem;
}

.section-title::after {
    content: '';
    display: block;
    width: 3rem;
    height: 3px;
    margin-top: 0.6rem;
    background: var(--tblr-red);
}

.stat-number {
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 1;
    color: var(--tblr-red);
}

.stat-label {
    margin-top: 0.35rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--tblr-secondary);
}

@media (min-width: 768px) {
    .stat-number {
        font-size: 3rem;
    }
}

.photo-card,
.scene {
    margin: 0;
    overflow: hidden;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(31, 42, 55, 0.08);
}

.photo-card img,
.scene img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
}

.photo-card figcaption {
    padding: 0.6rem 0.85rem;
    font-size: 0.85rem;
    color: var(--tblr-secondary);
}

.scene figcaption {
    padding: 0.85rem 1rem 1rem;
}

.scene-title {
    font-weight: 700;
    color: #1f2a37;
}

.scene-text {
    font-size: 0.9rem;
    color: var(--tblr-secondary);
    margin-top: 0.2rem;
}

.fact-list li {
    position: relative;
    padding-left: 1.4rem;
    margin-bottom: 0.35rem;
    font-weight: 600;
    color: #1f2a37;
}

.fact-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5em;
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background: var(--tblr-red);
}

.post-card {
    border: 1px solid rgba(31, 42, 55, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(31, 42, 55, 0.1);
}

.post-card h3 {
    color: #1f2a37;
}

.post-date {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--tblr-red);
}

.join-band {
    padding: 4rem 0;
    background: #1f2a37 url(/home/carry.webp) no-repeat center center;
    background-size: cover;
}

.join-card {
    max-width: 40rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.94);
    border-radius: 6px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
}

@media (min-width: 768px) {
    .join-band {
        padding: 6rem 0;
    }

    .join-card {
        padding: 2.75rem;
    }
}

.donate-box {
    position: relative;
    padding: 2rem;
    border: 1px solid rgba(214, 57, 57, 0.35);
    border-radius: 6px;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'%3E%3Cg fill='none' stroke='%23d63939' stroke-opacity='0.14' stroke-width='1.2'%3E%3Cpath d='M-20 40c80-30 140 40 230 20s120-70 220-40 120 60 190 30'/%3E%3Cpath d='M-20 80c90-20 150 50 240 30s130-60 220-30 110 70 180 40'/%3E%3Cpath d='M-20 125c100-10 160 60 250 40s120-50 210-20 100 80 180 50'/%3E%3Cpath d='M-20 170c110 0 170 60 260 40s110-40 200-10 90 80 180 60'/%3E%3Cpath d='M-20 215c120 10 180 60 270 40s100-30 190 0 80 80 180 70'/%3E%3Cpath d='M-20 260c130 20 190 60 280 40s90-20 180 10 70 80 180 80'/%3E%3C/g%3E%3C/svg%3E");
}

@media (min-width: 768px) {
    .donate-box {
        padding: 3rem;
    }
}

.py-7 {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

@media (min-width: 768px) {
    .py-md-7 {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .post-card {
        transition: none;
    }
}
</style>
