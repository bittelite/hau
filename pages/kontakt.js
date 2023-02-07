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
                  <Image src={'https://reklameservice.no/wp-content/uploads/2022/11/Tobias-Nosen-Sorvik-scaled.jpg'} width={500} height={500} className="object-contain"/>
                </div>
                <h3 className="text-lg font-semibold text-slate-500">
                  Tobias Nøsen Sørvik<br />
                  <span className="text-sm font-medium text-slate-700">
                    Salgskonsulent
                  </span>
                </h3>
                <p className="text-sm font-medium text-slate-700">  
                  Telefon: +47 915 45 177<br />
                  E-post: tobias@reklameservice.no
                </p>
            </div>
            <div className="grid gap-5">
                <div className="bg-blue-200 max-h-96">
                  <Image src={'https://reklameservice.no/wp-content/uploads/2022/11/Tone-Eidseter-scaled.jpg'} width={500} height={500} className="relative object-contain"/>
                </div>
                <h3 className="text-lg font-semibold text-slate-500">
                  Tone Eidseter<br />
                  <span className="text-sm font-medium text-slate-700">
                    Prosjektkoordinator
                  </span>
                </h3>
                <p className="text-sm font-medium text-slate-700">  
                  Telefon: +47 922 50 432<br />
                  E-post: tone@reklameservice.no
                </p>
            </div> 
            <div className="grid gap-5">
                <div className="bg-blue-200 max-h-96">
                  <Image src={'https://reklameservice.no/wp-content/uploads/2022/11/Harald-scaled.jpg'} width={500} height={500} className="relative object-contain"/>
                </div>
                <h3 className="text-lg font-semibold text-slate-500">
                  Harald Fredly<br />
                  <span className="text-sm font-medium text-slate-700">
                    Daglig leder
                  </span>
                </h3>
                <p className="text-sm font-medium text-slate-700">  
                  Telefon: +47 901 14 805<br />
                  E-post: harald@reklameservice.no
                </p>
            </div> 
          </div>
          <div className="grid grid-flow-col justify-center items-center py-40">
            <Link href="/">
            <div className="w-48 rounded-full bg-black text-white hover:bg-white hover:text-black uppercase p-5 text-center text-xl">
              Se mulighetene
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
