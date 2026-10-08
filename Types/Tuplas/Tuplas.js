(() => {
    /** Declaración */
    let user;
    user = ["Diego", 33];
    const successful = [200, "OK", true];
    const failed = [404, "Not Found"]; // Valido tambien
    const dot = [10.45, -73.21];
    const Diego = ["Diego", 32], Maria = ["Maria", 67];
    let [namePerson, agePerson] = Diego, [nameMaria, ageMaria] = Maria;
    console.log(namePerson, agePerson);
    console.log(nameMaria, ageMaria);
    /** Caso de uso real: Retorno múltiple (Estilo React Hooks) */
    function usarEstado(valorInicial) {
        let estado = valorInicial;
        const setEstado = (nuevoValor) => {
            estado = nuevoValor;
            console.log(`Nuevo estado: ${estado}`);
        };
        return [estado, setEstado];
    }
    // Uso de la función
    const [nombre, setNombre] = usarEstado("Juan");
    setNombre("Pedro");
    // Nuevo estado: Pedro
})();
export {};
