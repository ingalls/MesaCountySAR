<template>
<div class='page page-center'>
    <Call911 :menu='false'/>

    <Header label='Contact Us'/>

    <Location/>

    <PageFooter/>
</div>
</template>

<script>
import Call911 from './util/Call911.vue';
import Header from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';
import Location from './util/Location.vue';

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
        Location
    }
}
</script>

