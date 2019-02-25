OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Se presentó una falla al borrar los mapeos.",
    "Failed to delete the server configuration" : "Se presentó una falla al borrar la configuración del servidor",
    "No action specified" : "No se ha especificado una acción",
    "No configuration specified" : "No se ha especificado una configuración",
    "No data specified" : "No se han especificado datos",
    " Could not set configuration %s" : "No fue posible establecer la configuración %s",
    "Action does not exist" : "La acción no existe",
    "LDAP user and group backend" : "Backend de LDAP para usuario y grupo",
    "Renewing …" : "Renovando ...",
    "Very weak password" : "Contraseña muy debil",
    "Weak password" : "Contraseña debill",
    "So-so password" : "Contraseña aceptable",
    "Good password" : "Buena contraseña",
    "Strong password" : "Contraseña fuerte",
    "The Base DN appears to be wrong" : "El DN Base parece estar incorrecto",
    "Testing configuration…" : "Probando configuracion... ",
    "Configuration incorrect" : "Configuración Incorrecta",
    "Configuration incomplete" : "Configuración incompleta",
    "Configuration OK" : "Configuración correcta",
    "Select groups" : "Seleccionar grupos",
    "Select object classes" : "Seleccionar las clases de objeto",
    "Please check the credentials, they seem to be wrong." : "Favor de verificar sus credenciales, al parecer están equivocadas.",
    "Please specify the port, it could not be auto-detected." : "No fue posible auto-detectar el puerto, favor de especificarlo.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "No fue posible auto detectar el DN Base, favor de verificar las credenciales, servidor y puerto.",
    "Could not detect Base DN, please enter it manually." : "No fue posible detectar el DN Base, favor de ingresarlo manualmente.",
    "{nthServer}. Server" : "{nthServer}. Servidor",
    "No object found in the given Base DN. Please revise." : "No fue posible encontrar ningún objeto en el DN Base dado. Favor de verificar. ",
    "More than 1,000 directory entries available." : "Se encuentran disponibles más de 1,000 elementos de directoiros. ",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Se presentó un error. Favor de verificar la DN Base, así como las configuraciones de la conexión y las credenciales.",
    "Do you really want to delete the current Server Configuration?" : "¿Realmente desea eliminar la configuración actual del servidor?",
    "Confirm Deletion" : "Confirmar el borrado",
    "Mappings cleared successfully!" : "¡Los mapeos se borraron exitosamente!",
    "Error while clearing the mappings." : "Se presentó un error al borrar los mapeos. ",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "La vinculación anónima no está permitida. Favor de proporcionar un Usuario DN y una Contaseña.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Error de Operaciones LDAP. Las vinculaciones anónimas pueden no estar permitidas. ",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Se presentó una falla en el guardado. Favor de verificar que la base de datos esté operando. Recargue antes de continuar. ",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Cambiar la modalidad habilitará las consultas automaticas de LDAP. Dependiendo del tamaño de su LDAP esto puede tomar algun tiempo. ¿Aún desea cambiar la modalidad?",
    "Mode switch" : "Cambio de modo",
    "Select attributes" : "Seleccionar atributos",
    "User found and settings verified." : "Usuario encontrado y configuraciones verificadas. ",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "El filtro de la búsqueda es inválido, posiblemente debido a temas de sintaxis como un número diferente de corchetes abiertos y cerrados. Favor de verificar. ",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Se presentó una falla con la conexión al servidor LDAP / AD, favor de verificar el servidor, puerto y credenciales. ",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Falta el \"%uid\" del marcador de posición. Será reemplazado con el nombre de usuario al consultar LDAP / AD.",
    "Please provide a login name to test against" : "Favor de proporcionar un nombre de usuario contra el cual probar",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "El cuadro de grupo está deshabilitado, porque el servidor LDAP / AD no soporta memberOf.",
    "Password change rejected. Hint: " : "Cambio de contraseña rechazado. Pista: ",
    "Please login with the new password" : "Favor de iniciar sesion con la nueva contraseña",
    "Your password will expire tomorrow." : "Su contraseña expirará mañana.",
    "Your password will expire today." : "Su contraseña expirará el día de hoy. ",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["La contraseña expirará dentro de %n día. ","La contraseña expirará dentro de %n días. "],
    "LDAP / AD integration" : "Integración con LDAP / AD",
    "_%s group found_::_%s groups found_" : ["Grupo %s encontrado","%s grupos encontrados"],
    "_%s user found_::_%s users found_" : ["Usuario %s encontrado","%s usuarios encontrados"],
    "Could not find the desired feature" : "No fue posible encontrar la función deseada.",
    "Invalid Host" : "Servidor inválido",
    "Test Configuration" : "Probar configuración",
    "Help" : "Ayuda",
    "Groups meeting these criteria are available in %s:" : "Los grupos que cumplen con los sigueintes criterios están disponibles en %s:",
    "Only these object classes:" : "Sólo estas clases de objetos:",
    "Only from these groups:" : "Sólo desde estos grupos:",
    "Search groups" : "Buscar grupos",
    "Available groups" : "Grupos disponibles",
    "Selected groups" : "Grupos seleccionados",
    "Edit LDAP Query" : "Editar consulta a LDAP",
    "LDAP Filter:" : "Filtro de LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "El filtro especifica cuales grupos LDAP tendrán acceso a la instancia %s.",
    "Verify settings and count the groups" : "Verificar las configuraciones y contar los grupos",
    "When logging in, %s will find the user based on the following attributes:" : "Al iniciar sesion, %s encontrará al usuario con base en los siguientes atributos:",
    "LDAP / AD Username:" : "Nombre de usuario LDAP / AD",
    "LDAP / AD Email Address:" : "Dirección de correo electrónico LDAP / AD",
    "Other Attributes:" : "Otros atributos:",
    "Test Loginname" : "Probar nombre de usuario",
    "Verify settings" : "Verificar configuraciones ",
    "%s. Server:" : "%s. Servidor:",
    "Add a new configuration" : "Agregar una nueva configuración",
    "Copy current configuration into new directory binding" : "Copiar la configuración actual a un nuevo directorio de vinculación",
    "Delete the current configuration" : "Borrar la configuración actual",
    "Host" : "Servidor",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Puede omitir el protocolo, a menos que requiera SSL. Si es el caso, empiece con ldaps://",
    "Port" : "Puerto",
    "Detect Port" : "Detectar Puerto",
    "User DN" : "DN del usuario",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "El DN del cliente del usuario con el que se vinculará, ejem. uid=agente,dc=ejemplo,dc=com. Para tener un acceso anónimo, mantenga el DN y la contraseña vacíos.",
    "Password" : "Contraseña",
    "For anonymous access, leave DN and Password empty." : "Para acceso anónimo, deje la contraseña y DN vacíos.",
    "One Base DN per line" : "Un DN Base por línea",
    "You can specify Base DN for users and groups in the Advanced tab" : "Puede especificar el DN Base para usuarios y grupos en la pestaña Avanzado",
    "Detect Base DN" : "Detectar DN Base",
    "Test Base DN" : "Probar el DN Base",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Evita solicitudes automaticas de LDAP. Es mejor para ambientes más grandes pero requiere mayor conocimiento de LDAP. ",
    "Manually enter LDAP filters (recommended for large directories)" : "Ingresar los filtros LDAP manualmente (recomendado para directorios grandes)",
    "Listing and searching for users is constrained by these criteria:" : "Los enlistados y las busquedas para los usuarios están acotados por estos criterios:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Las clases de objetos más comunes para usuarios son organizationalPerson, person, user, and inetOrgPerson. Si no está seguro de cuál clase de objeto selecciónar, favor de consultar su directorio admin.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "El filtro especifica cuáles usuarios LDAP tendrán acceso a la instancia %s.",
    "Verify settings and count users" : "Verificar configuraciones y contar ususarios",
    "Saving" : "Guardando",
    "Back" : "Atrás",
    "Continue" : "Continuar",
    "Please renew your password." : "Favor de renovar su contraseña.",
    "An internal error occurred." : "Se presentó un error interno. ",
    "Please try again or contact your administrator." : "Favor de intentarlo de nuevo o contacte a su administrador. ",
    "Current password" : "Contraseña actual",
    "New password" : "Nueva contraseña",
    "Renew password" : "Renovar contraseña",
    "Wrong password." : "Contraseña incorrecta. ",
    "Cancel" : "Cancelar",
    "Server" : "Servidor",
    "Users" : "Usuarios",
    "Login Attributes" : "Atriburos de Inicio de Sesión",
    "Groups" : "Grupos",
    "Expert" : "Experto",
    "Advanced" : "Avanzado",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Advertencia:</b> El módulo LDAP de PHP no está instalado, el backend no funcionará. Favor de solicitar su instalación a su administrador del sistema.",
    "Connection Settings" : "Configuraciones de la conexión",
    "Configuration Active" : "Configuracion Activa",
    "When unchecked, this configuration will be skipped." : "Cuando no esté seleccionada, esta configuración será omitida.",
    "Backup (Replica) Host" : "Servidor de copia de seguridad (Replica)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Favor de proporcionar un servidor de copia de seguridad opcional. Debe ser una réplica del servidor LDAP / AD principal.",
    "Backup (Replica) Port" : "Puerto para copias de seguridad (Réplica)",
    "Disable Main Server" : "Deshabilitar servidor principal",
    "Only connect to the replica server." : "Sólo contectarse al servidor de réplica.",
    "Turn off SSL certificate validation." : "Deshabilitar la validación del certificado SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "¡No se recomienda, úselo únicamente para pruebas! Si la conexión sólo funciona con esta opción, importe el certificado SSL del servidor LDAP a su servidor %s.",
    "Cache Time-To-Live" : "Tiempo de vida del caché",
    "in seconds. A change empties the cache." : "en segundos. Un cambio vacía la caché.",
    "Directory Settings" : "Configuraciones del directorio",
    "User Display Name Field" : "Campo de nombre del usuario a desplegar",
    "The LDAP attribute to use to generate the user's display name." : "El atributo LDAP a usar para generar el nombre del usuario a desplegar.",
    "2nd User Display Name Field" : "2do Campo de Nombre a Desplegar del Usuario",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Opcional. Un atributo LDAP puede ser agregado al nombre a despelegar entre corchetes. Ejemplos de resultados »John Doe (john.doe@example.org)«.",
    "Base User Tree" : "Árbol de Usuario Base",
    "One User Base DN per line" : "Un DN Base de Usuario por línea",
    "User Search Attributes" : "Atributos de búsqueda de usuario",
    "Optional; one attribute per line" : "Opcional; un atributo por línea",
    "Group Display Name Field" : "Campo de Nombre de Grupo a Desplegar",
    "The LDAP attribute to use to generate the groups's display name." : "El atributo LDAP a usar para generar el nombre para mostrar del grupo.",
    "Base Group Tree" : "Árbol base de grupo",
    "One Group Base DN per line" : "Un DN Base de Grupo por línea",
    "Group Search Attributes" : "Atributos de Búsqueda de Grupo",
    "Group-Member association" : "Asociación Grupo-Miembro",
    "Dynamic Group Member URL" : "URL de Miembro de Grupo Dinámico ",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "El atributo de LDAP que, en objetos de grupo, contiene una URL de búsqueda LDAP que determina cuáles objetos pertenecen al grupo. (Un ajuste vacío deshabilita la funcionalidad de membrecía de grupo dinámica.)",
    "Nested Groups" : "Grupos Anidados",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Cuando se enciende, los grupos que contengan grupos están soportados. (Sólo funciona si el atributo de miembro de grupo contiene los DNs). ",
    "Paging chunksize" : "Tamaño del chunk de paginación",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "El tamaño de chunk usado para las búsquedas con paginación de LDAP puede regresar resuldados volumniosos tales como enumeraciones de usuarios o grupos. (Establecerlo a 0 deshabilita las busquedas con paginación en estos casos). ",
    "Enable LDAP password changes per user" : "Habilitar cambio de contraseñas en LDAP por el usuario",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Permitir que los usuarios LDAP puedan cambiar su contraseña y permitir a  los Super Administradortes y Administradores de grupo cambiar  la contraseña de sus usuarios LDAP. Únicamente funciona si configuración de las poiíticas de control de acceso en el servidor LDAP está alineada. Como las contraseñas son enviadas en texto plano al servidor LDAP, se debe usar encripción en el transporte y del mismo modo se debe configurar el uso de funciones de resumen en el servidor LDAP",
    "(New password is sent as plain text to LDAP)" : "(La nueva contraseña se envía como texto plano a LDAP)",
    "Default password policy DN" : "DN de la política predeterminada de contraseñas",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "El DN de la política de contraseñas predeterminada que será usada para el manejo de expiración de contraseñas. Solo funciona cuando está habilitado el cambio de contraseñas por el usuario y solo está soportado para OpenLDAP. Deje en blanco para deshabilitar el manejo de expiración de contraseñas.",
    "Special Attributes" : "Atributos Especiales",
    "Quota Field" : "Campo de cuota",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Dejar en blanco para usar la cuota predeterminada del usuario. En caso contrario, favor de especificar el atributo LDAP / AD.",
    "Quota Default" : "Cuota predeterminada",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Anular la cuota predeterminada para usuarios LDAP que no tienen una cuota establecida en el Campo Cuota. ",
    "Email Field" : "Campo de correo electrónico",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Establecer el correo electrónico del usuario con base en el atributo LDAP. Dejelo vacío para el comportamiento predeterminado. ",
    "User Home Folder Naming Rule" : "Regla de Nomenclatura para la Carpeta Inicio del Usuario",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Dejar vacío para el nombre de usuario (predeterminado). En otro caso, especifique un atributo LDAP/AD.",
    "Internal Username" : "Nombre de usuario interno",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Por defecto, el nombre de usuario interno se creará con base en el atributo UUID. Esto asegura que el nombre de usuario sea único y que los caracteres no tengan que ser convertidos. El nombre de usuario intenro tiene la restricción de que sólo los siguienes caracteres están permitidos: [ a-zA-Z0-9_.@- ]. El resto de los caracteres son reemplazados con su correspondencia ASCII o simplemente se omiten. En caso de colisiones, se agregará/ incrementará un numero. El nombre de usuario interno se usa para identificar a un usuario internamente. Adicionalmente es el nombre predeterminado para la carpeta de inicio. También es parte de las URLs remotas, por ejemplo, para todos los servicios *DAV. Con este ajuste se puede anular el comportamiento predeterminado. Mantengalo vacío para mantener el comportamiento predeterminado. Los cambios surtiran efecto sólo en los usuarios mapeados (agregados) nuevos a LDAP. ",
    "Internal Username Attribute:" : "Atributo de nombre de usuario Interno:",
    "Override UUID detection" : "Anular la detección UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Por defecto, el atributo UUID se detecta automáticamente. Este atributo se usa para identificar, sin ninguna duda, a usuarios y grupos LDAP. Adicionalmente, el nombre de usuario interno se creará con base en el UUID, si no ha sido especificado otro comportamiento en la parte de arriba. Puede anular el ajuste y proporcionar el atributo que desee. Debe asegurarse de que el atributo que desee sea accesible por los usuarios y grupos y que sea único. Mantengalo vacío para el comportamiento predeterminado . Los cambios surtirán efecto sólo en los usuarios y grupos mapeados (agregados) nuevos a LDAP.",
    "UUID Attribute for Users:" : "Atributo UUID para Usuarios:",
    "UUID Attribute for Groups:" : "Atributo UUID para Grupos:",
    "Username-LDAP User Mapping" : "Mapeo del Nombre del usuario al Usuario LDAP",
    "Clear Username-LDAP User Mapping" : "Borrar el mapeo de los Nombres de usuario a los Usuarios LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Borrar el mapeo de los Nombres de grupo a los grupos de LDAP",
    " entries available within the provided Base DN" : "elementos disponibles dentro del DN Base proporcionado",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Los nombres de usuario son usados para almacenar y asignar (meta) datos. Para poder identificar y reconocer con precisión a los usuarios, cada usuario LDAP contará con un Nombre de usuario interno. Esto requiere un mapeo del Nombre de usuario al usuario LDAP. El nombre de usuario creado se mapea al UUID del usuario LDAP. Adicionalmente el DN se guarda en caché para reducir las interacciones con LDAP, pero no se usa para identificación. Si el DN cambia, las modficaciones serán encontradas. El Nombre del usuario interno se usa en todos lados. Limpiar los mapeos dejará sobras en todos lados. ¡Limpiar los mapeos no es senible a la configuración, afecta a todas las configuraciones LDAP! Nunca borre las configuraciones en el ambiente de producción, sólo hágalo en los ambientes de pruebas o de experimentación. "
},
"nplurals=2; plural=(n != 1);");
