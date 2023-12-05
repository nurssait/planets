const plantes = [
    {
        name: 'Barbeton Daisy',
        price: 119,
        imgage: 'img/planets/image 1 (1).svg'
    },
    {
        name: 'Angel Wing Begonia',
        price: 169,
        imgage: 'img/planets/product-21-320x320 1.svg' 
    },
    {
        name: 'African Violet',
        price: 199,
        imgage: 'img/planets/image 2.svg'
    },
    {
        name: 'Beach Spider Lily',
        price:  129,
        imgage: 'img/planets/01 3.svg' 
    },
    {
        name: 'Blushing Bromeliad',
        price: 130,
        imgage: 'img/planets/image 7 (1).svg'
    },
    {
        name: 'Aluminum Plant',
        price: 179,
        imgage: 'img/planets/image 8.svg' 
    },
    {
        name: 'Birds Nest Fern',
        price: 99,
        imgage: 'img/planets/image 9.svg'
    },
    {
        name: 'Broadleaf Lady Palm',
        price: 59,
        imgage: 'img/planets/product-20-320x320 1.svg'
    },
    {
        name: 'Chinese Evergreen',
        price: 30,
        imgage: 'img/planets/image 10.svg'
    }
]
const render = (item) => {
    planets_row .innerHTML = ''
       if(item){
        plantes.forEach(item => {
            if(item.price >= +range.value + 30){
                planets_row.innerHTML += `
        <div class="planets_item">
                    <div class="planets_image">
                        <img class="planets_img" src="${item.imgage}" alt="">
                        <div class="planets_buttons">
                            <img src="img/nav/Vector (5).svg" alt="">
                            <img src="img/planets/heart 1.svg" alt="">
                            <img src="img/nav/Vector (4).svg" alt="">
                        </div>
                    </div>
                <div class="planets_title">${item.name}</div>
            <div class="planets_price">${item.price}.00</div>
        </div>
        `
            }
        }
        )
       }else{
        plantes.forEach(item => {
            planets_row.innerHTML += `
            <div class="planets_item">
                        <div class="planets_image">
                            <img class="planets_img" src="${item.imgage}" alt="">
                            <div class="planets_buttons">
                                <img src="img/nav/Vector (5).svg" alt="">
                                <img src="img/planets/heart 1.svg" alt="">
                                <img src="img/nav/Vector (4).svg" alt="">
                            </div>
                        </div>
                    <div class="planets_title">${item.name}</div>
                <div class="planets_price">${item.price}.00</div>
            </div>
            `
            }
            )
       }
}
filterButton.addEventListener('click', () => render(range.value + 1))
range.addEventListener("change", () => {
    priceRange.innerHTML = +range.value + 30 + '$'
})
let check = 0
searchImg.addEventListener('click', () => {
    if(check === 0){
        searchInp.classList.remove('none')
        searchImg.classList.add('serchClick')
        check = 1
    }else{
        searchInp.classList.add('none')
        searchImg.classList.remove('serchClick')
        check = 0
    }
})
let i = 0
login.addEventListener('click', () => {
    modal.classList.remove('none')
    modalBlur.classList.remove('none')
})
closeModal.addEventListener('click', () => {
    modal.classList.add('none')
    modalBlur.classList.add('none')
})
search.addEventListener('click', () => {
    if(i == 0){
        searchInp.classList.remove('none')
        searchImg.classList.add('nav_col3-img')
        i = 1
    }else{
        searchInp.classList.add('none')
        searchImg.classList.remove('nav_col3-img')
        i = 0
    }
})
let swiper = new Swiper(".mySwiper", {
    spaceBeetwen: 30,
    pagination: {
        el: ".swiper-pagination"
    },
    mousewhell: true,
    keyboard: true
})
render()