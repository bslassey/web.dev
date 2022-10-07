import"https://cdn.jsdelivr.net/npm/container-query-polyfill@1/dist/container-query-polyfill.modern.js";import"https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";const O=()=>{const e=document.querySelector(".scarecrow__eye--left"),t=document.querySelector(".scarecrow__eye--right");e.animate([{transform:"translateX(-150%) scale(0.3)"},{transform:"none"}],{timeline:CHROMETOBER_TIMELINES[0],timeRange:"enter 25% 90%",fill:"both"}),t.animate([{transform:"translateX(-100%) scale(0.5)"},{transform:"none"}],{timeline:CHROMETOBER_TIMELINES[0],timeRange:"enter 25% 90%",fill:"both"})};window.addEventListener("DOMContentLoaded",O);const I=()=>{const e=document.querySelector(".coffin__lid"),t=document.querySelector(".coffin__zombie");e.animate([{transform:"rotate(-1deg)"},{transform:"rotate(3deg) scale(1.1) translateX(18%)"}],{timeline:CHROMETOBER_TIMELINES[2],timeRange:"enter 105% 180%",fill:"both"}),t.animate([{transform:"translateX(-20%)"},{transform:"translateX(0%)"}],{timeline:CHROMETOBER_TIMELINES[2],timeRange:"enter 20% 95%",fill:"backwards"}),t.animate([{transform:"translateX(0%)"},{transform:"translateX(-20%)"}],{timeline:CHROMETOBER_TIMELINES[2],timeRange:"enter 105% 180%",fill:"forwards"})};window.addEventListener("DOMContentLoaded",I);const M=document.querySelectorAll("[data-scroll-trigger]"),g=document.querySelectorAll(".page__side"),C=e=>{for(let o of g)o.classList.remove("in-view");let t=e.reverse().find(o=>o.isIntersecting),n;if(!t&&e.length>1)return;!t&&e.length===1?(n=(!e[0].isIntersecting&&e[0]).target.dataset.scrollTrigger-1,t=document.querySelector(`[data-scroll-target="${n}"]`)):(t=t.target,n=parseInt(t.dataset.scrollTrigger));let r=document.querySelector(`[data-scroll-target="${n}"] .page__side--back`),a=document.querySelector(`[data-scroll-target="${n+1}"] .page__side--front`);g.forEach(o=>o.setAttribute("inert","")),r?.removeAttribute("inert"),r?.classList.add("in-view"),a?.removeAttribute("inert"),a?.classList.add("in-view"),gtag("event","Section Order",{event_label:`pages-${n}-and-${n+1}`,event_category:"Chrometober Book",non_interaction:!0})},b=e=>{const t=new IntersectionObserver(C,{threshold:.9});for(let n of e)t.observe(n)};b(M);const i="inline";document.documentElement.className=i;const f=document.querySelector(".book"),l=document.querySelectorAll("[data-scroll-trigger]");document.querySelector("[data-scroll-intro]");const L=document.querySelector("[data-scroll-outro]");document.querySelector("[data-scroll-intro-two]");const s={delay:{phase:"enter",percent:CSS.percent(0)},endDelay:{phase:"enter",percent:CSS.percent(100)},fill:"both"},S=(e,t)=>{window.CHROMETOBER_TIMELINES||(window.CHROMETOBER_TIMELINES=[]);const n=document.querySelector(`[data-scroll-target="${e.getAttribute("data-scroll-trigger")}"]`),r=new ViewTimeline({subject:e,axis:i});window.CHROMETOBER_TIMELINES.push(r),t===0&&f.animate([{translate:"50% 0"}],{timeline:r,...s}),n.animate([{transform:`translateZ(${(l.length-t)*2}px)`},{transform:`translateZ(${(l.length-t)*2}px)`,offset:.75},{transform:`translateZ(${(l.length-t)*-1}px)`}],{timeline:r,...s}),n.querySelector(".page__paper").animate([{transform:"rotateY(0deg)"},{transform:"rotateY(-180deg)"}],{timeline:r,...s})};l.forEach(S);const v=new ViewTimeline({subject:L,axis:i});f.animate([{translate:"100% 0"}],{timeline:v,...s});l.forEach(S);document.querySelectorAll("article").forEach(e=>{const t=e.querySelector("h2").innerText;e.addEventListener("click",()=>{e.querySelector("a")?.click(),gtag("event","Read more",{event_label:t,event_category:"Chrometober Book",non_interaction:!0})})});const q=()=>{document.querySelector(".owl__owl").animate([{transform:"translateY(110%) rotate(2deg)"},{transform:"translateY(0)"}],{timeline:CHROMETOBER_TIMELINES[1],timeRange:"enter 80% 90%",fill:"both"})};window.addEventListener("DOMContentLoaded",q);const N=()=>{const e=document.querySelector(".gargoyle"),t=e.querySelector(".gargoyle__wing--left"),n=e.querySelector(".gargoyle__wing--right");e.animate([{transform:"translateY(0)"},{transform:"translateY(-200%)"}],{fill:"both",timeline:CHROMETOBER_TIMELINES[2],delay:{phase:"enter",percent:CSS.percent(110)},endDelay:{phase:"enter",percent:CSS.percent(150)}}),t.animate([{rotate:"0deg"},{rotate:"-35deg",offset:.5},{rotate:"0deg"}],{iterations:4,timeline:CHROMETOBER_TIMELINES[2],delay:{phase:"enter",percent:CSS.percent(90)},endDelay:{phase:"enter",percent:CSS.percent(150)},fill:"both"}),n.animate([{rotate:"0deg"},{rotate:"35deg",offset:.5},{rotate:"0deg"}],{iterations:4,timeline:CHROMETOBER_TIMELINES[2],delay:{phase:"enter",percent:CSS.percent(90)},endDelay:{phase:"enter",percent:CSS.percent(150)},fill:"both"})};window.addEventListener("DOMContentLoaded",N);const B=()=>{document.querySelector(".bunny").animate([{rotate:"90deg"},{rotate:"0deg",translate:"0 0 "},{translate:"-50% 0",rotate:"0deg"}],{timeline:CHROMETOBER_TIMELINES[1],delay:{phase:"enter",percent:CSS.percent(25)},endDelay:{phase:"enter",percent:CSS.percent(90)},fill:"both"})};window.addEventListener("DOMContentLoaded",B);const E=(e,t,n,r)=>{const a=t-e,o=r-n;return c=>n+((c-e)/a*o||0)},u=(e,t,n)=>Math.min(Math.max(n,e),t),P=()=>{const e=document.querySelector(".portrait"),t=e.querySelector(".portrait__eyes"),n=e.querySelector(".portrait__nose"),r=5,a=100,o=({x:c,y:p})=>{const{left:y,width:_,top:h,height:w}=n.getBoundingClientRect(),d=y+_*.5,m=h+w*.5,T=u(-r,r,E(d-a,d+a,-r,r)(c)),R=u(-r,r,E(m-a,m+a,-r,r)(p));t.style.setProperty("--x",T),t.style.setProperty("--y",R)};window.addEventListener("pointermove",o)};window.addEventListener("DOMContentLoaded",P);
