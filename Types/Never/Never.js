(() => {
    // const error = ( msg: string ):never => {
    //   throw new Error( msg )
    // }
    // error("Este es un error esperado.")
    const error2 = (msg) => {
        if (typeof msg !== "number")
            throw new Error(msg);
        return msg;
    };
    console.log(error2(27));
    // 27
    error2("Este es un segundo error esperado.");
    // Uncaught Error: Este es un segundo error esperado.
    console.log(error2(28));
})();
export {};
