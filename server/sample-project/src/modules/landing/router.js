import MovieHome from './pages/MovieHome.vue'
import TvHome from './pages/TvHome.vue'
import MovieCategories from './pages/MovieCategories.vue'
import TvSeriesCategories from './pages/TvSeriesCategories.vue'

export default[
    {
        path:'/',
        name: 'MovieHome',
        component: MovieHome
    },
    {
        path: '/tv_home',
        name: 'TvHome',
        component: TvHome
    },
    {
        path: '/movie_categories',
        name: 'MovieCategories',
        component: MovieCategories
    },
    {
        path: '/tv_series_categories',
        name: 'TvSeriesCategories',
        component: TvSeriesCategories
    },
]