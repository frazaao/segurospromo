import type { GetStaticProps } from 'next'
import Head from 'next/head'

import { client } from "../lib/apollo";
import { query } from '../graphql/getLandingPage';

import Contact from '../components/Contact'
import Coverage from '../components/Coverage'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Plans from '../components/Plans'
import Reasons from '../components/Reasons'
import TopAdvertisement from '../components/TopAdvertisement'
import { LandingPageProps } from '../@types/landingPage';

export interface AccordionItems{
  title: string,
  text: string,
}

interface Props {
  accordionItems: AccordionItems[],
  landingPageData: LandingPageProps,
}

function Home({ accordionItems, landingPageData }:Props){

  return (
    <>
      <Head>        
        <title>SegurosPromo</title>
      </Head>

      <TopAdvertisement />
      <Header />
      <Hero data={landingPageData.Hero} />
      <Plans data={landingPageData.List} />
      <Coverage data={landingPageData.Coverage} />
      <Reasons data={landingPageData.Reasons} accordionItems={accordionItems} />
      <Contact data={landingPageData.Contact} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps  = async () => {

  const res = await fetch('https://stark-cove-48986.herokuapp.com/seguros/motivos');
  const accordionItems = await res.json();

  const { data } = await client.query({ query })

  const { landingPage } = await data;

  const landingPageData = landingPage.data.attributes;

  if(!landingPageData){
    return {
      notFound: true,
    }
  }

  if(!accordionItems){
    return {
      notFound: true,
    }
  }

  return {
    props: {
      accordionItems,
      landingPageData
    }, 
  }
}
