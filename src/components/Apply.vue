<template>
<div class='page page-center'>
    <Call911/>

    <Header label='Join Our Team'/>

    <div class='container-xl mt-6 mb-6'>
        <div class="row g-2 align-items-center">
            <div class="col d-flex">
                <TablerBreadCrumb/>
            </div>
        </div>
    </div>

    <div class='container-xl'>
        <div class='row row-cards mb-6'>
            <div class="card">
                <div class='ribbon bg-red'>NOTICE</div>
                <div class="card-body">
                    <h3 class="card-title">Applications Paused for 2024</h3>
                    <p class='text-secondary'>
                        The team is currently focusing on our Mountain Rescue Association Accreditation which takes place once every 5 years.
                    </p>
                    <p class='text-secondary'>
                        As such we will not be running a Prospective Member program in the
                        2024 year. We welcome you to submit an application for it to be considered in
                        the 2025 program or should an immediate need for members present itself.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class='card-header'><h3 class='card-title'>Team Application</h3></div>
                <div class="card-body">
                    <TablerLoading v-if='loading' desc='Submitting Application'/>
                    <template v-if='submitted'>
                        <div class='d-flex justify-content-center mb-4'>
                            <CheckIcon class='text-green' width='70' height='70' />
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
                                <TablerInput label='Applicant Name' v-model='data.name'/>
                            </div>

                            <div class='col-12'>
                                <h3 class='subheader mt-4'>Legal Address</h3>
                            </div>

                            <div class='col-12'>
                                <TablerInput label='Street Address' v-model='data.addr'/>
                            </div>
                            <div class='col-12'>
                                <TablerInput label='City' v-model='data.city'/>
                            </div>
                            <div class='col-12 col-md-6'>
                                <TablerInput label='State' v-model='data.state'/>
                            </div>
                            <div class='col-12 col-md-6'>
                                <TablerInput label='Zipcode' v-model='data.zip'/>
                            </div>

                            <div class='col-12'>
                                <h3 class='subheader mt-4'>Contact Details</h3>
                            </div>

                            <div class='col-12 col-md-6'>
                                <TablerInput label='Phone' v-model='data.phone'/>
                            </div>
                            <div class='col-12 col-md-6'>
                                <TablerInput label='Email' v-model='data.email'/>
                            </div>

                            <div class='col-12'>
                                <h3 class='subheader mt-4'>Driver's License</h3>
                            </div>

                            <div class='col-12 col-md-4'>
                                <TablerInput label='License State' v-model='data.license_state'/>
                            </div>
                            <div class='col-12 col-md-4'>
                                <TablerInput label='License Number' v-model='data.license_number'/>
                            </div>
                            <div class='col-12 col-md-4'>
                                <TablerInput type='date' label='License Expiration' v-model='data.license_expiry'/>
                            </div>

                            <div class='col-12'>
                                <h3 class='subheader mt-4'>Personal Details</h3>
                            </div>

                            <div class='col-12'>
                                <TablerInput label='Years in Mesa County' v-model='data.years'/>
                            </div>

                            <div class='col-12'>
                                <h3 class='subheader mt-4'>Courses &amp; Qualifications</h3>
                            </div>

                            <div class='col-12'>
                                <TablerInput :rows='6' label='Description' v-model='data.courses'/>
                            </div>

                            <div class='col-12'>
                                <h3 class='subheader mt-4'>Outdoor Recreation</h3>
                            </div>

                            <div class='col-12'>
                                <TablerInput :rows='6' label='Description' v-model='data.outdoor'/>
                            </div>

                            <div class='col-12'>
                                <h3 class='subheader mt-4'>Disclaimer</h3>
                            </div>

                            <div class='col-12'>
                                <p>I certify that my answers are true and complete to the best of my knowledge.</p>
                                <p>I understand that false or misleading information will be grounds for termination from the Team.</p>
                                <p>I also understand that I will have to pass a Mesa County Sheriff’s Office Background Check.</p>
                            </div>


                            <div class='col-12 d-flex py-3'>
                                <div class='ms-auto btn-list'>
                                    <button @click='submit' class='btn btn-primary'>Submit Application</button>
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
import Header from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';
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
    },
    components: {
        Call911,
        Header,
        CheckIcon,
        PageFooter,
        TablerInput,
        TablerLoading,
        TablerBreadCrumb,
    }
}
</script>

