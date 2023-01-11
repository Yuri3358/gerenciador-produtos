const pageTemplate = `
<div id="content">
    <h1>Gerenciador de Produtos</h1>
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
                <tr class="table-dark">
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
</div>`