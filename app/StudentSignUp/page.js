export default function studentSignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
            {/* Centered Panel */}
            <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                {/* "Sign Up" Text in the Panel */}
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

                {/* Input Boxes for First Name and Last Name */}
                <div className="flex justify-between space-x-4 mb-4">
                    <div className="flex flex-col w-32">
                        <label htmlFor="firstName" className="mb-2">First Name</label>
                        <input type="text" id="firstName" name="firstName" className="p-2 border rounded" />
                    </div>
                    <div className="flex flex-col w-44">
                        <label htmlFor="lastName" className="mb-2">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className="p-2 border rounded" />
                    </div>
                </div>

                {/* Date of Birth Selector */}
                <div className="flex flex-col mb-4">
                    <label htmlFor="dob" className="mb-2">Date of Birth</label>
                    <input type="date" id="dob" name="dob" className="p-2 border rounded" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="lastName" className="mb-2">Email</label>
                    <input type="text" id="lastName" name="lastName" className="p-2 border rounded" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="lastName" className="mb-2">Password</label>
                    <input type="text" id="lastName" name="lastName" className="p-2 border rounded" />
                </div>

                <img src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png" className="justify-center w-10 align-center"/>

            </div>
        </div>
    );
}
