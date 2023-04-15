"use strict";

const inputs = document.querySelectorAll('.inputs');
const inputName = document.querySelector('.input__name');
const inputCard = document.querySelector('.input__number');

// const exp = document.querySelectorAll('.input__exp')

const errExp = document.querySelector('.error__date')
const error = document.querySelectorAll('.error')
const errorName = document.querySelector('.error__name')
const errorCard = document.querySelector('.error__number')

const month = document.querySelector('.months')
const year = document.querySelector('.years')
const cvc = document.querySelector('.input__cvc') 

const errCvc = document.querySelector('.error__cvc')

const cardName = document.querySelector('.card__name')
const cardNumber = document.querySelector('.card__number')
const cardYear = document.querySelector('.exp__year')
const cardMonth = document.querySelector('.exp__month')
const cardCvc = document.querySelector('.card__cvc')

const btn = document.querySelector('.confirm')


const card = function () {

    
    cardName.textContent = inputName.value;
    cardNumber.textContent = inputCard.value;
    cardYear.textContent = year.value;
    cardMonth.textContent = month.value;
    cardCvc.textContent = cvc.value;

}






inputName.addEventListener('input', () => {

        inputName.setCustomValidity('')
        errorName.textContent = ''
    

    if (inputName.classList.contains('invalid')) {
        
        inputName.classList.remove('invalid')

    }

} )

inputName.addEventListener('invalid', () => {

    





})

// card

inputCard.addEventListener('input', () =>   {

    inputCard.setCustomValidity('')
    errorCard.textContent = ''


if (inputCard.classList.contains('invalid')) {
    
    inputCard.classList.remove('invalid')

}

 let formattedValue = inputCard.value.replace(/[^\d]/g, '');
 formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ')
 inputCard.value = formattedValue.trim()


})



inputCard.addEventListener('invalid', (e) => {

    e.preventDefault()

    if (inputCard.value === '') {
        

        errorCard.textContent = 'This field is required'
        inputCard.setCustomValidity('This field is required')
        
    
        inputCard.classList.add('invalid')
    }
    


    
    if (!inputCard.validity.valid) {
    

        errorCard.textContent = 'Invalid Card Number'
        inputCard.setCustomValidity('Invalid Card Number')
        
    
        inputCard.classList.add('invalid')


    }
    
    

} )

year.addEventListener('input', () => {

    year.setCustomValidity('')
    
    errExp.textContent = ''


if (year.classList.contains('invalid')) {
    
    year.classList.remove('invalid')

}

})

year.addEventListener('invalid', (e) => {

    e.preventDefault()

    if (year.value === '') {
        

        errExp.textContent = 'This field is required'
        year.setCustomValidity('This field is required')
        
    
        year.classList.add('invalid')
    }

    if (!year.validity.valid) {
    

        errExp.textContent = 'Invalid Cvc'
        year.setCustomValidity('Invalid Expiry Date')
        
    
        year.classList.add('invalid')


    }
   
    

})



month.addEventListener('input', () => {

    month.setCustomValidity('')
    
    errExp.textContent = ''


if (month.classList.contains('invalid')) {
    
    month.classList.remove('invalid')

}

})

month.addEventListener('invalid', (e) => {

    e.preventDefault()

    if (month.value === '') {
        

        errExp.textContent = 'This field is required'
        month.setCustomValidity('This field is required')
        
    
        month.classList.add('invalid')
    }

    if (!month.validity.valid) {
    

        errExp.textContent = 'Invalid Expiry Date'
        month.setCustomValidity('Invalid Expiry Date')
        
    
        month.classList.add('invalid')


    }
   
    

})


cvc.addEventListener('input', () => {

    cvc.setCustomValidity('')
    
    errExp.textContent = ''


if (cvc.classList.contains('invalid')) {
    
    cvc.classList.remove('invalid')

}

})

cvc.addEventListener('invalid', (e) => {

    e.preventDefault()

    if (cvc.value === '') {
        

        errExp.textContent = 'This field is required'
        cvc.setCustomValidity('This field is required')
        
    
        cvc.classList.add('invalid')
    }

    if (!cvc.validity.valid) {
    

        errCvc.textContent = 'Invalid Cvc'
        cvc.setCustomValidity('Invalid Cvc')
        
    
        cvc.classList.add('invalid')


    }
   
    

})



btn.addEventListener('click', () => {


    if ( inputCard.validity.valid && inputName.validity.valid && month.validity.valid & year.validity.valid && cvc.validity.valid) {
        
     card()   

     document.querySelector('.inputs').style.display = 'none'
     document.querySelector('.wrapper').style.display = 'grid'

    }



})