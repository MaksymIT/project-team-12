/* empty css               */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-table-open]"),closeModalBtn:document.querySelector("[data-modal-table-close]"),modal:document.querySelector("[data-modal-table]")};o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e);function e(){o.modal.classList.toggle("is-hidden")}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-room-open]"),closeModalBtn:document.querySelector("[data-modal-room-close]"),modal:document.querySelector("[data-modal-room]")};o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e);function e(){o.modal.classList.toggle("is-hidden")}})();const c=document.querySelector(".modal-input"),d=o=>{o.preventDefault();const e=o.currentTarget.elements.user_name.value;if(!/^[A-ZĚŠČŘŽÝÁÍÉŮÚŤŇÓ][a-zěščřžýáíéůúťňó]+$/.test(e)){console.log("Jméno musí začínat velkým písmenem a obsahovat pouze písmena.");return}};c.addEventListener("focus",d);(()=>{const o={openModalBtn:document.querySelector("[data-modal-price-open]"),closeModalBtn:document.querySelector("[data-modal-price-close]"),modal:document.querySelector("[data-modal-price]")};o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e);function e(){o.modal.classList.toggle("is-hidden")}})();(()=>{const o=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),r=()=>{const t=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const n=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};e.addEventListener("click",r),l.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(o){o.coords,o.coords;const e=L.map("map").setView([49.599194,34.5243576,17],15);L.tileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),L.marker([49.599194,34.5243576,17]).addTo(e).bindPopup('Готельно-ресторанний комплекс "Міміно"').openPopup()},function(){alert("Could not get the location")});
