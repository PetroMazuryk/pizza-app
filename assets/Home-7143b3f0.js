import{u as T,s as ve,a as oe,j as n,b as Oe,c as xe,r as x,d as Ce,e as Re,N as Te,f as Se,g as Ae,h as Be,i as ze,k as Pe,l as ke,m as Ie,n as De,o as $e,p as _e,q as Fe,t as qe,v as He}from"./index-174d1b37.js";import{t as We}from"./typeOptions-cd9758bc.js";function Ne(a){var g,l,i="";if(typeof a=="string"||typeof a=="number")i+=a;else if(typeof a=="object")if(Array.isArray(a)){var m=a.length;for(g=0;g<m;g++)a[g]&&(l=Ne(a[g]))&&(i&&(i+=" "),i+=l)}else for(l in a)a[l]&&(i&&(i+=" "),i+=l);return i}function he(){for(var a,g,l=0,i="",m=arguments.length;l<m;l++)(a=arguments[l])&&(g=Ne(a))&&(i&&(i+=" "),i+=g);return i}const je=["Всі","Самий ТОП","М'ясні","Вегетаріанські","Гострі","Спецпропозиції"],Me="_list_1gj6e_1",Ue="_btn_1gj6e_8",Ve="_active_1gj6e_24",Ke="_titleCategory_1gj6e_47",me={list:Me,btn:Ue,active:Ve,titleCategory:Ke},Je=()=>{const a=T(ve),g=oe(),l=i=>{g(Oe(i))};return n.jsx("div",{children:n.jsx("ul",{className:me.list,children:je.map((i,m)=>n.jsx("li",{children:n.jsx("button",{onClick:()=>l(m),className:he(me.btn,{[me.active]:a===m}),children:i})},m))})})},Ge=[{name:"популярностю",value:"rating"},{name:"алфавітом (DESC)",value:"title"},{name:"алфавітом (ASC)",value:"-title"},{name:"ціною ⬆",value:"price"},{name:"ціною ⬇",value:"-price"}],Ze="_sort_7ai7w_1",Ye="_sortLabel_7ai7w_6",Xe="_sortPopap_7ai7w_20",Qe="_active_7ai7w_43",et="_svg_7ai7w_47",tt="_rotated_7ai7w_53",se={sort:Ze,sortLabel:Ye,sortPopap:Xe,active:Qe,svg:et,rotated:tt},at=()=>{const a=oe(),g=T(xe),[l,i]=x.useState(!1),[m,f]=x.useState(!1),L=x.useRef(),p=t=>{a(Re(t)),i(!1),f(!1)},u=t=>{L.current&&!L.current.contains(t.target)&&(i(!1),f(!1))};x.useEffect(()=>(document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}),[]);const P=()=>{i(!l),f(!m)};return n.jsxs("div",{className:se.sort,ref:L,children:[n.jsxs("div",{className:se.sortLabel,children:[n.jsx("svg",{className:`${se.svg} ${m?se.rotated:""}`,width:"16",height:"16",children:n.jsx("use",{href:`${Ce}#icon-circle-up`})}),n.jsx("b",{children:"Сортування за:"}),n.jsx("span",{onClick:P,children:g.name})]}),l&&n.jsx("div",{className:se.sortPopap,children:n.jsx("ul",{children:Ge.map((t,w)=>n.jsx("li",{onClick:()=>p(t),className:g.name===t.name?se.active:"",children:t.name},w))})})]})},rt="_wrapper_ijsik_1",nt={wrapper:rt},st=()=>n.jsxs("div",{className:nt.wrapper,children:[n.jsx(Je,{}),n.jsx(at,{})]}),it="_messageWrapper_3w9h0_1",ot="_message_3w9h0_1",de={messageWrapper:it,message:ot},ct=({message:a,text:g,error:l})=>n.jsxs("div",{className:de.messageWrapper,children:[n.jsx("p",{className:de.message,children:a}),n.jsx("p",{className:de.message,children:g}),n.jsx("p",{className:de.message,children:l})]});/*! *****************************************************************************
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
***************************************************************************** */var X=function(){return X=Object.assign||function(g){for(var l,i=1,m=arguments.length;i<m;i++){l=arguments[i];for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(g[f]=l[f])}return g},X.apply(this,arguments)};function lt(a,g){var l={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&g.indexOf(i)<0&&(l[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,i=Object.getOwnPropertySymbols(a);m<i.length;m++)g.indexOf(i[m])<0&&Object.prototype.propertyIsEnumerable.call(a,i[m])&&(l[i[m]]=a[i[m]]);return l}var pt=function(){return Math.random().toString(36).substring(6)},dt=function(a){var g=a.animate,l=g===void 0?!0:g,i=a.backgroundColor,m=i===void 0?"#f5f6f7":i,f=a.backgroundOpacity,L=f===void 0?1:f,p=a.baseUrl,u=p===void 0?"":p,P=a.children,t=a.foregroundColor,w=t===void 0?"#eee":t,z=a.foregroundOpacity,k=z===void 0?1:z,E=a.gradientRatio,q=E===void 0?2:E,ae=a.uniqueKey,C=a.rtl,D=C===void 0?!1:C,U=a.speed,ce=U===void 0?1.2:U,V=a.style,re=V===void 0?{}:V,S=a.title,Q=S===void 0?"Loading...":S,O=a.beforeMask,ee=O===void 0?null:O,ue=lt(a,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),s=ae||pt(),o="".concat(s,"-diff"),h="".concat(s,"-animated-diff"),v="".concat(s,"-aria"),W=D?{transform:"scaleX(-1)"}:null,M="".concat(ce,"s"),B="".concat(q*-1," 0"),r="".concat(q," 0");return x.createElement("svg",X({"aria-labelledby":v,role:"img",style:X(X({},re),W)},ue),Q?x.createElement("title",{id:v},Q):null,ee&&x.isValidElement(ee)?ee:null,x.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(u,"#").concat(o,")"),style:{fill:"url(".concat(u,"#").concat(h,")")}}),x.createElement("defs",null,x.createElement("clipPath",{id:o},P),x.createElement("linearGradient",{id:h,gradientTransform:"translate(".concat(B,")")},x.createElement("stop",{offset:"0%",stopColor:m,stopOpacity:L}),x.createElement("stop",{offset:"50%",stopColor:w,stopOpacity:k}),x.createElement("stop",{offset:"100%",stopColor:m,stopOpacity:L}),l&&x.createElement("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(B,"; 0 0; ").concat(r),dur:M,repeatCount:"indefinite"}))))},Le=function(a){return a.children?x.createElement(dt,X({},a)):x.createElement(ut,X({},a))},ut=function(a){return x.createElement(Le,X({viewBox:"0 0 476 124"},a),x.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),x.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),x.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),x.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),x.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),x.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const gt=Le,mt=a=>n.jsxs(gt,{speed:2,width:280,height:558,viewBox:"0 0 280 558",backgroundColor:"#e4e2e2",foregroundColor:"#cbc3c3",...a,children:[n.jsx("rect",{x:"16",y:"378",rx:"16",ry:"16",width:"248",height:"86"}),n.jsx("rect",{x:"70",y:"330",rx:"16",ry:"16",width:"140",height:"26"}),n.jsx("rect",{x:"16",y:"498",rx:"16",ry:"16",width:"248",height:"42"}),n.jsx("circle",{cx:"138",cy:"143",r:"124"}),n.jsx("rect",{x:"42",y:"281",rx:"16",ry:"16",width:"200",height:"24"})]}),be="/pizza-app/assets/pizza-default-60d5aa70.jpg",ft="_wrapper_5164b_1",ht="_wrapperImg_5164b_33",vt="_contentBox_5164b_48",bt="_selector_5164b_60",yt="_wrapperPrice_5164b_63",xt="_listTypes_5164b_72",Ct="_listSizes_5164b_77",Pt="_ingredients_5164b_89",kt="_title_5164b_107",_t="_itemTypes_5164b_128",Nt="_active_5164b_138",jt="_itemSizes_5164b_156",Lt="_priceText_5164b_178",wt="_addBtn_5164b_192",Et="_svgBtn_5164b_211",R={wrapper:ft,wrapperImg:ht,contentBox:vt,selector:bt,wrapperPrice:yt,listTypes:xt,listSizes:Ct,ingredients:Pt,title:kt,itemTypes:_t,active:Nt,itemSizes:jt,priceText:Lt,addBtn:wt,svgBtn:Et},Ot=({item:a})=>{const{imageUrl:g,title:l,types:i,sizes:m,price:f,ingredients:L,id:p}=a,u=oe(),P=T(C=>C.cart.items.find(D=>D.id===p)),[t,w]=x.useState(0),[z,k]=x.useState(0),E=P?P.count:0,q=C=>{C.target.src=be},ae=()=>{const C={id:p,title:l,price:f,imageUrl:g,type:i[t],size:m[z]};u(Se(C))};return n.jsxs("li",{className:R.wrapper,children:[n.jsx(Te,{className:R.wrapperImg,to:`item/${p}`,children:n.jsx("img",{className:R.img,src:g||be,alt:l,onError:q,loading:"lazy"})}),n.jsxs("div",{className:R.contentBox,children:[n.jsx("div",{className:R.title,children:l}),n.jsxs("div",{className:R.selector,children:[n.jsx("ul",{className:R.listTypes,children:i.map(C=>n.jsx("li",{onClick:()=>w(C),className:he(R.itemTypes,{[R.active]:t===C}),children:We[C]},C))}),n.jsx("ul",{className:R.listSizes,children:m.map((C,D)=>n.jsxs("li",{onClick:()=>k(D),className:he(R.itemSizes,{[R.active]:z===D}),children:[C," см"]},D))})]}),n.jsxs("div",{className:R.wrapperPrice,children:[n.jsxs("div",{className:R.priceText,children:[" ",f," грн"]}),n.jsxs("button",{className:R.addBtn,onClick:ae,children:[n.jsx("svg",{className:R.svgBtn,width:"12",height:"12",children:n.jsx("use",{href:`${Ce}#icon-plus`})}),"Додати",E>0&&n.jsx("i",{children:E})]})]})]}),n.jsx("p",{className:R.ingredients,children:L})]})},Rt="/pizza-app/assets/notFound-b07ea814.webp",Tt="_pizzaTitle_kwnm3_1",St="_wrapper_kwnm3_12",At="_notFound_kwnm3_20",fe={pizzaTitle:Tt,wrapper:St,notFound:At},Bt=()=>{const a=T(ve),g=T(Ae),l=T(Be),i=T(ze),m=T(Pe),f=T(ke),L=m.toLowerCase(),p=l.filter(w=>w.title.toLowerCase().includes(L)),u=[...new Array(6)].map((w,z)=>n.jsx(mt,{},z)),t=(m===""?g:p).map(w=>n.jsx(Ot,{item:w},w.id));return n.jsx(n.Fragment,{children:f?n.jsx("div",{children:n.jsx(ct,{message:"Вибачте, відбулася помилка !",text:" Не вдалося отримати піци. Повторіть спробу пізніше !",error:f})}):n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:fe.pizzaTitle,children:je[a]}),n.jsx("ul",{className:fe.wrapper,children:i?u:t}),p.length===0&&n.jsx("img",{className:fe.notFound,src:Rt,alt:"not found"})]})})};var we={exports:{}};(function(a,g){(function(l,i){a.exports=i(x)})(Ie,l=>(()=>{var i={703:(p,u,P)=>{var t=P(414);function w(){}function z(){}z.resetWarningCache=w,p.exports=function(){function k(ae,C,D,U,ce,V){if(V!==t){var re=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw re.name="Invariant Violation",re}}function E(){return k}k.isRequired=k;var q={array:k,bigint:k,bool:k,func:k,number:k,object:k,string:k,symbol:k,any:k,arrayOf:E,element:k,elementType:k,instanceOf:E,node:k,objectOf:E,oneOf:E,oneOfType:E,shape:E,exact:E,checkPropTypes:z,resetWarningCache:w};return q.PropTypes=q,q}},697:(p,u,P)=>{p.exports=P(703)()},414:p=>{p.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:p=>{p.exports=l}},m={};function f(p){var u=m[p];if(u!==void 0)return u.exports;var P=m[p]={exports:{}};return i[p](P,P.exports,f),P.exports}f.n=p=>{var u=p&&p.__esModule?()=>p.default:()=>p;return f.d(u,{a:u}),u},f.d=(p,u)=>{for(var P in u)f.o(u,P)&&!f.o(p,P)&&Object.defineProperty(p,P,{enumerable:!0,get:u[P]})},f.o=(p,u)=>Object.prototype.hasOwnProperty.call(p,u),f.r=p=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})};var L={};return(()=>{f.r(L),f.d(L,{default:()=>ue});var p=f(98),u=f.n(p),P=f(697),t=f.n(P);function w(){return w=Object.assign?Object.assign.bind():function(s){for(var o=1;o<arguments.length;o++){var h=arguments[o];for(var v in h)Object.prototype.hasOwnProperty.call(h,v)&&(s[v]=h[v])}return s},w.apply(this,arguments)}var z=function(s){var o=s.pageClassName,h=s.pageLinkClassName,v=s.page,W=s.selected,M=s.activeClassName,B=s.activeLinkClassName,r=s.getEventListener,e=s.pageSelectedHandler,y=s.href,c=s.extraAriaContext,d=s.pageLabelBuilder,b=s.rel,N=s.ariaLabel||"Page "+v+(c?" "+c:""),A=null;return W&&(A="page",N=s.ariaLabel||"Page "+v+" is your current page",o=o!==void 0?o+" "+M:M,h!==void 0?B!==void 0&&(h=h+" "+B):h=B),u().createElement("li",{className:o},u().createElement("a",w({rel:b,role:y?void 0:"button",className:h,href:y,tabIndex:W?"-1":"0","aria-label":N,"aria-current":A,onKeyPress:e},r(e)),d(v)))};z.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const k=z;function E(){return E=Object.assign?Object.assign.bind():function(s){for(var o=1;o<arguments.length;o++){var h=arguments[o];for(var v in h)Object.prototype.hasOwnProperty.call(h,v)&&(s[v]=h[v])}return s},E.apply(this,arguments)}var q=function(s){var o=s.breakLabel,h=s.breakAriaLabel,v=s.breakClassName,W=s.breakLinkClassName,M=s.breakHandler,B=s.getEventListener,r=v||"break";return u().createElement("li",{className:r},u().createElement("a",E({className:W,role:"button",tabIndex:"0","aria-label":h,onKeyPress:M},B(M)),o))};q.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const ae=q;function C(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return s??o}function D(s){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},D(s)}function U(){return U=Object.assign?Object.assign.bind():function(s){for(var o=1;o<arguments.length;o++){var h=arguments[o];for(var v in h)Object.prototype.hasOwnProperty.call(h,v)&&(s[v]=h[v])}return s},U.apply(this,arguments)}function ce(s,o){for(var h=0;h<o.length;h++){var v=o[h];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(s,v.key,v)}}function V(s,o){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(h,v){return h.__proto__=v,h},V(s,o)}function re(s,o){if(o&&(D(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return S(s)}function S(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Q(s){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},Q(s)}function O(s,o,h){return o in s?Object.defineProperty(s,o,{value:h,enumerable:!0,configurable:!0,writable:!0}):s[o]=h,s}var ee=function(s){(function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&V(r,e)})(B,s);var o,h,v,W,M=(v=B,W=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var r,e=Q(v);if(W){var y=Q(this).constructor;r=Reflect.construct(e,arguments,y)}else r=e.apply(this,arguments);return re(this,r)});function B(r){var e,y;return function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}(this,B),O(S(e=M.call(this,r)),"handlePreviousPage",function(c){var d=e.state.selected;e.handleClick(c,null,d>0?d-1:void 0,{isPrevious:!0})}),O(S(e),"handleNextPage",function(c){var d=e.state.selected,b=e.props.pageCount;e.handleClick(c,null,d<b-1?d+1:void 0,{isNext:!0})}),O(S(e),"handlePageSelected",function(c,d){if(e.state.selected===c)return e.callActiveCallback(c),void e.handleClick(d,null,void 0,{isActive:!0});e.handleClick(d,null,c)}),O(S(e),"handlePageChange",function(c){e.state.selected!==c&&(e.setState({selected:c}),e.callCallback(c))}),O(S(e),"getEventListener",function(c){return O({},e.props.eventListener,c)}),O(S(e),"handleClick",function(c,d,b){var N=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},A=N.isPrevious,H=A!==void 0&&A,ne=N.isNext,ie=ne!==void 0&&ne,te=N.isBreak,$=te!==void 0&&te,K=N.isActive,J=K!==void 0&&K;c.preventDefault?c.preventDefault():c.returnValue=!1;var G=e.state.selected,_=e.props.onClick,F=b;if(_){var I=_({index:d,selected:G,nextSelectedPage:b,event:c,isPrevious:H,isNext:ie,isBreak:$,isActive:J});if(I===!1)return;Number.isInteger(I)&&(F=I)}F!==void 0&&e.handlePageChange(F)}),O(S(e),"handleBreakClick",function(c,d){var b=e.state.selected;e.handleClick(d,c,b<c?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),O(S(e),"callCallback",function(c){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:c})}),O(S(e),"callActiveCallback",function(c){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:c})}),O(S(e),"getElementPageRel",function(c){var d=e.state.selected,b=e.props,N=b.nextPageRel,A=b.prevPageRel,H=b.selectedPageRel;return d-1===c?A:d===c?H:d+1===c?N:void 0}),O(S(e),"pagination",function(){var c=[],d=e.props,b=d.pageRangeDisplayed,N=d.pageCount,A=d.marginPagesDisplayed,H=d.breakLabel,ne=d.breakClassName,ie=d.breakLinkClassName,te=d.breakAriaLabels,$=e.state.selected;if(N<=b)for(var K=0;K<N;K++)c.push(e.getPageElement(K));else{var J=b/2,G=b-J;$>N-b/2?J=b-(G=N-$):$<b/2&&(G=b-(J=$));var _,F,I=function(Z){return e.getPageElement(Z)},j=[];for(_=0;_<N;_++){var le=_+1;if(le<=A)j.push({type:"page",index:_,display:I(_)});else if(le>N-A)j.push({type:"page",index:_,display:I(_)});else if(_>=$-J&&_<=$+($===0&&b>1?G-1:G))j.push({type:"page",index:_,display:I(_)});else if(H&&j.length>0&&j[j.length-1].display!==F&&(b>0||A>0)){var ge=_<$?te.backward:te.forward;F=u().createElement(ae,{key:_,breakAriaLabel:ge,breakLabel:H,breakClassName:ne,breakLinkClassName:ie,breakHandler:e.handleBreakClick.bind(null,_),getEventListener:e.getEventListener}),j.push({type:"break",index:_,display:F})}}j.forEach(function(Z,Y){var pe=Z;Z.type==="break"&&j[Y-1]&&j[Y-1].type==="page"&&j[Y+1]&&j[Y+1].type==="page"&&j[Y+1].index-j[Y-1].index<=2&&(pe={type:"page",index:Z.index,display:I(Z.index)}),c.push(pe.display)})}return c}),r.initialPage!==void 0&&r.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(r.initialPage,") and forcePage (").concat(r.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),y=r.initialPage?r.initialPage:r.forcePage?r.forcePage:0,e.state={selected:y},e}return o=B,(h=[{key:"componentDidMount",value:function(){var r=this.props,e=r.initialPage,y=r.disableInitialCallback,c=r.extraAriaContext,d=r.pageCount,b=r.forcePage;e===void 0||y||this.callCallback(e),c&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(d)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(d,"). Did you forget a Math.ceil()?")),e!==void 0&&e>d-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(d-1,").")),b!==void 0&&b>d-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(b," > ").concat(d-1,")."))}},{key:"componentDidUpdate",value:function(r){this.props.forcePage!==void 0&&this.props.forcePage!==r.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(r.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var r=this.state.selected,e=this.props,y=e.pageCount,c=r+e.pageRangeDisplayed;return c>=y?y-1:c}},{key:"getBackwardJump",value:function(){var r=this.state.selected-this.props.pageRangeDisplayed;return r<0?0:r}},{key:"getElementHref",value:function(r){var e=this.props,y=e.hrefBuilder,c=e.pageCount,d=e.hrefAllControls;if(y)return d||r>=0&&r<c?y(r+1,c,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(r){var e=r===this.state.selected;if(this.props.ariaLabelBuilder&&r>=0&&r<this.props.pageCount){var y=this.props.ariaLabelBuilder(r+1,e);return this.props.extraAriaContext&&!e&&(y=y+" "+this.props.extraAriaContext),y}}},{key:"getPageElement",value:function(r){var e=this.state.selected,y=this.props,c=y.pageClassName,d=y.pageLinkClassName,b=y.activeClassName,N=y.activeLinkClassName,A=y.extraAriaContext,H=y.pageLabelBuilder;return u().createElement(k,{key:r,pageSelectedHandler:this.handlePageSelected.bind(null,r),selected:e===r,rel:this.getElementPageRel(r),pageClassName:c,pageLinkClassName:d,activeClassName:b,activeLinkClassName:N,extraAriaContext:A,href:this.getElementHref(r),ariaLabel:this.ariaLabelBuilder(r),page:r+1,pageLabelBuilder:H,getEventListener:this.getEventListener})}},{key:"render",value:function(){var r=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&r!==void 0)return r&&r(this.props);var e=this.props,y=e.disabledClassName,c=e.disabledLinkClassName,d=e.pageCount,b=e.className,N=e.containerClassName,A=e.previousLabel,H=e.previousClassName,ne=e.previousLinkClassName,ie=e.previousAriaLabel,te=e.prevRel,$=e.nextLabel,K=e.nextClassName,J=e.nextLinkClassName,G=e.nextAriaLabel,_=e.nextRel,F=this.state.selected,I=F===0,j=F===d-1,le="".concat(C(H)).concat(I?" ".concat(C(y)):""),ge="".concat(C(K)).concat(j?" ".concat(C(y)):""),Z="".concat(C(ne)).concat(I?" ".concat(C(c)):""),Y="".concat(C(J)).concat(j?" ".concat(C(c)):""),pe=I?"true":"false",Ee=j?"true":"false";return u().createElement("ul",{className:b||N,role:"navigation","aria-label":"Pagination"},u().createElement("li",{className:le},u().createElement("a",U({className:Z,href:this.getElementHref(F-1),tabIndex:I?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":pe,"aria-label":ie,rel:te},this.getEventListener(this.handlePreviousPage)),A)),this.pagination(),u().createElement("li",{className:ge},u().createElement("a",U({className:Y,href:this.getElementHref(F+1),tabIndex:j?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":Ee,"aria-label":G,rel:_},this.getEventListener(this.handleNextPage)),$)))}}])&&ce(o.prototype,h),Object.defineProperty(o,"prototype",{writable:!1}),B}(p.Component);O(ee,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),O(ee,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(s){return s},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ue=ee})(),L})())})(we);var zt=we.exports;const It=De(zt),Dt="_paginationWrapper_18eqd_1",$t="_selected_18eqd_27",ye={paginationWrapper:Dt,selected:$t},Ft=()=>{const a=oe(),g=T($e),l=T(_e),i=m=>{a(Fe(m.selected+1)),window.scroll(0,0)};return n.jsx(It,{className:ye.paginationWrapper,breakLabel:"...",nextLabel:">",previousLabel:"<",pageRangeDisplayed:6,onPageChange:m=>i(m),pageCount:g,forcePage:l-1,renderOnZeroPageCount:null,activeClassName:ye.selected})},Wt=()=>{const a=T(Pe),g=T(ve),l=T(xe),i=T(_e),m=T(ke),f=oe();return x.useEffect(()=>{const L=g>0?`category=${g}`:"",p=l.value.includes("-")?"order=desc":"order=asc",u=l.value.replace("-","");f(qe({category:L,order:p,sortBy:u}))},[g,f,l]),x.useEffect(()=>{const L=g>0?`category=${g}`:"",p=l.value.includes("-")?"order=desc":"order=asc",u=l.value.replace("-","");f(He({category:L,order:p,sortBy:u,page:i}))},[g,l,i,f]),n.jsxs(n.Fragment,{children:[n.jsx(st,{}),n.jsx(Bt,{}),!a&&!m&&n.jsx(Ft,{})]})};export{Wt as default};
