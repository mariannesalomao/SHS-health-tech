import Link from 'next/link'
import Card from '../../components/Card'

const Pokemon = ({ pokemon }) => {
  return (
    <Card title={ pokemon.name }>
      <h1 className="text-4xl mb-2 text-center capitalize h1-poke poke">
        { pokemon.id } - { pokemon.name }
      </h1>

      <div className="flex flex-col items-center bg-purple-50 rounded-md p-8 div-poke poke">
        <img src={ pokemon.image } alt={ pokemon.name } className="poke"/>
        <p>
          <span className="font-bold mr-2">Tamanho: </span>
          { pokemon.weight }
        </p>

        <p>
          <span className="font-bold mr-2">Altura: </span>
          { pokemon.height }
        </p>

        <h2 className="text-2xl mt-6 mb-2">Tipos</h2>
        { pokemon.types.map((type, index) => (
          <p key={index}>{type.type.name}</p>
        ))}
      </div>
      <p className="mt-10 text-center p-poke">
        <Link href="/">
          <a className="myButton">VOLTAR</a>
        </Link>
      </p>
    </Card>
  )
}

export const getServerSideProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const pokemon = await res.json()
  const padId = ('00' + id).slice(-3)
  pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padId}.png`

  return {
    props: { pokemon }
  }
}

export default Pokemon
