(() => {
  /** Enums Numéricos (Comportamiento por defecto) */

  enum EstadoPedido {
    Pendiente,  // 0
    Procesando, // 1
    Enviado,    // 2
    Entregado   // 3
  }

  let estadoActual: EstadoPedido = EstadoPedido.Pendiente;

  console.log(`Imprime: ${ estadoActual }`);
  // Imprime: 0


  // Modificando la enumeración

  enum EstadoPedido2 {
    Pendiente = 1,  // 1
    Procesando,     // 2
    Enviado,        // 3
    Entregado       // 4
  }

  let estadoActual2: EstadoPedido2 = EstadoPedido2.Pendiente;

  console.log(`Imprime: ${ estadoActual2 }`);
  // Imprime: 1



  /** Enums de Cadenas de Texto (String Enums) */

  enum Rol {
    Admin = "ADMINISTRADOR",
    Editor = "EDITOR",
    Invitado = "INVITADO"
  }

  const miRol: Rol = Rol.Admin;

  console.log(miRol);
  // "ADMINISTRADOR"



  /** Enums Inyectados vs. const enum */

  // Enums inyectados

  enum EstadoPago1 {
    Pendiente = "PENDING",
    Aprobado = "APPROVED"
  }

  let estadoActual3 = EstadoPago1.Aprobado;      // Observa el bundle


  // const enum

  const enum EstadoPago2 {
    Pendiente = "PENDING",
    Aprobado = "APPROVED"
  }

  let estadoActual4 = EstadoPago2.Aprobado;     // Observa el bundle


  /** ¿Cuándo usar Enums vs. Union Types? */

  // Con Union Types (Alternativa popular)

  type Tema1 = "LIGHT" | "DARK";

  function cambiarTema(t: Tema1) {}

  cambiarTema("LIGHT");       // Más directo, no requiere importar un enum


  // Con Enum

  enum Tema2 {
    Claro = "LIGHT",
    Oscuro = "DARK"
  }

  function cambiarTema2(t: Tema2) {}

  cambiarTema2(Tema2.Claro);
})()