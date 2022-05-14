import Card from '../components/Card'
import Link from 'next/link'

export default function Home({ pokemon }) {
  return (
    <Card title="NextJS Project Poke">
      <h1 className="text-4xl mb-8 text-center h1-index">NextJS Poke</h1>

      <ul className="ul-index">
        { pokemon.map((item, index) => (
          <li key={index} className="li-index">
            <Link href={`/pokemon/${index + 1}`}>
              <a className="border p-4 border-grey my-2 hover:shadow-md
                capitalize flex items-center text-lg bg-gray-200 rounded-md a-index">
                <img
                  src={ item.image }
                  alt={ item.name }
                  className="w-20 h-20 mr-3"
                />
                <span className="mr-2 font-bold">{ index + 1 }.</span>
                { item.name }
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
  const { results } = await res.json()

  const pokemon = results.map((poke, index) => {
    const padId = ('00' + (index + 1)).slice(-3)
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padId}.png`
    return { ...poke, image }
  })

  return {
    props: { pokemon }
  }
}
