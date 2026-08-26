let stews = [
    "biomeswevegone:white_puffball_stew"
]

ItemEvents.modification(allthemods => {
    stews.forEach(stew => {
        allthemods.modify(stew, item => {
            item.maxStackSize = 16
        })
    })
})