"use client"
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

interface dProps{
   ID: number;
   artist: string;
   songs: string;
   releaseYear: string;
}

const MusicPage = () => {
   const [data, setData] = useState<Array<dProps>>([])

const loadData = async () => {   
   const res = await axios.get('http://localhost:5000/api/get')
   setData(res.data.reverse())
}

const deleteSongs =  (id: number) => {
    axios.delete(`http://localhost:5000/api/delete/${id}`);
   setTimeout(() => {
      loadData();
   },300)
}

useEffect(() => {
   loadData();
},[]);

// console.log(JSON.stringify(data));


 return (
    <div>
{ data && data.map((d) => (
  <table className="w-full border-collapse border bg-slate-900 border-black max-w-xl mt-8 mx-auto shadow-md" key={d.ID}>
  <thead>
    <tr className="font-bold text-white">
      <th className="py-2 px-4 text-left">ARTIST</th>
      <th className="py-2 px-4 text-left">SONGS</th>
      <th className="py-2 px-4 text-left">RELEASEYEAR</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-gray-500 font-semibold">
      <td className="py-2 px-4">{d.artist}</td>
      <td className="py-2 px-4">{d.songs}</td>
      <td className="py-2 px-4">{d.releaseYear}</td>
      <td>
         <Link href={`/updateMusic/${d.ID}`}>
        <button> <FaEdit color='blue'/></button> 
         </Link>
      </td><td>
         <button onClick={() => deleteSongs(d.ID)}><MdDelete color='red'/></button>
      </td>
    </tr>
    
  </tbody>
</table>

))}
    </div>
 )
}

export default MusicPage;