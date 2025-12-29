
import { useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { dataContext } from "../Context/UserContext";
import { food_items } from "../Food";
import { useSelector } from "react-redux";


export default function Nav(){

    let {input, setInput, cate, setCate, showCart, setShowCard} = useContext(dataContext)
   useEffect(()=>{          
   let newlist= food_items.filter((item)=>item.food_name.
   includes(input)||item.food_name.toLowerCase().includes(input))
    setCate(newlist)
   },[input])

let items = useSelector (state=>state.card)
    return(
        <div className="w-full h-17 flex justify-between items-center px-5 md:px-8 "> 
<div className="w-16 h-16 bg-white flex justify-center items-center rounded-md shadow-xl">
<MdFastfood className="w-[30px] h-[30px] text-green-500"  />
</div> 
<form onSubmit={(e)=>e.preventDefault()} action="" className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]  ">
    <IoSearch className="text-green-500 w-5 h-5 "/>
    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Search Item..." className="w-[100%] outline-none text-[16px] md:text-[20px]  " />

</form>

<div className="w-16 h-16 bg-white flex justify-center items-center shadow-xl relative" onClick={()=>{
    setShowCard(true)
}}>
    <span className=" absolute top-0 right-2 text-green-500 font-bold text-[18px] "> {items.length} </span>
    <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
</div>

        </div>
    )
}                                          