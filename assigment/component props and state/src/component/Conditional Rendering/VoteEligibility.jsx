import { useState } from "react";

const VoteEligibility = () => {
    const [age, setAge] = useState(18);

    const checkEligibility = () => {
        alert(age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.");
    };

    return (
        <div className="p-4 max-w-sm mx-auto bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Voting Eligibility Check</h2>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="border p-2 rounded" placeholder="Enter your age"
            />
            <button onClick={checkEligibility} className="btn btn-secondary mx-2 p-2" >
                Check Eligibility
            </button>
        </div>
    );
};

export default VoteEligibility;
