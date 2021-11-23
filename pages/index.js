import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header/>
      {/* banner */}
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl text-gray-700 font-semibold pb-5'>Explore nearby</h2>
          {/*pull some data from a server --api endpoints*/}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(item => (
              <SmallCard key={item.location} data={item}/>
            ))}
          </div>
        </section>

        <section className=''>
          <h2 className='text-4xl font-medium text-gray-700 py-8'>Live Anywhere</h2>
          <div className='flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {
              cardsData?.map(item => (
                <MediumCard key={item.img} data={item}/>
              ))
            }
          </div>
        </section>

        <LargeCard 
        img='https://links.papareact.com/4cj'
        title='The Greatest Outdors'
        description='Wishlists created by Airbnb'
        buttonText='Get Inspired'
        />
      </main>
      {/*footer*/}
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://links.papareact.com/pyp')
  const exploreData = await res.json();

  const respose = await fetch('https://links.papareact.com/zp1')
  const cardsData = await respose.json();
  return{
    props: {
      exploreData,
      cardsData,
    }
  }
}
