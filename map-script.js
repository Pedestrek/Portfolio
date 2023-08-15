function initMap() {
    const center = { lat: -25.2017541, lng: -51.0759644 }
    const pins = [{ name: "Scenarium", pos: { lat: -20.456810, lng: -54.581170 } },
    { name: "Vitra Joinville", pos: { lat: -26.303040, lng: -48.852720 } },
    { name: "Artesano", pos: { lat: -23.330680, lng: -51.182350 } },
    { name: "Rodin", pos: { lat: -25.410760, lng: -49.264640 } },
    { name: "Epic", pos: { lat: -23.332370, lng: -51.177210 } },
    { name: "Harmonie", pos: { lat: -22.904263, lng: -47.046573 } },
    { name: "Quintessence", pos: { lat: -25.438705, lng: -49.286279 } },
    { name: "Terrazza di Rimini", pos: { lat: -23.345229, lng: -51.163634 } },
    { name: "The Edge", pos: { lat: -23.328369, lng: -51.180478 } },
    { name: "Bayma", pos: { lat: -25.438899, lng: -49.279792 } },
    { name: "Creatif", pos: { lat: -25.457612, lng: -49.290003 } },
    { name: "Helbor Signature", pos: { lat: -26.301483, lng: -48.853089 } },
    { name: "Jardim", pos: { lat: -25.409022, lng: -49.265494 } },
    { name: "Luna", pos: { lat: -25.411629, lng: -49.253772 } },
    { name: "Elysia", pos: { lat: -25.437212, lng: -49.270461 } },
    { name: "Verttice", pos: { lat: -25.380156, lng: -49.226862 } },
    { name: "BOS", pos: { lat: -25.433435, lng: -49.269167 } },
    { name: "Chateau Lateur", pos: { lat: -25.452826, lng: -49.296780 } },
    { name: "JTI", pos: { lat: -29.749825, lng: -52.427360 } }
    ]
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "a0283780b97aaccf",
        zoom: 6.25,
        center: center,
    });

    pins.forEach(pin => {
        const marker = new google.maps.Marker({
            position: pin.pos,
            map: map,
        });
    });

}

window.initMap = initMap;