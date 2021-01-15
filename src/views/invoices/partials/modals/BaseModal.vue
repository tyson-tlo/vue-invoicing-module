<template>
    <div>
        <div ref="modal" class="in-modal">
            <div class="in-modal-window">
                <div class="d-flex">
                    <h3>
                        <slot name="title"></slot>
                    </h3>

                    <div class="ms-auto">
                        <button class="btn-close" @click="hideModal"></button>
                    </div>
                </div>   

                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            showModal() {
                this.$refs.modal.style.display = 'flex'
            },
            hideModal() {
                this.$refs.modal.style.display = 'none'
            }
        }
    }
</script>

<style lang="css">
    .in-modal {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: absolute;
        display: none;
        background-color: rgba(122, 120, 120, 0.712);
    }

    .in-modal .in-modal-window {
        margin: 50px auto;
        width: 500px;
        height: fit-content;
        background-color: white;
        z-index: 9998;
        padding: 15px;
        border-radius: 5px;
    }
</style>