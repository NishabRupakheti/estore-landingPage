import type { Route } from "./+types/home";
import ContactCard from "~/components/contact/ContactCard";
import ContactForm from "~/components/contact/ContactForm";

// this is for seo purpose : page title and meta tags for the page
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Contact" },
    { name: "description", content: "This is a contact page" },
  ];
}

const Contact = () => {
  return (
    <>
      <div className="px-6 md:px-10 py-6 md:py-10 font-semibold text-gray-500">
        <span className="hover:text-black cursor-pointer">Home</span> / <span className="text-black">Contact</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">

          {/* Card Container */}
          <div className="w-full lg:w-1/3 h-full">
            <ContactCard />
          </div>

          {/* Form Container */}
          <div className="w-full lg:w-2/3">
            <ContactForm />
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact