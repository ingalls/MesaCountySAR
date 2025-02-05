<template>
    <div class='page page-center'>
        <Call911 />

        <PageHeader label='Blog' />

        <div class='py-4'>
            <TablerLoading
                v-if='loading'
                desc='Loading Newsfeed'
            />
            <TablerNone
                v-else-if='news.items.length === 0'
                label='News Posts'
                :create='false'
            />
            <template v-else>
                <div
                    v-for='article of news.items'
                    :key='`${article.date}-${article.name}`'
                    class='container-lg py-4'
                >
                    <div class='card'>
                        <div class='card-header row'>
                            <div class='col-auto'>
                                <IconNews
                                    :size='32'
                                    stroke='1'
                                />
                            </div>
                            <div class='col-auto'>
                                <div class='col-12'>
                                    <h2 class='card-title' v-text='article.name'></h2>
                                </div>
                                <div class='col-12'>
                                    <span class='subheader' v-text='article.date'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <PageFooter />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Call911 from './util/Call911.vue';
import PageHeader from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';
import {
    IconNews
} from '@tabler/icons-vue';
import {
    TablerNone,
    TablerLoading
} from '@tak-ps/vue-tabler'

const loading = ref(true);
const news = ref({
    items: []
})

onMounted(async () => {
    const res = await fetch(window.location.origin + '/news.json');

    news.value = await res.json();

    loading.value = false;
});

function external() {
      window.location = new URL(url);
}
</script>

