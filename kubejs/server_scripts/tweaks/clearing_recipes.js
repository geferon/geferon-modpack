
ServerEvents.recipes(allthemods => {
    // Powah Energizing Rod Clearing
    const powahclearing = [
        "starter",
        "basic",
        "hardened",
        "blazing",
        "niotic",
        "spirited",
        "nitro"
    ]
    powahclearing.forEach((name) => {
        let material = Item.of(`powah:energizing_rod_${name}`)

        allthemods.shapeless(material, [material]).id(`allthemods:clear_powah/energizing_rod_${name}`)
    })
})