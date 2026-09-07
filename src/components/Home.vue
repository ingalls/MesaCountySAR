<template>
    <div>
        <div class='fixed-top'>
            <Call911 />
        </div>

        <!-- Hero Section -->
        <div
            class='min-vh-100 d-flex align-items-center justify-content-center position-relative hero-section'
            style='background: #eee url(/MainPageDarken70.jpg) no-repeat center center; background-size: cover;'
        >
            <div
                class='position-absolute top-0 start-0 w-100 h-100'
                style='background: rgba(0,0,0,0.4);'
            />
            
            <div
                class='container-xl position-relative z-index-1 text-center text-white hero-content'
            >
                <div class='mb-4 animate__animated animate__fadeInDown'>
                    <div
                        class='mx-auto'
                        style='background: url(/logo.png) no-repeat center center; background-size: contain; width: 180px; height: 180px; filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));'
                    />
                </div>
                
                <h1 class='display-3 fw-bold mb-4 d-none d-md-block animate__animated animate__fadeInUp'>
                    Dedicated to Saving Lives
                </h1>
                <h2 class='display-5 fw-light mb-5 d-none d-md-block animate__animated animate__fadeInUp animate__delay-1s'>
                    Serving Mesa County for over 20 years
                </h2>

                <div class='d-flex justify-content-center gap-3 hero-buttons animate__animated animate__fadeInUp animate__delay-2s'>
                    <button 
                        class='btn btn-danger btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg hover-lift'
                        @click='external(&apos;https://www.paypal.com/donate/?hosted_button_id=9ZE83Z9KZSW5J&apos;)'
                    >
                        DONATE
                    </button>
                    <button 
                        class='btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg hover-lift'
                        @click='$router.push(&apos;/news&apos;)'
                    >
                        NEWS
                    </button>
                </div>
            </div>

            <div
                class='ticket-bubble animate__animated animate__fadeInRight animate__delay-2s'
                role='button'
                title='Register for the Run for Rescue 5K'
                @click='scrollToRace'
            >
                <RunIcon
                    size='20'
                    class='me-2'
                />
                <span>Run for Rescue 5K &mdash; September 26</span>
                <ChevronDownIcon
                    size='16'
                    class='ms-1'
                />
            </div>

            <div class='position-absolute bottom-0 start-0 w-100 text-center pb-4 text-white animate__animated animate__fadeIn animate__delay-3s'>
                <ChevronDownIcon
                    size='40'
                    class='animate-bounce'
                />
            </div>

        </div>

        <!-- Mission Section -->
        <div class='py-6 py-md-8 bg-light'>
            <div class='container-xl'>
                <div class='row justify-content-center'>
                    <div class='col-lg-8 text-center'>
                        <h2 class='display-5 fw-bold mb-4 text-dark'>
                            Professional Service, Volunteer Spirit
                        </h2>
                        <p class='lead text-muted mb-4'>
                            Mesa County Search and Rescue is a dedicated team of over 40 unpaid professionals who respond 24/7 to emergencies in our community. From high-angle technical rescues to lost hikers, our members undergo intensive training to bring their unique skills to every mission.
                        </p>
                        <p class='lead text-muted'>
                            As a non-profit organization, we rely entirely on community donations and grants to fund our operations, equipment, and training. We never charge for rescue.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Run for Rescue 5K Section -->
        <div
            id='run-for-rescue'
            class='py-6 py-md-8 text-white race-section'
        >
            <div class='container-xl'>
                <div class='row g-5'>
                    <div class='col-lg-7'>
                        <p class='race-eyebrow text-uppercase fw-bold mb-2'>
                            Annual Fundraiser
                        </p>
                        <h2 class='display-5 fw-bold mb-3'>
                            Run for Rescue 5K
                        </h2>
                        <p class='h4 fw-light race-subhead mb-4'>
                            Saturday, September 26, 2026 at 8:30 AM
                        </p>
                        <p class='race-body mb-5'>
                            Mesa County Search and Rescue is an all-volunteer, nonprofit organization. The Run for Rescue 5K is our annual fundraiser and outreach event, held in partnership with the Fruita Fall Festival. Entry fees go toward the equipment and training that keep our team in the field.
                        </p>

                        <div class='row g-4'>
                            <div class='col-sm-6'>
                                <h3 class='h6 race-label text-uppercase mb-2'>
                                    Start &amp; Finish
                                </h3>
                                <p class='race-body mb-0'>
                                    Fruita Community Center<br>
                                    324 N Coulson St, Fruita, CO 81521
                                </p>
                                <p class='race-note mb-0'>
                                    Please park at Shelledy Elementary School.
                                </p>
                            </div>
                            <div class='col-sm-6'>
                                <h3 class='h6 race-label text-uppercase mb-2'>
                                    Bib &amp; Shirt Pickup
                                </h3>
                                <p class='race-body mb-0'>
                                    Friday, Sept 25, 5:00&ndash;8:00 PM
                                </p>
                                <p class='race-note mb-2'>
                                    at the Fruita Fall Festival
                                </p>
                                <p class='race-body mb-0'>
                                    Saturday, Sept 26, 7:00&ndash;8:00 AM
                                </p>
                                <p class='race-note mb-0'>
                                    at the Fruita Community Center
                                </p>
                            </div>
                            <div class='col-12'>
                                <h3 class='h6 race-label text-uppercase mb-2'>
                                    Age Categories
                                </h3>
                                <p class='race-body mb-0'>
                                    13 &amp; under &middot; 14&ndash;19 &middot; 20&ndash;34 &middot; 35&ndash;49 &middot; 50&ndash;64 &middot; 65+
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class='col-lg-5'>
                        <div class='race-entry p-4 p-md-5'>
                            <h3 class='h4 fw-bold mb-4'>
                                Entry Fees
                            </h3>
                            <table class='race-table w-100 mb-4'>
                                <thead>
                                    <tr>
                                        <th scope='col'>
                                            Age
                                        </th>
                                        <th
                                            scope='col'
                                            class='text-end'
                                        >
                                            By Sept 6
                                        </th>
                                        <th
                                            scope='col'
                                            class='text-end'
                                        >
                                            After Sept 6
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th
                                            scope='row'
                                            class='fw-normal'
                                        >
                                            13 &amp; under
                                        </th>
                                        <td class='text-end'>
                                            $20
                                        </td>
                                        <td class='text-end'>
                                            $30
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            scope='row'
                                            class='fw-normal'
                                        >
                                            14 &amp; over
                                        </th>
                                        <td class='text-end'>
                                            $25
                                        </td>
                                        <td class='text-end'>
                                            $35
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p class='race-note mb-4'>
                                T-shirts are not guaranteed for registrations after September 6.
                            </p>
                            <button
                                class='btn btn-warning btn-lg w-100 py-3 rounded-pill fw-bold shadow-lg hover-lift'
                                @click='external(&apos;https://runsignup.com/Race/CO/Fruita/MesaCountySearchRescue5K&apos;)'
                            >
                                REGISTER
                            </button>
                            <p class='race-note text-center mt-3 mb-0'>
                                Questions?
                                <a
                                    class='race-link'
                                    href='mailto:mcsargtvp@gmail.com'
                                >mcsargtvp@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats Section -->
        <div class='py-6 py-md-8 position-relative bg-none'>
            <div class='container-xl'>
                <div class='row g-4'>
                    <div
                        ref='statMissions'
                        class='col-12 col-md-4'
                        data-stat='missions'
                    >
                        <div class='card h-100 bg-light-transparent border-0 shadow-lg text-center text-dark p-4 hover-lift'>
                            <div class='mb-4'>
                                <PhoneFilledIcon
                                    class='text-danger'
                                    size='64'
                                />
                            </div>
                            <h3 class='display-4 fw-bold mb-2'>
                                {{ stats.missions }}+
                            </h3>
                            <p class='h4 fw-light'>
                                Missions Annually
                            </p>
                        </div>
                    </div>
                    <div
                        ref='statYears'
                        class='col-12 col-md-4'
                        data-stat='years'
                    >
                        <div class='card h-100 bg-light-transparent border-0 shadow-lg text-center text-dark p-4 hover-lift'>
                            <div class='mb-4'>
                                <ActivityHeartbeatIcon
                                    class='text-danger'
                                    size='64'
                                />
                            </div>
                            <h3 class='display-4 fw-bold mb-2'>
                                {{ stats.years }}+
                            </h3>
                            <p class='h4 fw-light'>
                                Years of Service
                            </p>
                        </div>
                    </div>
                    <div
                        ref='statHours'
                        class='col-12 col-md-4'
                        data-stat='hours'
                    >
                        <div class='card h-100 bg-light-transparent border-0 shadow-lg text-center text-dark p-4 hover-lift'>
                            <div class='mb-4'>
                                <ClockIcon
                                    class='text-danger'
                                    size='64'
                                />
                            </div>
                            <h3 class='display-4 fw-bold mb-2'>
                                {{ stats.hours }}+
                            </h3>
                            <p class='h4 fw-light'>
                                Volunteer Hours
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <SiteFooter />
    </div>
</template>

<script>
import SiteFooter from './util/SiteFooter.vue';
import Call911 from './util/Call911.vue';
import {
    PhoneFilledIcon,
    ActivityHeartbeatIcon,
    ChevronDownIcon,
    ClockIcon,
    RunIcon,
} from 'vue-tabler-icons';

export default {
    name: 'Home',
    components: {
        SiteFooter,
        Call911,
        PhoneFilledIcon,
        ActivityHeartbeatIcon,
        ChevronDownIcon,
        ClockIcon,
        RunIcon,
    },
    data() {
        return {
            stats: {
                missions: 0,
                years: 0,
                hours: 0
            },
            animated: {
                missions: false,
                years: false,
                hours: false
            },
            observer: null
        }
    },
    mounted() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const key = entry.target.dataset.stat;
                    if (key && !this.animated[key]) {
                        this.animateStat(key);
                        this.animated[key] = true;
                        this.observer.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.5 });

        if (this.$refs.statMissions) this.observer.observe(this.$refs.statMissions);
        if (this.$refs.statYears) this.observer.observe(this.$refs.statYears);
        if (this.$refs.statHours) this.observer.observe(this.$refs.statHours);
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        external: function(url) {
            window.location = new URL(url);
        },
        scrollToRace() {
            const el = document.getElementById('run-for-rescue');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        },
        animateStat(key) {
            const duration = 2000; // 2 seconds
            const start = performance.now();
            
            const targets = {
                missions: 100,
                years: 20,
                hours: 5000
            };
            
            const target = targets[key];

            const animate = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function (easeOutQuart)
                const ease = 1 - Math.pow(1 - progress, 4);

                this.stats[key] = Math.floor(target * ease);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            requestAnimationFrame(animate);
        }
    }
}
</script>

<style scoped>
.bg-light-transparent {
    background: rgba(255, 255, 255, 0.9) !important;
    backdrop-filter: blur(10px);
}

.hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-3px);
    box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,.15) !important;
}

.animate-bounce {
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-10px);}
    60% {transform: translateY(-5px);}
}

.z-index-1 {
    z-index: 1;
}

.hero-content {
    padding-top: 6rem;
}

@media (max-width: 576px) {
    .hero-section {
        align-items: stretch !important;
    }

    .hero-content {
        padding-top: calc(60px + 32px);
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    .hero-buttons {
        margin-top: auto;
        padding-bottom: 140px;
    }
}

.race-section {
    background: #2b1a0f;
}

.race-eyebrow {
    color: #d9a441;
    letter-spacing: 0.12em;
    font-size: 0.85rem;
}

.race-subhead {
    color: rgba(255, 255, 255, 0.85);
}

.race-body {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
}

.race-label {
    color: #d9a441;
    letter-spacing: 0.08em;
}

.race-note {
    color: rgba(255, 255, 255, 0.55);
    font-size: 0.9rem;
}

.race-entry {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.5rem;
}

.race-table {
    color: rgba(255, 255, 255, 0.85);
    border-collapse: collapse;
}

.race-table th,
.race-table td {
    padding: 0.6rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.race-table thead th {
    color: rgba(255, 255, 255, 0.55);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.race-link {
    color: #d9a441;
}

.ticket-bubble {
    position: absolute;
    bottom: 80px;
    right: 20px;
    background: rgba(255, 193, 7, 0.95);
    color: #1a1a2e;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 2;
}

.ticket-bubble:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

@media (max-width: 576px) {
    .ticket-bubble {
        right: 0;
        left: 0;
        bottom: 90px;
        margin: 0 auto;
        width: fit-content;
        font-size: 0.85rem;
        padding: 8px 14px;
        white-space: nowrap;
    }
}
</style>

