/* =========================================================
   CHARACTER REQUIREMENTS DATABASE
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   01. CHARACTER DATA
   ========================================================= */

const characters = [

    {
        id: "tsubasa",
        name: "Tsubasa Ozora",

        normal: [
            "Drive Shot.",
            "Chilena milagrosa.",
            "Intercepción V3.",
            "Regate Lateral.",
            "Tiro con efecto de larga distancia.",
            "Twin Shot (Misaki).",
            "Snowboard Dribble.",
            "Wing Interception.",
            "Angelical Slinding.",
            "Charging Jump.",
            "Cortina Aurora.",
            "Danza aurora.",
            "Wing Shot.",
            "3D Shot.",
            "Tiro deslizante.",
            "Duo de oro del Nankatsu.",
            "Tiro Triple Gimnastico",
            "Súper specialty Overhead."
        ],

        special: [
            {
                text: "Duo de oro de Japón (Hyuga)",
                star: false
            },
            {
                text: "High Speed Tornado sky alpha (Misaki).",
                star: false
            },
            {
                text: "La Coruna Beach atlantic O.S.S.",
                star: false
            },
            {
                text: "Tiro con efecto de roberto.",
                star: false
            },
            {
                text: "Counter Arrow Shot.",
                star: false
            },
            {
                text: "Paracaidista Radical.",
                star: false
            },
            {
                text: "Legenda de Cataluña.",
                star: false
            },
            {
                text: "Dupla de oro (Misaki).",
                star: true
            },
            {
                text: "Drive Shot",
                star: true
            },
            {
                text: "Double Asistencias Full Metal Phantom (Misaki, Shingo)",
                star: true
            }
        ]
    },


    {
        id: "izawa",
        name: "Mamoru Izawa",

        normal: [
            "Intercepción de Salto frontal.",
            "Trío del Shutetsu (Taki, Teppei)",
            "Disparo del Trío del Shutetsu (Taki, Teppei)",
            "Cutting Sliding.",
            "Slalom de alta velocidad.",
            "Cracking Pass.",
            "Barrida Divina.",
            "Cabezazo en picado de 5 metros.",
            "Pase deslizante.",
            "Cabezazo de salto alto."
        ],

        special: [
            {
                text: "Ataque Inesperado.",
                star: false
            },
            {
                text: "Unmatched Interception.",
                star: false
            },
            {
                text: "Long Straight Tackle",
                star: true
            }
        ]
    },


    {
        id: "taki",
        name: "Taki Hajime",

        normal: [
            "Disparo Veloz.",
            "Trío del Shutetsu (Izawa, Teppei)",
            "Duo de plata (Izawa, Teppei)",
            "Balazo.",
            "Cruzado Bestial."
        ],

        special: [
                        {
                text: "Regate en línea recta.",
                star: true
            },
        ]
    },


    {
        id: "hyuga",
        name: "Kojiro Hyuga",

        normal: [
            "Neo Tiger Shot",
            "Regate en linea recta",
            "Regate del tigre",
            "Regate pesado del tigre",
            "Chilena del tigre",
            "Intercepción del tigre",
            "Volea del tigre",
            "Raiju Shot",
            "Jumping Tiger Heaver",
            "Tiro del tigre demencial",
            "Feroz entrada del tigre",
            "Tiger Diving Header",
            "Neo tiro del tigre invicto.",
            "Jumping Raiju Shot (Tsubasa)"
        ],

        special: [
            {
                text: "Raiju Shot (Blanquinegro)",
                star: false
            },
            {
                text: "Tigre mellizo con efecto",
                star: false
            },
            {
                text: "Stormy Resurection",
                star: false
            },
            {
                text: "Flash Raiju Shot (Tsubasa, Misaki)",
                star: false
            },
            {
                text: "Chilena del tigre en dos fases",
                star: false
            },
            {
                text: "Lighting Tiger Volley.",
                star: false
            },
            {
                text: "Dragon's Tiger Shot (Hino).",
                star: false
            },
            {
                text: "Contraremate del Tigre.",
                star: false
            },
            {
                text: "Tiger Shot",
                star: true
            },
            {
                text: "Heaven-Spitting Raiju Shot.",
                star: true
            }
        ]
    },


    {
        id: "sawada",
        name: "Takeshi Sawada",

        normal: [
            "Fast Step Dribble.",
            "Perfect Control Pass.",
            "Technical Cross.",
            "Solid Shot.",
            "Meiwa's Duo (Hyuga).",
            "Solid Pass.",
            "Sudden Turn Pass.",
            "Low Intercept."
        ],

        special: [
            {
                text: "Toho's Golden Duo (Hyuga).",
                star: false
            },
            {
                text: "Thrust Tackle.",
                star: false
            },
            {
                text: "Toho Twin Shot (Hyuga)",
                star: false
            },
            {
                text: "Toho's Academy Duo Relentles Attack (Sorimachi).",
                star: false
            },
            {
                text: "Tenacious Ball-Keeping Pass.",
                star: true
            }
        ]
    },


    {
        id: "ken-wakashimazu",
        name: "Ken Wakashimazu",

        normal: [
            "Back Kick.",
            "Double Karate Defense Punch.",
            "Wakado-Ryu Defensive Chop.",
            "Solid Block.",
            "Wakado-Ryu Crescent Kick.",
            "Salto triangular."
        ],

        special: [
            {
                text: "Desesperate Defensive Chop.",
                star: false
            },
            {
                text: "Salida Explosiva.",
                star: false
            },
            {
                text: "Agresive Diving Catch.",
                star: false
            },
            {
                text: "Wakado-Ryu High Jump Kick Catch",
                star: true
            },
            {
                text: "Reconvertir a Delantero",
                star: true
            }
        ]
    },


    {
        id: "ken-wakashimazu-delantero",
        name: "Ken Wakashimazu (Delantero)",

        normal: [
            "Duo Wakado Ryu (Nitta)",
            "Patada aérea inversa Wakado Ryu.",
            "Regate diestro.",
            "Duo de ensueño del Meiwa. (Hyuga)",
            "Wakado-Ryu Phantasmal Kick.",
            "Wakado Ryu Match Kick"
        ],

        special: [
            {
                text: "Ultimate Wakado-Ryu Reverse aereal Topspin Kick.",
                star: false
            },
            {
                text: "Ultimate Technique: Protean Dimensión falcón Kick (Nitta)",
                star: true
            }
        ]
    },


    {
        id: "sorimachi",
        name: "Kazuki Sorimachi",

        normal: [
            "Remate de Chilena.",
            "Tiro Esfumado.",
            "Intercepción sensitiva",
            "Tiro Impacto Central",
            "Volea de Salto rápido.",
            "Paso afilado.",
            "Unreleating Header.",
            "Paso Ágil.",
            "Intercepción Perspicaz."
        ],

        special: [
            {
                text: "Trinidad del Toho (Hyuga, Sawada)",
                star: false
            },
            {
                text: "Combinación Artilleros del Toho (Hyuga)",
                star: true
            }
        ]
    },


    {
        id: "yuzo-morisaki",
        name: "Yuzo Morisaki",

        normal: [
            "Puñetazo GGK.",
            "Puñetazo Feroz.",
            "Atajada Garra.",
            "GGK Catch.",
            "Atajada Súper Fina.",
            "Salvada Súper Divina."
        ],

        special: [
            {
                text: "Atajada Súper Garra G.K.",
                star: false
            },
            {
                text: "¡Que me dé en algún sitio! ¡¡Por Favor!!",
                star: true
            }
        ]
    },


    {
        id: "misaki",
        name: "Taro Misaki",

        normal: [
            "Tenacious Last Pass.",
            "Excellent artistic Dribble.",
            "Boomerang Shot.",
            "Double Diving Header.",
            "Intercepción Chilena.",
            "Magnificent Dribble.",
            "Twin Shot (Tsubasa).",
            "Magnificent Intercepction.",
            "Duo champagne (Cualquier francés)",
            "Tiki-Taka japonés",
            "Chilena melliza"
        ],

        special: [
            {
                text: "Artistic Touch Step.",
                star: false
            },
            {
                text: "Flash Raiju Shot (Hyuga-Tsubasa).",
                star: false
            },
            {
                text: "Golden Twin Shot (Tsubasa).",
                star: false
            },
            {
                text: "High Speed Tornado SKY Alpha (Tsubasa)",
                star: true
            },
            {
                text: "SSS",
                star: true
            },
            {
                text: "Duo de oro de Japón (Tsubasa).",
                star: true
            }
        ]
    },


    {
        id: "ishizaki",
        name: "Ryo Ishizaki",

        normal: [
            "¿Drive Shot?",
            "Regate espectacular.",
            "Pase Facial.",
            "Pase Fuerte.",
            "Pase Espectacular.",
            "Ape Pass.",
            "¿Trio De Oro? (Tsubasa, Misaki)",
            "Entrada Obstinada.",
            "Doble Defensa Obstinada (Urabe).",
            "Nuevo Bloqueo Facial.",
            "Intercepción de Salto Facial.",
            "Skylab Face Block (Jito)."
        ],

        special: [
            {
                text: "¿Rainbow Flick?",
                star: false
            },
            {
                text: "Sliding Slide-Steal.",
                star: false
            },
            {
                text: "Bloqueo Horizontal lateral facial",
                star: false
            },
            {
                text: "Bloqueo Facial.",
                star: true
            }
        ]
    },


    {
        id: "tachibana",
        name: "Kazuo/Masao Tachibana",

        normal: [
            "Disparo Triangular.",
            "Pase Técnico.",
            "Pase Fuerte.",
            "Gemelos Tachibana.",
            "Bloqueo en Catapulta.",
            "Pase del Mono.",
            "Guardia del Mono.",
            "Huracán En El cielo.",
            "Disparo del Mono salvaje.",
            "Intercepción Acrobática Coordinada.",
            "Intercepción Ardilla Voladora.",
            "Salto de la ardilla Voladora.",
            "Cabeceó de la ardilla Voladora.",
            "Tiro Mellizo.",
            "Huracán en el cielo a baja altura.",
            "Pared Catapulta.",
            "Paso Zigzag a alta velocidad.",
            "Disparo frontal en picada de la ardilla voladora.",
            "Deslizamiento del Mono salvaje.",
            "Entrada del Mono salvaje."
        ],

        special: [
            {
                text: "Disparo de Catapulta Melliza (Gemelos, Jito).",
                star: false
            },
            {
                text: "Catapulta Infernal Final",
                star: true
            }
        ]
    },


    {
        id: "hiroshi-jito",
        name: "Hiroshi Jito",

        normal: [
            "¡Yo envío a mis rivales a Volar!",
            "¡Esos pequeños trucos no van a funcionar!",
            "Combinación Con Sano V1.",
            "Combinación con Sano V2.",
            "Bloqueo de salto con carga.",
            "Intercepción Aguda.",
            "Entrada combatiente.",
            "Entrada Fuerte.",
            "Bloqueo de Alto poder.",
            "¡Mira de que estoy realmente Hecho!",
            "Bloqueo Inmortal.",
            "Veloz Bloqueo Deslizante."
        ],

        special: [
            {
                text: "Launch Tackle.",
                star: false
            },
            {
                text: "Bloqueo Facial en Catapulta (Ishizaki)",
                star: false
            },
            {
                text: "Poderosa Intercepción con Salto.",
                star: true
            }
        ]
    },


    {
        id: "genzo",
        name: "Genzo Wakabayashi",

        normal: [
            "Straight Defence.",
            "Jumping Straight Defence.",
            "Bloqueo desesperado con gorra.",
            "Desvío de último momento.",
            "Puñetazo doble SSGK.",
            "Shuto defensivo SSGK.",
            "¡Que me dé en algún Sitio! ¡¡Por favor!!",
            "God Hand SGGK Catch.",
            "Jumping SGGK Catch.",
            "Perfect SGGK Catch.",
            "SGGK Catch."
        ],

        special: [
            {
                text: "Indomitable Shot-Stopper",
                star: false
            },
            {
                text: "Perfect SGGK catch",
                star: false
            },
            {
                text: "¡Nadie puede marcarme un gol desde fuera del área penal!",
                star: false
            },
            {
                text: "SGGK Catch",
                star: true
            },
            {
                text: "Dar la vida por el arco",
                star: true
            }
        ]
    },

    {
        id: "mitsuru",
        name: "Mitsuru Sano",

        normal: [
"Disparo de chilena.",
"Volea Acrobática Directa.",
"Entrada Veloz.",
"Disparo Bala.",
"Chilena Técnica.",
"Tiro de Raspón Frontal.",
"Regate del Ratón.",
"Pase Agresivo.",
"Entrada Acrobática.",
"Combinación con Jito V1. (Jito)",
"Combinación con Jito V2. (Jito)",
"Combinación con Jito V3. (Jito)",
"Regate Acrobático.",
"Pase Acrobático.",
"Intercepción Acrobática.",
"Veloz Pared Marsellesa.",
"Espléndida Chilena."
        ],

        special: [
            {
                text: "Zigzag Dribble BackStep",
                star: false
            },
            {
                text: "Nuevo Regate Acrobático.",
                star: false
            },
            {
                text: "Catapulta combinación del Hirado (Jito)",
                star: true
            },
        ]
    },

        {
        id: "makoto",
        name: "Makoto Soda",

        normal: [
"Tiro de Navaja.",
"Pase de Navaja.",
"Entrada de Navaja.",
"Disparo de Navaja Inversa.",
"Bloqueo de Navaja.",
"Slice Tackle.",
"Razor Dash.",
"Intercepción de Navaja deslizante.",
"Entrada de Navaja de doble filo.",
"Cruzado de navaja."
        ],

        special: [
            {
                text: "Intercepción de Navaja en chilena.",
                star: false
            },
            {
                text: "Intercepción de navaja tenaz.",
                star: false
            },
            {
                text: "¡No puedes escapar de mi Marcaje!",
                star: true
            },
        ]
    },

            {
        id: "matsuyama",
        name: "Hikaru Matsuyama",

        normal: [
"Intercepción del Águila.",
"Marca obstinada.",
"Spirited Valiant Defense.",
"Intercepción en reversa.",
"Pase técnico persistente.",
"Eagle Shot.",
"Wild Eagle Shot.",
"Ataque Avalancha.",
"Eagle Pass.",
"Bloqueo en equipo.",
"Pase del aguila en asalto.",
"Eagle Shot de lejana distancia.",
"Pase del aguila de asalto.",
"Tiro del águila y Tigre. (Hyuga).",
"Defensa diligente.",
"Ataque avalancha.",
"Flash Flood Tackle.",
"Matsuyama - Misugi Hotline. (Misugi)"
        ],

        special: [
            {
                text: "Intercepcion deslizante aguila salvaje.",
                star: false
            },
            {
                text: "Quick Turn Pass.",
                star: false
            },
            {
                text: "Eagle Shot.",
                star: true
            },
            {
                text: "Tiro Mellizo del aguila y tigre Final (Hyuga).",
                star: true
            },
        ]
    },

                {
        id: "kishida",
        name: "Takeshi Kishida",

        normal: [
"Intercepción determinada.",
"Bloqueo del tiburón en picado.",
"Regate del Tiburón.",
"Intercepción del tiburón.",
"Cuarteto de Otomo (Urabe)."
        ],

        special: [
            {
                text: "Entrada del cuarteto del Otomo.",
                star: false
            },
            {
                text: "Entrada del Tiburón.",
                star: true
            },
        ]
    },

                    {
        id: "nitta",
        name: "Shun Nitta",

        normal: [
"Gale Falcón Step.",
"Pase del halcón.",
"Disparo del Halcón a alta velocidad.",
"Volea del halcón sin control en carrera.",
"Finta del halcón a alta velocidad.",
"Intensivo disparo del halcón.",
"High Speed Dribble",
"Volea Peregrina.",
"Tiro del halcón deslizante a alta velocidad.",
"Intercepción del Halcón.",
"Super-Low Flying Falcón.",
"Volea de alta velocidad del halcón en carrera.",
"Combinación ágil."
        ],

        special: [
            {
                text: "Volea Aérea del Halcón.",
                star: false
            },
            
                        {
                text: "Tiro doble combinado del mejor duo de delanteros de Japón.",
                star: false
            },

                        {
                text: "Volea Aérea del Halcón.",
                star: false
            },

            {
                text: "Ultimate Wakado-Ryu Falcon Kick.",
                star: true
            },

            
            {
                text: "Disparo super ajustado del halcón.",
                star: true
            },
        ]
    },

    {
    id: "misugi",
    name: "Jun Misugi",

    normal: [
        "Robo Oportuno.",
        "Pasos del aristócrata.",
        "Furioso tiro con efecto.",
        "Flip Feed.",
        "Entrada trucada.",
        "Noble Intercepción.",
        "Magnífico regate.",
        "Bloqueo en chilena.",
        "Tapped Diving Volley.",
        "Vaselina con finta.",
        "Trick Tackle.",
        "Bloqueo con salto.",
        "Entrada con trabajo en equipo.",
        "Heel Lift."
    ],

    special: [
        {
            text: "Defensa Técnica.",
            star: false
        },

        {
            text: "💀Bloqueo Suicida.💀",
            star: false
        },

        {
            text: "Elegantes pasos técnicos.",
            star: false
        },

        {
            text: "Heroica chilena.",
            star: false
        },

        {
            text: "3M (Matsuyama, Misaki.)",
            star: false
        },

        {
            text: "★Esplendido disparo de chilena.★",
            star: true
        }
    ]
},

{
    id: "urabe",
    name: "Hanji Urabe",

    normal: [
        "Hot-Blooded Block",
        "Fearless Block",
        "Doble Defensa Obstinada (Ishizaki)",
        "Entrada afilada Deslizante.",
        "Intercepción apasionada.",
        "Sudden Boost Interception.",
        "Intercepción a máxima velocidad.",
        "Pase agresivo",
        "Pase Cruzado.",
        "Cuarteto de Otomo (Kishida)."
    ],

    special: [
        {
            text: "Tenacious Sliding Tackle.",
            star: false
        },

        {
            text: "Entrada del cuarteto de Otomo.",
            star: false
        },

        {
            text: "Pase al aguila (Nitta)",
            star: true
        }
    ]
},

{
    id: "aoi",
    name: "Shingo Aoi",

    normal: [
        "Erupción del monte Fuji.",
        "Regate Malabarista.",
        "Regate de ángulo recto tornado.",
        "Finta en ángulo recto.",
        "Finta en 80°",
        "Tiro Malabarista.",
        "Intercepción resorte.",
        "Volea deslizante.",
        "Entrada de cambio deslizante.",
        "Slash Interception.",
        "DropKick Pass.",
        "Fast-Turn Tackle.",
        "Pase largo triangular (Tsubasa).",
        "Bloqueo Facial 2.",
        "Intercepción Bob and Weave.",
        "Rovesciata.",
        "Disparo Nutmeg.",
        "Entrada Bob and Weave.",
        "Presión de fuego."
    ],

    special: [
        {
            text: "Finta tornado en ángulo recto con disparo.",
            star: false
        },

        {
            text: "Paso uno, dos disparo.",
            star: false
        },

        {
            text: "Rovesciata Continua",
            star: true
        },

        {
            text: "Fintas consecutivas de ángulo recto.",
            star: false
        }
    ]
},

{
    id: "rusciano",
    name: "Leonardo Rusciano",

    normal: [
        "Disparo de aceleración.",
        "Disparo de rodillas volador.",
        "Elevación de la corona.",
        "Entrada de máximo poder."
    ],

    special: [
        {
            text: "Disparo Final",
            star: true
        },

        {
            text: "Golpe de escudo",
            star: false
        },

        {
            text: "Regate Predador.",
            star: false
        }
    ]
},

{
    id: "hernandez",
    name: "Gino Hernandez",

    normal: [
        "Blocaje perfecto.",
        "Atajada centrada.",
        "Iron Right Hand.",
        "Diving Knuckle Defense",
        "Mano derecha de oro",
        "Milagroso bloqueo",
        "Golpeó divino perfecto.",
        "Blocaje en picada perfecta."
    ],

    special: [
        {
            text: "Tenacidad del portero perfecto.",
            star: false
        },

        {
            text: "Defensa absoluta del portero perfecto.",
            star: false
        },

        {
            text: "Cantenaccio Guardian Catch.",
            star: false
        },

        {
            text: "Mano de oro invicta.",
            star: false
        },

        {
            text: "Portero Perfecto",
            star: true
        }
    ]
},

{
    id: "galvan",
    name: "Galvan",

    normal: [
        "Power Tackle",
        "Full-Power Block",
        "Intercepción de poder máximo.",
        "Galván Rush Tackle.",
        "Paredes argentinas (Díaz, Pascal)",
        "Despeje de poder.",
        "Regate superpotente.",
        "Pase fuerte."
    ],

    special: [
        {
            text: "Entrada Estampida.",
            star: false
        },

        {
            text: "Intercepción rápida Galván",
            star: false
        },

        {
            text: "Galvan Canon EX",
            star: false
        }
    ]
},

{
    id: "pascal",
    name: "Alan Pascal",

    normal: [
        "Slide Step Dribble.",
        "Slide Step Shot.",
        "Crab Pincer Interception.",
        "Invisible Volley Shot.",
        "Entrada del duo argentino (Díaz).",
        "Tiro Mellizo Argentino (Díaz).",
        "Entrada Artística.",
        "Disparo Preciso."
    ],

    special: [
        {
            text: "Doble Volea argentina (Díaz)",
            star: false
        },

        {
            text: "Argentinian combination Shot.",
            star: false
        },

        {
            text: "Right Angle One Two.",
            star: false
        },

        {
            text: "Trio de argentinaDíaz) (Díaz, Galván)",
            star: false
        },

        {
            text: "Tiro Mellizo argentino",
            star: true
        }
    ]
},

{
    id: "pierre",
    name: "Elle Sid Pierre",

    normal: [
        "Ball Keeping Jump",
        "Regate Artístico.",
        "Pase deslizante.",
        "Intercepción Magnífica",
        "Entrada Artística.",
        "Entrada Mariposa.",
        "Super Reflex Block.",
        "Chilena Artística.",
        "Pase artístico.",
        "Regate Artístico V2.",
        "Disparo deslizante V2.",
        "Super disparo deslizante.",
        "Jugada rápida y elegante.",
        "Volea deslizante en carrera."
    ],

    special: [
        {
            text: "Harmonius Slider",
            star: false
        },

        {
            text: "Feint Trap Volley.",
            star: false
        },

        {
            text: "Eiffel Attack Shot",
            star: true
        },

        {
            text: "Cañonazo Deslizante (Napoleón).",
            star: false
        },

        {
            text: "Field Of Dreams (Napoleón).",
            star: false
        },

        {
            text: "Chilena Mellizas Eiffel (Napoleón).",
            star: false
        },

        {
            text: "Gloria del Fútbol champagne (Napoleón).",
            star: false
        },

        {
            text: "Gran creación de juego",
            star: true
        }
    ]
},

{
    id: "napoleon",
    name: "Louis Napoleón",

    normal: [
        "Disparo de Cañón.",
        "Riser Canon.",
        "Intercepción Balística.",
        "Volea Cañonera.",
        "Burst Canon.",
        "High-Power canon shot.",
        "Ataque Eiffel (Pierre).",
        "Duo Improvisado (Misaki.)",
        "Entrada Cañón.",
        "Pase Cañón.",
        "Bloqueo cañon.",
        "Cañón droit",
        "Veloz pared marsellesa.",
        "Penetración Forzada.",
        "Volea con salto potente."
    ],

    special: [
        {
            text: "Field Of Dreams (Pierre).",
            star: false
        },

        {
            text: "Chilena Melliza Eiffel (Pierre).",
            star: false
        },

        {
            text: "Cañonazo Deslizante (Pierre).",
            star: false
        },

        {
            text: "Gloria del Fútbol Champagne (Pierre).",
            star: false
        },

        {
            text: "Tri-colour Attack combination shot (Misaki, Pierre).",
            star: false
        },

        {
            text: "Full Burst Canon.",
            star: false
        },

        {
            text: "Volea Cañonera a un toque.",
            star: false
        },

        {
            text: "Cabezazo cielo azul.",
            star: false
        },

        {
            text: "¡Cañonazo del as de Francia, Louis Napoleón!",
            star: true
        }
    ]
}, 

{
    id: "muller",
    name: "Deuter Muller",

    normal: [
        "Blocaje Molino.",
        "Giant's Fist.",
        "Dual Catch.",
        "Steel Left Hand.",
        "God Hand Catch.",
        "Salvada inquebrantable.",
        "¡Que me dé en algún sitio!",
        "Blocaje quemarropa.",
        "Frenado deslizantes."
    ],

    special: [
        {
            text: "La leyenda del guardameta fantasma",
            star: true
        },

        {
            text: "Impregnable germanic Spirit.",
            star: false
        },

        {
            text: "Milagrosa salvada a una mano.",
            star: false
        },

        {
            text: "Sweeping Punch",
            star: false
        }
    ]
},

{
    id: "diaz",
    name: "Juan Diaz",

    normal: [
        "Regate acrobático",
        "Snowboard Dribble.",
        "Drive Shot.",
        "Genius Dribble Attack.",
        "Trick-Step One-Two",
        "Acrobatic Heel Shot.",
        "Intercepción acrobática.",
        "Rising Header.",
        "Acrobático Bloqueo.",
        "Volea de rebote.",
        "Triple Gimnastic Shot.",
        "Movimientos acrobáticos.",
        "Blast Tackle."
    ],

    special: [
        {
            text: "Mano de Dios.",
            star: false
        },

        {
            text: "Tiro Regate larga distancia.",
            star: false
        },

        {
            text: "Tiro acrobático",
            star: true
        },

        {
            text: "Ball Traping Forward Rool.",
            star: false
        }
    ]
},

{
    id: "schmidt",
    name: "Kevin/Eric Schmidt",

    normal: [
        "Defensa Sándwich.",
        "Intercepción Cerrada.",
        "Marca Cerrada.",
        "Bloqueo de Aguja.",
        "Pase Tándem.",
        "Persecución serpiente."
    ],

    special: [
        {
            text: "Defenss de Línea cruzada",
            star: true
        },

        {
            text: "Intercepción doble Marcaje.",
            star: false
        }
    ]
},

{
    id: "kaltz",
    name: "Herman Kaltz",

    normal: [
        "Intercepción Artística.",
        "Tiro del Erizo.",
        "Defensa del Erizo.",
        "Pase vaselina.",
        "Entrada Flash.",
        "Intercepción Kaltz.",
        "Regate del Erizo.",
        "Intercepción del Búho.",
        "Bloqueo a baja altura.",
        "Artero pase del obrero."
    ],

    special: [
        {
            text: "Defensa Scramble.",
            star: false
        },

        {
            text: "Pase de control del balón del Erizo",
            star: false
        },

        {
            text: "Entrada del espíritu Germano",
            star: true
        }
    ]
},

{
    id: "heine",
    name: "Cornelius Heine",

    normal: [
        "Disparo de Hadas.",
        "Volea Aérea.",
        "Salto de Hadas.",
        "Truco matador.",
        "Paso de las hadas.",
        "Robo habil."
    ],

    special: [
        {
            text: "Disparo Celestial",
            star: true
        },

        {
            text: "Duo de oro alemán (Schneider).",
            star: false
        },

        {
            text: "Paso de fantasía.",
            star: false
        }
    ]
},

{
    id: "schester",
    name: "Franz Schester",

    normal: [
        "Magnífico regate aéreo.",
        "Combinación Germánica.",
        "Grand Jumping Pass.",
        "Quick Step.",
        "Killer Pass.",
        "Intercepción Magnífica.",
        "Hard Check Interception.",
        "Shot Through Defence.",
        "Dupla del Bremen (Margus).",
        "Regate Zigzag elegante.",
        "Gyro Shot.",
        "Intercepción Elegante con salto.",
        "Nimble Pass",
        "Straight Defense.",
        "German Hotline (Kaltz)."
    ],

    special: [
        {
            text: "Parrael Dash One-Two.",
            star: false
        },

        {
            text: "Gap-Exploiting Dribble.",
            star: false
        },

        {
            text: "Pase técnico con retraso",
            star: true
        }
    ]
},

{
    id: "margus",
    name: "Manfred Margus",

    normal: [
        "Mighty Shot.",
        "Cabezazo aéreo con salto.",
        "Strong Shot",
        "Warhead Header.",
        "Trabajo en equipo (Schester)",
        "Cabeceó en combinación del Bremen (Schester)",
        "Cabezazo en picado técnico.",
        "Spearhead.",
        "Regate Germánico.",
        "Pases encadenados Germánicos (Cualquier alemán)"
    ],

    special: [
        {
            text: "Volea de combinación germánica (Schneider)",
            star: false
        },

        {
            text: "Indomable Espíritu Germanico.",
            star: true
        },

        {
            text: "Pared múltiple cabeza",
            star: false
        }
    ]
},

{
    id: "goethe",
    name: "Mario Goethe",

    normal: [
        "Pase con giro.",
        "Disparo perforante.",
        "Fintas de paso rápido.",
        "Pinpoint Tackle.",
        "Giro rápido."
    ],

    special: [
        {
            text: "Tiro con giro y paso",
            star: true
        },

        {
            text: "Pared técnica germánica (Cualquier alemán)",
            star: false
        }
    ]
},

{
    id: "schneider",
    name: "Karl Heinz Schneider",

    normal: [
        "Bloqueo Deslizante.",
        "Fire Pass",
        "Fire Shot",
        "Fire Diving Header",
        "Kaiser Dribble",
        "Flaming Interception",
        "Neo Fire Shot.",
        "Double Fire.",
        "Fire Volley.",
        "Flaming Interception.",
        "Supreme Fire shot.",
        "Volea aérea del Kaiser.",
        "Winning Fire Shot.",
        "Fire Drive Twin Shot (Tsubasa).",
        "Finta de fuego.",
        "Chiping Fire (Kaltz)",
        "Combinación Germánica.",
        "Pisotón Germánico.",
        "Swift Passing.",
        "One-Two Header (Teigerbran)."
    ],

    special: [
        {
            text: "I.W.B.P.W",
            star: false
        },

        {
            text: "Tiro Mellizo de volea a tope.",
            star: false
        },

        {
            text: "Jugada a tres bandas (Teigerbran, Kaltz)",
            star: false
        },

        {
            text: "Straight-Trough Power Fire.",
            star: false
        },

        {
            text: "Acorazado al ataque.",
            star: false
        },

        {
            text: "Duo de oro alemán (Heine)",
            star: false
        },

        {
            text: "Fire Shot",
            star: true
        },

        {
            text: "Munich CrossFire (Levin).",
            star: false
        },

        {
            text: "Superspeed Kickback Fire Shot (Kartz, Teigerbran)",
            star: true
        },

        {
            text: "Dragon's Roar",
            star: true
        }
    ]
},

{
    id: "espadas",
    name: "Ricardo Espadas",

    normal: [
        "⚽ MODO PORTERO",
        "Miracle Catch",
        "Cóndor Catch",
        "High Jump Catch",
        "Super reflex Catch",
        "Double-Handed Punch",
        "Cóndor Punch",
        "Boost Catch",

        "⚽ MODO DELANTERO",
        "Cóndor Shot",
        "Overlaping Dribble",
        "Intercepción del Cóndor",
        "High-Jumping Cóndor Shot",
        "Condor Strike",
        "Pase del cóndor."
    ],

    special: [

        {
            text: "Fly High Cóndor Save (MODO PORTERO)",
            star: false
        },

        {
            text: "Intuición del portero milagroso (MODO PORTERO)",
            star: true
        },


        {
            text: "Feint Cóndor Header ( MODO DELANTERO)",
            star: false
        },

        {
            text: "Trick Shot (MODO DELANTERO)",
            star: true
        },

        {
            text: "Super Cóndor Shot (MODO DELANTERO).",
            star: false
        }
    ]
},

{
    id: "victorino",
    name: "Ramon Victorino",

    normal: [
        "Volea técnica.",
        "Regate de la pantera.",
        "Chilena de la pantera.",
        "Tiro de la pantera.",
        "Cabezazo en picada en carrera.",
        "Paso Supersónico.",
        "Combinación en carrera",
        "Finta de la pantera.",
        "Volea de la pantera.",
        "Tornado Pantera.",
        "Chilena a alta velocidad.",
        "Duo de oro Uruguayo (Victorino)."
    ],

    special: [
        {
            text: "Duo Imbatible (Hino)",
            star: false
        },

        {
            text: "Cabezazo en picado de la pantera salvaje",
            star: true
        },

        {
            text: "Panter Spurt Shot.",
            star: false
        }
    ]
},

{
    id: "robson",
    name: "Robson",

    normal: [
        "Bloqueo Ingles.",
        "Intercepción Británica.",
        "Entrada Británica.",
        "Entrada Poderosa.",
        "Bloqueo Perfecto.",
        "Pase Británico."
    ],

    special: [
        {
            text: "Pase Agresivo del León Británico.",
            star: true
        },

        {
            text: "Dinamico Bloqueo de Volea.",
            star: false
        }
    ]
},

{
    id: "leo",
    name: "Lucciano Leo",

    normal: [
        "Duo de oro Brasileño (Santana).",
        "Tiro Confrontativo.",
        "Pared brasileña (Pepe).",
        "Duo de plata de Brasil (Pepe)",
        "Regate omitido.",
        "Intercepción Noble.",
        "Pase asesino.",
        "Pase a alta velocidad.",
        "Super jugada brasileña."
    ],

    special: [
        {
            text: "Tiro post finta",
            star: true
        },

        {
            text: "Giro de Santana con pase.",
            star: false
        }
    ]
},

{
    id: "pepe",
    name: "Pepe",

    normal: [
        "Pase Fino.",
        "Cabeceó de ángulo alto.",
        "Duo de oro del Sao Paulo (Tsubasa)",
        "Dupla de plata de Brasil (Leo)",
        "Disparo Pop-up en carrera.",
        "Finta energética.",
        "Cabezazo en picado a máxima potencia.",
        "Cabezazo a sangre caliente.",
        "Hermoso cabezazo en picada."
    ],

    special: [
        {
            text: "Cabezazo gladiador.",
            star: true
        },

        {
            text: "Duro espíritu Sudamericano.",
            star: false
        },

        {
            text: "Disparo Salvaje.",
            star: false
        }
    ]
},

{
    id: "levin",
    name: "Stefan Levin",

    normal: [
        "Truco Aurora.",
        "Pasos Aurora.",
        "Cortina Aurora.",
        "Intercepción Aurora.",
        "Levin Shot V1.",
        "Feroz Levin Shot.",
        "Twin Burst Levin Shot.",
        "Levin Rush.",
        "Munich Combination (Schneider).",
        "Pase Levin.",
        "Pase Gatillo.",
        "Cuatro Caballeros (Brolin, Federiks, Larson).",
        "Disparo Preciso.",
        "Disparo afilado de máxima velocidad."
    ],

    special: [
        {
            text: "Destructive Impulse.",
            star: false
        },

        {
            text: "Levin Shot",
            star: true
        },

        {
            text: "Munich Cross Fire.",
            star: false
        },

        {
            text: "Levin OverHead Nick.",
            star: false
        },

        {
            text: "Levin Shot de giro Rápido.",
            star: false
        },

        {
            text: "Tiro de Levin Aéreo.",
            star: false
        },

        {
            text: "Cuatro Caballeros 2.0 (Federiks, Larson, Robson)",
            star: true
        }
    ]
},

{
    id: "santana",
    name: "Carlos Santana",

    normal: [
        "Nuevo futbol brasileño.",
        "Intercepción en picada.",
        "Intercepción aérea Cyborg.",
        "Tiro del águila dorada.",
        "Rolling Arrow Overhead Kick.",
        "Tornado Arrow Skywing Shot.",
        "Duo de ensueño de Brasil",
        "Combinación cruzada de la canarinha (Natureza)",
        "Disparo antigua Brasil (Alberto).",
        "Tiro de Sagitario."
    ],

    special: [
        {
            text: "N.R.S",
            star: false
        },

        {
            text: "Regate Voltereta mortal.",
            star: false
        },

        {
            text: "SantaNatureza",
            star: false
        },

        {
            text: "Rising Arrow Shot.",
            star: false
        },

        {
            text: "Full Metal Phantom",
            star: true
        },

        {
            text: "Tornado arrow skywing shot",
            star: true
        },

        {
            text: "Super speed combination (Pepe, Leo)",
            star: false
        },

        {
            text: "Tiro Combinado de las estrellas de Brasil (Salinas, Natureza).",
            star: true
        }
    ]
},

{
    id: "natureza",
    name: "Natureza",

    normal: [
        "Pase aéreo con efecto.",
        "Duo de ensueño de Brasil (Santana).",
        "Regate rebote.",
        "Tiro con efecto en dos fases.",
        "The Wonder defense.",
        "Heel trick dribble.",
        "Tiro mellizo de los brasileños de ensueño (Santana)",
        "Chilena Voladora con efecto",
        "Chilena explosiva en tres fases.",
        "Pop-Up feed",
        "Intercepción Flash",
        "Cortina Aurora",
        "Duo de ensueño (Tsubasa)",
        "Pase de Tacón.",
        "Volea con doble salto",
        "Chilena en dos fases."
    ],

    special: [
        {
            text: "Disparo Volador Milagroso",
            star: true
        },

        {
            text: "Entrada de retroceso en dos fases.",
            star: false
        },

        {
            text: "Full Metal Phantom (Santana)",
            star: true
        },

        {
            text: "N.R.S",
            star: false
        },

        {
            text: "SantaNatureza",
            star: false
        },

        {
            text: "Gran Dragón (Xiao, Santana)",
            star: false
        },

        {
            text: "Contraremate Natureza",
            star: true
        },

        {
            text: "Tiro Eclipse.",
            star: false
        }
    ]
},

{
    id: "xiao",
    name: "Xiao Junguang",

    normal: [
        "Aspirante a Dragón.",
        "Disparo de Volea Aerea",
        "Strong Tackle",
        "Superspeed KickBack Canon",
        "Step Swing Feed",
        "KickBack Loose Ball Shot",
        "Jumping-Turn Intercept.",
        "Tiro Dragón Asiático."
    ],

    special: [
        {
            text: "Dragon's Roar (Levin y Schneider)",
            star: true
        },

        {
            text: "Swing Passing (Levin y Schneider)",
            star: false
        },

        {
            text: "Gran Dragón (Natureza, Santana)",
            star: true
        },

        {
            text: "Contra remate relámpago.",
            star: false
        },

        {
            text: "Contraremate",
            star: true
        },

        {
            text: "Contraremate Surca cielos.",
            star: false
        }
    ]
},

{
    id: "cruyfford",
    name: "Brian Cruyfford",

    normal: [
        "Intercepción de reacción rápida.",
        "Volea de espiral.",
        "Disparo de ruptura.",
        "Volea Aerea de baja altura en espiral.",
        "Combinación Instantánea.",
        "Elevación Espiral.",
        "Gallant Step.",
        "Disparo Ilusorio.",
        "Chilena melliza de Cruyfford's (Stijn)",
        "Fake Move shot",
        "Feint Heel Volley",
        "Futbol total.",
        "Nuevo tiro de ruptura."
    ],

    special: [
        {
            text: "Proven Ace.",
            star: false
        },

        {
            text: "Volea en dos fases",
            star: true
        },

        {
            text: "Feint Hell Volley.",
            star: false
        },

        {
            text: "Cruyfford Turn and Windmill Shot.",
            star: false
        },

        {
            text: "Land of Blooming Flowers dash (Stijn)",
            star: false
        },

        {
            text: "Super Tiro de Ruptura.",
            star: false
        },

        {
            text: "Chilena melliza de Molino (Stijn)",
            star: true
        }
    ]
},

{
    id: "bunmaak",
    name: "Singprasert Bunnaak",

    normal: [
        "Entrada Muay Thai.",
        "Bloqueo Muay Thai.",
        "Regate Muay Thai.",
        "Disparo Muay Thai.",
        "Entrada Rompedora."
    ],

    special: [
        {
            text: "Paso Khao Trong.",
            star: false
        },

        {
            text: "Impacto Tailandés.",
            star: false
        },

        {
            text: "Entrada Asesina.",
            star: true
        }
    ]
},

{
    id: "gentile",
    name: "Salvatore Gentile",

    normal: [
        "Entrada Persecutoria.",
        "Supernova.",
        "Nuevo Bloqueo estelar.",
        "Regate Dandy.",
        "Intercepción Proactiva.",
        "Intercepción Cantenaccio.",
        "Entrada de ángulo recto.",
        "Intercepción Aguda.",
        "Bloqueo Dandy.",
        "Intercepción Dandy.",
        "Bloqueo a bola cerrada.",
        "Intercepción arremetida."
    ],

    special: [
        {
            text: "Entrada francotirador.",
            star: false
        },

        {
            text: "Bloqueo Duelista",
            star: true
        },

        {
            text: "Intercepción de carga cantenaccio.",
            star: false
        },

        {
            text: "Defensa Cantenaccio (Jugador que haya jugado en la Juventus)",
            star: false
        }
    ]
},

{
    id: "blake",
    name: "Blake Martin",

    normal: [
        "Blake Shot.",
        "Chilena de Blake.",
        "Blake Dribble.",
        "Megaton Dribble.",
        "Entrada de Blake."
    ],

    special: [
        {
            text: "Super Blake Shot.",
            star: true
        },

        {
            text: "Justice Blake.",
            star: false
        },

        {
            text: "Nuevo Blake Shot.",
            star: false
        }
    ]
},

{
    id: "senghor",
    name: "Ismail Senghor",

    normal: [
        "Knuckle Shot.",
        "Regate Matador.",
        "Tailwind Pass.",
        "Pase del Cordero."
    ],

    special: [
        {
            text: "Arc Bridge Shot",
            star: true
        },

        {
            text: "Senghor Dance.",
            star: false
        },

        {
            text: "Control renacido.",
            star: false
        }
    ]
},

{
    id: "akai",
    name: "Tomeya Akai",

    normal: [
        "Intercepción Agresiva.",
        "Entrada Peligrosa.",
        "Pase Fuerte.",
        "Bloqueo Soldado.",
        "Intercepción Persecutoria.",
        "Intercepción de entrada corporal.",
        "Agresiva defensa en ángulo recto."
    ],

    special: [
        {
            text: "Desesperado Frenado de tiro.",
            star: true
        },

        {
            text: "¡Nadie me gana en el Marcaje Hombre a Hombre!",
            star: false
        },

        {
            text: "Intercepción Duo Semáforo (Shingo Aoi.)",
            star: false
        },

        {
            text: "Defensa Duo Semáforo (Shingo Aoi.)",
            star: false
        },

        {
            text: "Agresivo frenado de disparos consecutivos",
            star: true
        }
    ]
},

{
    id: "igawa",
    name: "Gakuto Igawa",

    normal: [
        "Entrada Bala.",
        "Intercepción Bala.",
        "Bloqueo Bala.",
        "Intercepción de Pecho.",
        "Bloqueo de rotura.",
        "Regate Rápido.",
        "Bloqueo silencioso.",
        "Bloqueo sencillo."
    ],

    special: [
        {
            text: "Bloqueo de cabeza de salto alto.",
            star: true
        },

        {
            text: "Cabezazo victorioso.",
            star: true
        },

        {
            text: "🧤 Cobertura de posición rápida 🧤",
            star: false
        }
    ]
},

{
    id: "owairan",
    name: "Mark Owairan",

    normal: [
        "Volea Rodante.",
        "Bloqueo Cruzado.",
        "Regate Rodante.",
        "Ataque de arenas ardientes.",
        "Intercepción tormenta de arena.",
        "Disparo tormenta de arena.",
        "Tiro Con efecto.",
        "Intercepción Rápida.",
        "Entrada Cruzada.",
        "Pase arenoso.",
        "Disparo con efecto tormenta de arena.",
        "Regate espejismo.",
        "Pase príncipe.",
        "Defensa de arena.",
        "Disparo de tormenta de arena del genio (Vulcan)."
    ],

    special: [
        {
            text: "Defensa de presión arenosa",
            star: true
        },

        {
            text: "Pase desértico.",
            star: false
        },

        {
            text: "Bloqueo Aéreo.",
            star: false
        }
    ]
},

{
    id: "soga",
    name: "Yuji Soga",

    normal: [
        "Intercepción Potente.",
        "Entrada de agarre.",
        "Cabezazo en medio de dos.",
        "Duelo aéreo heroico.",
        "Entrada Heróica.",
        "Intercepción Ascendente."
    ],

    special: [
        {
            text: "Bloqueo de cabeza bombardero",
            star: true
        },

        {
            text: "Intercepción Heróica.",
            star: false
        }
    ]
},

{
    id: "radunga",
    name: "Radunga",

    normal: [
        "Entrada duo brasileño (Alberto).",
        "Rápida Intercepción cubierta.",
        "Intercepción de Salto de contacto.",
        "Duo estudiante y alumno del Sao Pablo (Tsubasa).",
        "Entrada del guerrero feroz.",
        "Pase Brasileño."
    ],

    special: [
        {
            text: "Determinado Bloqueo Facial",
            star: true
        },

        {
            text: "¡No te atrevas a perder esto!",
            star: false
        }
    ]
},

{
    id: "teigerbran",
    name: "Schweil Teigerbran",

    normal: [
        "Raiju Shot.",
        "Raiju Pass.",
        "Intercepción Ave Mitica.",
        "Bloqueo de Ave Espeluznante.",
        "Formación Schwarz-Gelb (Cualquiera del Dortmund).",
        "Regate Burst",
        "Pases Germánicos de cabeza (Schneider)",
        "Bloqueo superpotente.",
        "Bloqueo en Conjunto (Kaltz)."
    ],

    special: [
        {
            text: "¡NADIE PISA MI JARDIN!",
            star: true
        },

        {
            text: "Raiju Shot V2.",
            star: false
        },

        {
            text: "Raiju Falcón Shot (Nitta).",
            star: false
        },

        {
            text: "Bloqueo Desesperado.",
            star: false
        },

        {
            text: "SuperSpeed Kickback Shot (Schneider, Kaltz)",
            star: false
        },

        {
            text: "Volea Melliza a Tope.",
            star: false
        }
    ]
},

{
    id: "vulcan",
    name: "Vulcan",

    normal: [
        "Vulcan canon a máximo poder.",
        "Bloqueo del genio.",
        "Cabezazo del genio.",
        "¡Tragate está!",
        "Pase del genio.",
        "Tiro tormenta de arena del genio (Owairan)",
        "Entrada de Vulcan.",
        "Disparo de Zurda del genio."
    ],

    special: [
        {
            text: "¡Disparo del genio de la lámpara! ¡¡Vulcan!!",
            star: false
        },

        {
            text: "¡Insignificantes Ante el genio!",
            star: false
        },

        {
            text: "Fuerza Imparable del Genio",
            star: true
        },

        {
            text: "Disparo del principe y su genio de la lámpara (Owairan)",
            star: true
        }
    ]
},

{
    id: "brolin",
    name: "Brolin",

    normal: [
        "Intercepción Muscular.",
        "Bloqueo Muscular.",
        "Entrada Ascendente.",
        "Bloqueo Marcaje cerrado.",
        "Regate a máximo poder.",
        "Cuatro Caballeros (Levin, Federiks, Larson).",
        "Entrada Potente.",
        "Bloqueo en barrida ascendente.",
        "Despeje ascendente."
    ],

    special: [
        {
            text: "Bazuca Ascendente",
            star: true
        },

        {
            text: "Pase Bazuca ascendente.",
            star: false
        },

        {
            text: "Cuatro Caballeros 2.0 (Federiks, Levin, Larson).",
            star: false
        },

        {
            text: "Bloqueo Cabezazo Ascendente.",
            star: false
        },

        {
            text: "Marcaje Vikingo.",
            star: false
        }
    ]
},

{
    id: "salinas",
    name: "Salinas",

    normal: [
        "Atajada a una mano.",
        "Reflejos del Genio.",
        "Atajada perfecta con salto.",
        "Full Swing Punch.",
        "Perfect Jump Save.",
        "Salvada Guardian."
    ],

    special: [
        {
            text: "Super reflejos del genio.",
            star: false
        },

        {
            text: "Cancerbero de la seleção",
            star: true
        }
    ]
},

{
    id: "haas",
    name: "Haas",

    normal: [
        "Duo Notorio (Algún mc agresivo/Provocador)",
        "Heel Hamer Shot",
        "Regate con finta.",
        "Entrada de pierna larga",
        "Volea Técnica.",
        "Intimidante entrada.",
        "Súper Salto agobiante."
    ],

    special: [
        {
            text: "Volea de salto con finta",
            star: true
        },

        {
            text: "Objetivo Fijado.",
            star: false
        },

        {
            text: "💀Choque Violento💀",
            star: false
        },

        {
            text: "¡Lindo Pase!",
            star: false
        }
    ]
},

{
    id: "ochado",
    name: "J.J. Ochado",

    normal: [
        "Regate Súper Técnico.",
        "KnuckleBall Shot.",
        "Láser Feed",
        "Entrada Gambler's",
        "Pared Shuffle.",
        "Pase PintPoint.",
        "Calentamiento Técnico.",
        "Bloqueo Nigeriano."
    ],

    special: [
        {
            text: "Afilado Tiro deslizante",
            star: true
        },

        {
            text: "Tiro peleado (Bobang).",
            star: false
        }
    ]
},

{
    id: "bobang",
    name: "Bobang",

    normal: [
        "Cabezazo salto alto de Bobang.",
        "Duo de oro del Albense (Shingo)",
        "Volea de piernas largas.",
        "Bloqueo de rebote.",
        "Motivación Nigeriana."
    ],

    special: [
        {
            text: "Tiro Peleado (Ochado).",
            star: false
        },

        {
            text: "Volea voladora de Bobang",
            star: true
        },

        {
            text: "Bloqueo Estocada.",
            star: false
        }
    ]
},

{
    id: "lee",
    name: "Lee Yong-Un",

    normal: [
        "Chilena a Baja altura.",
        "Disparo de colmillo técnico.",
        "Tigre manso y Tigre feroz (Cha Icheon)",
        "Entrada Fuerte.",
        "Intercepción de cambio.",
        "Regate Técnico."
    ],

    special: [
        {
            text: "¡Está es mi oportunidad!",
            star: true
        },

        {
            text: "Tiro Mellizo diablos rojos (Cha Icheon).",
            star: false
        },

        {
            text: "Supertiro manso.",
            star: false
        },

        {
            text: "Tiro Mellizo Manso-Feroz (Chá)",
            star: true
        }
    ]
},

{
    id: "cha",
    name: "Cha Icheon",

    normal: [
        "Regate Tanque Pesado.",
        "Entrada Tanque Pesado.",
        "Tigre manso y Tigre feroz (Lee).",
        "Power Shot.",
        "Tiro Tanque Pesado."
    ],

    special: [
        {
            text: "Super tiro Feroz.",
            star: false
        },

        {
            text: "Tiro Mellizo Manso-Feroz (Lee)",
            star: true
        },

        {
            text: "Tiro Mellizo diablos rojos (Lee).",
            star: false
        },

        {
            text: "Heavy Tank Canon",
            star: true
        }
    ]
},

{
    id: "thoram",
    name: "Thoram",

    normal: [
        "Entrada anuladora.",
        "Intercepción Pared alta.",
        "Entrada pared impenetrable.",
        "Pase Veterano."
    ],

    special: [
        {
            text: "Bloqueo archienemigo de cracks",
            star: true
        },

        {
            text: "Intercepción Matacracks.",
            star: false
        },

        {
            text: "Asumo la responsabilidad... Voy a frenarte.",
            star: false
        }
    ]
},

{
    id: "zangiev",
    name: "Zangiev",

    normal: [
        "Entrada Ciclón.",
        "Regate Poderoso.",
        "Ataque Ciclón.",
        "Disparo Arrollador.",
        "Triángulo Potente."
    ],

    special: [
        {
            text: "Disparo Ciclón",
            star: true
        },

        {
            text: "Arrollador Fútbol",
            star: false
        }
    ]
},

{
    id: "fei",
    name: "Fei Xiang",

    normal: [
        "Cabezazo arcoiris.",
        "Entrada Potente.",
        "Disparo potente.",
        "Cabezazo de salto.",
        "Estudio Infiltrado."
    ],

    special: [
        {
            text: "Cabezazo salto alto del Ave Misteriosa",
            star: false
        },

        {
            text: "Avian Attack.",
            star: false
        },

        {
            text: "¡Yo soy el Ave Mitica de china!",
            star: true
        }
    ]
},

{
    id: "stijn",
    name: "Stijn Cruyfford",

    normal: [
        "Disparo Mellizo Molino (Brian).",
        "Paso Galante.",
        "Entrada dinámica deslizante.",
        "Tiro de Ruptura.",
        "Giro Sorpresivo.",
        "Intercepción Super reactiva."
    ],

    special: [
        {
            text: "Chilena Melliza Molino (Brian).",
            star: false
        },

        {
            text: "Land Of Blooming Flowers Dash (Brian).",
            star: false
        },

        {
            text: "Giro de Cruyff y Tiro Molino",
            star: true
        }
    ]
},

{
    id: "doleman",
    name: "Hans Doleman",

    normal: [
        "Súper atajada.",
        "Puñetazo a dos manos.",
        "Intimidante Presencia.",
        "¡Bloquealo!",
        "¡No hay remate que no pueda parar!"
    ],

    special: [
        {
            text: "¡Que me dé en algún sitio!",
            star: true
        },

        {
            text: "Agresivo Blocaje en picado.",
            star: false
        }
    ]
},

{
    id: "davi",
    name: "Davi",

    normal: [
        "Buster Feed.",
        "Entrada cazadora.",
        "Regate Lineal.",
        "Paso Supersónico.",
        "Intercepción a alta velocidad.",
        "Cruzado perfecto.",
        "Disparo Bala.",
        "Carta Blanquinegro (Jugador de la Juve)."
    ],

    special: [
        {
            text: "Sweeping intercept.",
            star: false
        },

        {
            text: "Regate del perro rabioso",
            star: true
        },

        {
            text: "Mordida del perro rabioso.",
            star: false
        },

        {
            text: "Pase trasero de salto.",
            star: false
        }
    ]
},

{
    id: "hino",
    name: "Ryoma Hino",

    normal: [
        "Duo de oro Uruguayo (Victorino)",
        "Twister Step.",
        "Tiro del dragón.",
        "Tiro del dragón elevado.",
        "Rodillazo aéreo.",
        "Tiro tornado.",
        "Tiro tornado a máximo poder.",
        "Dragón Tiger Shot (Hyuga).",
        "Carga Tornado.",
        "Regate Tornado veloz.",
        "Pase Dragón.",
        "Rising Tornado Volley.",
        "Tiro tornado a doble velocidad de Triple giro.",
        "Rodillazo Volador.",
        "Cabezazo de salto de dragón.",
        "Flame Tornado Shot.",
        "Tiro tornado de doble giro volador.",
        "Regate Sudamericano.",
        "Duo Tigre - Dragón (Hyuga)",
        "Entrada Tornado."
    ],

    special: [
        {
            text: "Tiro Tornado de doble giro a doble velocidad",
            star: true
        },

        {
            text: "Duo Imbatible (Victorino)",
            star: false
        },

        {
            text: "Raiju Tornado Shot (Hyuga)",
            star: false
        },

        {
            text: "Tiro Tornado a baja altura.",
            star: false
        }
    ]
},

{
    id: "callusias",
    name: "Callusias",

    normal: [
        "Atajada voladora.",
        "Puñetazo a dos manos.",
        "Puñetazo super enfocado.",
        "Nuevo Enfoque."
    ],

    special: [
        {
            text: "Atajada doble reacción",
            star: true
        },

        {
            text: "Atajada Dash.",
            star: false
        }
    ]
},

{
    id: "raphael",
    name: "Raphael",

    normal: [
        "Pase Flick.",
        "Regate Trucado.",
        "Pared Traviesa (Michael)",
        "Tiro Rebotante Trucado.",
        "Entrada Picada de balón.",
        "Paso adelante.",
        "Ruleta giratoria.",
        "Chilena de salto con finta."
    ],

    special: [
        {
            text: "Tiro Rebotante con finta",
            star: true
        },

        {
            text: "Chilena de Salto con Finta (Balones altos).",
            star: false
        },

        {
            text: "Chilena de salto con finta (Esquivable).",
            star: false
        },

        {
            text: "Skywalk Step.",
            star: false
        },

        {
            text: "Chilena salto triangular final (Michael).",
            star: false
        }
    ]
},

{
    id: "michael",
    name: "Michael",

    normal: [
        "Entrada Inmóvil.",
        "Regate Bomba de tiempo.",
        "F.C.P",
        "No Pressure Shot.",
        "Entrada Veloz.",
        "Pase solitario.",
        "Angelical Dribble.",
        "Escalera al cielo.",
        "No Motion Cross.",
        "Intercepción angelical.",
        "Tiro Bomba de tiempo de extralargo alcance.",
        "Pared Traviesa (Raphael)."
    ],

    special: [
        {
            text: "Chilena Salto Triangular final (Raphael).",
            star: false
        },

        {
            text: "Tornado Fire Demon",
            star: true
        },

        {
            text: "Tornado Arrow Raiju Shot.",
            star: false
        },

        {
            text: "Un milimetro del cielo",
            star: true
        },

        {
            text: "Bloqueo de Monserrat.",
            star: false
        },

        {
            text: "Intercepción Meteórica.",
            star: false
        },

        {
            text: "Escalera al cielo frenado a mitad de camino.",
            star: false
        },

        {
            text: "Deslizamiento angelical V2.",
            star: false
        },

        {
            text: "Milagroso disparo de dragón de penal.",
            star: false
        }
    ]
},

{
    id: "gozza",
    name: "Luliano Gozza",

    normal: [
        "Intercepción Dinámica.",
        "Pase Volador.",
        "Explosiva entrada deslizante.",
        "Embestida Dinámica.",
        "Cabezazo salto alto de despeje."
    ],

    special: [
        {
            text: "Entrada Dinámica",
            star: true
        },

        {
            text: "Bloqueo abdominal.",
            star: false
        }
    ]
},

{
    id: "zedane",
    name: "Zedane",

    normal: [
        "Intercepción Inteligente.",
        "Nimble Sliding.",
        "Pase a baja altura.",
        "Ataque Blanquinegro comandado (Juventus).",
        "Pase Elegante.",
        "Filtrado pase Elegante."
    ],

    special: [
        {
            text: "Ruleta en Cadena",
            star: true
        },

        {
            text: "Tiro Paso Penetrante.",
            star: false
        }
    ]
},

{
    id: "carolus",
    name: "Roberto Carolus",

    normal: [
        "Entrada Vertiginosa.",
        "Flat-Out Dribble.",
        "Bloqueo de tiros Bala.",
        "Intercepción a alta velocidad.",
        "Regate Bala.",
        "Cruzado perfecto.",
        "Patada de Larga distancia.",
        "Pase de finta.",
        "Pasos pre impacto."
    ],

    special: [
        {
            text: "Tiro Mellizo de doble diablo (Natureza)",
            star: false
        },

        {
            text: "Disparo de la zurda del diablo",
            star: true
        },

        {
            text: "Pase del diablo.",
            star: false
        },

        {
            text: "Disparo de corner cruzado del diablo.",
            star: false
        }
    ]
},

{
    id: "federiks",
    name: "Federiks",

    normal: [
        "Agil entrada deslizante.",
        "Regate Técnico.",
        "Nuevo avance técnico.",
        "Robo Técnico.",
        "Intercepción Técnica.",
        "Bloqueo de salto a último minuto.",
        "Cuatro Caballeros (Levin, Brolin, Larson)"
    ],

    special: [
        {
            text: "Regate Súper Técnico",
            star: true
        },

        {
            text: "Vaselina Técnica.",
            star: false
        },

        {
            text: "Cuatro Caballeros 2.0 (Brolin, Larson, Levin)",
            star: false
        }
    ]
},

{
    id: "larson",
    name: "Larson",

    normal: [
        "Cuatro Caballeros (Levin, Brolin, Federiks).",
        "Regate Veloz.",
        "Entrada a alta velocidad.",
        "Nuevo regate a alta velocidad.",
        "Entrada Supersónica.",
        "Robo anticipado.",
        "Bloqueo a alta velocidad.",
        "Bloqueo Supersónico."
    ],

    special: [
        {
            text: "S.S.S. (Speedy Sliding Shot)",
            star: true
        },

        {
            text: "Cuatro caballeros 2.0 (Levin, Brolin, Federiks.)",
            star: false
        },

        {
            text: "Las piernas más rápidas del mundo.",
            star: false
        }
    ]
},

{
    id: "dick",
    name: "Leon Dick",

    normal: [
        "Potente Bloqueo deslizante.",
        "Potente Entrada.",
        "Disparo Megaton.",
        "Regate Megaton.",
        "Pase Megaton.",
        "Bloqueo de alta potencia.",
        "Entrada cargada."
    ],

    special: [
        {
            text: "Ataque del equipo naranja (Cualquier Holandés).",
            star: false
        },

        {
            text: "Intercepción Megaton",
            star: true
        }
    ]
},

{
    id: "klismann",
    name: "Ruud Klismann",

    normal: [
        "Pase curvo preciso.",
        "Regate a doble paso.",
        "Fútbol Total (Holandeses).",
        "Regate suave.",
        "Tiro Preciso."
    ],

    special: [
        {
            text: "Pase Sterk",
            star: true
        },

        {
            text: "Disparo de rabona.",
            star: false
        }
    ]
},

{
    id: "ramirez",
    name: "Hugo Ramirez",

    normal: [
        "Paso de Hugo.",
        "Slaigh Pass.",
        "Straight Shot.",
        "Short Rally.",
        "Filtrado de Hugo."
    ],

    special: [
        {
            text: "Swing Shot",
            star: true
        },

        {
            text: "Intimidación de Hugo.",
            star: false
        }
    ]
},

{
    id: "kiyora",
    name: "Kiyora Jin",

    normal: [
        "Intercepción miniatura",
        "Bloqueo Breakdance",
        "Control Breakdance",
        "Regate ágil",
        "Entrada a baja altura",
        "Corte de regreso",
        "Pase previsible",
        "Regate pequeño",
        "Disparo Breakdance.",
        "Embestida en picada.",
        "Marcaje pequeño."
    ],

    special: [
        {
            text: "Breakdance",
            star: true
        },

        {
            text: "Pase al límite.",
            star: false
        },

        {
            text: "Elección de lado",
            star: false
        },

        {
            text: "Disparo Backspin a alta velocidad",
            star: true
        }
    ]
},

{
    id: "sae",
    name: "Sae Itoshi",

    normal: [
        "Tiro ajustado",
        "Regate numérico",
        "Choque controlado",
        "Pase perfecto",
        "Danza numérica.",
        "Tijeras a alta velocidad.",
        "Pase con efecto.",
        "Entrada deslizante.",
        "Control perfecto.",
        "Abrumadora diferencia.",
        "Nuevo Pase perfecto.",
        "Diferencia abrumadora.",
        "Giro mágico.",
        "Escape perfecto.",
        "Pase numerico.",
        "Cruzado perfecto.",
        "Pase exterior.",
        "Finta de último minuto.",
        "Pase ultra curvo."
    ],

    special: [
        {
            text: "Angel y Demonio (Shidou)",
            star: false
        },

        {
            text: "Drive Shot.",
            star: false
        },

        {
            text: "Quiero tus alas",
            star: true
        },

        {
            text: "Ataque numeroso.",
            star: false
        },

        {
            text: "Egoista (Aiku)",
            star: false
        }
    ]
},

{
    id: "lavinho",
    name: "Lavinho",

    normal: [
        "Danza mariposa.",
        "Apertura de alas.",
        "Presentación al mundo.",
        "Desequilibrio mariposa.",
        "Juego libre.",
        "Pase creativo.",
        "Pinpoint Pass.",
        "Finta con estilo.",
        "Pases creativos artísticos (Pierre).",
        "¡Voy a salir!",
        "¡Celebración mariposa!"
    ],

    special: [
        {
            text: "Dios Mariposa",
            star: false
        },

        {
            text: "Regate compacto con finta.",
            star: false
        },

        {
            text: "Remate infiltrado con finta",
            star: true
        }
    ]
},

{
    id: "snuffy",
    name: "Marc Snuffy",

    normal: [
        "Cabeceó fénix.",
        "Regate corona.",
        "Entrada renacida.",
        "Pase en picado.",
        "Pase super preciso.",
        "Sigan el plan.",
        "Control Fénix.",
        "Regate Fénix.",
        "Nueva Visión fénix.",
        "Intercepción Fénix."
    ],

    special: [
        {
            text: "¡A trabajar!",
            star: true
        },

        {
            text: "Intercepción planeada.",
            star: false
        },

        {
            text: "Disparo pasado y futuro (Barou).",
            star: false
        },

        {
            text: "De aquí hasta mi retiro... Soy el mejor jugador del mundo",
            star: true
        }
    ]
},

{
    id: "chris",
    name: "Chris Prince",

    normal: [
        "Bloqueo titan.",
        "Intercepción Magnífica.",
        "Apuesta al futuro.",
        "Entrada fuerza máxima.",
        "Pase inglés.",
        "Carrera Titan.",
        "Patético tu disparo.",
        "Intimidación del héroe perfecto.",
        "¡Bravo!",
        "¡¡Agua Prince!!"
    ],

    special: [
        {
            text: "KnuckleBall",
            star: false
        },

        {
            text: "Abrumenlos city.",
            star: false
        },

        {
            text: "El Héroe Perfecto",
            star: true
        }
    ]
},

{
    id: "luna",
    name: "Leonardo Luna",

    normal: [
        "Regate Español.",
        "Avance Furioso.",
        "Control español.",
        "Bicicletas a alta velocidad.",
        "Giro Español.",
        "¡Te estoy robando!"
    ],

    special: [
        {
            text: "Entrada Mundial (Loki, Dada Silva, Pablo, Blake).",
            star: false
        },

        {
            text: "¿De verdad piensas que puedes ganarme?",
            star: true
        },

        {
            text: "Diferencia de nivel mundial.",
            star: false
        }
    ]
},

{
    id: "loki",
    name: "Julian Loki",

    normal: [
        "Very Slow.",
        "Remate del N1.",
        "Cabeceó Nórdico.",
        "Intercepción flash.",
        "Intercepción a alta velocidad.",
        "Entrada deslizante.",
        "Regate Danzante rápido.",
        "Pared talentosa (Pierre)",
        "bloqueó nórdico.",
        "Impulso Veloz.",
        "Control Veloz.",
        "Robo Nórdico.",
        "Intmidante presencia nórdica.",
        "Veloz regate Zigzag.",
        "Pase Veloz",
        "Maestro Y Alumno. (Rin)",
        "Entrada Veloz.",
        "Marcaje a alta velocidad."
    ],

    special: [
        {
            text: "Bloqueo del Dios de la velocidad",
            star: false
        },

        {
            text: "Disparo del Dios nordico",
            star: true
        },

        {
            text: "Disparo a velocidad completa.",
            star: false
        },

        {
            text: "Loco y Arrogante (Hugo)",
            star: false
        },

        {
            text: "Ataque Nueva Francia (Charles, Hugo)",
            star: false
        },

        {
            text: "¿It's Okay?",
            star: false
        },

        {
            text: "Entrada Mundial (Luna, Silva, Pablo, Blake)",
            star: false
        },

        {
            text: "Maldito Lunatico (Rin)",
            star: false
        }
    ]
},

{
    id: "charles",
    name: "Charles Chevalier",

    normal: [
        "Robo travieso",
        "Bloqueo Kamikaze",
        "Pase redirigido",
        "Regate Duende escurridizo",
        "Intercepción Alocada",
        "Centro alocado",
        "Centro aburrido",
        "¡Te cache!",
        "Aburrido juego",
        "Finta malévola.",
        "¡Nadie pasa del área!",
        "Pase a un toque.",
        "Regate Veloz.",
        "¡No me interesa!",
        "Regate en ángulo recto."
    ],

    special: [
        {
            text: "¡Centro de Rabona cruzada!",
            star: true
        },

        {
            text: "Disparo Duende",
            star: false
        },

        {
            text: "Duo pervertido (Shidou)",
            star: false
        },

        {
            text: "Ataque Nueva Francia (Hugo, Loki)",
            star: false
        },

        {
            text: "Final Boss",
            star: true
        },

        {
            text: "No les damos ni un respiro (Hugo)",
            star: false
        },

        {
            text: "¡Marquemosle Juntos! (Shidou)",
            star: false
        },

        {
            text: "¡Impresionante! (Rin)",
            star: false
        },

        {
            text: "Los locos más locos (Shidou)",
            star: false
        }
    ]
},

{
    id: "lorenzo",
    name: "Don Lorenzo",

    normal: [
        "Regate Zombie.",
        "Pase muerto viviente.",
        "Fake Shot.",
        "Marcaje de muerto viviente.",
        "Amague Zombie.",
        "Adiós x millones",
        "Mareo con el balón",
        "Trabajen Ubers (Barou)",
        "Tranquilo gatito",
        "Intercepción Zombie.",
        "Control muerto viviente.",
        "Guau Guau!",
        "Análisis del valor.",
        "Freno zombie.",
        "Entrada Fuerte.",
        "Paredes de empleados (Ubers)",
        "Serie de pases de trabajadores."
    ],

    special: [
        {
            text: "Bloqueo Facial Zombie",
            star: false
        },

        {
            text: "Muerto viviente.",
            star: false
        },

        {
            text: "Combinación León x Zombie (Barou)",
            star: false
        },

        {
            text: "Duo de defensa de Ubers (Aiku)",
            star: false
        },

        {
            text: "Rebelión (Ubers)",
            star: true
        },

        {
            text: "Avance ladrón de dinero",
            star: true
        }
    ]
},

{
    id: "ness",
    name: "Alexis Ness",

    normal: [
        "Regate mágico",
        "Intercepción fantasiosa",
        "Centro Ilusorio",
        "Danza de Hadas",
        "Finta flexible.",
        "Regate ágil flexible.",
        "Cruzado perfecto.",
        "Pase Attaboy.",
        "Pase de fantasía.",
        "Pase curvo.",
        "Control Mágico",
        "Mal chico.",
        "Hacer tiempo.",
        "Pase a un toque.",
        "Carrera mágica."
    ],

    special: [
        {
            text: "Mago y Emperador (Kaiser)",
            star: false
        },

        {
            text: "¡Es el mejor gol que he visto en mi vida! (Kaiser)",
            star: false
        },

        {
            text: "Te odio (Isagi, Kaiser)",
            star: false
        },

        {
            text: "Hora Mágica.",
            star: false
        },

        {
            text: "Antiguo Pase mágico.",
            star: false
        },

        {
            text: "Intercepción Mágica.",
            star: false
        },

        {
            text: "Juego Imposible (Kaiser)",
            star: false
        },

        {
            text: "¡Pase rebelión!",
            star: true
        }
    ]
},

{
    id: "kaiser",
    name: "Michael Kaiser",

    normal: [
        "Regate emperador.",
        "Impacto Kaiser Caótico.",
        "Intercepción soberana.",
        "Finta pre impacto.",
        "Lectura prematura.",
        "Pared Emperador - Rey demonio (Isagi).",
        "Volea del Kaiser.",
        "Despeje de impacto.",
        "Giro del Kaiser.",
        "Freno prematuro.",
        "Caño imperial.",
        "Pase enemigo.",
        "Kaiser Impact original.",
        "Control Emperador.",
        "Impacto Fijado.",
        "Avance Imperial.",
        "Impacto Magnus Imperfecto.",
        "Cambio de ritmo.",
        "Hora de la ejecución.",
        "Entrada duo del Bastard (Isagi)"
    ],

    special: [
        {
            text: "Impacto Magnus",
            star: true
        },

        {
            text: "Juego imposible (Ness)",
            star: false
        },

        {
            text: "Pase Magnus.",
            star: false
        },

        {
            text: "Te Odio (Ness, Isagi)",
            star: false
        },

        {
            text: "¡Es el mejor gol que he visto en mi vida! (Kaiser)",
            star: false
        },

        {
            text: "Mago y Emperador (Ness)",
            star: false
        },

        {
            text: "Impacto Kaiser Directo (Isagi)",
            star: false
        },

        {
            text: "Duo de bastardos (Noa)",
            star: false
        }
    ]
},

{
    id: "igaguri",
    name: "Igaguri Gurimu",

    normal: [
        "Entrada sucia.",
        "Regate del Monje.",
        "Pase milagroso.",
        "Robo malicioso.",
        "Avance provocador.",
        "Intercepción sucia.",
        "Monje y Dragón (Shidou)",
        "Disparo Oportuno",
        "Última oportunidad (Noa)"
    ],

    special: [
        {
            text: "Entrada salvadora.",
            star: false
        },

        {
            text: "Defensa Milagrosa",
            star: true
        },

        {
            text: "Sacrificio para ganar",
            star: false
        }
    ]
},

{
    id: "niou",
    name: "Kazuma Niou",

    normal: [
        "Marcaje Cerrado.",
        "Bloqueo Perro salvaje.",
        "Bloqueo Ingles.",
        "Entrada salvaje.",
        "Reducción Salvaje."
    ],

    special: [
        {
            text: "Presion doberman",
            star: true
        },

        {
            text: "Centrales de Hierro (Aiku)",
            star: false
        },

        {
            text: "Muro de Hierro (Aiku, Teppei)",
            star: false
        }
    ]
},

{
    id: "sendou",
    name: "Shuuto Sendou",

    normal: [
        "Disparo estrella.",
        "Pared del delantero de Japón.",
        "Chilena de bloqueo defensivo.",
        "Disparo estrella V2.",
        "Barrida de la Hiena.",
        "Estiramiento superestrella.",
        "Pase al estrellato",
        "¡Lucharé hasta lleno de calambres!",
        "Sobrevivientes de Japón (Aiku)",
        "Control superestrella",
        "Pase al estrellato",
        "Pase artillero.",
        "Pase Preciso.",
        "Análisis estadístico.",
        "Relajada Estrella (Aiku)."
    ],

    special: [
        {
            text: "Pared Hiena x León (Barou)",
            star: false
        },

        {
            text: "Combinación artillería de Ubers (Barou)",
            star: false
        },

        {
            text: "Rebelión (Barou)",
            star: true
        },

        {
            text: "¡Sendou! (Aiku.",
            star: false
        },

        {
            text: "Bloqueo de la superestrella.",
            star: false
        },

        {
            text: "Cabeceo de la hiena",
            star: false
        }
    ]
},

{
    id: "nanase",
    name: "Nanase Nijiro",

    normal: [
        "Pared ordinaria.",
        "Intercepción Fiel.",
        "Pase Rápido.",
        "Carrera Ordinaria.",
        "Regate Campesino de retención.",
        "Robo Fiel.",
        "Control ambidiestro.",
        "Carrera Ordinaria.",
        "Pared Ordinaria (Isagi)"
    ],

    special: [
        {
            text: "Pase a dos piernas Fiel",
            star: true
        },

        {
            text: "Pared destructora (Rin).",
            star: false
        }
    ]
},

{
    id: "teppei",
    name: "Neru Teppei",

    normal: [
        "Entrada en carrera.",
        "Marcaje Veloz.",
        "Bloqueo a alta velocidad.",
        "Intercepción Rápida.",
        "Carrera a alta velocidad."
    ],

    special: [
        {
            text: "Persecución A alta velocidad",
            star: true
        },

        {
            text: "Muro de Hierro (Aiku, Niou)",
            star: false
        }
    ]
},

{
    id: "raichi",
    name: "Raichi Jingo",

    normal: [
        "Entrada Sexy.",
        "Carrera Bulldog.",
        "Intercepción Sexy.",
        "Oportunidad Sexy.",
        "Pase segunda oportunidad.",
        "Marca Obstinada.",
        "Freno bulldog",
        "Desvío Sexy.",
        "Duelista Sexy.",
        "Pase Bulldog.",
        "Intercepción Bulldog.",
        "Marcaje duo tiburón (Kurona)."
    ],

    special: [
        {
            text: "Marcaje Transportador",
            star: true
        },

        {
            text: "Bloqueo Bulldog.",
            star: false
        },

        {
            text: "Control Sexy.",
            star: false
        },

        {
            text: "Dupla defensiva del Bastard (Gagamaru)",
            star: false
        }
    ]
},

{
    id: "kurona",
    name: "Kurona Ranze",

    normal: [
        "Regate Orbitante",
        "Despeje tiburón",
        "Paso Orbitante",
        "Pared dos vs dos ¡Dos!",
        "Marcaje Duo Tiburón (Raichi).",
        "Intercepción de Órbita.",
        "Control Planetario",
        "Pase Tiburón.",
        "Pase Curvado.",
        "Estiramiento Tiburón.",
        "Entrada Tiburón.",
        "Pase Nuevo Tiburón."
    ],

    special: [
        {
            text: "Disparo Mordida",
            star: false
        },

        {
            text: "Saltos Orbitantes.",
            star: false
        },

        {
            text: "Juego Planetario",
            star: true
        }
    ]
},

{
    id: "gagamaru",
    name: "Gin Gagamaru",

    normal: [
        "Zarpaso.",
        "Tapada a una mano.",
        "Pase largo del Oso.",
        "Salvada rápida.",
        "Pase al contraataque",
        "Despeje cabeceó alto",
        "Disparo último minuto.",
        "Cabeceó del Oso",
        "disparo del oso",
        "Tacón Shot",
        "Intercepción de tacón",
        "Bloqueo En Picado.",
        "Pase de Larga distancia.",
        "Ese disparo no es nada nuevo.",
        "Intercepción Del Oso."
    ],

    special: [
        {
            text: "Bloqueo domabestias.",
            star: true
        },

        {
            text: "Bloqueo de tacón.",
            star: false
        },

        {
            text: "Cambio de posición",
            star: true
        },

        {
            text: "Dupla defensiva del Bastard.",
            star: false
        }
    ]
},

{
    id: "niko",
    name: "Niko Ikki",

    normal: [
        "Defensa radar.",
        "Entrada torre de control.",
        "Pase rápido.",
        "Area segura",
        "Robo fácil",
        "Intercepción Radar",
        "Control desapercibido",
        "Disparo escondido",
        "Retención válida.",
        "Control de Torre.",
        "Despeje de control.",
        "Destrozó de sueños.",
        "Análisis Fijo.",
        "Pase analítico."
    ],

    special: [
        {
            text: "Bloqueo facial torre de control.",
            star: false
        },

        {
            text: "Lectura espacial.",
            star: true
        },

        {
            text: "Rebelión (Barou)",
            star: true
        },

        {
            text: "Plan de Ubers",
            star: true
        }
    ]
},

{
    id: "aryu",
    name: "Aryu Jyubei",

    normal: [
        "Defensa glam.",
        "Súper despeje Glam.",
        "Cabeceó hermoso.",
        "Juego antimasoquista.",
        "Intercepción Glam.",
        "Bloqueo Glam.",
        "Pase Glam.",
        "Pase sin control Glam."
    ],

    special: [
        {
            text: "Defensa Judo",
            star: true
        },

        {
            text: "Bloqueo Salvador.",
            star: false
        },

        {
            text: "Super Cabezazo aéreo.",
            star: false
        },

        {
            text: "Combinación del Top (Rin)",
            star: false
        }
    ]
},

{
    id: "hiori",
    name: "Hiori Yo",

    normal: [
        "Regates creativos.",
        "Centro helado.",
        "Intercepción rompehielos.",
        "Entrada quebrante.",
        "Juego Frío.",
        "Pase digno.",
        "Disparo sin dudas",
        "Paredes con el número 1",
        "regate creativo",
        "Bloqueo Básico",
        "regate creativo v2",
        "Control Helado.",
        "Pase sin Exhibirse.",
        "Tiro Helado.",
        "Elevación de Tacón."
    ],

    special: [
        {
            text: "Disparo sin dudar.",
            star: false
        },

        {
            text: "Cuervo X Sadico (Karasu)",
            star: false
        },

        {
            text: "Robo Rompe Cadenas.",
            star: false
        },

        {
            text: "Pase al más digno.",
            star: false
        },

        {
            text: "Analisis del campo",
            star: false
        },

        {
            text: "Centro sin mirar.",
            star: false
        },

        {
            text: "Dupla de Oro del Bastard (Isagi)",
            star: false
        },

        {
            text: "Disparo Sadico",
            star: true
        }
    ]
},

{
    id: "aiku",
    name: "Oliver Aiku",

    normal: [
        "Bloqueo 80 Millones.",
        "Disparo ex-delantero.",
        "Bloqueo aéreo.",
        "Despeje serpenteante.",
        "Robo de apoyo.",
        "Aumento de posibilidades.",
        "Arrestada entrada policial.",
        "Intimicdción del capitan.",
        "Control Policial.",
        "Marcaje Duro.",
        "Pase Cabeza Dura.",
        "Lectura Perfecta."
    ],

    special: [
        {
            text: "Estadistica en contra",
            star: true
        },

        {
            text: "Cachorro y Policía (Isagi).",
            star: false
        },

        {
            text: "Duo de defensa de Ubers (Lorenzo)",
            star: false
        },

        {
            text: "Entrada Salvadora.",
            star: false
        },

        {
            text: "Tregua del equipo.",
            star: false
        },

        {
            text: "Rebelión (Barou)",
            star: true
        },

        {
            text: "Egoista (Sae).",
            star: false
        },

        {
            text: "Muro de Hierro (Niou, Teppei)",
            star: false
        },

        {
            text: "Centrales de Hierro (Niou).",
            star: false
        },

        {
            text: "Ubers (Barou, Lorenzo, Aryu)",
            star: false
        }
    ]
},

{
    id: "kunigami",
    name: "Rensuke Kunigami",

    normal: [
        "Pase Heróico.",
        "Disparo lejano.",
        "Heroico cabeceó.",
        "Robó al villano.",
        "Regate brusco.",
        "Aceleración heroica",
        "Heroico desvío.",
        "Control sobre la marcha",
        "Pared Héroe X Mounstro. (Bachira)",
        "Gracias por ese pase.",
        "Intercepción Heroica.",
        "Entrada Potente.",
        "Cabezazo en Picada defensivo.",
        "Tridente Perfecto (Reo, Chigiri)",
        "Pase de espalda.",
        "Finta Heroica.",
        "Pase Marcaje Cerrado.",
        "Regate Asesino.",
        "Cabezazo doble torre.",
        "Dupla del Bastard (Ness, Kaiser).",
        "Duo en supervivencia (Reo)"
    ],

    special: [
        {
            text: "🃏¿Wild... Card?🃏",
            star: false
        },

        {
            text: "Pase antiheroe",
            star: false
        },

        {
            text: "Marcaje al villano",
            star: true
        },

        {
            text: "Combinacion del Bastard (Hiori y Isagi)",
            star: false
        },

        {
            text: "Despeje Heroico.",
            star: false
        },

        {
            text: "Disparo Sin Rotación.",
            star: false
        },

        {
            text: "Disparo de Zurda Poderosa.",
            star: false
        }
    ]
},

{
    id: "reo",
    name: "Reo Mikage",

    normal: [
        "Copia 1.",
        "Copia 2.",
        "Copia 3.",
        "Regate Planetario.",
        "Disparo dragón.",
        "Regate numérico.",
        "Despeje Policial.",
        "Disparo ángulo ajustado.",
        "Despeje gran ocasión.",
        "Defensa camaleón",
        "Regate ángulo recto",
        "Disparo del 99%",
        "Cabeceó heróico",
        "Disparo giroscopio",
        "Marcaje doberman",
        "Entrada camaleón",
        "Entrada deslizante",
        "Robo camaleón",
        "Retención camaleón",
        "Tridente Perfecto (Chigiri, Kunigami)",
        "Duo en supervivencia (Kunigami)",
        "Disparo deslizante.",
        "Tiro súper curvo.",
        "Control camaleón.",
        "Frenado rápido.",
        "Amague con pase."
    ],

    special: [
        {
            text: "Duo de ensueño (Nagi)",
            star: false
        },

        {
            text: "Doble ataque Bachira (Bachira)",
            star: false
        },

        {
            text: "Dupla del Hakuho (Nagi).",
            star: false
        },

        {
            text: "Tiro del camaleón",
            star: true
        },

        {
            text: "Combinación del futuro (Prince).",
            star: false
        },

        {
            text: "Copia perfecta",
            star: true
        }
    ]
},

{
    id: "otoya",
    name: "Otoya Eita",

    normal: [
        "Intercepción Ninja.",
        "Robó Ninja.",
        "Disparo calmado.",
        "Regate Ninja",
        "Pase sin control.",
        "Regate Ninja.",
        "Ninja Step.",
        "Antiguo juego de Japón (Karasu y Chigiri)",
        "Control Trasero.",
        "Control Ninja.",
        "Amague Victorioso.",
        "Ataque Ninja.",
        "Ataque Zigzag.",
        "Robo ciego",
        "Tiro Ninja.",
        "Disparo Terrestre."
    ],

    special: [
        {
            text: "Volea Ninja Paw Paw.",
            star: false
        },

        {
            text: "Pared del 3er y 4to (Karasu).",
            star: false
        },

        {
            text: "Nuevo juego de Japón (Karasu, Hiori)",
            star: false
        },

        {
            text: "Duo del Barcha de oro (Bachira).",
            star: false
        },

        {
            text: "Heraldo de la victoria",
            star: true
        },

        {
            text: "Tridente de robos (Himizu, Otoya, Karasu)",
            star: true
        }
    ]
},

{
    id: "nagi",
    name: "Nagi Seishiro",

    normal: [
        "Chilena con Amague.",
        "Regreso a 0.",
        "Intercepción de Tacón.",
        "Regate con espalda.",
        "Toque de vida.",
        "Chilena motivada.",
        "Control de tacón sorpresivo.",
        "Disparo de volea.",
        "Disparo Post control.",
        "Control con Hombro",
        "Nuevo Control de balón.",
        "Disparo motivado.",
        "Nuevo Juego creativo.",
        "Disparo de Volea tumba reyes.",
        "Elevación de Tacón.",
        "Intercepción Exterior.",
        "Control de cebo.",
        "Ataque BreakDance.",
        "Giro Trampa.",
        "Pase sin control.",
        "Aún no me quiero ir.",
        "Disparo ángulo ajustado.",
        "Duo del equipo V (Zantetsu)",
        "Bloqueo Salvador.",
        "Pared Jet de Muerte (Zantetsu)",
        "Bloqueo Doble cabeza (Barou)",
        "Punto Centrado.",
        "Formula ganadora.",
        "Disparo Sencillo."
    ],

    special: [
        {
            text: "Disparo de muerte.",
            star: false
        },

        {
            text: "Doble toque de Pie a hombro.",
            star: false
        },

        {
            text: "Artilleria del Manshine (Agi)",
            star: false
        },

        {
            text: "Duo de sobrevivientes (Isagi)",
            star: false
        },

        {
            text: "Top 6 y Top 5 (Yukimiya)",
            star: false
        },

        {
            text: "Lucha contra tus demonios.",
            star: false
        },

        {
            text: "Disparo de Parkour (Zantetsu)",
            star: false
        },

        {
            text: "El mundo me está esperando.",
            star: false
        },

        {
            text: "¡Vamos Zantetsu! (Zantetsu)",
            star: false
        },

        {
            text: "Tridente del equipo V (Reo, Zantetsu)",
            star: false
        },

        {
            text: "Rey X Muerte (Barou)",
            star: true
        },

        {
            text: "Disparo de Volea con finta",
            star: false
        },

        {
            text: "Control de tacón y disparó.",
            star: false
        },

        {
            text: "Destronando al Rey (Isagi, Barou)",
            star: false
        },

        {
            text: "¡Finalmente llegó mi gran ocasión!",
            star: false
        },

        {
            text: "¿Maestro? (Prince)",
            star: false
        },

        {
            text: "Volea de 5 Fases",
            star: true
        },

        {
            text: "Duo de Ensueño (Reo)",
            star: false
        },

        {
            text: "Dupla de Hakuho (Reo)",
            star: false
        },

        {
            text: "★¡Ey... Reo, quiero jugar un poco más★",
            star: true
        }
    ]
},

{
    id: "chigiri",
    name: "Chigiri Hyoma",

    normal: [
        "Aceleración Pantera.",
        "Bloqueo Pantera roja.",
        "Entrada veloz.",
        "Centro a máxima velocidad.",
        "Autopase.",
        "Regate Zigzag.",
        "Paredes Doble Jet (Zantetsu.)",
        "Entrada deslizante",
        "Pase rompe pierna.",
        "Entrada de alto riesgo.",
        "Finta alta velocidad",
        "Antiguo Juego de Japón (Karasu, Otoya)",
        "Tridente Perfecto (Kunigami, Reo)",
        "Finta Sónica.",
        "Robo a algo riesgo.",
        "Disparo curvado.",
        "Bloqueo en carrera.",
        "Regate Media luna.",
        "Ataque en carrera",
        "Intercepción de 44",
        "Paso acelerado.",
        "Frenado rápido"
    ],

    special: [
        {
            text: "Disparo 44° a la izquierda.",
            star: false
        },

        {
            text: "Aceleración rompe cadenas.",
            star: false
        },

        {
            text: "Disparo de finta doble Jet (Zantetsu)",
            star: false
        },

        {
            text: "Duo del equipo Z (Isagi)",
            star: false
        },

        {
            text: "Ofensiva Critica (Kunigami)",
            star: false
        },

        {
            text: "Entrada de muerte.",
            star: false
        },

        {
            text: "Acelera, Acelera y ¡Acelera!",
            star: true
        },

        {
            text: "El más rápido corredor de blue lock.",
            star: false
        },

        {
            text: "Isagi X Barou X Nagi X Chigiri (Isagi, Barou, Nagi)",
            star: true
        }
    ]
},

{
    id: "barou",
    name: "Barou Shoei",

    normal: [
        "Regate Super tosco.",
        "Intercepción Soberana.",
        "Disparo lejana distancia.",
        "Cabeceó del rey.",
        "Robo Hambriento.",
        "Disparo de acecho.",
        "Entrada del Rey.",
        "Elevación soberana.",
        "Finta soberana.",
        "Disparo ángulo elevado.",
        "Regate de toque tosco",
        "Cortado del rey.",
        "Carrera Soberana.",
        "Control de reinado.",
        "Disparo Devorador.",
        "Regate Súper Potente.",
        "Bloqueo Real.",
        "Control de doble toque.",
        "Recorte Ofensivo.",
        "Intimidación Real.",
        "Disparo del león",
        "Destruye Juego (Isagi).",
        "Disparo de Punto ciego.",
        "Te estaba esperando..."
    ],

    special: [
        {
            text: "Ataque Tinieblas.",
            star: true
        },

        {
            text: "Ataque Rey x Muerte (Nagi)",
            star: false
        },

        {
            text: "Superación del progidig (Nagi)",
            star: false
        },

        {
            text: "Dragon devorado (Karasu, Shidou)",
            star: false
        },

        {
            text: "combinación León X Zombie (Lorenzo)",
            star: false
        },

        {
            text: "Disparo de primera clase.",
            star: false
        },

        {
            text: "Pared rey X principe (Snuffy)",
            star: false
        },

        {
            text: "¡Muerte del más honrado!",
            star: true
        },

        {
            text: "Rebelión (Cualquiera de Ubers)",
            star: true
        },

        {
            text: "Pared Hiena X León (Sendou)",
            star: false
        },

        {
            text: "Combinación artillería de Ubers (Sendou)",
            star: false
        },

        {
            text: "Rey X Muerte",
            star: true
        }
    ]
},

{
    id: "bachira",
    name: "Bachira Meguru",

    normal: [
        "Disparo de Volea abeja.",
        "Arcoiris abeja.",
        "¡Lalala!",
        "Intercepción abeja.",
        "Disparo de Rabona.",
        "Regates creativos",
        "Pase mounstroso",
        "Pared mounstro x Sadico (Hiori)",
        "Pared héroe x mounstro (Kunigami)",
        "Pase a máxima potencia",
        "Abeja veloz",
        "Auto Pase Bachira.",
        "Ruleta despertada",
        "Bicicletas de cambio de ritmo.",
        "Doble Duplo extendido.",
        "Ofensiva solitaria.",
        "Mareo con el balón",
        "Disparo de trance",
        "Elevación de Tacón",
        "Finta Sónica.",
        "Ruleta encadenada.",
        "Ofensiva de Cebo (Rin)",
        "Control de abeja.",
        "Cruzado sin ver.",
        "Movimiento fluido.",
        "Disparo abeja desesperada.",
        "Pase preciso.",
        "Pase Inclinado.",
        "Centro de cebo.",
        "¡Vamos a bailar!"
    ],

    special: [
        {
            text: "Ginga X Mounstro",
            star: false
        },

        {
            text: "¡Bailemos Mounstro!",
            star: true
        },

        {
            text: "Combinación de Genios Geniales (Nagi)",
            star: false
        },

        {
            text: "Duo del Barcha de Oro (Otoya)",
            star: false
        },

        {
            text: "Doble ataque Bachira (Reo)",
            star: false
        },

        {
            text: "Abeja implacable.",
            star: false
        },

        {
            text: "Disparo Renacido.",
            star: false
        }
    ]
},

{
    id: "isagi",
    name: "Isagi Yoichi",

    normal: [
        "Direct Shot V2.",
        "Amague rompecabezas.",
        "Back Heel Shot.",
        "Cebo previsto.",
        "Planeta confiable (Kurona).",
        "Intercepción de piezas.",
        "Pase rompecabezas.",
        "Lefty Shot.",
        "Bloqueo predecible.",
        "Dupla del equipo Z (Bachira).",
        "Intercepción rompecabezas V2.",
        "Bicicletas al nacional.",
        "Robo de espalda.",
        "Nuevo rey (Barou).",
        "Destruye Juego (Barou).",
        "Pared Ordinaria (Nanase).",
        "Entrada duo del Bastard (Kaiser).",
        "El fútbol es divertido.",
        "Mierda, Soy sorprendente.",
        "Entrada Adaptativa.",
        "La mejor pieza de gol.",
        "Robo de espalda.",
        "Defensa Adaptativa Sexy (Raichi).",
        "¡Este gol es mío! (Rin, Shidou).",
        "Juego de Lógica (Noa).",
        "Destrozando Sueños.",
        "Bloqueo de suerte."
    ],

    special: [
        {
            text: "Disparo de Volea adaptativa.",
            star: false
        },
        {
            text: "Double Gun.",
            star: true
        },
        {
            text: "Impacto Kaiser Directo (Kaiser).",
            star: false
        },
        {
            text: "Pase rompe imperios.",
            star: false
        },
        {
            text: "Pieza final ¡Suerte!.",
            star: false
        },
        {
            text: "¡¡¡Mátame entonces!!! (Yukimiya).",
            star: true
        },
        {
            text: "Impacto Kaiser Directo.",
            star: false
        },
        {
            text: "Reto al número 1.",
            star: false
        },
        {
            text: "Isagi X Barou X Nagi X Chigiri (Barou, Nagi, Chigiri).",
            star: false
        },
        {
            text: "Duo del equipo Z (Chigiri).",
            star: false
        },
        {
            text: "Duo Sobreviviente (Nagi).",
            star: false
        },
        {
            text: "Destronando al Rey (Barou, Nagi).",
            star: false
        },
        {
            text: "Cachorro y Policía (Aiku).",
            star: false
        },
        {
            text: "Te odio (Ness, Kaiser).",
            star: false
        },
        {
            text: "Dupla de oro del Bastard (Hiori).",
            star: false
        }
    ]
},

{
    id: "shidou",
    name: "Ryusei Shidou",

    normal: [
        "Juegos previos.",
        "Aceleración Dragón.",
        "Picada explosiva.",
        "Tiro con efecto invertido.",
        "Disparo Explosivo V2.",
        "Robó instintivo.",
        "Selección Natural.",
        "Tacón Shot.",
        "Monje y Dragón (Igaguri).",
        "Regate explosivo.",
        "Regate excitante.",
        "Control dragón.",
        "Por fin es mi turno.",
        "Pase en caída.",
        "Disparo Lineal.",
        "Disparo con efecto a alta velocidad.",
        "Destrozó celular.",
        "Remate dragón volador.",
        "Corrida Espectacular."
    ],

    special: [
        {
            text: "¡Big Bang Drive!",
            star: true
        },
        {
            text: "¡Explosión de células!",
            star: false
        },
        {
            text: "Remate de cabeza dragón perverso (Charles).",
            star: false
        },
        {
            text: "Alianza de genios (Rin).",
            star: false
        },
        {
            text: "Dragon devorado (Karasu y Barou).",
            star: false
        }
    ]
},

{
    id: "rin",
    name: "Rin Itoshi",

    normal: [
        "Bloqueo Deslizante.",
        "Rompedor de juego.",
        "Tiro supercurvo.",
        "Regate destructivo.",
        "Rompe equilibrio.",
        "Regate impredecible.",
        "Disparo ajustado.",
        "Pared Número 1 y campesino (Nanase).",
        "Pase Backspin.",
        "Entrada asesina.",
        "Regate giratorio.",
        "Tiro Mellizo (Isagi).",
        "Tiro de corner preciso.",
        "Regate Rompedor.",
        "Lucha desenfrenada.",
        "Vengan a matar.",
        "Tiro contra 11.",
        "Impulso destructivo.",
        "Masacre.",
        "Mueran.",
        "Aniquilar.",
        "Embestida asesina.",
        "Nuevo Juguete.",
        "Entrada mortífera.",
        "Juego asesino.",
        "Maestro y alumno (Loki).",
        "Bastardo asesino."
    ],

    special: [
        {
            text: "Disparo suicida rompe límites.",
            star: false
        },
        {
            text: "Destrozo Humillante.",
            star: false
        },
        {
            text: "Instintos destructivos.",
            star: false
        },
        {
            text: "Maldito Lunatico.",
            star: false
        },
        {
            text: "Combinación del top (Aryu).",
            star: false
        },
        {
            text: "Flow.",
            star: true
        },
        {
            text: "Vision destruida.",
            star: true
        }
    ]
},

{
    id: "tokimitsu",
    name: "Aoshi Tokimitsu",

    normal: [
        "Robó firme.",
        "Fintas desesperadas.",
        "Remate herbívoro.",
        "Pase herbívoro.",
        "Retención firme.",
        "Pared de estamina.",
        "Entrada a máxima potencia.",
        "Bloqueo a potencia maxima."
    ],

    special: [
        {
            text: "Asfixia de Proa quebradora.",
            star: true
        },
        {
            text: "Presencia Herbívora.",
            star: false
        },
        {
            text: "Reposición Herbívoro.",
            star: false
        }
    ]
},

{
    id: "yukimiya",
    name: "Kenyu Yukimiya",

    normal: [
        "Regate Callejero V1.",
        "Disparo Callejero giroscopio.",
        "Robó rápido.",
        "Bloqueo por el Lodo.",
        "Cebo depredador.",
        "Bloqueo en el Lodo.",
        "Regate callejero V2.",
        "Regate callejero V3.",
        "Disparo súper rotatorio.",
        "Avance giroscopio.",
        "Regate estocada.",
        "Pase estocada.",
        "Perforación interna.",
        "Duelo Pacífico."
    ],

    special: [
        {
            text: "Estocada Espada.",
            star: false
        },
        {
            text: "El apóstol de la victoria.",
            star: false
        },
        {
            text: "Carrera contra reloj.",
            star: true
        },
        {
            text: "Combinacion del Bastard (Isagi).",
            star: false
        },
        {
            text: "¡¡¡Mátame entonces!!! (Isagi).",
            star: true
        },
        {
            text: "Top 6 y Top 5 (Nagi).",
            star: false
        }
    ]
},

{
    id: "naruhaya",
    name: "Asahi Naruhaya",

    normal: [
        "Robó de espalda.",
        "Intercepción Inesperada.",
        "Bloqueo Última medida.",
        "Pase superviviente.",
        "Pared Lacayo-Rey (Barou)."
    ],

    special: [
        {
            text: "Disparo Última esperanzas.",
            star: true
        },
        {
            text: "Presencia Escalofriante.",
            star: false
        }
    ]
},

{
    id: "hugo",
    name: "Hugo Vivian",

    normal: [
        "Robó Manecilla.",
        "Entrada predestinada.",
        "Pase cebo.",
        "Marcaje del destino.",
        "Control mecánico.",
        "Juego Engranaje.",
        "Duelo de ego.",
        "Presión Mecánica.",
        "Persecución Engranaje.",
        "Esa jugada les hundirá.",
        "Cada Punto Estudiado.",
        "Arrastrar al suelo."
    ],

    special: [
        {
            text: "Ataque Bastión Francés (Cualquier francés.).",
            star: false
        },
        {
            text: "Disparo Manecilla.",
            star: false
        },
        {
            text: "Super pase cebo.",
            star: false
        },
        {
            text: "Ataque Nueva Francia (Loki, Charles).",
            star: false
        },
        {
            text: "No les damos ni un respiro (Charles).",
            star: false
        },
        {
            text: "Loco y arrogante (Loki).",
            star: false
        },
        {
            text: "Cambio de aptitud.",
            star: true
        },
        {
            text: "Bonjour.",
            star: true
        }
    ]
},

{
    id: "hiiragi",
    name: "Reiji Hiiragi",

    normal: [
        "Regate leído.",
        "Intercepción Tarot.",
        "Control de lectura.",
        "Regate imitado.",
        "Pase sin reacción.",
        "Ofensiva Critica (Nikko).",
        "Juega Lentes (Zantetsu)."
    ],

    special: [
        {
            text: "Disparo de lectura del tarot.",
            star: false
        },
        {
            text: "Tridente de robos (Nikko, Zantetsu).",
            star: false
        },
        {
            text: "Lectura de tarot.",
            star: true
        }
    ]
},

{
    id: "noa",
    name: "Noel Noa",

    normal: [
        "Enganche Cyborg.",
        "Regate robot V1.",
        "Regate Robot V2.",
        "Entrada Lógica.",
        "Bloqueo Lógico.",
        "Intercepción Cyborg.",
        "Control robótico.",
        "Marcaje Cyborg.",
        "Última oportunidad (Igaguri).",
        "Juego desatado.",
        "Finta robótica.",
        "Presencia abrumante.",
        "Juego de Lógica (Isagi).",
        "Pásame el balón (Ness).",
        "Marcaje lógico."
    ],

    special: [
        {
            text: "El mejor del mundo.",
            star: true
        },
        {
            text: "Pared Maestro-Alumno (Kaiser/Isagi).",
            star: false
        },
        {
            text: "Duo de bastardos (Kaiser).",
            star: false
        }
    ]
},

{
    id: "karasu",
    name: "Tabito Karasu",

    normal: [
        "Entrada mediocre.",
        "Regate del cuervo.",
        "Marcaje sonso.",
        "Retención del cuervo.",
        "Cabeceó del cuervo.",
        "Disparo Villano.",
        "Ataque del 3ro y el 4to (Otoya).",
        "Antiguo juego de Japón (Otoya, Chigiri).",
        "Fijado mediocre.",
        "Empuje mediocre.",
        "Juego de manos sigiloso.",
        "Picada bien adentro.",
        "Ataque al mediocre."
    ],

    special: [
        {
            text: "Intercepción mediocre.",
            star: true
        },
        {
            text: "Pared del 3ero y 4to (Otoya).",
            star: false
        },
        {
            text: "Bloqueo Predictivo.",
            star: false
        },
        {
            text: "Disparo de análisis Frío.",
            star: false
        },
        {
            text: "Nuevo juego de Japón (Otoya Hiori).",
            star: false
        },
        {
            text: "Dragon devorado (Shidou y Barou).",
            star: false
        },
        {
            text: "Disparo Sadico (Hiori).",
            star: false
        },
        {
            text: "Tridente de robos (Himizu, Otoya).",
            star: true
        }
    ]
},

{
    id: "fukaku",
    name: "Gen Fukaku",

    normal: [
        "Intento de bloqueo.",
        "Reacción prematura.",
        "Lectura de tiro."
    ],

    special: [
        {
            text: "Bloqueo definitivo.",
            star: true
        },
        {
            text: "Suplente de cobre.",
            star: false
        }
    ]
},

{
    id: "silva",
    name: "Dada Silva",

    normal: [
        "Cabezazo Tanque.",
        "Control pesado.",
        "Pase súper pesado.",
        "Intimidación Pesada.",
        "Freno Pesado.",
        "Intercepción Pesada.",
        "Ofensiva Pesada."
    ],

    special: [
        {
            text: "Entrada Mundial (Luna, Loki, Blake, Pablo).",
            star: false
        },
        {
            text: "¿¡¡¡Enserio está es la tierra del sumo!!!?",
            star: true
        },
        {
            text: "Cabezazo Peso Pesado.",
            star: false
        }
    ]
},

{
    id: "blake",
    name: "Adam Blake",

    normal: [
        "Control Ingles.",
        "Pase rápido.",
        "Instinto Mujeriego.",
        "Entrada del Mujeriego.",
        "Disparo de carga.",
        "Regate de alta resistencia.",
        "Duo Tierno Mujeriego (Cavazos)."
    ],

    special: [
        {
            text: "Disparo del goleador mujeriego.",
            star: true
        },
        {
            text: "Entrada Mundial (Luna, Loki, Silva, Pablo).",
            star: false
        },
        {
            text: "Fuck You.",
            star: false
        }
    ]
},

{
    id: "cavazos",
    name: "Pablo Cavazos",

    normal: [
        "Regate tierno.",
        "Entrada deslizante.",
        "Intercepción baja.",
        "Juego de clase mundial.",
        "Disparo Tierno.",
        "Pase de Tacón arcoiris.",
        "Pase Arcoiris.",
        "Análisis Arcoiris.",
        "Duo Tierno Mujeriego (Blake).",
        "Tacón arcoiris.",
        "Tierno Control."
    ],

    special: [
        {
            text: "Super tiro libre mundial.",
            star: true
        },
        {
            text: "Entrada Mundial (Luna, Loki, Silva, Cavazos).",
            star: false
        }
    ]
},

{
    id: "onazi",
    name: "Innocent Onazi",

    normal: [
        "Disparo Onazi.",
        "Control Nigeriano.",
        "Pase acrobático.",
        "Disparo Primitivo.",
        "¡Buenas (X) Somos (X)!",
        "Pase de tacón.",
        "Bloqueo facial Onazi.",
        "Intercepción Primitiva.",
        "Tiro Onazi v2.",
        "Regate Nigeriano.",
        "Ataque Zigzag.",
        "Volea Nigeriana.",
        "Regate Onazi.",
        "Marcaje nigeriano.",
        "Luz de esperanza."
    ],

    special: [
        {
            text: "Disparo del cazador primitivo.",
            star: true
        },
        {
            text: "Futbol familiar (Kuso, Oboabona, Bello).",
            star: false
        },
        {
            text: "Pared Hermano mayor- Hermano menor.",
            star: false
        },
        {
            text: "Mellizo Primitivo (Ochado).",
            star: false
        },
        {
            text: "Vulture Shot.",
            star: false
        }
    ]
},

{
    id: "agi",
    name: "Agi",

    normal: [
        "Control medicinal.",
        "Recepción médica.",
        "Enfermedad incurable.",
        "Diagnóstico Médico.",
        "Tratamiento.",
        "Lectura médica.",
        "Juego Inglés.",
        "Lectura crítica.",
        "Disparo medicinal."
    ],

    special: [
        {
            text: "Super pase acrobático.",
            star: false
        },
        {
            text: "Artilleria del Manshine (Nagi).",
            star: false
        },
        {
            text: "Rebelion Medica.",
            star: true
        }
    ]
},

{
    id: "kuso",
    name: "Godwin Kuso",

    normal: [
        "Regate Técnico.",
        "Disparo del más fuerte.",
        "Pase preciso.",
        "¡Buenas (X) Somos (X)!",
        "Movimientos Tecnicos.",
        "Cortando conexión.",
        "Enemigo Molesto (Oboabona)."
    ],

    special: [
        {
            text: "Pase rompelímites.",
            star: true
        },
        {
            text: "Ataque Técnico Nigeriano.",
            star: false
        },
        {
            text: "Futbol Familiar (Onazi, Oboabona, Bello).",
            star: false
        }
    ]
},

{
    id: "iglesias",
    name: "Bunny Iglesias",

    normal: [
        "Recepción Culé.",
        "Pase Cataluña.",
        "Bloqueo Deslizante.",
        "Intercepción conejito."
    ],

    special: [
        {
            text: "Volea del conejo.",
            star: true
        }
    ]
},

{
    id: "oboabona",
    name: "Oboabona",

    normal: [
        "Enemigo Molesto (Kuso).",
        "Entrada Nigeriana.",
        "Marcaje Nigeriano.",
        "Cabezazo Torre de Nigeria.",
        "Frenético Duelo nigeriano.",
        "Espeluznante bloqueo nigeriano."
    ],

    special: [
        {
            text: "¡¡Conmigo aquí abajo tendrán un muro viviente!!",
            star: true
        },
        {
            text: "Futbol familiar (Onazi, Bello, Kuso).",
            star: false
        }
    ]
},

{
    id: "rivaul",
    name: "Rivaul",

    normal: [
        "Defensa Submarino a alta velocidad.",
        "Giro de Rivaul.",
        "Regate Asesino.",
        "Pase PintPoint.",
        "Pase Halcón dorado.",
        "Nuevo Duo de oro (Tsubasa).",
        "Intercepción halcón aéreo.",
        "Chilena sin control.",
        "Tiro Halcón Dorado.",
        "Intercepción Chilena del halcón.",
        "Cabezazo Aéreo Arrollador.",
        "Codazo asesino."
    ],

    special: [
        {
            text: "N.R.S (Natureza, Santana).",
            star: false
        },
        {
            text: "Tiro Halcón Dorado",
            star: true
        },
        {
            text: "SkyHawk Shot.",
            star: false
        },
        {
            text: "Tiro de Zurda Victoriosa.",
            star: false
        },
        {
            text: "Contraremate aéreo a alta velocidad (Schneider).",
            star: false
        },
        {
            text: "Pase de tacón Técnico.",
            star: false
        },
        {
            text: "Tiro del Halcón Cruzado (Tsubasa).",
            star: false
        },
        {
            text: "Defensa Submarino cazadora.",
            star: false
        },
        {
            text: "Pase Abdominal.",
            star: false
        },
        {
            text: "Full Metal Phantom de Volea aérea (Santana, Natureza)",
            star: true
        }
    ]
},

{
    id: "okuhito",
    name: "Okuhito Lemon",

    normal: [
        "Blocaje Z.",
        "Determinado portero del Z.",
        "Lectura del equipo Z."
    ],

    special: [
        {
            text: "Salvada decisiva",
            star: true
        },
        {
            text: "Bloqueo arriesgado.",
            star: false
        }
    ]
},

{
    id: "bello",
    name: "Bello",

    normal: [
        "Pelota super alta.",
        "Regate nigeriano.",
        "Alocado juego nigeriano.",
        "Carrera al Acecho.",
        "Pase nigeriano.",
        "Control nigeriano."
    ],

    special: [
        {
            text: "Futbol Familiar (Onazi, Kuso, Oboabona).",
            star: false
        },
        {
            text: "Regate Nuevo Estilo",
            star: true
        }
    ]
},

{
    id: "aiki_himizu",
    name: "Aiki Himizu",

    normal: [
        "Persecución mentirosa.",
        "Finta mentirosa.",
        "No caigo ante tus engaños.",
        "Veo tu movimiento a metros de distancia.",
        "Finta de serpiente.",
        "Ataque de serpiente.",
        "Defensa de serpiente.",
        "Juego de mentiras.",
        "Mareo mentiroso."
    ],

    special: [
        {
            text: "¡Soy el dios de las mentiras!",
            star: true
        },
        {
            text: "Tridente de Robos (Karasu, Otoya).",
            star: true
        },
        {
            text: "Ataque Mentiroso.",
            star: false
        }
    ]
},

{
    id: "zantetsu",
    name: "Zantetsu Tsurugi",

    normal: [
        "Juega Lentes (Reiji).",
        "Paredes doble Jet (Chigiri).",
        "Duo del equipo V (Zantetsu).",
        "Pared Jet de Muerte (Zantetsu).",
        "Aceleración Jet.",
        "Bloqueo Jet.",
        "Disparo de Jet.",
        "Disparo Curvo Jet.",
        "Regate Jet.",
        "Pase Jet.",
        "Ataque Jet.",
        "Movimientos Sónicos.",
        "Jugada Super Sónica.",
        "Movimiento Flácido.",
        "No me comparen con ese juego pauperrimo."
    ],

    special: [
        {
            text: "Tridente de robos (Nikko, Zantetsu).",
            star: false
        },
        {
            text: "Disparo de finta doble Jet. (Chigiri).",
            star: false
        },
        {
            text: "Disparo de Parkour (Nagi).",
            star: false
        },
        {
            text: "Ofensiva a súper Velocidad.",
            star: false
        },
        {
            text: "Super Jet al ataque",
            star: true
        }
    ]
},


    
];


/* =========================================================
   02. DOM ELEMENTS
   ========================================================= */

const charactersGrid =
    document.querySelector("#characters-grid");

const searchInput =
    document.querySelector("#character-search");

const searchResults =
    document.querySelector("#search-results");

const clearSearch =
    document.querySelector("#clear-search");

const noResults =
    document.querySelector("#no-results");

const resetButton =
    document.querySelector("#reset-search");

const scrollTopButton =
    document.querySelector("#scroll-top");

const characterCount =
    document.querySelector("#character-count");

const skillCount =
    document.querySelector("#technique-count");

const visibleCount =
    document.querySelector("#visible-count");

const focusSearch =
    document.querySelector("#focus-search");

const showAllButton =
    document.querySelector("#show-all");


/* =========================================================
   03. STATE
   ========================================================= */

let currentQuery = "";
let searchTimeout = null;


/* =========================================================
   04. NORMALIZE TEXT
   ========================================================= */

function normalizeText(text) {

    return String(text || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


/* =========================================================
   05. GET SKILL TEXT
   ========================================================= */

function getSkillText(skill) {

    if (
        typeof skill === "object" &&
        skill !== null
    ) {
        return skill.text || "";
    }

    return String(skill || "");

}


/* =========================================================
   06. GET SKILL STAR
   ========================================================= */

function isStarSkill(skill) {

    return (
        typeof skill === "object" &&
        skill !== null &&
        skill.star === true
    );

}


/* =========================================================
   07. GET ALL SKILLS
   ========================================================= */

function getAllSkills(character) {

    return [

        ...(character.normal || []),

        ...(character.special || [])

    ];

}


/* =========================================================
   08. COUNT SKILLS
   ========================================================= */

function getSkillCount(character) {

    return getAllSkills(character).length;

}


function getTotalSkills() {

    return characters.reduce(
        (total, character) => {

            return total +
                getSkillCount(character);

        },
        0
    );

}


/* =========================================================
   09. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)

        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   10. CREATE SKILL
   ========================================================= */

function createSkillHTML(
    skill,
    type = "normal"
) {

    const text =
        escapeHTML(
            getSkillText(skill)
        );

    const star =
        isStarSkill(skill);


    let classes =
        "skill";


    if (type === "special") {

        classes += " special";

    }


    if (star) {

        classes += " star";

    }


    return `

        <div class="${classes}">

            ${
                star
                    ? `<span class="skill-star">★</span>`
                    : ""
            }

            <span class="skill-text">
                ${text}
            </span>

        </div>

    `;

}


/* =========================================================
   11. CREATE SKILLS SECTION
   ========================================================= */

function createSkillsSection(
    title,
    skills,
    type
) {

    if (
        !skills ||
        !skills.length
    ) {

        return "";

    }


    const items =
        skills
            .map(
                skill =>
                    createSkillHTML(
                        skill,
                        type
                    )
            )
            .join("");


    return `

        <div class="skills-section">

            <div class="skills-title">

                ${escapeHTML(title)}

            </div>

            <div class="skills-list">

                ${items}

            </div>

        </div>

    `;

}


/* =========================================================
   12. CREATE CHARACTER CARD
   ========================================================= */

function createCharacterCard(
    character,
    index
) {

    const card =
        document.createElement("article");


    card.className =
        "character-card";


    card.dataset.characterId =
        character.id;


    card.dataset.characterName =
        normalizeText(
            character.name
        );


    card.style.animationDelay =
        `${Math.min(
            index * 0.045,
            0.8
        )}s`;


    const totalSkills =
        getSkillCount(character);


    card.innerHTML = `

        <div class="character-card-inner">


            <div class="character-card-top">

                <span class="character-number">

                    #${String(
                        index + 1
                    ).padStart(3, "0")}

                </span>


                <span class="character-status">

                    DATABASE ENTRY

                </span>

            </div>


            <h2 class="character-name">

                ${escapeHTML(
                    character.name
                )}

            </h2>


            <div class="technique-count">

                <strong>
                    ${totalSkills}
                </strong>

                TECHNIQUES REGISTERED

            </div>


            ${createSkillsSection(
                "NORMAL SKILLS",
                character.normal,
                "normal"
            )}


            ${createSkillsSection(
    "SPECIAL / LOCKED",
    character.special,
    "special"
)}


${
    character.id === "tachibana"
        ? `
            <div class="tachibana-warning">

                <div class="tachibana-warning-icon">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                </div>

                <div class="tachibana-warning-content">

                    <span class="tachibana-warning-label">
                        TACHIBANA TWIN RULE
                    </span>

                    <p>
                        Técnicas de <strong>Mono</strong> o de
                        <strong>Ardilla</strong> de los Tachibana
                        solo pueden ser de uno de los dos.
                        Si elige ir por las técnicas del
                        <strong>Mono</strong>, el otro gemelo se
                        queda con las de la <strong>Ardilla</strong>
                        y viceversa.
                    </p>

                </div>

            </div>
        `
        : ""
}


                <div class="character-card-footer">
                <span class="card-footer-label">

                    CHARACTER DATABASE

                </span>


                <span class="card-footer-icon">

                    ↗

                </span>

            </div>


        </div>

    `;


    return card;

}


/* =========================================================
   13. RENDER CHARACTERS
   ========================================================= */

function renderCharacters(
    list = characters
) {

    if (!charactersGrid) return;


    charactersGrid.innerHTML = "";


    if (!list.length) {

        showNoResults();

        updateVisibleCount(0);

        return;

    }


    hideNoResults();


    const fragment =
        document.createDocumentFragment();


    list.forEach(
        (character, index) => {

            fragment.appendChild(
                createCharacterCard(
                    character,
                    index
                )
            );

        }
    );


    charactersGrid.appendChild(
        fragment
    );


    updateVisibleCount(
        list.length
    );


    initializeElectricBorders();

    initializeRevealObserver();

}


/* =========================================================
   14. NO RESULTS
   ========================================================= */

function showNoResults() {

    if (!noResults) return;

    noResults.classList.remove(
        "hidden"
    );

}


function hideNoResults() {

    if (!noResults) return;

    noResults.classList.add(
        "hidden"
    );

}


/* =========================================================
   15. COUNTERS
   ========================================================= */

function updateCounters() {

    if (characterCount) {

        characterCount.textContent =
            characters.length;

    }


    if (skillCount) {

        skillCount.textContent =
            getTotalSkills();

    }


    updateVisibleCount(
        characters.length
    );

}


function updateVisibleCount(count) {

    if (!visibleCount) return;

    visibleCount.textContent =
        count;

}


/* =========================================================
   16. SEARCH
   ========================================================= */

function searchCharacters(query) {

    const normalized =
        normalizeText(query);


    currentQuery =
        normalized;


    if (!normalized) {

        renderCharacters(
            characters
        );

        closeSearchResults();

        return;

    }


    const matches =
        characters.filter(
            character => {

                const name =
                    normalizeText(
                        character.name
                    );


                const allSkills =
                    getAllSkills(
                        character
                    );


                const skillsText =
                    normalizeText(
                        allSkills
                            .map(
                                getSkillText
                            )
                            .join(" ")
                    );


                return (

                    name.includes(
                        normalized
                    )

                    ||

                    skillsText.includes(
                        normalized
                    )

                );

            }
        );


    renderCharacters(
        matches
    );


    showSearchResults(
        matches
    );

}


/* =========================================================
   17. SEARCH RESULTS
   ========================================================= */

function showSearchResults(
    matches
) {

    if (!searchResults) return;


    searchResults.innerHTML = "";


    if (!matches.length) {

        searchResults.innerHTML = `

            <div class="search-result">

                <span class="search-result-name">

                    NO CHARACTER FOUND

                </span>

            </div>

        `;


        searchResults.classList.add(
            "active"
        );


        return;

    }


    matches
        .slice(0, 8)
        .forEach(
            character => {

                const result =
                    document.createElement(
                        "button"
                    );


                result.type =
                    "button";


                result.className =
                    "search-result";


                const originalIndex =
                    characters.indexOf(
                        character
                    );


                result.innerHTML = `

                    <span
                        class="search-result-number"
                    >

                        #${String(
                            originalIndex + 1
                        ).padStart(3, "0")}

                    </span>


                    <span
                        class="search-result-name"
                    >

                        ${escapeHTML(
                            character.name
                        )}

                    </span>

                `;


                result.addEventListener(
                    "click",
                    () => {

                        goToCharacter(
                            character
                        );

                    }
                );


                searchResults.appendChild(
                    result
                );

            }
        );


    searchResults.classList.add(
        "active"
    );

}


/* =========================================================
   18. CLOSE SEARCH
   ========================================================= */

function closeSearchResults() {

    if (!searchResults) return;

    searchResults.classList.remove(
        "active"
    );

}


/* =========================================================
   19. GO TO CHARACTER
   ========================================================= */

function goToCharacter(
    character
) {

    closeSearchResults();


    if (searchInput) {

        searchInput.value =
            character.name;

    }


    renderCharacters([
        character
    ]);


    requestAnimationFrame(
        () => {

            const card =
                document.querySelector(
                    `[data-character-id="${CSS.escape(
                        character.id
                    )}"]`
                );


            if (!card) return;


            const header =
                document.querySelector(
                    ".site-header"
                );


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 80;


            const top =
                card.getBoundingClientRect()
                    .top

                +

                window.scrollY

                -

                headerHeight

                -

                30;


            window.scrollTo({

                top:
                    Math.max(
                        0,
                        top
                    ),

                behavior:
                    "smooth"

            });


            setTimeout(
                () => {

                    card.classList.add(
                        "search-highlight"
                    );


                    setTimeout(
                        () => {

                            card.classList.remove(
                                "search-highlight"
                            );

                        },
                        2500
                    );

                },
                500
            );

        }
    );

}


/* =========================================================
   20. CLEAR SEARCH
   ========================================================= */

function clearSearchInput() {

    if (!searchInput) return;


    searchInput.value =
        "";


    currentQuery =
        "";


    if (clearSearch) {

        clearSearch.classList.remove(
            "visible"
        );

    }


    renderCharacters(
        characters
    );


    closeSearchResults();


    searchInput.focus();

}


/* =========================================================
   21. SEARCH EVENTS
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        event => {

            const value =
                event.target.value;


            if (clearSearch) {

                clearSearch.classList.toggle(
                    "visible",
                    Boolean(
                        value.trim()
                    )
                );

            }


            clearTimeout(
                searchTimeout
            );


            searchTimeout =
                setTimeout(
                    () => {

                        searchCharacters(
                            value
                        );

                    },
                    40
                );

        }
    );


    searchInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                clearSearchInput();

                return;

            }


            if (
                event.key ===
                "Enter"
            ) {

                const normalized =
                    normalizeText(
                        searchInput.value
                    );


                if (!normalized)
                    return;


                const first =
                    characters.find(
                        character => {

                            const name =
                                normalizeText(
                                    character.name
                                );


                            return name.includes(
                                normalized
                            );

                        }
                    );


                if (first) {

                    goToCharacter(
                        first
                    );

                }

            }

        }
    );

}


/* =========================================================
   22. CLEAR BUTTON
   ========================================================= */

if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        clearSearchInput
    );

}


/* =========================================================
   23. RESET
   ========================================================= */

if (resetButton) {

    resetButton.addEventListener(
        "click",
        () => {

            clearSearchInput();


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   24. SHOW ALL
   ========================================================= */

if (showAllButton) {

    showAllButton.addEventListener(
        "click",
        () => {

            clearSearchInput();


            showAllButton.classList.add(
                "active"
            );

        }
    );

}


/* =========================================================
   25. QUICK SEARCH
   ========================================================= */

if (focusSearch) {

    focusSearch.addEventListener(
        "click",
        () => {

            if (!searchInput)
                return;


            searchInput.focus();


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   26. CLICK OUTSIDE SEARCH
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".search-wrapper"
            )
        ) {

            closeSearchResults();

        }

    }
);


/* =========================================================
   27. KEYBOARD SHORTCUT
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "/" &&

            document.activeElement !==
            searchInput
        ) {

            event.preventDefault();

            searchInput?.focus();

        }

    }
);


/* =========================================================
   28. ELECTRIC BORDER
   ========================================================= */

function initializeElectricBorders() {

    const cards =
        document.querySelectorAll(
            ".character-card"
        );


    cards.forEach(
        card => {

            if (
                card.dataset.electricReady
            ) {

                return;

            }


            card.dataset.electricReady =
                "true";


            card.addEventListener(
                "pointermove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    if (
                        !rect.width ||
                        !rect.height
                    ) {

                        return;

                    }


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    card.style.setProperty(
                        "--electric-x",
                        `${(
                            x /
                            rect.width
                        ) * 100}%`
                    );


                    card.style.setProperty(
                        "--electric-y",
                        `${(
                            y /
                            rect.height
                        ) * 100}%`
                    );

                }
            );


            card.addEventListener(
                "pointerleave",
                () => {

                    card.style.setProperty(
                        "--electric-x",
                        "50%"
                    );


                    card.style.setProperty(
                        "--electric-y",
                        "50%"
                    );

                }
            );

        }
    );

}


/* =========================================================
   29. SCROLL TOP
   ========================================================= */

function updateScrollTop() {

    if (!scrollTopButton)
        return;


    scrollTopButton.classList.toggle(
        "visible",
        window.scrollY >
        window.innerHeight * 0.65
    );

}


window.addEventListener(
    "scroll",
    updateScrollTop,
    {
        passive: true
    }
);


if (scrollTopButton) {

    scrollTopButton.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   30. ACTIVE NAVIGATION
   ========================================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );

            }
        );

    }
);


/* =========================================================
   31. REVEAL OBSERVER
   ========================================================= */

function initializeRevealObserver() {

    const cards =
        document.querySelectorAll(
            ".character-card"
        );


    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        cards.forEach(
            card => {

                card.classList.add(
                    "is-visible"
                );

            }
        );

        return;

    }


    cards.forEach(
        card => {

            if (
                card.dataset.observerReady
            ) {

                return;

            }


            card.dataset.observerReady =
                "true";


            const observer =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(
                            entry => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "is-visible"
                                    );


                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {

                        threshold: 0.05,

                        rootMargin:
                            "0px 0px -30px 0px"

                    }
                );


            observer.observe(
                card
            );

        }
    );

}


/* =========================================================
   32. MOLTEN METAL
   ========================================================= */

const MoltenMetal = {

    container: null,
    renderer: null,
    program: null,
    mesh: null,
    canvas: null,

    animationFrame: 0,

    observer: null,

    resizeObserver: null,

    pageVisible:
        !document.hidden,

    visible: true,

    mouse: {
        targetX: 0.5,
        targetY: 0.5,
        currentX: 0.5,
        currentY: 0.5
    }

};


/* =========================================================
   33. MOLTEN METAL SHADERS
   ========================================================= */

const moltenVertex = `#version 300 es

in vec2 position;

void main() {

    gl_Position =
        vec4(
            position,
            0.0,
            1.0
        );

}
`;


const moltenFragment = `#version 300 es

precision highp float;


uniform vec2 iResolution;
uniform float iTime;

uniform float uSpeed;
uniform float uScale;
uniform float uDetail;
uniform float uGlow;
uniform float uCoreSize;
uniform float uSwirl;
uniform float uFold;
uniform float uBlackPoint;
uniform float uBrightness;

uniform float uColorMode;

uniform float uGrain;
uniform float uGrainIntensity;

uniform float uOpacity;

uniform vec2 uMouse;
uniform float uMouseStrength;

uniform bool uEnableMouse;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;


out vec4 fragColor;


float hash(vec2 p) {

    return fract(
        sin(
            dot(
                p,
                vec2(
                    12.9898,
                    78.233
                )
            )
        )
        *
        43758.5453
    );

}


void main() {

    float time =
        iTime *
        uSpeed;


    vec2 p =
        uScale *
        (
            (
                gl_FragCoord.xy
                -
                0.5 *
                iResolution.xy
            )
            /
            iResolution.y
        )
        -
        0.5;


    vec2 drift =
        vec2(
            0.0
        );


    if (uEnableMouse) {

        drift =
            (
                uMouse -
                0.5
            )
            *
            uMouseStrength
            *
            2.0;

    }


    p += drift;


    vec2 i =
        p;


    float c =
        0.0;


    float r =
        length(
            p
            +
            vec2(
                sin(time),
                sin(
                    time *
                    0.3
                    +
                    5.0
                )
            )
            *
            0.5
        );


    float d =
        length(p);


    float rot =
        d
        +
        time
        +
        p.x *
        uSwirl;


    float cosRot =
        cos(rot);


    mat2 warp =
        mat2(

            cos(
                rot -
                sin(
                    time /
                    5.0
                )
            ),

            sin(rot),

            -sin(
                cosRot -
                time
            ),

            cosRot

        )
        *
        uFold;


    float glowCore =
        uGlow *
        uCoreSize;


    for (
        float n = 0.0;
        n < 8.0;
        n++
    ) {

        if (
            n >=
            uDetail
        ) {

            break;

        }


        p *= warp;


        float t =
            r
            -
            time /
            (n + 3.0);


        i -=
            p
            +
            vec2(

                cos(
                    t
                    -
                    i.x
                    -
                    r
                )
                +
                sin(
                    t
                    +
                    i.y
                ),

                sin(
                    t
                    -
                    i.y
                )
                +
                cos(
                    t
                    +
                    i.x
                )
                +
                r

            );


        c +=
            glowCore /
            length(
                vec2(

                    sin(
                        i.x
                        +
                        t
                    ),

                    cos(
                        i.y
                        +
                        t
                    )

                )
            );

    }


    c /=
        6.0;


    float intensity =
        max(
            c -
            uBlackPoint,
            0.0
        )
        *
        uBrightness;


    float g =
        clamp(
            intensity,
            0.0,
            1.0
        );


    float mid =
        0.5;


    if (
        uColorMode >
        1.5
    ) {

        mid =
            0.65;

    }

    else if (
        uColorMode >
        0.5
    ) {

        mid =
            0.35;

    }


    vec3 col =
        mix(

            uColor1,
            uColor2,

            smoothstep(
                0.0,
                mid,
                g
            )

        );


    col =
        mix(

            col,
            uColor3,

            smoothstep(
                mid,
                1.0,
                g
            )

        );


    float a =
        g;


    if (
        uGrain >
        0.5
    ) {

        float gr =
            hash(
                gl_FragCoord.xy
                +
                iTime
            );


        a +=
            (
                gr -
                0.5
            )
            *
            uGrainIntensity;

    }


    a =
        clamp(
            a,
            0.0,
            1.0
        )
        *
        uOpacity;


    fragColor =
        vec4(
            col * a,
            a
        );

}
`;


/* =========================================================
   34. HEX TO RGB
   ========================================================= */

function hexToRgb(hex) {

    const result =
        /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
            .exec(hex);


    if (!result) {

        return [
            1,
            1,
            1
        ];

    }


    return [

        parseInt(
            result[1],
            16
        ) / 255,

        parseInt(
            result[2],
            16
        ) / 255,

        parseInt(
            result[3],
            16
        ) / 255

    ];

}


/* =========================================================
   35. INITIALIZE MOLTEN METAL
   ========================================================= */

function initializeMoltenMetal() {

    const container =
        document.querySelector(
            "#molten-background"
        );


    if (!container) {

        console.warn(
            "Molten Metal: container not found."
        );

        return;

    }


    if (
        typeof OGL ===
        "undefined"
    ) {

        console.error(
            "Molten Metal: OGL no está cargado."
        );

        return;

    }


    MoltenMetal.container =
        container;


    const {

        Renderer,
        Program,
        Mesh,
        Triangle

    } = OGL;


    const renderer =
        new Renderer({

            webgl: 2,

            alpha: true,

            premultipliedAlpha:
                true,

            antialias:
                false,

            dpr:
                Math.min(
                    window.devicePixelRatio || 1,
                    2
                )

        });


    const gl =
        renderer.gl;


    gl.clearColor(
        0,
        0,
        0,
        0
    );


    const canvas =
        gl.canvas;


    canvas.style.width =
        "100%";


    canvas.style.height =
        "100%";


    canvas.style.display =
        "block";


    canvas.style.pointerEvents =
        "auto";


    container.appendChild(
        canvas
    );


    MoltenMetal.renderer =
        renderer;


    MoltenMetal.canvas =
        canvas;


    const geometry =
        new Triangle(gl);


    const color1 =
        hexToRgb(
            "#0b33bd"
        );


    const color2 =
        hexToRgb(
            "#27add1"
        );


    const color3 =
        hexToRgb(
            "#ffffff"
        );


    const program =
        new Program(
            gl,
            {

                vertex:
                    moltenVertex,

                fragment:
                    moltenFragment,

                uniforms: {

                    iTime: {
                        value: 0
                    },

                    iResolution: {
                        value:
                            new Float32Array([
                                1,
                                1
                            ])
                    },

                    uSpeed: {
                        value: 0.35
                    },

                    uScale: {
                        value: 4
                    },

                    uDetail: {
                        value: 3
                    },

                    uGlow: {
                        value: 1.6
                    },

                    uCoreSize: {
                        value: 0.1
                    },

                    uSwirl: {
                        value: 1
                    },

                    uFold: {
                        value: -0.2
                    },

                    uBlackPoint: {
                        value: 0.05
                    },

                    uBrightness: {
                        value: 1.3
                    },

                    uColorMode: {
                        value: 0
                    },

                    uGrain: {
                        value: 1
                    },

                    uGrainIntensity: {
                        value: 0.05
                    },

                    uOpacity: {
                        value: 1
                    },

                    uMouse: {
                        value:
                            new Float32Array([
                                0.5,
                                0.5
                            ])
                    },

                    uMouseStrength: {
                        value: 0.3
                    },

                    uEnableMouse: {
                        value: true
                    },

                    uColor1: {
                        value:
                            new Float32Array(
                                color1
                            )
                    },

                    uColor2: {
                        value:
                            new Float32Array(
                                color2
                            )
                    },

                    uColor3: {
                        value:
                            new Float32Array(
                                color3
                            )
                    }

                }

            }
        );


    const mesh =
        new Mesh(
            gl,
            {
                geometry,
                program
            }
        );


    MoltenMetal.program =
        program;


    MoltenMetal.mesh =
        mesh;


    /* -----------------------------------------------------
       RESIZE
    ----------------------------------------------------- */

    function setSize() {

        const rect =
            container.getBoundingClientRect();


        const width =
            Math.max(
                1,
                Math.floor(
                    rect.width
                )
            );


        const height =
            Math.max(
                1,
                Math.floor(
                    rect.height
                )
            );


        renderer.setSize(
            width,
            height
        );


        const res =
            program.uniforms
                .iResolution
                .value;


        res[0] =
            gl.drawingBufferWidth;


        res[1] =
            gl.drawingBufferHeight;


        renderer.render({
            scene: mesh
        });

    }


    MoltenMetal.resizeObserver =
        new ResizeObserver(
            setSize
        );


    MoltenMetal.resizeObserver.observe(
        container
    );


    setSize();


    /* -----------------------------------------------------
       MOUSE
    ----------------------------------------------------- */

    const handleMouseMove =
        event => {

            const rect =
                canvas.getBoundingClientRect();


            if (
                !rect.width ||
                !rect.height
            ) {

                return;

            }


            MoltenMetal.mouse.targetX =
                (
                    event.clientX -
                    rect.left
                )
                /
                rect.width;


            MoltenMetal.mouse.targetY =
                1 -
                (
                    event.clientY -
                    rect.top
                )
                /
                rect.height;

        };


    const handleMouseLeave =
        () => {

            MoltenMetal.mouse.targetX =
                0.5;


            MoltenMetal.mouse.targetY =
                0.5;

        };


    canvas.addEventListener(
        "mousemove",
        handleMouseMove
    );


    canvas.addEventListener(
        "mouseleave",
        handleMouseLeave
    );


    /* -----------------------------------------------------
       ANIMATION
    ----------------------------------------------------- */

    const startTime =
        performance.now();


    function loop(time) {

        program.uniforms
            .iTime
            .value =
            (
                time -
                startTime
            )
            *
            0.001;


        MoltenMetal.mouse.currentX +=
            0.05 *
            (
                MoltenMetal.mouse.targetX -
                MoltenMetal.mouse.currentX
            );


        MoltenMetal.mouse.currentY +=
            0.05 *
            (
                MoltenMetal.mouse.targetY -
                MoltenMetal.mouse.currentY
            );


        program.uniforms
            .uMouse
            .value[0] =
            MoltenMetal.mouse.currentX;


        program.uniforms
            .uMouse
            .value[1] =
            MoltenMetal.mouse.currentY;


        renderer.render({
            scene: mesh
        });


        MoltenMetal.animationFrame =
            requestAnimationFrame(
                loop
            );

    }


    /* -----------------------------------------------------
       VISIBILITY
    ----------------------------------------------------- */

    MoltenMetal.observer =
        new IntersectionObserver(
            entries => {

                const entry =
                    entries[0];


                MoltenMetal.visible =
                    entry.isIntersecting;


                if (
                    MoltenMetal.visible &&
                    MoltenMetal.pageVisible &&
                    !MoltenMetal.animationFrame
                ) {

                    MoltenMetal.animationFrame =
                        requestAnimationFrame(
                            loop
                        );

                }


                if (
                    !MoltenMetal.visible
                ) {

                    cancelAnimationFrame(
                        MoltenMetal.animationFrame
                    );


                    MoltenMetal.animationFrame =
                        0;

                }

            },
            {
                threshold: 0
            }
        );


    MoltenMetal.observer.observe(
        container
    );


    document.addEventListener(
        "visibilitychange",
        () => {

            MoltenMetal.pageVisible =
                !document.hidden;


            if (
                MoltenMetal.pageVisible &&
                MoltenMetal.visible &&
                !MoltenMetal.animationFrame
            ) {

                MoltenMetal.animationFrame =
                    requestAnimationFrame(
                        loop
                    );

            }


            if (
                !MoltenMetal.pageVisible
            ) {

                cancelAnimationFrame(
                    MoltenMetal.animationFrame
                );


                MoltenMetal.animationFrame =
                    0;

            }

        }
    );


    /* -----------------------------------------------------
       START
    ----------------------------------------------------- */

    MoltenMetal.animationFrame =
        requestAnimationFrame(
            loop
        );


    console.log(
        "Molten Metal initialized."
    );

}


/* =========================================================
   36. INITIALIZE EVERYTHING
   ========================================================= */

function initialize() {

    initializeMoltenMetal();

    renderCharacters();

    updateCounters();

    updateScrollTop();

}


/* =========================================================
   37. DOM READY
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialize
    );

}

else {

    initialize();

}

/* =====================================================
   GENDER NOTICE
===================================================== */

const genderNotice = document.querySelector(".gender-notice");
const genderNoticeClose = document.querySelector(".gender-notice-close");

if (genderNotice && genderNoticeClose) {

    genderNoticeClose.addEventListener("click", () => {

        genderNotice.style.animation = "noticeSlideDown 0.35s ease-in reverse";

        setTimeout(() => {
            genderNotice.remove();
        }, 350);

    });

}

/* =========================================================
   END
   ========================================================= */
