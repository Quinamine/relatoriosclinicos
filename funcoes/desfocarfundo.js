const Desfoque={_100Viewport(){desfoque.classList.add("on")},abaixoDoCabecalho(){desfoque.classList.add("on"),desfoque.classList.add("parcial")}},Foco={_100Viewport(){let b=0;for(let a=0;a<janelasDesfocantes.length;a++)janelasDesfocantes[a].classList.contains("on")&&b++;if(0!=b)return!1;desfoque.classList.remove("on")},destacarConteudo(a){let b=document.querySelectorAll("header section.menu, article#politica-de-cookies, article#sobre, article#conversao-pdf");for(let c of b)c.classList.remove("z-index-10");a.classList.add("z-index-10")}};let desfoque,janelasDesfocantes;window.addEventListener("load",()=>{desfoque=document.querySelector(".desfoque-do-fundo"),janelasDesfocantes=document.querySelectorAll("div.caixa-de-confirmacao, .atalhos-do-teclado, article#politica-de-cookies, article#sobre, div.hamburguer, .aviso-de-uso-de-cookies")})