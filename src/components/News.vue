<template>
    <div class='page page-center'>
        <PageHeader label='Blog' />

        <div class='py-4'>
            <TablerLoading
                v-if='loading'
                desc='Loading Newsfeed'
            />
            <div v-else-if='err' class='card'>
                <div class='card-body'>
                    <TablerAlert
                        title='Error Loading Newsfeed'
                        :desc='err.message'
                        type='danger'
                    />
                </div>
            </div>
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
                                    v-if='article.type === "news"'
                                    :size='32'
                                    stroke='1'
                                />
                                <IconInfoCircle
                                    v-else
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
                        <div class='card-body'>
                            <TablerMarkdown :markdown='article.expanded ? article.body : article.body.split("\n\n")[0]'/>
                            <div class='d-flex justify-content-center'>
                                <span
                                    v-if='!article.expanded'
                                    class='text-blue cursor-pointer'
                                    @click='article.expanded = true'
                                >
                                    <IconSquareRoundedArrowDown/>
                                    Expand
                                </span>
                                <span
                                    v-else
                                    class='text-gray cursor-pointer'
                                    @click='article.expanded = false'
                                >
                                    <IconSquareRoundedArrowUp/>
                                    Collapse
                                </span>
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
import PageHeader from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';
import {
    IconNews,
    IconInfoCircle,
    IconSquareRoundedArrowUp,
    IconSquareRoundedArrowDown,
} from '@tabler/icons-vue';
import {
    TablerNone,
    TablerLoading,
    TablerMarkdown,
    TablerAlert,
} from '@tak-ps/vue-tabler'

const loading = ref(true);
const err = ref(null);
const news = ref({
    items: []
})

onMounted(async () => {
    try {
        const res = await fetch(window.location.origin + '/news.json');

        const body = await res.json();

        body.items.map((b) => {
            b.expanded = false;
            return b;
        });

        news.value = body;
        loading.value = false;
    } catch (e) {
        err.value = e;
        loading.value = false;
    }
});

function external() {
      window.location = new URL(url);
}
</script>

