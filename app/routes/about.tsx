import type { Route } from "./+types/home";
import OurStory from "~/components/about/OurStory";
import SecondLevel from "~/components/about/SecondLevel";
import Employee from "~/components/about/Employee";

// this is for seo purpose : page title and meta tags for the page
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "This is an about page" },
  ];
}

const About = () => {
  return (
    <>
      {/* path */}
      <div className="p-10 font-semibold"> Home / about </div>
      <OurStory />
      <SecondLevel />
      <Employee />
    </>
  )
}

export default About