import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Githube() {

    // Without loader
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    // With loader
    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Githube followers: {data?.followers}
        <img src={data?.avatar_url} alt='Git picture' width={300} />
        </div>
    )
}

export default Githube

export const githubeInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')

    return response.json()
}