const scrollElement = document.querySelector('nav')

window.addEventListener('scroll',function() {
    const scrollY = window.scrollY;

    if (scrollY<=1){
        scrollElement.style.backgroundColor = 'rgba(55, 49, 69, 0)'
    }
    else if (scrollY<=1.3){
        scrollElement.style.backgroundColor = 'rgba(55, 49, 69, 0.3)'
    }
    else if (scrollY<=50){
        scrollElement.style.backgroundColor = 'rgba(55, 49, 69, 0.5)'
    }
    else if (scrollY<=100){
        scrollElement.style.backgroundColor = 'rgba(55, 49, 69, 0.7)'
    }
    else {
        scrollElement.style.backgroundColor = 'rgba(55, 49, 69, 1)'
    }
})

function showItem() {
    let firstItem = document.getElementById("firstbullet")
    let secondItem = document.getElementById("secondbullet")
    let thirdItem = document.getElementById("thirdbullet")
    let firstItemContent = document.getElementById("firstbulletcontent")
    let secondItemContent = document.getElementById("secondbulletcontent")
    let thirdItemContent = document.getElementById("thirdbulletcontent")
    if(event.currentTarget.id=="firstbullet") {
        firstItem.classList.add("swiper-pagination-bullet-active")
        secondItem.classList.remove("swiper-pagination-bullet-active")
        thirdItem.classList.remove("swiper-pagination-bullet-active")
        firstItemContent.style.display='flex'
        secondItemContent.style.display='none'
        thirdItemContent.style.display='none'
    }
    else if(event.currentTarget.id=="secondbullet") {
        firstItem.classList.remove("swiper-pagination-bullet-active")
        secondItem.classList.add("swiper-pagination-bullet-active")
        thirdItem.classList.remove("swiper-pagination-bullet-active")
        firstItemContent.style.display='none'
        secondItemContent.style.display='flex'
        thirdItemContent.style.display='none'
    }
    else {
        firstItem.classList.remove("swiper-pagination-bullet-active")
        secondItem.classList.remove("swiper-pagination-bullet-active")
        thirdItem.classList.add("swiper-pagination-bullet-active")
        firstItemContent.style.display='none'
        secondItemContent.style.display='none'
        thirdItemContent.style.display='flex'
    }
}

function toggleOS() {
    let windowsElement = document.getElementById("windows")
    let macElement = document.getElementById("mac")
    let windowsGradient = document.getElementById("windowsgradient")
    let macGradient = document.getElementById("macgradient")
    let windowsSvg = document.getElementById("windowssvg")
    let macSvg = document.getElementById("macsvg")
    if(event.currentTarget.id=="windows") {
        windowsElement.classList.remove("borderColorFalse")
        windowsElement.classList.add("borderColorTrue")
        macElement.classList.remove("borderColorTrue")
        macElement.classList.add("borderColorFalse")
        windowsGradient.classList.remove("gradientFalse")
        windowsGradient.classList.add("gradientTrue")
        macGradient.classList.remove("gradientTrue")
        macGradient.classList.add("gradientFalse")
        windowsSvg.classList.remove("textDark")
        windowsSvg.classList.add("textLight")
        macSvg.classList.remove("textLight")
        macSvg.classList.add("textDark")
    }
    else if(event.currentTarget.id=="mac") {
        macElement.classList.remove("borderColorFalse")
        macElement.classList.add("borderColorTrue")
        windowsElement.classList.remove("borderColorTrue")
        windowsElement.classList.add("borderColorFalse")
        macGradient.classList.remove("gradientFalse")
        macGradient.classList.add("gradientTrue")
        windowsGradient.classList.remove("gradientTrue")
        windowsGradient.classList.add("gradientFalse")
        windowsSvg.classList.remove("textLight")
        windowsSvg.classList.add("textDark")
        macSvg.classList.remove("textDark")
        macSvg.classList.add("textLight")
    }
}