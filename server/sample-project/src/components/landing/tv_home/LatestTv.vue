<template>
    <router-link
        class="
            latest-tv
            sm:flex-wrap
            max-w-md max-h-screen
            min-w-full
            opacity-75
            hover:opacity-100
            flex
        "
        v-bind:to="{ name: 'Tv', parms: { id: tv.id } }"
    >
        <clazy-load
            v-bind:src="imageChecker(tv.poster_path)"
            loadedClass="bg-black flex w-full sm:w-1/3 rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden"
            loadingClass="flex w-full sm:w-1/3 rouded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden"
        >
            <img
                class="self-center m-auto"
                v-bind:src="imageChecker(tv.poster_path)"
                v-bindalt="tv.original_title"
            />
        </clazy-load>
        <div
            class="
                w-full
                sm:w-2/3
                bg-black
                rounded-b
                sm:rounded-b-none sm:rounded-r
                p-4
                flex flex-col
                justify-bitween
                loading-normal
            "
        >
            <div class="pb-2">
                <p
                    class="
                        text-sm text-gray-600
                        flex
                        content-center
                        items-center
                        text-yellow-400
                        hover:text-yellow-600
                        font-bold
                    "
                >
                    <font-awesome-icon icon="star"></font-awesome-icon>
                    <span class="ml-1 text-white">
                        {{ tv.vote_average }} ({{ tv.vote_count }})
                    </span>
                </p>
                <div class="text-white font-bold text-base mb-2">
                    <router-link
                        v-bind:to="{ name: 'Tv', parms: { id: tv.id } }"
                        class="hover:text-gray-200 text-gray-600"
                    >  
                        {{ tv.name }}
                        <span
                            v-if="tv.name !== tv.original_name"
                            class="text-xs"
                        >
                            ({{ tv.original_name }})
                        </span>
                    </router-link>
                </div>
                <p>
                    {{ tv.overview | charactersLimiter(300) }}
                </p>
            </div>
            <div class="flex items-center pt-2 border-t border-none">
                <div class="text-sm">
                    <font-awesome-icon incon="calendar-alt"></font-awesome-icon>
                    <sapn class="ml-1 text-black">
                        {{ tv.first_air_date }}
                    </sapn>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import { imageChecker } from '../../../mixins'

export default {
    name: 'LatestTv',
    props: ['tv'],
    micins: [imageChecker]
}
</script>

<style lang="scss" scoped>

</style>