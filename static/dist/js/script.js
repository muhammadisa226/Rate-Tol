// Toggle
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
    chatboxMessage.classList.toggle('show')
})

//dropdown toggle
const dropdownToggle = document.querySelector('chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function(){
    dropdownMenu.classList.toggle('show')
})