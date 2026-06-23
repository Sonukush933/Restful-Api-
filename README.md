# Product Explorer App

A modern React.js product listing application built using DummyJSON API. The project focuses on real-world frontend concepts such as API integration, search optimization, filtering, sorting, pagination, dynamic routing, loading states, and responsive UI design.

---

## 🚀 Features

### Product Listing
- Fetch products from external REST API
- Display products in responsive card layout
- Product image, title, description, rating, stock status, price, and discount information

### Search Functionality
- Real-time product search
- Debounced search implementation (500ms delay)
- Search suggestions dropdown
- Clear search option
- Handles "No Product Found" scenarios

### Filtering & Sorting
- Category-based filtering
- Sort by:
  - Price (Low → High)
  - Price (High → Low)
  - Rating
  - Name (A → Z)
  - Name (Z → A)

### Pagination
- Client-side pagination
- Previous / Next navigation
- Active page highlighting
- Automatically resets to page 1 when filters/search change

### Product Details Page
- Dynamic routing using React Router
- Fetch single product by ID
- Product information section
- Dimensions section
- Tags section
- Warranty, Shipping, and Return Policy
- Customer Reviews
- Product Verification (Barcode & QR Code)
- Product Gallery

### Loading & Error Handling
- Skeleton loaders for product listing
- Skeleton loader for product details page
- API error handling
- Product Not Found page for invalid product IDs

### Responsive Design
- Mobile-friendly layout
- Tablet optimized UI
- Desktop responsive grid system

---

## 🛠️ Tech Stack

- React.js
- React Router DOM
- Axios
- CSS3
- DummyJSON REST API

---

## 📂 Project Structure

```bash
src/
│
├── api/
│   └── productApi.js
│
├── pages/
│   ├── Products.jsx
│   └── Details/
│       ├── ProductDetails.jsx
│       └── ProductDetails.css
│
├── App.jsx
└── main.jsx
```

---

## 🔥 Concepts Practiced

This project was built to strengthen frontend development skills and understand real-world React patterns.

### React Concepts
- Functional Components
- useState
- useEffect
- Conditional Rendering
- Component Reusability
- Event Handling

### API Handling
- REST API Integration
- Async/Await
- Error Handling
- Loading States

### React Router
- Dynamic Routes
- Route Parameters
- useNavigate
- useParams

### Performance Optimization
- Debouncing Search Input
- Avoiding unnecessary filtering on every keystroke

### Data Manipulation
- Filtering
- Sorting
- Pagination
- Array Mapping
- Dynamic Rendering

### UI/UX Improvements
- Skeleton Loading Screens
- Search Suggestions
- Active Pagination
- Responsive Layout
- Product Not Found Handling

---

## 🎯 Challenges Solved

### Search + Pagination Issue
When users searched products while staying on higher pagination pages, matching products were not visible.

**Solution:**
- Reset pagination to page 1 whenever search, sorting, or category filter changes.

### Search Optimization
Typing triggered filtering on every keystroke.

**Solution:**
- Implemented debouncing with a 500ms delay.

### Dynamic Product Details
Needed to display product-specific information.

**Solution:**
- Implemented dynamic routing using React Router.
- Fetched product data based on URL parameter.

### Better Loading Experience
Users saw blank screens during API requests.

**Solution:**
- Built skeleton loaders for both product listing and product details pages.

---

## 📸 Application Screens

### Products Page
- Search
- Filter
- Sort
- Pagination
- Product Cards

### Product Details Page
- Product Overview
- Product Information
- Dimensions
- Tags
- Reviews
- Product Verification
- Gallery

---

## Future Improvements

- Wishlist Feature
- Add to Cart
- Related Products
- Dark Mode
- Redux Toolkit Integration
- Context API State Management

---

## Author

Built by Sonu as a React.js practice project focused on mastering API integration, routing, state management, UI rendering, and frontend problem solving.
