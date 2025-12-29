import { GiChickenOven } from "react-icons/gi";


import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/cardSlice";
import { toast } from "react-toastify";
export default function Card({name,image,id,price,type}){ 

    let dispatch= useDispatch()

    return(
        <div className=" w-[300px] h-[400px] bg-white p-3 rounded-lg shadow-lg hover:border-2 border-gray-200 ">
            <div className=" w-[100%] h-[60%] overflow-hidden rounded-lg ">
<img src={image} alt="" className="object-cover h-[95%] w-full rounded-lg "  /> 
            </div>
            <div className=" text-2xl font-semibold flex flex-col gap-3 mt-2 ">
{name}
            </div>
            <div className="w-full flex justify-between items-center mt-2 ">
               <div className="text-lg font-bold text-green-500"> {price} </div> 
       <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold "> {type === "veg"?<LuLeafyGreen />:<GiChickenOven />}  <span>{type}</span></div>
            </div>
            <button className="w-full p-3 bg-green-500 rounded-lg text-gray-700 hover:bg-green-300 transition-all mt-3 " 
            onClick={()=>{dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1}));
            toast.success("item added")}
        }  > Add to dish</button>
        </div>
    )    
}      