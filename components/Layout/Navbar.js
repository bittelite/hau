
export default function Navbar({ }) {
    return (
      <>
        <div className="bg-white text-black grid grid-flow-col items-center absolute top-0 left-0 w-full p-5">
            <div><img src="./gfx/hau-logo.png" width="375px" height="auto" /></div>
            <div className="text-right">
              <a className="rounded-full bg-black text-white hover:bg-white hover:text-black uppercase p-5 text-xl" href="/kontakt">
                Kontakt oss</a>
            </div>
        </div>
      </>
    )
  }