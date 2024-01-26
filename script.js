const div = document.querySelector(".typed")
const text = "Frontend Developer";

function textTypingEffect(element, text, i = 0) {
  element.textContent += text[i];

  // if the string ends
  if (i === text.length - 1) {
    return
  }

  setTimeout (() => textTypingEffect(element, text, i + 1), 300);
}

textTypingEffect(div, text)

const span = document.querySelector(".type")
const word = "I'm a";

function textTypingEffect(element, text, i = 0) {
  element.textContent += text[i];

  // if the string ends
  if (i === text.length - 1) {
    return
  }

  setTimeout (() => textTypingEffect(element, text, i + 1), 100);
}

textTypingEffect(span, word)

const scrollToTopButton = document.querySelector ('#scroll-to-top')

 scrollToTopButton.addEventListener('click', function (){
    window.scrollTo({
        top: "20", behavior: 'smooth'
    })
 })
 

 /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 3000,
  viewFactor: 0,
  reset: true
})

sr.reveal('#my-img',{delay: 200})
sr.reveal('#intro',{delay: 200})
sr.reveal('h2',{delay: 300})
sr.reveal('#about-me',{delay: 300})
sr.reveal('#stack',{delay: 200})
sr.reveal('article',{delay: 200})
sr.reveal('form ',{delay: 200})


const sr2 = ScrollReveal({
  viewFactor: 0,
  origin: 'left',
  distance: '120px',
  duration: 2000,
  mobile: true,
  reset: true
})

sr2.reveal('#web-development',{delay: 200})
sr2.reveal('#prj1',{delay: 200})
sr2.reveal('#prj3',{delay: 200})
sr2.reveal('.sk1',{delay: 200})
sr.reveal('#contact',{delay: 300})


const sr3 = ScrollReveal({
  origin: 'right',
  distance: '120px',
  duration: 2000,
  reset: true
})

sr3.reveal('#web-design',{delay: 200})
sr3.reveal('#prj2',{delay: 200})
sr3.reveal('#prj4',{delay: 200})
sr3.reveal('.sk2',{delay: 200})