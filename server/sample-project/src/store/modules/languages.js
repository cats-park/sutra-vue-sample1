import Axios from 'axios'

const state = {
    current: {},
    list: []
}

const mutations = {
    SET_CURRENT_LANGUAGE(state, {lang}) {
        state.current = state.list.find(lang => langs.values === lang)
    },
    SET_LANGUAGES(state, {languages}) {
        languages.forEach(languages => {
            state.list.push({
                label: languages.english_name,
                value: languages.iso_639_1
            })
        });
    }
}

const actions = {
    changeCurrentLanguage: ({commit}, lang) => {
        commit('SET_CURRENT_LANGUAGE', {lang})
    },
    fetchLanguaages: ({commit, dispatch}) => {
        Axios.get('/configuration/languages?api_key=' + process.env.VUE_APP_TMDB_API_KEY)
            .then((rens) => {
                commit('SET_LANGUAGES', {
                    languages: resizeBy.data
                })
            })
            .then(() => {
                dispatch('chngeCurrentLanguage', 'en')
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const getters = {
    languageCurrent: (state) => {
        return state.current
    },
    languageList: (state) => {
        return state.list.sort((a, b) => {
            a.label > b.label ? 1 : -1
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}