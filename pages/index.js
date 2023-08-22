import Image from 'next/image'
import Head from "next/head"
import Header from '@/components/Header'
import Nav from '@/components/Nav'



export default function Home() {
  return (
    <div>
    <main>
      
      <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header/>
      <Nav/>
      </div>
      
    
    </main>
    </div>
  )
}
