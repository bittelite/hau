import Image from "next/image";
import Link from "next/link";

export default function Kontakt({ }) {
  return (
    <>
      <div className="hidden">
        <h1>
          Flyplassreklame
        </h1>
      </div>
      <div className='wrapper'>
      <div className='grid'>
          <h2 className='text-center pt-40'>
            Kontakt oss
          </h2>
          <div className='grid justify-center items-center grid-cols-1 lg:grid-cols-3 gap-10 p-10 '>
              <div className="grid gap-5">
                <div className="bg-blue-200 h-auto">
                  <Image src={'https://reklameservice.no/wp-content/uploads/2022/11/Harald-scaled.jpg'} width={500} height={500} className="relative object-contain"/>
                </div>
                <h3 className="text-lg font-semibold text-slate-500">
                  Harald Fredly<br />
                  <span className="text-sm font-medium text-slate-700">
                    daglig leder
                  </span>
                </h3>
                <p className="text-sm font-medium text-slate-700">  
                  Telefon: +47 901 14 805<br />
                  E-post: harald@reklameservice.no
                </p>
            </div>
            <div className="grid gap-5">
                <div className="bg-blue-200 h-auto">
                  <Image src={'https://reklameservice.no/wp-content/uploads/2022/11/Tobias-Nosen-Sorvik-scaled.jpg'} width={500} height={500} className="object-contain"/>
                </div>
                <h3 className="text-lg font-semibold text-slate-500">
                  Tobias Nøsen Sørvik<br />
                  <span className="text-sm font-medium text-slate-700">
                    salgskonsulent
                  </span>
                </h3>
                <p className="text-sm font-medium text-slate-700">  
                  Telefon: +47 915 45 177<br />
                  E-post: tobias@reklameservice.no
                </p>
            </div>
            <div className="grid gap-5">
                <div className="bg-blue-200 h-auto">
                  <Image src={'https://reklameservice.no/wp-content/uploads/2022/11/Tone-Eidseter-scaled.jpg'} width={500} height={500} className="relative object-contain"/>
                </div>
                <h3 className="text-lg font-semibold text-slate-500">
                  Tone Eidseter<br />
                  <span className="text-sm font-medium text-slate-700">
                    prosjektkoordinator
                  </span>
                </h3>
                <p className="text-sm font-medium text-slate-700">  
                  Telefon: +47 922 50 432<br />
                  E-post: tone@reklameservice.no
                </p>
            </div> 
            <div className="grid gap-5">
                <div className="bg-blue-200 h-auto">
                  <Image src={'https://reklameservice.no/wp-content/uploads/2022/11/Lars-Fredly-scaled.jpg'} width={500} height={500} className="relative object-contain"/>
                </div>
                <h3 className="text-lg font-semibold text-slate-500">
                  Lars Fredly<br />
                  <span className="text-sm font-medium text-slate-700">
                  markeds- og utvikingssjef
                  </span>
                </h3>
                <p className="text-sm font-medium text-slate-700">  
                  Telefon: +47 975 41 354<br />
                  E-post: larsf@reklameservice.no
                </p>
            </div>
            <div className="grid gap-5">
                <div className="bg-blue-200 h-auto">
                  <Image src={'https://reklameservice.no/wp-content/uploads/2022/11/Zsolt-Veres-scaled.jpg'} width={500} height={500} className="relative object-contain"/>
                </div>
                <h3 className="text-lg font-semibold text-slate-500">
                  Zsolt Veres<br />
                  <span className="text-sm font-medium text-slate-700">
                  IT-tekniker
                  </span>
                </h3>
                <p className="text-sm font-medium text-slate-700">  
                  Telefon: +47 966 79 862<br />
                  E-post: zsolt@reklameservice.no
                </p>
            </div>
            <div className="grid gap-5">
                <div className="bg-blue-200 h-auto">
                  <Image src={'https://reklameservice.no/wp-content/uploads/2022/11/Fredrik-Hovde-scaled-1.jpg'} width={500} height={500} className="relative object-contain"/>
                </div>
                <h3 className="text-lg font-semibold text-slate-500">
                  Fredrik Hovde<br />
                  <span className="text-sm font-medium text-slate-700">
                  designer og utvikler
                  </span>
                </h3>
                <p className="text-sm font-medium text-slate-700">  
                  Telefon: +47 991 25 227<br />
                  E-post: fredrik.hovde@reklameservice.no
                </p>
            </div>
          </div>
          <div className="grid grid-flow-row md:grid-flow-col justify-center items-center py-40 gap-5">
            <Link href="https://reklameservice.no/kontakt-oss/">
            <div className="w-72 rounded-full border-2 border-black text-black hover:bg-black hover:text-white uppercase p-5 text-center text-xl">
              Alle kontaktpersoner
            </div>
            </Link>
            <Link href="/">
            <div className="w-72 rounded-full bg-black border-2 border-black text-white hover:bg-white hover:text-black uppercase p-5 text-center text-xl">
              Se mulighetene
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
