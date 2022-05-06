let menu = document.getElementById('menu')
let subMenu = document.getElementById('subMenu')
let burger = document.getElementById('burger')
let hamburger = document.getElementById('hamburger')
let close = document.getElementById('close')
let login = document.getElementById('login')
let features = document.getElementById('features')
let featuresDetails = document.getElementById('featuresDetails')
let company = document.getElementById('company')
let companyDetails = document.getElementById('companyDetails')

burger.addEventListener('click',()=>{
    subMenu.classList.toggle('nShow')
    hamburger.classList.toggle('nShow')
    close.classList.toggle('nShow')
    login.classList.toggle('nShow')
})

features.addEventListener('click',()=>{
    featuresDetails.classList.toggle('nShow')
    features.classList.toggle('down')
    features.classList.toggle('up')
})

company.addEventListener('click',()=>{
    companyDetails.classList.toggle('nShow')
    company.classList.toggle('down')
    company.classList.toggle('up')
})


