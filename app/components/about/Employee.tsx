import EmployeesInfo from "~/data/about/EmployeesInfo"
import type { EmployeesInfoType } from "~/types/about_types/EmployeeTypes"
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Employee = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {EmployeesInfo.map((employee: EmployeesInfoType) => (
                    <div key={employee.id} className="flex flex-col group">

                        {/* Image Container with gray background */}
                        <div className="bg-[#F5F5F5] rounded-sm overflow-hidden flex items-end justify-center h-107.5">
                            <img
                                src={employee.image}
                                alt={employee.name}
                                className="w-full h-full object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="mt-6">
                            <h2 className="text-3xl font-medium tracking-wide text-black">
                                {employee.name}
                            </h2>
                            <p className="text-gray-700 mt-2 text-sm">
                                {employee.title}
                            </p>

                            {/* Social Icons */}
                            <div className="flex space-x-4 mt-4">
                                <CiTwitter className="text-2xl cursor-pointer hover:text-blue-400 transition-colors" />
                                <CiInstagram className="text-2xl cursor-pointer hover:text-pink-600 transition-colors" />
                                <CiLinkedin className="text-2xl cursor-pointer hover:text-blue-700 transition-colors" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Employee