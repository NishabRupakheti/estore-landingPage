import type { Route } from "./+types/home";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Cart" },
    { name: "description", content: "This is a cart page" },
  ];
}
const cart = () => {
  return (
    <div>Here is a cart page</div>
  )
}

export default cart