import{u as B,s as he,a as oe,j as o,b as we,c as ye,r as x,d as xe,e as Ee,N as Oe,f as Re,g as Te,h as Se,i as Ae,k as Ce,l as Be,m as ze,n as Ie,o as Pe,p as De,q as $e,t as Fe}from"./index-dad48c32.js";import{t as qe}from"./typeOptions-cd9758bc.js";function ke(r){var g,c,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var d=r.length;for(g=0;g<d;g++)r[g]&&(c=ke(r[g]))&&(s&&(s+=" "),s+=c)}else for(c in r)r[c]&&(s&&(s+=" "),s+=c);return s}function me(){for(var r,g,c=0,s="",d=arguments.length;c<d;c++)(r=arguments[c])&&(g=ke(r))&&(s&&(s+=" "),s+=g);return s}const _e=["Всі","Самий ТОП","М'ясні","Вегетаріанські","Гострі","Спецпропозиції"],He="_list_1gj6e_1",Me="_btn_1gj6e_8",Ue="_active_1gj6e_24",Ve="_titleCategory_1gj6e_47",ge={list:He,btn:Me,active:Ue,titleCategory:Ve},Ke=()=>{const r=B(he),g=oe(),c=s=>{g(we(s))};return o.jsx("div",{children:o.jsx("ul",{className:ge.list,children:_e.map((s,d)=>o.jsx("li",{children:o.jsx("button",{onClick:()=>c(d),className:me(ge.btn,{[ge.active]:r===d}),children:s})},d))})})},We=[{name:"популярностю",value:"rating"},{name:"алфавітом (DESC)",value:"title"},{name:"алфавітом (ASC)",value:"-title"},{name:"ціною ⬆",value:"price"},{name:"ціною ⬇",value:"-price"}],Je="_sort_7ai7w_1",Ge="_sortLabel_7ai7w_6",Ze="_sortPopap_7ai7w_20",Ye="_active_7ai7w_43",Xe="_svg_7ai7w_47",Qe="_rotated_7ai7w_53",se={sort:Je,sortLabel:Ge,sortPopap:Ze,active:Ye,svg:Xe,rotated:Qe},et=()=>{const r=oe(),g=B(ye),[c,s]=x.useState(!1),[d,h]=x.useState(!1),L=x.useRef(),p=t=>{r(Ee(t)),s(!1),h(!1)},f=t=>{L.current&&!L.current.contains(t.target)&&(s(!1),h(!1))};x.useEffect(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}),[]);const P=()=>{s(!c),h(!d)};return o.jsxs("div",{className:se.sort,ref:L,children:[o.jsxs("div",{className:se.sortLabel,children:[o.jsx("svg",{className:`${se.svg} ${d?se.rotated:""}`,width:"16",height:"16",children:o.jsx("use",{href:`${xe}#icon-circle-up`})}),o.jsx("b",{children:"Сортування за:"}),o.jsx("span",{onClick:P,children:g.name})]}),c&&o.jsx("div",{className:se.sortPopap,children:o.jsx("ul",{children:We.map((t,S)=>o.jsx("li",{onClick:()=>p(t),className:g.name===t.name?se.active:"",children:t.name},S))})})]})},tt="_wrapper_ijsik_1",at={wrapper:tt},rt=()=>o.jsxs("div",{className:at.wrapper,children:[o.jsx(Ke,{}),o.jsx(et,{})]});/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var X=function(){return X=Object.assign||function(g){for(var c,s=1,d=arguments.length;s<d;s++){c=arguments[s];for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&(g[h]=c[h])}return g},X.apply(this,arguments)};function nt(r,g){var c={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&g.indexOf(s)<0&&(c[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(r);d<s.length;d++)g.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(r,s[d])&&(c[s[d]]=r[s[d]]);return c}var st=function(){return Math.random().toString(36).substring(6)},it=function(r){var g=r.animate,c=g===void 0?!0:g,s=r.backgroundColor,d=s===void 0?"#f5f6f7":s,h=r.backgroundOpacity,L=h===void 0?1:h,p=r.baseUrl,f=p===void 0?"":p,P=r.children,t=r.foregroundColor,S=t===void 0?"#eee":t,F=r.foregroundOpacity,k=F===void 0?1:F,w=r.gradientRatio,q=w===void 0?2:w,ae=r.uniqueKey,C=r.rtl,I=C===void 0?!1:C,V=r.speed,le=V===void 0?1.2:V,K=r.style,re=K===void 0?{}:K,R=r.title,Q=R===void 0?"Loading...":R,E=r.beforeMask,ee=E===void 0?null:E,ue=nt(r,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),n=ae||st(),i="".concat(n,"-diff"),m="".concat(n,"-animated-diff"),v="".concat(n,"-aria"),M=I?{transform:"scaleX(-1)"}:null,U="".concat(le,"s"),A="".concat(q*-1," 0"),a="".concat(q," 0");return x.createElement("svg",X({"aria-labelledby":v,role:"img",style:X(X({},re),M)},ue),Q?x.createElement("title",{id:v},Q):null,ee&&x.isValidElement(ee)?ee:null,x.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(f,"#").concat(i,")"),style:{fill:"url(".concat(f,"#").concat(m,")")}}),x.createElement("defs",null,x.createElement("clipPath",{id:i},P),x.createElement("linearGradient",{id:m,gradientTransform:"translate(".concat(A,")")},x.createElement("stop",{offset:"0%",stopColor:d,stopOpacity:L}),x.createElement("stop",{offset:"50%",stopColor:S,stopOpacity:k}),x.createElement("stop",{offset:"100%",stopColor:d,stopOpacity:L}),c&&x.createElement("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(A,"; 0 0; ").concat(a),dur:U,repeatCount:"indefinite"}))))},Ne=function(r){return r.children?x.createElement(it,X({},r)):x.createElement(ot,X({},r))},ot=function(r){return x.createElement(Ne,X({viewBox:"0 0 476 124"},r),x.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),x.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),x.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),x.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),x.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),x.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const lt=Ne,ct=r=>o.jsxs(lt,{speed:2,width:280,height:558,viewBox:"0 0 280 558",backgroundColor:"#e4e2e2",foregroundColor:"#cbc3c3",...r,children:[o.jsx("rect",{x:"16",y:"378",rx:"16",ry:"16",width:"248",height:"86"}),o.jsx("rect",{x:"70",y:"330",rx:"16",ry:"16",width:"140",height:"26"}),o.jsx("rect",{x:"16",y:"498",rx:"16",ry:"16",width:"248",height:"42"}),o.jsx("circle",{cx:"138",cy:"143",r:"124"}),o.jsx("rect",{x:"42",y:"281",rx:"16",ry:"16",width:"200",height:"24"})]}),ve="/pizza-app/assets/pizza-default-60d5aa70.jpg",pt="_wrapper_5164b_1",ut="_wrapperImg_5164b_33",dt="_contentBox_5164b_48",gt="_selector_5164b_60",ft="_wrapperPrice_5164b_63",mt="_listTypes_5164b_72",ht="_listSizes_5164b_77",vt="_ingredients_5164b_89",bt="_title_5164b_107",yt="_itemTypes_5164b_128",xt="_active_5164b_138",Ct="_itemSizes_5164b_156",Pt="_priceText_5164b_178",kt="_addBtn_5164b_192",_t="_svgBtn_5164b_211",O={wrapper:pt,wrapperImg:ut,contentBox:dt,selector:gt,wrapperPrice:ft,listTypes:mt,listSizes:ht,ingredients:vt,title:bt,itemTypes:yt,active:xt,itemSizes:Ct,priceText:Pt,addBtn:kt,svgBtn:_t},Nt=({item:r})=>{const{imageUrl:g,title:c,types:s,sizes:d,price:h,ingredients:L,id:p}=r,f=oe(),P=B(C=>C.cart.items.find(I=>I.id===p)),[t,S]=x.useState(0),[F,k]=x.useState(0),w=P?P.count:0,q=C=>{C.target.src=ve},ae=()=>{const C={id:p,title:c,price:h,imageUrl:g,type:s[t],size:d[F]};f(Re(C))};return o.jsxs("li",{className:O.wrapper,children:[o.jsx(Oe,{className:O.wrapperImg,to:`item/${p}`,children:o.jsx("img",{className:O.img,src:g||ve,alt:c,onError:q,loading:"lazy"})}),o.jsxs("div",{className:O.contentBox,children:[o.jsx("div",{className:O.title,children:c}),o.jsxs("div",{className:O.selector,children:[o.jsx("ul",{className:O.listTypes,children:s.map(C=>o.jsx("li",{onClick:()=>S(C),className:me(O.itemTypes,{[O.active]:t===C}),children:qe[C]},C))}),o.jsx("ul",{className:O.listSizes,children:d.map((C,I)=>o.jsxs("li",{onClick:()=>k(I),className:me(O.itemSizes,{[O.active]:F===I}),children:[C," см"]},I))})]}),o.jsxs("div",{className:O.wrapperPrice,children:[o.jsxs("div",{className:O.priceText,children:[" ",h," грн"]}),o.jsxs("button",{className:O.addBtn,onClick:ae,children:[o.jsx("svg",{className:O.svgBtn,width:"12",height:"12",children:o.jsx("use",{href:`${xe}#icon-plus`})}),"Додати",w>0&&o.jsx("i",{children:w})]})]})]}),o.jsx("p",{className:O.ingredients,children:L})]})},Lt="/pizza-app/assets/notFound-b07ea814.webp",jt="_pizzaTitle_kwnm3_1",wt="_wrapper_kwnm3_12",Et="_notFound_kwnm3_20",fe={pizzaTitle:jt,wrapper:wt,notFound:Et},Ot=()=>{const r=B(he),g=B(Te),c=B(Se),s=B(Ae),d=B(Ce),h=d.toLowerCase(),L=c.filter(t=>t.title.toLowerCase().includes(h)),p=[...new Array(6)].map((t,S)=>o.jsx(ct,{},S)),P=(d===""?g:L).map(t=>o.jsx(Nt,{item:t},t.id));return o.jsxs(o.Fragment,{children:[o.jsx("h2",{className:fe.pizzaTitle,children:_e[r]}),o.jsx("ul",{className:fe.wrapper,children:s?p:P}),L.length===0&&o.jsx("img",{className:fe.notFound,src:Lt,alt:"not found"})]})};var Le={exports:{}};(function(r,g){(function(c,s){r.exports=s(x)})(Be,c=>(()=>{var s={703:(p,f,P)=>{var t=P(414);function S(){}function F(){}F.resetWarningCache=S,p.exports=function(){function k(ae,C,I,V,le,K){if(K!==t){var re=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw re.name="Invariant Violation",re}}function w(){return k}k.isRequired=k;var q={array:k,bigint:k,bool:k,func:k,number:k,object:k,string:k,symbol:k,any:k,arrayOf:w,element:k,elementType:k,instanceOf:w,node:k,objectOf:w,oneOf:w,oneOfType:w,shape:w,exact:w,checkPropTypes:F,resetWarningCache:S};return q.PropTypes=q,q}},697:(p,f,P)=>{p.exports=P(703)()},414:p=>{p.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:p=>{p.exports=c}},d={};function h(p){var f=d[p];if(f!==void 0)return f.exports;var P=d[p]={exports:{}};return s[p](P,P.exports,h),P.exports}h.n=p=>{var f=p&&p.__esModule?()=>p.default:()=>p;return h.d(f,{a:f}),f},h.d=(p,f)=>{for(var P in f)h.o(f,P)&&!h.o(p,P)&&Object.defineProperty(p,P,{enumerable:!0,get:f[P]})},h.o=(p,f)=>Object.prototype.hasOwnProperty.call(p,f),h.r=p=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})};var L={};return(()=>{h.r(L),h.d(L,{default:()=>ue});var p=h(98),f=h.n(p),P=h(697),t=h.n(P);function S(){return S=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var m=arguments[i];for(var v in m)Object.prototype.hasOwnProperty.call(m,v)&&(n[v]=m[v])}return n},S.apply(this,arguments)}var F=function(n){var i=n.pageClassName,m=n.pageLinkClassName,v=n.page,M=n.selected,U=n.activeClassName,A=n.activeLinkClassName,a=n.getEventListener,e=n.pageSelectedHandler,y=n.href,l=n.extraAriaContext,u=n.pageLabelBuilder,b=n.rel,N=n.ariaLabel||"Page "+v+(l?" "+l:""),T=null;return M&&(T="page",N=n.ariaLabel||"Page "+v+" is your current page",i=i!==void 0?i+" "+U:U,m!==void 0?A!==void 0&&(m=m+" "+A):m=A),f().createElement("li",{className:i},f().createElement("a",S({rel:b,role:y?void 0:"button",className:m,href:y,tabIndex:M?"-1":"0","aria-label":N,"aria-current":T,onKeyPress:e},a(e)),u(v)))};F.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const k=F;function w(){return w=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var m=arguments[i];for(var v in m)Object.prototype.hasOwnProperty.call(m,v)&&(n[v]=m[v])}return n},w.apply(this,arguments)}var q=function(n){var i=n.breakLabel,m=n.breakAriaLabel,v=n.breakClassName,M=n.breakLinkClassName,U=n.breakHandler,A=n.getEventListener,a=v||"break";return f().createElement("li",{className:a},f().createElement("a",w({className:M,role:"button",tabIndex:"0","aria-label":m,onKeyPress:U},A(U)),i))};q.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const ae=q;function C(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n??i}function I(n){return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},I(n)}function V(){return V=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var m=arguments[i];for(var v in m)Object.prototype.hasOwnProperty.call(m,v)&&(n[v]=m[v])}return n},V.apply(this,arguments)}function le(n,i){for(var m=0;m<i.length;m++){var v=i[m];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(n,v.key,v)}}function K(n,i){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(m,v){return m.__proto__=v,m},K(n,i)}function re(n,i){if(i&&(I(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return R(n)}function R(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Q(n){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},Q(n)}function E(n,i,m){return i in n?Object.defineProperty(n,i,{value:m,enumerable:!0,configurable:!0,writable:!0}):n[i]=m,n}var ee=function(n){(function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&K(a,e)})(A,n);var i,m,v,M,U=(v=A,M=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,e=Q(v);if(M){var y=Q(this).constructor;a=Reflect.construct(e,arguments,y)}else a=e.apply(this,arguments);return re(this,a)});function A(a){var e,y;return function(l,u){if(!(l instanceof u))throw new TypeError("Cannot call a class as a function")}(this,A),E(R(e=U.call(this,a)),"handlePreviousPage",function(l){var u=e.state.selected;e.handleClick(l,null,u>0?u-1:void 0,{isPrevious:!0})}),E(R(e),"handleNextPage",function(l){var u=e.state.selected,b=e.props.pageCount;e.handleClick(l,null,u<b-1?u+1:void 0,{isNext:!0})}),E(R(e),"handlePageSelected",function(l,u){if(e.state.selected===l)return e.callActiveCallback(l),void e.handleClick(u,null,void 0,{isActive:!0});e.handleClick(u,null,l)}),E(R(e),"handlePageChange",function(l){e.state.selected!==l&&(e.setState({selected:l}),e.callCallback(l))}),E(R(e),"getEventListener",function(l){return E({},e.props.eventListener,l)}),E(R(e),"handleClick",function(l,u,b){var N=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},T=N.isPrevious,H=T!==void 0&&T,ne=N.isNext,ie=ne!==void 0&&ne,te=N.isBreak,D=te!==void 0&&te,W=N.isActive,J=W!==void 0&&W;l.preventDefault?l.preventDefault():l.returnValue=!1;var G=e.state.selected,_=e.props.onClick,$=b;if(_){var z=_({index:u,selected:G,nextSelectedPage:b,event:l,isPrevious:H,isNext:ie,isBreak:D,isActive:J});if(z===!1)return;Number.isInteger(z)&&($=z)}$!==void 0&&e.handlePageChange($)}),E(R(e),"handleBreakClick",function(l,u){var b=e.state.selected;e.handleClick(u,l,b<l?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),E(R(e),"callCallback",function(l){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:l})}),E(R(e),"callActiveCallback",function(l){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:l})}),E(R(e),"getElementPageRel",function(l){var u=e.state.selected,b=e.props,N=b.nextPageRel,T=b.prevPageRel,H=b.selectedPageRel;return u-1===l?T:u===l?H:u+1===l?N:void 0}),E(R(e),"pagination",function(){var l=[],u=e.props,b=u.pageRangeDisplayed,N=u.pageCount,T=u.marginPagesDisplayed,H=u.breakLabel,ne=u.breakClassName,ie=u.breakLinkClassName,te=u.breakAriaLabels,D=e.state.selected;if(N<=b)for(var W=0;W<N;W++)l.push(e.getPageElement(W));else{var J=b/2,G=b-J;D>N-b/2?J=b-(G=N-D):D<b/2&&(G=b-(J=D));var _,$,z=function(Z){return e.getPageElement(Z)},j=[];for(_=0;_<N;_++){var ce=_+1;if(ce<=T)j.push({type:"page",index:_,display:z(_)});else if(ce>N-T)j.push({type:"page",index:_,display:z(_)});else if(_>=D-J&&_<=D+(D===0&&b>1?G-1:G))j.push({type:"page",index:_,display:z(_)});else if(H&&j.length>0&&j[j.length-1].display!==$&&(b>0||T>0)){var de=_<D?te.backward:te.forward;$=f().createElement(ae,{key:_,breakAriaLabel:de,breakLabel:H,breakClassName:ne,breakLinkClassName:ie,breakHandler:e.handleBreakClick.bind(null,_),getEventListener:e.getEventListener}),j.push({type:"break",index:_,display:$})}}j.forEach(function(Z,Y){var pe=Z;Z.type==="break"&&j[Y-1]&&j[Y-1].type==="page"&&j[Y+1]&&j[Y+1].type==="page"&&j[Y+1].index-j[Y-1].index<=2&&(pe={type:"page",index:Z.index,display:z(Z.index)}),l.push(pe.display)})}return l}),a.initialPage!==void 0&&a.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(a.initialPage,") and forcePage (").concat(a.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),y=a.initialPage?a.initialPage:a.forcePage?a.forcePage:0,e.state={selected:y},e}return i=A,(m=[{key:"componentDidMount",value:function(){var a=this.props,e=a.initialPage,y=a.disableInitialCallback,l=a.extraAriaContext,u=a.pageCount,b=a.forcePage;e===void 0||y||this.callCallback(e),l&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(u)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(u,"). Did you forget a Math.ceil()?")),e!==void 0&&e>u-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(u-1,").")),b!==void 0&&b>u-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(b," > ").concat(u-1,")."))}},{key:"componentDidUpdate",value:function(a){this.props.forcePage!==void 0&&this.props.forcePage!==a.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(a.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var a=this.state.selected,e=this.props,y=e.pageCount,l=a+e.pageRangeDisplayed;return l>=y?y-1:l}},{key:"getBackwardJump",value:function(){var a=this.state.selected-this.props.pageRangeDisplayed;return a<0?0:a}},{key:"getElementHref",value:function(a){var e=this.props,y=e.hrefBuilder,l=e.pageCount,u=e.hrefAllControls;if(y)return u||a>=0&&a<l?y(a+1,l,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(a){var e=a===this.state.selected;if(this.props.ariaLabelBuilder&&a>=0&&a<this.props.pageCount){var y=this.props.ariaLabelBuilder(a+1,e);return this.props.extraAriaContext&&!e&&(y=y+" "+this.props.extraAriaContext),y}}},{key:"getPageElement",value:function(a){var e=this.state.selected,y=this.props,l=y.pageClassName,u=y.pageLinkClassName,b=y.activeClassName,N=y.activeLinkClassName,T=y.extraAriaContext,H=y.pageLabelBuilder;return f().createElement(k,{key:a,pageSelectedHandler:this.handlePageSelected.bind(null,a),selected:e===a,rel:this.getElementPageRel(a),pageClassName:l,pageLinkClassName:u,activeClassName:b,activeLinkClassName:N,extraAriaContext:T,href:this.getElementHref(a),ariaLabel:this.ariaLabelBuilder(a),page:a+1,pageLabelBuilder:H,getEventListener:this.getEventListener})}},{key:"render",value:function(){var a=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&a!==void 0)return a&&a(this.props);var e=this.props,y=e.disabledClassName,l=e.disabledLinkClassName,u=e.pageCount,b=e.className,N=e.containerClassName,T=e.previousLabel,H=e.previousClassName,ne=e.previousLinkClassName,ie=e.previousAriaLabel,te=e.prevRel,D=e.nextLabel,W=e.nextClassName,J=e.nextLinkClassName,G=e.nextAriaLabel,_=e.nextRel,$=this.state.selected,z=$===0,j=$===u-1,ce="".concat(C(H)).concat(z?" ".concat(C(y)):""),de="".concat(C(W)).concat(j?" ".concat(C(y)):""),Z="".concat(C(ne)).concat(z?" ".concat(C(l)):""),Y="".concat(C(J)).concat(j?" ".concat(C(l)):""),pe=z?"true":"false",je=j?"true":"false";return f().createElement("ul",{className:b||N,role:"navigation","aria-label":"Pagination"},f().createElement("li",{className:ce},f().createElement("a",V({className:Z,href:this.getElementHref($-1),tabIndex:z?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":pe,"aria-label":ie,rel:te},this.getEventListener(this.handlePreviousPage)),T)),this.pagination(),f().createElement("li",{className:de},f().createElement("a",V({className:Y,href:this.getElementHref($+1),tabIndex:j?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":je,"aria-label":G,rel:_},this.getEventListener(this.handleNextPage)),D)))}}])&&le(i.prototype,m),Object.defineProperty(i,"prototype",{writable:!1}),A}(p.Component);E(ee,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),E(ee,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(n){return n},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ue=ee})(),L})())})(Le);var Rt=Le.exports;const Tt=ze(Rt),St="_paginationWrapper_18eqd_1",At="_selected_18eqd_27",be={paginationWrapper:St,selected:At},Bt=()=>{const r=oe(),g=B(Ie),c=B(Pe),s=d=>{r(De(d.selected+1)),window.scroll(0,0)};return o.jsx(Tt,{className:be.paginationWrapper,breakLabel:"...",nextLabel:">",previousLabel:"<",pageRangeDisplayed:6,onPageChange:d=>s(d),pageCount:g,forcePage:c-1,renderOnZeroPageCount:null,activeClassName:be.selected})},Dt=()=>{const r=B(Ce),g=B(he),c=B(ye),s=B(Pe),d=oe();return x.useEffect(()=>{const h=g>0?`category=${g}`:"",L=c.value.includes("-")?"order=desc":"order=asc",p=c.value.replace("-","");d($e({category:h,order:L,sortBy:p}))},[g,d,c]),x.useEffect(()=>{const h=g>0?`category=${g}`:"",L=c.value.includes("-")?"order=desc":"order=asc",p=c.value.replace("-","");d(Fe({category:h,order:L,sortBy:p,page:s}))},[g,c,s,d]),o.jsxs(o.Fragment,{children:[o.jsx(rt,{}),o.jsx(Ot,{}),!r&&o.jsx(Bt,{})]})};export{Dt as default};
