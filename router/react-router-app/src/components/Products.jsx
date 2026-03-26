import { Link } from "react-router";

export default function Products() {
  const products = [
    {
      id: "1",
      image: "/apple.png",
      name: "Apples",
      price: 20,
      description: "This is a fresh juicy apple",
    },
    {
      id: "2",
      image: "/banana.png",
      name: "Bananas",
      price: 30,
      description: "This is sweet and healthy bananas",
    },
    {
      id: "3",
      image: "/orange.png",
      name: "Oranges",
      price: 35,
      description: "Oranges  are fresh and packed with vitamin C",
    },
    {
      id: "4",
      image: "/pineapple.png",
      name: "Pineapples",
      price: 50,
      description: "Tasty and Nutritional Pineapples",
    },
  ];

  return (
    <div className="m-6 flex gap-4">
      {products.map((product) => (
        <Link to={`/products/${product.name}`}>
        <div
          className="border border-gray-50 rounded-md shadow-md w-fit"
          key={product.id}
        >
          <img
            src={product.image}
            alt="apple"
            className="h-[240px] w-[240px] object-contain"
          />
          <div className="bg-gray-300 text-xl font-semibold p-2 text-center rounded-b-md">
            <span>{product.name}</span>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}
