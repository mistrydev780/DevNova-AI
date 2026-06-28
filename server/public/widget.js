(function () {

    const script = document.currentScript;

    const assistantId = script.dataset.assistant;

   

    const js = document.createElement("script");

    js.src = "http://localhost:5173/assistant.js";

    js.dataset.assistant = assistantId;

    document.body.appendChild(js);

})();