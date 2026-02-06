import type { Route } from "./+types/home";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Cart" },
    { name: "description", content: "This is a cart page" },
  ];
}

const items = [

  { id: 1, img: "/app/images/dogfood.png", price: 100, rating: 3, reviews: 35, name: "Dog Food" },
  { id: 2, img: "/app/images/cam.png", price: 400, rating: 4, reviews: 95, name: "DSLR Camera" },
  { id: 7, img: "/app/images/laptop.png", price: 800, rating: 5, reviews: 325, name: "Gaming Laptop" },

]

const cart = () => {
  return (
    <div>
      {
        items.map((item) => (
          <div key={item.id} className="flex gap-4 mb-4 p-4 border border-gray-300 rounded">
            <img src={item.img} alt={item.name} className="w-24 h-24 object-contain" />
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-red-500 font-semibold">${item.price}</p>
              <p className="text-gray-600">Rating: {item.rating} ({item.reviews} reviews)</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default cart