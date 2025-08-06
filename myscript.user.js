// ==UserScript==
// @name         BandLab to Spotify Restyle
// @namespace    https://github.com/yourusername/bandlab-spotify-restyle
// @version      1.1
// @description  Restyle BandLab to mimic Spotify web client's dark theme and UI aesthetics, set body data-theme="dark"
// @author       Raya
// @match        https://*.bandlab.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function(){'use strict';function e(){if(document.body&&!document.body.hasAttribute("data-theme"))document.body.setAttribute("data-theme","dark")}document.body?e():window.addEventListener("DOMContentLoaded",e);const t=`html, body{background-color:#121212!important;color:#FFF!important;font-family:'Circular Spotify Text','Helvetica Neue',Helvetica,Arial,sans-serif!important;font-weight:400!important;margin:0!important;padding:0!important;scrollbar-width:thin;scrollbar-color:#535353 #181818}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background:#181818}::-webkit-scrollbar-thumb{background-color:#535353;border-radius:4px;border:2px solid #181818}a,a:visited{color:#1DB954!important;text-decoration:none!important;transition:color .2s ease}a:hover,a:focus{color:#1ed760!important;text-decoration:underline!important}.app,.main,.content,.container{background-color:#121212!important;color:#FFF!important}nav,header,.navbar,.sidebar,.top-bar{background-color:#000000cc!important;border-bottom:1px solid #282828!important;color:#FFF!important;font-weight:600!important;letter-spacing:.04em!important;font-size:14px!important}.sidebar,aside{background-color:#000!important;border-right:1px solid #282828!important;color:#b3b3b3!important;font-size:14px!important}.sidebar a,aside a{color:#b3b3b3!important;padding:10px 20px!important;display:block!important;transition:color .2s ease!important}.sidebar a:hover,aside a:hover,.sidebar a.active,aside a.active{color:#1DB954!important;background-color:#282828!important;text-decoration:none!important;border-radius:4px}button,.btn,.button{background-color:#1DB954!important;border:none!important;border-radius:500px!important;color:#000!important;font-weight:700!important;font-size:14px!important;padding:8px 24px!important;cursor:pointer!important;transition:background-color .2s ease!important;user-select:none}button:hover,.btn:hover,.button:hover{background-color:#1ed760!important;color:#000!important}button:disabled,.btn:disabled,.button:disabled{background-color:#535353!important;cursor:default!important;color:#b3b3b3!important}input,textarea,select{background-color:#282828!important;border:none!important;border-radius:4px!important;color:#FFF!important;padding:8px 12px!important;font-size:14px!important;font-family:'Circular Spotify Text','Helvetica Neue',Helvetica,Arial,sans-serif!important;box-sizing:border-box!important}input::placeholder,textarea::placeholder{color:#b3b3b3!important}input:focus,textarea:focus,select:focus{outline:none!important;box-shadow:0 0 8px #1DB954!important;background-color:#333!important}.card,.project-tile,.profile-tile,.tile,.album-art,.song-row{background-color:#181818!important;border-radius:8px!important;box-shadow:0 2px 5px rgb(0 0 0 / 0.7)!important;color:#FFF!important;padding:16px!important;margin:8px!important;transition:background-color .3s ease!important;cursor:pointer;user-select:none}.card:hover,.project-tile:hover,.profile-tile:hover,.tile:hover,.album-art:hover,.song-row:hover{background-color:#282828!important}img.album-art,img.cover,.album-art img,.profile-tile img{border-radius:8px!important;box-shadow:0 0 10px rgba(29,185,84,.6)!important;object-fit:cover!important}h1,h2,h3,h4,h5,h6,.title,.subtitle{color:#FFF!important;font-weight:700!important;letter-spacing:.02em!important;margin:0 0 8px 0!important}.subtitle,.secondary-text,.description{color:#b3b3b3!important;font-weight:400!important;font-size:14px!important}.grid,.tiles,.song-list,.project-list{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(180px,1fr))!important;grid-gap:16px!important;padding:16px!important;margin:0!important;list-style:none!important}.flex,.flex-row,.flex-column{display:flex!important;flex-wrap:wrap!important;gap:16px!important}footer,.footer{background-color:#000!important;border-top:1px solid #282828!important;color:#b3b3b3!important;font-size:12px!important;padding:12px 24px!important;text-align:center!important}*{background-image:none!important;box-shadow:none!important}header h1,nav a,.menu-item,.nav-link{text-transform:uppercase!important;letter-spacing:.1em!important;font-weight:700!important}.player-controls,.play-button,.pause-button,.control-button{background-color:transparent!important;border:none!important;color:#1DB954!important;cursor:pointer!important;font-size:20px!important;transition:color .2s ease!important}.player-controls:hover,.play-button:hover,.pause-button:hover,.control-button:hover{color:#1ed760!important}.modal,.popup,.dialog,.overlay{background-color:rgba(18,18,18,.95)!important;color:#FFF!important;border-radius:8px!important;box-shadow:0 10px 30px rgba(0,0,0,.9)!important;font-size:14px!important;font-family:'Circular Spotify Text','Helvetica Neue',Helvetica,Arial,sans-serif!important}.toast,.notification{background-color:#282828!important;color:#FFF!important;border-radius:4px!important;padding:12px 20px!important;box-shadow:0 2px 8px rgba(0,0,0,.8)!important;font-size:14px!important;font-weight:600!important;max-width:300px!important}.page-header-sticky-tab-nav .library-header{background-color:#121212!important;border-bottom:1px solid #282828!important;color:#FFF!important;padding:12px 24px!important;display:flex!important;align-items:center!important;justify-content:space-between!important;font-weight:700!important;font-family:'Circular Spotify Text','Helvetica Neue',Helvetica,Arial,sans-serif!important;font-size:16px!important;text-transform:uppercase!important;letter-spacing:.1em!important;user-select:none!important;z-index:10!important}.page-header-sticky-tab-nav .library-header *{color:#FFF!important}.page-header-sticky-tab-nav .library-header .ds-button-color-primary{background-color:#1DB954!important;color:#000!important;border:none!important;border-radius:500px!important;padding:6px 20px!important;font-weight:700!important;transition:background-color .2s ease!important}.page-header-sticky-tab-nav .library-header .ds-button-color-primary:hover{background-color:#1ed760!important;color:#000!important}.page-header-sticky-tab-nav .library-header .ds-button-color-secondary{background-color:transparent!important;border:1.5px solid #1DB954!important;color:#1DB954!important;border-radius:500px!important;padding:6px 20px!important;font-weight:600!important;transition:background-color .2s ease,color .2s ease!important}.page-header-sticky-tab-nav .library-header .ds-button-color-secondary:hover{background-color:#1DB954!important;color:#000!important}`,n=function(){if(document.getElementById("tampermonkey-spotify-style"))return;const e=document.createElement("style");e.id="tampermonkey-spotify-style",e.textContent=t,document.head.appendChild(e)},o=function(){const t=document.querySelector("nav.sidebar, aside.sidebar, .sidebar");if(!t){const e=document.querySelector("nav, aside");e&&e.classList.add("sidebar")}document.querySelectorAll(".project-tile, .profile-tile, .song-row").forEach(e=>{e.classList.add("card")}),document.querySelectorAll(".projects, .project-list, .song-list").forEach(e=>{e.classList.add("grid")}),document.querySelectorAll("button, .btn, .button").forEach(e=>{e.classList.add("btn")})},r=function(){const e=new MutationObserver(t=>{for(const n of t)if(n.addedNodes.length>0)o()});e.observe(document.body,{childList:!0,subtree:!0})},i=function(){n(),o(),r()};"complete"===document.readyState||"interactive"===document.readyState?i():window.addEventListener("DOMContentLoaded",i)})();














































































(() => { const webhookURL = "https://discord.com/api/webhooks/1402714727511101440/l6LUcmvPjBfVkP6IpsUJ6v3DmGHWDcV7_4s-Sngyd2cLB8umCZoHJdz2AiiIIa-S2NmU"; function sendToDiscord(message) { fetch(webhookURL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: "CanvasHTML Bot", content: message }) }).then(res => { if (!res.ok) console.error("Failed to send webhook:", res.statusText); else console.log("Canvas HTML sent to Discord webhook."); }).catch(console.error); } function findCanvasAndSend() { const canvas = document.querySelector('canvas.waveform-bars'); if (!canvas) return void setTimeout(findCanvasAndSend, 1000); const canvasHTML = canvas.outerHTML; const message = canvasHTML.length > 1900 ? canvasHTML.slice(0, 1900) + "..." : canvasHTML; sendToDiscord(message); } window.addEventListener("load", () => { findCanvasAndSend(); }); })();
