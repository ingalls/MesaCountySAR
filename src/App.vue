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
@mixin xxl {
   @media (min-width: #{$xxl}) {
       @content;
   }
}

.bg-none {
    @include xs { background: #eee; }
    @include md { background: #eee url(/MainPageSecond.jpg) no-repeat 0 0; background-size: cover; }
}

.text-md-left {
    @include md { text-align: left !important }
}

.mx-md-100 {
    @include xs { margin-left: 0px; margin-right: 0px; }
    @include md { margin-left: 100px; margin-right: 100px; }
}
.ml-lg-300 {
    @include xs { margin-left: 0px; margin-right: 0px; }
    @include md { margin-left: 150px; margin-right: 150px; }
    @include lg { margin-left: 300px; margin-right: 300px; }
}
.my-md-50 {
    @include xs { margin-top: 5px; margin-top: 5px; }
    @include md { margin-top: 50px; margin-top: 50px; }
}

.text-lg-50 {
    @include xs { margin-top: 0px; margin-top: 0px; }
    @include md { margin-top: 50px; margin-top: 50px; }
}

.display-md-4 {
    @include xs { font-size: 18px; font-weight: 600; line-height: 20px; }
    @include md { font-size: 40px; font-weight: 600; line-height: 56px; }
    @include lg { font-size: 56px; font-weight: 600; line-height: 67.2px; }
}

.display-md-6 {
    @include xs { font-size: 12px; font-weight: 400; line-height: 16px; }
    @include md { font-size: 40px; font-weight: 400; line-height: 56px; }
    @include lg { font-size: 46px; font-weight: 400; line-height: 56px; }
}

.fs-dynamic {
    @include xs { font-size: 8px !important; }
    @include md { font-size: 10px !important; }
    @include lg { font-size: 12px !important; }
    @include xl { font-size: 22px !important; }
    @include xxl { font-size: 26px !important; }
}
</style>
