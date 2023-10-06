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
                <div class='card-header'><h3 class='card-title'>Team Application</h3></div>
                <div class="card-body">
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

                        <div class='col-12 col-md-6'>
                            <TablerInput type='date' label='Relationship Status' v-model='data.relationship'/>
                        </div>

                        <div class='col-12 col-md-6'>
                            <TablerInput type='date' label='Years in Mesa County' v-model='data.years'/>
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
                                <button class='btn btn-primary'>Submit Application</button>
                            </div>
                        </div>
                    </div>
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
    TablerInput,
    TablerBreadCrumb
} from '@tak-ps/vue-tabler';

export default {
    name: 'Team',
    data: function() {
        return {
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
                relationship: '',
                years: '',
                courses: '',
                outdoor: '',
            }
        }
    },
    components: {
        Call911,
        Header,
        PageFooter,
        TablerInput,
        TablerBreadCrumb,
    }
}
</script>

