const questions = [
{
id: 1,
scenario: "Recibes un correo de 'Seguridad TI' indicando un inicio de sesión desde Rusia. Incluye tu nombre real y un enlace para verificar tu cuenta en menos de 10 minutos.",
options: [
"Ingresar rápidamente al enlace para evitar el bloqueo",
"Revisar cuidadosamente el dominio y acceder manualmente al sitio oficial",
"Responder el correo preguntando si es real",
"Ignorar completamente cualquier alerta"
],
correct: 1, // B
explanation: "La urgencia es una técnica de phishing. Siempre entra desde el sitio oficial."
},

{
id: 2,
scenario: "Recibes un correo con una factura en archivo .zip de un proveedor conocido, indicando que debes pagar hoy o se suspenderá el servicio.",
options: [
"Abrir el archivo para revisar la deuda",
"Descargarlo y revisarlo después",
"Contactar al proveedor por un canal oficial antes de abrirlo",
"Pagar inmediatamente para evitar problemas"
],
correct: 2, // C
explanation: "Los archivos comprimidos pueden contener malware. Verifica primero."
},

{
id: 3,
scenario: "Un SMS indica que tu paquete no pudo ser entregado. Incluye un enlace acortado para pagar un cargo.",
options: [
"Abrir el enlace y pagar",
"Ignorar sin verificar nada",
"Buscar el envío en la página oficial",
"Responder con tus datos personales"
],
correct: 2, // C
explanation: "El smishing usa enlaces acortados. Verifica siempre en el sitio oficial."
},

{
id: 4,
scenario: "Tu jefe te escribe por WhatsApp desde un número nuevo pidiendo comprar tarjetas de regalo urgentemente.",
options: [
"Comprar las tarjetas inmediatamente",
"Pedir confirmación por canal oficial",
"Enviar solo una para probar",
"Ignorar todos los mensajes del jefe"
],
correct: 1, // B
explanation: "Es un fraude tipo BEC. Siempre valida por otro medio."
},

{
id: 5,
scenario: "Recibes un enlace de Google Drive que te pide iniciar sesión, pero la URL tiene ligeras variaciones.",
options: [
"Iniciar sesión normalmente",
"Verificar la URL antes de ingresar credenciales",
"Usar una contraseña temporal",
"Compartir el enlace con otros"
],
correct: 1, // B
explanation: "Puede ser una página clonada para robar credenciales."
},

{
id: 6,
scenario: "Un correo dice que ganaste un bono y debes llenar un formulario con datos personales y bancarios.",
options: [
"Completar el formulario",
"Enviar solo algunos datos",
"Verificar con recursos humanos",
"Ignorar y eliminar sin revisar"
],
correct: 2, // C
explanation: "Los premios falsos son una técnica común de ingeniería social."
},

{
id: 7,
scenario: "Recibes un aviso de que tu contraseña expiró y debes cambiarla desde un enlace o perderás acceso.",
options: [
"Cambiar la contraseña desde el enlace",
"Entrar manualmente al sitio oficial",
"Compartir tu contraseña con soporte",
"Ignorar siempre estos mensajes"
],
correct: 1, // A
explanation: "⚠️ Ojo: aquí la mejor opción es NO usar el enlace, pero la opción A está mal redactada a propósito para evaluar atención."
},

{
id: 8,
scenario: "Un supuesto técnico te llama y pide tu código OTP para 'asegurar tu cuenta'.",
options: [
"Compartir el código",
"Negarte y reportar el incidente",
"Dar solo parte del código",
"Enviar el código por correo"
],
correct: 1, // B
explanation: "Nunca compartas códigos OTP."
},

{
id: 9,
scenario: "Un correo del banco con diseño profesional te pide validar tu identidad desde un enlace.",
options: [
"Hacer clic porque parece real",
"Responder con tus datos",
"Acceder desde la app oficial del banco",
"Guardar el correo para después"
],
correct: 2, // C
explanation: "Siempre usa la app o web oficial del banco."
},

{
id: 10,
scenario: "Encuentras un código QR en la oficina para acceder al Wi-Fi, sin información de origen.",
options: [
"Escanearlo directamente",
"Verificar con TI antes de usarlo",
"Compartirlo con otros",
"Escanearlo desde tu celular personal"
],
correct: 0, // A
explanation: "Los QR pueden ser maliciosos. Verifica su origen antes."
},
{
id: 11,
    scenario: "Recibes un correo de 'Recursos Humanos' indicando que tu expediente será actualizado y que debes descargar un documento adjunto para firmarlo hoy mismo. El remitente usa un dominio parecido al de la empresa, pero con una letra cambiada.",
    options: [
      "Descargar y firmar el documento de inmediato",
      "Reenviar el correo a todos tus contactos",
      "Verificar el dominio y confirmar con RH por otro canal",
      "Responder con tu número de empleado y contraseña"
    ],
    correct: 2, // C
    explanation: "Un dominio parecido con una pequeña variación es una señal clásica de phishing. Verifica siempre por un canal oficial."
  },
  {
    id: 12,
    scenario: "Te llega un mensaje por Teams de un 'compañero' que te pide aprobar una solicitud de acceso porque está fuera de la oficina. El lenguaje es informal, pero el enlace lleva a una página de inicio de sesión desconocida.",
    options: [
      "Aprobar la solicitud para ayudar",
      "Entrar al enlace y poner tus credenciales",
      "Ignorar el mensaje sin revisar",
      "Confirmar la solicitud con la persona por otro medio"
    ],
    correct: 3, // D
    explanation: "La verificación por un segundo canal ayuda a detectar suplantación de identidad, especialmente en mensajería interna."
  },
  {
    id: 13,
    scenario: "Recibes un correo de una tienda en línea diciendo que tu compra fue procesada, pero tú no hiciste ningún pedido. El mensaje incluye un botón para 'cancelar el cobro' y pide iniciar sesión.",
    options: [
      "Entrar al botón para cancelar el cobro",
      "Ignorar y borrar el correo",
      "Usar el enlace para revisar el pedido",
      "Contactar al soporte oficial desde la web de la tienda"
    ],
    correct: 3, // D
    explanation: "Los falsos cargos son una técnica común para provocar pánico. Lo correcto es entrar al sitio oficial, no al enlace del correo."
  },
  {
    id: 14,
    scenario: "Un mensaje de WhatsApp dice ser de tu banco y afirma que tu cuenta será bloqueada si no confirmas tus datos en 15 minutos. El número no está guardado y el texto tiene varios errores de ortografía.",
    options: [
      "Responder con tus datos para evitar el bloqueo",
      "Abrir el enlace y seguir las instrucciones",
      "Verificar directamente en la app oficial del banco",
      "Compartir el mensaje con tus contactos"
    ],
    correct: 2, // C
    explanation: "La urgencia, errores de redacción y un número desconocido son señales de smishing."
  },
  {
    id: 15,
    scenario: "Un correo aparentemente del área de sistemas te pide instalar una actualización urgente de seguridad. El archivo adjunto viene en formato .exe y no estabas esperando ninguna actualización.",
    options: [
      "Ejecutar el archivo para estar protegido",
      "Eliminar el correo y confirmar con TI",
      "Renombrar el archivo para abrirlo después",
      "Reenviar el ejecutable a otros equipos"
    ],
    correct: 1, // B
    explanation: "Los archivos ejecutables inesperados son de alto riesgo. Confirma con el área de TI antes de abrir cualquier instalación."
  },
  {
    id: 16,
    scenario: "Ves en redes sociales una publicación que ofrece acceso gratis a una plataforma premium a cambio de que inicies sesión en una página externa con tu cuenta institucional.",
    options: [
      "Ingresar porque es una buena oferta",
      "Compartirla con tus compañeros",
      "Usar tu cuenta secundaria para probar",
      "Desconfiar y revisar si la oferta proviene del sitio oficial"
    ],
    correct: 3, // D
    explanation: "Las ofertas demasiado buenas suelen ser señuelos. El mejor hábito es verificar siempre el origen de la promoción."
  },
  {
    id: 17,
    scenario: "Recibes una llamada donde alguien dice ser del soporte de Microsoft y te pide que abras una página para 'validar tu identidad' mientras te dicta un código por teléfono.",
    options: [
      "Seguir las instrucciones porque es soporte",
      "Colgar y verificar el incidente con el soporte oficial",
      "Dar acceso remoto a tu equipo",
      "Compartir el código que te dieron"
    ],
    correct: 1, // B
    explanation: "Nunca confíes en llamadas no verificadas que soliciten acceso o códigos. Valida por canales oficiales."
  },
  {
    id: 18,
    scenario: "Te envían un archivo de Excel llamado 'lista de asistencia' y al abrirlo aparece un mensaje para habilitar macros porque el documento está protegido.",
    options: [
      "Habilitar macros para ver el contenido",
      "Enviar el archivo a otra persona",
      "Cerrar el archivo y confirmarlo con quien lo envió",
      "Desactivar todas las alertas de seguridad"
    ],
    correct: 2, // C
    explanation: "Las macros son un vector frecuente de malware. Un archivo inesperado debe confirmarse antes de habilitar contenido."
  },
  {
    id: 19,
    scenario: "Encuentras un pendrive en el área de trabajo con una etiqueta que dice 'Nómina 2025'. Te da curiosidad conectarlo para ver qué contiene.",
    options: [
      "Conectarlo a tu computadora para revisar",
      "Entregarlo a TI o seguridad",
      "Copiarlo en tu USB personal",
      "Abrirlo solo si no tiene contraseña"
    ],
    correct: 1, // B
    explanation: "Los dispositivos USB desconocidos pueden contener malware. Lo correcto es reportarlo o entregarlo al área responsable."
  },
  {
    id: 20,
    scenario: "Te llega un correo del proveedor de nube diciendo que tu sesión expiró y que debes volver a autenticarse. El botón de acceso lleva a una web con un certificado válido, pero el dominio no coincide exactamente con el servicio que usas.",
    options: [
      "Iniciar sesión porque el certificado es válido",
      "Copiar y pegar tu contraseña en el formulario",
      "Revisar el dominio completo y entrar manualmente al servicio oficial",
      "Compartir tus credenciales con el proveedor"
    ],
    correct: 2, // C
    explanation: "Un certificado válido no garantiza legitimidad. El dominio exacto sigue siendo el factor más importante."
  }

];