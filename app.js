let btn = document.querySelector('.book_session_button');
let transformBtn = document.querySelector('.view_more_transform');
let transformCard = document.querySelectorAll('.hidden');

btn.addEventListener('click', (event)=>{
    //event.preventDefault();
    console.log('clicked')});



transformBtn.addEventListener('click', (event)=>{
    for (let card of transformCard) {
        card.classList.toggle('hidden');
    }
});

    