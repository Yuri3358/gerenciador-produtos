const productsManager = {
    template: pageTemplate,

    data(){
        return {
            products: Vue.ref([]),
            productInput: "",
            amountInput: "",
            productsAmount: 0,
            showTable: false
        }
    },

    mounted() {
        this.fetchData()
    },
    
    methods: {
        clearInputs() {
            this.productInput = this.amountInput = ""
            this.$refs.product.focus()
        },

        findProduct() {
            if (this.productInput == "") {
                alert("Preencha os campos corretamente!")
            } else {
                let docRef;
                const search = this.products.value.find(product => product.name == this.productInput)

                if (search) {
                    docRef = colRef.doc(search.productId)
                }
                
                return docRef
            }
        },

        fetchData() {
            const data = []
            colRef.get().then(snapshot => {
                snapshot.forEach(doc => {
                    const productInfo = doc.data()
                    productInfo.productId = doc.id
                    data.push(productInfo)
                    data.sort((a, b) => a.name.localeCompare(b.name))
                })

                data.length != 0 ? this.showTable = true : this.showTable = false

                this.products.value = data
                this.productsAmount = data.length
                this.clearInputs()
            })
        },

        async registerProduct(){
            if (this.productInput == "" || this.amountInput == "") {
                alert("Produto vazio!")
            } else {
                await colRef.add({
                    name: this.productInput,
                    amount: this.amountInput
                })
                this.fetchData()
            }
        },

        async deleteProduct(){
            await this.findProduct().delete()
            this.fetchData()
        },

        async updateProduct(){
            if (this.amountInput == "") {
                alert("Adicione a nova quantidade!")
            } else {
                await this.findProduct().update({
                    name: this.productInput,
                    amount: this.amountInput
                })
                this.fetchData()
            }
        }

    }
}

exports = {productsManager}