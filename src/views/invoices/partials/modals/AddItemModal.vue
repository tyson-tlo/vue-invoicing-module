<template>
    <div>
        <!-- <div id="addItemModal" class="modal fade in" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Item To Invoice</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-success w-100" v-if="messages.success">
                            {{ messages.success }}
                        </div>
                        <input type="text" class="form-control mt-1" v-model="item.name" placeholder="Description">
                        <input type="text" class="form-control mt-1" v-model="item.unit_type" placeholder="Unit Type">
                        <input type="text" class="form-control mt-1" v-model="item.units" placeholder="# of Units">
                        <input type="text" class="form-control mt-1" v-model="item.unit_cost" placeholder="Cost Per Unit">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="storeItem">Save Item</button>
                    </div>
                </div>
            </div>
        </div> -->

        <div ref="modal" class="in-modal">
            <div class="in-modal-window">
                <div class="d-flex">
                    <h3>Edit Item</h3>

                    <div class="ms-auto">
                        <button class="btn-close" @click="hideModal"></button>
                    </div>
                </div>        
                
                <div class="alert alert-success w-100" v-if="messages.success">
                    {{ messages.success }}
                </div>
                <input type="text" class="form-control mt-1" v-model="item.name" placeholder="Description">
                <input type="text" class="form-control mt-1" v-model="item.unit_type" placeholder="Unit Type">
                <input type="text" class="form-control mt-1" v-model="item.units" placeholder="# of Units">
                <input type="text" class="form-control mt-1" v-model="item.unit_cost" placeholder="Cost Per Unit">

                <button class="btn btn-primary"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: {
                name: null,
                unit_type: null,
                units: null,
                unit_cost: null
            },
            messages: {
                success: null
            }
        }
    },
    methods: {
        storeItem() {            
            this.$emit('saveItem', this.item)            
            this.messages.success = "Successfully added item"
            setTimeout(() => {
                this.messages.success = null
            }, 2500)
            this.$nextTick(() => {
                Object.keys(this.item).forEach(key => this.item[key] = null)
            })
        },
        showModal() {

        },
        hideModal() {
            
        }
    }
}
</script>