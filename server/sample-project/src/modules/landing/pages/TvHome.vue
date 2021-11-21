<template>
    <DefaultLayout>
        <div class="tv-home">
            <TvHomeTrendingTitle />
            <TvHomeTrendingCarousel />
            <TvHomeLatestTitle />
            <TvHomeLatestTv />
        </div>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '../../../views/DefaultLayout'
import TvHomeTrendingTitle from '../../../components/landing/tv_home/TvHomeTrendingTitle.vue'
import TvHomeTrendingCarousel from '../../../components/landing/tv_home/TvHomeTrendingCarousel.vue'
import TvHomeLatestTitle from '../../../components/landing/tv_home/TvHomeLatestTitle.vue'
import TvHomeLatestTv from '../../../components/landing/tv_home/TvHomeLatestTv.vue'

export default {
    name: 'TvHome',
    components: {
        DefaultLayout,
        TvHomeTrendingTitle,
        TvHomeTrendingCarousel,
        TvHomeLatestTitle,
        TvHomeLatestTv
    }
}
</script>