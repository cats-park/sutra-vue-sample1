<template>
    <DefaultLayout>
        <div class="movie_categories">
            <div class="flex flex-wrap -mx-2">
                <div
                    v-for="(list, index) in movieLists" 
                    v-bind:key="index"
                    class="
                        w-1/2
                        sm:w-1/2
                        flex-col
                        text-gray-700 
                        text-center
                        px-12
                        py-6
                        mb-8
                    "
                >
                    <a 
                        href=""
                        class="
                            block
                            bg-gray-800
                            text-gray-200 text-center text-lg
                            p-w
                            transition
                            duration-200
                            ease-in-out
                        "
                    >
                        {{ list.label }}
                    </a>
                    <router-link
                        class="flex flex-wrap w-full"
                        v-bind:to="/movie_categories/ + list.link"
                    >
                        <clazy-load
                            v-for="(sample, index) in list.samples.slice(0,12)" 
                            v-bind:key="index"
                            v-bind:src="imageChecker(sample.poster_path)"
                            tag="span"
                            loadedClass="flex w-1/4"
                            loadingClass="flex w-1/4"
                        >
                            <router-link v-bind:to="{ name:'Movie', params: {id:sample.id} }">
                                <img 
                                    v-bind:src="imageChecker(sample.poster_path)" 
                                    v-bind:alt="sample.original_title"
                                    class="
                                        opacity-50
                                        hover:opacity-100
                                        transition
                                        duration-200
                                        ease-in-out
                                    "
                                >
                            </router-link>
                            <span
                                slot="placeholder"
                                class="flex justify-center w-full h-full"
                            >
                                <font-awesome-icon
                                    icon="spinner"
                                    class="fa-spin text-purple-900 m-auto text-xl"
                                ></font-awesome-icon>
                            </span>
                        </clazy-load>
                    </router-link>
                    <router-link
                        v-bind:to="/movie_categories/+ list.link"
                        class="
                            block
                            bg-gray-800
                            text-gray-200 text-center
                            p-2
                            transition
                            duration-200
                            ease-in-out
                            hover:bg-gray-900 hover:text-gray-400
                        "
                    >
                        Show All
                    </router-link>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
import { imageChecker } from '../../../mixins'
import DefaultLayout from '../../../views/DefaultLayout.vue'

export default {
    name: 'MovieCategories',
    components: {
        DefaultLayout
    },
    computed: {
        ...mapGetters(['languageCurrent', 'movieLists'])
    },
    methods: {
        ...mapActions({
            fetchListsData: 'fetchMovieListsData'
        })
    },
    watch: {
        languageCurrent: function() {
            this.fetchListsData()
        }
    },
    created() {
        this.fetchListsData()
    },
    mixins:[imageChecker]
}
</script>

<style lang="scss" scoped>

</style>