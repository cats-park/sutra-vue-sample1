<template>
    <div>
        <carousel
            class="-mx-2 mb-8"
            v-bind:autoplay="!0"
            v-bind:autoplayTimeout="3000"
            v-bind:autoplayHoverPause="!0"
            v-bind:paginationPadding="6"
            paginationColor="#cbd5e0"
            paginationActiveColor="#44337a"
        >
            <slide
                class="flex"
                v-for="(movie, index) in trendingMovie" 
                v-bind:key="index"
            >
                <MoviePreview v-bind:movie="movie"></MoviePreview>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
import { Carousel, Slide} from 'vue-carousel'
import MoviePreview from '../../../components/general/MoviePreview.vue'
export default {
    name: 'MovieHomeTrendingCarousel',
    components: {
        MoviePreview,
        Carousel,
        Slide
    },
    computed: {
        ...mapGetters(['languageCurrent', 'trendingMovie'])
    },
    methods: {
        ...mapActions({
            fetchTrendingMovie: 'fetchTrendingMovie'
        })
    },
    watch: {
        languageCurrent: function() {
            this.fetchTrendingMovie()
        }
    },
    created() {
        this.fetchTrendingMovie()
    }
}
</script>

<style lang="scss" scoped>

</style>