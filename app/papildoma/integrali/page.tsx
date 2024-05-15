import React from "react"

function integrali() {
  return (
    <div>
      <style>
        {`
          @media (max-width: 767px) {
            #section-1 {
              padding-top: 30px ; 
              padding-right: 15px ; 
              padding-bottom: 30px ; 
              padding-left: 15px ; 
              height: auto ;
            }
            #div-1 {
              width: auto ; 
              padding-top: 0px ; 
              padding-right: 15px ; 
              padding-bottom: 0px ; 
              padding-left: 15px ;
            }
            #div-2 {
              display: none ;
            }
          }
        `}
      </style>

      <section
        className='text-stone-500 items-center bg-[url("https://www.spcentras.lt/images/photos/photo-1.jpg")] bg-cover py-10 h-72'
        id="section-1"
        style={{ backgroundPosition: "50% 50%" }}
      >
        <div
          className="px-3.5 m-auto min-[1279px]:w-[75.00rem]  min-[568px]:w-auto md:w-[46.13rem] lg:w-[62.25rem] xl:w-[78.13rem]"
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

      <style>
        {`
          @media (max-width: 767px) {
            #section-1 {
              padding-top: 30px ; 
              padding-right: 0px ; 
              padding-bottom: 30px ; 
              padding-left: 0px ;
            }
            #div-1 {
              width: auto ; 
              padding-top: 0px ; 
              padding-right: 15px ; 
              padding-bottom: 0px ; 
              padding-left: 15px ;
            }
            #div-2 {
              flex-direction: column ;
            }
            #div-3 {
              margin-top: -30px ; 
              margin-right: -15px ; 
              margin-bottom: 25px ; 
              margin-left: -15px ; 
              padding: 0px ;
            }
            #div-4 {
              display: none ;
            }
            #ul-1 {
              max-height: 0px ; 
              overflow-x: hidden ; 
              overflow-y: hidden ;
            }
            #div-5 {
              margin-bottom: 0px ;
            }
          }
        `}
      </style>

      <section
        className="text-stone-500 py-12 overflow-hidden bg-slate-50"
        id="section-1"
      >
        <div
          className="px-3.5 m-auto min-[1279px]:w-[75.00rem]  min-[568px]:w-auto md:w-[46.13rem] lg:w-[62.25rem] xl:w-[78.13rem]"
          id="div-1"
        >
          <div
            className="flex -m-3.5 min-[767px]:mt-0  min-[767px]:-mr-8 min-[767px]:mb-0 min-[767px]:-ml-8"
            id="div-2"
          >
            <aside className="basis-[18.75rem] px-4 min-w-[18.75rem] text-neutral-900 min-[767px]:min-w-[18.75rem]">
              <div
                className="bg-white py-8 px-6 mr-5 border-2 border-neutral-200 border-solid rounded min-[767px]:m-0  min-[1023px]:m-0"
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
                  Integralios pagalbos teikimas ir plėtra Lietuvos savivaldybėse
                </h2>
                2023 05 03
                <br />
                <br />
                <div
                  className="content-start flex-wrap flex -mr-3.5 mb-8 -ml-3.5 min-[767px]:mb-0"
                  id="div-5"
                >
                  <div className="px-4 align-top inline-block w-full lg:inline-block  lg:w-full">
                    <p className="mb-6">
                      <img
                        className="w-[53.75rem] h-52"
                        src="https://www.spcentras.lt/uploads/images/Sajunga.png"
                        alt="Project Image 1"
                      />
                    </p>

                    <p className="my-6">
                      <img
                        className="w-[53.75rem] h-96"
                        src="https://www.spcentras.lt/uploads/images/Sajunga2.png"
                        alt="Project Image 2"
                      />
                    </p>

                    <p className="my-6">
                      BĮ Vilniaus miesto socialinių paslaugų centras kaip
                      projekto partneris nuo 2023 m. kovo mėn. pradėjo
                      įgyvendinti projekto Nr. 07-003-P-0001 „Integralios
                      pagalbos teikimas ir plėtra Lietuvos savivaldybėse“
                      veiklas Vilniaus miesto savivaldybėje. Projekto tikslas -
                      užtikrinti integralios pagalbos tikslinės grupės asmenims
                      teikimą ir plėtrą Lietuvos savivaldybėse. Projekto metu
                      numatoma teikti slaugos, reabilitacijos ir globos
                      paslaugas vaikams su negalia, suaugusiems asmenims su
                      negalia ir senyvo amžiaus asmenims jų namuose bei
                      valstybės ir savivaldybių įstaigose, kuriose įgyvendinamos
                      ikimokyklinio ugdymo programos ikimokyklinio amžiaus
                      vaikams su negalia (iki 7 m.), taip pat konsultacijas
                      neįgalius ir / arba senyvo amžiaus asmenis namuose
                      prižiūrintiems šeimos nariams (parengimo juos prižiūrėti,
                      pagalba prižiūrint patiems klausimais), psichologinė
                      pagalba neįgaliems, senyvo amžiaus asmenims, juos
                      prižiūrintiems šeimos nariams, integralią pagalbą
                      teikiantiems darbuotojams.
                    </p>

                    <p className="my-6">
                      Projekto metu taip pat numatomas kompetencijų ir
                      profesinės kvalifikacijos tobulinimas integralią pagalbą
                      teikiantiems darbuotojams, mobiliųjų komandų aprūpinimas
                      slaugos priemonėmis, įranga, įrenginiais ir transporto
                      priemonėmis, neformalios pagalbos skatinimo renginiai
                      integralią pagalbą teikiantiems darbuotojams, šeimos
                      nariams, bendruomenei.
                    </p>

                    <p className="my-6">
                      Planuojama, kad 2026 m. pabaigoje visoje Lietuvoje
                      integralią pagalbą bus gavę 4018 neįgalių ar senyvo
                      amžiaus asmenų.
                    </p>

                    <p className="my-6">
                      Projekto trukmė - 2022 m. gruodžio 8 d. - 2026 m. gruodžio
                      31 d.
                      <br /> Projekto finansavimo suma - 43 940 212,00 Eur
                    </p>

                    <p className="my-6">
                      Projektas finansuojamas 2021-2027 m. Europos Sąjungos
                      struktūrinės paramos „Europos socialinio fondo +“ ir
                      2021-2027 m. Europos Sąjungos struktūrinės paramos
                      bendrojo finansavimo lėšomis.
                    </p>

                    <p className="my-6">
                      Projekto vykdytojas - Europos socialinio fondo agentūra
                    </p>

                    <br />
                  </div>

                  <div className="px-4 text-center align-top inline-block w-full text-lime-400 lg:inline-block  lg:w-full">
                    <a href="https://www.spcentras.lt/uploads/news/id173/pictures/0001_111_1686898770.png">
                      <picture className="cursor-pointer">
                        <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_111_1686898770-8ee7779d7ccdf29198d4d4947a6c74b5.webp 2x" />
                        <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_111_1686898770-b5fa00338452715b588623fbaa8bee6a.webp 2x" />
                        <img
                          className="w-full h-auto"
                          src="https://www.spcentras.lt/uploads/_CGSmartImage/0001_111_1686898770-b5fa00338452715b588623fbaa8bee6a.webp"
                          alt="Project Image 3"
                        />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="text-stone-500/[0.51] text-right">
                  Informacija atnaujinta 2023-11-06
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default integrali
