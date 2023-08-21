<template>
<div class='h-100'>
    <Call911 :menu='false'/>

    <Header label='Our Team'/>

    <div class='container-xl mt-6'>
        <div class='row row-cards'>
            <div class="col-md-6 col-lg-3">
                <div class="card">
                    <div class="card-body p-4 text-center">
                        <span class="avatar avatar-xl mb-3 rounded" style="background-image: url(./static/avatars/000m.jpg)"></span>
                        <h3 class="m-0 mb-1"><a href="#">Paweł Kuna</a></h3>
                        <div class="text-secondary">UI Designer</div>
                        <div class="mt-3">
                          <span class="badge bg-purple-lt">Owner</span>
                        </div>
                    </div>
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

