import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Contact from '../components/Contact'
import Coverage from '../components/Coverage'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Plans from '../components/Plans'
import Reasons from '../components/Reasons'
import TopAdvertisement from '../components/TopAdvertisement'

export interface AccordionItems{
  title: string,
  text: string,
}

interface Props {
  accordionItems: AccordionItems[]
}

function Home({ accordionItems }:Props){

  return (
    <>
      <Head>        
        <title>SegurosPromo</title>
      </Head>

      <TopAdvertisement />
      <Header />
      <Hero />
      <Plans />
      <Coverage />
      <Reasons accordionItems={accordionItems} />
      <Contact />
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {

  const res = await fetch('https://stark-cove-48986.herokuapp.com/seguros/motivos');
  const accordionItems = await res.json();

  if(!accordionItems){
    return {
      notFound: true,
    }
  }

  return {
    props: {
      accordionItems
    }, 
  }
}
