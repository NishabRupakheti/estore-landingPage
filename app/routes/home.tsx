import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";


// this is for seo purpose : page title and meta tags for the page
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "This is a home page" },
  ];
}

export default function Home() {
  return <Welcome />;
}