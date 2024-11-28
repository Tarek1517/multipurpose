import{r as d,c as n,b as u,e as l,w as i,v as m,H as c,F as w,g as p,a,f as y}from"./app-BHs_qdqJ.js";import{u as k}from"./useAxios-CvYkLGhC.js";import{i as S}from"./index-DF90ylPP.js";const h={class:"p-4 shadow-lg rounded-lg max-w-3xl mx-auto"},C={class:"flex flex-col gap-5"},U={class:"w-full"},I={class:"w-full flex gap-5"},L={class:"w-full"},N={for:"slider-image",class:"border border-common border-dashed p-4 rounded-2xl flex items-center justify-center w-full h-72 cursor-pointer"},R=["src"],V={key:1,class:"flex flex-col items-center justify-center gap-2"},T={__name:"Add",setup(j){const f=y(),{loadin:A,error:B,sendRequest:b}=k(),o=d(null),v=t=>{const e=t.target.files[0];s.value.image=e,o.value=URL.createObjectURL(e)},s=d({url:null,image:null,order_number:null}),g=async()=>{await b({url:"/v1/slider",method:"post",data:s.value,headers:{"Content-Type":"multipart/form-data"}})&&(S.success("Slider Created Successfully"),f.push("/slider"))};return(t,e)=>{const x=p("Loading"),_=p("Icon");return a(),n(w,null,[u(x,{value:t.loading},null,8,["value"]),l("div",h,[e[6]||(e[6]=l("h3",{class:"text-base mb-5"},"Add New Home Slider",-1)),l("div",C,[l("div",U,[e[2]||(e[2]=l("label",{for:"url",class:"text-sm block mb-1"},"URL",-1)),i(l("input",{type:"text",class:"p-2 rounded-md border w-full","onUpdate:modelValue":e[0]||(e[0]=r=>s.value.url=r)},null,512),[[m,s.value.url]])]),l("div",I,[l("div",null,[e[3]||(e[3]=l("label",{for:"url",class:"text-sm block mb-1"},"Order Number",-1)),i(l("input",{type:"number",class:"p-2 rounded-md border w-full","onUpdate:modelValue":e[1]||(e[1]=r=>s.value.order_number=r)},null,512),[[m,s.value.order_number]])])]),l("div",L,[e[5]||(e[5]=l("label",{for:"slider-image",class:"text-sm block mb-2"},"Slider Image",-1)),l("label",N,[o.value?(a(),n("img",{key:0,src:o.value,class:"w-full h-full rounded-md"},null,8,R)):c("",!0),o.value?c("",!0):(a(),n("div",V,[u(_,{name:"tabler:cloud-upload",class:"text-common text-5xl opacity-85"}),e[4]||(e[4]=l("span",{class:"text-common font-semibold opacity-85"},"Upload Slider Image",-1))])),l("input",{id:"slider-image",onChange:v,type:"file",hidden:""},null,32)])]),l("div",null,[l("button",{onClick:g,class:"bg-common text-center w-full py-2 rounded"},"Save Slider")])])])],64)}}};export{T as default};
