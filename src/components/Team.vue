<template>
<div class='page page-center'>
    <Call911/>

    <Header label='Our Team'/>
    <div class='container-xl mt-6 mb-6'>
        <div class="row g-2 align-items-center">
            <div class="col d-flex">
                <TablerBreadCrumb/>
            </div>
        </div>
    </div>

    <div class='container-xl'>
        <div class='row row-cards'>
            <h2>Board</h2>

            <div class="col-md-6 col-lg-3">
                <Leader
                    name='Nate Rinderle'
                    profile='/img/nate.jpg'
                    group='Board'
                    position='President'
                />
            </div>
            <div class="col-md-6 col-lg-3">
                <Leader
                    name='Garrett Rodstrom'
                    profile='/img/garrett.jpg'
                    group='Board'
                    position='Vice President'
                />
            </div>
            <div class="col-md-6 col-lg-3">
                <Leader
                    name='Donna Powelson'
                    profile='/img/donna.jpg'
                    group='Board'
                    position='Treasurer'
                />
            </div>
            <div class="col-md-6 col-lg-3">
                <Leader
                    name='Nathan Smithgall'
                    profile='/img/smithgall.jpg'
                    group='Board'
                    position='Secretary'
                />
            </div>
        </div>

        <div class='row row-cards mt-3'>
            <h2>Standards</h2>

            <div class="col-md-6 col-lg-3">
                <Leader
                    name='Joe Kanopsic'
                    profile='/img/joe.jpg'
                    group='Standards'
                    position='Standards'
                />
            </div>
            <div class="col-md-6 col-lg-3">
                <Leader
                    name='Nicholas Ingalls'
                    profile='/img/nick.jpg'
                    group='Standards'
                    position='Standards'
                />
            </div>
            <div class="col-md-6 col-lg-3">
                <Leader
                    name='Jeanine Camp'
                    profile='/img/jeanine.jpg'
                    group='Standards'
                    position='Standards'
                />
            </div>
            <div class="col-md-6 col-lg-3">
                <Leader
                    name='Jeffrey Stephens'
                    profile='/img/jeff.jpg'
                    group='Standards'
                    position='Standards'
                />
            </div>
            <div class="col-md-6 col-lg-3">
                <Leader
                    name='Cory Lidberg'
                    profile='/img/cory.jpg'
                    group='Standards'
                    position='Standards'
                />
            </div>
        </div>

        <div class='row row-cards mt-3'>
            <h2>Our Team</h2>

            <div class="col-12">
                <div class="card">
                    <img class="rounded" src='/img/team.jpg'/>
                </div>
            </div>
        </div>
    </div>

    <PageFooter/>
</div>
</template>

<script>
import Call911 from './util/Call911.vue';
import Header from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';
import Leader from './util/Leader.vue';

import {
    TablerBreadCrumb
} from '@tak-ps/vue-tabler';

export default {
    name: 'Team',
    data: function() {
        return {
        }
    },
    components: {
        Leader,
        Call911,
        Header,
        PageFooter,
        TablerBreadCrumb
    }
}
</script>

