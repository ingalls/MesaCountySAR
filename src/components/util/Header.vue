<template>
<div class='bg-white py-2 py-md-4 px-3' style="background: #eee url(/MainPageDarken70.jpg) no-repeat 0 0; background-size: cover;">
    <div class='mx-md-100 d-flex'>
        <div class='d-none d-md-inline'>
            <div style="background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 150px; height: 150px;"></div>
        </div>
        <div class='d-inline d-md-none'>
            <div style="background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 50px; height: 50px;"></div>
        </div>
        <div class='mx-3 mt-2 d-flex'>
            <h1 class='align-self-center' v-text='label'/>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>
