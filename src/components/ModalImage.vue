<template>
    <div>	
        <div id="myModal" class="modal" :class="animation">
            <div class="modal-image">
                <img class="modal-content" src="@/assets/howtoplay.png" id="img01">
            </div>
            <div class="modal-options">
                <button class="noselect">
                    <span class='text'>Close</span>
                    <span class="icon" @click="closeModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            animation: 'modal-open'
        }
    },
    methods: {
        closeModal() {
            this.animation = 'modal-close'

            setTimeout(() => this.$emit('close-modal'), 1000)
        }
    },
}
</script>

<style scoped>
    .modal {
        width: 50%;
        max-height: 860px;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        padding: 10px;
        background: white;
    }

    .modal-open {
        animation: zoomIn;
        animation-duration: 1s;
    }

    .modal-close {
        animation: zoomOut;
        animation-duration: 1s;
    }

    .modal-image {
        width: 100%;
        height: 800px;
        overflow-y: scroll;
    }

    .modal-content {
        width: 100%;
    }

    .modal-options {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: flex-end;
        margin: 10px 0;
    }

    button {
        width: 160px;
        height: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        background: red;
        border: none;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
        background: #e62222;
    }

    button, button span {
        transition: 200ms;
    }

    button .text {
        transform: translateX(35px);
        color: white;
        font-family: "Lilita";
        font-size: 20px;
    }

    button .icon {
        position: absolute;
        border-left: 1px solid #c41b1b;
        transform: translateX(110px);
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button svg {
        width: 15px;
        fill: #eee;
    }

    button:hover {
        background: #ff3636;
    }

    button:hover .text {
        color: transparent;
    }

    button:hover .icon {
        width: 150px;
        border-left: none;
        transform: translateX(0);
    }

    button:focus {
        outline: none;
    }
</style>