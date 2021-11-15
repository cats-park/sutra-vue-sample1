export const imageChecker = {
    methods: {
        imageChecker(image) {
            if (image !== null) {
                return 'http://imagetmdb.org/t/p/original' + image
            }
            return require('../assets/logo.png')
        }
    },
}

export const emptyStringChecker = {
    methods: {
        emptyStringChecker(string) {
            return string !== null && string !== ''
        }
    }
}