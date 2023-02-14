const closeBtn = document.getElementsByClassName("modal__close").item(0)
const modal = document.getElementsByClassName("modal").item(0)
const modalBg = document.getElementsByClassName("modal__bg").item(0)
const introBtn = document.getElementsByClassName("intro__btn").item(0)

closeBtn.addEventListener("click", closeModal)
modalBg.addEventListener("click", closeModal)
introBtn.addEventListener("click", openModal)

function closeModal() {
    modal.classList.remove("active")
}

function openModal() {
    modal.classList.add("active")
}

const burgerBtn = document.getElementsByClassName("header__burger").item(0)
const burgerClose = document.getElementsByClassName("burger__close").item(0)
const burgerContent = document.getElementsByClassName("burger__content").item(0)

burgerBtn.addEventListener("click", openBurger)
burgerClose.addEventListener("click", closeBurger)

function openBurger() {
    burgerContent.classList.add("active")
}

function closeBurger() {
    burgerContent.classList.remove("active")
}