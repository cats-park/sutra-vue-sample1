<template>
    <DefaultLayout>
        <div class="movie-home">
            <MovieHomeTrendingTitle/>
            <MovieHomeTrendingCarousel/>
            <MovieHomeLatestTitle/>
            <MovieHomeLatestMovie/>
        </div>
    </DefaultLayout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DefaultLayout from '../../../views/DefaultLayout.vue'
import MovieHomeTrendingTitle from '../../../components/landing/movie_home/MovieHomeTrendingTitle.vue'
import MovieHomeTrendingCarousel from '../../../components/landing/movie_home/MovieHomeTrendingCarousel.vue'
import MovieHomeLatestTitle from '../../../components/landing/movie_home/MovieHomeLatestTitle.vue'
import MovieHomeLatestMovie from '../../../components/landing/movie_home/MovieHomeLatestMovie.vue'

export default {
    name: 'MovieHome',
    computed: {
        ...mapGetters(['languageCurrent', 'latestMovie', 'moviesLoading'])
    },
    methods: {
        ...mapActions({
            fetchLatestMovie: 'fetchLatestMovie'
        })
    },
    watch: {
        languageCurrent: function() {
            this.fetchLatestMovie()
        }
    },
    created() {
        this.fetchLatestMovie()
    },
    components: {
        DefaultLayout,
        MovieHomeTrendingTitle,
        MovieHomeTrendingCarousel,
        MovieHomeLatestTitle,
        MovieHomeLatestMovie
    }
}
</script>

<style lang="scss" scoped>

</style>