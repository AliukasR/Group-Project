import React from "react"

export function Header() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <style>
        {`
          @media (max-width: 767px) {
            #div-1 {
              display: none !important;
            }
            #ul-1 {
              display: block !important; 
              margin: 0px !important;
            }
            #li-1, #li-2, #li-3, #li-4, #li-5, #li-6 {
              display: block !important;
            }
            #a-1, #a-2, #a-3, #a-4, #a-5, #a-6 {
              display: block !important; 
              position: relative !important; 
              padding: 15px !important;
            }
            #ul-2 {
              display: block !important; 
              margin: 0px !important;
            }
            #li-7, #li-8, #li-9, #li-10 {
              display: block !important;
            }
            #a-7, #a-8, #a-9, #a-10 {
              display: block !important; 
              position: relative !important; 
              padding: 15px !important;
            }
          }
        `}
      </style>

      <div className="text-stone-500 items-end flex-col flex h-full" id="div-1">
        <div className="text-white basis-[2.63rem] flex w-full">
          <div className="basis-full flex-grow px-3.5 flex -m-5 text-sm text-zinc-500 min-[767px]:pt-0 min-[767px]:pr-3 min-[767px]:pb-0 min-[767px]:pl-3 min-[767px]:-ml-3">
            <ul className="flex list-none -m-5" id="ul-1">
              <li className="flex" id="li-1">
                <a
                  className="items-center py-3 px-5 flex min-[767px]:p-1 min-[1023px]:p-3"
                  href=""
                  id="a-1"
                >
                  Aptarnavimo tvarka
                </a>
              </li>
              <li className="flex text-zinc-500" id="li-2">
                <a
                  className="items-center py-3 px-5 flex min-[767px]:p-1  min-[1023px]:p-3"
                  href=""
                  id="a-2"
                >
                  Nuorodos
                </a>
              </li>
              <li className="flex text-zinc-500" id="li-3">
                <a
                  className="items-center py-3 px-5 flex min-[767px]:p-1  min-[1023px]:p-3"
                  href=""
                  id="a-3"
                >
                  Teisės aktai
                </a>
              </li>

              <li className="flex text-zinc-500" id="li-4">
                <a
                  className="items-center py-3 px-5 flex min-[767px]:p-1  min-[1023px]:p-3"
                  href=""
                  id="a-4"
                >
                  Karjera
                </a>
              </li>

              <li className="flex text-zinc-500" id="li-5">
                <a
                  className="items-center py-3 px-5 flex min-[767px]:p-1  min-[1023px]:p-3"
                  href=""
                  id="a-5"
                >
                  Asmens duomenų apsauga
                </a>
              </li>

              <li className="flex text-lime-600" id="li-6">
                <a
                  className="items-center py-3 px-5 flex min-[767px]:p-1  min-[1023px]:p-3"
                  href=""
                  id="a-6"
                >
                  Bendruomeniniai šeimos namai
                </a>
              </li>
            </ul>
          </div>
          <div className="flex py-1 text-xs text-neutral-700 font-bold min-[767px]:pt-0  min-[767px]:pr-3 min-[767px]:pb-0 min-[767px]:pl-3">
            <div>
              <div className="flex-col flex">
                <button className="items-center cursor-pointer justify-between px-1.5 text-center flex w-24 h-11 overflow-visible">
                  <span className="flex-grow text-right">Lietuvių</span>
                  <img
                    className="blur-[0px] w-6 h-6 ml-3"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik03LDEwTDEyLDE1TDE3LDEwSDdaIiAvPg0KPC9zdmc+"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="px-3.5 flex text-lime-600 font-black min-[767px]:pt-0  min-[767px]:pr-3 min-[767px]:pb-0 min-[767px]:pl-3">
            <a className="items-center flex -m-3.5">
              <i className="cursor-pointer flex">
                <svg
                  className="w-3.5 h-3.5"
                  fill="rgb(70, 168, 0)"
                  height="14px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="opacity-80"
                    d="M13.781,12.751 L10.331,9.286 C11.218,8.267 11.704,6.986 11.704,5.652 C11.704,2.536 9.079,-0.000 5.851,-0.000 C2.624,-0.000 -0.001,2.536 -0.001,5.652 C-0.001,8.769 2.624,11.304 5.851,11.304 C7.063,11.304 8.218,10.952 9.205,10.282 L12.681,13.773 C12.826,13.919 13.022,13.999 13.231,13.999 C13.429,13.999 13.618,13.926 13.760,13.794 C14.064,13.512 14.073,13.045 13.781,12.751 ZM5.851,1.474 C8.237,1.474 10.178,3.348 10.178,5.652 C10.178,7.956 8.237,9.830 5.851,9.830 C3.466,9.830 1.525,7.956 1.525,5.652 C1.525,3.348 3.466,1.474 5.851,1.474 Z"
                    fill="rgb(70, 168, 0)"
                    fillRule="evenodd"
                    opacity="0.8"
                  />
                </svg>
              </i>
            </a>
          </div>

          <div className="px-3.5 flex text-lime-600 font-black min-[767px]:pt-0  min-[767px]:pr-3 min-[767px]:pb-0 min-[767px]:pl-3">
            <a className="items-center flex -m-3.5" href="">
              <i className="cursor-pointer flex">
                <svg
                  className="w-4 h-4"
                  fill="rgb(70, 168, 0)"
                  focusable="false"
                  height="16px"
                  role="img"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                    fill="rgb(70, 168, 0)"
                  ></path>
                </svg>
              </i>
            </a>
          </div>

          <div className="px-3.5 flex text-lime-600 font-black min-[767px]:pt-0  min-[767px]:pr-3 min-[767px]:pb-0 min-[767px]:pl-3">
            <a className="items-center flex -m-3.5" href="">
              <i className="cursor-pointer flex">
                <svg
                  className="w-4 h-4"
                  fill="rgb(70, 168, 0)"
                  height="16px"
                  version="1.1"
                  viewBox="-143 145 512 512"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
"
                    fill="rgb(70, 168, 0)"
                  />
                </svg>
              </i>
            </a>
          </div>

          <div className="px-3.5 flex text-lime-600 font-black min-[767px]:pt-0  min-[767px]:pr-3 min-[767px]:pb-0 min-[767px]:pl-3">
            <a className="items-center flex -m-3.5" href="">
              <i className="cursor-pointer flex">
                <svg
                  className="w-3.5 h-4"
                  fill="rgb(70, 168, 0)"
                  height="17px"
                  xmlns=""
                >
                  <path
                    className="opacity-80"
                    d="M13.451,16.154 C13.306,16.227 13.150,16.262 12.997,16.262 C12.631,16.262 12.279,16.065 12.102,15.723 L10.092,11.849 L9.060,11.849 L6.302,11.849 C5.454,11.849 4.766,11.176 4.766,10.344 L4.766,5.528 C4.766,4.713 5.440,4.053 6.271,4.053 C7.314,4.053 7.776,4.917 7.776,5.528 L7.776,7.751 L8.779,7.751 L10.299,7.751 C10.715,7.751 11.052,8.082 11.052,8.489 C11.052,8.650 10.988,8.790 10.899,8.912 C10.763,9.098 10.551,9.227 10.299,9.227 L7.776,9.227 L7.776,9.882 L10.707,9.882 C11.085,9.882 11.431,10.090 11.601,10.420 L13.890,14.832 C14.142,15.316 13.946,15.909 13.451,16.154 ZM6.271,3.350 C5.328,3.350 4.562,2.600 4.562,1.675 C4.562,0.749 5.328,-0.000 6.271,-0.000 C7.214,-0.000 7.980,0.749 7.980,1.675 C7.980,2.600 7.214,3.350 6.271,3.350 ZM1.505,11.820 C1.505,13.862 3.200,15.524 5.284,15.524 C7.004,15.524 8.458,14.389 8.912,12.843 C9.118,12.841 9.312,12.840 9.479,12.838 L10.076,13.987 C9.237,15.762 7.407,16.999 5.284,16.999 C2.370,16.999 0.000,14.676 0.000,11.820 C0.000,9.483 1.589,7.503 3.763,6.861 L3.763,8.432 C2.435,9.007 1.505,10.308 1.505,11.820 Z"
                    fill="rgb(70, 168, 0)"
                    fillRule="evenodd"
                    opacity="0.8"
                  />
                </svg>
              </i>
            </a>
          </div>

          <div className="px-3.5 flex text-lime-600 font-black min-[767px]:pt-0  min-[767px]:pr-3 min-[767px]:pb-0 min-[767px]:pl-3">
            <a className="items-center flex -m-3.5" href="">
              <i className="cursor-pointer flex">
                <svg
                  className="w-4 h-4"
                  fill="rgb(70, 168, 0)"
                  height="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="opacity-80"
                    d="M9.143,16.000 L9.143,10.285 L16.000,10.285 L16.000,16.000 L9.143,16.000 ZM14.857,12.571 L10.286,12.571 L10.286,14.857 L14.857,14.857 L14.857,12.571 ZM12.000,8.571 L4.000,8.571 L4.000,9.714 L2.857,9.714 L2.857,7.428 L7.429,7.428 L7.429,5.714 L4.571,5.714 L4.571,-0.000 L11.429,-0.000 L11.429,5.714 L8.571,5.714 L8.571,7.428 L13.143,7.428 L13.143,9.714 L12.000,9.714 L12.000,8.571 ZM10.286,4.571 L10.286,2.285 L5.714,2.285 L5.714,4.571 L10.286,4.571 ZM6.857,16.000 L-0.000,16.000 L-0.000,10.285 L6.857,10.285 L6.857,16.000 ZM5.714,12.571 L1.143,12.571 L1.143,14.857 L5.714,14.857 L5.714,12.571 Z"
                    fill="rgb(70, 168, 0)"
                    fillRule="evenodd"
                    opacity="0.8"
                  />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
      <div>
        <nav className="basis-[5.63rem] pl-48 font-semibold uppercase">
          <ul
            className="flex list-none -m-6 min-[1023px]:mt-0 min-[1023px]:-mr-3 min-[1023px]:mb-0 min-[1023px]:-ml-3"
            id="ul-2"
          >
            <li className="flex text-lime-600" id="li-7">
              <a
                className="items-center py-3 px-6 text-center flex min-[767px]:p-3 min-[1023px]:p-3"
                id="a-7"
              >
                Naujienos
              </a>
            </li>
            <li className="flex text-black" id="li-8">
              <a
                className="items-center py-3 px-6 text-center flex min-[767px]:p-3  min-[1023px]:p-3"
                id="a-8"
              >
                Administracinė informacija
              </a>
            </li>

            <li className="flex text-black" id="li-9">
              <a
                className="items-center py-3 px-6 text-center flex min-[767px]:p-3  min-[1023px]:p-3"
                id="a-9"
              >
                Paslaugos
              </a>
            </li>

            <li className="flex text-black" id="li-10">
              <a
                className="items-center py-3 px-6 text-center flex min-[767px]:p-3  min-[1023px]:p-3"
                id="a-10"
              >
                Struktūra ir kontaktai
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
