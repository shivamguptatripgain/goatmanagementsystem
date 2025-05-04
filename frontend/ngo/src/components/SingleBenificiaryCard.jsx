import React from 'react';

const SingleBenificiaryCard = ({ beneficiary }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{beneficiary.beneficiaryName}</h2>
            <p className="text-gray-600 mb-1"><span className="font-semibold">Contact:</span> {beneficiary.contactNumber}</p>
            <p className="text-gray-600 mb-1"><span className="font-semibold">Received On:</span> {new Date(beneficiary.dateOfReceiving).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-1"><span className="font-semibold">Disease:</span> {beneficiary.disease || 'None'}</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
                <div>
                    <p className="text-gray-600"><span className="font-semibold">Goats:</span> {beneficiary.numberOfGoats}</p>
                    <p className="text-gray-600"><span className="font-semibold">Initial Weight:</span> {beneficiary.initialWeight} kg</p>
                </div>
                <div>
                    <p className="text-gray-600"><span className="font-semibold">After 2 Months:</span> {beneficiary.weightAfter2Months} kg</p>
                    <p className="text-gray-600"><span className="font-semibold">Kids (M/F):</span> {beneficiary.kidsMale}/{beneficiary.kidsFemale}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBenificiaryCard;
