window.onload = () => { setTimeout(loadMap, 500); }

async function loadMap() {
    const map = document.createElement('iframe');
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.9407212931815!2d-51.39950682544886!3d-30.663797704157506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951a03b6781098ed%3A0xb4f1b56da5ca2278!2sR.%20das%20Pitangueiras%2C%20386%2C%20Tapes%20-%20RS%2C%2096760-000!5e0!3m2!1spt-BR!2sbr!4v1693527047563!5m2!1spt-BR!2sbr"

    map.title = "localização";
    map.style.border = "none";

    document.getElementById("map-replacer").replaceWith(map);
}