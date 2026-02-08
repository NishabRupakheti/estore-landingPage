import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("contact", "routes/contact.tsx"),
    route("about", "routes/about.tsx"),
    route("signup","routes/signup.tsx"),
    route("cart","routes/cart.tsx"),
    route("checkout","routes/checkout.tsx"),
    route("*", "components/NotFound.tsx"),
] satisfies RouteConfig;

// index function tells the router when user is at / show the home.tsx