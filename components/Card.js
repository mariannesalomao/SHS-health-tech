import Head from 'next/head'

const Card = ({ title, children }) => {
  return (
    <div className="div-card-poke">
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="container-card mx-auto max-w-xl pt-8 min-h-screen">
        { children }
      </main>
    </div>
  )
}

export default Card
