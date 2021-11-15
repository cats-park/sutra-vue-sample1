import Movie from './pages/Movie.vue'
import Tv from './pages/Tv.vue'

export default[
    {
        path: '/movie/:id',
        name: 'Movie',
        component: Movie
    },
    {
        path: '/tv/:id',
        name: 'Tv',
        component: Tv
    },
]