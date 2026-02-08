import { NavLink } from 'react-router';

const NotFound = () => {
    return (
        <>
            <div className="p-10 font-semibold"> Home / 404 error </div>

            <div className="max-w-7xl mx-auto p-6 space-y-6 ">
                <div className="text-center">
                    <h1 className="text-7xl font-bold text-gray-900">404 - Not Found</h1>
                    <p className="m-7 text-gray-600">Sorry, the page you are looking for does not exist.</p>
                    <NavLink
                        to="/"
                        className="inline-block mt-6 px-6 py-3 mb-7 bg-red-500 text-white font-medium rounded hover:bg-blue-600 transition-colors"
                    >
                        Go Back Home
                    </NavLink>
                </div>
            </div>

        </>
    );
};

export default NotFound;