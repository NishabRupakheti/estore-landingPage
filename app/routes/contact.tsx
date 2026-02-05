import type { Route } from "./+types/home";
import ContactCard from "~/components/contact/ContactCard";
import ContactForm from "~/components/contact/ContactForm";

// this is for seo purpose : page title and meta tags for the page
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Profile" },
    { name: "description", content: "This is a profile page" },
  ];
}

const Contact = () => {
  return (
    <>
      <div className="p-10 font-semibold"> Home / contact </div>
      <div className="max-w-7xl mx-auto px-4 py-16 flex gap-8" >
        <div className="w-full md:w-1/3" >
          {/* card */}
          <ContactCard />
        </div>
        <div>
          {/* form */}
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact