import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleBenificiaryCard from './SingleBenificiaryCard';

const VillageDetails = () => {
    const { id } = useParams();
    const [village, setVillage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        beneficiaryName: '',
        contactNumber: '',
        numberOfGoats: '',
        disease: '',
        dateOfReceiving: '',
        kidsMale: '',
        kidsFemale: '',
        initialWeight: '',
        weightAfter2Months: '',
        villageId: id
    });

    useEffect(() => {
        const fetchVillage = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/villages/${id}`);
                const data = await res.json();
                console.log(data);
                setVillage(data.benificiaries || []);

            } catch (error) {
                console.error('Error fetching village details:', error);
            }
        };

        fetchVillage();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData }),
            });

            if (response.ok) {
                alert('Beneficiary added successfully!');
                setIsModalOpen(false);
                setFormData({
                    beneficiaryName: '',
                    contactNumber: '',
                    numberOfGoats: '',
                    disease: '',
                    dateOfReceiving: '',
                    kidsMale: '',
                    kidsFemale: '',
                    initialWeight: '',
                    weightAfter2Months: '',
                });
            } else {
                alert('Failed to add beneficiary');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    if (!village) return <div className="p-4">Loading...</div>;

    console.log(village);

    return (
        <div className="p-6" style={{
            backgroundImage: `url('/villageDetails.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            opacity: '0.9'
        }}>
            <h1 className="text-2xl font-bold mb-4">{village.name}</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Beneficiary
            </button>
            <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {village.map((b) => (
                    <SingleBenificiaryCard key={b._id} beneficiary={b} />
                ))}
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-blue-100 bg-opacity-40 flex items-center justify-center z-50">
                    <form
                        className="max-w-3xl w-full mx-auto p-8 bg-white rounded-2xl shadow-lg"
                        onSubmit={handleSubmit}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Enter Beneficiary Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* <input
                                type="file"
                                name="photo"
                                accept="image/*"
                                onChange={(e) => setFormData(prev => ({ ...prev, photo: e.target.files[0] }))}
                                className="input-style"
                            /> */}
                            <input
                                type='text'
                                name="beneficiaryName"
                                value={formData.beneficiaryName}
                                onChange={handleChange}
                                placeholder='Beneficiary Name'
                                required
                                className="input-style"
                            />
                            <input
                                type='number'
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                placeholder='Contact Number'
                                required
                                className="input-style"
                            />
                            <input
                                type='number'
                                name="numberOfGoats"
                                value={formData.numberOfGoats}
                                onChange={handleChange}
                                placeholder='Number of Goats'
                                required
                                className="input-style"
                            />
                            <input
                                type='text'
                                name="disease"
                                value={formData.disease}
                                onChange={handleChange}
                                placeholder='Disease (if any)'
                                required
                                className="input-style"
                            />
                            <input
                                type='date'
                                name="dateOfReceiving"
                                value={formData.dateOfReceiving}
                                onChange={handleChange}
                                required
                                className="input-style"
                            />
                            <input
                                type='number'
                                name="kidsMale"
                                value={formData.kidsMale}
                                onChange={handleChange}
                                placeholder='Kids of Male Goats'
                                required
                                className="input-style"
                            />
                            <input
                                type='number'
                                name="kidsFemale"
                                value={formData.kidsFemale}
                                onChange={handleChange}
                                placeholder='Kids of Female Goats'
                                required
                                className="input-style"
                            />
                            <input
                                type='number'
                                name="initialWeight"
                                value={formData.initialWeight}
                                onChange={handleChange}
                                placeholder='Initial Goat Weight (kg)'
                                required
                                className="input-style"
                            />
                            <input
                                type='number'
                                name="weightAfter2Months"
                                value={formData.weightAfter2Months}
                                onChange={handleChange}
                                placeholder='Weight After 2 Months (kg)'
                                required
                                className="input-style"
                            />
                        </div>
                        <div className="mt-8 flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default VillageDetails;
