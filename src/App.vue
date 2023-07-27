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

<style lang='scss'>
$xs: 0;
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;
$xxl: 1400px;

@mixin xs {
   @media (min-width: #{$xs}) {
       @content;
   }
}

@mixin sm {
   @media (min-width: #{$sm}) {
       @content;
   }
}

// Medium devices
@mixin md {
   @media (min-width: #{$md}) {
       @content;
   }
}

// Large devices
@mixin lg {
   @media (min-width: #{$lg}) {
       @content;
   }
}

// Extra large devices
@mixin xl {
   @media (min-width: #{$xl}) {
       @content;
   }
}

// Extra Extra large devices
@mixin xl {
   @media (min-width: #{$xxl}) {
       @content;
   }
}

.mx-md-100 {
    @include xs {
        margin-left: 0px;
        margin-right: 0px;
    }

    @include md {
        margin-left: 100px;
        margin-right: 100px;
    }
}
</style>
