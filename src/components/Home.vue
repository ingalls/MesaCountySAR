<template>
<div class='h-100'>
    <div style='margin-left: 100px; margin-right: 100px;'>
        <div class='d-flex my-3 text-red'>
            <BrandFacebookFilledIcon @click='external("https://www.facebook.com/profile.php?id=100064661560769")' class='cursor-pointer mx-3'/>
            <BrandInstagramIcon @click='external("https://www.instagram.com/mesacountysar/")' class='cursor-pointer'/>

            <div class='ms-auto mx-3 strong'>
                <PhoneCallIcon/>
                For Rescue Assistance - Call 911
            </div>
        </div>
    </div>
    <div style="background: #eee url(/MainPage.jpg) no-repeat 0 0; background-size: cover;" class="h-100">
        <div class='d-flex px-3 py-3'>
            <div style="background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 150px; height: 150px; margin-left: 100px;" class='my-3'></div>

            <div class='ms-auto text-white strong' style='margin-top: 75px; font-size: 1.5rem; margin-right: 100px;'>
                <span class='nav-hover mx-3 cursor-pointer'>The Team</span>
                <span class='nav-hover mx-3 cursor-pointer'>Education</span>
                <span class='nav-hover mx-3 cursor-pointer'>Gallery</span>
                <span class='nav-hover mx-3 cursor-pointer'>Contact</span>
                <span class='nav-hover mx-3 bg-red py-3 px-3 rounded cursor-pointer'>Donate</span>
            </div>
        </div>
    </div>

    <div class='ms-auto btn-list'>
        <LoginIcon @click='external("https://team.mesacountysar.com")' v-tooltip='"Team Login"' class='cursor-pointer'/>
    </div>
    <PageFooter/>
</div>
</template>

<script>
import PageFooter from './PageFooter.vue';
import {
    LoginIcon,
    PhoneCallIcon,
    BrandFacebookFilledIcon,
    BrandInstagramIcon,
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
        PageFooter,
        PhoneCallIcon,
        LoginIcon,
        BrandFacebookFilledIcon,
        BrandInstagramIcon,
    }
}
</script>

