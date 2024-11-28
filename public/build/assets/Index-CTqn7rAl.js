import{r as b,o as N,c as o,b as n,i as R,e as s,j as m,F as f,h as w,g as r,a as i,B as d,t as l,n as T}from"./app-BHs_qdqJ.js";import{u as M}from"./useAxios-CvYkLGhC.js";import{i as V}from"./index-DF90ylPP.js";const q={class:"bg-primary shadow-lg rounded-md"},D={class:"p-4"},F={class:"flex items-center justify-between"},H={class:"flex items-center gap-3"},z={class:"flex items-center justify-between bg-base-color"},E={class:"relative overflow-hidden bg-primary shadow-md"},Y={class:"overflow-x-auto"},G={class:"w-full text-sm text-left"},J={class:"hover:bg-secondary"},K={scope:"row",class:"flex items-center px-4 py-2 font-medium max-w-xs"},O=["src"],Q={class:"px-4 py-2"},U={class:"bg-primary-100 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"},W={class:"px-4 py-2 font-medium"},X={class:"px-4 py-2 font-medium"},Z={key:0},ee={key:1},se={class:"px-4 py-2 font-medium uppercase"},te={class:"px-4 py-2 font-medium uppercase"},ae={class:"px-4 py-2 font-medium uppercase"},ne={class:"px-6 py-4"},le={class:"flex items-center gap-2"},oe=["onClick"],ie={class:"p-5"},ce={class:"pagination flex justify-end"},re={class:"pagination__right"},_e={class:"pagination__right__list"},me=["onClick","innerHTML"],fe={__name:"Index",setup(de){const{loading:k,error:he,sendRequest:_}=M(),C=b(null),P=b(null),j=async()=>{const a=await _({method:"get",url:"/v1/get-all-category-list"});C.value=a==null?void 0:a.data},L=async()=>{const a=await _({method:"get",url:"/v1/get-all-brand-list"});P.value=a==null?void 0:a.data},h=b(null),A=a=>{if(!a)return 1;const t=a.match(/page=(\d+)/);return t?parseInt(t[1]):1},x=async a=>{const t=await _({method:"get",url:`/v1/product?page=${a}`});h.value=t==null?void 0:t.data},S=async a=>{await _({method:"delete",url:`/v1/product/${a}`})&&(await x(),V.success("Product Deleted Successfully",{autoClose:1e3}))};return N(()=>{j(),L(),x()}),(a,t)=>{var p,v,u;const $=r("Loading"),c=r("Icon"),g=r("RouterLink"),B=r("Search"),I=r("strike");return i(),o(f,null,[n($,{value:R(k)},null,8,["value"]),s("section",q,[s("div",D,[s("div",F,[s("div",H,[n(c,{name:"carbon:ibm-data-product-exchange",class:"text-lg"}),t[0]||(t[0]=s("h3",{class:"text-base font-medium"},"Products",-1))]),s("div",null,[n(g,{to:"/create-product",class:"border border-common bg-common px-4 py-2 flex items-center gap-2"},{default:m(()=>[n(c,{name:"material-symbols:add-box-outline"}),t[1]||(t[1]=d(" Add Record "))]),_:1})])]),s("div",z,[n(B)])]),s("div",E,[s("div",Y,[s("table",G,[t[3]||(t[3]=s("thead",{class:"text-sm uppercase bg-common"},[s("tr",null,[s("th",{scope:"col",class:"p-4"},[s("div",{class:"flex items-center"},[s("input",{id:"checkbox-all",type:"checkbox",class:"w-4 h-4 bg-secondary border-slate-500 rounded focus:ring-primary-500"}),s("label",{for:"checkbox-all",class:"sr-only"},"checkbox")])]),s("th",{scope:"col",class:"px-4 py-3"},"Product"),s("th",{scope:"col",class:"px-4 py-3"},"Category"),s("th",{scope:"col",class:"px-4 py-3"},"Stock"),s("th",{scope:"col",class:"px-4 py-3"},"Price"),s("th",{scope:"col",class:"px-4 py-3"},"Attachment"),s("th",{scope:"col",class:"px-4 py-3"},"Attachment Type"),s("th",{scope:"col",class:"px-4 py-3"},"Status"),s("th",{scope:"col",class:"px-4 py-3"},"Action")])],-1)),s("tbody",null,[(i(!0),o(f,null,w((p=h.value)==null?void 0:p.data,e=>{var y;return i(),o("tr",J,[t[2]||(t[2]=s("td",{class:"w-4 px-4 py-3"},[s("div",{class:"flex items-center"},[s("input",{id:"checkbox-table-search-1",type:"checkbox",onclick:"event.stopPropagation()",class:"w-4 h-4 bg-secondary border-slate-6600 rounded focus:ring-primary-500"}),s("label",{for:"checkbox-table-search-1",class:"sr-only"},"checkbox")])],-1)),s("th",K,[s("img",{src:e==null?void 0:e.cover_image,class:"w-auto h-8 mr-3"},null,8,O),d(" "+l(e==null?void 0:e.title),1)]),s("td",Q,[s("span",U,l((y=e==null?void 0:e.category)==null?void 0:y.name),1)]),s("td",W,l(e==null?void 0:e.stock),1),s("td",X,[e!=null&&e.discount_price?(i(),o("p",Z,[n(I,{class:"mr-1 text-red-500"},{default:m(()=>[d("৳"+l(e==null?void 0:e.price),1)]),_:2},1024),d("৳"+l(e==null?void 0:e.discount_price),1)])):(i(),o("p",ee,"৳"+l(e==null?void 0:e.price),1))]),s("td",se,l(e!=null&&e.attachment?"Yes":"No"),1),s("td",te,l(e!=null&&e.attachment_type?e==null?void 0:e.attachment_type:"No"),1),s("td",ae,l(e!=null&&e.status?"Active":"Inactive"),1),s("td",ne,[s("div",le,[n(g,{to:`/edit-product-variation/${e==null?void 0:e.slug}`,class:"w-8 h-8 rounded-md flex items-center justify-center bg-sky-500 border border-sky-900"},{default:m(()=>[n(c,{name:"material-symbols-light:rule-settings-rounded",class:"text-lg text-white"})]),_:2},1032,["to"]),n(g,{to:`/edit-product/${e==null?void 0:e.slug}`,class:"w-8 h-8 rounded-md flex items-center justify-center bg-yellow-500 border border-yellow-900"},{default:m(()=>[n(c,{name:"material-symbols:edit-square-outline",class:"text-lg text-white"})]),_:2},1032,["to"]),s("button",{onClick:xe=>S(e==null?void 0:e.id),class:"w-8 h-8 rounded-md flex items-center justify-center bg-red-500 border border-red-900"},[n(c,{name:"material-symbols:delete-outline",class:"text-lg text-white"})],8,oe)])])])}),256))])])]),s("div",ie,[s("div",ce,[s("div",re,[s("ul",_e,[(i(!0),o(f,null,w((u=(v=h.value)==null?void 0:v.meta)==null?void 0:u.links,e=>(i(),o("li",{class:T(["pagination__right__list__item",{"pagination__right__list__item--active":e==null?void 0:e.active}])},[s("button",{onClick:y=>x(A(e.url)),class:"pagination__right__list__item__link",innerHTML:e.label},null,8,me)],2))),256))])])])])])])],64)}}};export{fe as default};
