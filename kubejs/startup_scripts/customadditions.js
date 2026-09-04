const $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

StartupEvents.registry('block', allthemods => {
    allthemods.create('magical_soil').displayName('§bMagical Soil').grassSoundType().mapColor('grass').hardness(0.6);

    allthemods.create('air_essence_block').displayName('Air Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('earth_essence_block').displayName('Earth Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('fire_essence_block').displayName('Fire Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('water_essence_block').displayName('Water Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();

    allthemods.create('blaze_powder_block').displayName('Blaze Powder Block').stoneSoundType().mapColor('stone').hardness(1);
    // allthemods.create('blaze_block').displayName('Blaze Block').stoneSoundType().mapColor('stone').hardness(1);
    allthemods.create('saltpeter_block').displayName('Saltpeter Block').stoneSoundType().mapColor('stone').hardness(1);
})

StartupEvents.registry('item', allthemods => {
    allthemods.create('silent_allthemodium_plate').displayName('Silent Allthemodium Plate').glow(true);
    allthemods.create('silent_vibranium_plate').displayName('Silent Vibranium Plate').glow(true);
    allthemods.create('silent_unobtainium_plate').displayName('Silent Unobtainium Plate').glow(true);

    allthemods.create("allthemodium_solar_sail_package").displayName("Allthemodium Solar Sail Package").component("dysoncubeproject:sphere_component_solar_sail", Java.cast("java.lang.Integer", 64))
    allthemods.create("allthemodium_beam_package").displayName("Allthemodium Beam Package").component("dysoncubeproject:sphere_component_beam", Java.cast("java.lang.Integer", 16))
})

StartupEvents.modifyCreativeTab('ironfurnaces:ironfurnaces_tab', allthemods => {
    allthemods.add('ironfurnaces:allthemodium_furnace')
    allthemods.add('ironfurnaces:vibranium_furnace')
    allthemods.add('ironfurnaces:unobtainium_furnace')
    allthemods.add('ironfurnaces:upgrade_allthemodium')
    allthemods.add('ironfurnaces:upgrade_vibranium')
    allthemods.add('ironfurnaces:upgrade_unobtainium')
})

StartupEvents.postInit((allthemods) => {
    $BuiltInRegistries.BLOCK.addAlias("kubejs:blaze_block", "allthecompressed:blaze_rod_block")
    $BuiltInRegistries.ITEM.addAlias("kubejs:blaze_block", "allthecompressed:blaze_rod_block")

    // EnderIO removed those
    $BuiltInRegistries.ITEM.addAlias("enderio:wood_gear", "minecraft:oak_planks")
    $BuiltInRegistries.ITEM.addAlias("enderio:stone_gear", "minecraft:cobblestone")

    // MI removed those deepslate
    $BuiltInRegistries.ITEM.addAlias("modern_industrialization:deepslate_iridium_ore", "modern_industrialization:iridium_ore")
    $BuiltInRegistries.BLOCK.addAlias("modern_industrialization:deepslate_iridium_ore", "modern_industrialization:iridium_ore")
})