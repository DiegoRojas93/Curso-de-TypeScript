(() => {
    const HERO = "Flash";
    function returnName() {
        return HERO;
    }
    console.log(returnName());
    // Flash
    const activateBatiSignal = () => "Bati señal activada!";
    console.log(activateBatiSignal(), typeof activateBatiSignal());
    // Bati señal activada! string
})();
export {};
