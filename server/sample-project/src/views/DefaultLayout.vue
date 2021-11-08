<template>
    <div>
        <Header />
        <div class="container mx-auto px-3 pb-3">
            <slot />
        </div>
    </div>
</template>

<script>
import Header from '../components/general/Header.vue'
export default {
    name: 'DefaultLayout',
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>

</style>