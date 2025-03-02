const carroussel = document.querySelector('.carroussell-track');
const cards = document.querySelectorAll('.card');
const botonAtras = document.querySelector('.boton-atras');
const botonAdelante = document.querySelector('.boton-adelante');
const openpopup = document.querySelector("#open-btn");
const closebutton = document.querySelector("#closePopup");
const popup = document.querySelector("#popup");
const body = document.body;
const just = document.querySelector(".just");
const bellButton = document.getElementById('bell');
const closeBtn = document.getElementById('clos-btn');
const resume = document.getElementById("resumes");
const btnOpenResume = document.getElementById("myResume");
const btnCloseResume = document.getElementById("myResumeClose");
const parallaxBackground = document.querySelector('#parallax-background');

botonAtras.addEventListener('click', () => {
  moverCarroussel(-1);
});

botonAdelante.addEventListener('click', () => {
  moverCarroussel(1);
});

function moverCarroussel(direccion) {
  const primerCard = cards[0];
  const primerCardRect = primerCard.getBoundingClientRect();
  carroussel.scrollBy(primerCardRect.width * direccion, 0);
  
  if (direccion === -1 && carroussel.scrollLeft === 0) {
    const ultimoCard = cards[cards.length - 1];
    carroussel.appendChild(ultimoCard);
  } else if (direccion === 1 && carroussel.scrollLeft + carroussel.offsetWidth >= carroussel.scrollWidth) {
    carroussel.scrollLeft = 0; 
  }
}

openpopup.addEventListener ("click", () => {
  popup.classList.add("active");
  body.classList.add('no-scroll');
});

closebutton.addEventListener("click", () => {
  popup.classList.remove("active");
  body.classList.remove('no-scroll');
});

bellButton.addEventListener("click", () => {
  just.classList.add("visible");
  body.classList.add("no-scroll");
});

closeBtn.addEventListener('click', () => {
  just.classList.remove("visible");
  body.classList.remove('no-scroll');
});

btnOpenResume.addEventListener('click', () => {
  resume.classList.add("resumesVisible");
});
btnCloseResume.addEventListener('click', () => {
  resume.classList.remove('resumesVisible');
});



document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 15;
  const y = (e.clientY / window.innerHeight) * 15;

  parallaxBackground.style.backgroundPosition = `${50 - x}% ${50 - y}%`;
});

document.querySelectorAll('.botOn').forEach((button, index) => {
  button.addEventListener('click', () => {

    const allCards = document.querySelectorAll('.littleCard');
    

    allCards.forEach(card => card.classList.remove('actv'));

    allCards[index].classList.toggle('actv');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll('.botOn');
  const closeButtons = document.querySelectorAll('.closeCard');

  openButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          const littleCard = button.nextElementSibling;
          littleCard.classList.add('actv');
      });
  });

  closeButtons.forEach((button) => {
      button.addEventListener('click', () => {
          const littleCard = button.parentElement;
          littleCard.classList.remove('actv');
      });
  });
});



