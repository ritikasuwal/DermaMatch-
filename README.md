# DermaMatch

DermaMatch is a modern skincare e-commerce platform built with React and Tailwind CSS. It offers a smooth shopping experience for users, complete with product browsing, cart management, and secure payment integration via eSewa.

## 🛍️ Features

- **Responsive Design**: Optimized for all devices using Tailwind CSS.
- **Product Showcase**: Dynamic sliders for featured products and categories.
- **Cart Functionality**: Add, remove, and manage products in the shopping cart.
- **Persistent Cart**: Cart items are saved in `localStorage` for session persistence.
- **eSewa Payment Integration**: Secure payment processing through eSewa's API.
- **React Router**: Smooth navigation between Home, Cart, and Payment Success pages.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ritikasuwal/DermaMatch-.git
   cd DermaMatch-
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the application:**

   Open your browser and navigate to `http://localhost:5173` to view the app.

## 🧾 Payment Integration with eSewa

DermaMatch integrates with eSewa for payment processing. Upon successful payment, eSewa redirects to a success URL with transaction details encoded in the `data` query parameter.

### Handling Payment Success

The application includes a `/success` route that decodes the `data` parameter and displays a receipt with transaction details such as:

- Transaction Code
- Status
- Total Amount
- Transaction UUID
- Product Code

Ensure that the `EsewaPayment` component correctly handles form submissions and redirects to the appropriate success and failure URLs.

## 📁 Project Structure

```
src/
├── assets/                # Static assets like images
├── components/
│   ├── Header.jsx         # Navigation header
│   ├── HomeSlider/        # Home page slider component
│   ├── HomeCatSlider/     # Category slider component
│   ├── ProductCard.jsx    # Individual product card
│   └── pages/
│       ├── Home/          # Home page components
│       ├── Cart.jsx       # Shopping cart page
│       └── EsewaPayment.jsx # eSewa payment form
├── Context/
│   └── CartContext.jsx    # Context API for cart state management
├── App.jsx                # Main application component
└── main.jsx               # Entry point
```

## 🛠️ Technologies Used

- React
- Tailwind CSS
- React Router DOM
- eSewa Payment Gateway
- Context API for state management

## 📌 Notes

- Ensure that the `CartContext` is properly exported and imported using named exports:

  ```jsx
  // CartContext.jsx
  export const CartContext = createContext();
  ```

  ```jsx
  // ProductCard.jsx
  import { CartContext } from '../Context/CartContext';
  ```

- When using `useContext`, destructure the required functions:

  ```jsx
  const { addToCart } = useContext(CartContext);
  ```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
