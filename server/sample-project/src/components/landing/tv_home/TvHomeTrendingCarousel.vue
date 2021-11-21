<template>
    <corousel
        class="-mx-2 mb-8"
        v-bind:autoplay="!0"
        v-bind:autoplayTimeout="3000"
        v-bind:autoplayHoverPause="!0"
        v-bind:paginationPadding="6"
        paginationColor="#cbd5e0"
        paginationActiveColor="#44337a"
    >
        <slide 
            v-for="(tv, index) in trendingTv"
            v-bind:key="index"
            class="flex"
        >
            <TvPreview v-bind:tv="tv"></TvPreview>
        </slide>
    </corousel>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
import { Carousel, Slide} from 'vue-carousel'
import TvPreview from '../../../components/general/TvPreview.vue'

export default {
    name: 'TvHomeTrendingCarousel',
    components: {
        Carousel, 
        Slide,
        TvPreview
    },
    computed: {
        ...mapGetters(['languageCUrrent', 'trendingTv'])
    },
    methods: {
        ...mapActions({
            fetchTrendingTv: 'fetchTrendingTv'
        })
    },
    watch: {
        languageCurrent: function() {
            this.fetchTrendingTv()
        }
    },
    created() {
        this.fetchTrendingTv()
    },
}
</script>