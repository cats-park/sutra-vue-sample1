<template>
    <DetailLayout>
        <div class="movie">
            <div class="pt-12" v-if="!movieLoading">
                <div class="text-right">
                    <a 
                        v-bind:href="movie.imdb_id | imdbLink"
                        target="_blank"
                        v-if="emptyStringChecker(movie.imdb_id)"
                        class="
                            hover:text-purple-500
                            text-white
                            font-bold
                            py-2
                            px-4
                            hover:border-purple-900
                            inline-block
                            align-middle
                        "
                    >
                        <font-awesome-icon icon="link" class="mr-1"></font-awesome-icon>
                        Show on IMDB
                    </a>
                    <button
                        @click="$router.go(-1)"
                        class="
                            bg-purple-700
                            hover:bg-purple-500
                            text-white
                            font-bold
                            py-2
                            px-4
                            border-b-4 border-purple-800
                            hover:border-purple-600
                            rounded
                            inline-block
                            align-middle
                        "
                    ></button>
                </div>
                <div class="flex flex-wrap align-middle h-full mb-4">
                    <clazy-load
                        v-bind:src="imageChecker(movie.poster_path)"
                        loadedClass="sm:w-1/4 mb-1 sm:pr-4 w-full"
                        loadingClass="sm:w-1/4 mb-1 sm:pr-4 w-full"
                    >
                        <img 
                            v-bind:src="imageChecker(movie.poster_path)" 
                            v-bind:alt="movie.original_title"
                        >
                        <div 
                            class="flex justify-center h-full"
                            slot="placeholder"
                        >
                            <font-awesome-icon 
                                class="fa-spin text-4xl text-white mx-auto"
                                icon="spinner" 
                            ></font-awesome-icon>
                        </div>
                    </clazy-load>
                    <div class="sm:w-3/4 w-full items-center">
                        <div class="mb-1 text-2xl font-bold text--white">
                            {{ movie.title }}
                        </div>
                        <div class="mb-1 text-gray-300">
                            {{ movie.tagline }}
                        </div>
                        <div class="w-full my-1 align-middle text-gray-600">
                            {{ movie.overview }}
                        </div>
                        <div
                            class="w-full my-2 align-middle text-sm"
                            v-if="movie.geres.length>0"
                        >
                            <span
                                class="mr-3 text-gray-300"
                                v-for="(genre, index) in movie.genres" :key="index"
                            >
                                <font-awesome-icon icon="tag" class="mr-1 text-gray-500"></font-awesome-icon>
                                {{ genre.name }}
                            </span>
                        </div>
                        <div class="text-sm flex content-center items-center text-white -mx-2">
                            <div class="flex-1 text-center align-middle m-2">
                                <font-awesome-icon
                                    icon="star"
                                    class="mr-1 text-yellow-400 hover:text-yellow-600"
                                ></font-awesome-icon>
                                <span class="text-gray-300 font-bold">
                                    {{ movie.vote_average }} ({{ movie.vote_count}})
                                </span>
                            </div>
                            <div 
                                class="flex-1 text-center align-middle m-2"
                                v-if="emptyStringChecker(movie.release_date)"
                            >
                                <font-awesome-icon icon="calendar-alt" class="mr-1 text-gray-300"></font-awesome-icon>
                                <span class="text-gray-300 font-bold">
                                    {{ movie.release_date }}
                                </span>
                            </div>
                            <div class="flex-1 text-center align-middle m-2 text-gray-300">
                                Runtime:
                                <sapn class="text-gray-300 font-bold">
                                    {{ movie.runtime }} min
                                </sapn>
                            </div>
                        </div>
                        <div class="text-sm flex content-center items-center text-gray-800 -mx-2">
                            <div class="flex-1 text-center align-middle m-2 text-gray-300">
                                Popularity:
                                <span class="text-gray-300 font-bold">
                                    {{ movie.popularity }}
                                </span>
                            </div>
                            <div
                                class="flex-1 text-center align-middle m-2 text-gray-300"
                                v-if="movie.splken_languages.length>0"
                            >
                                Original Language:
                                <span class="text-gray-300 font-bold">
                                    {{ movie.spoken_languages[0].name }}
                                </span>
                            </div>
                            <div class="flex-1 text-center align-middle m-2 text-gray-300">
                                Status:
                                <span class="text-gray-300 font-bold">
                                    {{ movie.status }}
                                </span>
                            </div>
                        </div>
                        <div 
                            class="flex flex-wrap my-1 -mx-1"
                            v-if="credits.cast.length>0"
                        >
                            <div class="w-full mb-1 text-wl font-bold text-white">
                                Actors
                            </div>
                            <actor-preview 
                                v-for="(actor, index) in credits.cast"
                                v-bind:key="index"
                                v-bind:actor="actor"
                            ></actor-preview>
                        </div>
                        <div class="w-full my-8">
                            <button 
                                class="
                                    bg-purple-700 
                                    hover:bg-purple-500 
                                    text-white 
                                    font-bold 
                                    py-2 
                                    px-4
                                    border-b-4 border-purple-800
                                    hover:border-purple-600
                                    rounded
                                    inline-block
                                    align-middle
                                "
                            >
                                Load Videos
                            </button>
                            <div class="flex flex-wrap -mx-2">
                                <component
                                    class="px-2 w-full sm:w-1/2 md:w-1/2 mb-2"
                                    v-for="(video, index) in movieVideos" 
                                    v-bind:key="index"
                                    v-bind:is="video.site"
                                    v-bind:video="video"
                                />
                            </div>
                            <div
                                class="
                                    bg-teal-100
                                    border-t-4 border-teal-500
                                    rounded-b
                                    text-teal-900
                                    px-4
                                    py-3
                                    shadow-md
                                "
                                v-if="movieVideosLoad && movieVideos.length==0"
                                role="alert"
                            >
                                <div class="flex">
                                    <div class="py-1">
                                        <svg
                                            class="fill-current h-6 w-6 text-white mr-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="font-bold">Sorry! Videos Not Available</p>
                                        <p class="text-sm">This movie doed not have available videos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="text-center">
                <purple-spinner> </purple-spinner>
            </div>
        </div>
    </DetailLayout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { imageChecker, emptyStringChecker } from '../../../mixins'
import { Youtube, Vimeo } from '../../../components/videos'
import ActorPreview from '../../../components/general/PurpleSpinner.vue'
import DetailLayout from '../../../views/DetailLayout'

export default {
    name: 'Movie',
    created() {
        this.fetchMovie([
            this.$route.params.id
            ])
    },
    computed: {
        ...mapGetters([
            'movie',
            'credits',
            'languageCurrent',
            'movieLoading',
            'movieVideos',
            'movieVideosLoad'
        ]),
    },
    methods: {
        ...mapActions({
            fetchMovie: 'fetchMovie',
            fetchMovieVideos: 'fetchMovieVideos'
        }),
        loadVideo() {
            this.fetchMovieVideos(this.movie.id)
        }
    },
    watch: {
        languageCurrnet: function() {
            this.fetchMovie([
                this.$route.params.id
            ])
        }
    },
    components: {
        DetailLayout,
        PurpleSpinner,
        Youtube,
        Vimeo,
        ActorPreview
    },
    mixins: [
        imageChecker,
        emptyStringChecker
    ]
}
</script>

<style lang="scss" scoped>

</style>