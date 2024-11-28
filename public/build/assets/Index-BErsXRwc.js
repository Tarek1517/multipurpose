import{r as m,o as G,c as p,b as r,i as O,e,F as N,h as T,w as a,v as n,j as c,H as b,k as h,g as V,a as u,n as J,t as f,B as C}from"./app-BHs_qdqJ.js";import{S as K}from"./SummernoteEditor-BI4W7rFX.js";import{u as Q}from"./useAxios-CvYkLGhC.js";import{i as A}from"./index-DF90ylPP.js";import{_ as X}from"./Modal-C7JLu2cj.js";const Z={class:"p-4"},ee={class:"flex items-center justify-between mb-5"},le={class:"flex items-center gap-2"},te={class:"flex space-x-2"},se={class:"w-1/5"},oe={class:"border border-common rounded overflow-hidden"},ae=["onClick"],ne={class:"w-4/5"},ue={class:"w-full border border-common rounded p-2"},de={key:0,class:"w-full flex flex-wrap"},re={class:"w-1/2 px-2 mb-2"},ie={class:"w-1/2 px-2 mb-2"},me={class:"w-1/2 px-2 mb-2"},pe={class:"w-1/2 px-2 mb-2"},ce={class:"w-1/2 px-2 mb-2"},be={class:"w-1/2 px-2 mb-2"},ve={class:"w-1/2 px-2 mb-2"},fe={class:"w-1/2 px-2 mb-2"},_e={class:"w-1/2 px-2 mb-2"},xe={class:"w-1/2 px-2 mb-2"},we={class:"w-1/2 px-2 mb-2"},ye={class:"w-1/2 px-2 mb-2"},ge={class:"w-full mt-5"},ke={key:1,class:"w-full flex flex-wrap gap-4"},he={class:"w-full"},Ve={class:"flex items-start py-1"},Ce={class:"flex items-center justify-between w-full"},Se={class:"me-1 flex items-center gap-2"},Ue=["src"],Fe={class:"mb-25"},Ne={class:"w-full"},Ae={key:2,class:"w-full flex flex-wrap gap-4"},je={class:"w-full"},Be={class:"flex items-start py-1"},He={class:"flex items-center justify-between w-full"},Me={class:"me-1 flex items-center gap-2"},Oe=["src"],Te={class:"mb-25"},Ie={class:"w-full"},Pe={class:"flex items-start py-1"},De={class:"flex items-center justify-between w-full"},Le={class:"me-1 flex items-center gap-2"},$e=["src"],Ee={class:"mb-25"},qe={class:"w-full"},ze={key:3,class:"w-full"},Re={class:"relative overflow-x-auto"},We={class:"w-full text-sm text-left rtl:text-right"},Ye={class:"hover:bg-secondary"},Ge={class:"px-6 py-4"},Je={class:"px-6 py-4"},Ke={class:"px-6 py-4"},Qe={class:"flex items-center gap-2"},Xe=["onClick"],Ze={class:"flex flex-col gap-2"},el={class:"w-full"},ll={class:"w-full"},tl={class:"full flex space-x-2"},sl={class:"w-1/2"},ol={class:"w-full"},al={class:"editor_data footer-content"},nl={class:"w-full mt-5"},vl={__name:"Index",setup(ul){const{loading:I,error:dl,sendRequest:i}=Q(),j=async()=>{const o=await i({method:"get",url:"/v1/setting"});s.value.header_categories=o.data.header_categories,s.value.currency=o.data.currency,s.value.currency_symbol=o.data.currency_symbol,s.value.email=o.data.email,s.value.phone_number=o.data.phone_number,s.value.whatsapp_number=o.data.whatsapp_number,s.value.hotline_number=o.data.hotline_number,s.value.facebook_link=o.data.facebook_link,s.value.instagram_link=o.data.instagram_link,s.value.youtube_link=o.data.youtube_link,s.value.linkedin_link=o.data.linkedin_link,s.value.app_name=o.data.app_name,s.value.app_url=o.data.app_url,s.value.home_products=o.data.home_products,s.value.top_categories=o.data.top_categories},_=m(null),P=async()=>{const o=await i({method:"get",url:"/v1/get-all-category-list"});o&&(_.value=o.data)},S=m(null),D=async()=>{const o=await i({method:"get",url:"/v1/product"});o&&(S.value=o.data)},x=m(null),L=async()=>{const o=await i({method:"get",url:"/v1/all-page-list"});o&&(x.value=o.data)},$=["App","Header","Home","Footer"],v=m(0),s=m({header_categories:[],home_products:null,top_categories:null,currency:null,currency_symbol:null,email:null,phone_number:null,whatsapp_number:null,hotline_number:null,facebook_link:null,youtube_link:null,instagram_link:null,linkedin_link:null,app_name:null}),U=async()=>{await i({method:"post",url:"/v1/save-header-setting",data:s.value})&&(A.success("Setting saved Successfully"),j())},B=m(null),F=async()=>{const o=await i({method:"get",url:"/v1/footer"});o&&(B.value=o.data)},d=m({title:null,pages:null,content:null,width:null,order_number:null}),E=()=>{title.value=null,x.value=null,content.value=null,order_number.value=null},q=async()=>{await i({method:"post",url:"/v1/footer",data:d.value})&&(A.success("Footer save successfully"),F(),w.value=!1,E())},z=async o=>{await i({method:"delete",url:`/v1/footer/${o}`})&&(A.success("Footer Column Deleted Successfully"),F())},w=m(!1),R=()=>{w.value=!0},W=()=>{w.value=!1};return G(()=>{P(),L(),j(),F(),D()}),(o,l)=>{var M;const Y=V("Loading"),H=V("Icon"),y=V("Button"),g=V("Select");return u(),p(N,null,[r(Y,{value:O(I)},null,8,["value"]),e("section",null,[e("div",Z,[e("div",ee,[e("div",le,[r(H,{name:"material-symbols:settings-outline-rounded",class:"text-lg"}),l[19]||(l[19]=e("h3",{class:"text-base font-medium"},"Setting",-1))])]),e("div",te,[e("div",se,[e("ul",oe,[(u(),p(N,null,T($,(t,k)=>e("li",{key:k},[e("button",{onClick:rl=>v.value=k,class:J(["px-4 py-2  w-full border-b border-common",v.value===k?" bg-common      ":"text-black"])},f(t),11,ae)])),64))])]),e("div",ne,[e("div",ue,[v.value===0?(u(),p("div",de,[e("div",re,[l[20]||(l[20]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"App Url",-1)),a(e("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>s.value.app_url=t),readonly:"",type:"text",class:"p-2 rounded-md w-full"},null,512),[[n,s.value.app_url]])]),e("div",ie,[l[21]||(l[21]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"App Name",-1)),a(e("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>s.value.app_name=t),type:"text",class:"p-2 rounded-md w-full"},null,512),[[n,s.value.app_name]])]),e("div",me,[l[22]||(l[22]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"Hotline Number",-1)),a(e("input",{"onUpdate:modelValue":l[2]||(l[2]=t=>s.value.hotline_number=t),type:"text",class:"p-2 rounded-md w-full"},null,512),[[n,s.value.hotline_number]])]),e("div",pe,[l[23]||(l[23]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"Phone Number",-1)),a(e("input",{"onUpdate:modelValue":l[3]||(l[3]=t=>s.value.phone_number=t),type:"text",class:"p-2 rounded-md w-full"},null,512),[[n,s.value.phone_number]])]),e("div",ce,[l[24]||(l[24]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"Whatsapp Number",-1)),a(e("input",{"onUpdate:modelValue":l[4]||(l[4]=t=>s.value.whatsapp_number=t),type:"text",class:"p-2 rounded-md w-full"},null,512),[[n,s.value.whatsapp_number]])]),e("div",be,[l[25]||(l[25]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"Email",-1)),a(e("input",{"onUpdate:modelValue":l[5]||(l[5]=t=>s.value.email=t),type:"text",class:"p-2 rounded-md w-full"},null,512),[[n,s.value.email]])]),e("div",ve,[l[26]||(l[26]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"Facebook",-1)),a(e("input",{"onUpdate:modelValue":l[6]||(l[6]=t=>s.value.facebook_link=t),type:"text",class:"p-2 rounded-md w-full"},null,512),[[n,s.value.facebook_link]])]),e("div",fe,[l[27]||(l[27]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"Instagram",-1)),a(e("input",{"onUpdate:modelValue":l[7]||(l[7]=t=>s.value.instagram_link=t),type:"text",class:"p-2 rounded-md w-full"},null,512),[[n,s.value.instagram_link]])]),e("div",_e,[l[28]||(l[28]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"Linked In",-1)),a(e("input",{"onUpdate:modelValue":l[8]||(l[8]=t=>s.value.linkedin_link=t),type:"text",class:"p-2 rounded-md w-full"},null,512),[[n,s.value.linkedin_link]])]),e("div",xe,[l[29]||(l[29]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"Youtube",-1)),a(e("input",{"onUpdate:modelValue":l[9]||(l[9]=t=>s.value.youtube_link=t),type:"text",class:"p-2 rounded-md w-full"},null,512),[[n,s.value.youtube_link]])]),e("div",we,[l[30]||(l[30]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"Currency",-1)),a(e("input",{type:"text",class:"p-2 rounded-md w-full","onUpdate:modelValue":l[10]||(l[10]=t=>s.value.currency=t)},null,512),[[n,s.value.currency]])]),e("div",ye,[l[31]||(l[31]=e("label",{for:"app-url",class:"text-xs mb-1 block"},"Currency Symbol",-1)),a(e("input",{type:"text",class:"p-2 rounded-md w-full","onUpdate:modelValue":l[11]||(l[11]=t=>s.value.currency_symbol=t)},null,512),[[n,s.value.currency_symbol]])]),l[33]||(l[33]=e("div",{class:"w-full px-2 mb-2"},[e("label",{for:"app-url",class:"text-xs mb-1 block"},"Chat Script"),e("textarea",{class:"p-2 w-full focus:outline-none focus:ring-0 focus:border-common rounded ring-0 bg-secondary border border-common shadow-md shadow-common/50 transition-all ease-in-out duration-100"})],-1)),e("div",ge,[r(y,{onClick:U,class:"rounded"},{default:c(()=>l[32]||(l[32]=[C("Save Header Setting")])),_:1})])])):b("",!0),v.value===1?(u(),p("div",ke,[e("div",he,[l[34]||(l[34]=e("label",{for:"header-category",class:"text-xs mb-1 block"},"Header Category",-1)),_.value?(u(),h(g,{key:0,label:"name",options:_.value,reduce:t=>t.id,modelValue:s.value.header_categories,"onUpdate:modelValue":l[12]||(l[12]=t=>s.value.header_categories=t),multiple:""},{option:c(t=>[e("li",Ve,[e("div",Ce,[e("div",Se,[e("img",{src:t==null?void 0:t.icon,class:"w-12 h-12"},null,8,Ue),e("h6",Fe,f(t==null?void 0:t.name),1)])])])]),_:1},8,["options","reduce","modelValue"])):b("",!0)]),e("div",Ne,[r(y,{onClick:U,class:"rounded"},{default:c(()=>l[35]||(l[35]=[C("Save Header Setting")])),_:1})])])):b("",!0),v.value===2?(u(),p("div",Ae,[e("div",je,[l[36]||(l[36]=e("label",{for:"header-category",class:"text-xs mb-1 block"},"Select Our Products",-1)),S.value?(u(),h(g,{key:0,label:"title",options:(M=S.value)==null?void 0:M.data,reduce:t=>t.id,modelValue:s.value.home_products,"onUpdate:modelValue":l[13]||(l[13]=t=>s.value.home_products=t),multiple:""},{option:c(t=>[e("li",Be,[e("div",He,[e("div",Me,[e("img",{src:t==null?void 0:t.cover_image,class:"w-12 h-12"},null,8,Oe),e("h6",Te,f(t==null?void 0:t.title),1)])])])]),_:1},8,["options","reduce","modelValue"])):b("",!0)]),e("div",Ie,[l[37]||(l[37]=e("label",{for:"header-category",class:"text-xs mb-1 block"},"Top Categories",-1)),_.value?(u(),h(g,{key:0,label:"name",options:_.value,reduce:t=>t.id,modelValue:s.value.top_categories,"onUpdate:modelValue":l[14]||(l[14]=t=>s.value.top_categories=t),multiple:""},{option:c(t=>[e("li",Pe,[e("div",De,[e("div",Le,[e("img",{src:t==null?void 0:t.icon,class:"w-12 h-12"},null,8,$e),e("h6",Ee,f(t==null?void 0:t.name),1)])])])]),_:1},8,["options","reduce","modelValue"])):b("",!0)]),e("div",qe,[r(y,{onClick:U,class:"rounded"},{default:c(()=>l[38]||(l[38]=[C("Save Setting")])),_:1})])])):b("",!0),v.value===3?(u(),p("div",ze,[e("div",{class:"flex items-center justify-between mb-2"},[l[39]||(l[39]=e("h3",null,"Footer",-1)),e("button",{class:"text-xs bg-common px-3 py-1.5 rounded",onClick:R},"Add New")]),e("div",Re,[e("table",We,[l[40]||(l[40]=e("thead",{class:"text-xs uppercase bg-common"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Column Title "),e("th",{scope:"col",class:"px-6 py-3"}," Order Number "),e("th",{scope:"col",class:"px-6 py-3"}," Action ")])],-1)),e("tbody",null,[(u(!0),p(N,null,T(B.value,t=>(u(),p("tr",Ye,[e("td",Ge,f(t==null?void 0:t.title),1),e("th",Je,f(t==null?void 0:t.order_number),1),e("td",Ke,[e("div",Qe,[e("button",{onClick:k=>z(t==null?void 0:t.id),class:"w-8 h-8 rounded-md flex items-center justify-center bg-red-500 border border-red-900"},[r(H,{name:"material-symbols:delete-outline",class:"text-lg"})],8,Xe)])])]))),256))])])])])):b("",!0)])])])])]),r(X,{title:"Add New Footer Column",isOpen:w.value,onModalClose:W},{default:c(()=>[e("div",Ze,[e("div",el,[l[41]||(l[41]=e("label",{for:"title",class:"text-xs block mb-1"},"Column Title",-1)),a(e("input",{type:"text",class:"p-2 rounded border w-full","onUpdate:modelValue":l[15]||(l[15]=t=>d.value.title=t)},null,512),[[n,d.value.title]])]),e("div",ll,[l[42]||(l[42]=e("label",{for:"title",class:"text-xs block mb-1"},"Column Pages",-1)),x.value?(u(),h(g,{key:0,label:"title",options:x.value,reduce:t=>t.id,multiple:"",modelValue:d.value.pages,"onUpdate:modelValue":l[16]||(l[16]=t=>d.value.pages=t)},null,8,["options","reduce","modelValue"])):b("",!0)]),e("div",tl,[e("div",sl,[l[43]||(l[43]=e("label",{for:"title",class:"text-xs block mb-1"},"Order Number",-1)),a(e("input",{type:"text",class:"p-2 rounded border w-full","onUpdate:modelValue":l[17]||(l[17]=t=>d.value.order_number=t)},null,512),[[n,d.value.order_number]])])]),e("div",ol,[l[44]||(l[44]=e("label",{for:"title",class:"text-xs block mb-1"},"Column Content",-1)),e("div",al,[r(O(K),{modelValue:d.value.content,"onUpdate:modelValue":l[18]||(l[18]=t=>d.value.content=t)},null,8,["modelValue"])])]),e("div",nl,[r(y,{onClick:q,class:"w-full"},{default:c(()=>l[45]||(l[45]=[C("Save Footer Column")])),_:1})])])]),_:1},8,["isOpen"])],64)}}};export{vl as default};
