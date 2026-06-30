function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    })
}

const galleries = {
    sges: [
        "images/SistemaGestionEstetica-Spa/Principal.png",
        "images/SistemaGestionEstetica-Spa/Login.png",
        "images/SistemaGestionEstetica-Spa/RegistrarUsuario.png",
        "images/SistemaGestionEstetica-Spa/Clientes.png",
        "images/SistemaGestionEstetica-Spa/Usuarios.png",
        "images/SistemaGestionEstetica-Spa/Empleados.png",
        "images/SistemaGestionEstetica-Spa/Reservas.png"
    ],
    psv1: [
        "images/PlushieShopV1/Principal.png",
        "images/PlushieShopV1/Login.png",
        "images/PlushieShopV1/Cuenta.png",
        "images/PlushieShopV1/Facturas.png",
        "images/PlushieShopV1/Carrito.png"
    ],
    psv2: [
        "images/PlushieShopV2/Principal.png",
        "images/PlushieShopV2/Login.png",
        "images/PlushieShopV2/Registro.png",
        "images/PlushieShopV2/Cuenta.png",
        "images/PlushieShopV2/Facturas.png",
        "images/PlushieShopV2/Carrito.png"
    ],
    psd: [
        "images/PolideportivoSantoDomingo/Principal.png",
        "images/PolideportivoSantoDomingo/Yoga.png",
        "images/PolideportivoSantoDomingo/Natacion.png",
        "images/PolideportivoSantoDomingo/Futbol.png",
        "images/PolideportivoSantoDomingo/PingPong.png",
        "images/PolideportivoSantoDomingo/Tenis.png",
        "images/PolideportivoSantoDomingo/Basketball.png",
        "images/PolideportivoSantoDomingo/Noticias.png",
        "images/PolideportivoSantoDomingo/Calendario.png",
        "images/PolideportivoSantoDomingo/Actividades.png",
        "images/PolideportivoSantoDomingo/Soporte.png",
        "images/PolideportivoSantoDomingo/PreguntasFrecuentes.png",
        "images/PolideportivoSantoDomingo/Login.png",
        "images/PolideportivoSantoDomingo/Registro.png",
        "images/PolideportivoSantoDomingo/Empleados.png",
        "images/PolideportivoSantoDomingo/Horarios.png",
        "images/PolideportivoSantoDomingo/Instalaciones.png",
        "images/PolideportivoSantoDomingo/ListaActividades.png"
    ],
    pokedex: [
        "images/Pokedex/Pokedex.png",
        "images/Pokedex/Usuarios.png",
        "images/Pokedex/Enfermeria.png",
        "images/Pokedex/EquipoLucha.png",
        "images/Pokedex/Entrenadores.png",
        "images/Pokedex/Mensajes.png",
        "images/Pokedex/Login.png",
        "images/Pokedex/Registro.png"
    ],
    dv: [
        "images/D-Valens/Inicio.png",
        "images/D-Valens/Login.png",
        "images/D-Valens/Registro.png",
        "images/D-Valens/RecuperarContrasenna.png",
        "images/D-Valens/BusquedasProductos.png",
        "images/D-Valens/MisProductos.png",
        "images/D-Valens/MiCarrito.png",
        "images/D-Valens/Categorias.png",
        "images/D-Valens/CateringService.png",
        "images/D-Valens/HistorialCateringService.png",
        "images/D-Valens/RealizarPago.png",
        "images/D-Valens/MiPerfil.png",
        "images/D-Valens/Perfiles.png",
        "images/D-Valens/AsistenteIA.png"
    ],
    rc: [
        "images/RadioColosal/Principal.png",
        "images/RadioColosal/Locutores.png",
        "images/RadioColosal/Programacion.png",
        "images/RadioColosal/Publicidad.png",
        "images/RadioColosal/Noticias.png",
        "images/RadioColosal/Eventos.png",
        "images/RadioColosal/Oyentes.png",
        "images/RadioColosal/Comentarios.png",
        "images/RadioColosal/Multimedios.png",
        "images/RadioColosal/Clientes.png",
        "images/RadioColosal/Tarifas.png"
    ],
    ct: [
        "images/CapaTours/Login.png",
        "images/CapaTours/Registro.png",
        "images/CapaTours/RecuperarContrasenna.png",
        "images/CapaTours/Inicio.png",
        "images/CapaTours/ToursAdmin.png",
        "images/CapaTours/Clientes.png",
        "images/CapaTours/ReservasAdmin.png",
        "images/CapaTours/ToursCliente.png",
        "images/CapaTours/ReservasCliente.png"
    ],
    kima: [
        "images/Kima/Inicio.png",
        "images/Kima/Login.png",
        "images/Kima/Comunicados.png",
        "images/Kima/Contactos.png",
        "images/Kima/Clientes.png",
        "images/Kima/Tickets.png",
        "images/Kima/Cotizacion.png",
        "images/Kima/Requisitos.png",
        "images/Kima/Tarifario.png",
        "images/Kima/Usuarios.png"
    ],
    asg: [
        "images/AsociacionSanGabriel/Inicio.png",
        "images/AsociacionSanGabriel/Login.png",
        "images/AsociacionSanGabriel/RecuperarContrasenna.png",
        "images/AsociacionSanGabriel/Beneficiarios.png",
        "images/AsociacionSanGabriel/Grupos.png",
        "images/AsociacionSanGabriel/Programas.png",
        "images/AsociacionSanGabriel/Recomendaciones.png",
        "images/AsociacionSanGabriel/PreguntasFrecuentes.png",
        "images/AsociacionSanGabriel/Usuario.png"
    ]
};

let currentGallery = [];
let currentIndex = 0;

function openGallery(project) {
    currentGallery = galleries[project];
    currentIndex = 0;
    document.getElementById("galleryImage").src = currentGallery[currentIndex];
    document.getElementById("galleryModal").style.display = "block";
}

function closeGallery() {
    document.getElementById("galleryModal").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    document.getElementById("galleryImage").src = currentGallery[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    document.getElementById("galleryImage").src = currentGallery[currentIndex];
}
