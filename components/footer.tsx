import React from "react"

export function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <style
          dangerouslySetInnerHTML={{
            __html: `@media (max-width: 767px) {
              #section-1 {
                padding-top: 30px !important;
                padding-right: 0px !important;
                padding-bottom: 30px !important;
                padding-left: 0px !important;
              }
              #div-1 {
                width: auto !important;
                padding-top: 0px !important;
                padding-right: 15px !important;
                padding-bottom: 0px !important;
                padding-left: 15px !important;
              }
              #div-2 {
                flex-direction: column !important;
              }
            }`,
          }}
        />
        <section
          className="text-neutral-900 text-base pb-12 pt-16"
          id="section-1"
        >
          <div
            className="px-3.5 m-auto min-[1279px]:w-[75.00rem]  min-[568px]:w-auto md:w-[46.13rem] lg:w-[62.25rem] xl:w-[78.13rem]"
            id="div-1"
          >
            <div className="flex -mt-8 -mr-3.5 -ml-3.5" id="div-2">
              <div className="flex-grow px-4 mt-8">
                <div className="text-xl font-semibold uppercase mb-4">
                  Rekvizitai
                </div>
                Biudžetinė įstaiga
                <br />
                Vilniaus miesto socialinių paslaugų centras
                <br /> <br /> Sausio 13-osios g. 10, 04347 Vilnius
                <br /> Tel. +370 5 213 3663
                <br /> El. paštas{" "}
                <a className="text-lime-600" href="mailto:info@spcentras.lt">
                  info@spcentras.lt
                </a>
                <br /> Kodas Juridinių asmenų registre 190997565
                <br /> <br /> Darbo laikas: I - IV 7.30-16.30 val.
                <br /> Darbo laikas: V 7.30-15.15 val.
                <br /> Pietų pertrauka: 11.30-12.15 val.
                <br /> <br />
                Duomenys kaupiami ir saugomi Juridinių asmenų registre
              </div>

              <div className="flex-grow px-4 mt-8">
                <div className="text-xl font-semibold uppercase mb-4">
                  Nuorodos
                </div>

                <ul className="list-none">
                  <li className="list-item">Teisinė informacija</li>

                  <li className="list-item">Info studentams ir savanoriams</li>

                  <li className="list-item">ES projektai</li>

                  <li className="list-item">Slapukų parinktys</li>

                  <li className="list-item">Duomenų apsauga</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div style={{ backgroundColor: "white" }}>
          <div
            className="text-neutral-900 items-center border-t-slate-50 border-t-2 text-sm relative h-16 border-solid"
            id="footer-1"
          >
            <div
              className="px-3.5 m-auto min-[1279px]:w-[75.00rem]  min-[568px]:w-auto md:w-[46.13rem] lg:w-[62.25rem] xl:w-[78.13rem]"
              id="div-1"
            >
              <div className="items-center justify-between flex" id="div-2">
                © 2024 Vilniaus miesto socialinių paslaugų centras. Visos teisės
                saugomos.
                <div>
                  Sukurta:
                  <a className="text-lime-400" href="https://www.texus.lt">
                    TEXUS
                  </a>
                </div>
              </div>
            </div>

            <a
              className="text-white bg-amber-500 items-center bottom-[0.75rem] justify-center absolute right-[1.63rem] flex w-11 h-11 rounded-full font-black"
              href="https://www.spcentras.lt/#"
            >
              <i className="cursor-pointer flex">
                <svg
                  className="w-3.5 h-5"
                  fill="rgb(255, 255, 255)"
                  height="19px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.197,6.196 C-0.083,6.455 -0.083,6.887 0.197,7.155 C0.468,7.413 0.919,7.413 1.190,7.155 L6.273,2.296 L6.273,18.328 C6.274,18.702 6.585,18.999 6.976,18.999 C7.367,18.999 7.688,18.702 7.688,18.328 L7.688,2.296 L12.761,7.155 C13.042,7.413 13.494,7.413 13.764,7.155 C14.045,6.887 14.045,6.455 13.764,6.196 L7.477,0.188 C7.206,-0.081 6.755,-0.081 6.485,0.188 L0.197,6.196 Z"
                    fill="rgb(255, 255, 255)"
                    fillRule="evenodd"
                  />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
