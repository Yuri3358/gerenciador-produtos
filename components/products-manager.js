const productsManager = {
    template: 
    `<h1>Gerenciador de Produtos</h1>
    <div id="content">
        <div id="data-entries">
            <label for="produto">Produto</label>
            <input class="inputs" id="produto" v-model="productInput"> <br/>

            <label for="quantidade">Quantidade</label>
            <input class="inputs" id="quantidade" v-model="amountInput"> <br/>

            <button class="btn btn-success" @click="registerProduct">Salvar</button>
            <button class="btn btn-secondary" @click="updateProduct">Atualizar</button>
            <button class="btn btn-danger" @click="deleteProduct">Excluir</button>

        </div>

        <div id="data-output">
            <table class="table table-primary table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        <th>Identidade</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="product in this.products.value">
                        <td>{{ product.productId }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.amount }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`,

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
        }
    }
}

exports = {productsManager}