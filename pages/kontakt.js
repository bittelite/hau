import Link from "next/link"

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
            <div className="grid gap-10">
                <h3 className="flex-auto text-xl font-semibold text-slate-900 uppercase">
                  
                </h3>
                <div className="bg-blue-200 h-96 p-10">
                  Bilde
                </div>
                <form className="">
                  <div className="flex flex-wrap">
                    <div className="text-lg font-semibold text-slate-500">
                      Navn N. Navnesen
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                      Telefon: +47 XXX XX XXX
                    </div>
                    <p className="text-sm text-slate-700">
                      E-post: xxxxxxx@flyhau.no
                    </p>
                  </div>
                </form>
              </div>
              <div className="grid gap-10">
                <h3 className="flex-auto text-xl font-semibold text-slate-900 uppercase">
                    
                </h3>
                <div className="bg-blue-200 h-96 p-10">
                  Bilde
                </div>
                <form className="">
                  <div className="flex flex-wrap">
                    <div className="text-lg font-semibold text-slate-500">
                    Navn N. Navnesen
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                    Telefon: +47 XXX XX XXX
                    </div>
                    <p className="text-sm text-slate-700">
                    E-post: xxxxxxx@reklameservice.no
                    </p>
                  </div>
                </form>
              </div>
              <div className="grid gap-10">
                <h3 className="flex-auto text-xl font-semibold text-slate-900 uppercase">
                    
                </h3>
                <div className="bg-blue-200 h-96 p-10">
                  Bilde
                </div>
                <form className="">
                  <div className="flex flex-wrap">
                    <div className="text-lg font-semibold text-slate-500">
                    Navn N. Navnesen
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                    Telefon: +47 XXX XX XXX
                    </div>
                    <p className="text-sm text-slate-700">
                    E-post: xxxxxxx@reklameservice.no
                    </p>
                  </div>
                </form>
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
