(function () {

  const CONFIG = {
    enabled: false,

    delay: 1000,

    title: "🎉 Happy Birthday! 🎂",

    message: "Enjoy a special surprise on your birthday.",

    backgroundColor: "#000000",

    textColor: "#FFFFFF",

    width: "500px",

    fontSize: "18px",

    borderRadius: "16px",

    showCloseButton: true,

    overlayColor: "rgba(0,0,0,0.60)"
  };

  if (!CONFIG.enabled) return;

  setTimeout(() => {

    const overlay = document.createElement("div");

    overlay.style.cssText = `
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background:${CONFIG.overlayColor};
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:999999999;
    `;

    const popup = document.createElement("div");

    popup.style.cssText = `
      width:${CONFIG.width};
      max-width:90%;
      background:${CONFIG.backgroundColor};
      color:${CONFIG.textColor};
      border-radius:${CONFIG.borderRadius};
      padding:30px;
      text-align:center;
      position:relative;
      box-sizing:border-box;
      box-shadow:0 20px 60px rgba(0,0,0,0.25);
    `;

    popup.innerHTML = `
      <h2 style="
        margin:0 0 15px;
        font-size:${CONFIG.fontSize};
      ">
        ${CONFIG.title}
      </h2>

      <div style="
        line-height:1.6;
      ">
        ${CONFIG.message}
      </div>
    `;

    if (CONFIG.showCloseButton) {

      const closeButton = document.createElement("button");

      closeButton.innerHTML = "✕";

      closeButton.style.cssText = `
        position:absolute;
        top:10px;
        right:10px;
        background:none;
        border:none;
        color:${CONFIG.textColor};
        font-size:22px;
        cursor:pointer;
      `;

      closeButton.onclick = () => {
        overlay.remove();
      };

      popup.appendChild(closeButton);
    }

    overlay.appendChild(popup);

    document.body.appendChild(overlay);

  }, CONFIG.delay);

})();
