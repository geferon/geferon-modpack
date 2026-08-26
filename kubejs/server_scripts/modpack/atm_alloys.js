ServerEvents.recipes(allthemods => {
    allthemods.replaceInput(
        { id: 'modern_industrialization:upgrade/packer/quantum/sword' },
        'minecraft:netherite_sword',
        'allthemodium:alloy_paxel'
    )

    function energizing(result, inputs, energy, id) {
        let recipe = {
            "type": "powah:energizing",
            "energy": energy,
            "ingredients": [],
            "result": {
                "count": result.count || 1,
                "id": result.item
            }
        };

        inputs.forEach(input => {

            let ingredients = {}

            if (input.tag) {
                ingredients.tag = input.tag;
            } else {
                ingredients.item = input.item;
            }

            recipe.ingredients.push(ingredients);
        });

        allthemods.custom(recipe).id(`kubejs:energizing/${id}`);
    }

    //Vibranium - ATM Alloy
    energizing(
        { item: 'allthemodium:vibranium_allthemodium_alloy_ingot' },
        [
            { tag: 'c:ingots/allthemodium' }, { item: 'allthemodium:piglich_heart' },
            { item: 'allthecompressed:nitro_crystal_block_1x' },
            { item: 'allthemodium:piglich_heart' },
            { tag: 'c:ingots/vibranium' }],
        1000000000,
        'vibranium_allthemodium_alloy_ingot'
    );
    energizing(
        { item: 'allthemodium:vibranium_allthemodium_alloy_block' },
        [
            { tag: 'c:storage_blocks/allthemodium' },
            { item: 'allthemodium:piglich_heart_block' },
            { item: 'allthecompressed:nitro_crystal_block_2x' },
            { item: 'allthemodium:piglich_heart_block' },
            { tag: 'c:storage_blocks/vibranium' }],
        9000000000,
        'vibranium_allthemodium_alloy_block'
    );
    for (let i = 3; i < 10; i++) {
        energizing(
            { item: `allthecompressed:vibranium_allthemodium_alloy_block_${i - 2}x` },
            [
                { item: `allthecompressed:allthemodium_block_${i - 2}x` },
                { item: `allthecompressed:piglich_heart_block_${i - 2}x` },
                { item: `allthecompressed:nitro_crystal_block_${i}x` },
                { item: `allthecompressed:piglich_heart_block_${i - 2}x` },
                { item: `allthecompressed:vibranium_block_${i - 2}x` }],
            9000000000 * Math.pow(3, i - 2),
            `vibranium_allthemodium_alloy_block_${i - 2}x`
        );
    }

    // input[], input_fluid, processing_time, output, outputfluid
    let dissolution_chamber = allthemods.recipes.industrialforegoing.dissolution_chamber

    //Unobtainium - Vibranium Alloy

    dissolution_chamber(
        [
            'industrialforegoing:pink_slime',
            '#c:ingots/vibranium',
            'industrialforegoing:pink_slime',
            'allthemodium:piglich_heart',
            'allthemodium:piglich_heart',
            'industrialforegoing:pink_slime',
            '#c:ingots/unobtainium',
            'industrialforegoing:pink_slime'
        ],
        "100x allthemodium:soul_lava",
        200,
        'allthemodium:unobtainium_vibranium_alloy_ingot'
    )

    dissolution_chamber(
        [
            'industrialforegoing:pink_slime_block',
            '#c:storage_blocks/vibranium',
            'industrialforegoing:pink_slime_block',
            'allthemodium:piglich_heart_block',
            'allthemodium:piglich_heart_block',
            'industrialforegoing:pink_slime_block',
            '#c:storage_blocks/unobtainium',
            'industrialforegoing:pink_slime_block'
        ],
        "900x allthemodium:soul_lava",
        200,
        'allthemodium:unobtainium_vibranium_alloy_block'
    )
})