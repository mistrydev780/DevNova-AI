(function () {

    "use strict";

    // ===============================
    // CONFIG
    // ===============================

    const script = document.currentScript;

    const assistantId = script?.dataset?.assistant;

    const API_URL = "http://localhost:8000/api";

    const CSS_URL = "http://localhost:5173/assistant.css";

    const DEFAULT_THEME = "dark";

    let messages = [];

    let isTyping = false;

    let recognition = null;

    let isListening = false;


    const assistantConfig = {

        assistantName: "DevNova AI",

        businessName: "",

        businessDescription: "",

        theme: "dark",

        tone: "friendly",

        pages: []

    };

    console.log("Assistant ID :", assistantId);

    // ===============================
    // LOAD CSS
    // ===============================

    if (!document.querySelector("#devnova-widget-css")) {

        const css = document.createElement("link");

        css.id = "devnova-widget-css";

        css.rel = "stylesheet";

        css.href = CSS_URL;

        document.head.appendChild(css);

    }

    // ===============================
    // CREATE FLOAT BUTTON
    // ===============================

    const launcher = document.createElement("button");

    launcher.className = "devnova-launcher";

    launcher.innerHTML = `
        <div class="devnova-launcher-ring"></div>

        <div class="devnova-launcher-inner">

            <img
src="http://localhost:5173/logo.png"
class="devnova-launcher-logo"
/>


        </div>
    `;

    document.body.appendChild(launcher);

    // ===============================
    // POPUP
    // ===============================

    const popup = document.createElement("div");

    popup.className = `devnova-popup theme-${assistantConfig.theme}`;

    popup.innerHTML = `

<div class="devnova-window">
<div class="devnova-bg">

    <span class="devnova-particle p1"></span>

    <span class="devnova-particle p2"></span>

    <span class="devnova-particle p3"></span>

    <span class="devnova-particle p4"></span>

    <span class="devnova-particle p5"></span>

</div>

<div class="devnova-reflection"></div>

<div class="devnova-header">

<div class="devnova-window-dots">

<span></span>

<span></span>

<span></span>

<span></span>

</div>

</div>

<div class="devnova-body">

    <div class="devnova-orb-wrapper">

      <div class="devnova-ring ring1"></div>

<div class="devnova-ring ring2"></div>

<div class="devnova-ring ring3"></div>

<div class="devnova-orb-glow"></div>

<div class="devnova-orb"></div>

    </div>

    <h1 class="devnova-title">

        Hello! I'm

        <br>

        <span class="assistant-name">

            ${assistantConfig.assistantName}

        </span>

    </h1>

    <p class="devnova-subtitle">

        Your smart voice assistant.

        <br>

        Ask anything about your website.

    </p>

    <div class="devnova-listening">

        <span>🎤</span>

        Listening...

    </div>

    <div class="devnova-wave">

        <span></span>

        <span></span>

        <span></span>

        <span></span>

        <span></span>

        <span></span>

        <span></span>

    </div>

    <div class="devnova-welcome-card">

    <h3>

        <span class="welcome-title">

Welcome 👋

</span>

    </h3>

    <p class="welcome-description">

Loading...

</p>

        navigate your website,

        <br>

        explain products, pricing,

        and much more.


</div>

<div class="devnova-chat">

    <div class="devnova-messages"></div>

    <div class="devnova-input">

        <input
            class="devnova-text"
            placeholder="Ask anything..."
        />

        <button class="devnova-send">

            ➤

        </button>

    </div>

</div>

<div class="devnova-bottom">

    <div class="devnova-mic-glow"></div>

    <button class="devnova-mic">

        🎤

    </button>

</div>

</div>

</div>

`;

    document.body.appendChild(popup);

    const input =
        popup.querySelector(".devnova-text");

    const send =
        popup.querySelector(".devnova-send");

    const messageBox =
        popup.querySelector(".devnova-messages");


    // ===============================
    // STATE
    // ===============================

    let isOpen = false;

    // ===============================
    // OPEN
    // ===============================

    function openWidget() {

        popup.classList.add("show");

        launcher.classList.add("active");

        isOpen = true;

    }

    // ===============================
    // CLOSE
    // ===============================

    function closeWidget() {

        popup.classList.remove("show");

        launcher.classList.remove("active");

        isOpen = false;

    }

    // ===============================
    // TOGGLE
    // ===============================

    launcher.addEventListener("click", () => {

        if (isOpen) {

            closeWidget();

        } else {

            openWidget();

        }

    });

    // ===============================
    // ESC CLOSE
    // ===============================

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeWidget();

        }

    });

    // ===============================
    // FETCH ASSISTANT
    // ===============================

    async function loadAssistant() {

        try {

            const res = await fetch(`${API_URL}/assistant/config/${assistantId}`);

            if (!res.ok) return;

            const data = await res.json();

            console.log(data);

            const user = data.user;

            if (user) {

                assistantConfig.assistantName =
user.assistantName || "DevNova AI";

assistantConfig.businessName =
user.businessName || "";

assistantConfig.businessDescription =
user.businessDescription || "";

assistantConfig.theme =
user.theme || "dark";

assistantConfig.tone =
user.tone || "friendly";

assistantConfig.pages =
user.pages || [];

                applyAssistantConfig();

            }

        } catch (err) {

            console.log(err);

        }

    }

    loadAssistant();

    function applyAssistantConfig() {

        

        popup.className =
            `devnova-popup theme-${assistantConfig.theme}`;

        const title =
            popup.querySelector(".assistant-name");

        if (title) {

            title.textContent =
                assistantConfig.assistantName;

        }

        const sub =
            popup.querySelector(".devnova-subtitle");

            const welcome =
popup.querySelector(".welcome-description");

        if (sub) {

sub.innerHTML = `
Your smart AI Assistant
<br>
${assistantConfig.businessName}
`;

}

    }



    function addMessage(type, text) {

        const div =
            document.createElement("div");

        div.className =
            `devnova-message ${type}`;

        div.innerHTML = text;

        messageBox.appendChild(div);

        messageBox.scrollTop =
            messageBox.scrollHeight;

    }

    send.onclick = () => {

        const text = input.value.trim();

        if (!text) return;

        addMessage("user", text);

        input.value = "";

        fakeAI(text);

    }

    function fakeAI(text) {

        setTimeout(() => {

            addMessage(

                "ai",

                "You said : " + text

            );

        }, 600);

    }

})();