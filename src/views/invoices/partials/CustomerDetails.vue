<template>
    <div>
        <button class="btn btn-sm btn-primary mb-3" @click="editCustomer">Edit Customer</button>
        
        <h5>{{ customer.name }}</h5>
        <h5>{{ customer.address }}</h5>
        <h5>{{ customer.city }}</h5>
        <h5>{{ customer.province }}</h5>
        <h5>{{ customer.postal_code }}</h5>
        <h5>{{ customer.country }}</h5>
    </div>
</template>

<script>


export default {
    props: ['customer', 'editCustomer'],

}
</script>