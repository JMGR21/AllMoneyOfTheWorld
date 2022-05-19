<template>
    <div class="options">
        <div class="title">
            <p>¿Cuánto dinero me quedará?</p>
        </div>

        <div class="option option-error">
            <div class="word">
                <p>A</p>
            </div>
            <p class="resp">10</p>
        </div>

        <div class="option">
            <div class="word">
                <p>B</p>
            </div>
            <p class="resp">8</p>
        </div>

        <div class="option option-success">
            <div class="word">
                <p>C</p>
            </div>
            <p class="resp">6</p>
        </div>

        <div class="progressbar">
            <div class="progress"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .options {
        width: 600px;
        height: 420px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        border-radius: 15px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        background-color: #3EA4BF;
        animation: zoomIn;
        animation-duration: 1s;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .title {
        font-family: 'Lilita';
        font-size: 40px;
        color: white;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    .option {
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: white;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 10px;
        margin: 10px 20px;
        cursor: pointer;
        padding: 10px 5px;
        font-family: 'Lilita';
        gap: 10px;
    }

    .option:hover {
        background-color: #8030E8;
        color: white;
    }

    .option-error {
        background-color: #f33f12;
        color: white;
    }

    .option-success {
        background-color: #49b628;
        color: white;
    }

    .option .resp {
        font-size: 25px;
        margin: 0;
    }

    .option .word {
        width: 20px;
        height: 20px;
        background-color: #8030E8;
        border-radius: 50%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
    }

    .progressbar {
        width: 90%;
        height: 20px;
        background-color: #ffe082;
        border-radius: 30px;
        margin-top: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .progress {
        width: 50%;
        height: 20px;
        background-color: #FFCA28;
        border-radius: 30px;
    }
</style>