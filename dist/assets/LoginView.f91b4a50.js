import{u as m,r as n,d as _,e as p,f as e,m as h,i as r,j as c,n as b,K as f}from"./index.882c7339.js";const v={class:"hero min-h-screen bg-base-200"},x={class:"hero-content"},w={class:"card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"},g={class:"card-body"},y=e("h1",{class:"text-3xl font-bold text-center"},"Farm\xE1cia UFRJ",-1),S=e("p",{class:"text-center my-4"}," Acesso exclusivo da Coordena\xE7\xE3o e Secretaria Acad\xEAmica de gradua\xE7\xE3o ",-1),E=["onSubmit"],V={class:"form-control"},k=e("label",{class:"label"},[e("span",{class:"label-text"},"E-mail")],-1),A={class:"form-control"},B=e("label",{class:"label"},[e("span",{class:"label-text"},"Senha")],-1),U={class:"form-control mt-6"},F={__name:"LoginView",setup(j){const d=m(),a=n(!1),t=n("secretariaffufrj@gmail.com"),o=n("@farmacia1937"),u=async()=>{a.value=!0;try{await f.loginWithEmailAndPassword(t.value,o.value),d.replace({name:"admin"})}catch(i){console.log(i)}finally{a.value=!1}};return(i,s)=>(_(),p("div",v,[e("div",x,[e("div",w,[e("div",g,[y,S,e("form",{onSubmit:h(u,["prevent"])},[e("div",V,[k,r(e("input",{type:"eamil",class:"input input-bordered",required:"","onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l)},null,512),[[c,t.value]])]),e("div",A,[B,r(e("input",{type:"password",class:"input input-bordered","onUpdate:modelValue":s[1]||(s[1]=l=>o.value=l)},null,512),[[c,o.value]])]),e("div",U,[e("button",{type:"submit",class:b(["btn btn-primary",a.value&&"loading"])}," Entrar ",2)])],40,E)])])])]))}};export{F as default};