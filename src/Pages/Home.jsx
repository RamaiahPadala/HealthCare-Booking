import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
            <section className="hero py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-6">
                        Book Your Healthcare Provider Instantly
                    </h1>
                    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Specialty"
                                className="flex-1 p-2 border rounded"
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                className="flex-1 p-2 border rounded"
                            />
                        </div>
                        <Link
                            to="/doctors"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Search Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}