<template>
    <div class='page page-center d-flex flex-column min-vh-100'>
        <PageHeader label='Contact Us' />

        <div class='container-xl py-4'>
            <div class='empty'>
                <p class='empty-title'>
                    Mailing Address
                </p>
                <p class='empty-subtitle text-muted'>
                    Mesa County Search &amp; Rescue
                </p>
                <p class='empty-subtitle text-muted'>
                    PO Box 2251
                </p>
                <p class='empty-subtitle text-muted'>
                    Grand Junction CO
                </p>
                <p class='empty-subtitle text-muted'>
                    81502, USA
                </p>
            </div>
        </div>


        <div class='flex-grow-1 w-100 position-relative'>
            <Location class="position-absolute top-0 start-0 w-100 h-100" />
        </div>
    </div>
</template>

<script>
import Call911 from './util/Call911.vue';
import PageHeader from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';
import Location from './util/Location.vue';

export default {
    name: 'Team',
    components: {
        Call911,
        PageHeader,
        PageFooter,
        Location
    },
    data: function() {
        return {
        }
    }
}
</script>

