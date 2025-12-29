import Card from "../Component/Card"
import { Categories } from "../Category"
import Nav from "../Component/Nav"
import { food_items } from "../Food"
import { useContext, useState } from "react"
import { dataContext } from "../Context/UserContext"
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Component/Card2"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"


export default function Home() {

    let { cate, setCate, input, showCard, setShowCard } = useContext(dataContext)

    function filter(Category) {
        if (Category === "All") {
            setCate(food_items)
        } else {
            let newList = food_items.filter((item) => (item.food_category.toLowerCase() === Category.toLowerCase()))
            setCate(newList)
        }
    }

let item= useSelector(state=>state.card)
    
let subTotal = item.reduce((total, item)=>total+item.qty*item.price,0)
let deliveryFee=20;
let taxes = subTotal*0.5/100;
let total = Math.floor(subTotal+deliveryFee+taxes)

    return (
        <div className=" bg-slate-200 w-full min-h-screen pt-2.5" >
            <Nav />
            {!input ? <div className="flex flex-wrap justify-center items-center gap-5 w-[100%] pt-5 ">
                {Categories.map((item) => {
                    return (
                        <div className="w-[140px] h-[140px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold 
                text-gray-600 rounded-l shadow-xl hover:bg-green-200 
                cursor-pointer transition-all duration-200 "
                            onClick={() => filter(item.name)} >
                            {item.icon}
                            {item.name}

                        </div>
                    )
                })}
            </div> : null}


            <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8 ">
                {cate.length>1?  cate.map((item) => (
                    <Card name={item.food_name} image={item.food_image} quantity={item.food_quantity}
                        price={item.price} id={item.id} type={item.food_type} />
                )):<div className="text-center text-2xl text-green-500 font-semibold pt-5 "> no dish found </div>}
              
            </div>

            <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-5 transition-all duration-500 flex flex-col items-center overflow-auto ${showCard?"translate-0":"translate-x-full"} `} >
                <header className="w-full flex justify-between items-center "> 

                    <span className="text-green-400 text-[18px] font-semibold" >Order items</span>
                       <RxCross2 className="text-green-400 w-6 h-6 cursor-pointer text-[18px] font-semibold hover:text-gray-600 " onClick={()=>setShowCard(false)} />
       
                </header>

                {item.length>0? <>
                 <div className="w-full mt-8 flex flex-col gap-8 ">
                        {item.map((item)=>(
                            <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                        ))}
                 </div>   
                 <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-4 p-8 ">
                    <div className=" w-full flex justify-between items-center">
                        <span className="text-lg text-gray-600 font-semibold">Subtotal</span>
                        <span className="text-green-400 font-semibold text-lg">Rs {subTotal} /-</span>
                        </div>
                    
                    <div className=" w-full flex justify-between items-center">
                        <span className="text-lg text-gray-600 font-semibold">Delivery Fess</span>
                        <span className="text-green-400 font-semibold text-lg">Rs {deliveryFee} /-</span>
                        </div>
                       
                 <div className=" w-full flex justify-between items-center">
                        <span className="text-lg text-gray-600 font-semibold">Taxes</span>
                        <span className="text-green-400 font-semibold text-lg">Rs {taxes} /-</span>
                        </div>
                        </div>

                           <div className=" w-full flex justify-between items-center p-9">
                        <span className="text-2xl text-gray-600 font-semibold">Total</span>
                        <span className="text-green-400 font-semibold text-2xl">Rs {total} /-</span>
                        
                    
                 </div>
                 <button className="w-[80%] p-3 bg-green-500 rounded-lg text-gray-700 hover:bg-green-400 transition-all mt-3 " onClick={()=>{
                    toast.success("Order Placed..")
                 }}>Place Order</button>
                  </>:
                  <div className="text-center text-2xl text-green-500 font-semibold pt-5 ">
                    Empty Cart 
                    </div> } 
              
            </div>
        </div>
    )
} 
  

