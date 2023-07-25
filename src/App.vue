<template>
<div class='page h-100'>

    <router-view/>

    <TablerError v-if='err' :err='err' @close='err = null'/>
</div>
</template>

<script>
import '@tabler/core/dist/js/tabler.min.js';
import '@tabler/core/dist/css/tabler.min.css';
import {
    TablerError
} from '@tak-ps/vue-tabler';

export default {
    name: 'MesaSAR',
    data: function() {
        return {
            err: null,
        }
    },
    errorCaptured: function(err) {
        this.err = err;
    },
    components: {
        TablerError
    }
}
</script>
