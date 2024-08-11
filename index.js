//participants carousel large screen 
const partic_div = document.querySelector('.participants-carousel');
const participants = [
    {id: 1, name: "Хозе-Рауль Капабланка", title: "Чемпион мира по шахматам"},
    {id: 2, name: "Эммануил Ласкер", title: "Чемпион мира по шахматам"},
    {id: 3, name: "Александр Алехин", title: "Чемпион мира по шахматам"},
    {id: 4, name: "Арон Нимцович", title: "Чемпион мира по шахматам"},
    {id: 5, name: "Рихард Рети", title: "Чемпион мира по шахматам"},
    {id: 6, name: "Остап Бендер", title: "Гроссмейстер"}
]

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let carouselCounter = document.querySelector('.carousel-counter'); 
let div_html = " ";

function initialState() {
    carouselCounter.innerHTML = `3 / 6`;
    prev.style.backgroundColor = "#D6D6D6";
    prev.disabled = "true";
    for (let i = 0; i < 3; i++){
        div_html += `
                 <div class="participant-card">
                        <div class="card-img">
                            <img src="./assets/Group 16.png" alt="фото участника">
                        </div>
                        <div class="card-name"> ${participants[i].name}</div>
                        <div class="card-title">  ${participants[i].title}</div>
                        <div class="card-action">
                            <button> Подробнее </button>
                        </div>
                    </div>
        `
    }
    partic_div.innerHTML = div_html;
    }

initialState();


next.addEventListener('click', ()=>{
    carouselCounter.innerHTML = `4 / 6`;
    next.style.backgroundColor = "#D6D6D6";
    next.disabled = "true";
    div_html = " ";
    for (let i = 3; i < 6; i++){
        div_html += `
                 <div class="participant-card">
                        <div class="card-img">
                            <img src="./assets/Group 16.png" alt="фото участника">
                        </div>
                        <div class="card-name"> ${participants[i].name}</div>
                        <div class="card-title">  ${participants[i].title}</div>
                        <div class="card-action">
                            <button> Подробнее </button>
                        </div>
                    </div>
        `
    }
    partic_div.innerHTML = div_html;
    prev.removeAttribute("disabled");
    prev.style.backgroundColor = "#313131";
})

prev.addEventListener("click", ()=> {
    div_html = " ";
   initialState();
   next.style.backgroundColor = "#313131";
    next.removeAttribute("disabled");
    
})

prev.addEventListener('mouseenter', ()=>{
    if(!prev.disabled) {
        prev.style.backgroundColor="#FBCE51";
    }
})

prev.addEventListener('mouseleave', ()=>{
    if(!prev.disabled) {
        prev.style.backgroundColor="#313131";
    }
})

next.addEventListener('mouseenter', ()=>{
    if(!next.disabled) {
        next.style.backgroundColor="#FBCE51";
    }
})

next.addEventListener('mouseleave', ()=>{
    if(!next.disabled) {
        next.style.backgroundColor="#313131";
    }
})

//end 

//steps carousel small screen
let steps_counter = 0;
const steps = [
    [{num: 1, text:'Строительство железнодорожной магистрали Москва-Васюки'}, {num: 2, text:'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов'}],
    [{num: 3, text:'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет'}],
    [{num: 4, text:'Строительство дворца для турнира'}, {num:5, text:'Размещение гаражей для гостевого автотранспорта'}],
    [{num: 6, text:'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов '}],
    [{num: 7, text:'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн '}]
  ]

const steps_block = document.querySelector('.step-item-block');
const steps_dots = document.querySelector('.steps-dots');
steps_dots.children[0].classList.toggle('dot_active');
const prev_step = document.querySelector('.prev-step');
const next_step = document.querySelector('.next-step');
if (steps_counter == 0){
    prev_step.disabled = "true";
    prev_step.style.backgroundColor = "#D6D6D6";
}
  

  function renderStep (counter) {
    let html_div = " ";
    for (let i = 0; i < steps[counter].length; i++)
    {  html_div += `
             <div class="step-item-card">
                <span class="step-item-circle"> ${steps[counter][i].num} </span>
                <p class="step-item-text"> ${steps[counter][i].text}</p>
            </div>
        `
    }
    steps_block.innerHTML = html_div;
  }

  prev_step.addEventListener('click', ()=>{
    if(next_step.disabled){
        next_step.removeAttribute('disabled');
        next_step.style.backgroundColor = "#313131";
    }
    steps_dots.children[steps_counter].classList.toggle('dot_active');
    steps_counter--;
    steps_dots.children[steps_counter].classList.toggle('dot_active');
    renderStep(steps_counter);
    if(steps_counter == 0) {
        prev_step.disabled = "true";
        prev_step.style.backgroundColor = "#D6D6D6";
    }
  })

  next_step.addEventListener('click', ()=> {
    if(prev_step.disabled){
        prev_step.removeAttribute('disabled');
        prev_step.style.backgroundColor = "#313131";
    }
    steps_dots.children[steps_counter].classList.toggle('dot_active');
    steps_counter++;
    steps_dots.children[steps_counter].classList.toggle('dot_active');
    renderStep(steps_counter);
    if(steps_counter == (steps.length - 1)) {
        next_step.disabled = "true";
        next_step.style.backgroundColor = "#D6D6D6";
    }
  }) 

  prev_step.addEventListener('mouseenter', ()=>{
    if(!prev_step.disabled) {
        prev_step.style.backgroundColor="#FBCE51";
    }
})

prev_step.addEventListener('mouseleave', ()=>{
    if(!prev_step.disabled) {
        prev_step.style.backgroundColor="#313131";
    }
})

next_step.addEventListener('mouseenter', ()=>{
    if(!next_step.disabled) {
        next_step.style.backgroundColor="#FBCE51";
    }
})

next_step.addEventListener('mouseleave', ()=>{
    if(!next_step.disabled) {
        next_step.style.backgroundColor="#313131";
    }
})

  renderStep(steps_counter);

//

//participants carousel small screen 
const card_block  = document.querySelector('.card_block_wrapper');
const carousel_counter_div = document.querySelector('.carousel-counter_small');
const prev_part = document.querySelector('.prev_part');
const next_part = document.querySelector('.next_part');
let timer;

cards_counter = 0;

function renderCard(counter) {
    carousel_counter_div.innerHTML = `${participants[counter].id} / 6`;
    card_block.innerHTML = `
    <div class="participant-card">
                    <div class="card-img">
                        <img src="./assets/Group 16.png" alt="фото участника">
                    </div>
                    <div class="card-name"> ${participants[counter].name}</div>
                    <div class="card-title"> ${participants[counter].title}</div>
                    <div class="card-action">
                        <button> Подробнее </button>
                    </div>
                </div>
    `
    
}

function changeSlide(){
    if(cards_counter == (participants.length-1)){
        cards_counter = 0;
        renderCard(cards_counter);
    } else {
        cards_counter++;
        renderCard(cards_counter);
    }
}

function setTimer (){
 timer = setInterval(changeSlide, 4000);
}

setTimer();
renderCard(cards_counter); 

prev_part.addEventListener('click', ()=>{
    clearInterval(timer);
    if(cards_counter == 0){
        cards_counter = (participants.length-1);
        renderCard(cards_counter);
    } else {
        cards_counter--;
        renderCard(cards_counter);
    }
    setTimeout(setTimer, 3000);
})

next_part.addEventListener('click', ()=> {
    clearInterval(timer);
    changeSlide();
    setTimeout(setTimer, 3000);
})

prev_part.addEventListener('mouseenter', ()=>{
        prev_part.style.backgroundColor="#FBCE51";
})

prev_part.addEventListener('mouseleave', ()=>{
        prev_step.style.backgroundColor="#313131";
})

next_part.addEventListener('mouseenter', ()=>{
        next_step.style.backgroundColor="#FBCE51";
})

next_part.addEventListener('mouseleave', ()=>{
        next_step.style.backgroundColor="#313131";
})