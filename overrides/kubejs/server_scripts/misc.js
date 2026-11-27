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
    event.recipes.gtceu.electric_blast_furnace("lapgc1")
    .itemInputs("4x gtceu:chromite_dust", "8x kubejs:sodium_carbonate_dust")
    .inputFluids(Fluid.of("gtceu:oxygen", 7000))
    .itemOutputs("2x gtceu:hematite_dust", "8x kubejs:sodium_chromate_dust")
    .outputFluids(Fluid.of("gtceu:carbon_dioxide", 8000))
    .EUt(120)
    .duration(300)
    .blastFurnaceTemp(1700)
    event.recipes.gtceu.chemical_reactor("lapgc2")
    .itemInputs("gtceu:sodium_sulfide_dust","gtceu:calcium_carbonate_dust")
    .itemOutputs("kubejs:sodium_carbonate_dust","kubejs:calcium_sulfide_dust")
    .EUt(30)
    .duration(40);
    event.recipes.gtceu.chemical_reactor("lapgc3")
    .itemInputs("gtceu:calcium_hydroxide_dust")
    .inputFluids(Fluid.of("gtceu:carbon_dioxide", 1000))
    .outputFluids(Fluid.of("minecraft:water", 1000))
    .itemOutputs("gtceu:calcium_carbonate_dust")
    .EUt(30)
    .duration(120)
    event.recipes.gtceu.chemical_reactor("lapgc4")
    .itemInputs("2x kubejs:sodium_chromate")
    .inputFluids(Fluid.of("gtceu:sulfuric_acid"), 1000)
    .itemOuputs("kubejs:sodium_dichromate","kubejs:sodium_sulfate")
    .outputFluids(Fluid.of("minecraft:water"), 1000)
    .EUt(60)
    .duration(50)
    event.recipes.gtceu.electric_blast_furnace("lapgc5")
    .inputItems("kubejs:sodium_dichromate","2x gtceu:carbon_dust")
    .outputItems("kubejs:chromium_trioxide", "kubejs:sodium_carbonate")
    .outputFluids(Fluid.of("gtceu:carbon_monoxide"), 1000)
    .EUt(120)
    .duration(90)
    .blastFurnaceTemp(1700)
    event.recipes.gtceu.chemical_reactor("lapgc6")
    .inputItems("2x gtceu:aluminium_dust", "kubejs:chromium_trioxide")
    .outputItems("2x gtceu:chromium_dust", "kubejs:alumina")
    .EUt(60)
    .duration(70)
    event.recipes.gtceu.chemical_reactor("lapgc7")
    .inputItems("3x gtceu:carbon_dust","kubejs:alumina")
    .outputItems("2x gtceu:aluminum_dust")
    .outputFluids(Fluid.of("gtceu:carbon_monoxide"), 3000)
    .EUt(60)
    .duration(40)
    event.recipes.gtceu.chemical_reactor("lapgc8")
    .inputItems("kubejs:sodium_sulfate","2x gtceu:carbon_dust")
    .outputItems("gtceu:sodium_sulfide_dust")
    .outputFluids(Fluid.of("gtceu:carbon_dioxide"), 2000)
    .EUt(30)
    .duration(40)
    event.recipes.gtceu.electrolyzer("lapgc9")
    .inputItems("kubejs:calcium_sulfide")
    .outputItems("gtceu:calcium_dust","gtceu:sulfur_dust")
    .EUt(30)
    .duration(32);
});
