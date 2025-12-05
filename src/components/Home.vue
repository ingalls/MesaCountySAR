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
                            Mesa County Search and Rescue
                        </h2>
                        <p class='lead text-muted mb-4'>
                            Our fully unpaid team of 40+ volunteers donates thousands of hours serving Mesa County's community and visitors.
                        </p>
                        <p class='lead text-muted'>
                            We are entirely funded by community donations and grants.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats Section -->
        <div class='py-6 py-md-8 position-relative bg-none'>
            <div class='container-xl'>
                <div class='row g-4'>
                    <div class='col-12 col-md-4'>
                        <div class='card h-100 bg-dark-transparent border-0 shadow-lg text-center text-white p-4 hover-lift'>
                            <div class='mb-4'>
                                <PhoneFilledIcon class='text-danger' size='64' />
                            </div>
                            <h3 class='display-4 fw-bold mb-2'>100+</h3>
                            <p class='h4 fw-light'>Missions Annually</p>
                        </div>
                    </div>
                    <div class='col-12 col-md-4'>
                        <div class='card h-100 bg-dark-transparent border-0 shadow-lg text-center text-white p-4 hover-lift'>
                            <div class='mb-4'>
                                <ActivityHeartbeatIcon class='text-danger' size='64' />
                            </div>
                            <h3 class='display-4 fw-bold mb-2'>20+</h3>
                            <p class='h4 fw-light'>Years of Service</p>
                        </div>
                    </div>
                    <div class='col-12 col-md-4'>
                        <div class='card h-100 bg-dark-transparent border-0 shadow-lg text-center text-white p-4 hover-lift'>
                            <div class='mb-4'>
                                <ClockIcon class='text-danger' size='64' />
                            </div>
                            <h3 class='display-4 fw-bold mb-2'>5000+</h3>
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
    methods: {
        external: function(url) {
            window.location = new URL(url);
        },
    }
}
</script>

<style scoped>
.bg-dark-transparent {
    background: rgba(0, 0, 0, 0.7) !important;
    backdrop-filter: blur(10px);
}

.hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
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

