import Link from "next/link";

async function getDetails(pokeId: string) {

    const res2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`,

    );

    const totalPokemonData = await res2.json();
    console.log(totalPokemonData)
    // console.log(totalPokemonData.results.length)
    const totalPokemon = totalPokemonData.results.length;
    // console.log(totalPokemon)
    // const data = await res.json();
    // console.log(data.results);
    // const newData = data.results;
    // console.log(newData)
    // console.log(newData[0])
    return totalPokemon as any[];
}
export default async function DetailedIndex() {
    // const pokes = await getDetails();
    let index = 0;
    // console.log(pokes);
    return (
        <div>
            <h1>Detailed View</h1>
            {/* <div>
                {pokes?.map((poke, index) => {
                    index += 1;
                    // console.log(index);
                    // console.log(poke.name)
                    return null;
                })}
            </div> */}
        </div>
    )
}
