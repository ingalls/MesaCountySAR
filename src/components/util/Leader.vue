<template>
    <div class='card'>
        <div class='card-body p-4 text-center'>
            <span
                class='avatar avatar-xl mb-3 rounded'
                :style='`background-image: url(${profile})`'
            />
            <h3
                class='m-0 mb-1'
                v-text='name'
            />
            <div
                class='text-secondary'
                v-text='position'
            />
            <div class='mt-3'>
                <span
                    class='badge bg-purple-lt'
                    v-text='group'
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Leader',
    props: {
        name: {
            type: String,
            required: true
        },
        profile: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        group: {
            type: String,
            required: true
        }
    },
}
</script>

