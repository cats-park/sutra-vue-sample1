<template>
    <DetailLayout>
        <div class="tv">
            <div v-if="!tvLoading" class="pt-12">
                <div class="text-right">
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
                    >
                        Back
                    </button>
                </div>
                <div class="flex flex-wrap align-middle h-full mb-4">
                    <clazy-load>
                        <img 
                            v-bind:src="imageChecker(tv.poster_path)"
                            v-bind:alt="tv.original_title" 
                        />
                        <div slot="placeholder" class="flex justify-center h-full">
                            <font-awesome-icon
                                icon="spinner"
                                class="fa-spin text-4xl text-white mx-auto"></font-awesome-icon>
                        </div>
                        
                    </clazy-load>
                    <div class="sm:w-3/4 w-full items-center">
                        <div class="mb-1 text-2xl font-bold text-white">
                            <div class="mb-1 text-gray-300">
                                {{ tv.tagline }}
                            </div>
                            <div class="w-full my-1 align-middle text-gray-600">
                                {{ tv.overview }}
                            </div>
                            <div
                                v-if="tv.genres.length > 0"
                                class="w-full my-2 align-middle text-sm"
                            >
                                <sapn 
                                    class="mr-3 text-gray-300"
                                    v-for="(genre, index) in tv.genres" 
                                    v-bind:key="index"
                                >
                                    <font-awesome-icon 
                                        icon="tag"
                                        class="mr-1 text-gray-500"
                                    ></font-awesome-icon>
                                    {{ genre.name}}
                                </sapn>
                            </div>
                            <div class="text-sm flex content-center items-center text-white -mx-2">
                                <div class="flex-1 text-center align-middle m-2">
                                    <font-awesome-icon 
                                        icon="star"
                                        class="mr-1 text-yellow-400 hover:text-yellow-600"
                                    ></font-awesome-icon>
                                    <span class="text-gray-300 font-bold">
                                        {{ tc.vote_average }} ({{ tv.vote_count }})
                                    </span>
                                </div>
                                <div 
                                    class="flex-1 text-center align-middle m-2"
                                    v-if="emptyStringChecker(tv.release_date)"
                                >
                                    <font-awesome-icon 
                                        icon="calendar-alt"
                                        class="mr-1 text-gray-300"
                                    ></font-awesome-icon>
                                    <span class="text-gray-300 font-bold">
                                        {{ tv.first_air_date }}
                                    </span>
                                </div>
                                <div class="flex-1 text-center align-middle m-2 text-gray-300">
                                    Awasons/Episodes
                                    <span class="text-gray-300 font-bold">
                                        {{ tv.number_of_seasons + "/" + tv.number_of_episodes }}
                                    </span>
                                </div>
                            </div>
                            <div 
                                class="
                                text-sm 
                                flex 
                                content-center 
                                ites-center 
                                text-gray-800 
                                -mx-2
                                "
                            >
                                <div class="flex-1 text-center align-middle m-2 text-gray-300">
                                    Popularity:
                                    <span>
                                        {{ tv.popularity }}
                                    </span>
                                </div>
                                <div 
                                    class="flex-1 text-center align-middle m-2 text-gray-300"
                                    v-if="tv.spoken_languages.length>0"
                                >
                                    Original Language:
                                    <span>
                                        {{ tv.spoken_languages[0].name }}
                                    </span>
                                </div>
                                <div class="flex-1 text-center align-middle m-2 text-gray-300">
                                    Status:
                                    <span>
                                        {{ tv.status }}
                                    </span>
                                </div>
                            </div>
                            <div 
                                class="flex flex-wrap my-1 -mx-1"
                                v-if="tvCredits.cast.length > 0"
                            >
                                <div class="w-full mb-1 text-xl font-bold text-white">
                                    Actors
                                </div>
                                <actor-preview
                                    v-for="(actor, index) in tvCredits" 
                                    v-bind:key="index"
                                    v-bind:actor="actor"
                                ></actor-preview>
                            </div>
                            <div class="w-full my-8">
                                <button
                                    v-if="!tvVideosLoad"
                                    @click="loadVideo"
                                    class="
                                        bg-purple-700
                                        hover:bg-purple-500
                                        text-white
                                        font-bold
                                        py-2
                                        px-4
                                        border-b-4 border-purple-800
                                        hover:horder-purple-600
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
                                        v-for="(video, index) in videos"
                                        v-bind:key="index"
                                        v-bind:video="video"
                                        v-bind:is="vido.site"
                                    />
                                </div>
                                <div 
                                    v-if="tvVideosLoad && tvVideos.lenth===0"
                                    class="
                                        bg-teal-100 
                                        border-t-4 border-teal-500 
                                        rounded-b 
                                        text-teal-900 
                                        px-4 
                                        py-3 
                                        shadow-md
                                    "
                                    role="alert"
                                >
                                    <div class="flex">
                                        <div class="py-1">
                                            <svg
                                                class="fill-content h-6 w-6 text-white mr-4"
                                                xmlns="http://www.w3.org/2000.svg"
                                                viewBox="0 0 20 20"                                            >
                                                <path />
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-bold">Sorry! Videos Not Available</p>
                                            <p class="text-sm">This tv does not have available videos.</p>
                                        </div>
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
import { mapActions, mapGetters} from 'vuex'
import { imageChecker, emptyStringChecker} from '../../../mixins'
import { YouTube, Vimeo} from '../../../components/videos'
import ActorPreview from '../../../components/detail/ActorPreview'
import PurpleSpinner from '../../../components/general/PurpleSpinner'
import DetailLayout from '../../../views/DetailLayout'

export default {
    name: 'Tv',
    computed: {
        ...mapGetters([
            'tv',
            'tvCredits',
            'languageCurrent',
            'tvLoading',
            'tvVideos',
            'tvVideoLoad'
        ])
    },
    methods: {
        ...mapActions({
            fetchTv: 'fetchTv',
            fetchTvVideos: 'fetchTvVideos'
        }),
        loadVideo() {
            this.fetchTvVideos(this.tv.id)
        }
    },
    watch: {
        languageCurrent: function() {
            this.fetchTv([this.$route.params.id])
        }
    },
    created() {
        this.fetchTv([this.$route.params.id])
    },
    components: {
        DetailLayout,
        PurpleSpinner,
        YouTube,
        Vimeo,
        ActorPreview
    },
    mixins: [imageChecker, emptyStringChecker]
}
</script>

<style lang="scss" scoped>

</style>