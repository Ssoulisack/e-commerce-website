import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {

  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {

      const response = await axios.get(backendUrl + "/api/product/list")
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  // Remove product function
  const removeProduct = async (id) => {
    try {

      const response = await axios.post(backendUrl + "/api/product/remove", { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <>
      <p className='mb-2'>All Products List</p>

      {/* List Table Title */}
      <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-slate-100 text-sm'>
        <strong>image</strong>
        <strong>Name</strong>
        <strong>Category</strong>
        <strong>Price</strong>
        <strong className='text-center'>Action</strong>
      </div>

      {/* Product List */}
      {
        list.map((item, index) => (
          <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm' key={index}>
            <img className='w-12' src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
          </div>
        ))
      }

    </>
  )
}

export default List