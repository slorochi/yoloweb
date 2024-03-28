import Skyblog from "./skyblog";
import Head from 'next/head';
import Illuminati from './illumati';
import Accueil from "./accueil";
/* export default function MaPage() {
  return (
    <>
        <Skyblog/>
    <Illuminati />
    </> */


export default function Home() {
  return (
    <main className="flex h-auto flex-col snap-mandatory snap-y scroll-container">

      {/* SKYBLOG */}
      <section id="1" className="section snap-start h-screen flex w-full ">
        <Skyblog/>
      </section>
      {/* ACCUEIL */}
      {/* <section id="home" className="snap-start h-screen flex relative w-full ">
         <Accueil />
      </section> */}

      <section className="section snap-start overflow-hidden h-screen flex w-full "
      >
             <Illuminati /> 

      </section>
     
    </main>
  );
}
