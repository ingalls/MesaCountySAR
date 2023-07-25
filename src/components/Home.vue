<template>
<div class='h-100'>
    <div style="background: #eee url(/MainPage.jpg) no-repeat 0 0; background-size: cover;" class="h-100">
        <div class='d-flex px-3 py-3'>
            <div style="background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 50px; height: 50px;"></div>
            <div class=''>Mesa County Search &amp; Rescue</div>
            <div class='ms-auto btn-list'>
                <LoginIcon @click='external("https://team.mesacountysar.com")' v-tooltip='"Team Login"' class='cursor-pointer'/>
            </div>
        </div>
    </div>

    <PageFooter/>
</div>
</template>

<script>
import PageFooter from './PageFooter.vue';
import {
    LoginIcon
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
        LoginIcon
    }
}
</script>
