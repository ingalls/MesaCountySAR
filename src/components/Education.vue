<template>
    <div class='page page-center'>
        <Call911 />

        <Header label='Education' />

        <PageFooter />
    </div>
</template>

<script>
import Call911 from './util/Call911.vue';
import Header from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';

export default {
    name: 'Home',
    components: {
        PageFooter,
    },
    components: {
        Call911,
        Header,
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

