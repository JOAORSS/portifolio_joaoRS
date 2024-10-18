
import { galeria } from '/galeria.js';

window.galeria1 = new galeria("recipins", "recipins2", "recipins3", 1);

window.galeria2 = new galeria("PHPMysqli", "PHPMysqli2", "PHPMysqli3", 1);

window.galeria3 = new galeria("decodificador", "decodificador2", "decodificador3", 1);


document.addEventListener("scroll", scrollIF);

function scrollIF() {

    const alvo = (document.getElementById("form1").getBoundingClientRect().top);

    const janela = window.innerHeight;
    
    if (janela >= alvo) {
        document.getElementById("formacao1").animate(
        [
            { transform: "translateX(-200px)", opacity: "0"},
            { transform: "translateX(0px)", opacity: "100"},
        ],
        {
            // timing options
            duration: 1000,
            fill: "forwards",
            easing: "ease-out"

        },

        );
        document.removeEventListener("scroll", scrollIF)
    }
}


document.addEventListener("scroll", scrollONE);

function scrollONE() {

    const alvo = (document.getElementById("form2").getBoundingClientRect().top);

    const janela = window.innerHeight;
    
    if (janela >= alvo) {
        document.getElementById("formacao2").animate(
        [
            { transform: "translateX(200px)", opacity: "0"},
            { transform: "translateX(0px)", opacity: "100"},
        ],
        {
            // timing options
            duration: 1000,
            fill: "forwards",
            easing: "ease-out"

        },

        );
        document.removeEventListener("scroll", scrollONE)
    }
}

document.addEventListener("DOMContentLoaded", loadSkills)

let i = 1;
// comitt

function loadSkills(){

     if (i < 9){
        let skillvez = `skill${i}`
        console.log(skillvez);
        document.getElementById(skillvez).animate(
            [
                { transform: "translateY(-30px)", opacity: "0"},
                { transform: "translateY(0px)", opacity: "100"},
            ],
            {
                // timing options
                duration: 600,
                fill: "forwards",
                easing: "ease-out"
            },
        );

        i = i+1;
        setTimeout(loadSkills, 50);
    }
}