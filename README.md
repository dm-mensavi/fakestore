# E-Commerce Store

## Overview

This is a simple e-commerce store built with Angular and TailwindCSS. The application allows users to browse products, add them to a cart, and proceed through a checkout process. It fetches product data from the [FakeStoreAPI](https://fakestoreapi.com/) and provides a responsive, user-friendly interface styled with TailwindCSS.

This project was developed as a portfolio piece to demonstrate skills in Angular, TypeScript, TailwindCSS, and building a functional e-commerce application.

## Features

  * **Product Listing:** Displays a grid of products fetched from FakeStoreAPI with filtering by category and a search bar.
  * **Shopping Cart:** Users can add products to the cart, adjust quantities, remove items, and see the total price.
  * **Checkout:** A form to collect user information (name, email, address) and simulate a checkout process.
  * **Responsive Design:** Styled with TailwindCSS for a seamless experience across devices.
  * **Lazy Loading:** Routes for products and cart are lazy-loaded to improve performance.
  * **Shared Components:** Reusable components like `NavbarComponent`, `FooterComponent`, `ProductCardComponent`, and `LoadingSpinnerComponent`.

## Technologies Used

  * **Angular:** Frontend framework for building the application (version 17+ with standalone components).
  * **TypeScript:** For type-safe JavaScript code.
  * **TailwindCSS:** Utility-first CSS framework for styling.
  * **FakeStoreAPI:** External API for fetching product data.
  * **RxJS:** For handling asynchronous operations (e.g., HTTP requests, cart state).
  * **Angular Reactive Forms:** For the checkout form with validation.

## Prerequisites

Before running the project, ensure you have the following installed:

  * **Node.js:** Version 16.x or later.
  * **npm:** Version 8.x or later (comes with Node.js).
  * **Angular CLI:** Install globally with `npm install -g @angular/cli`.

## Setup Instructions

### Clone the Repository:

```bash
git clone <repository-url>
cd ecommerce-store
```

### Install Dependencies:

Run the following command to install all required packages:

```bash
npm install
```

### Run the Application:

Start the development server:

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200`. The app should load with the product listing page.

## Project Structure

```
src/app/
├── products/
│   └── ... (Product listing component with filtering and search)
├── cart/
│   └── ... (Shopping cart component with quantity controls and checkout form)
├── shared/
│   ├── navbar/navbar.component.ts
│   ├── footer/footer.component.ts
│   ├── product-card/product-card.component.ts
│   └── loading-spinner/loading-spinner.component.ts
├── services/
│   ├── products.service.ts (Services for fetching products)
│   └── cart.service.ts (Services for managing the cart)
└── ... (Other core application files)
src/styles.scss: Global styles with TailwindCSS imports.
tailwind.config.js: Configuration for TailwindCSS.
postcss.config.js: Configuration for PostCSS.
```

## Usage

### Browse Products:

  * On the home page (`/products`), view a grid of products.
  * Use the category dropdown to filter products by category.
  * Use the search bar to filter products by title.

### Add to Cart:

  * Click "Add to Cart" on a product card to add it to your cart.
  * The cart item count in the navbar updates automatically.

### Manage Cart:

  * Navigate to `/cart` to view your cart.
  * Adjust quantities using the `+` and `-` buttons.
  * Remove items with the "Remove" button or clear the entire cart with the "Clear Cart" button.
  * See the total price of your cart.

### Checkout:

  * In the cart page, fill out the checkout form with your name, email, and address.
  * Submit the form to simulate a purchase. The cart will be cleared, and a confirmation alert will appear.

## Future Enhancements

  * Add user authentication with Firebase for login/signup functionality.
  * Implement order history to allow users to view past orders.
  * Add product reviews so users can rate and comment on products.
  * Write unit tests for components and services.
  * Deploy the application to a hosting platform like Netlify or Vercel.

## Contributing

Contributions are welcome\! If you have suggestions or improvements, please:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes and commit (`git commit -m "Add your feature"`).
4.  Push to the branch (`git push origin feature/your-feature`).
5.  Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

## Acknowledgments

  * [FakeStoreAPI](https://fakestoreapi.com/) for providing a free API for product data.
  * [TailwindCSS](https://tailwindcss.com/) for an amazing utility-first CSS framework.
  * [Angular](https://angular.io/) for a powerful frontend framework.