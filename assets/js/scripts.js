var imagesCarousel = document.querySelectorAll('.carousel__img')
var btnCarousel = document.querySelectorAll('.carousel-radio')
var nextBtnCarousel = document.querySelector('.carousel__next')
var prevBtnCarousel = document.querySelector('.carousel__prev')
var carouselDetail = document.querySelector('.carousel__img-show')
var introduceVideo = document.querySelector('.introduce__video video')
var fixedHeader = document.querySelector('.header--fixed')
var btnScrollToTop = document.querySelector('.btn__to--top')
var btnNavMobile = document.querySelector('.header--mobile--tablet')
var modalNav = document.querySelector('.modal--nav')
var modalNavInner = document.querySelector('.modal--nav__inner')
var btnCloseModalNav = document.querySelector('.modal--nav__close--btn')


// fixed header top and btn scroll to top
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 400){
        fixedHeader.classList.add('show')
        btnScrollToTop.classList.add('show')
    }else{
        fixedHeader.classList.remove('show')
        btnScrollToTop.classList.remove('show')
    }
}

btnScrollToTop.addEventListener('click', () =>{
    document.documentElement.scrollTop = 0
})



// header carousel
var currentIndex = 0

const loadCarousel = (index) =>{
    carouselDetail.src = imagesCarousel[index].src
    btnCarousel[index].checked = true
}


nextBtnCarousel.addEventListener('click',function(){
    if(currentIndex == imagesCarousel.length-1){
        currentIndex = 0
    }else{
        currentIndex++
    }
    loadCarousel(currentIndex)
})

prevBtnCarousel.addEventListener('click',function(){
    if(currentIndex == 0){
        currentIndex = imagesCarousel.length - 1
    }else{
        currentIndex--
    }
    loadCarousel(currentIndex)
})

btnCarousel.forEach((item, index) => {
    item.addEventListener('click',function(){
        item.checked = true
        loadCarousel(index)
    })
})


setInterval(()=>{
    nextBtnCarousel.click();
},3000)

// Nav mobile and tablet

btnNavMobile.addEventListener('click',()=>{
    modalNav.classList.toggle('show')
})


btnCloseModalNav.addEventListener('click', () =>{
    modalNav.classList.toggle('show')
})



modalNavInner.addEventListener('click',(e) =>{
    e.stopPropagation()
})

modalNav.addEventListener('click', ()=>{
    modalNav.classList.toggle('show')
})

