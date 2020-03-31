<template>
    <div id="app">
        <img alt="Vue logo"
            src="./assets/logo.png">
        <Button>我是你爸爸</Button>
        <Home :propA="`这是爸爸给你的爱`"></Home>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./views/Home.vue";
import { Button } from "element-ui";
@Component({
    components: {
        HelloWorld,
        Button,
        Home
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        color: $color;
    }
</style>
