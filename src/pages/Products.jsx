import { useState, useEffect } from 'react'

export default function Products() {

    const api_products = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(api_products)
            .then(res => res.json())
            .then(data => {

                setProducts(data)

            })
    }, [])

    console.log(products)


    return (
        <>
            <main>
                <div className="container py-5">

                    <div className="row row-cols-4 g-3">

                        {
                            products.map(product => (

                                <div className="" key={product.id}>
                                    <div className="card">
                                        <div className="ratio ratio-1x1">
                                            <img src={product.image} className="card-img-top object-fit-contain img-fluid p-3" alt={product.title} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description.slice(0, 80)}...</p>
                                            <a href="#" className="btn btn-primary">buy {product.price} €</a>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>
            </main>
        </>
    )

}