<template>
    <div class="home">
        {{propA}}
        {{userId}}
    </div>
</template>

<script lang="ts">
import {namespace} from 'vuex-class'
const User = namespace('user')
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({ name: "Home" })
// @ is an alias to /src
export default class Home extends Vue {
    @Prop({ default: "sss" }) propA!: string;
    @User.State('userId') userId!: string
    mounted() {
    }
}
</script>
<style lang="scss" scoped>
</style>
