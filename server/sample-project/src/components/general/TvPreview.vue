<template>
    <router-link
        class="
            movie-preview
            sm:flex-wrap
            border-gray-300
            max-w-md max-h-screen
            opacity-75
            hover:opacity-100
        "
        v-bind:to="{ name: 'Tv', params: { id: tv.id } }"
    >
        <div>
            <div
                class="
                    max-w-md max-h-screen
                    min-h-full
                    bg-black
                    shadow-md
                    rounded-lg
                    mx-0
                    border-gray-300
                "
            >
                <div
                    class="
                        overflow-hidden
                        rounded-xl
                        relative
                        transition
                        ease-in-out
                        duration-500
                        shadow-lg
                        hover:shadow-2xl
                        movie-item
                        text-white
                        movie-card
                        border-gray-200
                        bg-black
                    "
                    v-bind:data-tv-id="tv.id"
                >
                    <clazy-load
                        v-bind:src="imageChecker(tv.poster_path)"
                        loadedClass="absolute inset-0 transform w-full opacity-75"
                        loadingClass="flex w-full sm:w-1/3 rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden"
                    >
                        <img 
                            class="self-center m-auto"
                            v-bind:src="imageChecker(tv.poster_path)" 
                            v-bind:alt="tv.original_title"
                        >
                    </clazy-load>
                    <div
                        class="
                            movie-info
                            relative
                            cursor-pointer
                            group
                            z-10
                            px-10
                            pt-40
                            space-y-6
                        "
                        data-lity=""
                    >
                        <div class="poster_info align-self-end w-full">
                            <div class="h-32"></div>
                            <div class="space-y-4 detail_info">
                                <div class="flex flex-col space-y-2 inner">
                                    <div class="text-gray-600 font-bold text-base mb-0">
                                        <router-link
                                            v-bind:to="{ name: 'Tv', params: { id: tv.id } }"
                                            class="hover:text-gray-200 text-gray-600"
                                        >
                                            {{ tv.name }}
                                            <span
                                                v-if="tv.name !== tv.original_name"
                                                class="text-xs text-gray-600"
                                            >
                                                ({{ tv.original_name }})
                                            </span>
                                        </router-link>
                                    </div>
                                    <div class="mb-0 text-lg text-gray-400">
                                        {{ tv.description }}
                                    </div>
                                </div>
                                <div class="flex flex-row justify-between datos content-center">
                                    <div class="flex flex-col datos_col content-center">
                                        <div class="popularity">
                                            {{ tv.popularity }}
                                        </div>
                                        <div class="text-sm text-gray-400">
                                            Popularity
                                        </div>
                                    </div>
                                    <div class="flex flex-col datos_col content-center">
                                        <div class="vote">
                                            {{ tc.vote_acerage }} ({{ tv.vote_count }})
                                        </div>
                                        <div class="text-sm text-gray-400">
                                            Vote
                                        </div>
                                    </div>
                                    <div class="flex flex-col datos_col">
                                        <div class="release">
                                            {{ tv.first_air_date }}
                                        </div>
                                        <div class="text-sm text-gray-400">
                                            First Air date
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col overview">
                                    <div class="flex flex-col"></div>
                                    <div class="text-xs text-gray-400 mb-2">
                                        Overview:
                                    </div>
                                    <p class="text-xs text-gray-100 mb-6">
                                        {{ tv.overveiw | charactersLimiter(200) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import { imageChecker } from '../../mixins'

export default {
    name:'TvPreview',
    parops: ['tv'],
    micins: [ imageChecker ]
}
</script>

<style lang="scss" scoped>

</style>