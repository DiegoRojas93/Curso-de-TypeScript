(() => {
    const AVENGERS = {
        generation: 1,
        team: ["Iron man", "Capitan America", "Thor"],
        porwerLevel: 1200,
        isAction: true
    };
    const { generation, isAction } = AVENGERS;
    const printAvengers = ({ generation, team }) => {
        console.log(generation, team);
    };
    printAvengers(AVENGERS);
    // 2. Objeto de ejemplo
    const usuarioAPI = {
        id: 101,
        nombre: "Elena Gómez",
        contacto: {
            email: "elena@dev.com",
            redes: {
                twitter: "@elena_dev",
                github: "elenagomez"
            }
        },
        ubicacion: {
            ciudad: "Medellín",
            pais: "Colombia"
        }
    };
    // 3. Función con desestructuración anidada directamente en los parámetros
    function imprimirResumenUsuario({ nombre, contacto: { email, redes: { twitter } // Desestructuración profunda: extrae solo 'twitter'
     }, ubicacion: { ciudad } // Extrae 'ciudad' desde 'ubicacion'
     }) {
        console.log(`Usuario: ${nombre}`);
        console.log(`Email: ${email}`);
        console.log(`Twitter: ${twitter}`);
        console.log(`Ciudad: ${ciudad}`);
    }
    // 4. Ejecución
    imprimirResumenUsuario(usuarioAPI);
    /*
    Salida en consola:
    Usuario: Elena Gómez
    Email: elena@dev.com
    Twitter: @elena_dev
    Ciudad: Medellín
    */
})();
export {};
