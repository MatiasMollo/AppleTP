// Obtenemos los disparadores
let triggers = document.querySelectorAll('.popup-trigger');

let popup = document.querySelector('.popup');
let popupImage = popup.querySelector('img')
let closeButton = popup.querySelector('button');

//En un bucle, le asignamos un escuchador a cada uno
for(let trigger of triggers){
    trigger.addEventListener('click',function(event){
        let currentImg = event.currentTarget;

        popupImage.src = currentImg.src
        popupImage.alt = currentImg.alt
        
        popup.classList.remove('d-none')
        popup.classList.add('d-block')
    })
}


closeButton.addEventListener('click',e => closeModal())

function closeModal(){
    popup.classList.remove('d-block')
    popup.classList.add('d-none')
}

document.addEventListener('click',function(event){
    
    //! Revisar como puedo blurrear el fondo y cerrar el popup al tocar afuera
    console.log(event.target)
})


// Hacer galeria, clickeando se obtienen el resto de imagenes de los otros iphones