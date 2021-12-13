// import Vue from 'vue'
// import Vuex from 'vuex'

import { createStore} from 'vuex';

import languages from './modules/languages.js'
import movies from './modules/movies.js'
import movie from './modules/movie.js'
import tvSeries from './modules/tv_series.js'
import tv from './modules/tv.js'


const store = createStore({
    store: {},
    mutations: {},
    actions: {},
    modules: {
        languages,
        movies,
        movie,
        tvSeries,
        tv
    }
})

export default store