<template>
    <route-link
        class="
            latest-movie
            sm:flex-wrap
            max-w-md max-h-screen
            min-w-full
            opacity-75
            hover:opacity-100
            flex
        "
        v-bind:to="{ name: 'Movie', params: { id: movie.id } }"
    >
        <clazy-load
            v-bind:src="imageChecker(movie.poster_path)"
            loadedClass="bg-black flex w-full sm:w-1/3 rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden"
            loadingClass="flex w-full sm:w-1/3 rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden"
        >
            <img
                class="self-center m-auto"
                v-bind:src="imageChecker(movie.poster_path)" 
                v-bind:alt="movie.original_title"
            />
        </clazy-load>
        <div
            class="
                w-full
                sm:w-2/3
                bg-black
                rounded-d
                sm:rounded-b-none sm:rounded-r
                p-4
                flex flex-col
                justify-betweeen
                leading-normal
            "
        >
            <div class="pb-2">
                <p
                    class="
                        text-sm text-gray-600
                        flex
                        content-center
                        text-yellow-400
                        hover:text-yellow-600
                        font-bold
                    "
                >
                    <font-awesome-icon icon="star"></font-awesome-icon>
                    <span class="ml-1 text-white">
                        {{ movie.vote_average }} ({{ movie.vote_count }})
                    </span>
                </p>
                <div class="text-white font-bold text-base mb-2">
                    <router-link
                        v-bind:to="{ name: 'Movie', params: { id: movie.id } }"
                        class="text-gray-600 hover:text-gray-200"
                    >
                        {{ movie.title }}
                        <span
                            v-if="movie.title !== movie.original_title"
                            class="text-xs"
                        >
                            ({{ movie.original_title }})
                        </span>
                    </router-link>
                </div>
                <p class="text-white text-sm">
                    {{ movie.overview | charactersLimiter(300) }}
                </p>
            </div>
            <div class="flex items-center pt-2 border-t border-none">
                <div class="text-sm">
                    <font-awesome-icon icon="calendar-alt"></font-awesome-icon>
                    <span class="ml-1 text-black">
                        {{ movie.release_date }}
                    </span>
                </div>
            </div>
        </div>
    </route-link>
</template>

<script>
import imageChecker from '../../../mixins'

export default {
    name: 'latestMovie',
    props: ['movie'],
    mixins: [imageChecker]
}
</script>

<style lang="scss" scoped>

</style>