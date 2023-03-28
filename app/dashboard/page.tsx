import Link from "next/link";

async function getPokemonName() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`);
    const totalPokemonData = await res.json();
    const totalPokemon = totalPokemonData.results.length;
    console.log("Total ", totalPokemon)
    const newData = totalPokemonData.results;

    return newData as any[];
}

async function getPokemon(index: number) {

    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const currentPokemonData = await url.json();
    return currentPokemonData as any[];
}


export default async function Dashboard() {
    let index = 0;
    const pokes = await getPokemonName();

    // console.log(pokes)
    // console.log("pokes",pokes);
    // console.log("Name ", pokes.species.name)
    return (
        <div>
            <h1>Pokemon Data Below</h1>
            <div>
                {pokes?.map((poke, index) => {
                    index += 1;
                    // let test = 0;
                    // console.log(current_poke.base_experience)
                    console.log(index);
                    console.log(poke.name)
                    // setCurrentPoke(index).then(x => {
                    //     // console.log('x', x);
                    //     // let test = x;
                    //     // <Pokemon/>;
                    //     return x as number;
                    // });;
                    // console.log("outer exp", test)
                    return <Pokemon  key={index} name={poke.name} index={index} />;

                })}
            </div>
        </div>
    )
}
// async function setCurrentPoke(index: any) {
//     let current_poke = await getPokemon(index);
//     let exp = await current_poke.base_experience;
//     // console.log("set exp", exp)
//     // console.log(current_poke.base_experience)
//     // console.log("base_experience", current_poke.base_experience)
//     // const base_experience = current_poke.base_experience
//     return exp;
// }
function Pokemon({ index, name, base_experience }: any) {
    name = name.toUpperCase()
    console.log("new", base_experience)
    // console.log(name.toUpperCase())
    return (
        <div>
            <Link href={`/Dashboard/${index}`}>
                <div className='flex flex-row'>
                    <div
                        className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                        <div className="p-6">
                            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">NAME : {name}</h5>
                            <h4 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">BASE EXPERIENCE : {base_experience}</h4>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">

                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}