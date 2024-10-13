import React from 'react'

export default function ProductItems({pdata}) {
    return (
        <div className='shadow-lg text-center pb-4'>
            <img src={pdata.thumbnail} text='product-photo' />
            <h4>{pdata.title}</h4>
            <b>{pdata.price}</b>
        </div>

    )
}
