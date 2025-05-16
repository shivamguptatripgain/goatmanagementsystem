import React from 'react';
import { formatDate } from '../utils/important';

const SingleBenificiaryCard = ({ beneficiary, handleEdit }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto mb-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => { handleEdit(beneficiary) }}>Edit</button>
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
                <div>
                    <p className="text-gray-600"><span className="font-semibold">Goat Kid:</span> {beneficiary.goat_kid ? formatDate(beneficiary.goat_kid): '-'}</p>
                    <p className="text-gray-600"><span className="font-semibold">Vaccination :</span> { beneficiary.vaccination ? formatDate(beneficiary.vaccination): '-'}</p>
                </div>
                 <div>
                    <p className="text-gray-600"><span className="font-semibold">Deworming:</span> {(beneficiary.deworming ? formatDate(beneficiary.deworming): '-')}</p>
                    <p className="text-gray-600"><span className="font-semibold">Camp:</span> {beneficiary.camp? formatDate(beneficiary.camp): '-'}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBenificiaryCard;
