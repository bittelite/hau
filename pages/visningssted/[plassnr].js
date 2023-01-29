import Link from "next/link";

function Visningssted({ post, result, media }) {

  return (
    <>
      <div className="grid justify-center items-center w-full min-h-screen" 
          style={{
          backgroundImage: `url(${result.hovedbilde})`,
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: 'auto',
          height: '65vh'
        }}>
            <h1 className="text-white text-center">
            {result.type}<br />
            <span className="text-8xl">{result.format}</span>
            </h1>
      </div>
      <div className="container mx-auto max-w-7xl">
      <div className='p-4 w-full left-0 bottom-0 absolute text-white'>
            <p className='float-right -mb-3'>
            </p>

        </div>
        <div className='wrapper'>
      <div className='grid'>
          <h2 className='text-center pt-40'>
          {result.plassnr} - {result.plassering}
          </h2>
        <div className='grid text-white'>
          <div className="grid grid-cols-2 gap-10 max-w-5xl mx-auto ">
            <p className="text-case bg-blue-800 p-10">Type:<br />
              <span className="font-bold text-2xl">{result.type}</span>
            </p>
            <p className="pb-2 pr-2 bg-blue-800 p-10">Format:<br />
              <span className="font-bold text-2xl">{result.format}</span>
            </p>
            <p className="pb-2 pr-2 bg-blue-800 p-10">Plassering:<br />
              <span className="font-bold text-2xl">{result.plassering}</span>
            </p>
            <p className="flex-1">Plassnr:<br />
              <span className="font-bold text-2xl">{result.plassnr}</span>
            </p>
          </div>
        </div>
        <div className='flex px-4 py-10 gap-2 flex-col sm:flex-row'>
          <div className='max-w-5xl mx-auto'>
            <p className='text-2xl font-medium pb-2'>
              type: 'Skjermnettverk',
              format: '55"',
              plassering: 'Alle soner',
              plassnr: 'AG-AKi-AKu',
              hovedbilde: 'https://reklameservice.no/wp-content/uploads/2022/10/HAU-AG8-scaled.jpg',
              aktiv: true,
              fritekst: ''
            </p>
            <div className="py-6"
              dangerouslySetInnerHTML={{__html: result.fritekst}}>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col justify-center items-center py-40">
            <Link href="/kontakt">
            <div className="w-48 rounded-full bg-black text-white hover:bg-white hover:text-black uppercase p-5 text-center text-xl">
              Kontakt oss
            </div>
            </Link>
          </div>
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