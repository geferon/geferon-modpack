ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'minecraft:cake' })

    allthemods.shaped(
        Item.of('minecraft:sculk', 1), // arg 1: output
        [
            'OOO',
            'OOO',
            'OOO'
        ],
        {
            O: 'minecraft:echo_shard',
        }
    )

    allthemods.shaped(
        Item.of('minecraft:sculk_sensor', 1), // arg 1: output
        [
            '   ',
            'VCV',
            'SSS'
        ],
        {
            V: 'minecraft:twisting_vines',
            C: 'minecraft:comparator',
            S: 'minecraft:sculk',
        }
    )
})

ServerEvents.tags('item', event => {
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:snowball')
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:string')
    event.add('megacells:compression_overrides', 'minecraft:string')
    event.add('megacells:compression_overrides', 'minecraft:honeycomb')
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:honeycomb')
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:magma_cream')
})