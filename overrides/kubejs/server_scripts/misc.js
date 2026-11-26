ServerEvents.recipes(event => {
    event.custom({
        type: "botania:runic_altar",
        ingredients: [
            { item: "minecraft:pumpkin" },
            { tag: "forge:ingots/bronze" },
            { item: "kubejs:cheesite_wedge" }
        ],
        mana: 10000,
        output: { item: "kubejs:pumpkinite_ingot" }
    })
});
