
let bookSessionBtn = document.querySelector('.book_session_button');
let transformBtn = document.querySelector('.view_more_transform');
let transformCard = document.querySelectorAll('.hidden');
let transformContainer = document.querySelector('#transform_card_grid_container');

bookSessionBtn.addEventListener('click', (event) => {
    //event.preventDefault();
    console.log('clicked')
});



transformBtn.addEventListener('click', (event) => {
    for (let card of transformCard) {
        card.classList.toggle('hidden');
        transformBtn.innerText === 'View More Transformations' ? transformBtn.innerHTML = `View Less<i class="fa-solid fa-arrow-right-long"></i>` : transformBtn.innerHTML = `View More Transformations<i class="fa-solid fa-arrow-right-long"></i>`;
    }

});

// YOUR_OPENROUTER_API_KEY_HERE