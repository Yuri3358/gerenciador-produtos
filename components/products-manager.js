const productsManager = {
    template: pageTemplate,

    data(){
        return {
            products: Vue.ref([]),
            productInput: "",
            amountInput: ""
        }
    },

    mounted() {
        this.fetchData()
    },
    
    methods: {
        clearInputs() {
            this.productInput = ""
            this.amountInput = ""
        },

        findProduct() {
            let docRef;
            const search = this.products.value.filter(product => this.productInput == product.name)
            search.map(data => docRef = colRef.doc(data.productId))
            return docRef
        },

        fetchData() {
            const data = []
            colRef.get().then(snapshot => {
                snapshot.forEach(doc => {
                    const productInfo = doc.data()
                    productInfo.productId = doc.id
                    data.push(productInfo)
                })
                this.products.value = data
                this.clearInputs()
            })
        },

        async registerProduct(){
            await colRef.add({
                name: this.productInput,
                amount: this.amountInput
            })
            this.fetchData()
        },

        async deleteProduct(){
            await this.findProduct().delete()
            this.fetchData()
        },

        async updateProduct(){
            await this.findProduct().update({
                name: this.productInput,
                amount: this.amountInput
            })
            this.fetchData()
        }

    }
}

exports = {productsManager}