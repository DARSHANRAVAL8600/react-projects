import { useEffect, useState } from "react";

const App = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error:", error))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  return (
    <div style={{ backgroundColor: "#f0f4f8" }}>
      <p className="bg-black text-white text-center py-5 text-2xl">Product Page</p>

      {loading && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl text-gray-500">Loading...</p>
        </div>
      )}

      <div className="main-container flex flex-wrap justify-around bg-cyan-900 py-5">
        {product &&
          product.map((product, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-5"
            >
              <img
                className="m-auto py-5"
                src={product.image}
                width={"200px"}
                alt=""
              />

              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                  <p>{product.description.slice(0, 70)}</p>
                  <p style={{ fontSize: "25px", fontWeight: "800" }}>
                    ${product.price}
                  </p>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  add to cart
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
