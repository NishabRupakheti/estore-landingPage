import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("contact", "routes/contact.tsx"),
    route("about", "routes/about.tsx"),
    route("signup","routes/signup.tsx")

] satisfies RouteConfig;

// index function tells the router when user is at / show the home.tsx page