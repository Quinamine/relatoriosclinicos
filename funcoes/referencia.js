const faixasEtarias=["0 - 11 meses","1 - 4 anos","5 - 14 anos","15 - 24 anos","25 - 59 anos","&ge; 60 anos"],sexo=["F","M"],Referencia={mostrarIdadeESexo(c,d){let e=document.querySelectorAll(".coluna-de-inputs"),b=document.querySelectorAll(".coluna-de-inputs input");for(let a=0;a<b.length;a++)b[a].addEventListener("focus",()=>{if(b[a].hasAttribute("readonly"))return!1;let j=b[a].parentElement,f;for(let h=0;h<e.length;h++)e[h]==j&&(f=h);let g;f<2?g=0:f<4?g=1:f<6?g=2:f<10?g=3:f<12?g=4:f<14&&(g=5);let i;i=(f+1)%2==0?1:0,c.innerHTML=faixasEtarias[g],d.innerHTML=sexo[i]})},retornarReferenciaVazia(a,b){a.innerHTML="",b.innerHTML=""},mostrarOuOmitirRef(){let a=document.querySelector(".linha-de-referencia"),b=document.querySelector(".cabecalho-da-ficha"),c=b.getBoundingClientRect().bottom;c<0?a.classList.add("on"):a.classList.remove("on")}};let outputFaixaEtaria,outputSexo;window.addEventListener("load",()=>{outputFaixaEtaria=document.querySelector("output.faixa-etaria"),outputSexo=document.querySelector("output.sexo"),Referencia.mostrarIdadeESexo(outputFaixaEtaria,outputSexo)}),window.addEventListener("click",a=>{a.target.matches("input[data-subtotal]")||Referencia.retornarReferenciaVazia(outputFaixaEtaria,outputSexo)}),window.addEventListener("scroll",()=>Referencia.mostrarOuOmitirRef())