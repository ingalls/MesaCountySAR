<template>
    <div class='page page-center'>
        <PageHeader label='Our Team' />

        <div class='container-xl mt-6 mb-6'>
            <div class='row g-2 align-items-center'>
                <div class='col d-flex'>
                    <TablerBreadCrumb />
                </div>
            </div>
        </div>

        <div class='container-xl'>
            <div class='row row-cards'>
                <div class='col-12'>
                    <div class='card'>
                        <div class='card-body'>
                            <h3 class='card-title'>
                                Join Our Team
                            </h3>
                            <p class='text-secondary'>
                                Each year we take on 20 potential members to go through an intensive
                                training and onboarding process to become an effective member of our team.

                                Members come from a variety of backgrounds and bring unique skills to the team. Everyone has something to offer!
                            </p>

                            <div class='col-12 d-flex'>
                                <div class='ms-auto'>
                                    <button
                                        class='btn btn-danger'
                                        @click='$router.push("/apply")'
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 class='pt-3'>
                    Board
                </h2>

                <div class='col-md-6 col-lg-3'>
                    <Leader
                        name='Jesse Goryl'
                        profile='/img/jesse.jpg'
                        group='Board'
                        position='President'
                    />
                </div>
                <div class='col-md-6 col-lg-3'>
                    <Leader
                        name='Jeff Stephens'
                        profile='/img/jeff.png'
                        group='Board'
                        position='Vice President'
                    />
                </div>
                <div class='col-md-6 col-lg-3'>
                    <Leader
                        name='Lizzy Depew'
                        profile='/img/lizzy.png'
                        group='Board'
                        position='Treasurer'
                    />
                </div>
                <div class='col-md-6 col-lg-3'>
                    <Leader
                        name='Nallely Bean'
                        profile='/img/nallely.jpg'
                        group='Board'
                        position='Secretary'
                    />
                </div>
            </div>

            <div class='row row-cards mt-3'>
                <h2>Standards</h2>

                <div class='col-md-6 col-lg-3'>
                    <Leader
                        name='Nicholas Ingalls'
                        profile='/img/nick.jpg'
                        group='Standards'
                        position='Standards'
                    />
                </div>
                <div class='col-md-6 col-lg-3'>
                    <Leader
                        name='Ryan Grube'
                        profile='/img/ryan.png'
                        group='Standards'
                        position='Standards'
                    />
                </div>
                <div class='col-md-6 col-lg-3'>
                    <Leader
                        name='Tanner Bean'
                        profile='/img/tanner.png'
                        group='Standards'
                        position='Standards'
                    />
                </div>
                <div class='col-md-6 col-lg-3'>
                    <Leader
                        name='Josiah Brown'
                        profile='/img/josiah.png'
                        group='Standards'
                        position='Standards'
                    />
                </div>
                <div class='col-md-6 col-lg-3'>
                    <Leader
                        name='Katy Brown'
                        profile='/img/katy.png'
                        group='Standards'
                        position='Standards'
                    />
                </div>
            </div>

            <div class='row row-cards mt-3'>
                <h2>Our Team</h2>

                <div class='col-12'>
                    <div class='card'>
                        <img
                            class='rounded'
                            src='/img/team-2024.png'
                        >
                    </div>
                </div>
            </div>

            <div class='row row-cards mt-3'>
                <div class='col-12'>
                    <div class='card'>
                        <div class='card-body'>
                            <h3 class='card-title'>
                                Mission
                            </h3>
                            <p class='text-secondary'>
                                Mesa County Search and Rescue is an all-volunteer organization that serves our
                                community by providing search, rescue, and recovery of individuals in need or
                                distress with professionalism and compassion.
                            </p>

                            <h3 class='card-title'>
                                Vision
                            </h3>
                            <p class='text-secondary'>
                                To cultivate a dedicated and well-respected volunteer team, focused on operational
                                excellence and compassionate service to people in Mesa County. We will achieve this
                                through sustainable funding, effective recruitment and retention, and proactive
                                community engagement, continuously growing our capabilities to meet the needs of the
                                community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <PageFooter />
    </div>
</template>

<script>
import Call911 from './util/Call911.vue';
import PageHeader from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';
import Leader from './util/Leader.vue';

import {
    TablerBreadCrumb
} from '@tak-ps/vue-tabler';

export default {
    name: 'Team',
    components: {
        Leader,
        Call911,
        PageHeader,
        PageFooter,
        TablerBreadCrumb
    },
    data: function() {
        return {
        }
    }
}
</script>

