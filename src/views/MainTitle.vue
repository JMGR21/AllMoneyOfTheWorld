<template>
    <div class="main">
        <div :class="animation" class="main-home">
            <TitleMain />

            <ButtonMain title="START GAME" @click="start" />
            <ButtonMain title="TUTORIAL" @click="showTutorial = true" />

            <ModalImage v-if="showTutorial" @close-modal="showTutorial = false" />
        </div>
    </div>
</template>

<script>
import ButtonMain from '@/components/ButtonMain.vue'
import TitleMain from '../components/TitleMain.vue'
import ModalImage from '@/components/ModalImage.vue'

export default {
    name: 'MainTitle',
    components: { TitleMain, ButtonMain, ModalImage },
    data() {
        return {
            showTutorial: false,
            animation: ''
        }
    },
    methods: {
        start() {
            this.animation = 'animate__animated animate__zoomOut'

            setTimeout(() => this.$router.push('game'), 500)
        }
    },
}
</script>

<style>
    body {
        margin: 0;
    }

    .main {
        background-image: url('@/assets/background_main.gif');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .main .main-home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>