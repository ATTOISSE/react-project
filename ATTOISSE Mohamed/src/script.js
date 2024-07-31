import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from "./component/form/input";
import { CheckBox } from "./component/form/checkBox";
import { Category } from './component/products/category';
import { ProductRow } from './component/products/product';
import { useState } from 'react';

function Script() {
  let products = [
    {name:'Bonbon',stock:true,price:100,category:'Alimentaire'},
    {name:'Chemise',stock:false,price:10000,category:'Vetement'},
    {name:'Deo',stock:true,price:2000,category:'Cosmetique'}
  ]
  const [stock,setStock] = useState(false)
  const [search,setSearch] = useState('')
  const visibleProduct = products.filter(product =>{
      if (stock && !product.stock ) {
        return false
      }
      if(search && !product.name.toLowerCase().includes(search.toLowerCase())){
        return false
      }
      return true
    })
  return (
    <div className="my-3 container">
      <Search stock={stock} onStockChange={setStock} search={search} onSearchChange={setSearch} />
      <Product products={visibleProduct} />
    </div>
  );
}

function Search({stock,onStockChange,onSearchChange,search}){
  return <div className="">
    <Input value={search} onChange={onSearchChange}  placeholder="Rechercher..." />
    <CheckBox id="stocked" checked={stock} onChange={onStockChange} label="N'affiche pas" />
</div>
}

function Product({products}) {
  let row = []
  let lastCategory = null
  for (const product of products) {
    if (product.category != lastCategory) {
      row.push(<Category name={product.category} key={product.category}/>)
    }
    lastCategory = product.name
    row.push(<ProductRow product={product} key={product.name} />)
  }
    return <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {row}
      </tbody>
    </table>
}

export default Script;
