import React, { useState } from 'react';

const AreaStatement1 = ({ onNext, onBack }) => {
    const [code, setCode] = useState('');
    const [username, setUsername] = useState('');
    const [organization, setOrganization] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Area of the Plot:', code);
        console.log('Less: RG Area:', username);
        console.log('Net Area:', organization);
        onNext();
        onBack();
    };

    return (
        <div style={{ margin: '20px auto', maxWidth: '600px' }}>
            <h3 style={{ marginBottom: '20px' }}>Area Statement 1</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Area of the Plot*"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Less: RG Area*"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Net Area*"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AreaStatement1;
