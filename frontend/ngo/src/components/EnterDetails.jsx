import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EnterDetails = () => {
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
        villageId: useParams().villageId
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <form
            className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg"
            onSubmit={handleSubmit}
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Enter Goat Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="mt-8 text-center">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition cursor-pointer"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default EnterDetails;
