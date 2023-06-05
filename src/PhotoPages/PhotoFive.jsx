import React from 'react'

export default function PhotoFive() {
    return (
        <div className='own-photo-page'>
            <div>
                <img src="/photos/bnw_closet.jpg" alt="" className='own-photo' />
            </div>
            <span className='own-photo-text'>
                <p className='date-of-photo'>
                    12/20/20
                </p>
                <p className='text-of-photo'>
                    Organized mess
                </p>
            </span>
        </div>
    )
}