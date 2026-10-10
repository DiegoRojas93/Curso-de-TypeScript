(() => {
    const fullName = (firstName, lastName) => `${firstName} ${lastName || ""}`;
    console.log(fullName("Tony", "Stark"));
    // Tony Stark
    console.log(fullName("Tony"));
    // Tony
})();
export {};
