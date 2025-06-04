//const pessoas = [
//  { nome: "Jose", sobrenome: "Costa", idade: 31, foto: "https://lenscope.com.br/blog/wp-content/uploads/2019/11/culos-aviador-masculino-20-1.jpg" },
//  { nome: "Marcela", sobrenome: "Almeida", idade: 23 , foto:"https://www.creativefabrica.com/wp-content/uploads/2023/10/02/Perfect-Facial-Features-A-Photo-Portrait-Of-A-Woman-80582659-1.png"},
//  { nome: "Carla", sobrenome: "Souza", idade: 52, foto: "https://img.freepik.com/fotos-gratis/retrato-de-mulher-sorridente-em-ao-ar-livre_23-2147907068.jpg" },
 // { nome: "Bruno", sobrenome: "Pereira", idade: 19, foto: "https://blog.mensmarket.com.br/wp-content/uploads/2018/12/corte-de-cabelo-masculino-para-cada-tipo-de-rosto-4-600x600.jpg" },
 // { nome: "Amanda", sobrenome: "Costa", idade: 45, foto: "https://gente.globo.com/wp-content/uploads/2024/10/79037-gente-texto-especial-mulheres-impacto-social.jpg" },
 // { nome: "Lucas", sobrenome: "Fernandes", idade: 28, foto: "https://www.pellarin.com.br/wp-content/uploads/2022/08/artigoBannerMobile767x716_homem-com-papada-como-eliminar.jpg"},
 // { nome: "Fernanda", sobrenome: "Costa", idade: 33, foto: "https://ai-previews.123rf.com/ai-txt2img/600nwm/e51adc25-1427-4e3e-9f4f-5bdba52968d8.jpg" },
  //{ nome: "Mauricio", sobrenome: "Oliveira", idade: 41, foto: "https://img.freepik.com/fotos-premium/frente-vista-feliz-homem-ficar-contra-branca-fundo_23-2148043782.jpg" }
//];


/*function addNome() {
    var nomeDigitado = document.getElementById("nome") 
listaDeAlunos.push(nomeDigitado.value)
nomeDigitado.value = ""
nomeDigitado.focus()
ordenarCrescente()
}

function filtarPorLetra(letraDigitada) {
    var letra = letraDigitada || (letraDigitada != "" && prompt("Qual a letra?"))
    if (letra) {
        ulHTML.innerHTML = ""
        listaDeAlunos.filter(aluno => aluno.toUpperCase().includes(letra.toUpperCase())).forEach(nome => {
            var liHTML = document.createElement("li")
            liHTML.innerText = nome
            ulHTML.appendChild(liHTML)
        })
    }
    else {
        ulHTML.innerHTML = ""
        listaDeAlunos.forEach(nome => {
            var liHTML = document.createElement("li")
            liHTML.innerText = nome
            ulHTML.appendChild(liHTML)
        })
    }

}


function addNome() {
    var nomeDigitado = document.getElementById("nome").value    
listaDeAlunos.push(nomeDigitado)
ordenarCrescente()
}

*/

//var saoTodosMaiores = pessoas.every(pessoa => pessoa.idade >= 18) ? "São todos maiores" : "Existe algum menor"
//(condicional IF ternário)

//alert(saoTodosMaiores)

//cria uma janela que paga uma confrimação do usuario
//var valorAPagar = confirm("O usuario é premium?") ?  0 : 100
//se a confirmação for OK , salva o valor 0 na variavel , senao slava o valor 100

//var valorAPagar = (prompt("O usuario é premium?").toUpperCase() == "SIM")?  0 : 100
//console.log(valorAPagar)



// Array com os carros (apenas uma declaração)
  // Array com os carros
    const carros = [
      { marca: "Toyota", modelo: "Corolla", ano: 2020, cor: "Prata", foto: "https://omecanico.com.br/wp-content/uploads/2019/09/Toyota-Corolla-2020_1.jpg" },
      { marca: "Honda", modelo: "Civic", ano: 2019, cor: "Preto", foto: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2019/10/29/civic-exl-2020-15.jpg" },
      { marca: "Ford", modelo: "Ka", ano: 2018, cor: "Branco", foto: "https://s2-autoesporte.glbimg.com/fNpbDelDwCFPaDp95HWMT33JF0Y=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/H/TRaBSJQyO93gCWrznbvA/2015-12-01-novo-ford-ka.jpg" },
      { marca: "Chevrolet", modelo: "Onix", ano: 2021, cor: "Branco", foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFQLsL7APg-Y9DSBMttIto01bbHLHHn55Jk8Xe0Y9Oz7qCoN6V2tSXthLdhjmDu1leqR12QyWpO5YeMMqseHR4jo3pSfZBNUvw5fu0ioHFFWAR_BEFDZjPQxuBVAHt1Ki6Iq0zOoqkPyiM/s2048/Onix+RS+%252823%2529.jpg" },
      { marca: "Chevrolet", modelo: "Cruze", ano: 2017, cor: "Preto", foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2z2KWEn9eUz8sBlkM-BKhd3kiHGt7jstlIJv1VoSeh66Lr1LR5NnfFMGF60UJCZmmHuuT4xsfr6NYHLT7NfuNYDbr5akxYU7EF5ZR9vHAhkgf0CYctxXJNY-S4SQ1wXyU7z0xfte9znU/s1600/Novo-Chevrolet-Cruze-2017+%252813%2529.jpg" },
      { marca: "Chevrolet", modelo: "Astra", ano: 2009, cor: "Cinza", foto: "https://cdn.shopcar.com.br/stored/news/1209426840_55499.jpg" },
      { marca: "Fiat", modelo: "Palio", ano: 2008, cor: "Prata", foto: "https://tabelacarros.com/imagens/upload/2024-04-30/Fiat-Palio-Fire-Celebration-2008.webp" },
      { marca: "Renault", modelo: "Sandero", ano: 2019, cor: "Prata", foto: "https://production.autoforce.com/uploads/version/profile_image/730/model_main_webp_comprar-expression-1-6-sce_8e5ae716da.png.webp" }
    ];

    // Variáveis para armazenar os filtros ativos
    let marcaFiltro = "Todos";
    let corFiltro = "Todos";

    // Função para exibir carros com base nos filtros ativos
    function exibirCarrosFiltrados() {
      let carrosFiltrados = [...carros];
      
      // Aplicar filtro de marca
      if (marcaFiltro !== "Todos") {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.marca === marcaFiltro);
      }
      
      // Aplicar filtro de cor
      if (corFiltro !== "Todos") {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.cor.toLowerCase().includes(corFiltro.toLowerCase()));
      }
      
      exibirCarros(carrosFiltrados);
    }

    // Função para exibir carros
    function exibirCarros(carrosParaExibir) {
      const container = document.getElementById("carros-container");
      container.innerHTML = "";

      if (carrosParaExibir.length === 0) {
        container.innerHTML = '<div class="col-12 text-center">Nenhum carro encontrado</div>';
        return;
      }

      carrosParaExibir.forEach(carro => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        col.innerHTML = `
          <div class="card h-100 shadow">
            <img src="${carro.foto}" class="card-img-top" alt="${carro.marca} ${carro.modelo}" style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${carro.marca} ${carro.modelo}</h5>
              <p class="card-text">Ano: ${carro.ano}<br>Cor: ${carro.cor}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Marca: ${carro.marca}</li>
              <li class="list-group-item">Modelo: ${carro.modelo}</li>
              <li class="list-group-item">Ano: ${carro.ano}</li>
            </ul>
            <div class="card-body">
              <a href="https://www.webmotors.com.br/" class="card-link">Ver detalhes</a>
              <a href="https://wa.me/34998746384" class="card-link" target="_blank">Contato</a>
            </div>
          </div>
        `;
        container.appendChild(col);
      });
    }

    // Função para filtrar por marca
    function filtrarPorMarca(marca) {
      marcaFiltro = marca;
      exibirCarrosFiltrados();
    }

    // Função para filtrar por cor
    function filtrarPorCor(cor) {
      corFiltro = cor;
      exibirCarrosFiltrados();
    }

    // Adiciona eventos aos botões de marca
    document.querySelectorAll('[data-marca]').forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove a classe 'active' de todos os botões de marca
        document.querySelectorAll('[data-marca]').forEach(b => b.classList.remove('active'));
        // Adiciona a classe 'active' apenas ao botão clicado
        this.classList.add('active');
        // Filtra os carros
        filtrarPorMarca(this.getAttribute('data-marca'));
      });
    });

    // Adiciona eventos aos botões de cor
    document.querySelectorAll('[data-cor]').forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove a classe 'active' de todos os botões de cor
        document.querySelectorAll('[data-cor]').forEach(b => b.classList.remove('active'));
        // Adiciona a classe 'active' apenas ao botão clicado
        this.classList.add('active');
        // Filtra os carros
        filtrarPorCor(this.getAttribute('data-cor'));
      });
    });

    // Inicializa mostrando todos os carros
    document.addEventListener('DOMContentLoaded', () => {
      // Ativa o botão "Todos" de marca
      const btnTodosMarcas = document.querySelector('[data-marca="Todos"]');
      if (btnTodosMarcas) {
        btnTodosMarcas.classList.add('active');
      }
      
      // Ativa o botão "Todos" de cor
      const btnTodosCores = document.querySelector('[data-cor="Todos"]');
      if (btnTodosCores) {
        btnTodosCores.classList.add('active');
      }
      
      exibirCarrosFiltrados();
    });