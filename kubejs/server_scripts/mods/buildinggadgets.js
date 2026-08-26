ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'buildinggadgets2:gadget_building' })
    allthemods.shaped('buildinggadgets2:gadget_building', ['IRI', 'DLD', 'IAI'], {
        I: '#c:ingots/iron',
        R: '#c:dusts/redstone',
        L: 'minecraft:lapis_lazuli',
        D: 'alltheores:diamond_gear',
        A: '#c:nuggets/allthemodium'
    })
})

ServerEvents.tags('block', allthemods => {
    //Deny blocks
    allthemods.add('buildinggadgets2:deny', ['enderstorage:ender_tank', 'enderstorage:ender_chest'])
})