ServerEvents.tags('block', allthemods => {
    // Waystones
    allthemods.add('ftbchunks:interact_whitelist', ['@waystones'])

    // Extreme Reactors
    allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block')

    // Essence Blocks
    allthemods.add('c:storage_blocks/air_essence', 'kubejs:air_essence_block')
    allthemods.add('c:storage_blocks/earth_essence', 'kubejs:earth_essence_block')
    allthemods.add('c:storage_blocks/fire_essence', 'kubejs:fire_essence_block')
    allthemods.add('c:storage_blocks/water_essence', 'kubejs:water_essence_block')
    allthemods.add('c:storage_blocks', [
        '#c:storage_blocks/air_essence',
        '#c:storage_blocks/earth_essence',
        '#c:storage_blocks/fire_essence',
        '#c:storage_blocks/water_essence'
    ])

    //Entangled
    allthemods.add('entangled:invalid_targets',
        ['@ae2', '@advancedae', '@extendedae', '@megacells', '@appmek']
    )

    // Fix Jank with Feral Flares and Enchanting
    allthemods.add("minecraft:replaceable", "torchmaster:invisible_light")
})

ServerEvents.tags('fluid', allthemods => {
    // Pneumaticcraft
    allthemods.add('c:ethanol', 'pneumaticcraft:ethanol')
    allthemods.add('c:crude_oil', 'oritech:still_oil')
})

ServerEvents.tags('item', allthemods => {
    // Extreme Reactors (using config/almostunified/tags.json)
    // allthemods.add('c:ingots/yellorium', 'alltheores:uranium_ingot')
    allthemods.add('c:storage_blocks/raw_yellorium', 'bigreactors:raw_yellorium_block')

    // Tiny Coal
    allthemods.add('atm10:tiny_coals', [
        'utilitarian:tiny_coal',
    ])
    allthemods.add('atm10:tiny_charcoals', [
        'utilitarian:tiny_charcoal',
    ])

    // Allthemodium Alloy Dusts
    allthemods.add('c:dusts/unobtainium_allthemodium_alloy', 'allthemodium:unobtainium_allthemodium_alloy_dust')
    allthemods.add('c:dusts/unobtainium_vibranium_alloy', 'allthemodium:unobtainium_vibranium_alloy_dust')
    allthemods.add('c:dusts/vibranium_allthemodium_alloy', 'allthemodium:vibranium_allthemodium_alloy_dust')
    allthemods.add('c:dusts', [
        '#c:dusts/unobtainium_allthemodium_alloy',
        '#c:dusts/unobtainium_vibranium_alloy',
        '#c:dusts/vibranium_allthemodium_alloy',
    ])

    allthemods.add('c:storage_blocks', '#c:storage_blocks/raw_crimson_iron')
    allthemods.add('c:storage_blocks', '#c:storage_blocks/raw_azure_silver')

    // Essence Blocks
    allthemods.add('c:storage_blocks/air_essence', 'kubejs:air_essence_block')
    allthemods.add('c:storage_blocks/earth_essence', 'kubejs:earth_essence_block')
    allthemods.add('c:storage_blocks/fire_essence', 'kubejs:fire_essence_block')
    allthemods.add('c:storage_blocks/water_essence', 'kubejs:water_essence_block')
    allthemods.add('c:storage_blocks', [
        '#c:storage_blocks/air_essence',
        '#c:storage_blocks/earth_essence',
        '#c:storage_blocks/fire_essence',
        '#c:storage_blocks/water_essence'
    ])

    // Bibliocraft compat
    // More books
    allthemods.add('minecraft:bookshelf_books', 'patchouli:guide_book')
    allthemods.add('minecraft:bookshelf_books', 'ae2:guide')
    allthemods.add('minecraft:bookshelf_books', 'powah:book')

    // FTBChunks
    allthemods.add("ftbchunks:right_click_whitelist", ["#cobblemon:poke_balls"])

    allthemods.add('c:gems/rose_quartz', 'create:rose_quartz')

    // ZA Mega Stones
    allthemods.add("zamega:mega_stone", ["zamega:darkranite",
        "zamega:magearnite",
        "zamega:meganiumite",
        "zamega:starminite",
        "zamega:excadrite",
        "zamega:garchompitez",
        "zamega:greninjite",
        "zamega:pyroarite",
        "zamega:baxcalibrite",
        "zamega:emboarite",
        "zamega:malamarite",
        "zamega:golisopite",
        "zamega:zygardite",
        "zamega:tatsugirinite",
        "zamega:barbaracite",
        "zamega:clefablite",
        "zamega:delphoxite",
        "zamega:dragalgite",
        "zamega:chimechite",
        "zamega:falinksite",
        "zamega:raichunitex",
        "zamega:chesnaughtite",
        "zamega:feraligite",
        "zamega:chandelurite",
        "zamega:meowsticite",
        "zamega:zeraorite",
        "zamega:glimmoranite",
        "zamega:drampanite",
        "zamega:hawluchanite",
        "zamega:eelektrossite",
        "zamega:lucarionitez",
        "zamega:golurkite",
        "zamega:floettite",
        "zamega:heatranite",
        "zamega:scraftinite",
        "zamega:dragoninite",
        "zamega:froslassite",
        "zamega:victreebelite",
        "zamega:absolitez",
        "zamega:scovillainite",
        "zamega:staraptite",
        "zamega:skarmorite",
        "zamega:scolipite",
        "zamega:raichunitey",
        "zamega:crabominite"])
})

ServerEvents.tags('entity_type', allthemods => {
    allthemods.add('c:bosses', [
        "allthemodium:piglich",
        "#neoforge:bosses"
    ])

    allthemods.add('allthemods:jank_blacklist', [
        'artifacts:mimic',
        'create:package',
        'mekanism:robit',
        '#c:bosses',
        '@cobblemon',
        '@rctmod'
    ])

    allthemods.add('enderio:soul_vial_blacklist', '#allthemods:jank_blacklist')
    allthemods.add('industrialforegoing:mob_duplicator_blacklist', '#allthemods:jank_blacklist')
    allthemods.add('industrialforegoing:mob_crusher_blacklist', '#allthemods:jank_blacklist')
    // allthemods.add('mob_grinding_utils:no_swab', '#allthemods:jank_blacklist')
    // allthemods.add('mob_grinding_utils:no_spawn', '#allthemods:jank_blacklist')
    allthemods.add('enderio:spawner_blacklist', '#allthemods:jank_blacklist')
    allthemods.add('oritech:spawner_blacklist', '#allthemods:jank_blacklist')
    allthemods.add("c:capturing_not_supported", ['@cobblemon', '@rctmod'])
    //allthemods.add("industrialforegoing:mob_imprisonment_tool_blacklist", "#c:capturing_not_supported")

    allthemods.add("ftbchunks:entity_interact_whitelist", ["rctmod:trainer", "rctmod:trainer_association"])
});

ServerEvents.tags('worldgen/structure', allthemods => {
    allthemods.remove("villagesandpillages:village_witch", ["villagesandpillages:village_witch"])
});

ServerEvents.tags('raid:boss', allthemods => {
    allthemods.remove("cobblemonraiddens:avalugg_hisuian", ["cobblemonraiddens:avalugg_hisuian"])
    allthemods.remove("cobblemonraiddens:arcanine_hisuian", ["cobblemonraiddens:arcanine_hisuian"])
    allthemods.remove("cobblemonraiddens:growlithe_hisuian", ["cobblemonraiddens:growlithe_hisuian"])
});

ServerEvents.tags('block_entity_type', allthemods => {
    // Apoth Enchanting
    allthemods.add('packingtape:blacklist/problematic', ["extrastorage:block_16384k_fluid", "extrastorage:block_65536k_fluid", "extrastorage:block_262144k_fluid", "extrastorage:block_1048576k_fluid"]);
});

ServerEvents.tags('item', allthemods => {
    allthemods.remove("minecraft:head_armor", ["pkgbadges:alians_scraf_helmet"])
    allthemods.add("minecraft:head_armor", ["pkgbadges:alians_scraf"])
    allthemods.add('cobblemon:recipe_filters/bait_seasoning', ["allthemodium:allthemodium_apple", "allthemodium:allthemodium_carrot"]);
    allthemods.remove('minecraft:enchantable/crossbow', ["allthemodium:unobtainium_crossbow"])
    allthemods.remove('minecraft:enchantable/bow', ["allthemodium:allthemodium_bow"])
    allthemods.remove('minecraft:enchantable/equippable', ["allthemodium:vibranium_shield"])
    allthemods.remove("c:tools/bow", ["allthemodium:allthemodium_bow"])
    allthemods.remove("c:tools/crossbow", ["allthemodium:unobtainium_crossbow"])
    allthemods.remove("c:tools/shield", ["allthemodium:vibranium_shield"])
    allthemods.add("mega_showdown:mega_stone", ["mega_showdown:abomasite"])
})

ServerEvents.tags('block', allthemods => {
    allthemods.add('c:relocation_not_supported', ["cobblemon:campfire_pot_black", "cobblemon:campfire_pot_blue", "cobblemon:campfire_pot_green", "cobblemon:campfire_pot_pink", "cobblemon:campfire_pot_red", "cobblemon:campfire_pot_white", "cobblemon:campfire_pot_yellow", "cobblemon:pc", "cobblemon:healing_machine", "simpletms:machine_tm", "cobblemon:display_case"]);
})

ServerEvents.tags('worldgen/biome', allthemods => {
    allthemods.remove('pneumaticcraft:has_surface_oil_lakes', ["#minecraft:is_overworld"]);
    allthemods.add('pneumaticcraft:has_surface_oil_lakes', ["#c:is_beach"]);
});

ServerEvents.generateData('last', allthemons => {
    allthemons.json("industrialforegoing:tags/entity_type/mob_imprisonment_tool_blacklist.json", {
        "values": ["#c:capturing_not_supported"],
        "remove": [
            "cobblemon:pokemon"
        ]
    })
})