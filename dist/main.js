(()=>{"use strict";function e(e){const t=document.createElement("div");return t.classList.add(e),t}function t(e){const t=document.createElement("button");return t.classList.add("nav-btn"),t.textContent=e,t}!function(){const n=document.getElementById("content");n.appendChild(function(){const e=document.createElement("header"),n=document.createElement("h1");return n.textContent="Food bits",e.appendChild(n),e.appendChild(function(){const e=document.createElement("nav"),n=t("Home"),d=t("Menu"),c=t("Contact us");return e.appendChild(n),e.appendChild(d),e.appendChild(c),e}()),e}()),n.appendChild(function(){const e=document.createElement("main");return e.setAttribute("id","main"),e}()),document.getElementById("main").appendChild(function(){const t=e("home"),n=e("left"),d=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),a=document.createElement("hr"),i=document.createElement("hr"),l=document.createElement("h3"),m=document.createElement("button"),r=document.createElement("img");return d.classList.add("right"),c.classList.add("container"),o.classList.add("logo"),m.classList.add("order"),o.textContent="Food bits",l.textContent="Dig in and eat healthy delicious food",m.textContent="Order",r.src="../src/img/hero-food-img-1.png",n.appendChild(a),n.appendChild(c),c.appendChild(o),c.appendChild(l),c.appendChild(m),n.appendChild(i),d.appendChild(r),t.appendChild(n),t.appendChild(d),t}())}()()})();