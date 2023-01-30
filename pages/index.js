import Image from 'next/image'
import KartHAU from '../components/SVG/KartHAU';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://reklameservice.no/wp-json/wp/v2/visningssteder/103723?acf_format=standard');
  const mainRes = await res.json();
  const res2 = await fetch(`https://reklameservice.no/wp-json/wp/v2/visningssteder/103723?_embed`);
  const media = await res2.json();

  return {
    props: { 
      mainList: mainRes,
      media,
    },
    revalidate: 10,
  }
}

export default function Home({ mainList, media }) {
  return (
    <>
      <div className="grid justify-center items-center w-full min-h-screen" 
          style={{
          backgroundImage: `url(${media._embedded['wp:featuredmedia'][0].source_url})`,
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: 'auto',
          height: '65vh'
        }}>
        <h1>
          Flyplassreklame
        </h1>
      </div>
      <div className='wrapper'>
        <div>
          <p className='ingress px-10 xl:px-0 pt-28 sm:py-20 lg:py-40'>
            {mainList.acf.beskrivelse.ingress}
          </p>
        </div>
        <div className='xl:grid justify-center items-center w-full hidden'>
          <h2 className='text-center pb-10'>
            Kart
          </h2>
          <KartHAU />
        </div>
        <div className='grid'>
          <h2 className='text-center pt-40'>
            Plassoversikt
          </h2>
          <div className='grid justify-center items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-10 uppercase'>
            {mainList.acf.flater.map(post => (
              <div key={post.plassnr} className="text-white backdrop-brightness-50 hover:backdrop-brightness-0 h-96 p-10 bottom-0">
                <Link href={ '/visningssted/' + post.plassnr } key={post.plassnr}>
                <div className="">
                <Image src={post.hovedbilde} fill className="object-cover brightness-50 hover:brightness-100"/>
                </div>
                <div className="flex absolute bottom-10">
                  <h3 className="flex-auto text-lg">
                  {post.type} - {post.plassering}
                  </h3>
                </div>
                <div className="text-lg absolute top-10 right-10">
                {post.plassnr}
                </div>
                <div className="">
                  <Image src={'/gfx/pil.png'} width={15} height={15} className="rounded-full bg-white text-black absolute bottom-10 right-10 w-9 h-9 p-3 hover:w-10 hover:h-10"/>
                </div>
                </Link>
              </div>
              ))}
            </div>
        </div>
      </div>
    </>
  )
}
