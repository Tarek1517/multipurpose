import{r as A,o as B,c as o,b as n,i as I,j as r,F as u,g as d,a,e,B as N,h as w,t as m,n as $}from"./app-BHs_qdqJ.js";import{u as M}from"./useAxios-CvYkLGhC.js";import{i as R}from"./index-DF90ylPP.js";const T={class:"bg-primary rounded-lg shadow-lg"},V={class:"p-4"},q={class:"flex items-center justify-between"},D={class:"flex items-center gap-2"},F={class:"relative overflow-x-auto"},H={class:"w-full text-sm text-left rtl:text-right"},P={class:"hover:bg-secondary"},S={class:"flex items-center px-6 py-4"},z=["src","alt"],E={class:"px-6 py-4"},O=["src","alt"],G={class:"px-6 py-4 whitespace-nowrap"},J={class:"font-medium"},K={class:"px-6 py-4 text-center"},Q={class:"px-6 py-4 text-center"},U={key:0,class:"bg-green-500 rounded-full px-3 py-1 text-xs"},W={key:1,class:"bg-yellow-500 rounded-full px-3 py-1 text-xs"},X={class:"px-6 py-4"},Y={class:"flex items-center gap-2"},Z=["onClick"],y={class:"p-5"},ss={class:"pagination flex justify-end"},es={class:"pagination__right"},ts={class:"pagination__right__list"},ns=["onClick","innerHTML"],_s={__name:"Index",setup(ls){const{loading:C,error:os,sendRequest:h}=M(),c=A(null),L=l=>{if(!l)return 1;const t=l.match(/page=(\d+)/);return t?parseInt(t[1]):1},_=async l=>{const t=await h({method:"get",url:`/v1/category?page=${l}`});console.log(t),c.value=t==null?void 0:t.data},k=async l=>{await h({method:"delete",url:`/v1/category/${l}`})&&(await _(),R.success("Category Deleted Successfully",{autoClose:1e3}))};return B(()=>{_()}),(l,t)=>{const g=d("Loading"),i=d("Icon"),x=d("RouterLink"),j=d("AppLayout");return a(),o(u,null,[n(g,{value:I(C)},null,8,["value"]),n(j,null,{default:r(()=>{var f,b,v;return[e("section",T,[e("div",V,[e("div",q,[e("div",D,[n(i,{name:"tabler:category",class:"text-xl"}),t[0]||(t[0]=e("h3",{class:"text-base font-medium"},"Category",-1))]),e("div",null,[n(x,{to:"/create-category",class:"bg-common border border-common px-5 py-2 flex items-center gap-2"},{default:r(()=>[n(i,{name:"material-symbols:add-box-outline"}),t[1]||(t[1]=N(" Add Record "))]),_:1})])])]),e("div",F,[e("table",H,[t[2]||(t[2]=e("thead",{class:"text-sm uppercase bg-common"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Icon "),e("th",{scope:"col",class:"px-6 py-3"}," Banner "),e("th",{scope:"col",class:"px-6 py-3"}," Name "),e("th",{scope:"col",class:"px-6 py-3"}," Order Number "),e("th",{scope:"col",class:"px-6 py-3"}," Parent Category "),e("th",{scope:"col",class:"px-6 py-3"}," Action ")])],-1)),e("tbody",null,[(a(!0),o(u,null,w((f=c.value)==null?void 0:f.data,s=>{var p;return a(),o("tr",P,[e("th",S,[e("img",{class:"w-10 h-auto",src:s==null?void 0:s.icon,alt:s==null?void 0:s.name},null,8,z)]),e("td",E,[e("img",{src:s==null?void 0:s.banner,class:"w-16 md:w-32 h-auto lg:h-12 max-w-full max-h-full",alt:s==null?void 0:s.name},null,8,O)]),e("th",G,[e("div",null,[e("div",J,m(s==null?void 0:s.name),1)])]),e("td",K,m(s==null?void 0:s.order_number),1),e("td",Q,[(s==null?void 0:s.parent_id)===0?(a(),o("span",U,"Main")):(a(),o("span",W,m((p=s==null?void 0:s.parent)==null?void 0:p.name),1))]),e("td",X,[e("div",Y,[n(x,{to:`/edit-category/${s==null?void 0:s.id}`,class:"w-8 h-8 rounded-md flex items-center justify-center bg-yellow-500 border border-yellow-900"},{default:r(()=>[n(i,{name:"material-symbols:edit-square-outline",class:"text-lg"})]),_:2},1032,["to"]),e("button",{onClick:as=>k(s==null?void 0:s.id),class:"w-8 h-8 rounded-md flex items-center justify-center bg-red-500 border border-red-900"},[n(i,{name:"material-symbols:delete-outline",class:"text-lg"})],8,Z)])])])}),256))])])]),e("div",y,[e("div",ss,[e("div",es,[e("ul",ts,[(a(!0),o(u,null,w((v=(b=c.value)==null?void 0:b.meta)==null?void 0:v.links,s=>(a(),o("li",{class:$(["pagination__right__list__item",{"pagination__right__list__item--active":s==null?void 0:s.active}])},[e("button",{onClick:p=>_(L(s.url)),class:"pagination__right__list__item__link",innerHTML:s.label},null,8,ns)],2))),256))])])])])])]}),_:1})],64)}}};export{_s as default};
