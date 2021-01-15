<template>
    <div>
        <h5>Customer Details</h5>
        <input type="text" class="form-control mt-1" v-model="data.name" placeholder="Customer Name">
        
        <input type="text" class="form-control mt-1" v-model="data.address" placeholder="Customer Address">
    
        <input type="text" class="form-control mt-1" v-model="data.city" placeholder="Customer City">
    
        <input type="text" class="form-control mt-1" v-model="data.province" placeholder="Customer Province">
    
        <input type="text" class="form-control mt-1" v-model="data.postal_code" placeholder="Customer Postal Code">
    
        <input type="text" class="form-control mt-1" v-model="data.country" placeholder="Customer Country">
        
        <button class="btn btn-primary mt-1" @click="updateCustomer">Update Customer</button>
    </div>
</template>

<script>

export default {
    mounted() {
        this.data = this.customer
    },
    props: ['customer'],
    data() {
        return {
            data: {
                name: null,
                address: null,
                city: null,
                province: null,
                postal_code: null,
                country: null
            }
        }
    },
    methods: {
        updateCustomer() {
            this.$emit('updateCustomer', this.data)
        }
    }
}
</script>