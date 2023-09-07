<template>
<div class='page page-center'>
    <Call911/>

    <Header label='Donate'/>

    <PageFooter/>
</div>
</template>

<script>
import Call911 from './util/Call911.vue';
import Header from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';

export default {
    name: 'Team',
    data: function() {
        return {
        }
    },
    components: {
        Call911,
        Header,
        PageFooter,
    }
}
</script>

