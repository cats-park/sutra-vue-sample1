<template>
    <div id="app" class="bg-black min-h-screen">
        <router-view />
    </div>
</template>

<script>
import Header from "./components/general/Header"

const App = {
        name: "App",
        components: {
            Header
        }
    }

export default App;

</script>

<style lang="scss">
// 最初はサンプル通りtailwindで作成しその後にscssで書き直す
</style>
