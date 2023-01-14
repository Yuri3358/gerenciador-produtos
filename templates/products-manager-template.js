const pageTemplate = `
<div id="content" @keyup.enter="registerProduct" @keyup.esc="deleteProduct">
<header>Gerenciador de Produtos </header>

<div id="data-entries">
        <label for="produto">Nome do Produto</label>
        <input ref="product" class="inputs" id="produto" v-model="productInput"> <br/>

        <label for="quantidade">Quantidade</label>
        <input class="inputs" id="quantidade" min="0" type="number" v-model="amountInput"> <br/>

        <button class="btn btn-success" @click="registerProduct">Salvar</button>
        <button class="btn btn-secondary" @click="updateProduct">Atualizar</button>
        <button class="btn btn-danger" @click="deleteProduct">Excluir</button>

    </div>

    <div id="data-output">
        <table v-show="showTable" class="table table-condensed">
            <thead class="table-dark">
                <tr>
                    <th>Códigos</th>
                    <th>Produtos ({{ this.productsAmount }})</th>
                    <th>Quantidades</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="product in this.products.value">
                    <td>{{ product.productId }}</td>
                    <td @click="this.productInput = product.name">{{ product.name }}</td>
                    <td>{{ product.amount }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`