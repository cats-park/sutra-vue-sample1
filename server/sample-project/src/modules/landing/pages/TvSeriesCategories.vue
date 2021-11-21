<template>
    <DefalultLayout>
        <div class="tv_series_categories">
            <div class="flex flex-wrap -mx-2">
                <div
                    v-for="(list, index) in tvLists" 
                    v-bind:key="index"
                    class="
                        w-1/2
                        sm:w-1/2
                        flex-col
                        text-gray-700 text-center
                        px-12
                        py-6
                        mb-8
                    "
                >
                    <a
                        class="
                            block
                            bg-gray-800
                            text-gray-200 text-center text-lg
                            p-2
                            transition
                            duration-200
                            ease-in-out
                        "
                    >
                        {{ list.label }}
                    </a>
                    <router-link
                        v-bind:to="/tv_series_categories/ + list.link"
                        class="flex flex-wrap w-full"
                    >
                        <clazy-load
                            v-for="(sample, index) in list.samples.slice(0,12)" 
                            v-bind:key="index"
                            v-bind:src="imageChecker(sample.poster_path)"
                            tag="span"
                            loadedClass="flex w-1/4"
                            loadingClass="flex w-1/4"
                        >
                            <router-link v-bind:to="{name: 'Tv', params: {id: sample.id } }">
                                <img 
                                    v-bind:src="imageChecker(sample.poster_path)" 
                                    v-bind:alt="sample.original_title"
                                    class="
                                        opaity-50
                                        hover:opacity-100
                                        transition
                                        duration-200
                                        ease-in-out
                                    "
                                />
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
                        v-bind:tp="/tx_series_categories/ + list.link"
                        class="
                            block
                            bg-gray-800
                            text-gray-200 text-center
                            p-w
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
    </DefalultLayout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { imageChecker } from '../../../mixins'
import DefaultLayout from '../../../views/DefaultLayout'

export default {
    name: 'TxSeriesCategories',
    components: {
        DefaultLayout
    },
    computed: {
        ...mapGetters(['languageCurrent', 'tvLists'])
    },
    methods: {
        ...mapActions({
            fetchTvListsData: 'fetchTvListsData'
        })
    },
    watch: {
        languageCurrent: function() {
            this.fetchTvListsData()
        }
    },
    created() {
        this.fetchTvListsData()
    },
    mixins: [imageChecker]
}
</script>

<style lang="scss" scoped>

</style>