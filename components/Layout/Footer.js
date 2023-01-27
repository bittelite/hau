export default function Footer({ }) {
    return (
      <>
        <div className="footer">
          <p className="text-2xl text-white">Salg av reklame på flyplassen håndteres av vår samarbeidspartner Reklameservice AS.</p>
          <p className="text-2xl text-white">Telefon:  +47 71 20 19 00 | E-post: post@reklameservice.no</p>
          <div className="grid grid-flow-col justify-center items-center">
            <div className="pt-3 px-10"><img src="./gfx/hau-logo-footer.png" width="250px" height="auto"/></div>
            <div className="px-10"><img src="./gfx/rs-logo-footer.png" width="250px" height="auto" /></div>
          </div>
        </div>
      </>
    )
  }