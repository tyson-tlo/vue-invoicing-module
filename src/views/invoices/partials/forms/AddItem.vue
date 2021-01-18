<template>
    <div>
        <div class="alert alert-success w-100 mb-2" v-if="alert.success">
            {{ alert.success }}
        </div>

        <input type="text" class="form-control mt-1" v-model="data.name" placeholder="Description">
        <input type="text" class="form-control mt-1" v-model="data.unit_type" placeholder="Unit Type">
        <input type="number" class="form-control mt-1" v-model="data.units" placeholder="# of Units">
        <input type="number" step=".01" class="form-control mt-1" v-model="data.unit_cost" placeholder="Cost Per Unit">

        <button type="button" class="btn btn-primary mt-1 float-end" @click="storeItem">Add Item</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                name: null,
                unit_type: null,
                units: null,
                unit_cost: null,
            },
            alert: {
                success: null
            }
        }
    },
    methods: {
        storeItem() {
            this.$emit('storeItem', {...this.data})
            Object.keys(this.data).forEach(key => this.data[key] = null)
            this.alert.success = "Successfully added item. Feel free to add another item"
            setTimeout(() => {
                this.alert.success = null
            }, 2500)
        }
    }
}
</script>