
import Card from "./Card"
function Hero() {
  return (
    <div className="calc">
        <div className="w-full bg-[#323030] h-20 flex items-center p-10 ">
        <input type="text" placeholder="Search Your Food" className="h-10 w-72 rounded-md outline-none border-none p-3" ></input>
        <i  className="fa-solid fa-magnifying-glass ml-4 text-white font-bold text-[30px]"></i>
        </div>
        <div className="h-full w-full flex items-center justify-center">

<Card />
        </div>


    </div>
  )
}

export default Hero