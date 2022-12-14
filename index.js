let kingdoms = [
    {
        name: "Curetus",
        phylums: [
            {
                name: "Homo",
                genuses: [
                    {
                        name: "Aquus",
                        species: [{ name: "Tentacle Human" }, { name: "Aquatic Human" }],
                    },
                    { name: "Terrus", species: [{ name: "Primus" }] },
                ],
            },
            {
                name: "Solis Facera",
                genuses: [
                    {
                        name: "Insinuatis",
                        species: [{ name: "Hamster" }, { name: "Rat" }],
                    },
                    { name: "Rapax", species: [{ name: "Shark" }] },
                ],
            },
            {
                name: "Arthopodum",
                genuses: [
                    { name: "Arachnid", species: [{ name: "Spider" }] },
                    {
                        name: "Superesse",
                        species: [{ name: "Cockroach" }, { name: "Butter-roach" }],
                    },
                    {
                        name: "Furantur",
                        species: [{ name: "Mosquito" }, { name: "Flea" }],
                    },
                ],
            },
            {
                name: "Natare",
                genuses: [{ name: "Transmutare", species: [{ name: "Goldfish" }] }],
            },
        ],
    },
    {
        name: "Botanica",
        phylums: [
            {
                name: "Lux",
                genuses: [
                    { name: "Medicamentis", species: [{ name: "Grass" }] },
                    { name: "Aquarre", species: [{ name: "Algae" }] },
                ],
            },
        ],
    },
];
// Directory structure : Kingdom --> Phylum --> Genus --> Species
let destination = document.getElementById("destination");
let unveilBtn = document.getElementById("unveil");
unveilBtn.addEventListener("click", unveil);
let hasRendered = false;
function unveil() {
    if (!hasRendered) {
        for (let i = 0; i < kingdoms.length; i++) {
            buildElement("li", destination, `Kingdom: ${kingdoms[i].name}`, null, "kingdom");
            let newDestination = buildElement("ul", destination);
            for (let j = 0; j < kingdoms[i].phylums.length; j++) {
                buildElement("li", newDestination, `Phylum: ${kingdoms[i].phylums[j].name}`, null, "phylum");
                let newerDestination = buildElement("ul", newDestination);
                for (let k = 0; k < kingdoms[i].phylums[j].genuses.length; k++) {
                    buildElement("li", newerDestination, `Genus: ${kingdoms[i].phylums[j].genuses[k].name}`, null, "genus");
                    let newestDestination = buildElement("ul", newerDestination);
                    for (let l = 0; l < kingdoms[i].phylums[j].genuses[k].species.length; l++) {
                        buildElement("li", newestDestination, `Species: ${kingdoms[i].phylums[j].genuses[k].species[l].name}`, null, "species");
                        buildElement("button", newestDestination, "Reveal", kingdoms[i].phylums[j].genuses[k].species[l].name).addEventListener('click', handleClick);
                        generateImage(kingdoms[i].phylums[j].genuses[k].species[l].name, newestDestination, kingdoms[i].phylums[j].genuses[k].species[l].name + "img", "display: none", "0")
                    }
                }
            }
        }
        hasRendered = true;
    } else {
        alert("Nothing more to see");
    }
}

function handleClick(){
    if(document.getElementById(this.id + "img").alt != 0){
        document.getElementById(this.id + "img").style = "display: none";
        document.getElementById(this.id + "img").alt = "0";
        document.getElementById(this.id).innerHTML = "Reveal";
    } else {
        document.getElementById(this.id + 'img').style = "display: inline";
        document.getElementById(this.id + "img").alt = "1";
        document.getElementById(this.id).innerHTML = "Hide";
    }
}

function generateImage(src, dest, id, style, alt){
    let tempElement = document.createElement("img");
    tempElement.src = src + ".png";
    if(id){
        tempElement.id = id;
    }
    if(src != "Spider"){
        tempElement.height = "200";
    } 

    if(style){
        tempElement.style = style;
    }

    if(alt){
        tempElement.alt = alt;
    }
    dest.append(tempElement);
    return tempElement;

}
function buildElement(type, parent, content, id, className) {
    let tempVariable = document.createElement(type);
    if (className) {
        tempVariable.className = className;
    }
    if (id) {
        tempVariable.id = id;
    }
    if (content) {
        tempVariable.innerHTML = content;
    }
    parent.append(tempVariable);
    return tempVariable;
}
let nothing = null;