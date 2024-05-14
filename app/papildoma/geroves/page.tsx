import React from "react"

function geroves() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 767px) {
              #section-1 {
                padding-top: 30px !important;
                padding-right: 15px !important;
                padding-bottom: 30px !important;
                padding-left: 15px !important;
                height: auto !important;
              }
              #div-1 {
                width: auto !important;
                padding-top: 0px !important;
                padding-right: 15px !important;
                padding-bottom: 0px !important;
                padding-left: 15px !important;
              }
              #div-2 {
                display: none !important;
              }
            }
          `,
        }}
      />

      <section
        className="text-stone-500 items-center bg-[url('https://www.spcentras.lt/images/photos/photo-1.jpg')] bg-cover py-10 h-72"
        id="section-1"
        style={{ backgroundPosition: "50% 50%" }}
      >
        <div
          className="px-3.5 m-auto min-[1279px]:w-[75.00rem] min-[568px]:w-auto md:w-[46.13rem] lg:w-[62.25rem] xl:w-[78.13rem]"
          id="div-1"
        >
          <div>
            <h1 className="text-gray-900 text-[2.50rem] leading-none font-bold mb-2">
              Projektai
            </h1>

            <div className="text-base justify-between flex" id="div-2">
              <ul className="flex list-none">
                <li className="items-center flex h-14">
                  <a
                    className="items-center pr-6 flex h-14"
                    href="https://www.spcentras.lt/"
                  >
                    Titulinis
                  </a>{" "}
                </li>
                <li className="items-center flex h-14">
                  {" "}
                  <a
                    className="items-center pr-6 flex h-14"
                    href="https://www.spcentras.lt/naujienos"
                  >
                    Naujienos
                  </a>{" "}
                </li>
                <li className="items-center flex h-14"> Projektai</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 767px) {
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
              #div-3 {
                margin-top: -30px !important;
                margin-right: -15px !important;
                margin-bottom: 25px !important;
                margin-left: -15px !important;
                padding: 0px !important;
              }
              #div-4 {
                display: none !important;
              }
              #ul-1 {
                max-height: 0px !important;
                overflow-x: hidden !important;
                overflow-y: hidden !important;
              }
              #div-5 {
                margin-bottom: 0px !important;
              }
            }
          `,
        }}
      />

      <section
        className="text-stone-500 py-12 overflow-hidden bg-slate-50"
        id="section-1"
      >
        <div
          className="px-3.5 m-auto min-[1279px]:w-[75.00rem] min-[568px]:w-auto md:w-[46.13rem] lg:w-[62.25rem] xl:w-[78.13rem]"
          id="div-1"
        >
          <div
            className="flex -m-3.5 min-[767px]:mt-0 min-[767px]:-mr-8 min-[767px]:mb-0 min-[767px]:-ml-8"
            id="div-2"
          >
            <aside className="basis-[18.75rem] px-4 min-w-[18.75rem] text-neutral-900 min-[767px]:min-w-[18.75rem]">
              <div
                className="bg-white py-8 px-6 mr-5 border-2 border-neutral-200 border-solid rounded min-[767px]:m-0 min-[1023px]:m-0"
                id="div-3"
              >
                <div className="text-xl font-semibold pb-7 px-3" id="div-4">
                  Projektai
                </div>

                <ul className="list-none" id="ul-1">
                  <li className="list-item text-stone-500">
                    <a
                      className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                      href="http://localhost:3000/naujienos"
                    >
                      Naujienos
                    </a>
                  </li>

                  <li className="list-item text-lime-600">
                    <a
                      className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                      href="http://localhost:3000/papildoma"
                    >
                      Projektai
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            <div className="flex-grow px-4 min-w-[0.06rem]">
              <div className="bg-white pb-7 px-8 pt-5 rounded-md">
                <h2 className="text-2xl font-bold mb-2">
                  Projektas „Gerovės konsultantų modelio įdiegimas Vilniaus
                  mieste“
                </h2>
                2022 03 31
                <br />
                <br />
                <div
                  className="content-start flex-wrap flex -mr-3.5 mb-8 -ml-3.5 min-[767px]:mb-0"
                  id="div-5"
                >
                  <div className="px-4 align-top inline-block w-full lg:inline-block lg:w-full">
                    <p className="mb-6">
                      <span className="underline">Projekto tikslas</span>-
                      skatinti Vilniaus mieste gyvenančius asmenis kreiptis
                      pagalbos susidūrus su emociniais sunkumais ir teikti jiems
                      įrodymais pagrįstas, prieinamas ir jų poreikius
                      atitinkančias žemo intensyvumo emocinio konsultavimo
                      paslaugas.
                    </p>

                    <p className="my-6">
                      <span className="underline">Projekto tikslinė grupė</span>
                      - suaugę asmenys nuo 18 metų gyvenantys Vilniuje, kuriems
                      pasireiškia lengvi streso, nerimo, nemigos, depresijos bei
                      psichologinės adaptacijos problemų požymiai.
                    </p>

                    <p className="my-6">
                      <b className="font-bold">
                        <span className="underline">
                          Projekto trukmė - 29 mėnesiai
                        </span>
                      </b>
                      (nuo 2022 m. vasario 1 d.)
                    </p>

                    <p className="my-6">
                      Gerovės konsultantai visiškai nauja praktika Lietuvoje,
                      paremta Skandinavijos šalių patirtimi.{" "}
                    </p>

                    <p className="my-6">
                      Registracija vykdoma el. paštu
                      <b className="font-bold text-lime-400">
                        <a href="https://www.spcentras.lt/mailto:geroves.konsultantai@vilnius.lt">
                          geroves.konsultantai@vilnius.lt
                        </a>
                      </b>
                      arba telefonu
                      <b className="font-bold"> 8 608 09 733</b>
                    </p>

                    <p className="my-6">
                      Projektas finansuojamas Europos ekonominės erdvės
                      finansinio mechanizmo ir Lietuvos Respublikos valstybės
                      biudžeto lėšomis.
                    </p>

                    <br />
                  </div>

                  <div className="px-4 text-center align-top inline-block w-full text-lime-400 lg:inline-block lg:w-full">
                    <a href="https://www.spcentras.lt/uploads/news/id167/pictures/0001_eea_grants-4x_1648736230.png">
                      <picture className="cursor-pointer">
                        <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_eea_grants-4x_1648736230-9011445300507933701c11e8f3523779.webp 2x" />
                        <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_eea_grants-4x_1648736230-4c999aee0bd0ca5222a8ef30a23243d1.webp 2x" />
                        <img
                          className="w-full h-auto"
                          src="https://www.spcentras.lt/uploads/_CGSmartImage/0001_eea_grants-4x_1648736230-4c999aee0bd0ca5222a8ef30a23243d1.webp"
                        />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="text-stone-500/[0.51] text-right">
                  Informacija atnaujinta 2023-01-02
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default geroves
