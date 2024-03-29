const favicon = document.querySelector("link[rel=icon]");

if (favicon) {
    const emoji = favicon.getAttribute("data-emoji");

    if (emoji) {
        const canvas = document.createElement("canvas");
        canvas.height = 88;
        canvas.width = 88;
        const ctx = canvas.getContext("2d");
        ctx.font = "64px serif";


        ctx.fillText(emoji, 0, 64);

        favicon.href = canvas.toDataURL();
    }
}