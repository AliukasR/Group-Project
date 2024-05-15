import React from "react"

const naujienos = () => {
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

      <div>
        <section
          className="text-stone-500 items-center bg-[url('https://www.spcentras.lt/images/photos/photo-1.jpg')] bg-cover py-10 h-72"
          id="section-1"
          style={{
            backgroundPosition: "50% 50%",
          }}
        >
          <div
            className="px-3.5 m-auto min-[1279px]:w-[75.00rem]  min-[568px]:w-auto md:w-[46.13rem] lg:w-[62.25rem] xl:w-[78.13rem]"
            id="div-1"
          >
            <div>
              <h1 className="text-gray-900 text-[2.50rem] leading-none font-bold mb-2">
                Naujienos
              </h1>

              <div className="text-base justify-between flex" id="div-2">
                <ul className="flex list-none">
                  <li className="items-center flex h-14">
                    <a
                      className="items-center pr-6 flex h-14"
                      href="https://www.spcentras.lt/"
                    >
                      Titulinis
                    </a>
                  </li>
                  <li className="items-center flex h-14">
                    <a
                      className="items-center pr-6 flex h-14"
                      href="https://www.spcentras.lt/naujienos"
                    >
                      Naujienos
                    </a>
                  </li>
                  <li className="items-center flex h-14"> Naujienos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section
          className="text-stone-500 py-12 overflow-hidden bg-slate-50"
          id="section-2"
        >
          <div
            className="px-3.5 m-auto min-[1279px]:w-[75.00rem]  min-[568px]:w-auto md:w-[46.13rem] lg:w-[62.25rem] xl:w-[78.13rem]"
            id="div-3"
          >
            <div
              className="flex -m-3.5 min-[767px]:mt-0  min-[767px]:-mr-8 min-[767px]:mb-0 min-[767px]:-ml-8"
              id="div-4"
            >
              <aside className="basis-[18.75rem] px-4 min-w-[18.75rem] text-neutral-900 min-[767px]:min-w-[18.75rem]">
                <div
                  className="bg-white py-8 px-6 mr-5 border-2 border-neutral-200 border-solid rounded min-[767px]:m-0  min-[1023px]:m-0"
                  id="div-5"
                >
                  <div className="text-xl font-semibold pb-7 px-3" id="div-6">
                    Naujienos
                  </div>

                  <ul className="list-none" id="ul-2">
                    <li className="list-item text-lime-600">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="http://localhost:3000/naujienos"
                      >
                        Naujienos
                      </a>
                    </li>

                    <li className="list-item text-stone-500">
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

              <div className="flex-grow px-4 min-w-[0.06rem]" id="div-7">
                <div className="bg-white pb-7 px-8 pt-5 rounded-md">
                  <h2 className="text-2xl font-bold mb-2">
                    Pokalbis gydo: nusidriekusias eiles pas psichologus mažina
                    emocinės gerovės konsultantai
                  </h2>
                  2024 05 02
                  <br />
                  <br />
                  <div
                    className="content-start flex-wrap flex -mr-3.5 mb-8 -ml-3.5 min-[767px]:mb-0"
                    id="div-8"
                  >
                    <div className="px-4 align-top inline-block w-full lg:inline-block  lg:w-full">
                      <p className="mb-6 font-bold">
                        <b>
                          Nerimastingos mintys, ilsėtis neleidžianti nemiga,
                          santykių problemos, stresas – tai tik kelios emocijos,
                          su kuriomis vis dažniau tenka susidurti šių dienų
                          žmogui. Vienam su tuo išbūti nelengva, o ir neretai
                          vis dar gėdijamasi pasakoti apie patiriamus jausmus.
                          Tačiau specialistai ragina nedelsti – kartais vos
                          vienas pokalbis gali padėti susigrąžinti kasdienybės
                          džiaugsmą ir pilnavertį gyvenimą.
                        </b>
                      </p>

                      <p className="my-6">
                        Siekiant suteikti pagalbą kuo daugiau psichologinę
                        įtampą patiriančių asmenų ir remiantis Skandinavijos
                        šalių praktika, buvo pasitelkti gerovės konsultantai.
                        Tai specialistai, turintys reikalavimus atitinkantį
                        sveikatos ar socialinių mokslų srities išsilavinimą bei
                        teikiantys žemo intensyvumo emocinio konsultavimo
                        paslaugas.
                      </p>
                      <p className="my-6">
                        Per dvejus metus vien Vilniaus mieste nemokamas
                        konsultacijas gavo per 300 asmenų.
                      </p>

                      <p className="my-6">
                        „Sulaukiame tiek vyrų, tiek moterų, paties įvairiausio
                        amžiaus, ieškančių atsakymų, kaip sunkiuose gyvenimo
                        etapuose išgyventi ar tų, kuriuos pagalbos kreiptis
                        paskatino artimieji. Bandome spręsti įvairias problemas:
                        bendravimo, savivertės, streso, perdegimo, netekties ar
                        gedėjimo,“ – sako viena iš gerovės konsultančių Asta
                        Bečelienė.
                      </p>

                      <p className="my-6">
                        Konsultuotis gali kiekvienas pilnametis asmuo,
                        susiduriantis su lengvais emociniais sunkumais,
                        pirmaisiais nerimo, nemigos ar depresijos simptomais.
                        Pirmojo susitikimo metu yra įvertinami besikreipiančio
                        asmens psichikos sveikatos poreikiai, psichologinės
                        gerovės lygis ir rizikos veiksniai bei sudaromas
                        paslaugų teikimo planas. Kilus įtarimų, jog pasireiškia
                        psichikos ir elgesio sutrikimų požymiai, kuriems esant
                        gerovės konsultantas savo kompetencijų ribose negali
                        padėti, rekomenduojama kreiptis į asmens sveikatos
                        priežiūros įstaigą, teikiančią psichikos sveikatos
                        priežiūros paslaugas, suteikiama informacija, kuri
                        įstaiga tokias paslaugas teikia bei paaiškinama šių
                        paslaugų gavimo tvarka.
                      </p>

                      <p className="my-6">
                        Nors sunkumų turinčiam žmogui iš viso skiriamos 8
                        konsultacijos, pirmasis apsilankymas neįpareigoja.
                        Kartais geriau jaustis pradedama ir po kelių susitikimų,
                        todėl terapijos kursą bet kada galima nutraukti.
                        Kognityvinio elgesio metodiką, pagrįsta mokslu,
                        taikantys gerovės konsultantai sako, kad jie yra tarsi
                        tarpininkai tarp žmogaus ir jo viduje verdančių emocijų.
                      </p>

                      <p className="my-6">
                        „Ateinančiam žmogui svarbu suprasti, kad jis patenka į
                        saugią erdvę, kurioje bus priimamas toks, koks yra. Mes,
                        gerovės konsultantės, padedame įsivardinti savo
                        sunkumus, problemas ir ryžtis pokyčiams. Šių susitikimų
                        esmė – kalbėti. Nebijokite išsakyti tai, kas neramina,
                        kas trukdo jausti gyvenimo pilnatvę. Tam čia ir esame,
                        kad kartu ieškotume atsakymų ir labiau pažintume save“,
                        – ragina A. Bečelienė.
                      </p>

                      <p className="my-6">
                        Nemokamos konsultacijos sostinėje yra teikiamos
                        Socialinių paslaugų centre (Sausio 13-osios g. 10) ir
                        Kompleksinių paslaugų centre „Šeimos slėnis“ (Žolyno g.
                        47). Būtina registracija telefonu +370 60 809 733 arba
                        el. paštu{" "}
                        <a className="text-lime-400" href="">
                          geroves.konsultantai@vilnius.lt
                        </a>
                      </p>

                      <p className="my-6">
                        <em className="italic">
                          Projektas „Gerovės konsultantų modelio įdiegimas
                          Vilniaus mieste“ finansuojamas Europos ekonominės
                          erdvės finansinio mechanizmo ir Lietuvos Respublikos
                          valstybės biudžeto lėšomis.
                        </em>
                      </p>

                      <p className="my-6">
                        <em>
                          <img
                            className="w-36 h-24"
                            src="https://www.spcentras.lt/uploads/images/gerove2.png"
                            alt="Naujienų nuotrauka"
                          />
                        </em>
                      </p>

                      <br />
                    </div>

                    <div className="px-4 text-center align-top inline-block w-full text-lime-400 lg:inline-block  lg:w-full">
                      <a href="https://www.spcentras.lt/uploads/news/id183/pictures/0001_pokalbis-gydo_1714651225.jpg">
                        <picture className="cursor-pointer">
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_pokalbis-gydo_1714651225-a4d2eece8ced85371ddb1f3ccd077e23.webp 2x" />
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_pokalbis-gydo_1714651225-a6c6f74f0214a1f6e40fb66c0266a434.webp 2x" />
                          <img
                            className="w-full h-auto"
                            src="https://www.spcentras.lt/uploads/_CGSmartImage/0001_pokalbis-gydo_1714651225-a6c6f74f0214a1f6e40fb66c0266a434.webp"
                            alt="Naujienų nuotrauka"
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                  <div className="text-stone-500 text-right">
                    Informacija atnaujinta 2024-05-02
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default naujienos
