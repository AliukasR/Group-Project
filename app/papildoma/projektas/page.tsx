import React from "react"

function Projektas() {
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
                  <a
                    className="items-center pr-6 flex h-14"
                    href="http://localhost:3000/naujienos"
                  >
                    Naujienos
                  </a>{" "}
                </li>
                <li className="items-center flex h-14">Projektai</li>
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
                      href="http://localhost:3000/naujienos/"
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
                  Projektas ,,Atspari šeima - tvari visuomenė”
                </h2>
                2022 05 11
                <br />
                <br />
                <div
                  className="content-start flex-wrap flex -mr-3.5 mb-8 -ml-3.5 min-[767px]:mb-0"
                  id="div-5"
                >
                  <div className="px-4 align-top inline-block w-full lg:inline-block lg:w-full">
                    <p className="mb-6">
                      <b>
                        <img
                          className="w-[32.25rem] h-36"
                          src="https://www.spcentras.lt/uploads/images/11111111.png"
                          alt="Project Image"
                        />
                      </b>
                    </p>
                    <p className="my-6">
                      <b className="font-bold">Vykdytojas</b>: VšĮ Mano šeimos
                      akademija
                    </p>
                    <p className="my-6">
                      <b className="font-bold">Rėmėjas: </b>
                      Socialinės apsaugos ir darbo ministerija
                    </p>

                    <p className="my-6">
                      <b className="font-bold">Projekto laikotarpis </b>: 2022m.
                      sausis -gruodis
                    </p>

                    <p className="my-6">
                      <b className="font-bold">
                        <i className="italic">Projekto tikslas </i>
                      </b>
                      - ugdyti savarankišką ir konstruktyviai funkcionuojančią
                      šeimą, kurios narių santykiai grįsti savitarpio pagalba,
                      pagarba ir atsakomybe, puoselėti abipuse pagarba grįstus
                      tėvų-vaikų santykius šeimose bei stiprinti psichologinį
                      šeimų atsparumą.
                    </p>

                    <p className="my-6">
                      <b className="font-bold">
                        <i className="italic">Projekto tikslinė grupė </i>
                      </b>
                      - šeimos, esami ir būsimi tėvai/globėjai, kurie susiduria
                      su įvairiais iššūkiais, klausimais ir sunkumais
                      kasdieniame gyvenime.
                    </p>

                    <p className="my-6">
                      Dėl iššūkių ir pokyčių, šeimos patiria įvairias permainas,
                      kurios reikalauja naujo požiūrio ir naujų žinių
                      <b className="font-bold">.</b>
                    </p>

                    <p className="my-6 font-bold">
                      <b>
                        Projekte bus vykdomos tėvystės gebėjimų ugdymo ir
                        stiprinimo veiklos:
                      </b>
                    </p>

                    <p className="my-6">
                      • Tėvų pozityvios tėvystės (tame tarpe ir ankstyvosios)
                      įgūdžių formavimas ir visų šeimos narių socialinių
                      emocinių kompetencijų gerinimas, šeimos psichologinio
                      atsparumo stiprinimas;
                    </p>

                    <p className="my-6">
                      • Psichologo ir kitų specialistų konsultacijų, asmenims ir
                      jų šeimoms išgyvenantiems sunkumus, krizes ar patyrusiems
                      traumuojančių emocinių išgyvenimų, teikimas;
                    </p>

                    <p className="my-6">
                      • Psichologo ir kitų specialistų konsultacijų, asmenims ir
                      jų šeimoms, auginančioms įvairių elgesio, emocijų, raidos
                      sutrikimų, taip pat negalią turinčius vaikus, teikimas.
                    </p>

                    <p className="my-6">
                      <b className="font-bold">
                        <i className="italic">Projekto vieta: </i>
                      </b>
                      VšĮ Mano šeimos akademija, Mindaugo g.44 / Panerių7,
                      Vilnius
                    </p>

                    <p className="my-6">
                      <b className="font-bold">
                        <i className="italic">Registracija</i>:{" "}
                      </b>
                      el. paštas{" "}
                      <a
                        className="text-lime-400"
                        href="https://www.spcentras.lt/mailto:info@msakademija.lt"
                      >
                        info@msakademija.lt
                      </a>
                      <a
                        className="text-lime-400"
                        href="https://www.spcentras.lt/mailto:info@msakademija.lt"
                      >
                        {" "}
                      </a>
                      ; tel. 8618 64000
                    </p>

                    <p className="my-6">
                      <b className="font-bold">
                        <i className="italic">Daugiau apie projektą</i>
                      </b>
                      <a
                        className="text-lime-400"
                        href="http://www.msakademija.lt/vykdomi"
                      >
                        :
                      </a>
                      <a
                        className="text-lime-400"
                        href="http://www.msakademija.lt/vykdomi"
                      >
                        {" "}
                      </a>
                      <a
                        className="text-lime-400"
                        href="http://www.msakademija.lt/vykdomi"
                      >
                        http://www.msakademija.lt/vykdomi
                      </a>
                    </p>

                    <p className="my-6">
                      <b className="font-bold">
                        <i className="italic">
                          Projekto veiklų tvarkaraštis:{" "}
                          <a
                            className="text-lime-400 italic"
                            href="https://www.spcentras.lt/uploads/Projekto%20veiklų%20Tvarkaraštis%202022.pdf"
                          >
                            SPAUSTI ČIA.
                          </a>
                        </i>
                      </b>
                      <a
                        className="text-lime-400"
                        href="http://www.msakademija.lt/vykdomi"
                      >
                        <br className="cursor-pointer" />
                      </a>
                    </p>

                    <br />
                  </div>
                  <div className="px-4 text-center align-top inline-block w-full text-lime-400 lg:inline-block lg:w-full">
                    <a href="https://www.spcentras.lt/uploads/news/id168/pictures/0001_1_1652273654.png">
                      <picture className="cursor-pointer">
                        <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_1_1652273654-4c35379e168515e1de8cea14e67208d0.webp 2x" />
                        <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_1_1652273654-4323a1cc8d08a9672d9d7de089d00472.webp 2x" />
                        <img
                          className="w-full h-auto"
                          src="https://www.spcentras.lt/uploads/_CGSmartImage/0001_1_1652273654-4323a1cc8d08a9672d9d7de089d00472.webp"
                          alt="Project Image"
                        />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="text-stone-500/[0.51] text-right">
                  Informacija atnaujinta 2022-05-11
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projektas
