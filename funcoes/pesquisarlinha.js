class Pesquisa{constructor(a,b){this.caixaDePesquisa=a,this.campoDePesquisa=b}mostrarCaixaDePesquisa(){this.caixaDePesquisa.classList.add("on"),this.campoDePesquisa.removeAttribute("readonly"),this.campoDePesquisa.focus(),""!=this.campoDePesquisa.value&&this.campoDePesquisa.select()}omitirCaixaDePesquisa(){this.caixaDePesquisa.classList.remove("on"),this.campoDePesquisa.value=""}pesquisarLinha(b){if(""==b)return this.mostrarCaixaDePesquisa(),this.resetarBgdasLinhas(),!1;if(b<1||b>53)return this.resetarBgdasLinhas(),this.omitirCaixaDePesquisa(),this.nothingFound(1),!1;let c=document.querySelectorAll(".coluna-de-enumeracao-das-linhas span"),a=b-1;if(c[a].getBoundingClientRect().bottom<0||c[a].getBoundingClientRect().top>window.innerHeight){if(a<3){let d=document.querySelector("body");d.scrollIntoView()}else c[a-3].scrollIntoView()}this.resetarBgdasLinhas(),c[a].classList.add("fundo-laranja")}nothingFound(b){let a=document.querySelector("div.query-sem-resultados");b?a.classList.add("on"):a.classList.remove("on")}resetarBgdasLinhas(){let a=document.querySelectorAll(".coluna-de-enumeracao-das-linhas span");for(let b of a)b.classList.remove("fundo-laranja")}}window.addEventListener("load",()=>{let b=document.querySelector("div.caixa-de-pesquisa"),a=document.querySelector("input.pesquisar-linha"),c=document.querySelector("button.ir-para"),d=document.querySelector("div.caixa-de-pesquisa button.fechar"),e=document.querySelector("div.query-sem-resultados button"),f=new Pesquisa(b,a);c.addEventListener("click",()=>{f.mostrarCaixaDePesquisa()}),d.addEventListener("click",()=>{f.omitirCaixaDePesquisa(),f.resetarBgdasLinhas()}),e.addEventListener("click",()=>{f.nothingFound(),f.resetarBgdasLinhas()}),a.addEventListener("keyup",()=>{f.pesquisarLinha(a.value)}),a.addEventListener("mouseup",()=>{f.pesquisarLinha(a.value)}),window.addEventListener("keyup",a=>{let b=a.key;a.ctrlKey&&"b"==b.toLowerCase()&&f.mostrarCaixaDePesquisa(),"enter"==b.toLocaleLowerCase()&&e.parentElement.classList.contains("on")&&(f.nothingFound(),f.resetarBgdasLinhas())})})