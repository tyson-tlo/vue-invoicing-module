<template>
    <div>
        <div ref="modal" class="in-modal">
            <div class="in-modal-window">
                <div class="d-flex">
                    <h3>Edit Item</h3>

                    <div class="ms-auto">
                        <button class="btn-close" @click="hideModal"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        if (this.item) {
            Object.keys(this.data).forEach(key => this.data[key] = this.item[key])
        }        
    },
    props: ['item'],
    data() {
        return {
            data: {
                name: null,
                unit_type: null,
                units: null,
                unit_cost: null
            }
        }
    },
    methods: {
        updateItem() {
            this.$emit('updateItem', this.data)
            this.hideModal()
        },
        hideModal() {
            this.$refs.modal.style.display = 'none'
        },
        showModal() {
            this.$refs.modal.style.display = 'flex'
        }
    },
    watch: {
        item() {
            Object.keys(this.data).forEach(key => this.data[key] = this.item[key])
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
        display: flex;
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