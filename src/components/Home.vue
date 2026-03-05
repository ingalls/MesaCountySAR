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

            <div class='position-absolute bottom-0 start-0 w-100 text-center pb-4 text-white animate__animated animate__fadeIn animate__delay-3s'>
                <ChevronDownIcon
                    size='40'
                    class='animate-bounce'
                />
            </div>

            <div
                class='ticket-bubble animate__animated animate__fadeInRight animate__delay-2s'
                role='button'
                title='Get Film Festival Tickets'
                @click='scrollToFestival'
            >
                <KayakIcon
                    size='20'
                    class='me-2'
                />
                <span>Paddling Film Festival &mdash; Get Tickets!</span>
                <ChevronDownIcon
                    size='16'
                    class='ms-1'
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

        <!-- Film Festival Section -->
        <div
            id='film-festival'
            class='py-6 py-md-8 text-white position-relative'
            style='background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);'
        >
            <div class='container-xl'>
                <div class='row align-items-center justify-content-center'>
                    <div class='col-lg-8 text-center'>
                        <div class='mb-4'>
                            <MovieIcon
                                class='text-warning'
                                size='64'
                            />
                        </div>
                        <h2 class='display-5 fw-bold mb-3'>
                            Grand Junction Paddling Film Festival
                        </h2>
                        <p
                            class='lead mb-4'
                            style='opacity: 0.9;'
                        >
                            Join us for an evening of inspiring paddling films! All proceeds support Mesa County Search and Rescue operations, equipment, and training.
                        </p>
                        <button
                            class='btn btn-warning btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg hover-lift'
                            @click='external(&apos;https://events.ticketleap.com/tickets/mesacountysarcom/grand-junction-paddling-film-festival&apos;)'
                        >
                            <TicketIcon
                                size='20'
                                class='me-2'
                            />
                            GET TICKETS
                        </button>
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
    KayakIcon,
    MovieIcon,
    TicketIcon,
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
        KayakIcon,
        MovieIcon,
        TicketIcon,
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
        scrollToFestival() {
            const el = document.getElementById('film-festival');
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

