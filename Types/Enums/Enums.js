(() => {
    /** Enums Numéricos (Comportamiento por defecto) */
    let EstadoPedido;
    (function (EstadoPedido) {
        EstadoPedido[EstadoPedido["Pendiente"] = 0] = "Pendiente";
        EstadoPedido[EstadoPedido["Procesando"] = 1] = "Procesando";
        EstadoPedido[EstadoPedido["Enviado"] = 2] = "Enviado";
        EstadoPedido[EstadoPedido["Entregado"] = 3] = "Entregado"; // 3
    })(EstadoPedido || (EstadoPedido = {}));
    let estadoActual = EstadoPedido.Pendiente;
    console.log(`Imprime: ${estadoActual}`);
    // Imprime: 0
    // Modificando la enumeración
    let EstadoPedido2;
    (function (EstadoPedido2) {
        EstadoPedido2[EstadoPedido2["Pendiente"] = 1] = "Pendiente";
        EstadoPedido2[EstadoPedido2["Procesando"] = 2] = "Procesando";
        EstadoPedido2[EstadoPedido2["Enviado"] = 3] = "Enviado";
        EstadoPedido2[EstadoPedido2["Entregado"] = 4] = "Entregado"; // 4
    })(EstadoPedido2 || (EstadoPedido2 = {}));
    let estadoActual2 = EstadoPedido2.Pendiente;
    console.log(`Imprime: ${estadoActual2}`);
    // Imprime: 1
    /** Enums de Cadenas de Texto (String Enums) */
    let Rol;
    (function (Rol) {
        Rol["Admin"] = "ADMINISTRADOR";
        Rol["Editor"] = "EDITOR";
        Rol["Invitado"] = "INVITADO";
    })(Rol || (Rol = {}));
    const miRol = Rol.Admin;
    console.log(miRol);
    // "ADMINISTRADOR"
    /** Enums Inyectados vs. const enum */
    // Enums inyectados
    let EstadoPago1;
    (function (EstadoPago1) {
        EstadoPago1["Pendiente"] = "PENDING";
        EstadoPago1["Aprobado"] = "APPROVED";
    })(EstadoPago1 || (EstadoPago1 = {}));
    let estadoActual3 = EstadoPago1.Aprobado; // Observa el bundle
    // const enum
    let EstadoPago2;
    (function (EstadoPago2) {
        EstadoPago2["Pendiente"] = "PENDING";
        EstadoPago2["Aprobado"] = "APPROVED";
    })(EstadoPago2 || (EstadoPago2 = {}));
    let estadoActual4 = EstadoPago2.Aprobado; // Observa el bundle
    function cambiarTema(t) { }
    cambiarTema("LIGHT"); // Más directo, no requiere importar un enum
    // Con Enum
    let Tema2;
    (function (Tema2) {
        Tema2["Claro"] = "LIGHT";
        Tema2["Oscuro"] = "DARK";
    })(Tema2 || (Tema2 = {}));
    function cambiarTema2(t) { }
    cambiarTema2(Tema2.Claro);
})();
export {};
