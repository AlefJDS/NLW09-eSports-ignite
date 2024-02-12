//JSX: JavaScript + XML (HTML)
//Componentes / propriedades

//importando componentes do phosphor-react
//antes no terminal é preciso instalar os componentes através do comando npm i phosphor-react e depois adicionar o import abaixo
import { MagnifyingGlassPlus } from "phosphor-react"

import "./styles/main.css"
import logoImg from "./assets/Logo-eSports.svg"

function App() {
  return (
    <div className=" max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-green-400 to-yellow-400 ...">
          {" "}
          duo{" "}
        </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16 cente">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/LOL.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/APEX.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex</strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              2 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/CS.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter Strike: Global
            </strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              8 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/DOTA.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/FORTINITE.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortinite</strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              5 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/WOW.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Word of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              10 anúncios
            </span>
          </div>
        </a>

        <div className="bg "></div>
      </div>
      <div className="pt-1 self-stretch rounded-lg overflow-hidden mt-8 bg-gradient-to-r from-indigo-400 via-green-400 to-yellow-400 ...">
        <div className="bg-[#242634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-blac block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar Anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
