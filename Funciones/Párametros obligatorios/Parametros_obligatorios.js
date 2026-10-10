(() => {
    const fullName = (firstName, lastName) => {
        if (!lastName)
            throw new Error("No existe el apellido en el nombre completo.");
        return `${firstName} ${lastName}`;
    };
    console.log(fullName("Tony", "Stark"));
    // Tony Stark
    // console.log( fullName("Tony") );
    // Uncaught Error: No existe el apellido en el nombre completo.
})();
export {};
