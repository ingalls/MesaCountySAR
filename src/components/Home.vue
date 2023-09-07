<template>
<div class='page page-center'>
    <Call911/>

    <div class="min-vh-100" style="background: #eee url(/MainPageDarken70.jpg) no-repeat 0 0; background-size: cover;">
        <div class='d-flex justify-content-center px-3 py-3'>
            <div class='my-3 mx-md-100' style="background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 150px; height: 150px;"></div>

            <div class='ms-auto d-none d-lg-inline strong text-white fs-dynamic' style='margin-top: 75px; margin-right: 100px;'>
                <span @click='$router.push("/team")' class='nav-hover mx-3 cursor-pointer'>Team</span>
                <span @click='$router.push("/education")' class='nav-hover mx-3 cursor-pointer'>Education</span>
                <span @click='$router.push("/gallery")' class='nav-hover mx-3 cursor-pointer'>Gallery</span>
                <span @click='$router.push("/contact")' class='nav-hover mx-3 cursor-pointer'>Contact</span>
                <span @click='$router.push("/donate")' class='nav-hover mx-3 bg-red py-3 px-3 rounded cursor-pointer'>Donate</span>
            </div>
        </div>
        <div class='text-white text-center text-md-left ml-lg-300'>
            <div class='display-md-4 strong my-md-50'>Dedicated to saving lives</div>
            <div class='display-md-4 strong my-md-50'>and serving Mesa County</div>
            <div class='display-md-4 strong my-md-50'>for over 20 years</div>
        </div>
        <div class='text-white'>
            <div class='d-flex justify-content-center my-7'>
                <ChevronDownIcon size='50'/>
           </div>
        </div>
    </div>
    <div class='my-4 my-md-7'>
        <h1 class='text-center display-md-4 strong'>Mesa County Search and Rescue</h1>
        <div class='container-xl py-3'>
            <p class='text-center strong display-md-6'>Our fully unpaid team of 40+ volunteers donates thousands of hours serving Mesa County's community and visitors.</p>
            <p class='text-center strong display-md-6'>We are entirely funded by community donations and grants.</p>
        </div>
    </div>
    <div class="position-relative bg-none py-md-8">
        <div class='container-xl'>
            <div class='row'>
                <div class='col-12 col-md-4 text-center py-3 py-md-8'>
                    <div class='mb-5'>
                        <PhoneFilledIcon class='text-red' size='75'/>
                    </div>

                    <div class='h1'>100+ Missions</div>
                    <span class='h3'>performed annually</span>
                </div>
                <div class='col-12 col-md-4 text-center py-3 py-md-8'>
                    <div class='mb-5'>
                        <ActivityHeartbeatIcon class='text-red' size='75'/>
                    </div>
                    <div class='h1'>20+ Years</div>
                    <span class='h3'>on-call 24/7</span>
                </div>
                <div class='col-12 col-md-4 text-center py-3 py-md-8'>
                    <div class='mb-5'>
                        <ClockIcon class='text-red' size='75'/>
                    </div>
                    <div class='h1'>5000+ Hours</div>
                    <span class='h3'>donated every year</span>
                </div>
                <div class='col-12 py-lg-8'></div>
            </div>
        </div>
    </div>
    <div style='background: rgba(0,0,0,0.7);'>
        <div class='container-xl'>
            <div class='row text-white'>
                <div class='col-12 col-md-4 text-center py-2 py-md-8'>
                    <h3>Get In Touch</h3>

                    <div class='pb-1'>
                        <div><a @click='external("https://goo.gl/maps/2gg7YG9toWsiE3Yz6")' class='text-white cursor-pointer'>215 Rice Street</a></div>
                        <div><a @click='external("https://goo.gl/maps/2gg7YG9toWsiE3Yz6")' class='text-white cursor-pointer'>Grand Junction, CO</a></div>
                        <div><a @click='external("https://goo.gl/maps/2gg7YG9toWsiE3Yz6")' class='text-white cursor-pointer'>81501</a></div>
                    </div>

                    <h3>Non-Emergency Contact</h3>

                    <div class='pb-1'>
                        <div><a href='tel:2023906116' class='text-white cursor-pointer'>202-390-6116</a></div>
                        <div><a href='mailto:rescue@ingalls.ca' class='text-white cursor-pointer'>rescue@ingalls.ca</a></div>
                    </div>
                </div>
                <div class='col-12 col-md-4 text-center py-2 py-md-6'>
                    <div class='d-none d-md-flex justify-content-center'>
                        <div style="background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 150px; height: 150px;" class='my-3'></div>
                    </div>
                    <div class='d-flex justify-content-center'>
                        <div @click='$router.push("/donate")' class='nav-hover my-3 bg-red py-3 w-50 rounded cursor-pointer'>Donate</div>
                    </div>
                </div>
                <div class='col-12 col-md-4 text-center py-2 py-md-8 strong'>
                    <div @click='$router.push("/team")' class='cursor-pointer'>The Team</div>
                    <div @click='$router.push("/education")' class='my-3 cursor-pointer'>Education</div>
                    <div @click='$router.push("/gallery")' class='my-3 cursor-pointer'>Gallery</div>
                    <div @click='$router.push("/contact")' class='my-3 cursor-pointer'>Contact</div>
                    <div @click='external("https://team.mesacountysar.com")' class='my-3 cursor-pointer'>Team Login</div>
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
    ChevronDownIcon,
    ClockIcon,
    LoginIcon,
} from 'vue-tabler-icons';

export default {
    name: 'Home',
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
        ChevronDownIcon,
        ClockIcon,
    }
}
</script>

