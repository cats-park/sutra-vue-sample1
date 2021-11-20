<template>
    <div>
        <LatestTv v-if="!tvSeriesLoading" v-bind:tv="latestTv"></LatestTv>
        <div v-else class="text-center my-6">
            <purple-spinner></purple-spinner>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import LatestTv from '../../../components/landing/tv_home/LatestTv.vue'
import PurpleSpinner from '../../../components/general/PurpleSpinner.vue'

export default {
    name: 'TvHomeLatestTv',
    components: {
        LatestTv,
        PurpleSpinner
    },
    computed: {
        ...mapGetters(['languageCurrent', 'latestTv', 'tvSeriesLoading'])
    },
    methods: {
        ...mapActions({
            languageCurrent: function() {
                this.fetchLatestTv()
            }
        })
    },
    created() {
        this.fetchLatestTv()
    },
}
</script>

<style lang="scss" scoped>

</style>