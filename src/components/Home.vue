<template>
<div class='h-100'>
    <Call911/>

    <div style="background: #eee url(/MainPageDarken50.jpg) no-repeat 0 0; background-size: cover;" class="h-100">
        <div class='d-flex px-3 py-3'>
            <div style="background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 150px; height: 150px; margin-left: 100px;" class='my-3'></div>

            <div class='ms-auto strong text-white' style='margin-top: 75px; font-size: 1.5rem; margin-right: 100px;'>
                <span @click='$router.push("/team")' class='nav-hover mx-3 cursor-pointer'>The Team</span>
                <span @click='$router.push("/education")' class='nav-hover mx-3 cursor-pointer'>Education</span>
                <span @click='$router.push("/gallery")' class='nav-hover mx-3 cursor-pointer'>Gallery</span>
                <span @click='$router.push("/contact")' class='nav-hover mx-3 cursor-pointer'>Contact</span>
                <span @click='$router.push("/donate")' class='nav-hover mx-3 bg-red py-3 px-3 rounded cursor-pointer'>Donate</span>
            </div>
        </div>
        <div class='text-white' style='margin-left: 300px;'>
            <div class='display-4 strong' style='margin-top: 50px; margin-bottom: 50px;'>Dedicated to saving lives</div>
            <div class='display-4 strong' style='margin-top: 50px; margin-bottom: 50px;'>and serving Mesa County</div>
            <div class='display-4 strong' style='margin-top: 50px; margin-bottom: 50px;'>for over 20 years</div>
        </div>
    </div>
    <div class='my-7'>
        <h1 class='text-center display-4 strong'>Mesa County Search and Rescue</h1>
        <div class='container-xl py-3'>
            <p class='text-center strong display-6'>Our fully unpaid team of XX volunteers donates thousands of hours serving Mesa County's community and visitors. We're entirely funded by your donations and grants from our community.</p>
        </div>
    </div>
    <div style="background: #eee url(/MainPageSecond.jpg) no-repeat 0 0; background-size: cover;" class="h-100 position-relative">
        <div class='container-xl'>
            <div class='row'>
                <div class='col-12 col-md-4 text-center py-8'>
                    <div class='mb-5'>
                        <PhoneFilledIcon class='text-red' size='75'/>
                    </div>

                    <div class='h1'>100+ Missions</div>
                    <span class='h3'>performed annually</span>
                </div>
                <div class='col-12 col-md-4 text-center py-8'>
                    <div class='mb-5'>
                        <ActivityHeartbeatIcon class='text-red' size='75'/>
                    </div>
                    <div class='h1'>20+ Years</div>
                    <span class='h3'>on-call 24/7</span>
                </div>
                <div class='col-12 col-md-4 text-center py-8'>
                    <div class='mb-5'>
                        <ClockIcon class='text-red' size='75'/>
                    </div>
                    <div class='h1'>5000+ Hours</div>
                    <span class='h3'>donated every year</span>
                </div>
            </div>
        </div>
        <div class='position-absolute' style='bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.7);'>
            <div class='container-xl'>
                <div class='row'>
                    <div class='col-12 col-md-4 text-center py-8'>
                    </div>
                    <div class='col-12 col-md-4 text-center py-8'>
                        <div class='d-flex justify-content-center'>
                        <div style="background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 150px; height: 150px;" class='my-3'></div>
                        </div>
                    </div>
                    <div class='col-12 col-md-4 text-center py-8'>
                    </div>
                </div>
           </div>
        </div>
    </div>
</div>
</template>

<script>
import PageFooter from './util/PageFooter.vue';
import Call911 from './util/Call911.vue';
import {
    PhoneFilledIcon,
    ActivityHeartbeatIcon,
    ClockIcon,
    LoginIcon,
} from 'vue-tabler-icons';

export default {
    name: 'Home',
    components: {
        PageFooter,
    },
    data: function() {
        return {
        }
    },
    methods: {
        external: function(url) {
              window.location = new URL(url);
        },
    },
    components: {
        Call911,
        PageFooter,
        LoginIcon,
        PhoneFilledIcon,
        ActivityHeartbeatIcon,
        ClockIcon,
    }
}
</script>

