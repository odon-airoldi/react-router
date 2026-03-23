import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"



export default function Product() {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    const api_product = `https://fakestoreapi.com/products/${id}`

    // console.log(id)

    useEffect(() => {

        fetch(api_product)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })

    }, [])



    return (
        <>
            {product.title}
        </>
    )

}