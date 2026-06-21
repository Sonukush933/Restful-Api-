import React, { useEffect, useState } from "react";
import { getProduct } from "../api/productApi";
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProduct();
                setProducts(data.products);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    //Debounced
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearch]);

    //Loading or Error
    if (loading) {
        return <h4>Loading....</h4>;
    }
    if (error) {
        return <h2>{error}</h2>;
    }

    //Debounced
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );

    //Pagination
    const productsPerPage = 6;
    const lastProductIndex = currentPage * productsPerPage; //1 * 6 = 6
    const firstProductIndex = lastProductIndex - productsPerPage; // 6 - 6 = 0 
    const currentProducts = filteredProducts.slice(
        firstProductIndex,
        lastProductIndex,
    ); // (0,6) = 0 se 6 show 
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage); // 30 / 6 = 5 page total

    return (
        <>
            <div>
                <div className="page-header">
                    <h1>Products</h1>
                    <h2>Total Products: {products.length}</h2>
                </div>
                <div className="search-container">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="search product here"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                        <button className="clear-btn" onClick={() => setSearch("")}>
                            ✕
                        </button>
                    )}
                </div>

                <div className="products-container">
                    {filteredProducts.length === 0 ? (
                        <h2 className="not-found">No Product Found</h2>
                    ) : (
                        currentProducts.map((product) => (
                            <div className="product-card" key={product.id}>
                                <img
                                    className="product-image"
                                    src={product.thumbnail}
                                    alt={product.title}
                                />

                                <h3 className="product-title">{product.title}</h3>

                                <p className="product-description">{product.description}</p>

                                <h4 className="product-price">$ {product.price}</h4>
                            </div>
                        ))
                    )}
                </div>
                <div className="pagination">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (

                        <button
                            key={index}
                            className={
                                currentPage === index + 1
                                    ? "active-page"
                                    : ""
                            }
                            onClick={() => setCurrentPage(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default Products;
