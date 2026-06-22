import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getSingleProduct } from './../../api/productApi';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

useEffect(() => {
  const fetchProduct = async () => {
    try {

      await new Promise((resolve) =>
        setTimeout(resolve, 500)
      );

      const data = await getSingleProduct(id);

      setProduct(data);
    } catch (error) {
      setError(true);
    }
  };

  fetchProduct();
}, [id]);

if (error) {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <h1>😕 Product Not Found</h1>

        <p>
          The product you are looking for does not exist or may have been removed.
        </p>

        <button
          className="not-found-btn"
          onClick={() => navigate('/')}
        >
          ← Back to Products
        </button>
      </div>
    </div>
  );
}


if (!product) {
  return (
    <div className="details-skeleton-container">

      <div className="details-skeleton-image"></div>

      <div className="details-skeleton-content">
        <div className="details-skeleton-line large"></div>
        <div className="details-skeleton-line medium"></div>
        <div className="details-skeleton-line"></div>
        <div className="details-skeleton-line"></div>
        <div className="details-skeleton-line short"></div>
      </div>

    </div>
  );
}

  return (
    <>
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Products
      </button>
      <div className="details-container">
        <div className="details-image-section">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="details-image"
          />
        </div>

        <div className="details-info-section">
          <span className="details-category">{product.category}</span>

          <h1 className="details-title">{product.title}</h1>

          <p className="details-brand">Brand: {product.brand}</p>

          <div className="details-rating-stock">
            <span>⭐ {product.rating}</span>

            <span className={product.stock > 0 ? 'in-stock' : 'out-stock'}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="details-price-section">
            <h2 className="details-price">${product.price}</h2>

            <span className="details-discount">
              {product.discountPercentage}% OFF
            </span>
          </div>

          <p className="details-description">{product.description}</p>
        </div>
      </div>
      {/* Yahan next section aayega */}

      <div className="info-card">
        <h2>Product Information</h2>

        <div className="info-grid">
          <div>
            <strong>SKU:</strong>
            <p>{product.sku}</p>
          </div>

          <div>
            <strong>Weight:</strong>
            <p>{product.weight} kg</p>
          </div>

          <div>
            <strong>Minimum Order:</strong>
            <p>{product.minimumOrderQuantity}</p>
          </div>

          <div>
            <strong>Status:</strong>
            <p>{product.availabilityStatus}</p>
          </div>
        </div>
      </div>
      <div className="info-card">
        <h2>Dimensions</h2>

        <div className="info-grid">
          <div>
            <strong>Width</strong>
            <p>{product.dimensions.width} cm</p>
          </div>

          <div>
            <strong>Height</strong>
            <p>{product.dimensions.height} cm</p>
          </div>

          <div>
            <strong>Depth</strong>
            <p>{product.dimensions.depth} cm</p>
          </div>
        </div>
      </div>
      <div className="info-card">
        <h2>Tags</h2>

        <div className="tags-container">
          {product.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="info-card">
        <h2>Policies & Shipping</h2>

        <div className="info-grid">
          <div>
            <strong>Warranty</strong>
            <p>{product.warrantyInformation}</p>
          </div>

          <div>
            <strong>Shipping</strong>
            <p>{product.shippingInformation}</p>
          </div>

          <div>
            <strong>Return Policy</strong>
            <p>{product.returnPolicy}</p>
          </div>
        </div>
      </div>
      <div className="info-card">
        <h2>Product Verification</h2>

        <div className="verification-section">
          <div>
            <strong>Barcode</strong>
            <p>{product.meta.barcode}</p>
          </div>

          <div>
            <strong>QR Code</strong>

            <img src={product.meta.qrCode} alt="QR Code" className="qr-code" />
          </div>
        </div>
      </div>
      <div className="info-card">
        <h2>Customer Reviews</h2>

        <div className="reviews-container">
          {product.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h4>{review.reviewerName}</h4>

              <p className="review-email">{review.reviewerEmail}</p>

              <p className="review-rating">⭐ {review.rating}</p>

              <p className="review-comment">{review.comment}</p>

              <small>{new Date(review.date).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="info-card">
        <h2>Product Gallery</h2>

        <div className="gallery-grid">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`product-${index}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
