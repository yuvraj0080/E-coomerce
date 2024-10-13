import axios from "axios";
import "./App.css";
import Category from "./Components/Category";
import ProductItems from "./Components/ProductItems";
import { useEffect, useState } from "react";

function App() {
  let [finalcategory, setfinalCategory] = useState([])
  let [finalPro, setfinalProducts] = useState([])
  let [catname,setCatname] = useState('')

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes)
        setfinalCategory(finalRes)
      })
  }

  let getProducts = ()=>{
    axios
    .get('https://dummyjson.com/products')
    .then((proRes) => proRes.data)
    .then((finalRes) => {
      setfinalProducts(finalRes.products)
    })
  }

  useEffect(() => {
    getCategory();
    getProducts();
  }, [])

  useEffect(() => {
    if(catname !== ""){
      axios
      .get(`https://dummyjson.com/products/category/${catname}`)
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setfinalProducts(finalRes.products)
      })  
      
    }
  }, [catname])
  

  let pItems=finalPro.map((value,index)=>{
    return(
      <ProductItems key={index} pdata={value} />
    )
  })


  return (
    <>
      <div className="p-4 bg-gray-100">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-3xl font-bold mb-4">
            OUR PRODUCTS
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">

            <div className="bg-slate-300">
              <Category finalCategory={finalcategory} setCatname={setCatname} />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {finalPro.length>=1
              ?
              pItems
              :
              'Loading ......'}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App;
