// src/components/ProductTable.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from './api.js';

function ProductTable1() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };

        getData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    {/* ... other headers ... */}
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.productId}>
                        <td>{product.productId}</td>
                        <td>{product.productName}</td>
                        {/* ... other data cells ... */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable1;
