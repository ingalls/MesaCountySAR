<template>
    <div class='page page-center'>
        <Call911 />

        <SARHeader label='Join Our Team' />

        <div class='container-xl mt-6 mb-6'>
            <div class='row g-2 align-items-center'>
                <div class='col d-flex'>
                    <TablerBreadCrumb />
                </div>
            </div>
        </div>

        <div class='container-xl'>
            <div class='row row-cards mb-6'>
                <div class='card'>
                    <div class='ribbon bg-red'>
                        NOTICE
                    </div>
                    <div class='card-body'>
                        <h3 class='card-title'>
                            Applications for Spring 2026
                        </h3>
                        <p class='text-secondary'>
                            The team is excited to be accepting applications for the Winter/Spring 2026 Prospective Member program
                            Applications for the 2025 program have concluded effective September 8th, 2024.
                        </p>
                        <p class='text-secondary'>
                            Once you apply you can expect a call from a member of our onboarding team to answer any questions you might
                            have and walk you through the application timeline.
                        </p>
                    </div>
                </div>
                <div class='card'>
                    <div class='card-header'>
                        <h3 class='card-title'>
                            Team Application
                        </h3>
                    </div>
                    <div class='card-body'>
                        <TablerLoading
                            v-if='loading'
                            desc='Submitting Application'
                        />
                        <template v-if='submitted'>
                            <div class='d-flex justify-content-center mb-4'>
                                <CheckIcon
                                    class='text-green'
                                    width='70'
                                    height='70'
                                />
                            </div>

                            <div class='d-flex justify-content-center py-3'>
                                <div>We've Recieved your application</div>
                            </div>
                            <div class='d-flex justify-content-center py-3'>
                                <div>Give us a couple days to review it and we'll get back to you!</div>
                            </div>
                        </template>
                        <template v-else>
                            <div class='row g-2'>
                                <div class='col-12'>
                                    <TablerInput
                                        v-model='data.name'
                                        label='Applicant Name'
                                    />
                                </div>

                                <div class='col-12'>
                                    <h3 class='subheader mt-4'>
                                        Legal Address
                                    </h3>
                                </div>

                                <div class='col-12'>
                                    <TablerInput
                                        v-model='data.addr'
                                        label='Street Address'
                                    />
                                </div>
                                <div class='col-12'>
                                    <TablerInput
                                        v-model='data.city'
                                        label='City'
                                    />
                                </div>
                                <div class='col-12 col-md-6'>
                                    <TablerInput
                                        v-model='data.state'
                                        label='State'
                                    />
                                </div>
                                <div class='col-12 col-md-6'>
                                    <TablerInput
                                        v-model='data.zip'
                                        label='Zipcode'
                                    />
                                </div>

                                <div class='col-12'>
                                    <h3 class='subheader mt-4'>
                                        Contact Details
                                    </h3>
                                </div>

                                <div class='col-12 col-md-6'>
                                    <TablerInput
                                        v-model='data.phone'
                                        label='Phone'
                                    />
                                </div>
                                <div class='col-12 col-md-6'>
                                    <TablerInput
                                        v-model='data.email'
                                        label='Email'
                                    />
                                </div>

                                <div class='col-12'>
                                    <h3 class='subheader mt-4'>
                                        Driver's License
                                    </h3>
                                </div>

                                <div class='col-12 col-md-4'>
                                    <TablerInput
                                        v-model='data.license_state'
                                        label='License State'
                                    />
                                </div>
                                <div class='col-12 col-md-4'>
                                    <TablerInput
                                        v-model='data.license_number'
                                        label='License Number'
                                    />
                                </div>
                                <div class='col-12 col-md-4'>
                                    <TablerInput
                                        v-model='data.license_expiry'
                                        type='date'
                                        label='License Expiration'
                                    />
                                </div>

                                <div class='col-12'>
                                    <h3 class='subheader mt-4'>
                                        Personal Details
                                    </h3>
                                </div>

                                <div class='col-12'>
                                    <TablerInput
                                        v-model='data.years'
                                        label='Years in Mesa County'
                                    />
                                </div>

                                <div class='col-12'>
                                    <h3 class='subheader mt-4'>
                                        Courses &amp; Qualifications
                                    </h3>
                                </div>

                                <div class='col-12'>
                                    <TablerInput
                                        v-model='data.courses'
                                        :rows='6'
                                        label='Description'
                                    />
                                </div>

                                <div class='col-12'>
                                    <h3 class='subheader mt-4'>
                                        Outdoor Recreation
                                    </h3>
                                </div>

                                <div class='col-12'>
                                    <TablerInput
                                        v-model='data.outdoor'
                                        :rows='6'
                                        label='Description'
                                    />
                                </div>

                                <div class='col-12'>
                                    <h3 class='subheader mt-4'>
                                        Disclaimer
                                    </h3>
                                </div>

                                <div class='col-12'>
                                    <p>I certify that my answers are true and complete to the best of my knowledge.</p>
                                    <p>I understand that false or misleading information will be grounds for termination from the Team.</p>
                                    <p>I also understand that I will have to pass a Mesa County Sheriff’s Office Background Check.</p>
                                </div>


                                <div class='col-12 d-flex py-3'>
                                    <div class='ms-auto btn-list'>
                                        <button
                                            class='btn btn-primary'
                                            @click='submit'
                                        >
                                            Submit Application
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Call911 from './util/Call911.vue';
import SARHeader from './util/Header.vue';
import {
    CheckIcon
} from 'vue-tabler-icons';
import {
    TablerInput,
    TablerLoading,
    TablerBreadCrumb
} from '@tak-ps/vue-tabler';

export default {
    name: 'Team',
    components: {
        Call911,
        SARHeader,
        CheckIcon,
        TablerInput,
        TablerLoading,
        TablerBreadCrumb,
    },
    data: function() {
        return {
            loading: false,
            submitted: false,
            data: {
                name: '',
                addr: '',
                city: '',
                state: '',
                zip: '',
                phone: '',
                email: '',
                license_state: '',
                license_number: '',
                license_expiry: '',
                years: '',
                courses: '',
                outdoor: '',
            }
        }
    },
    methods: {
        submit: async function() {
            this.loading = true;
            window.std(new URL('https://team.mesacountysar.com/api/application'), {
                method: 'POST',
                body: this.data
            });
            this.submitted = true;
            this.loading = false;
        }
    }
}
</script>

