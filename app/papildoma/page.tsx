import React from "react"

const papildoma = () => {
  return (
    <>
      <div>
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
          className='text-stone-500 items-center bg-[url("https://www.spcentras.lt/images/photos/photo-1.jpg")] bg-cover py-10 h-72'
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
                      href="http://localhost:3000/naujienos"
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
      </div>
      <div>
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
              #div-5,
              #div-6,
              #div-7,
              #div-8,
              #div-9,
              #div-10 {
                margin-bottom: 30px !important;
              }
          }`,
          }}
        />

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
                <div className="content-start flex-wrap flex -m-3.5">
                  <div
                    className="bg-white border-l-slate-50 border-l-2 border-r-slate-50 border-r-2 px-4 align-top inline-block w-full mb-5 rounded-md md:inline-block  md:w-1/3"
                    style={{
                      borderLeftStyle: "solid",
                      borderRightStyle: "solid",
                    }}
                  >
                    <div className="pb-5 mb-5" id="div-5">
                      <a
                        className="text-lime-400 flex overflow-hidden"
                        href="http://localhost:3000/papildoma/integrali"
                      >
                        <picture className="cursor-pointer">
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_111_1686898770-daff60e0aa25728878799c5cc9755a56.webp 2x" />
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_111_1686898770-da087b443f1286910071c127de32fd06.webp 2x" />
                          <img
                            className="w-full h-auto rounded"
                            src="https://www.spcentras.lt/uploads/_CGSmartImage/0001_111_1686898770-da087b443f1286910071c127de32fd06.webp"
                          />
                        </picture>
                      </a>

                      <a
                        className="text-neutral-900 text-xl font-semibold flex mt-5"
                        href="http://localhost:3000/papildoma/integrali"
                      >
                        Integralios pagalbos teikimas ir plėtra Lietuvos
                        savivaldybėse
                      </a>

                      <div className="items-center text-sm uppercase flex mt-5">
                        <i className="text-amber-500 font-black flex mr-3">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="rgb(233, 147, 19)"
                            height="14px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.000,13.999 C3.140,13.999 -0.000,10.859 -0.000,6.999 C-0.000,3.139 3.140,-0.001 7.000,-0.001 C10.860,-0.001 14.000,3.139 14.000,6.999 C14.000,10.859 10.860,13.999 7.000,13.999 ZM7.000,1.165 C3.783,1.165 1.167,3.782 1.167,6.999 C1.167,10.216 3.783,12.832 7.000,12.832 C10.217,12.832 12.833,10.216 12.833,6.999 C12.833,3.782 10.217,1.165 7.000,1.165 ZM9.333,9.915 C9.184,9.915 9.035,9.859 8.921,9.745 L6.588,7.412 C6.584,7.408 6.583,7.404 6.580,7.400 C6.530,7.349 6.489,7.289 6.462,7.222 C6.432,7.151 6.417,7.075 6.417,6.999 L6.417,2.916 C6.417,2.594 6.678,2.332 7.000,2.332 C7.322,2.332 7.583,2.594 7.583,2.916 L7.583,6.758 L9.746,8.920 C9.974,9.148 9.974,9.517 9.746,9.745 C9.632,9.859 9.482,9.915 9.333,9.915 Z"
                              fill="rgb(233, 147, 19)"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                        2023-05-03
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-white border-l-slate-50 border-l-2 border-r-slate-50 border-r-2 px-4 align-top inline-block w-full mb-5 rounded-md md:inline-block  md:w-1/3"
                    style={{
                      borderLeftStyle: "solid",
                      borderRightStyle: "solid",
                    }}
                  >
                    <div className="pb-5 mb-5" id="div-6">
                      <a
                        className="text-lime-400 flex overflow-hidden"
                        href="http://localhost:3000/papildoma/projektas"
                      >
                        <picture className="cursor-pointer">
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_1_1652273654-e471a4acc4898a87ead12eacfbdc9deb.webp 2x" />
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_1_1652273654-8926810127199ba2c85c1abd810bde3c.webp 2x" />
                          <img
                            className="w-full h-auto rounded"
                            src="https://www.spcentras.lt/uploads/_CGSmartImage/0001_1_1652273654-8926810127199ba2c85c1abd810bde3c.webp"
                          />
                        </picture>
                      </a>

                      <a
                        className="text-neutral-900 text-xl font-semibold flex mt-5"
                        href="http://localhost:3000/papildoma/projektas"
                      >
                        Projektas ,,Atspari šeima - tvari visuomenė”
                      </a>

                      <div className="items-center text-sm uppercase flex mt-5">
                        <i className="text-amber-500 font-black flex mr-3">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="rgb(233, 147, 19)"
                            height="14px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.000,13.999 C3.140,13.999 -0.000,10.859 -0.000,6.999 C-0.000,3.139 3.140,-0.001 7.000,-0.001 C10.860,-0.001 14.000,3.139 14.000,6.999 C14.000,10.859 10.860,13.999 7.000,13.999 ZM7.000,1.165 C3.783,1.165 1.167,3.782 1.167,6.999 C1.167,10.216 3.783,12.832 7.000,12.832 C10.217,12.832 12.833,10.216 12.833,6.999 C12.833,3.782 10.217,1.165 7.000,1.165 ZM9.333,9.915 C9.184,9.915 9.035,9.859 8.921,9.745 L6.588,7.412 C6.584,7.408 6.583,7.404 6.580,7.400 C6.530,7.349 6.489,7.289 6.462,7.222 C6.432,7.151 6.417,7.075 6.417,6.999 L6.417,2.916 C6.417,2.594 6.678,2.332 7.000,2.332 C7.322,2.332 7.583,2.594 7.583,2.916 L7.583,6.758 L9.746,8.920 C9.974,9.148 9.974,9.517 9.746,9.745 C9.632,9.859 9.482,9.915 9.333,9.915 Z"
                              fill="rgb(233, 147, 19)"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                        2022-05-11
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-white border-l-slate-50 border-l-2 border-r-slate-50 border-r-2 px-4 align-top inline-block w-full mb-5 rounded-md md:inline-block  md:w-1/3"
                    style={{
                      borderLeftStyle: "solid",
                      borderRightStyle: "solid",
                    }}
                  >
                    <div className="pb-5 mb-5" id="div-7">
                      <a
                        className="text-lime-400 flex overflow-hidden"
                        href="http://localhost:3000/papildoma"
                      >
                        <picture className="cursor-pointer">
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_eea_grants-4x_1648736230-9955b8daaf8bf14b391dbe9a989e680a.webp 2x" />
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_eea_grants-4x_1648736230-e97510339562d256e5187fadf521f101.webp 2x" />
                          <img
                            className="w-full h-auto rounded"
                            src="https://www.spcentras.lt/uploads/_CGSmartImage/0001_eea_grants-4x_1648736230-e97510339562d256e5187fadf521f101.webp"
                          />
                        </picture>
                      </a>

                      <a
                        className="text-neutral-900 text-xl font-semibold flex mt-5"
                        href="http://localhost:3000/papildoma/geroves"
                      >
                        Projektas „Gerovės konsultantų modelio įdiegimas
                        Vilniaus mieste“
                      </a>

                      <div className="items-center text-sm uppercase flex mt-5">
                        <i className="text-amber-500 font-black flex mr-3">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="rgb(233, 147, 19)"
                            height="14px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.000,13.999 C3.140,13.999 -0.000,10.859 -0.000,6.999 C-0.000,3.139 3.140,-0.001 7.000,-0.001 C10.860,-0.001 14.000,3.139 14.000,6.999 C14.000,10.859 10.860,13.999 7.000,13.999 ZM7.000,1.165 C3.783,1.165 1.167,3.782 1.167,6.999 C1.167,10.216 3.783,12.832 7.000,12.832 C10.217,12.832 12.833,10.216 12.833,6.999 C12.833,3.782 10.217,1.165 7.000,1.165 ZM9.333,9.915 C9.184,9.915 9.035,9.859 8.921,9.745 L6.588,7.412 C6.584,7.408 6.583,7.404 6.580,7.400 C6.530,7.349 6.489,7.289 6.462,7.222 C6.432,7.151 6.417,7.075 6.417,6.999 L6.417,2.916 C6.417,2.594 6.678,2.332 7.000,2.332 C7.322,2.332 7.583,2.594 7.583,2.916 L7.583,6.758 L9.746,8.920 C9.974,9.148 9.974,9.517 9.746,9.745 C9.632,9.859 9.482,9.915 9.333,9.915 Z"
                              fill="rgb(233, 147, 19)"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                        2022-03-31
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-white border-l-slate-50 border-l-2 border-r-slate-50 border-r-2 px-4 align-top inline-block w-full mb-5 rounded-md md:inline-block  md:w-1/3"
                    style={{
                      borderLeftStyle: "solid",
                      borderRightStyle: "solid",
                    }}
                  >
                    <div className="pb-5 mb-5" id="div-8">
                      <a
                        className="text-lime-400 flex overflow-hidden"
                        href="https://www.spcentras.lt/tab5/projektine-ideja-integracija-i-darbo-rinka/"
                      >
                        <picture className="cursor-pointer">
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_11_1648800768-03570c4f78235d0a34368b0152e7777e.webp 2x" />
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_11_1648800768-b9f7d7d796fd94ff7be671112bda4609.webp 2x" />
                          <img
                            className="w-full h-auto rounded"
                            src="https://www.spcentras.lt/uploads/_CGSmartImage/0001_11_1648800768-b9f7d7d796fd94ff7be671112bda4609.webp"
                          />
                        </picture>
                      </a>

                      <a
                        className="text-neutral-900 text-xl font-semibold flex mt-5"
                        href="https://www.spcentras.lt/tab5/projektine-ideja-integracija-i-darbo-rinka/"
                      >
                        Projektinė idėja „Integracija į darbo rinką“
                      </a>

                      <div className="items-center text-sm uppercase flex mt-5">
                        <i className="text-amber-500 font-black flex mr-3">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="rgb(233, 147, 19)"
                            height="14px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.000,13.999 C3.140,13.999 -0.000,10.859 -0.000,6.999 C-0.000,3.139 3.140,-0.001 7.000,-0.001 C10.860,-0.001 14.000,3.139 14.000,6.999 C14.000,10.859 10.860,13.999 7.000,13.999 ZM7.000,1.165 C3.783,1.165 1.167,3.782 1.167,6.999 C1.167,10.216 3.783,12.832 7.000,12.832 C10.217,12.832 12.833,10.216 12.833,6.999 C12.833,3.782 10.217,1.165 7.000,1.165 ZM9.333,9.915 C9.184,9.915 9.035,9.859 8.921,9.745 L6.588,7.412 C6.584,7.408 6.583,7.404 6.580,7.400 C6.530,7.349 6.489,7.289 6.462,7.222 C6.432,7.151 6.417,7.075 6.417,6.999 L6.417,2.916 C6.417,2.594 6.678,2.332 7.000,2.332 C7.322,2.332 7.583,2.594 7.583,2.916 L7.583,6.758 L9.746,8.920 C9.974,9.148 9.974,9.517 9.746,9.745 C9.632,9.859 9.482,9.915 9.333,9.915 Z"
                              fill="rgb(233, 147, 19)"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                        2022-03-31
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-white border-l-slate-50 border-l-2 border-r-slate-50 border-r-2 px-4 align-top inline-block w-full mb-5 rounded-md md:inline-block  md:w-1/3"
                    style={{
                      borderLeftStyle: "solid",
                      borderRightStyle: "solid",
                    }}
                  >
                    <div className="pb-5 mb-5" id="div-9">
                      <a
                        className="text-lime-400 flex overflow-hidden"
                        href="https://www.spcentras.lt/tab5/kompleksiniu-paslaugu-seimai-teikimas-vilniaus-mieste/"
                      >
                        <picture className="cursor-pointer">
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_es_1630556444-e6c38db6d7394a1f36ef9f14b83c5837.webp 2x" />
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_es_1630556444-75f3e77a8cc096a975fba79a1f270286.webp 2x" />
                          <img
                            className="w-full h-auto rounded"
                            src="https://www.spcentras.lt/uploads/_CGSmartImage/0001_es_1630556444-75f3e77a8cc096a975fba79a1f270286.webp"
                          />
                        </picture>
                      </a>

                      <a
                        className="text-neutral-900 text-xl font-semibold flex mt-5"
                        href="https://www.spcentras.lt/tab5/kompleksiniu-paslaugu-seimai-teikimas-vilniaus-mieste/"
                      >
                        Kompleksinių paslaugų šeimai teikimas Vilniaus mieste
                      </a>

                      <div className="items-center text-sm uppercase flex mt-5">
                        <i className="text-amber-500 font-black flex mr-3">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="rgb(233, 147, 19)"
                            height="14px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.000,13.999 C3.140,13.999 -0.000,10.859 -0.000,6.999 C-0.000,3.139 3.140,-0.001 7.000,-0.001 C10.860,-0.001 14.000,3.139 14.000,6.999 C14.000,10.859 10.860,13.999 7.000,13.999 ZM7.000,1.165 C3.783,1.165 1.167,3.782 1.167,6.999 C1.167,10.216 3.783,12.832 7.000,12.832 C10.217,12.832 12.833,10.216 12.833,6.999 C12.833,3.782 10.217,1.165 7.000,1.165 ZM9.333,9.915 C9.184,9.915 9.035,9.859 8.921,9.745 L6.588,7.412 C6.584,7.408 6.583,7.404 6.580,7.400 C6.530,7.349 6.489,7.289 6.462,7.222 C6.432,7.151 6.417,7.075 6.417,6.999 L6.417,2.916 C6.417,2.594 6.678,2.332 7.000,2.332 C7.322,2.332 7.583,2.594 7.583,2.916 L7.583,6.758 L9.746,8.920 C9.974,9.148 9.974,9.517 9.746,9.745 C9.632,9.859 9.482,9.915 9.333,9.915 Z"
                              fill="rgb(233, 147, 19)"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                        2021-08-31
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-white border-l-slate-50 border-l-2 border-r-slate-50 border-r-2 px-4 align-top inline-block w-full mb-5 rounded-md md:inline-block  md:w-1/3"
                    style={{
                      borderLeftStyle: "solid",
                      borderRightStyle: "solid",
                    }}
                  >
                    <div className="pb-5 mb-5" id="div-10">
                      <a
                        className="text-lime-400 flex overflow-hidden"
                        href="https://www.spcentras.lt/tab5/projektas-integralios-pagalbos-teikimas-vilniaus-mieste/"
                      >
                        <picture className="cursor-pointer">
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_inte_1615811044-29288a24c47f38178c03a95bcccd3a33.webp 2x" />
                          <source srcSet="https://www.spcentras.lt/uploads/_CGSmartImage/0001_inte_1615811044-8307a5a54f91a4ef92e652b96c0754b3.webp 2x" />
                          <img
                            className="w-full h-auto rounded"
                            src="https://www.spcentras.lt/uploads/_CGSmartImage/0001_inte_1615811044-8307a5a54f91a4ef92e652b96c0754b3.webp"
                          />
                        </picture>
                      </a>

                      <a
                        className="text-neutral-900 text-xl font-semibold flex mt-5"
                        href="https://www.spcentras.lt/tab5/projektas-integralios-pagalbos-teikimas-vilniaus-mieste/"
                      >
                        Projektas "Integralios pagalbos teikimas Vilniaus
                        mieste"
                      </a>

                      <div className="items-center text-sm uppercase flex mt-5">
                        <i className="text-amber-500 font-black flex mr-3">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="rgb(233, 147, 19)"
                            height="14px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.000,13.999 C3.140,13.999 -0.000,10.859 -0.000,6.999 C-0.000,3.139 3.140,-0.001 7.000,-0.001 C10.860,-0.001 14.000,3.139 14.000,6.999 C14.000,10.859 10.860,13.999 7.000,13.999 ZM7.000,1.165 C3.783,1.165 1.167,3.782 1.167,6.999 C1.167,10.216 3.783,12.832 7.000,12.832 C10.217,12.832 12.833,10.216 12.833,6.999 C12.833,3.782 10.217,1.165 7.000,1.165 ZM9.333,9.915 C9.184,9.915 9.035,9.859 8.921,9.745 L6.588,7.412 C6.584,7.408 6.583,7.404 6.580,7.400 C6.530,7.349 6.489,7.289 6.462,7.222 C6.432,7.151 6.417,7.075 6.417,6.999 L6.417,2.916 C6.417,2.594 6.678,2.332 7.000,2.332 C7.322,2.332 7.583,2.594 7.583,2.916 L7.583,6.758 L9.746,8.920 C9.974,9.148 9.974,9.517 9.746,9.745 C9.632,9.859 9.482,9.915 9.333,9.915 Z"
                              fill="rgb(233, 147, 19)"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                        2021-01-04
                      </div>
                    </div>
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

export default papildoma
