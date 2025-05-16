import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { capitalizeAllWords } from '../utils/important';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [villageName, setVillageName] = useState('');
    const [villages, setVillages] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFetchVillages = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/villages`);
            const data = await response.json();
            setVillages(data.data || []);
        } catch (error) {
            console.error('Error fetching villages:', error);
        }
    };

    useEffect(() => {
        handleFetchVillages();
    }, []);

    const handleAdd = async () => {
        if (!villageName.trim()) return;

        try {
            setLoading(true);
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/villages/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ villageName: villageName }),
            });

            if (res.ok) {
                await handleFetchVillages();
                setVillageName('');
                setIsModalOpen(false);
            } else {
                console.error('Failed to add village');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error adding village:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/villages/delete/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                await handleFetchVillages();
            } else {
                console.log(res);
                console.error('Failed to delete village');
            }
        } catch (error) {
            console.error('Error deleting village:', error);
        }
    };

    const handleCardClick = (id) => {
        navigate(`/village/${id}`);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 px-4" style={{
            backgroundImage: `url('/villageBg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome Back 😊</h1>

            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md mb-10"
            >
                Add Village
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {villages.map((village) => (
                    <div
                        key={village._id}

                        className="cursor-pointer bg-white p-4 rounded-xl shadow-md border hover:shadow-lg transition flex justify-between items-center"
                    >
                        <h3 className="text-lg font-semibold text-gray-800" onClick={() => handleCardClick(village._id)}>
                            {capitalizeAllWords(village.villageName)}
                        </h3>
                        <div className='flex gap-3'>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleDelete(village._id)}>Delete</button>
                            {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => handleEdit(village._id)}>Edit</button> */}
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-blue-100 bg-opacity-40 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-xl font-semibold mb-4">Add Village</h2>
                        <div className="mb-4">
                            <label htmlFor="village" className="block text-gray-700 mb-1">
                                Village Name
                            </label>
                            <input
                                id="village"
                                type="text"
                                value={villageName}
                                onChange={(e) => setVillageName(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter village name"
                            />
                        </div>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setVillageName('');
                                }}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAdd}
                                disabled={loading}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
