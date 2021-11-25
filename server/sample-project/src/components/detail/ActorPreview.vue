<template>
    <div class="w-1/3 sm:w-1/3 lg:w-1/5 flex my-1 p-1">
        <clazy-load 
            v-bind:src="imageChecker(actor.profile_path)"
            loadedClass="w-1/4 pr-1"
            loadingClass="w-1/4 pr-1"
            >
            <img 
                v-bind:src="imageChecker(actor.profile_path)" 
                v-bind:alt="actor.name"
            >
            <div class="flex justify-center h-full">
                <purple-spinner> </purple-spinner>
            </div>
        </clazy-load>
        <div class="w-3/4 text-sm pl-1">
            <span class="font-bold tet-white">
                {{ actor.name }}
            </span>
            <span 
                class="italic text-gray-400"
                v-if="emptyStringChecker(actor.character)"
            >
                as {{ actor.character }}
            </span>
        </div>
    </div>
</template>

<script>
import {imageChecker, emptyStringChecker} from '@/mixins'
import PurpleSpinner from '../general/PurpleSpinner'

export default {
    name: 'ActionPreview',
    props: ['actor'],
    mixins: [imageChecker, emptyStringChecker],
    components: {
        PurpleSpinner
    }
}
</script>

<style lang="scss" scoped>

</style>