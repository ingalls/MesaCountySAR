<template>
    <div class='page page-center'>
        <Call911 />

        <SARHeader label='Donate' />

        <div class='container-tight py-4'>
            <div class='empty'>
                <div class='empty-header'>
                    Need Rescue?
                </div>
                <p class='empty-title'>
                    Looks like you wandered off the beaten path.
                </p>
                <p class='empty-subtitle text-muted'>
                    We are sorry but the page you are looking for was not found
                </p>
            </div>
        </div>

        <PageFooter />
    </div>
</template>

<script>
import Call911 from './util/Call911.vue';
import SARHeader from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';

export default {
    name: 'Lost',
    components: {
        Call911,
        SARHeader,
        PageFooter,
    },
    data: function() {
        return {
        }
    }
}
</script>
