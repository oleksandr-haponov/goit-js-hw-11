import{a as d,S as m,i}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",g="50679981-3c82f9b846616ba31889c4405";async function y(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(f,{params:r})).data}const l=document.querySelector(".gallery"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:p,downloads:u})=>`
      <li class="gallery-item">
  <a class="gallery__link" href="${a}">
    <img class="gallery__image" src="${o}" alt="${e}" />
  </a>
  <div class="image-info">
    <p>Likes: <span>${t}</span></p>
    <p>Views: <span>${n}</span></p>
    <p>Comments: <span>${p}</span></p>
    <p>Downloads: <span>${u}</span></p>
  </div>
</li>
    `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){l.innerHTML=""}function q(){document.querySelector(".loader-container").classList.remove("is-hidden")}function c(){document.querySelector(".loader-container").classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(console.log("Form submitted with query:",r),!r){i.warning({message:"Enter a search term!",position:"topRight"});return}b(),q();try{const o=await y(r);if(console.log("API response:",o),c(),o.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}catch(o){c(),console.error("Fetch error:",o),i.error({message:"Error fetching images",position:"topRight"})}});
//# sourceMappingURL=index.js.map
