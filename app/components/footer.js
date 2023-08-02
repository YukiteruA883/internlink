export default function Footer() {
    return (
        <div className="bg-gray-800 text-white w-full py-6">
            <div className="flex justify-around">
                <div>
                    <h2 className="font-bold text-2xl mb-2">Useful Links</h2>
                    <ul>
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/service" className="hover:underline">Service</a></li>
                        <li><a href="/support" className="hover:underline">Support</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold text-2xl mb-2">Sign Up Now</h2>
                    <p>
                        Ready to get started? <br />
                        <a href="/signup" className="text-blue-400 hover:underline">Create your account now</a>.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-2xl mb-2">Contact Information</h2>
                    <p>
                        InternLink <br />
                        Address: 123/56 Example Road 13th Avenue <br />
                        Email: contact@internlink.org <br />
                        Phone: +66123456789
                    </p>
                </div>
            </div>
        </div>
    );
}