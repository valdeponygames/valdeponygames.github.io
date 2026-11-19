/* =========================================================
   CONFIGURACIÓN DE LA WEB DE VALDEPONY GAMES
   Edita SOLO este archivo para cambiar textos y proyectos.
   ========================================================= */

const SITE = {
  // Nombre de desarrollador (el mismo que en Google Play)
  developer: "Valdepony Games",

  // Frase corta bajo el logo
  tagline: "Juegos y apps para Android, hechos con cariño",

  // Texto de la sección "Sobre nosotros"
  about: [
    "Valdepony Games es un pequeño estudio independiente que crea juegos y aplicaciones para Android.",
    "Nos gustan las apps sencillas y cuidadas: sin cuentas, sin registros y respetando tu privacidad. " +
      "Muchos de nuestros proyectos están en euskera, porque queremos aportar nuestro granito de arena a la lengua."
  ],

  // Email de soporte (Google Play lo exige)
  email: "mariodeveloper92@gmail.com",

  // Enlace a tu perfil de desarrollador en Google Play ("" para ocultarlo)
  // Lo encuentras en Play Console → tu ficha de desarrollador. Ejemplo:
  // "https://play.google.com/store/apps/dev?id=1234567890123456789"
  googlePlayDeveloperUrl: "",

  // Redes sociales ("" las que no uses: no se mostrarán)
  social: {
    youtube: "",
    instagram: "https://www.instagram.com/valdepony_games/",
    tiktok: "",
    x: "",
    itch: ""
  },

  /* ---------------------------------------------------------
     PROYECTOS — copia un bloque { ... } para añadir uno nuevo.
     - folder: carpeta de sus imágenes (dentro van icono, portada y capturas)
     - icon / cover: nombre del icono y de la portada (banner apaisado, ~1200x630)
     - screenshots: capturas de la galería → ["archivo", "descripción de la imagen"]
     - packageId: el nombre del paquete de Android (el de Godot / Play Console)
     - published: true cuando ya esté en Google Play (muestra el botón de descarga)
     - status: texto de la etiqueta si NO está publicado ("Próximamente", "En desarrollo"…)
     - color: color de fondo mientras cargan las imágenes
     - privacy: ruta a su política de privacidad ("" si no tiene)
     - playInBrowserUrl: enlace para jugarlo directamente en el navegador, si lo tiene ("" si no)
     --------------------------------------------------------- */
  projects: [
    {
      id: "haur-jolasak",
      name: "Haur Jolasak",
      type: "Juego infantil",
      description:
        "Aprende y juega en euskera: 18 juegos educativos para niños y niñas de 2 a 6 años. " +
        "Colores, números, animales, música y cultura vasca, con un álbum de 45 pegatinas para coleccionar.",
      folder: "img/proyectos/haur-jolasak/",
      icon: "icono.png",
      iconBg: "#ffffff",
      cover: "portada.jpg",
      color: "#fff7ef",
      screenshots: [
        ["01-menu-principal.jpg", "Menú principal"],
        ["02-menu-juegos.jpg", "Los 18 juegos"],
        ["03-ikasi.jpg", "Ikasi: toca y escucha cada palabra en euskera"],
        ["04-bikoteak.jpg", "Bikoteak: el juego de memoria por parejas"],
        ["05-burbujak.jpg", "Burbujak: explota las burbujas"],
        ["06-puntuak-lotu.jpg", "Puntuak lotu: une los puntos"],
        ["07-sailkatu.jpg", "Sailkatu: clasifica cada cosa en su sitio"],
        ["08-herri-kirolak.jpg", "Herri kirolak: deporte rural vasco"],
        ["09-txalaparta.jpg", "Txalaparta: toca el instrumento tradicional"],
        ["10-dantza.jpg", "Dantza: baila al ritmo de la música"],
        ["11-album-pegatinas.jpg", "Álbum de pegatinas"]
      ],
      languages: ["Euskera"],
      packageId: "haurjolasak.markinajolasak",
      published: true,
      status: "",
      privacy: "privacidad/haur-jolasak.html"
    },
    {
      id: "euskarawise",
      name: "EuskaraWise",
      type: "App educativa",
      description:
        "Aprende euskera, un poco cada día: 1.213 palabras en 3 niveles, lecciones, juegos, 40 textos reales, " +
        "exámenes y 18 tablas de gramática. Sin cuentas y sin conexión: tu progreso se queda en tu móvil.",
      folder: "img/proyectos/euskarawise/",
      icon: "icono.png",
      iconBg: "#ffffff",
      cover: "portada.jpg",
      color: "#2d6a4f",
      screenshots: [
        ["01_inicio.jpg", "Tu objetivo del día, tu racha y una palabra nueva cada día"],
        ["02_leccion.jpg", "Lecciones de 10 ejercicios variados"],
        ["03_traducir.jpg", "Pistas y corrección de erratas: «¡Casi! Se escribe…»"],
        ["04_juegos.jpg", "Emparejar, letras, completar y ordenar"],
        ["05_lectura.jpg", "Toca una palabra y verás su traducción"],
        ["06_examen.jpg", "Aprueba exámenes para subir de nivel"],
        ["07_progreso.jpg", "Tu actividad de los últimos 14 días"],
        ["08_logros.jpg", "18 logros para no perder la motivación"],
        ["09_gramatica.jpg", "18 tablas de gramática siempre a mano"],
        ["10_temas.jpg", "En euskera o en castellano, con modo oscuro"]
      ],
      languages: ["Euskera", "Castellano"],
      packageId: "com.valdepony.euskarawise",
      published: false,
      status: "Próximamente",
      privacy: "privacidad/euskarawise.html"
    },
    {
      id: "hiru-txirlo",
      name: "Hiru txirlo",
      type: "Juego deportivo",
      description:
        "Los bolos vascos de tres bolos en canal, en tu móvil. Cae en la chapa, no te vayas a la kalea y tumba los tres. " +
        "Física realista, viento, tienda de bolas y boleras, y partidas online con código de sala.",
      folder: "img/proyectos/hiru-txirlo/",
      icon: "icono.png",
      cover: "portada.jpg",
      color: "#1f3a2c",
      screenshots: [
        ["01-inicio.jpg", "Pantalla de inicio"],
        ["02-nueva-partida.jpg", "Nueva partida: un jugador, varios en el mismo móvil u online"],
        ["03-apuntando.jpg", "Apuntando: arrastra la bola y suéltala"],
        ["04-canal-y-grada.jpg", "El canal y el público en la grada"],
        ["05-hiru.jpg", "¡Hiru! Los tres bolos al suelo"],
        ["06-sala-online.jpg", "Sala online con código para tus amigos"],
        ["07-tienda.jpg", "Tienda de bolas y boleras"],
        ["08-clasificacion.jpg", "Clasificación final"],
        ["09-ayuda-euskera.jpg", "Ayuda y vocabulario, también en euskera"]
      ],
      languages: ["Euskera", "Castellano", "English", "Français"],
      packageId: "com.hirutxirlo.bolos",
      published: false,
      status: "Próximamente",
      privacy: "privacidad/hiru-txirlo.html"
    },
    {
      id: "mi-maleta",
      name: "Mi Maleta",
      type: "App de viajes",
      description:
        "Haz la maleta sin olvidarte de nada: listas de equipaje con plantillas, cantidades, cuenta atrás, " +
        "notas y fotos. Funciona sin internet y sin crear ninguna cuenta.",
      folder: "img/proyectos/mi-maleta/",
      icon: "icono.png",
      cover: "portada.jpg",
      color: "#7a3b0f",
      screenshots: [
        ["funcion_1_inicio.jpg", "Todas tus listas a la vista"],
        ["funcion_2_lista.jpg", "Marca lo que ya llevas"],
        ["funcion_3_editar.jpg", "Cambia nombres y cantidades"],
        ["funcion_4_ajustes.jpg", "Siete temas de color y tres idiomas"],
        ["funcion_5_oscuro.jpg", "Modo oscuro"],
        ["funcion_6_moviles.jpg", "Mi Maleta en el móvil"]
      ],
      languages: ["Castellano", "English", "Français"],
      packageId: "com.valdepony.mimaleta",
      published: false,
      status: "Próximamente",
      privacy: "privacidad/mi-maleta.html"
    },
    {
      id: "olivar-incremental",
      name: "Olivar Incremental",
      type: "Juego incremental",
      description:
        "Varea el olivo, recoge la aceituna antes de que se estropee y haz aceite de más o menos calidad según " +
        "cómo la trates. De noche gestionas la finca: mejoras, bodega, encargos, clima y plagas, campaña tras campaña. " +
        "Nuestro primer juego incremental: un prototipo en fase beta, jugable ya en el navegador.",
      folder: "img/proyectos/olivar-incremental/",
      icon: "icono.svg",
      iconBg: "#1f2a16",
      cover: "portada.jpg",
      color: "#1f2a16",
      playInBrowserUrl: "https://valdeponygames.github.io/olivar-incremental/",
      screenshots: [
        ["captura-01.jpg", "De día: varea el olivo y recoge la aceituna antes de que se estropee"],
        ["captura-02.jpg", "De noche: árbol de mejoras en forma de telaraña"],
        ["captura-03.jpg", "Vende el aceite en la bodega, según su calidad y el precio del día"]
      ],
      languages: ["Castellano", "English", "Français"],
      packageId: "",
      published: false,
      status: "En fase beta",
      privacy: ""
    }
  ]
};
