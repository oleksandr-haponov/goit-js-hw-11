import{a as f,S as p,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",g="50679981-3c82f9b846616ba31889c4405";async function y(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(m,{params:r})).data}const l=document.querySelector(".gallery"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
      <li class="gallery__item">
        <a class="gallery__link" href="${a}">
          <img class="gallery__image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l.innerHTML=""}function S(){document.querySelector(".loader-container").classList.remove("is-hidden")}function c(){document.querySelector(".loader-container").classList.add("is-hidden")}const _=document.querySelector(".form");_.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Enter a search term!",position:"topRight"});return}L(),S();try{const o=await y(r);if(c(),o.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}catch{c(),n.error({message:"Error fetching images",position:"topRight"})}});
//# sourceMappingURL=index.js.map
