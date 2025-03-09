const menu = document.querySelector('.categorias');
const menuBtn = document.querySelector('.menuBtn');
const Ini = document.querySelector('.portada');
Ini.classList.add('show');
const Sob = document.querySelector('.sobreMi');
const Met = document.querySelector('.metas')
const Pil = document.querySelector('.pilares')
const Cie = document.querySelector('.cierre')
const Indice = document.getElementById('indice')

function mostrarMenu() {
    menu.classList.toggle('show'); // Añade o quita la clase 'show' al menú
}

document.addEventListener('click', function(e){ //se almacena el evento click en la variable "e"
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)){ //detecta el click fuera de la zona de los botones
        menu.classList.remove('show');
    }
});

function toggleCategories(category){
    if(category == 'Ini'){
        Ini.classList.add('show');
        Indice.innerText = "INICIO";
        Sob.classList.remove('show');
        Met.classList.remove('show');
        Pil.classList.remove('show');
        Cie.classList.remove('show');             
        menu.classList.remove('show');
    }if(category == 'Sob'){
        Ini.classList.remove('show');
        Sob.classList.add('show');
        Indice.innerText = "SOBRE MI";
        Met.classList.remove('show');
        Pil.classList.remove('show');
        Cie.classList.remove('show');
        menu.classList.remove('show');
    }if(category == 'Met'){
        Ini.classList.remove('show');
        Sob.classList.remove('show');
        Met.classList.add('show');
        Indice.innerText = "METAS"
        Pil.classList.remove('show');
        Cie.classList.remove('show');
        menu.classList.remove('show');
    }if(category == 'Pil'){
        Ini.classList.remove('show');
        Sob.classList.remove('show');
        Met.classList.remove('show');
        Pil.classList.add('show');
        Indice.innerText = "PILARES"
        Cie.classList.remove('show');
        menu.classList.remove('show');
    }if(category == 'Cie'){
        Ini.classList.remove('show');
        Sob.classList.remove('show');
        Met.classList.remove('show');
        Pil.classList.remove('show');
        Cie.classList.add('show');
        Indice.innerText = "CIERRE"
        menu.classList.remove('show');
    }
}

var contadorEtapa = 0


function changeLS(sOr){
    
    const etapas = ["Infancia","Niñez","Adolescencia"]
    const contenidos = [
        "Llegué a este mundo en 2008. A los 2 años de edad ya podía hablar con claridad, y no había poder humano que me callara. Cuando tenía 4 años volé por primera vez en avión, con destino a Petén. Desafortunadamente, debido al cambio de clima, enfermé y tuvimos que regresar antes de lo planeado. Al cumplir 5 años comencé mi etapa estudiantil, y ese mismo año se unió un nuevo miembro a la familia: mi hermano. Recuerdo haber llorado de la emoción el día en que me fue anunciado su nacimiento."
        ,"En 2014 terminé mi preprimaria con una medalla de distinción y comencé la primaria al año siguiente. Durante mi primaria mantuve una racha de notas altas que me dieron la oportunidad de ser abanderado en varias ocasiones. Asimismo, como premio y método de comunicación, recibí mi primer smartphone. Mi padre viajaba constantemente y mi madre trabajaba durante el día, por lo que era mi abuela quien nos cuidaba; en ese contexto, el dispositivo fue muy útil. Sería en 2020 cuando todo cambiaría, no solo para mí, sino para el mundo en general, con la llegada de la pandemia."
        ,"En 2021 cursé primero básico de forma virtual, siendo mi último año de distinción académica y de verdadero orgullo personal. El 2022 fue mi peor año tanto académica como emocionalmente, marcado también por un accidente al ser atropellado, aunque sin lesiones graves. En 2023 regresé a las clases presenciales, un cambio brusco pero que sentí como un nuevo comienzo. En 2024, en bachillerato, logré formar amistades muy valiosas que me han ayudado a recuperar partes de mí que había perdido durante la pandemia, convirtiéndose en mi mejor año en mucho tiempo."
    ]

    const titEtapa = document.getElementById("titEtapa");
    const contEtapa = document.getElementById("contEtapa");

    if (sOr == '+' && contadorEtapa < 2) {
        contadorEtapa += 1;
    } 
    if (sOr == '-' && contadorEtapa > 0) {
        contadorEtapa -= 1;
    }

    titEtapa.innerText = etapas[contadorEtapa];
    contEtapa.innerText = contenidos[contadorEtapa];
}

// Detectar si el elemento está en el viewport
const AGSP = document.getElementById('AGSP');
const SUS = document.getElementById('suspenso')
const s1 = document.getElementById('s1')
const s2 = document.getElementById('s2')
const s3 = document.getElementById('s3')

var seHaMostrado = false

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !seHaMostrado) {
        setTimeout(() =>{
            s1.classList.add('show')
            setTimeout(() =>{
                s2.classList.add('show')
                setTimeout(() =>{
                    s3.classList.add('show')
                    setTimeout(() =>{
                        seHaMostrado = true
                        AGSP.classList.add('glow')
                        setTimeout(() =>{
                            AGSP.classList.remove('glow')
                            AGSP.classList.add('show')
                            SUS.classList.add('hide')

                        }, 3*1000);
                    }, 1*1000);
                }, 1*1000);
            }, 1*1000);
        }, 1*1000);
    }
  });
});

observer.observe(AGSP);