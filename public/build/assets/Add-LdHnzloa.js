import{r as n,c as f,b as l,i as a,e as t,w as _,v as g,j as b,F as x,g as u,a as w,B as V,f as B}from"./app-BHs_qdqJ.js";import{S as C}from"./SummernoteEditor-BI4W7rFX.js";import{u as k}from"./useAxios-CvYkLGhC.js";import{i as y}from"./index-DF90ylPP.js";const N={class:"flex justify-center"},P={class:"w-full pr-1"},S={class:"p-4 shadow-lg"},T={class:"mb-5"},A={class:"editor_data"},j={class:"mt-5"},q={__name:"Add",setup(E){const{error:F,loading:i,sendRequest:r}=k(),d=B();n(null);const s=n({title:null,content:"",seo_title:null,seo_description:null,seo_image:null}),m=async()=>{await r({method:"post",url:"/v1/page",data:s.value})&&(y.success("New Page Added Successfully",{autoClose:1e3}),setTimeout(()=>{d.push("/pages")},2e3))};return(c,e)=>{const p=u("Loading"),v=u("Button");return w(),f(x,null,[l(p,{value:a(i)},null,8,["value"]),t("div",N,[t("div",P,[t("div",S,[e[5]||(e[5]=t("h3",null,"Create New Page",-1)),t("div",T,[e[2]||(e[2]=t("label",{for:"title",class:"mb-1 block text-sm"},"Page Title",-1)),_(t("input",{id:"title",type:"text",class:"p-2 rounded-md border w-full","onUpdate:modelValue":e[0]||(e[0]=o=>s.value.title=o)},null,512),[[g,s.value.title]])]),t("div",null,[e[3]||(e[3]=t("label",{for:"summery",class:"mb-1 block text-sm"},"Page Content",-1)),t("div",A,[l(a(C),{modelValue:s.value.content,"onUpdate:modelValue":e[1]||(e[1]=o=>s.value.content=o)},null,8,["modelValue"])])]),t("div",j,[l(v,{onClick:m},{default:b(()=>e[4]||(e[4]=[V("Save Page")])),_:1})])])])])],64)}}};export{q as default};
