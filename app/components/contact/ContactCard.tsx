import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";


const ContactCard = () => {
    return (
        <div className="max-w-sm rounded-md bg-white p-8 shadow-sm border border-gray-100 font-sans">
            {/* Call Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-red-500 p-3 rounded-full">
                        <IoCallOutline className="text-white text-2xl" />
                    </div>
                    <h3 className="font-semibold text-lg">Call To Us</h3>
                </div>

                <div className="space-y-3 text-sm text-gray-800">
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                </div>
            </div>

            <hr className="my-8 border-gray-300" />

            {/* Write Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-red-500 p-3 rounded-full">
                        <HiOutlineMail className="text-white text-2xl" />
                    </div>
                    <h3 className="font-semibold text-lg">Write To Us</h3>
                </div>

                <div className="space-y-3 text-sm text-gray-800">
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: support@exclusive.com</p>
                </div>
            </div>
        </div>
    );
}

export default ContactCard