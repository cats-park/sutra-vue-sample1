import MoviesList from './pages/MoviesList.vue'
import TvSeriesList from './pages/TvSeriesList.vue'

export default [
    {
        path: '/movie_categories/:listType',
        name: 'MoviesList',
        component: MoviesList
    },
    {
        path: '/tv_series_categories/:listType',
        name: 'TvSeriesList',
        component: TvSeriesList
    }
]