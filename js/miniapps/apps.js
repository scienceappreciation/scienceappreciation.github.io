const root = document.getElementById("miniapps");
const apps = [];


function addApp(title, description, width=root.clientWidth * 0.95) {
    const app_root = document.createElement("article");
    const app_title = document.createElement("h3");
    const app_renderer = document.createElement("canvas");
    const app_description = document.createElement("p");

    const app_id = "render" + title.replace(" ", "").toLowerCase();

    app_title.textContent = title;

    app_renderer.id = app_id;
    app_renderer.setAttribute("width", width);
    app_renderer.setAttribute("height", width * 0.75);
    app_renderer.classList.add("app-window");
    
    app_description.textContent = description;
    app_description.classList.add("app-description");


    app_root.appendChild(app_title);
    app_root.appendChild(app_renderer);
    app_root.appendChild(app_description);

    apps.push(app_root);

    return app_renderer;
}


document.body.onload = () => {
    apps.forEach(app => {
        root.appendChild(app);
    });

    if (!apps.length) {
        const nothing = document.createElement("p");
        nothing.textContent = "Nothing to see here yet.";
        nothing.classList.add("color-muted");
        root.appendChild(nothing);
    }
};

function fontSize() {
    return 16;
}

function textWidth(text) {
    return (fontSize() * text.length) / 2;
}

function textHeight(text) {
    return fontSize();
}