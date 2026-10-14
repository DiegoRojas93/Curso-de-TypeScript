(() => {

  type Avengers = {
    generation: number,
    team: string[];
    porwerLevel: number;
    isAction: boolean;
  }

  const AVENGERS: Avengers = {
    generation: 1,
    team: ["Iron man", "Capitan America", "Thor"],
    porwerLevel : 1200,
    isAction: true
  }

  const { generation, isAction }: Avengers = AVENGERS;

  const printAvengers = ({ generation, team }: Avengers) => {
    console.log(generation, team);
  }

  printAvengers(AVENGERS)



  // 1. Definimos los tipos de datos anidados
  type RedesSociales = {
    twitter: string;
    github: string;
  };

  type Direccion = {
    ciudad: string;
    pais: string;
  };

  type PerfilUsuario = {
    id: number;
    nombre: string;
    contacto: {
      email: string;
      redes: RedesSociales;
    };
    ubicacion: Direccion;
  };

  // 2. Objeto de ejemplo
  const usuarioAPI: PerfilUsuario = {
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
  function imprimirResumenUsuario({
    nombre,
    contacto: {
      email,
      redes: { twitter } // Desestructuración profunda: extrae solo 'twitter'
    },
    ubicacion: { ciudad } // Extrae 'ciudad' desde 'ubicacion'
  }: PerfilUsuario): void {
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
  
})()