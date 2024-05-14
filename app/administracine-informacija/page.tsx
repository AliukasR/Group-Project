import React from "react"

const administracine = () => {
  return (
    <>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `@media (max-width: 767px) {
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
            }`,
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
                Administracinė informacija
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
                    Administracinė informacija
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
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
                    Administracinė informacija
                  </div>

                  <ul className="list-none text-stone-500" id="ul-1">
                    <li className="list-item">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="https://www.spcentras.lt/nuostatai/"
                      >
                        Nuostatai
                      </a>
                    </li>
                    <li className="list-item">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="https://www.spcentras.lt/veiklos-ataskaita/"
                      >
                        Veiklos ataskaita ir planas
                      </a>
                    </li>

                    <li className="list-item">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="https://www.spcentras.lt/administracine-informacija-viesieji-pirkimai/"
                      >
                        Viešieji pirkimai
                      </a>
                    </li>

                    <li className="list-item">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="https://www.spcentras.lt/darbo-uzmoketis/"
                      >
                        Darbo užmokestis
                      </a>
                    </li>

                    <li className="list-item">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="https://www.spcentras.lt/biudzeto-vykdymo-ataskaitu-rinkiniai/"
                      >
                        Biudžeto ir finansinės ataskaitos
                      </a>
                    </li>

                    <li className="list-item">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="https://www.spcentras.lt/socialiniu-paslaugu-kokybe/"
                      >
                        Socialinių paslaugų kokybė
                      </a>
                    </li>

                    <li className="list-item">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="https://www.spcentras.lt/administracine-informacija-korupcijos-prevencija/"
                      >
                        Korupcijos prevencija
                      </a>
                    </li>

                    <li className="list-item">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="https://www.spcentras.lt/tarnybiniai-automobiliai/"
                      >
                        Tarnybiniai automobiliai
                      </a>
                    </li>

                    <li className="list-item">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="https://www.spcentras.lt/paskatinimai-ir-apdovanojimai/"
                      >
                        Paskatinimai ir apdovanojimai
                      </a>
                    </li>

                    <li className="list-item">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="https://www.spcentras.lt/administracine-informacija-asmens-duomenu-apsauga/"
                      >
                        Asmens duomenų apsauga
                      </a>
                    </li>

                    <li className="list-item">
                      <a
                        className="items-center border-t-zinc-300 border-t-2 py-4 pl-3 pr-6 flex border-solid"
                        href="https://www.spcentras.lt/etikos-kodeksas/"
                      >
                        Aptarnavimo standartas
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>

              <div className="flex-grow px-4 min-w-[0.06rem]">
                <div className="bg-white pb-7 px-8 pt-5 rounded-md">
                  <div className="text-justify">
                    <strong className="font-bold">
                      VILNIAUS MIESTO SOCIALINIŲ PASLAUGŲ CENTRAS
                    </strong>
                    - yra Vilniaus miesto savivaldybės biudžetinė įstaiga,
                    priskirta Vilniaus m. savivaldybės administracijos
                    Socialinių paslaugų skyriaus reguliavimo sričiai. Centras
                    įsteigtas Vilniaus miesto tarybos sprendimu 1991 m.
                    lapkričio 20 d.
                  </div>

                  <div className="text-stone-500/[0.51] text-right">
                    Informacija atnaujinta 2024-04-15
                  </div>
                </div>

                <br />

                <div className="text-xl text-neutral-900 font-semibold">
                  <div className="bg-white rounded-md">
                    <a
                      className="items-center justify-between py-4 pl-8 pr-12 relative"
                      href="https://www.spcentras.lt/#"
                    >
                      MŪSŲ MISIJA
                      <div className="text-lime-400 items-center cursor-pointer justify-center absolute right-[0.63rem] top-[calc(50%_-_18px)] flex w-9 h-9 ml-3 border-2 border-lime-400 border-solid rounded-full font-black">
                        <i className="flex">
                          <svg
                            className="w-3 h-2.5"
                            fill="rgb(166, 199, 66)"
                            height="10px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.754,1.097 C8.577,0.917 8.282,0.917 8.099,1.097 C7.922,1.273 7.922,1.563 8.099,1.738 L11.421,5.018 L0.458,5.018 C0.203,5.018 -0.000,5.220 -0.000,5.472 C-0.000,5.724 0.203,5.930 0.458,5.930 L11.421,5.930 L8.099,9.205 C7.922,9.386 7.922,9.678 8.099,9.852 C8.282,10.033 8.577,10.033 8.754,9.852 L12.862,5.795 C13.045,5.620 13.045,5.329 12.862,5.156 L8.754,1.097 Z"
                              fill="rgb(166, 199, 66)"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                      </div>
                    </a>
                  </div>

                  <div className="bg-white mt-3.5 rounded-md">
                    <a
                      className="items-center justify-between py-4 pl-8 pr-12 relative"
                      href="https://www.spcentras.lt/#"
                    >
                      MŪSŲ VIZIJA
                      <div className="text-lime-400 items-center cursor-pointer justify-center absolute right-[0.63rem] top-[calc(50%_-_18px)] flex w-9 h-9 ml-3 border-2 border-lime-400 border-solid rounded-full font-black">
                        <i className="flex">
                          <svg
                            className="w-3 h-2.5"
                            fill="rgb(166, 199, 66)"
                            height="10px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.754,1.097 C8.577,0.917 8.282,0.917 8.099,1.097 C7.922,1.273 7.922,1.563 8.099,1.738 L11.421,5.018 L0.458,5.018 C0.203,5.018 -0.000,5.220 -0.000,5.472 C-0.000,5.724 0.203,5.930 0.458,5.930 L11.421,5.930 L8.099,9.205 C7.922,9.386 7.922,9.678 8.099,9.852 C8.282,10.033 8.577,10.033 8.754,9.852 L12.862,5.795 C13.045,5.620 13.045,5.329 12.862,5.156 L8.754,1.097 Z"
                              fill="rgb(166, 199, 66)"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                      </div>
                    </a>
                  </div>

                  <div className="bg-white mt-3.5 rounded-md">
                    <a
                      className="items-center justify-between py-4 pl-8 pr-12 relative"
                      href="https://www.spcentras.lt/#"
                    >
                      MŪSŲ VERTYBĖS
                      <div className="text-lime-400 items-center cursor-pointer justify-center absolute right-[0.63rem] top-[calc(50%_-_18px)] flex w-9 h-9 ml-3 border-2 border-lime-400 border-solid rounded-full font-black">
                        <i className="flex">
                          <svg
                            className="w-3 h-2.5"
                            fill="rgb(166, 199, 66)"
                            height="10px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.754,1.097 C8.577,0.917 8.282,0.917 8.099,1.097 C7.922,1.273 7.922,1.563 8.099,1.738 L11.421,5.018 L0.458,5.018 C0.203,5.018 -0.000,5.220 -0.000,5.472 C-0.000,5.724 0.203,5.930 0.458,5.930 L11.421,5.930 L8.099,9.205 C7.922,9.386 7.922,9.678 8.099,9.852 C8.282,10.033 8.577,10.033 8.754,9.852 L12.862,5.795 C13.045,5.620 13.045,5.329 12.862,5.156 L8.754,1.097 Z"
                              fill="rgb(166, 199, 66)"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                      </div>
                    </a>
                  </div>

                  <div className="bg-white mt-3.5 rounded-md">
                    <a
                      className="items-center justify-between py-4 pl-8 pr-12 relative"
                      href="https://www.spcentras.lt/#"
                    >
                      MŪSŲ FUNKCIJOS
                      <div className="text-lime-400 items-center cursor-pointer justify-center absolute right-[0.63rem] top-[calc(50%_-_18px)] flex w-9 h-9 ml-3 border-2 border-lime-400 border-solid rounded-full font-black">
                        <i className="flex">
                          <svg
                            className="w-3 h-2.5"
                            fill="rgb(166, 199, 66)"
                            height="10px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.754,1.097 C8.577,0.917 8.282,0.917 8.099,1.097 C7.922,1.273 7.922,1.563 8.099,1.738 L11.421,5.018 L0.458,5.018 C0.203,5.018 -0.000,5.220 -0.000,5.472 C-0.000,5.724 0.203,5.930 0.458,5.930 L11.421,5.930 L8.099,9.205 C7.922,9.386 7.922,9.678 8.099,9.852 C8.282,10.033 8.577,10.033 8.754,9.852 L12.862,5.795 C13.045,5.620 13.045,5.329 12.862,5.156 L8.754,1.097 Z"
                              fill="rgb(166, 199, 66)"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                      </div>
                    </a>
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

export default administracine
