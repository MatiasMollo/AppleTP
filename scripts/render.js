//Datos de la supuesta DB
const iphones = [
    {
        title: 'iPhone 15 Pro Max',
        img: {
            src: 'img/iphone15promax.jpg',
            alt: 'iPhone 15 Pro max'
        },
        content: 'El <strong>iPhone 15 Pro Max</strong>  representa la máxima expresión de la tecnología móvil. Equipado con el nuevo chip A17 Pro, ofrece un rendimiento extremadamente rápido y eficiente, ideal para usuarios exigentes que requieren la mejor experiencia en gaming, edición de video 4K y aplicaciones profesionales. Su pantalla Super Retina XDR de 6.7 pulgadas proporciona colores vibrantes y un contraste excepcional, mientras que el diseño de titanio garantiza durabilidad y ligereza. La cámara triple con sensores avanzados y capacidades mejoradas de fotografía computacional permite capturar imágenes y videos con una calidad sin igual, incluso en condiciones de baja luz. La tecnología ProMotion y el soporte para el nuevo Apple Pencil (si está disponible) amplían aún más sus capacidades creativas.'
    },
    {
        title: 'iPhone 15 Pro',
        img: {
            src: 'img/iphone15pro.webp',
            alt: 'iPhone 15 Pro'
        },
        content: 'El <strong>iPhone 15 Pro</strong> combina potencia y portabilidad en un diseño elegante. Con el chip A17 Pro, este modelo ofrece un rendimiento impresionante y una experiencia de usuario fluida. Su pantalla Super Retina XDR de 6.1 pulgadas ofrece una visualización vibrante y nítida. La configuración de cámara triple, similar a la del 15 Pro Max, asegura una calidad fotográfica superior, mientras que su diseño de titanio proporciona robustez y ligereza. Es ideal para aquellos que desean un dispositivo de alto rendimiento en un tamaño más compacto.'
    },
    {
        title: 'iPhone 15 Plus',
        img: {
            src: 'img/iphone15plus.webp',
            alt: 'iPhone 15 Plus'
        },
        content: 'El <strong>iPhone 15 Plus</strong> ofrece una pantalla grande de 6.7 pulgadas con la tecnología Super Retina XDR, perfecta para quienes disfrutan de una experiencia visual inmersiva. Equipado con el chip A16 Bionic, combina potencia y eficiencia para un rendimiento excepcional en aplicaciones diarias y entretenimiento multimedia. La cámara dual mejora la captura de fotos y videos, y su diseño de  aluminio proporciona durabilidad y un peso equilibrado. Este modelo es ideal para quienes buscan una pantalla grande y un rendimiento sólido sin necesidad de las características más avanzadas.'
    },
    {
        title: 'iPhone 15',
        img: {
            src: 'img/iphone15.jfif',
            alt: 'iPhone 15'
        },
        content: 'El <strong>iPhone 15 </strong> es la opción versátil y accesible dentro de la gama más reciente. Con el chip A16 Bionic, ofrece un rendimiento rápido y eficiente para todas tus necesidades diarias. Su pantalla Super Retina XDR de 6.1 pulgadas proporciona una visualización clara y vibrante. La cámara dual mejora la calidad de tus fotos y videos, y su diseño de vidrio y aluminio combina elegancia con durabilidad. Es perfecto para quienes buscan un iPhone moderno con tecnología avanzada a un precio más accesible.'
    },
]

const macs = [
    {
        title: 'MacBook Pro',
        img : {
            src: 'img/macbookpro.jpeg',
            alt: 'MacBook Pro'
        },
        content: 'La <strong>MacBook Pro</strong> es la elección definitiva para profesionales que requieren un rendimiento sin compromisos. Equipado con los últimos chips M2 Pro o M2 Max, el MacBook Pro  ofrece una potencia de procesamiento y gráficos excepcionales, ideal para tareas exigentes como edición de video, diseño gráfico y desarrollo de software. Su pantalla Liquid Retina XDR proporciona una calidad de imagen impresionante con colores vivos y un rango dinámico extendido, mientras que la batería de larga duración asegura productividad continua. Disponibles en tamaños de 14 y 16 pulgadas, los modelos Pro combinan rendimiento extremo con un diseño robusto y elegante.'
    },
    {
        title: 'MacBook Air',
        img: {
            src: 'img/macbookair.jfif',
            alt: 'MacBook Air'
        },
        content: 'La <strong>MacBook Air</strong> es el equilibrio perfecto entre portabilidad y potencia. Con el chip M2, el MacBookAir ofrece un rendimiento rápido y eficiente en un diseño ultradelgado. Su pantalla Retina brillante y sus altavoces de alta calidad hacen que sea ideal para trabajo y entretenimiento en movimiento. La duración prolongada de la batería te permite trabajar durante todo el día sin necesidad de recargar, mientras que su diseño ligero hace que sea fácil de llevar a todas partes. Es perfecto para estudiantes, profesionales en movimiento y usuarios que buscan una máquina potente y liviana.'
    }
]

/**
 * Renderiza los productos
 * @param {Object} products 
 * @param {String} container 
 */
function render(products, container){
    let section = document.querySelector(`.${container}`)
    let article, title, img_container, img, content

    for(let productIndex in products){
        article = document.createElement('article')
        article.classList.add(`${container}_article`)

        title = document.createElement('h3')
        title.classList.add('article_title')
        title.innerText = products[productIndex].title

        img_container = document.createElement('div')
        img_container.classList.add(`${container}_container`,`d-flex`)

        if(productIndex%2 != 0) img_container.classList.add('reversed')

        img = document.createElement('img')
        img.classList.add(`image`,`${container}_img`,`popup-trigger`)
        img.src = products[productIndex].img.src
        img.alt = products[productIndex].img.alt

        content = document.createElement('p')
        content.classList.add(`${container}_text`)
        content.innerHTML = products[productIndex].content

        img_container.append(img)
        img_container.append(content)

        article.append(title)
        article.append(img_container)
        section.append(article)
    }
}

// Llamado de funcion para renderizar en los contenedores
render(iphones,'iphones')
render(macs,'macbooks')


