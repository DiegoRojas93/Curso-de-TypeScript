(() => {
    const fullName = (firstName = "Diego", lastName, isUpper) => {
        return isUpper
            ? `${firstName} ${lastName || ""}`.toUpperCase()
            : `${firstName} ${lastName || ""}`;
    };
    console.log(fullName("Tony", "Stark"));
    // Tony Stark
    console.log(fullName("Tony"));
    // Tony
    console.log(fullName());
    // Diego
    console.log(fullName("Tony", "Stark", true));
    // TONY STARK
    console.log(fullName("Tony", undefined, true));
    // TONY
})();
export {};
