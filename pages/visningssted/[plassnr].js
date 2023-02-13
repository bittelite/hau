import Image from "next/image";
import Link from "next/link";

function Visningssted({ post, result, media }) {

  return (
    <>
      <div className="grid justify-center items-center w-full min-h-screen hode" 
          style={{
          backgroundImage: `url(${result.hovedbilde})`,
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: 'auto',
          height: '65vh'
        }}>
            <h1 className="text-white text-center">
            <span className=" text-6xl"></span><br />
            <span className="text-5xl md:text-8xl">{result.type}</span>
            </h1>
      </div>
      <div className="container mx-auto max-w-7xl">
        <div className='wrapper'>
      <div className='grid'>
          <div className="ingress px-10 xl:px-0 pt-28 sm:py-20 lg:py-40"
                dangerouslySetInnerHTML={{__html: result.fritekst}}>
          </div>
          <div className='grid justify-center items-center grid-cols-1 md:grid-cols-3 gap-10 p-10 xl:p-0 uppercase'>
            <div className="text-white bg-blue-800 h-32 p-10 bottom-0">
            Plassnr:<br />  {result.plassnr}
            </div>
            <div className="text-white bg-blue-800 h-32 p-10 bottom-0">
            Område:<br />  {result.plassering}
            </div>
            <div className="text-white bg-blue-800 h-32 p-10 bottom-0">
            Format:<br />  {result.format}
            </div>
          </div>
          <Image src={result.hovedbilde} width={1300} height={800} className="w-full py-40"/>
          <div className="grid grid-flow-col justify-center items-center py-32">
            <Link href="/kontakt">
            <div className="w-64 rounded-full bg-black text-white hover:bg-white hover:text-black uppercase p-5 text-center text-xl">
              Kontakt oss for annonsering
            </div>
            </Link>
          </div>
          <div className="text-center hidden">Plass flere bilder og tekst om reklametype</div>
        </div>
        </div>
      </div>
      </>
  );
} 

export async function getStaticPaths() {
  const res = await fetch('https://reklameservice.no/wp-json/wp/v2/visningssteder/103723');
  const posts = await res.json();
  const paths = posts.acf.flater.map((post) => ({
    params: { plassnr: post.plassnr.toString() },
  }))
  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://reklameservice.no/wp-json/wp/v2/visningssteder/103723?acf_format=standard`);
  const post = await res.json();
  const res2 = await fetch(`https://reklameservice.no/wp-json/wp/v2/media?parent=103723`);
  const media = await res2.json()
  const result = post.acf.flater.find(flate => flate.plassnr === params.plassnr);
  console.log(params.plassnr);
  console.log(result);
  return {props: {post, result, media}, revalidate: 10,};
}

export default Visningssted