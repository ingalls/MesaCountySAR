<template>
<div class="min-vh-25" style="background: #eee url(/MainPageDarken70.jpg) no-repeat 0 0; background-size: cover;">
    <div class='d-flex px-3 py-3'>
        <div class='d-none d-md-inline'>
            <div style="background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 150px; height: 150px;"></div>
        </div>
        <div class='d-inline d-md-none'>
            <div style="background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 50px; height: 50px;"></div>
        </div>

            <h1 v-text='label' class='my-auto mx-2 text-white'/>

        <div class='ms-auto d-none d-lg-inline strong text-white fs-dynamic my-auto'>
            <span v-if='$route.name !== "team"' @click='$router.push("/team")' class='nav-hover mx-3 cursor-pointer'>Team</span>
            <span v-if='$route.name !== "education"' @click='$router.push("/education")' class='nav-hover mx-3 cursor-pointer'>Education</span>
            <span v-if='$route.name !== "gallery"' @click='$router.push("/gallery")' class='nav-hover mx-3 cursor-pointer'>Gallery</span>
            <span v-if='$route.name !== "contact"' @click='$router.push("/contact")' class='nav-hover mx-3 cursor-pointer'>Contact</span>
            <span v-if='$route.name !== "donate"' @click='$router.push("/donate")' class='nav-hover mx-3 bg-red py-3 px-3 rounded cursor-pointer'>Donate</span>
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
