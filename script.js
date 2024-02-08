function iniciarRastreo() {
    var rastreoModal = document.getElementById('rastreoModal');
    rastreoModal.style.display = 'block';

    // Simular un rastreo GPS con una barra de carga
    var barraCarga = document.getElementById('barraCarga');
    var textoRastreo = document.getElementById('textoRastreo');

    var width = 0;
    var id = setInterval(frame, 100);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            rastreoModal.style.display = 'none';
            buscarCiudad(); // Llamar a la función para buscar la ciudad después del rastreo
        } else {
            width++;
            barraCarga.style.width = width + '%';
            textoRastreo.innerText = 'Localizando dispositivo... ' + width + '%';
        }
    }
}

function buscarCiudad() {
    var phoneNumber = document.getElementById('phoneNumberInput').value;
    var areaCode = phoneNumber.substring(0, 4); // Extraer los primeros 3 dígitos

    // Obtener ciudad ficticia desde el código de área
    var ciudad = obtenerCiudadDesdeCodigoDeArea(areaCode);

    // Generar un número de referido único
    var referidoNumber = generarNumeroReferido();

    // Almacenar la respuesta y el número de referido en localStorage durante 7 días
    var respuesta = {
        ciudad: ciudad,
        referidoNumber: referidoNumber,
        expirationDate: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 días en milisegundos
    };
    localStorage.setItem(phoneNumber, JSON.stringify(respuesta));

    // Mostrar el modal con el número de referido
    mostrarModal(referidoNumber);
}

function mostrarModal(referidoNumber) {
    var modal = document.getElementById('modal');
    var referidoNumberElement = document.getElementById('referidoNumber');
    referidoNumberElement.innerText = "El número de referido es: " + referidoNumber;

    // Actualizar el enlace de descarga con el número de referido
    var downloadRef = document.getElementById('downloadRef');
    downloadRef.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(referidoNumber);

    modal.style.display = 'block';
}

function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Resto del código sigue igual...


function obtenerCiudadDesdeCodigoDeArea(codigoArea) {
    switch (codigoArea) {
        case '11':
            return "Buenos Aires";
        case '220':
            return "Florencio Varela";
        case '2202':
            return "José C. Paz";
        case '221':
            return "La Plata";
        case '2221':
            return "Luján";
        case '2223':
            return "Mar del Plata";
        case '2224':
            return "Necochea";
        case '2225':
            return "Olavarría";
        case '2226':
            return "Pergamino";
        case '2227':
            return "San Nicolás de los Arroyos";
        case '2229':
            return "Tandil";
        case '223':
            return "Mar del Plata";
        case '2241':
            return "Azul";
        case '2242':
            return "Chascomús";
        case '2243':
            return "Dolores";
        case '2244':
            return "Lobos";
        case '2245':
            return "Mercedes";
        case '2246':
            return "Saladillo";
        case '2252':
            return "Chivilcoy";
        case '2254':
            return "Junín";
        case '2255':
            return "Pehuajó";
        case '2257':
            return "Trenque Lauquen";
        case '2261':
            return "Bahía Blanca";
        case '2262':
            return "Coronel Suárez";
        case '2264':
            return "Necochea";
        case '2265':
            return "Olavarría";
        case '2266':
            return "Tandil";
        case '2267':
            return "Tres Arroyos";
        case '2268':
            return "Villa Gesell";
        case '2271':
            return "Chascomús";
        case '2272':
            return "Dolores";
        case '2273':
            return "Lobos";
        case '2274':
            return "Mercedes";
        case '2281':
            return "Luján";
        case '2283':
            return "Mercedes";
        case '2284':
            return "San Pedro";
        case '2285':
            return "Zárate";
        case '2286':
            return "Pergamino";
        case '2291':
            return "Azul";
        case '2292':
            return "Olavarría";
        case '2296':
            return "Necochea";
        case '2297':
            return "Tandil";
        case '230':
            return "La Pampa";
        case '2302':
            return "General Pico";
        case '2314':
            return "General Villegas";
        case '2316':
            return "Pehuajó";
        case '2317':
            return "Trenque Lauquen";
        case '2320':
            return "Arrecifes";
        case '2323':
            return "Junín";
        case '2324':
            return "Lincoln";
        case '2325':
            return "Pergamino";
        case '2326':
            return "Rojas";
        case '2331':
            return "Bragado";
        case '2333':
            return "Carlos Casares";
        case '2334':
            return "Chacabuco";
        case '2335':
            return "Junín";
        case '2336':
            return "Lincoln";
        case '2337':
            return "Mercedes";
        case '2338':
            return "Pergamino";
        case '2342':
            return "Chivilcoy";
        case '2343':
            return "General Rodríguez";
        case '2344':
            return "Luján";
        case '2345':
            return "Mercedes";
        case '2346':
            return "Moreno";
        case '2352':
            return "Mar del Plata";
        case '2353':
            return "Balcarce";
        case '2354':
            return "Dolores";
        case '2355':
            return "General Alvarado";
        case '2356':
            return "General Madariaga";
        case '2357':
            return "Lobería";
        case '2358':
            return "Maipú";
        case '236':
            return "Mendoza";
        case '237':
            return "San Juan";
        case '2392':
            return "Mar del Plata";
        case '2393':
            return "Necochea";
        case '2394':
            return "Pinamar";
        case '2395':
            return "Villa Gesell";
        case '2396':
            return "Balcarce";
        case '2473':
            return "Bragado";
        case '2474':
            return "Chivilcoy";
        case '2475':
            return "Mercedes";
        case '2477':
            return "Nueve de Julio";
        case '2478':
            return "Pehuajó";
        case '249':
            return "Pergamino";
        case '260':
            return "San Luis";
        case '261':
            return "Mendoza";
        case '2622':
            return "Rosario";
        case '2624':
            return "Rafaela";
        case '2625':
            return "Venado Tuerto";
        case '2626':
            return "San Nicolás de los Arroyos";
        case '263':
            return "San Rafael";
        case '264':
            return "San Juan";
        case '2646':
            return "San Luis";
        case '2647':
            return "Mendoza";
        case '2648':
            return "San Rafael";
        case '2651':
            return "San Luis";
        case '2655':
            return "Villa Mercedes";
        case '2656':
            return "San Luis";
        case '2657':
            return "San Luis";
        case '2658':
            return "San Luis";
        case '266':
            return "San Juan";
        case '280':
            return "Chubut";
        case '2901':
            return "Bahía Blanca";
        case '2902':
            return "Necochea";
        case '2903':
            return "Mar del Plata";
        case '291':
            return "Mar del Plata";
        case '2920':
            return "Bahía Blanca";
        case '2921':
            return "Coronel Suárez";
        case '2922':
            return "Olavarría";
        case '2923':
            return "Tandil";
        case '2924':
            return "Azul";
        case '2925':
            return "Chascomús";
        case '2926':
            return "Dolores";
        case '2927':
            return "Mercedes";
        case '2928':
            return "San Nicolás de los Arroyos";
        case '2929':
            return "San Pedro";
        case '2931':
            return "Pergamino";
        case '2932':
            return "San Pedro";
        case '2933':
            return "Zárate";
        case '2934':
            return "Campana";
        case '2935':
            return "San Nicolás de los Arroyos";
        case '2936':
            return "Baradero";
        case '294':
            return "Bariloche";
        case '2940':
            return "General Roca";
        case '2942':
            return "Neuquén";
        case '2945':
            return "Zapala";
        case '2946':
            return "Villa La Angostura";
        case '2948':
            return "Cutral Có";
        case '2952':
            return "Santa Rosa";
        case '2953':
            return "General Pico";
        case '2954':
            return "La Pampa";
        case '2962':
            return "San Rafael";
        case '2963':
            return "Malargüe";
        case '2964':
            return "La Paz";
        case '2966':
            return "San Luis";
        case '297':
            return "Trelew";
        case '2972':
            return "Comodoro Rivadavia";
        case '298':
            return "La Pampa";
        case '2982':
            return "Catriló";
        case '2983':
            return "General Acha";
        case '299':
            return "Comodoro Rivadavia";
        case '3327':
            return "Mercedes";
        case '3329':
            return "Pergamino";
        case '336':
            return "Rosario";
        case '3382':
            return "Venado Tuerto";
        case '3385':
            return "Rufino";
        case '3387':
            return "San Lorenzo";
        case '3388':
            return "San Nicolás de los Arroyos";
        case '3400':
            return "San Nicolás de los Arroyos";
        case '3401':
            return "San Pedro";
        case '3402':
            return "Baradero";
        case '3404':
            return "Campana";
        case '3405':
            return "San Antonio de Areco";
        case '3406':
            return "Arrecifes";
        case '3407':
            return "San Andrés de Giles";
        case '3408':
            return "Luján";
        case '3409':
            return "Mercedes";
        case '341':
            return "Rosario";
        case '342':
            return "Santa Fe";
        case '343':
            return "Paraná";
        case '3435':
            return "Federal";
        case '3436':
            return "Gualeguay";
        case '3437':
            return "Gualeguaychú";
        case '3438':
            return "Concepción del Uruguay";
        case '3442':
            return "Colón";
        case '3444':
            return "Concordia";
        case '3445':
            return "Gualeguay";
        case '3446':
            return "La Paz";
        case '3447':
            return "San Salvador";
        case '345':
            return "Concordia";
        case '3454':
            return "Victoria";
        case '3455':
            return "Villaguay";
        case '3456':
            return "San Salvador";
        case '3458':
            return "Concepción del Uruguay";
        case '3460':
            return "Victoria";
        case '3462':
            return "Gualeguaychú";
        case '3463':
            return "Federación";
        case '3464':
            return "Colón";
        case '3465':
            return "Villa Elisa";
        case '3466':
            return "Concordia";
        case '3467':
            return "San José";
        case '3468':
            return "Villaguay";
        case '3469':
            return "Crespo";
        case '3471':
            return "Diamante";
        case '3472':
            return "Federal";
        case '3476':
            return "Paraná";
        case '348':
            return "Bahía Blanca";
        case '3482':
            return "Tandil";
        case '3483':
            return "Necochea";
        case '3487':
            return "Azul";
        case '3489':
            return "Olavarría";
        case '3491':
            return "Junín";
        case '3492':
            return "Pergamino";
        case '3493':
            return "Chivilcoy";
        case '3496':
            return "Mercedes";
        case '3497':
            return "Luján";
        case '3498':
            return "San Nicolás de los Arroyos";
        case '351':
            return "Córdoba";
        case '3521':
            return "Río Cuarto";
        case '3522':
            return "Villa María";
        case '3524':
            return "Marcos Juárez";
        case '3525':
            return "Bell Ville";
        case '353':
            return "Villa Dolores";
        case '3532':
            return "Jesús María";
        case '3533':
            return "Cosquín";
        case '3537':
            return "Villa Carlos Paz";
        case '3541':
            return "Cruz del Eje";
        case '3542':
            return "La Calera";
        case '3543':
            return "Río Tercero";
        case '3544':
            return "Alta Gracia";
        case '3546':
            return "Bell Ville";
        case '3547':
            return "Río Cuarto";
        case '3548':
            return "Villa María";
        case '3549':
            return "Villa Dolores";
        case '3562':
            return "San Francisco";
        case '3563':
            return "Villa María";
        case '3564':
            return "Río Tercero";
        case '3571':
            return "San Francisco";
        case '3572':
            return "Villa María";
        case '3573':
            return "Bell Ville";
        case '3574':
            return "Río Cuarto";
        case '3575':
            return "Villa Dolores";
        case '3576':
            return "Villa Dolores";
        case '358':
            return "Córdoba";
        case '3582':
            return "Río Cuarto";
        case '3583':
            return "Villa María";
        case '3584':
            return "Bell Ville";
        case '3585':
            return "Cruz del Eje";
        case '362':
            return "Mendoza";
        case '364':
            return "San Rafael";
        case '370':
            return "San Luis";
        case '3711':
            return "Villa Mercedes";
        case '3715':
            return "San Luis";
        case '3716':
            return "San Luis";
        case '3718':
            return "San Luis";
        case '3721':
            return "San Luis";
        case '3725':
            return "San Luis";
        case '3731':
            return "San Luis";
        case '3734':
            return "Villa Mercedes";
        case '3735':
            return "Villa Mercedes";
        case '3741':
            return "San Luis";
        case '3743':
            return "San Luis";
        case '3751':
            return "San Luis";
        case '3754':
            return "San Luis";
        case '3755':
            return "Villa Mercedes";
        case '3756':
            return "Villa Mercedes";
        case '3757':
            return "Villa Mercedes";
        case '3758':
            return "Villa Mercedes";
        case '376':
            return "Mendoza";
        case '3772':
            return "San Juan";
        case '3773':
            return "San Juan";
        case '3774':
            return "San Juan";
        case '3775':
            return "San Juan";
        case '3777':
            return "San Juan";
        case '3781':
            return "San Juan";
        case '3782':
            return "San Juan";
        case '3786':
            return "San Juan";
        case '379':
            return "San Juan";
        case '380':
            return "San Juan";
        case '381':
            return "Tucumán";
        case '3821':
            return "San Miguel de Tucumán";
        case '3825':
            return "Concepción";
        case '3826':
            return "Monteros";
        case '3827':
            return "Aguilares";
        case '383':
            return "Tucumán";
        case '3832':
            return "Concepción";
        case '3835':
            return "Tafí Viejo";
        case '3837':
            return "Monteros";
        case '3838':
            return "Famaillá";
        case '3841':
            return "Catamarca";
        case '3843':
            return "Catamarca";
        case '3844':
            return "La Rioja";
        case '3845':
            return "La Rioja";
        case '3846':
            return "La Rioja";
        case '385':
            return "Catamarca";
        case '3854':
            return "San Fernando del Valle de Catamarca";
        case '3855':
            return "La Rioja";
        case '3856':
            return "La Rioja";
        case '3857':
            return "La Rioja";
        case '3858':
            return "La Rioja";
        case '3861':
            return "Salta";
        case '3862':
            return "Jujuy";
        case '3863':
            return "Salta";
        case '3865':
            return "San Salvador de Jujuy";
        case '3867':
            return "Salta";
        case '3868':
            return "Salta";
        case '3869':
            return "Salta";
        case '387':
            return "Salta";
        case '3873':
            return "Salta";
        case '3876':
            return "Tartagal";
        case '3877':
            return "Orán";
        case '3878':
            return "Metán";
        case '388':
            return "Santiago del Estero";
        case '3885':
            return "Santiago del Estero";
        case '3886':
            return "La Banda";
        case '3887':
            return "Santiago del Estero";
        case '3888':
            return "Santiago del Estero";
        case '3891':
            return "Santiago del Estero";
        case '3892':
            return "La Banda";
        case '3894':
            return "Santiago del Estero";
        default:
            return "Ciudad Desconocida";
    }
}



/*
function obtenerCiudadDesdeCodigoDeArea(codigoArea) {
    switch (codigoArea) {
      case '011':
        return "Buenos Aires";
      case '0221':
        return "La Plata";
      case '0341':
        return "Rosario";
      case '0351':
        return "Córdoba";
      case '0381':
        return "San Miguel de Tucumán";
      case '3455':
        return "Villaguay";
      case '343':
        return "Paraná";
      case '345': // Código de área para Concordia
        return "Concordia";
      case '348': // Código de área para La Paz
        return "La Paz";
      default:
        return "Ciudad Desconocida";
    }
  }
*/
function generarNumeroReferido() {
    return Math.floor(Math.random() * 1000000) + 1; // Generar un número aleatorio de 6 dígitos
}

//cambiado para que se muestre el modal 


function abrirResultadoModal() {
    var resultadoModal = document.getElementById('resultadoModal');
    resultadoModal.style.display = 'block';
}

function cerrarResultadoModal() {
    var resultadoModal = document.getElementById('resultadoModal');
    resultadoModal.style.display = 'none';
}


function mostrarResultado() {
    var refNumber = document.getElementById('refNumberInput').value;

    // Obtener la respuesta asociada al número de referido
    var respuesta = obtenerRespuestaPorReferido(refNumber);

    // Verificar si la respuesta existe y si el número de referido es válido
    if (respuesta && Date.now() < respuesta.expirationDate) {
        var resultadoCiudad = document.getElementById('resultadoCiudad');
        resultadoCiudad.innerText = "La ciudad correspondiente es: " + respuesta.ciudad;
        
        abrirResultadoModal(); // Mostrar el modal con la respuesta

        // Mostrar el mapa
        mostrarMapa(respuesta.ciudad);
    } else {
        document.getElementById('result').innerText = "Número de referido incorrecto o respuesta expirada.";
    }
}
// Define un objeto que mapea cada ciudad con sus coordenadas
/*
var coordenadasCiudades = {
    "Buenos Aires": [-34.607993, -58.377979],
    "La Plata": [-34.9205, -57.9536],
    "Rosario": [-32.9468, -60.6393],
    "Córdoba": [-31.4201, -64.1888],
    "San Miguel de Tucumán": [-26.8083, -65.2176], 
    "Villaguay": [-31.866331, -59.031919],
    "Paraná": [-31.7413, -60.5116],
    "Concordia": [-31.413333, -58.016667],
  "La Paz": [-31.523889, -60.534444],

}; */
var coordenadasCiudades = {
    "Buenos Aires": [-34.607993, -58.377979],
    "La Plata": [-34.9205, -57.9536],
    "Rosario": [-32.9468, -60.6393],
    "Córdoba": [-31.4201, -64.1888],
    "San Miguel de Tucumán": [-26.8083, -65.2176],
    "Villaguay": [-31.866331, -59.031919],
    "Paraná": [-31.7413, -60.5116],
    "Concordia": [-31.413333, -58.016667],
    "La Paz": [-31.523889, -60.534444],
    "Florencio Varela": [-34.8214, -58.271],
    "José C. Paz": [-34.5104, -58.7728],
    "Luján": [-34.5703, -59.1042],
    "Mar del Plata": [-38.0055, -57.5426],
    "Necochea": [-38.5532, -58.7397],
    "Olavarría": [-36.8924, -60.3226],
    "Pergamino": [-33.8947, -60.5736],
    "San Nicolás de los Arroyos": [-33.3334, -60.2123],
    "Tandil": [-37.3297, -59.1332],
    "Azul": [-36.7768, -59.8581],
    "Chascomús": [-35.5663, -58.0157],
    "Dolores": [-36.3132, -57.6791],
    "Lobos": [-35.1849, -59.0936],
    "Mercedes": [-34.6545, -59.4344],
    "Saladillo": [-35.6432, -59.7774],
    "Chivilcoy": [-34.8952, -60.0167],
    "Junín": [-34.5829, -60.948],
    "Pehuajó": [-35.8088, -61.8973],
    "Trenque Lauquen": [-35.9688, -62.7391],
    "Bahía Blanca": [-38.7183, -62.2657],
    "Coronel Suárez": [-37.4526, -61.9263],
    "Villa Gesell": [-37.2632, -56.9732],
    "San Rafael": [-34.6177, -68.3301],
    "Mendoza": [-32.8895, -68.8458],
    "Venado Tuerto": [-33.7456, -61.9688],
    "General Pico": [-35.6602, -63.7533],
    "General Villegas": [-35.0407, -63.0123],
    "Arrecifes": [-34.0559, -60.1141],
    "Lincoln": [-34.8638, -61.5294],
    "Rojas": [-34.1983, -60.8344],
    "Bragado": [-35.1119, -60.4907],
    "Carlos Casares": [-35.6208, -61.3692],
    "Chacabuco": [-34.6415, -60.4739],
    "Colón": [-33.8967, -61.0954],
    "Concepción del Uruguay": [-32.4838, -58.2407],
    "Federal": [-30.9506, -58.7835],
    "Gualeguay": [-33.1458, -59.3095],
    "Gualeguaychú": [-33.0146, -58.5198],
    "La Paz": [-30.7469, -59.6454],
    "San Salvador": [-31.6168, -58.5479],
    "Victoria": [-32.6184, -60.1542],
    "Villaguay": [-31.8654, -59.0167],
    "Concordia": [-31.3931, -58.0209],
    "La Paz": [-30.7454, -59.6485],
    "Victoria": [-32.6184, -60.1542],
    "Gualeguaychú": [-33.0117, -58.5198],
    "Federación": [-30.9541, -58.7847],
    "San José": [-32.6729, -58.3155],
    "Crespo": [-32.1736, -58.4554],
    "Diamante": [-32.0604, -60.6386],
    "La Banda": [-27.7726, -64.2559],
    "Metán": [-25.4977, -64.9779],
    "Tartagal": [-22.5216, -63.8133],
    "Orán": [-23.1322, -64.3252],
    "Salta": [-24.7821, -65.4121],
    "Santiago del Estero": [-27.7951, -64.2615],
    "Río Cuarto": [-33.1232, -64.349],
    "Villa María": [-32.407, -63.2428],
    "Marcos Juárez": [-32.6921, -62.1056],
    "Bell Ville": [-32.627, -62.6886],
    "Villa Dolores": [-31.943, -65.2293],
    "Jesús María": [-30.9811, -64.0936],
    "Cosquín": [-31.2397, -64.4648],
    "Villa Carlos Paz": [-31.424, -64.4978],
    "Cruz del Eje": [-30.7191, -64.7993],
    "La Calera": [-31.3204, -64.3167],
    "Río Tercero": [-32.1779, -64.108],
    "Alta Gracia": [-31.6529, -64.4332],
    "San Francisco": [-31.4271, -62.0826],
    "San Fernando del Valle de Catamarca": [-28.4696, -65.7852],
    "La Rioja": [-29.4135, -66.8567],
    "San Salvador de Jujuy": [-24.1855, -65.2998],
    "Salta": [-24.7821, -65.4121],
    "Jujuy": [-24.1946, -65.2971],
    "Tucumán": [-26.8083, -65.2176],
    "Salta": [-24.7821, -65.4121],
    "Concepción": [-27.3482, -65.5926],
    "Monteros": [-27.1676, -65.5045],
    "Aguilares": [-27.4307, -65.6143],
    "Tafí Viejo": [-26.7327, -65.263],
    "Famaillá": [-27.0546, -65.4072],
    "Catamarca": [-28.4696, -65.7852],
    "San Fernando del Valle de Catamarca": [-28.4696, -65.7852],
    "La Rioja": [-29.4135, -66.8567],
    "Santiago del Estero": [-27.7951, -64.2615],
    "La Banda": [-27.7726, -64.2559],
    "Santiago del Estero": [-27.7951, -64.2615],
    "Santiago del Estero": [-27.7951, -64.2615],
};



function mostrarMapa(ciudad) {
    // Verifica si las coordenadas de la ciudad están definidas en el objeto de coordenadas
    if (coordenadasCiudades.hasOwnProperty(ciudad)) {
        var coordenadas = coordenadasCiudades[ciudad];
        
        // Crea el mapa y centra en las coordenadas obtenidas
        var mapa = L.map('mapa').setView(coordenadas, 12); // Nivel de zoom 12
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(mapa);

        // Agrega un marcador en las coordenadas
        L.marker(coordenadas).addTo(mapa)
            .bindPopup('Ciudad: ' + ciudad)
            .openPopup();
    } else {
        console.error("Las coordenadas para la ciudad '" + ciudad + "' no están definidas.");
    }
}
function mostrarResultado() {
    var refNumber = document.getElementById('refNumberInput').value;

    // Obtener la respuesta asociada al número de referido
    var respuesta = obtenerRespuestaPorReferido(refNumber);

    // Verificar si la respuesta existe y si el número de referido es válido
    if (respuesta && Date.now() < respuesta.expirationDate) {
        var resultadoCiudad = document.getElementById('resultadoCiudad');
        resultadoCiudad.innerText = "La ciudad correspondiente es: " + respuesta.ciudad;
        
        abrirResultadoModal(); // Mostrar el modal con la respuesta

        // Mostrar el mapa con la ciudad correspondiente
        mostrarMapa(respuesta.ciudad);
    } else {
        document.getElementById('result').innerText = "Número de referido incorrecto o respuesta expirada.";
    }
}


/*
function mostrarMapa(ciudad) {
    // Realiza una solicitud de geocodificación para obtener las coordenadas de la ciudad
    // Aquí se asume que tienes una función llamada obtenerCoordenadas(ciudad) que devuelve una promesa con las coordenadas
    obtenerCoordenadas(ciudad)
        .then(function(coordenadas) {
            // Crea el mapa y centra en las coordenadas obtenidas
            var mapa = L.map('mapa').setView(coordenadas, 12); // Nivel de zoom 12
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
                maxZoom: 18,
            }).addTo(mapa);

            // Agrega un marcador en las coordenadas
            L.marker(coordenadas).addTo(mapa)
                .bindPopup('Ciudad: ' + ciudad)
                .openPopup();
        })
        .catch(function(error) {
            console.error('Error al obtener coordenadas:', error);
        });
}



/*
function mostrarMapa(ciudad) {
    var mapa = L.map('mapa').setView([0, 0], 2); // Centrado inicial y nivel de zoom
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(mapa);

    // Utiliza geocodificación u otra fuente de datos para obtener las coordenadas de la ciudad
    // Luego, utiliza las coordenadas para centrar el mapa en esa ubicación
    // Por simplicidad, aquí se muestra un marcador en el centro del mapa
    L.marker([0, 0]).addTo(mapa)
        .bindPopup('Ciudad: ' + ciudad)
        .openPopup();
}
*/
/*
function mostrarResultado() {
    var refNumber = document.getElementById('refNumberInput').value;

    // Obtener la respuesta asociada al número de referido
    var respuesta = obtenerRespuestaPorReferido(refNumber);

    // Verificar si la respuesta existe y si el número de referido es válido
    if (respuesta && Date.now() < respuesta.expirationDate) {
        var resultadoCiudad = document.getElementById('resultadoCiudad');
        resultadoCiudad.innerText = "La ciudad correspondiente es: " + respuesta.ciudad;
        abrirResultadoModal(); // Mostrar el modal con la respuesta
    } else {
        document.getElementById('result').innerText = "Número de referido incorrecto o respuesta expirada.";
    }
}

*/

/*
function mostrarResultado() {
    var refNumber = document.getElementById('refNumberInput').value;

    // Obtener la respuesta asociada al número de referido
    var respuesta = obtenerRespuestaPorReferido(refNumber);

    // Verificar si la respuesta existe y si el número de referido es válido
    if (respuesta && Date.now() < respuesta.expirationDate) {
        document.getElementById('result').innerText = "La ciudad correspondiente es: " + respuesta.ciudad;
    } else {
        document.getElementById('result').innerText = "Número de referido incorrecto o respuesta expirada.";
    } */


function obtenerRespuestaPorReferido(referido) {
    // Buscar la respuesta asociada al número de referido en el localStorage
    var keys = Object.keys(localStorage);
    for (var i = 0; i < keys.length; i++) {
        var respuesta = JSON.parse(localStorage.getItem(keys[i]));
        if (respuesta.referidoNumber == referido) {
            return respuesta;
        }
    }
    return null; // No se encontró la respuesta asociada al número de referido
}








// Tu código existente...

function realizarPago() {
    // Aquí puedes agregar la lógica para realizar el pago con Mercado Pago
    alert("Se realizará el pago con Mercado Pago.");
}


















