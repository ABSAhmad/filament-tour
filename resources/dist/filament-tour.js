var z={};function O(e={}){z={animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...e}}function d(e){return e?z[e]:z}function D(e,o,i,n){return(e/=n/2)<1?i/2*e*e+o:-i/2*(--e*(e-2)-1)+o}function X(e){let o='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap(i=>{let n=i.matches(o),t=Array.from(i.querySelectorAll(o));return[...n?[i]:[],...t]}).filter(i=>getComputedStyle(i).pointerEvents!=="none"&&le(i))}function Y(e){if(!e||se(e))return;let o=d("smoothScroll");e.scrollIntoView({behavior:!o||re(e)?"auto":"smooth",inline:"center",block:"center"})}function re(e){if(!e||!e.parentElement)return;let o=e.parentElement;return o.scrollHeight>o.clientHeight}function se(e){let o=e.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)}function le(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}var R={};function x(e,o){R[e]=o}function c(e){return e?R[e]:R}function q(){R={}}var W={};function I(e,o){W[e]=o}function P(e){var o;(o=W[e])==null||o.call(W)}function de(){W={}}function ae(e,o,i,n){let t=c("__activeStagePosition"),r=t||i.getBoundingClientRect(),a=n.getBoundingClientRect(),m=D(e,r.x,a.x-r.x,o),s=D(e,r.y,a.y-r.y,o),u=D(e,r.width,a.width-r.width,o),l=D(e,r.height,a.height-r.height,o);t={x:m,y:s,width:u,height:l},G(t),x("__activeStagePosition",t)}function Z(e){if(!e)return;let o=e.getBoundingClientRect(),i={x:o.x,y:o.y,width:o.width,height:o.height};x("__activeStagePosition",i),G(i)}function ce(){let e=c("__activeStagePosition"),o=c("__overlaySvg");if(!e)return;if(!o){console.warn("No stage svg found.");return}let i=window.innerWidth,n=window.innerHeight;o.setAttribute("viewBox",`0 0 ${i} ${n}`)}function pe(e){let o=ue(e);document.body.appendChild(o),ee(o,i=>{i.target.tagName==="path"&&P("overlayClick")}),x("__overlaySvg",o)}function G(e){let o=c("__overlaySvg");if(!o){pe(e);return}let i=o.firstElementChild;if(i?.tagName!=="path")throw new Error("no path element found in stage svg");i.setAttribute("d",Q(e))}function ue(e){let o=window.innerWidth,i=window.innerHeight,n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("driver-overlay","driver-overlay-animated"),n.setAttribute("viewBox",`0 0 ${o} ${i}`),n.setAttribute("xmlSpace","preserve"),n.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),n.setAttribute("version","1.1"),n.setAttribute("preserveAspectRatio","xMinYMin slice"),n.style.fillRule="evenodd",n.style.clipRule="evenodd",n.style.strokeLinejoin="round",n.style.strokeMiterlimit="2",n.style.zIndex="10000",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%";let t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d",Q(e)),t.style.fill=d("overlayColor")||"rgb(0,0,0)",t.style.opacity=`${d("overlayOpacity")}`,t.style.pointerEvents="auto",t.style.cursor="auto",n.appendChild(t),n}function Q(e){let o=window.innerWidth,i=window.innerHeight,n=d("stagePadding")||0,t=d("stageRadius")||0,r=e.width+n*2,a=e.height+n*2,m=Math.min(t,r/2,a/2),s=Math.floor(Math.max(m,0)),u=e.x-n+s,l=e.y-n,p=r-s*2,v=a-s*2;return`M${o},0L0,0L0,${i}L${o},${i}L${o},0Z
    M${u},${l} h${p} a${s},${s} 0 0 1 ${s},${s} v${v} a${s},${s} 0 0 1 -${s},${s} h-${p} a${s},${s} 0 0 1 -${s},-${s} v-${v} a${s},${s} 0 0 1 ${s},-${s} z`}function ve(){let e=c("__overlaySvg");e&&e.remove()}function me(){let e=document.getElementById("driver-dummy-element");if(e)return e;let o=document.createElement("div");return o.id="driver-dummy-element",o.style.width="0",o.style.height="0",o.style.pointerEvents="none",o.style.opacity="0",o.style.position="fixed",o.style.top="50%",o.style.left="50%",document.body.appendChild(o),o}function F(e){let{element:o}=e,i=typeof o=="string"?document.querySelector(o):o;i||(i=me()),fe(i,e)}function he(){let e=c("__activeElement"),o=c("__activeStep");e&&(Z(e),ce(),oe(e,o))}function fe(e,o){let i=Date.now(),n=c("__activeStep"),t=c("__activeElement")||e,r=!t||t===e,a=e.id==="driver-dummy-element",m=t.id==="driver-dummy-element",s=d("animate"),u=o.onHighlightStarted||d("onHighlightStarted"),l=o?.onHighlighted||d("onHighlighted"),p=n?.onDeselected||d("onDeselected"),v=d(),f=c();!r&&p&&p(m?void 0:t,n,{config:v,state:f}),u&&u(a?void 0:e,o,{config:v,state:f});let w=!r&&s,g=!1;xe(),x("previousStep",n),x("previousElement",t),x("activeStep",o),x("activeElement",e);let h=()=>{if(c("__transitionCallback")!==h)return;let y=Date.now()-i,S=400-y<=400/2;o.popover&&S&&!g&&w&&(J(e,o),g=!0),d("animate")&&y<400?ae(y,400,t,e):(Z(e),l&&l(a?void 0:e,o,{config:d(),state:c()}),x("__transitionCallback",void 0),x("__previousStep",n),x("__previousElement",t),x("__activeStep",o),x("__activeElement",e)),window.requestAnimationFrame(h)};x("__transitionCallback",h),window.requestAnimationFrame(h),Y(e),!w&&o.popover&&J(e,o),t.classList.remove("driver-active-element","driver-no-interaction"),t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),t.removeAttribute("aria-controls"),d("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}function ge(){var e;(e=document.getElementById("driver-dummy-element"))==null||e.remove(),document.querySelectorAll(".driver-active-element").forEach(o=>{o.classList.remove("driver-active-element","driver-no-interaction"),o.removeAttribute("aria-haspopup"),o.removeAttribute("aria-expanded"),o.removeAttribute("aria-controls")})}function N(){let e=c("__resizeTimeout");e&&window.cancelAnimationFrame(e),x("__resizeTimeout",window.requestAnimationFrame(he))}function we(e){var o;if(!c("isInitialized")||!(e.key==="Tab"||e.keyCode===9))return;let i=c("__activeElement"),n=(o=c("popover"))==null?void 0:o.wrapper,t=X([...n?[n]:[],...i?[i]:[]]),r=t[0],a=t[t.length-1];if(e.preventDefault(),e.shiftKey){let m=t[t.indexOf(document.activeElement)-1]||a;m?.focus()}else{let m=t[t.indexOf(document.activeElement)+1]||r;m?.focus()}}function U(e){(d("allowKeyboardControl")??!0)&&(e.key==="Escape"?P("escapePress"):e.key==="ArrowRight"?P("arrowRightPress"):e.key==="ArrowLeft"&&P("arrowLeftPress"))}function ee(e,o,i){let n=(t,r)=>{let a=t.target;e.contains(a)&&((!i||i(a))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()),r?.(t))};document.addEventListener("pointerdown",n,!0),document.addEventListener("mousedown",n,!0),document.addEventListener("pointerup",n,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("click",t=>{n(t,o)},!0)}function ye(){window.addEventListener("keyup",U,!1),window.addEventListener("keydown",we,!1),window.addEventListener("resize",N),window.addEventListener("scroll",N)}function be(){window.removeEventListener("keyup",U),window.removeEventListener("resize",N),window.removeEventListener("scroll",N)}function xe(){let e=c("popover");e&&(e.wrapper.style.display="none")}function J(e,o){var i,n;let t=c("popover");t&&document.body.removeChild(t.wrapper),t=Le(),document.body.appendChild(t.wrapper);let{title:r,description:a,showButtons:m,disableButtons:s,showProgress:u,nextBtnText:l=d("nextBtnText")||"Next &rarr;",prevBtnText:p=d("prevBtnText")||"&larr; Previous",progressText:v=d("progressText")||"{current} of {total}"}=o.popover||{};t.nextButton.innerHTML=l,t.previousButton.innerHTML=p,t.progress.innerHTML=v,r?(t.title.innerText=r,t.title.style.display="block"):t.title.style.display="none",a?(t.description.innerHTML=a,t.description.style.display="block"):t.description.style.display="none";let f=m||d("showButtons"),w=u||d("showProgress")||!1,g=f?.includes("next")||f?.includes("previous")||w;t.closeButton.style.display=f.includes("close")?"block":"none",g?(t.footer.style.display="flex",t.progress.style.display=w?"block":"none",t.nextButton.style.display=f.includes("next")?"block":"none",t.previousButton.style.display=f.includes("previous")?"block":"none"):t.footer.style.display="none";let h=s||d("disableButtons")||[];h!=null&&h.includes("next")&&(t.nextButton.disabled=!0,t.nextButton.classList.add("driver-popover-btn-disabled")),h!=null&&h.includes("previous")&&(t.previousButton.disabled=!0,t.previousButton.classList.add("driver-popover-btn-disabled")),h!=null&&h.includes("close")&&(t.closeButton.disabled=!0,t.closeButton.classList.add("driver-popover-btn-disabled"));let y=t.wrapper;y.style.display="block",y.style.left="",y.style.top="",y.style.bottom="",y.style.right="",y.id="driver-popover-content",y.setAttribute("role","dialog"),y.setAttribute("aria-labelledby","driver-popover-title"),y.setAttribute("aria-describedby","driver-popover-description");let S=t.arrow;S.className="driver-popover-arrow";let k=((i=o.popover)==null?void 0:i.popoverClass)||d("popoverClass")||"";y.className=`driver-popover ${k}`.trim(),ee(t.wrapper,_=>{var B,$,A;let E=_.target,H=((B=o.popover)==null?void 0:B.onNextClick)||d("onNextClick"),T=(($=o.popover)==null?void 0:$.onPrevClick)||d("onPrevClick"),M=((A=o.popover)==null?void 0:A.onCloseClick)||d("onCloseClick");if(E.classList.contains("driver-popover-next-btn"))return H?H(e,o,{config:d(),state:c()}):P("nextClick");if(E.classList.contains("driver-popover-prev-btn"))return T?T(e,o,{config:d(),state:c()}):P("prevClick");if(E.classList.contains("driver-popover-close-btn"))return M?M(e,o,{config:d(),state:c()}):P("closeClick")},_=>!(t!=null&&t.description.contains(_))&&!(t!=null&&t.title.contains(_))&&_.className.includes("driver-popover")),x("popover",t);let b=((n=o.popover)==null?void 0:n.onPopoverRender)||d("onPopoverRender");b&&b(t,{config:d(),state:c()}),oe(e,o),Y(y);let C=e.classList.contains("driver-dummy-element"),L=X([y,...C?[]:[e]]);L.length>0&&L[0].focus()}function te(){let e=c("popover");if(!(e!=null&&e.wrapper))return;let o=e.wrapper.getBoundingClientRect(),i=d("stagePadding")||0,n=d("popoverOffset")||0;return{width:o.width+i+n,height:o.height+i+n,realWidth:o.width,realHeight:o.height}}function K(e,o){let{elementDimensions:i,popoverDimensions:n,popoverPadding:t,popoverArrowDimensions:r}=o;return e==="start"?Math.max(Math.min(i.top-t,window.innerHeight-n.realHeight-r.width),r.width):e==="end"?Math.max(Math.min(i.top-n?.realHeight+i.height+t,window.innerHeight-n?.realHeight-r.width),r.width):e==="center"?Math.max(Math.min(i.top+i.height/2-n?.realHeight/2,window.innerHeight-n?.realHeight-r.width),r.width):0}function V(e,o){let{elementDimensions:i,popoverDimensions:n,popoverPadding:t,popoverArrowDimensions:r}=o;return e==="start"?Math.max(Math.min(i.left-t,window.innerWidth-n.realWidth-r.width),r.width):e==="end"?Math.max(Math.min(i.left-n?.realWidth+i.width+t,window.innerWidth-n?.realWidth-r.width),r.width):e==="center"?Math.max(Math.min(i.left+i.width/2-n?.realWidth/2,window.innerWidth-n?.realWidth-r.width),r.width):0}function oe(e,o){let i=c("popover");if(!i)return;let{align:n="start",side:t="left"}=o?.popover||{},r=n,a=e.id==="driver-dummy-element"?"over":t,m=d("stagePadding")||0,s=te(),u=i.arrow.getBoundingClientRect(),l=e.getBoundingClientRect(),p=l.top-s.height,v=p>=0,f=window.innerHeight-(l.bottom+s.height),w=f>=0,g=l.left-s.width,h=g>=0,y=window.innerWidth-(l.right+s.width),S=y>=0,k=!v&&!w&&!h&&!S,b=a;if(a==="top"&&v?S=h=w=!1:a==="bottom"&&w?S=h=v=!1:a==="left"&&h?S=v=w=!1:a==="right"&&S&&(h=v=w=!1),a==="over"){let C=window.innerWidth/2-s.realWidth/2,L=window.innerHeight/2-s.realHeight/2;i.wrapper.style.left=`${C}px`,i.wrapper.style.right="auto",i.wrapper.style.top=`${L}px`,i.wrapper.style.bottom="auto"}else if(k){let C=window.innerWidth/2-s?.realWidth/2,L=10;i.wrapper.style.left=`${C}px`,i.wrapper.style.right="auto",i.wrapper.style.bottom=`${L}px`,i.wrapper.style.top="auto"}else if(h){let C=Math.min(g,window.innerWidth-s?.realWidth-u.width),L=K(r,{elementDimensions:l,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:u});i.wrapper.style.left=`${C}px`,i.wrapper.style.top=`${L}px`,i.wrapper.style.bottom="auto",i.wrapper.style.right="auto",b="left"}else if(S){let C=Math.min(y,window.innerWidth-s?.realWidth-u.width),L=K(r,{elementDimensions:l,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:u});i.wrapper.style.right=`${C}px`,i.wrapper.style.top=`${L}px`,i.wrapper.style.bottom="auto",i.wrapper.style.left="auto",b="right"}else if(v){let C=Math.min(p,window.innerHeight-s.realHeight-u.width),L=V(r,{elementDimensions:l,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:u});i.wrapper.style.top=`${C}px`,i.wrapper.style.left=`${L}px`,i.wrapper.style.bottom="auto",i.wrapper.style.right="auto",b="top"}else if(w){let C=Math.min(f,window.innerHeight-s?.realHeight-u.width),L=V(r,{elementDimensions:l,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:u});i.wrapper.style.left=`${L}px`,i.wrapper.style.bottom=`${C}px`,i.wrapper.style.top="auto",i.wrapper.style.right="auto",b="bottom"}k?i.arrow.classList.add("driver-popover-arrow-none"):Ce(r,b,e)}function Ce(e,o,i){let n=c("popover");if(!n)return;let t=i.getBoundingClientRect(),r=te(),a=n.arrow,m=r.width,s=window.innerWidth,u=t.width,l=t.left,p=r.height,v=window.innerHeight,f=t.top,w=t.height;a.className="driver-popover-arrow";let g=o,h=e;o==="top"?(l+u<=0?(g="right",h="end"):l+u-m<=0&&(g="top",h="start"),l>=s?(g="left",h="end"):l+m>=s&&(g="top",h="end")):o==="bottom"?(l+u<=0?(g="right",h="start"):l+u-m<=0&&(g="bottom",h="start"),l>=s?(g="left",h="start"):l+m>=s&&(g="bottom",h="end")):o==="left"?(f+w<=0?(g="bottom",h="end"):f+w-p<=0&&(g="left",h="start"),f>=v?(g="top",h="end"):f+p>=v&&(g="left",h="end")):o==="right"&&(f+w<=0?(g="bottom",h="start"):f+w-p<=0&&(g="right",h="start"),f>=v?(g="top",h="start"):f+p>=v&&(g="right",h="end")),g?(a.classList.add(`driver-popover-arrow-side-${g}`),a.classList.add(`driver-popover-arrow-align-${h}`)):a.classList.add("driver-popover-arrow-none")}function Le(){let e=document.createElement("div");e.classList.add("driver-popover");let o=document.createElement("div");o.classList.add("driver-popover-arrow");let i=document.createElement("header");i.id="driver-popover-title",i.classList.add("driver-popover-title"),i.style.display="none",i.innerText="Popover Title";let n=document.createElement("div");n.id="driver-popover-description",n.classList.add("driver-popover-description"),n.style.display="none",n.innerText="Popover description is here";let t=document.createElement("button");t.type="button",t.classList.add("driver-popover-close-btn"),t.setAttribute("aria-label","Close"),t.innerHTML="&times;";let r=document.createElement("footer");r.classList.add("driver-popover-footer");let a=document.createElement("span");a.classList.add("driver-popover-progress-text"),a.innerText="";let m=document.createElement("span");m.classList.add("driver-popover-navigation-btns");let s=document.createElement("button");s.type="button",s.classList.add("driver-popover-prev-btn"),s.innerHTML="&larr; Previous";let u=document.createElement("button");return u.type="button",u.classList.add("driver-popover-next-btn"),u.innerHTML="Next &rarr;",m.appendChild(s),m.appendChild(u),r.appendChild(a),r.appendChild(m),e.appendChild(t),e.appendChild(o),e.appendChild(i),e.appendChild(n),e.appendChild(r),{wrapper:e,arrow:o,title:i,description:n,footer:r,previousButton:s,nextButton:u,closeButton:t,footerButtons:m,progress:a}}function Se(){var e;let o=c("popover");o&&((e=o.wrapper.parentElement)==null||e.removeChild(o.wrapper))}function j(e={}){O(e);function o(){d("allowClose")&&u()}function i(){let l=c("activeIndex"),p=d("steps")||[];if(typeof l>"u")return;let v=l+1;p[v]?s(v):u()}function n(){let l=c("activeIndex"),p=d("steps")||[];if(typeof l>"u")return;let v=l-1;p[v]?s(v):u()}function t(l){(d("steps")||[])[l]?s(l):u()}function r(){var l;if(c("__transitionCallback"))return;let p=c("activeIndex"),v=c("__activeStep"),f=c("__activeElement");if(typeof p>"u"||typeof v>"u"||typeof c("activeIndex")>"u")return;let w=((l=v.popover)==null?void 0:l.onPrevClick)||d("onPrevClick");if(w)return w(f,v,{config:d(),state:c()});n()}function a(){var l;if(c("__transitionCallback"))return;let p=c("activeIndex"),v=c("__activeStep"),f=c("__activeElement");if(typeof p>"u"||typeof v>"u")return;let w=((l=v.popover)==null?void 0:l.onNextClick)||d("onNextClick");if(w)return w(f,v,{config:d(),state:c()});i()}function m(){c("isInitialized")||(x("isInitialized",!0),document.body.classList.add("driver-active",d("animate")?"driver-fade":"driver-simple"),ye(),I("overlayClick",o),I("escapePress",o),I("arrowLeftPress",r),I("arrowRightPress",a))}function s(l=0){var p,v,f,w,g,h,y,S;let k=d("steps");if(!k){console.error("No steps to drive through"),u();return}if(!k[l]){u();return}x("__activeOnDestroyed",document.activeElement),x("activeIndex",l);let b=k[l],C=k[l+1],L=k[l-1],_=((p=b.popover)==null?void 0:p.doneBtnText)||d("doneBtnText")||"Done",B=d("allowClose"),$=typeof((v=b.popover)==null?void 0:v.showProgress)<"u"?(f=b.popover)==null?void 0:f.showProgress:d("showProgress"),A=(((w=b.popover)==null?void 0:w.progressText)||d("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${l+1}`).replace("{{total}}",`${k.length}`),E=((g=b.popover)==null?void 0:g.showButtons)||d("showButtons"),H=["next","previous",...B?["close"]:[]].filter(ie=>!(E!=null&&E.length)||E.includes(ie)),T=((h=b.popover)==null?void 0:h.onNextClick)||d("onNextClick"),M=((y=b.popover)==null?void 0:y.onPrevClick)||d("onPrevClick"),ne=((S=b.popover)==null?void 0:S.onCloseClick)||d("onCloseClick");F({...b,popover:{showButtons:H,nextBtnText:C?void 0:_,disableButtons:[...L?[]:["previous"]],showProgress:$,progressText:A,onNextClick:T||(()=>{C?s(l+1):u()}),onPrevClick:M||(()=>{s(l-1)}),onCloseClick:ne||(()=>{u()}),...b?.popover||{}}})}function u(l=!0){let p=c("__activeElement"),v=c("__activeStep"),f=c("__activeOnDestroyed"),w=d("onDestroyStarted");if(l&&w){let y=!p||p?.id==="driver-dummy-element";w(y?void 0:p,v,{config:d(),state:c()});return}let g=v?.onDeselected||d("onDeselected"),h=d("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),be(),Se(),ge(),ve(),de(),q(),p&&v){let y=p.id==="driver-dummy-element";g&&g(y?void 0:p,v,{config:d(),state:c()}),h&&h(y?void 0:p,v,{config:d(),state:c()})}f&&f.focus()}return{isActive:()=>c("isInitialized")||!1,refresh:N,drive:(l=0)=>{m(),s(l)},setConfig:O,setSteps:l=>{q(),O({...d(),steps:l})},getConfig:d,getState:c,getActiveIndex:()=>c("activeIndex"),isFirstStep:()=>c("activeIndex")===0,isLastStep:()=>{let l=d("steps")||[],p=c("activeIndex");return p!==void 0&&p===l.length-1},getActiveStep:()=>c("activeStep"),getActiveElement:()=>c("activeElement"),getPreviousElement:()=>c("previousElement"),getPreviousStep:()=>c("previousStep"),moveNext:i,movePrevious:n,moveTo:t,hasNextStep:()=>{let l=d("steps")||[],p=c("activeIndex");return p!==void 0&&l[p+1]},hasPreviousStep:()=>{let l=d("steps")||[],p=c("activeIndex");return p!==void 0&&l[p-1]},highlight:l=>{m(),F({...l,popover:l.popover?{showButtons:[],showProgress:!1,progressText:"",...l.popover}:void 0})},destroy:()=>{u(!1)}}}document.addEventListener("livewire:initialized",async function(){let e=[],o=[];Livewire.dispatch("driverjs::load-elements",{request:window.location}),Livewire.on("driverjs::loaded-elements",function(n){n[0].tours.forEach(t=>{e.push(t),localStorage.getItem("tours")||localStorage.setItem("tours","[]"),t.route===window.location.pathname&&(n[0].only_visible_once&&localStorage.getItem("tours").includes(t.id)?t.alwaysShow&&i(t):i(t))}),n[0].highlights.forEach(t=>{if(o.push(t),t.route===window.location.pathname&&document.querySelector(t.parent)){parent=document.querySelector(t.parent),parent.parentNode.style.position="relative";var r=document.createElement("div");r.innerHTML=t.button,r.firstChild.classList.add(t.position),parent.parentNode.insertBefore(r.firstChild,parent)}})}),Livewire.on("driverjs::open-highlight",function(n){let t=o.find(r=>r.id===n.highlight);t&&j({overlayColor:localStorage.theme==="light"?t.colors.light:t.colors.dark,onPopoverRender:(r,{config:a,state:m})=>{r.title.innerHTML="",r.title.innerHTML=m.activeStep.popover.title,m.activeStep.popover.description||(r.title.firstChild.style.justifyContent="center");let s="dark:text-white fi-section rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 mb-4";r.footer.parentElement.classList.add(...s.split(" "))}}).highlight(t)}),Livewire.on("driverjs::open-tour",function(n){let t=e.find(r=>r.id===n);t?i(t):console.error(`Tour with id '${n}' not found`)});function i(n){if(n.steps.length>0){let t=j({allowClose:!0,disableActiveInteraction:!0,overlayColor:localStorage.theme==="light"?n.colors.light:n.colors.dark,onDeselected:(r,a,{config:m,state:s})=>{},onCloseClick:(r,a,{config:m,state:s})=>{s.activeStep&&!s.activeStep.uncloseable&&t.destroy(),localStorage.getItem("tours").includes(n.id)||localStorage.setItem("tours",JSON.stringify([...JSON.parse(localStorage.getItem("tours")),n.id]))},onDestroyStarted:(r,a,{config:m,state:s})=>{s.activeStep&&!s.activeStep.uncloseable&&t.destroy()},onDestroyed:(r,a,{config:m,state:s})=>{},onNextClick:(r,a,{config:m,state:s})=>{t.isLastStep()&&(localStorage.getItem("tours").includes(n.id)||localStorage.setItem("tours",JSON.stringify([...JSON.parse(localStorage.getItem("tours")),n.id])),t.destroy()),a.onNextNotify&&new FilamentNotification().title(a.onNextNotify.title).body(a.onNextNotify.body).icon(a.onNextNotify.icon).iconColor(a.onNextNotify.iconColor).color(a.onNextNotify.color).duration(a.onNextNotify.duration).send(),a.onNextDispatch&&Livewire.dispatch(a.onNextDispatch.name,JSON.parse(a.onNextDispatch.args)),a.onNextClickSelector&&document.querySelector(a.onNextClickSelector).click(),a.onNextRedirect&&window.open(a.onNextRedirect.url,a.onNextRedirect.newTab?"_blank":"_self"),t.moveNext()},onPopoverRender:(r,{config:a,state:m})=>{m.activeStep.uncloseable&&document.querySelector(".driver-popover-close-btn").remove(),r.title.innerHTML="",r.title.innerHTML=m.activeStep.popover.title,m.activeStep.popover.description||(r.title.firstChild.style.justifyContent="center");let s="dark:text-white fi-section rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 mb-4";r.footer.parentElement.classList.add(...s.split(" ")),r.footer.innerHTML="",r.footer.classList.add("flex","mt-3"),r.footer.style.justifyContent="space-evenly",r.footer.classList.remove("driver-popover-footer");let u=document.createElement("button"),l="fi-btn fi-btn-size-md relative grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus:ring-2 disabled:pointer-events-none disabled:opacity-70 rounded-lg fi-btn-color-primary gap-1.5 px-3 py-2 text-sm inline-grid shadow-sm bg-custom-600 text-white hover:bg-custom-500 dark:bg-custom-500 dark:hover:bg-custom-400 focus:ring-custom-500/50 dark:focus:ring-custom-400/50 fi-ac-btn-action";u.classList.add(...l.split(" "),"driver-popover-next-btn"),u.innerText=t.isLastStep()?n.doneButtonLabel:n.nextButtonLabel,u.style.setProperty("--c-400","var(--primary-400"),u.style.setProperty("--c-500","var(--primary-500"),u.style.setProperty("--c-600","var(--primary-600");let p=document.createElement("button"),v="fi-btn fi-btn-size-md relative grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus:ring-2 disabled:pointer-events-none disabled:opacity-70 rounded-lg fi-btn-color-gray gap-1.5 px-3 py-2 text-sm inline-grid shadow-sm bg-white text-gray-950 hover:bg-gray-50 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 ring-1 ring-gray-950/10 dark:ring-white/20 fi-ac-btn-action";p.classList.add(...v.split(" "),"driver-popover-prev-btn"),p.innerText=n.previousButtonLabel,t.isFirstStep()||r.footer.appendChild(p),r.footer.appendChild(u)},steps:JSON.parse(n.steps)});t.drive()}}});
