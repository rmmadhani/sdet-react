import React, { useState, useEffect } from 'react';
import { fetchDatanorthwind } from './services/DataService.js';

export function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchDatanorthwind().then(data => {
            if (data) {
                setProducts(data);
            }
        });
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.productId}>{product.productName}</li>
                ))}
            </ul>
        </div>
    );
}
