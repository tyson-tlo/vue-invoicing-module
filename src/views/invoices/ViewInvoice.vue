<template>
    <div class="invoice-container">
       <div class="title-container" v-if="invoice">
           <div v-if="invoice.customer">
               <h3>{{ invoice.customer.name }}</h3>
               <h4>{{ invoice.customer.address }}</h4>
               <h4>{{ invoice.customer.city }}</h4>
               <h4>{{ invoice.customer.province }}</h4>
               <h4>{{ invoice.customer.postal_code }}</h4>
               <h4>{{ invoice.customer.country }}</h4>
           </div>
           <div>
               <h3>Company Business</h3>
               <h4>123 Business Street</h4>
               <h4>Edmonton</h4>
           </div>
       </div>
    </div>
</template>

<script>
import invoices from '../../data/invoices'

export default {
    mounted() {
        this.getInvoice()
    },
    data () {
        return {
            invoice: null
        }
    },
    methods: {
        getInvoice() {
            this.invoice = invoices.find( el => el.id === this.$route.params.invoice)
        }
    }
}
</script>

<style scoped>
    .invoice-container {
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
        padding: 15px;
        box-shadow: 2px 2px 5px black;
        border: solid 1px black
    }

    @media (min-width: 950px) {
        .invoice-container {
            width: 900px;
            margin:20px auto;
        }

        .title-container {
            display: flex;
            justify-content: space-between;            
        }

        .title-container {
            text-align: left;
        }

        /* .title-container:last-child {
            text-align: right
        } */
    }
</style>