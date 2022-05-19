<template>
    <div>
        <div class="shop">
            <img src="@/assets/shop_template.png" alt="template" class="shop-template">
        </div>

        <div class="show">
            <div class="coins">
                <p> {{ coins }} </p>
            </div>

            <div class="item1">
                <img src="@/assets/item1.png" alt="item1" class="item-image">
                <p class="item-price">$3</p>
            </div>

            <div class="item2">
                <img src="@/assets/item2.png" alt="item2" class="item-image">
                <p class="item-price">$1</p>
            </div>

            <div class="item3">
                <img src="@/assets/item3.png" alt="item3" class="item-image">
                <p class="item-price">$8</p>
            </div>

            <div class="item4">
                <img src="@/assets/item4.png" alt="item4" class="item-image">
                <p class="item-price">$3</p>
            </div>

            <div class="item5">
                <img src="@/assets/item5.png" alt="item5" class="item-image">
                <p class="item-price">$5</p>
            </div>

            <div class="item6">
                <img src="@/assets/item6.png" alt="item6" class="item-image">
                <p class="item-price">$2</p>
            </div>

            <div class="item7">
                <img src="@/assets/item7.png" alt="item7" class="item-image">
                <p class="item-price">$10</p>
            </div>

            <div class="item8">
                <img src="@/assets/item8.png" alt="item8" class="item-image">
                <p class="item-price">$4</p>
            </div>
        </div>

        <QuizGame v-if="showQuiz" />
    </div>
</template>

<script>
import QuizGame from './QuizGame.vue'

export default {
    components: { QuizGame },
    data() {
        return {
            coins: 18,
            showQuiz: false,
        }
    },
}
</script>

<style scoped>
    .shop {
        animation: bounceIn;
        animation-duration: 1s;
    }

    .shop-blur {
        filter: blur(10px);
    }

    .show {
        animation: zoomIn;
        animation-duration: 1s;
    }

    .coins {
        position: absolute;
        right: 715px;
        top: 337px;
        font-family: 'Lilita';
        color: white;
        font-size: 30px;
    }

    .item1 {
        position: absolute;
        top: 450px;
        left: 645px;
        cursor: pointer;
    }

    .item2 {
        position: absolute;
        top: 448px;
        left: 825px;
        cursor: pointer;
    }

    .item3 {
        position: absolute;
        top: 448px;
        left: 1005px;
        cursor: pointer;
    }

    .item4 {
        position: absolute;
        top: 448px;
        left: 1185px;
        cursor: pointer;
    }

    .item5 {
        position: absolute;
        top: 630px;
        left: 645px;
        cursor: pointer;
    }

    .item6 {
        position: absolute;
        top: 630px;
        left: 825px;
        cursor: pointer;
    }

    .item7 {
        position: absolute;
        top: 630px;
        left: 1005px;
        cursor: pointer;
    }

    .item8 {
        position: absolute;
        top: 630px;
        left: 1185px;
        cursor: pointer;
    }

    .item-image {
        width: 90px;
        height: 90px;
    }

    .item-price {
        font-family: 'Lilita';
        color: white;
        text-align: center;
        font-size: 20px;
    }
</style>