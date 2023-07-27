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
    </div>

    <div class='ms-auto btn-list'>
        <LoginIcon @click='external("https://team.mesacountysar.com")' v-tooltip='"Team Login"' class='cursor-pointer'/>
    </div>
    <PageFooter/>
</div>
</template>

<script>
import PageFooter from './util/PageFooter.vue';
import Call911 from './util/Call911.vue';
import {
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
    }
}
</script>

