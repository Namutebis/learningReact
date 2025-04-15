import { useState } from "react";

function AdminForm() {
    const [names, setNames] = useState(" ")
    const [emailaddress, setEmail] = useState(" ")
    const [dates, setDate] = useState(" ")
    const [agreeToTerms, setTerms] = useState(" ")
    const [gender, setGender] = useState(" ")

    console.log(names, emailaddress, gender, agreeToTerms,
        dates)

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`You have entered:
            Name: ${names}
            Email: ${emailaddress}
            Gender: ${gender}
            Terms Agreed: ${agreeToTerms ? "Yes" : "No"}
            Date: ${dates}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input type="text"
                    value={names}
                    onChange={(e) => setNames(e.target.value)} />
            </label> <br></br>

            <label> Enter your email
                <input type="text"
                    value={emailaddress}
                    onChange={(e) => setEmail(e.target.value)} />
            </label> <br></br>

            <label>
                <input type="date"
                    value={dates}
                    onChange={(e) => setDate(e.target.value)} />
            </label><br></br>

            <label htmlFor="male">Male</label>
            <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)} />

            <label htmlFor="female">Female</label>
            <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)} /> <br></br>

            <input
                type="checkbox"
                value={agreeToTerms}
                checked={agreeToTerms}
                onChange={(e) => setTerms(e.target.checked)}
            />
            <label>
                I agree to the terms and conditions
            </label>
            <br />
            <button type="submit">Submit</button>


        </form>
    )
}

export default AdminForm