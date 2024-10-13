import React from 'react';

export default function Category({ finalCategory,setCatname }) {

    let cat = finalCategory.map((v, i) => {
        return (
            <li onClick={()=>setCatname(v.name)} key={i} className="cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                {v.name}
            </li>
        )
    })

    return (
        <div className='p-4 bg-gray-200 rounded-md'>
            <h2 className="text-lg font-semibold mb-2">Category</h2>
            <ul>{cat}</ul>
        </div>
    )
}