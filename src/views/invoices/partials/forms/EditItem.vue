<template>
    <div>
        <input type="text" class="form-control mt-1" v-model="data.name" placeholder="Description">
        <input type="text" class="form-control mt-1" v-model="data.unit_type" placeholder="Unit Type">
        <input type="number" class="form-control mt-1" v-model="data.units" placeholder="# of Units">
        <input type="number" step=".01" class="form-control mt-1" v-model="data.unit_cost" placeholder="Cost Per Unit">

        <button type="button" class="btn btn-primary mt-1 float-end" @click="updateItem">Update Item</button>
    </div>
</template>

<script>
    export default {
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
            }
        },
        watch: {
            item() {
                Object.keys(this.data).forEach(key => this.data[key] = this.item[key])
            }
        }
    }
</script>