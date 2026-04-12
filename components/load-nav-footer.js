import { init } from "./mobile-nav-toggle.js";

fetch("components/nav.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("#nav-insert").innerHTML = data
    })
    .then(init);

fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("#footer-insert").innerHTML = data
    })