<h1> Gerenciador de Produtos </h1>

<h2>Finalidade do projeto</h2>

<p>Fiz no intuito de colocar em prática meus conhecimentos recém adquiridos em Vue.js</p>

<p>A implementação de um banco de dados que possa ser utilizado no front-end (firestore) foi fruto de alguns dias de teste, pois não estava sendo viável continuar empregando MongoDB com o conhecimento limitado que possuo atualmente.</p>

<hr>

<h2>Demonstrações de uso</h2>

<h3><strong>Registrando produtos</strong></h3>
<p>Para registrar um produto, simplesmente coloque o nome e a quantidade nos campos adequados ("produto" e "quantidade", respectivamente) e clique em "Salvar"</p>

<img src="./assets/readme-assets/create.gif" width="240px" height="240px">

<h3>Atualizando produtos</h3>
<p>O procedimento é similar ao de registrar mas clicando em "Atualizar".</p>
<p>Passe o nome do produto (digitando ou  que você quer atualizar e a nova quantidade disponível.</p>

<img src="./assets/readme-assets/update.gif" width="240px" height="240px">

<h3>Excluindo produtos</h3>

<p>Para excluir um produto da lista, você precisará apenas passar o nome dele (manualmente ou clicando na tabela).</p>
<p>A função deleteProduct() só precisa do nome do produto, então não precisa passar a quantidade.</p>

<img src="./assets/readme-assets/delete.gif" width="240px" height="240px">

<hr>

<h2>Tecnologias</h2>

<p>Este projeto foi desenvolvido usando as seguintes tecnologias</p>

![Framework Javascript utilizado para renderização dinâmica dos componentes](https://skills.thijs.gg/icons?i=vue&theme=light)

![Estilização base das tabelas e uso de botões pré-estilizados](https://skills.thijs.gg/icons?i=bootstrap&theme=light)

![Banco de dados para armazenar os produtos](https://skills.thijs.gg/icons?i=firebase&theme=light) 

![Hospedagem gratuita](https://skills.thijs.gg/icons?i=netlify&theme=light)

<hr> 
<h2>Acessando a aplicação</h2>
<p>Fiz questão de hospedar a página na Netlify, então você não precisa clonar o repositório</p>
<a target="_blank" href="https://gerenciadordeprodutos.netlify.app/">Teste aqui a aplicação!</a>

<hr>

<h2>Nota do Desenvolvedor</h2>
<p>É possível que a página ou o banco de dados fique fora do ar, isso pode acontecer por dois motivos:</p>

<li>Inatividade: como eu não costumo inspecionar projetos antigos, e sim focar em novos, pode acontecer do Netlify ou do Firestore desabilitar suas funções. Neste caso use a aba Issues para reportar, consertarei quando possível.</li>

<br/>

<li>Problemas externos: um dos serviços pode acabar fora do ar para manutenção ou por queda no servidor. Neste caso, aguarde até normalizar.</li>