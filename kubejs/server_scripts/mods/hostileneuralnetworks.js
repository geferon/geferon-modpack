ServerEvents.recipes(allthemods => {
    allthemods.shaped('minecraft:dragon_head',
        [
            'AAA',
            'BPB',
            'AAA'
        ], {
        A: 'hostilenetworks:end_prediction',
        P: 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither"]',
        B: 'minecraft:dragon_breath'
    })
})