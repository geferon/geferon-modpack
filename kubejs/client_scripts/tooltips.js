ItemEvents.modifyTooltips(allthemods => {

    //AllTheModium

    allthemods.add(['allthemodium:allthemodium_ore', 'allthemodium:allthemodium_slate_ore'], [
        Text.of('§7Needs at least Netherite to be mined'),
        Text.of('§6Found in the Deep Dark Biome and will always spawn air exposed'),
        Text.of('§6Also found in the Deep Slate Layer of Mining Dimension')
    ])
    allthemods.add(['allthemodium:vibranium_ore', 'allthemodium:other_vibranium_ore'], [
        Text.of('§7Needs at least AllTheModium to be mined'),
        Text.of('§bFound in any Nether biome'),
        Text.of('§bAlso found in The Other')
    ])
    allthemods.add('allthemodium:unobtainium_ore', [
        Text.of('§7Needs at least Vibranium to be mined'),
        Text.of('§dFound in the End Highlands')
    ])

    allthemods.add('kubejs:silent_allthemodium_plate', [
        Text.of("§7§oIt's less... talkative now")
    ])
    allthemods.add('kubejs:silent_vibranium_plate', [
        Text.of("§7§oIt's less... talkative now")
    ])
    allthemods.add('kubejs:silent_unobtainium_plate', [
        Text.of("§7§oIt's less... talkative now")
    ])

    allthemods.add('allthemodium:allthemodium_ingot', [
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Allthemodium Plate]")
    ])
    allthemods.add('allthemodium:vibranium_ingot', [
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Vibranium Plate]")
    ])
    allthemods.add('allthemodium:unobtainium_ingot', [
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Unobtainium Plate]")
    ])


    allthemods.add('allthemodium:allthemodium_upgrade_smithing_template', [
        Text.of('§6Found in Suspicious Clay in Ancient Cities')
    ])
    allthemods.add('allthemodium:vibranium_upgrade_smithing_template', [
        Text.of('§bFound in Suspicious Soul Sand in Bastions')
    ])
    allthemods.add('allthemodium:unobtainium_upgrade_smithing_template', [
        Text.of('§dDropped by the Trial Spawner in the Library of the Dungeon within The Other')
    ])

    //Easy Villagers
    allthemods.add(['easy_villagers:trader', 'easy_villagers:auto_trader'], [
        Text.of("§aRight click with job site block to put it inside and allow trade restocking")
    ])

    // Botany Pot Sculk
    allthemods.add([
        "minecraft:sculk",
        "minecraft:sculk_sensor",
        "minecraft:sculk_catalyst",
        "minecraft:sculk_vein",
        "minecraft:sculk_shrieker",
        "deeperdarker:gloomy_sculk",
        "deeperdarker:gloomy_grass",
        "deeperdarker:glowing_flowers",
        "deeperdarker:sculk_vines",
        "deeperdarker:glowing_roots",
        "deeperdarker:bloom_berries",
        "deeperdarker:glowing_grass",
        "deeperdarker:sculk_tendrils"],
        [
            Text.of("§9In a Botany Pot: Requires a hoe enchanted with Silk Touch to be harvested")
        ])
})