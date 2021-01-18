<template>
    <div class="create-invoice-container">
        <div class="alert alert-warning mb-3" v-if="errors.length > 0">
            <ul>
                <li v-for="(error, i) in errors" :key="i" >{{ error }}</li>
            </ul>
        </div>

        <div class="create-invoice-card">
            <h2 class="text-center">Edit Invoice</h2>

            <hr>

            <div class="flex-row">
                <div class="w-50">
                    <customer-form :customer="customer" v-if="visible.editCustomer" v-on:updateCustomer="updateCustomer"></customer-form>
                    <customer-details :customer="customer" v-if="!visible.editCustomer" :editCustomer="editCustomer"></customer-details>
                </div>
                <div class="text-end ms-auto">
                    <h5>Company Business</h5>
                    <h5>123 Capital Square</h5>
                    <h5>Edmonton, AB</h5>
                    <h5>E4R-5T6</h5>
                    <h5>Canada</h5>
                </div>
            </div>

            <hr>

            <items-header-row />
            
            <added-item-row 
                v-for="(item, i) in items" 
                :key="i" :item="item" 
                v-on:removeItem="removeItem"
                v-on:editItem="editItem" />

            <div class="d-flex">
                <div class="ms-auto">
                    <button class="btn btn-outline-success btn-sm float-end mt-3" @click="addItem"><strong>+</strong> Add Item</button>
                </div>
            </div>

            <hr>
            
            <div class="d-flex">
                <div class="ms-auto">
                    <h5>Invoice Total: ${{ invoice_total }}</h5>
                    <button class="btn btn-outline-success ms-auto" @click.prevent="updateInvoice">Update Invoice</button>
                </div>
            </div>           
            
            <base-modal ref="addItemModal">
                <template #title>Add Item to Invoice</template>
                <template #content>
                    <add-item-form v-on:storeItem="storeItem"></add-item-form>
                </template>
            </base-modal>
            

            <base-modal
                ref="editItemModal">
                <template #title>Edit Item</template>
                <template #content>
                    <edit-item-form :item="item" v-on:updateItem="updateItem"></edit-item-form>
                </template>                
            </base-modal>
            
        </div>
    </div>
</template>

<script>
import CustomerForm from './partials/CustomerForm.vue'
import CustomerDetails from './partials/CustomerDetails.vue'
import ItemsHeaderRow from './partials/ItemsHeaderRow.vue'
import AddedItemRow from './partials/AddedItemRow.vue'
import BaseModal from './partials/modals/BaseModal'
import AddItemForm from './partials/forms/AddItem.vue'
import EditItemForm from './partials/forms/EditItem.vue'
import storage from '../../data/invoice-storage.js'

export default {
    components: {
        CustomerForm, CustomerDetails, ItemsHeaderRow, AddedItemRow, BaseModal, EditItemForm, AddItemForm
    },
    mounted() {
        storage.getInvoiceById(this.$route.params.invoice).then( response => {
            Object.keys(this.customer).forEach( key => this.customer[key] = response.data.customer[key])
            this.items = response.data.items
        })
    },
    data() {
        return {
            customer: {
                name: null,
                address: null,
                city: null,
                province: null,
                postal_code: null,
                country: null
            },
            items: [],
            item: null,
            visible: {
                editCustomer: false,
            },
            errors: []
        }
    },
    methods: {
        updateCustomer(data) {
            console.log(data)
            this.customer = data
            this.visible.editCustomer = false
        },
        editCustomer() {
            this.visible.editCustomer = true
        },
        addItemToItems(data) {            
            console.log(data)
            this.items.push({...data})
        },
        removeItem(item) {
            let index = this.items.indexOf(item)
            console.log(index)
            this.items.splice(index, 1)
        },
        addItem() {
            this.$refs.addItemModal.showModal()
        },
        storeItem(data) {
            this.items.push({
                name: data.name,
                unit_cost: Number(data.unit_cost),
                units: Number(data.units),
                unit_type: data.unit_type
            })
        },
        editItem(item) {
            this.item = item
            this.$refs.editItemModal.showModal()
        },
        updateItem(item) {
            let index = this.items.indexOf(this.item)
            this.items[index] = item
            this.$refs.editItemModal.hideModal()
        },
        updateInvoice() {
            if (this.validated()) {
                storage.update(this.$route.params.invoice, this.customer, this.items).then( response => {
                    console.log(response)
                    // this.$router.push('/invoices/' + id)
                })
            }
        },
        validated() {
            const errors = []
            if (!this.customer.name) {
                errors.push("Please provide a customer name")
            } else {
                if (this.customer.name.length < 3) {
                    errors.push("Customer name must be greater than 3 characters")
                }
            }

            if (!this.customer.address) {
                errors.push("Please provide a customer address")
            }

            if (!this.customer.city) {
                errors.push("Please provicde a customer city")
            }

            if (!this.customer.country) {
                errors.push("Please provide a customer country")
            }

            this.errors = errors

            return errors.length < 1
        }
    },
    computed: {
        invoice_total() {
            if (this.items.length > 0) {
                return this.items.reduce((a, b) => (b.units * b.unit_cost), 0).toFixed(2)
            }

            return 0
        }
    }
}
</script>

<style scoped>
.create-invoice-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.create-invoice-card {
    padding: 10px;
    box-shadow: 0 2px 5px black;
    width: 90%;
    margin-left: 5%;
}

@media (min-width: 950px) {
    .create-invoice-card {
        width: 900px;
        margin: 0 auto;
    }
}

</style>