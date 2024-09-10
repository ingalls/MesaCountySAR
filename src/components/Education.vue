<template>
    <div class='page page-center'>
        <Call911 />

        <SARHeader label='Education' />

        <PageFooter />
    </div>
</template>

<script>
import Call911 from './util/Call911.vue';
import SARHeader from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';

export default {
    name: 'Home',
    components: {
        Call911,
        SARHeader,
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
    }
}
</script>

