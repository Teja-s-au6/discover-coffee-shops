import Head from 'next/head'
import Image from 'next/image'
import Banner from '../Components/Banner'
import Card from '../Components/Card'

import styles from '../styles/Home.module.css'

import coffeeStoresData from "../data/coffee-stores.json"

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  }
}

export default function Home(props) {

  const handleBannerBtnClick = () => {
    console.log("hello")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Discover your local coffee shops!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText={"View stores nearby"} handleOnClick={handleBannerBtnClick} />
        <div className={styles.heroImage}>
          <Image  src="/static/hero-image.svg" width={600} height={300} alt="Hero Image"  />
        </div>
       { props.coffeeStores.length > 0 ? <h2 className={styles.heading2}>Toronto stores</h2> : null}
        <div className={styles.cardLayout}>
          {
            props.coffeeStores.map((store, index) => (
              <Card key={index} name={store.name} href={`/coffee-store/${store.id}`} imgUrl={store.imgUrl} className={styles.card} />
            ))
          }
        </div>
      </main>
    </div>
  )
}
