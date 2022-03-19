// for scroll event
const nav = document.querySelector('#mainNav');

window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 100) {
        nav.classList.add('stickyNav');
    } else {
        nav.classList.remove('stickyNav');

    }
});

//mob navbar 
const whole_content = document.querySelector('#mob_navbar')
const chevronIconMainMenu = document.querySelector('#main_menu')

chevronIconMainMenu.addEventListener('click', ()=>{
    if(whole_content.classList.contains('hidden')){
        whole_content.classList.remove('hidden');
        whole_content.classList.add('block');
    }else{
        whole_content.classList.remove('block');
        whole_content.classList.add('hidden');
    }
})

//mobile_inbound
const mobInboundBtn = document.querySelector('#mob-inbound-btn')
const mobInbounddropdown = document.querySelector('#mob-inbound-dropdown')

mobInboundBtn.addEventListener('click', ()=>{
    if(mobInbounddropdown.classList.contains('hidden')){
        mobInbounddropdown.classList.remove('hidden');
        mobInbounddropdown.classList.add('flex');
        mobInboundBtn.name = "remove-outline";
    }else{
        mobInbounddropdown.classList.remove('flex');
        mobInbounddropdown.classList.add('hidden');
        mobInboundBtn.name = "add-outline";
    }
})

//mobile_outbound
const mobOutboundbtn = document.querySelector('#mob-outbound-btn')
const mobOutboundropdown = document.querySelector('#mob-outbound-dropdown')

mobOutboundbtn.addEventListener('click', ()=>{
    if(mobOutboundropdown.classList.contains('hidden')){
        mobOutboundropdown.classList.remove('hidden');
        mobOutboundropdown.classList.add('flex');
        mobOutboundbtn.name = "remove-outline";
    }else{
        mobOutboundropdown.classList.remove('flex');
        mobOutboundropdown.classList.add('hidden');
        mobOutboundbtn.name = "add-outline";
    }
})

//mobile_outcoming
const mobUpcomingbtn = document.querySelector('#mob-upcoming-btn')
const mobUpcomingdropdown = document.querySelector('#mob-upcoming-dropdown')

mobUpcomingbtn.addEventListener('click', ()=>{
    if(mobUpcomingdropdown.classList.contains('hidden')){
        mobUpcomingdropdown.classList.remove('hidden');
        mobUpcomingdropdown.classList.add('flex');
        mobUpcomingbtn.name = "remove-outline";
    }else{
        mobUpcomingdropdown.classList.remove('flex');
        mobUpcomingdropdown.classList.add('hidden');
        mobUpcomingbtn.name = "add-outline";
    }
})

//mobile_resort
const mobResortbtn = document.querySelector('#mob-resort-btn')
const mobResortdropdown = document.querySelector('#mob-resort-dropdown')

mobResortbtn.addEventListener('click', ()=>{
    if(mobResortdropdown.classList.contains('hidden')){
        mobResortdropdown.classList.remove('hidden');
        mobResortdropdown.classList.add('flex');
        mobResortbtn.name = "remove-outline";
    }else{
        mobResortdropdown.classList.remove('flex');
        mobResortdropdown.classList.add('hidden');
        mobResortbtn.name = "add-outline";
    }
})








