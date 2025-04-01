import React, { useState } from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "iPhone 14", category: "Mobile", price: 799 },
  { id: 2, name: "Samsung S23", category: "Mobile", price: 899 },
  { id: 3, name: "MacBook Pro", category: "Laptop", price: 1299 },
  { id: 4, name: "Dell XPS 15", category: "Laptop", price: 1199 },
  { id: 5, name: "Sony Headphones", category: "Accessories", price: 199 },
  { id: 6, name: "Logitech Mouse", category: "Accessories", price: 49 },
  { id: 7, name: "iPhone 13", category: "Mobile", price: 699 },
  { id: 8, name: "Google Pixel 7", category: "Mobile", price: 799 },
  { id: 9, name: "Asus ROG", category: "Laptop", price: 1499 },
  { id: 10, name: "Lenovo ThinkPad", category: "Laptop", price: 1099 },
  { id: 11, name: "JBL Speaker", category: "Accessories", price: 129 },
  { id: 12, name: "Bose Headphones", category: "Accessories", price: 299 },
  { id: 13, name: "Samsung Galaxy Tab", category: "Laptop", price: 799 },
  { id: 14, name: "iPad Pro", category: "Laptop", price: 999 },
  { id: 15, name: "AirPods Pro", category: "Accessories", price: 249 },
  { id: 16, name: "Apple Watch", category: "Accessories", price: 399 },
  { id: 17, name: "Oculus Quest", category: "Accessories", price: 499 },
  { id: 18, name: "Microsoft Surface Pro", category: "Laptop", price: 1299 },
  { id: 19, name: "Xiaomi Mi 11", category: "Mobile", price: 799 },
  { id: 20, name: "OnePlus 9", category: "Mobile", price: 749 },
  { id: 21, name: "Sony PS5", category: "Accessories", price: 499 }
];

export default function ProductCard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("low");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => (category ? product.category === category : true))
    .sort((a, b) => (sort === "low" ? a.price - b.price : b.price - a.price));

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search Products..."
            className="border p-4 rounded-xl w-full shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 fa fa-search" />
        </div>
        <select
          className="border p-4 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Accessories">Accessories</option>
        </select>
        <select
          className="border p-4 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <div className="bg-white p-6 rounded-3xl shadow-2xl transition-transform hover:scale-105 hover:shadow-xl w-full max-w-xs">
              {/* Placeholder for image */}
              <div className="w-full h-48 bg-teal-500 text-2xl text-white flex items-center justify-center font-semibold rounded-2xl mb-4">
                {product.name}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-2">{product.category}</p>
              <p className="text-3xl font-bold text-teal-600 mb-4">₹{product.price}</p>
              <button className="w-full bg-gradient-to-r from-teal-500 to-teal-700 text-white p-3 rounded-lg font-semibold hover:bg-teal-800 transition-all">
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
