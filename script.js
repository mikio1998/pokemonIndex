'use strict'
// Please don't delete the 'use strict' line above


// データ の形->
// [
//  {  //　ポケモン
//      キー : 色々と。。
//      キー : [abcdefg]
//      キー : [abcdefg]
//      キー : [ {xyz} ]
//   }            
// ]



console.log(allPokemon);

function getNames(allPokemon) {
    const arr = []
    allPokemon.forEach(element => arr.push(element.Name))
    return arr
}

console.log(getNames(allPokemon));

function getPokemonByName(poke) {
    for (const i in allPokemon) {
        if (allPokemon[i].Name === poke) {
            return allPokemon[i]
        }
    }
}

console.log(getPokemonByName("Diglett"));

function getAvgMaxCP() {
    let totalMaxCP = 0

    for (const i in allPokemon) {
        totalMaxCP += allPokemon[i].MaxCP
    }
    return totalMaxCP/(allPokemon.length)
}

console.log(getAvgMaxCP());

function getResistentPokemon(attack) {
    let resistant = []

    for (const i in allPokemon) {

        if (allPokemon[i].Resistant.includes(attack)) {
            resistant.push(allPokemon[i])
        }
    }
    return resistant
}

console.log(getResistentPokemon("Fire"));

function getWeaknessCounts() {
    let weakObject = {
        Fire: 0,
        Ice: 0,
        Flying: 0,
        Psychic: 0,
        Water: 0,
        Ground: 0,
        Rock: 0,
        Electric: 0,
        Grass: 0,
        Fighting: 0,
        Poison: 0,
        Steel: 0,
        Bug: 0
    }


    for (const pokemon in allPokemon) { // for pokemon

        for (const weaknessType in allPokemon[pokemon].Weaknesses) {  // for it's weaknesses

            // +1 for every weakness that pokemon has.
            // weakness が出たらそれに　+ 1 

            // pokemon -> weakness -> add one
            weakObject[allPokemon[pokemon].Weaknesses[weaknessType]] = weakObject[allPokemon[pokemon].Weaknesses[weaknessType]] + 1
        }        
    }
    return weakObject
}

console.log(getWeaknessCounts());



