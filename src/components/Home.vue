<template>
    <div>
        <div class="fixed-top">
            <Call911 />
        </div>

        <!-- Hero Section -->
        <div
            class='min-vh-100 d-flex align-items-center justify-content-center position-relative'
            style='background: #eee url(/MainPageDarken70.jpg) no-repeat center center; background-size: cover;'
        >
            <div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(0,0,0,0.4);"></div>
            
            <div class='container-xl position-relative z-index-1 text-center text-white' style="padding-top: 6rem">
                <div class="mb-4 animate__animated animate__fadeInDown">
                    <div
                        class='mx-auto'
                        style='background: url(/logo.png) no-repeat center center; background-size: contain; width: 180px; height: 180px; filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));'
                    />
                </div>
                
                <h1 class='display-3 fw-bold mb-4 animate__animated animate__fadeInUp'>
                    Dedicated to Saving Lives
                </h1>
                <h2 class='display-5 fw-light mb-5 animate__animated animate__fadeInUp animate__delay-1s'>
                    Serving Mesa County for over 20 years
                </h2>

                <div class="d-flex justify-content-center gap-3 animate__animated animate__fadeInUp animate__delay-2s">
                    <button 
                        class="btn btn-danger btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg hover-lift"
                        @click="external('https://www.paypal.com/donate/?hosted_button_id=9ZE83Z9KZSW5J')"
                    >
                        DONATE
                    </button>
                    <button 
                        class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg hover-lift"
                        @click="$router.push('/news')"
                    >
                        NEWS
                    </button>
                </div>
            </div>

            <div class='position-absolute bottom-0 start-0 w-100 text-center pb-4 text-white animate__animated animate__fadeIn animate__delay-3s'>
                <ChevronDownIcon size='40' class="animate-bounce" />
            </div>
        </div>

        <!-- Mission Section -->
        <div class='py-6 py-md-8 bg-light'>
            <div class='container-xl'>
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
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

        <!-- Stats Section -->
        <div class='py-6 py-md-8 position-relative bg-none'>
            <div class='container-xl'>
                <div class='row g-4'>
                    <div class='col-12 col-md-4' ref="statMissions" data-stat="missions">
                        <div class='card h-100 bg-light-transparent border-0 shadow-lg text-center text-dark p-4 hover-lift'>
                            <div class='mb-4'>
                                <PhoneFilledIcon class='text-danger' size='64' />
                            </div>
                            <h3 class='display-4 fw-bold mb-2'>{{ stats.missions }}+</h3>
                            <p class='h4 fw-light'>Missions Annually</p>
                        </div>
                    </div>
                    <div class='col-12 col-md-4' ref="statYears" data-stat="years">
                        <div class='card h-100 bg-light-transparent border-0 shadow-lg text-center text-dark p-4 hover-lift'>
                            <div class='mb-4'>
                                <ActivityHeartbeatIcon class='text-danger' size='64' />
                            </div>
                            <h3 class='display-4 fw-bold mb-2'>{{ stats.years }}+</h3>
                            <p class='h4 fw-light'>Years of Service</p>
                        </div>
                    </div>
                    <div class='col-12 col-md-4' ref="statHours" data-stat="hours">
                        <div class='card h-100 bg-light-transparent border-0 shadow-lg text-center text-dark p-4 hover-lift'>
                            <div class='mb-4'>
                                <ClockIcon class='text-danger' size='64' />
                            </div>
                            <h3 class='display-4 fw-bold mb-2'>{{ stats.hours }}+</h3>
                            <p class='h4 fw-light'>Volunteer Hours</p>
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
</style>

