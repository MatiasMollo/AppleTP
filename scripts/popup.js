//* Declaracion de variables

// Obtenemos los disparadores
let triggers = document.querySelectorAll('.popup-trigger');
let main = document.querySelector('main');

let popup = document.querySelector('.popup');
let popupImage = popup.querySelector('img')
let closeButton = popup.querySelector('.backButton');

// Botones de navegación de la galería
let leftbutton = popup.querySelector('.leftButton');
let rightButton = popup.querySelector('.rightButton');

let images = document.querySelectorAll('.image')


//*Listeners 

//En un bucle, le asignamos un escuchador a cada trigger
for(let trigger of triggers){
    trigger.addEventListener('click',function(event){
        changePhoto(event.currentTarget)
        openModal();
    })
}

//Botones del modal
closeButton.addEventListener('click',e => closeModal())
rightButton.addEventListener('click',e => getImageData(next = true))
leftbutton.addEventListener('click',e => getImageData())

main.addEventListener('click',function(event){
    //Cierra el modal si el target no es una imagen y el popup esta visible
    if(!event.target.classList.contains('image') && popup.classList.contains('d-block'))
        closeModal()
})


//* Funciones

/**
 * Obtiene la imagén a procesar y llama a la función changePhoto para renderizarla
 * @param {Bool} next = false
 */
function getImageData(next = false){
    let currentIndex, index = 0;

    //Obtenemos el indice de la imagen actual en el popup
    while(index < images.length && !currentIndex){
        if (images[index].src == popupImage.src) currentIndex = index
        index++;
    }

    if(next){
        currentIndex++;
        if(currentIndex >= images.length) currentIndex = 0;
    } 
    else {
        currentIndex--;
        if(currentIndex < 0) currentIndex = images.length - 1
    }

    changePhoto(images[currentIndex])
}

/**
 * Carga la foto del modal y sus datos correspondientes en el resto de etiquetas.
 * @param {HtmlElement} image 
 */
function changePhoto(image){
    popupImage.src = image.src
    popupImage.alt = image.alt
    popup.querySelector('h3').innerText = image.alt
}

/**
 * Cierra el modal
 */
function closeModal(){
    popup.classList.remove('d-block')
    popup.classList.add('d-none')
    main.classList.remove('blur');
}

/**
 * Abre el modal y aplica la clase blur al main
 */
function openModal(){
    popup.classList.remove('d-none')
    popup.classList.add('d-block')
    main.classList.add('blur')
}