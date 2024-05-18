import React, { useState } from 'react';

const ProfileDetails = () => {

    const [activeTab, setActiveTab] = useState(0);

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '60px',
        marginLeft: '-500px' // Adjust margin as needed
    };

    const containerStyle1 = {
        fontSize: '35px',
        display: 'flex',
        alignItems: 'center',
        marginTop: '80px',
        marginLeft: '-490px', // Adjust margin as needed
    };

    const containerStyle2 = {
        fontSize: '15px',
        display: 'flex',
        alignItems: 'center',
        marginTop: '0px',
        marginLeft: '1270px', // Adjust margin as needed
    };

    const imgStyle = {
        display: 'flex',
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        marginRight: '30px' // Adjust space between image and text
    };

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const nameStyle = {
        fontSize: '35px',
        margin: 0
    };

    const memberSinceStyle = {
        fontSize: '16px',
        margin: 0,
        color: '#555'
    };

    const tabButtonStyle = (isActive) => ({
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: isActive ? 'gray' : 'lightgray',
        color: isActive ? 'white' : 'black',
        marginRight: '5px',
        marginLeft: '-500px'
    });
    const tabButtonStyle1 = (isActive) => ({
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: isActive ? 'gray' : 'lightgray',
        color: isActive ? 'white' : 'black',
        marginRight: '5px',
    });

    const tabContentStyle = {
        padding: '20px',
        border: '1px solid #ddd',
        width: '100%',
        marginLeft: '-500px'
    };

    return (
        <>
            <div style={containerStyle}>
                <img src="https://ca-times.brightspotcdn.com/dims4/default/76311f0/2147483647/strip/true/crop/4121x2747+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F94%2F82%2F30aea31e4b189678e4b7d3ff0e34%2Fet-shah-rukh-khan-gettyimages-060.JPG" alt="Profile" style={imgStyle} />
                <div style={textContainerStyle}>
                    <h1 style={nameStyle}>Rohit Upadhyay</h1>
                    <h2 style={memberSinceStyle}>Nike Member Since February 2022</h2>
                </div>
            </div>
            <div >
                <a style={containerStyle1}>Interests</a>
                <a style={containerStyle2}>Edit</a>
            </div>
            <div>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                    <button
                        style={tabButtonStyle(activeTab === 0)}
                        onClick={() => setActiveTab(0)}
                    >
                        Tab 1
                    </button>
                    <button
                        style={tabButtonStyle1(activeTab === 1)}
                        onClick={() => setActiveTab(1)}
                    >
                        Tab 2
                    </button>
                    <button
                        style={tabButtonStyle1(activeTab === 2)}
                        onClick={() => setActiveTab(2)}
                    >
                        Tab 3
                    </button>
                    {/* Add more buttons as needed */}
                </div>
                <div style={tabContentStyle}>
                    {activeTab === 0 && (
                        <div>
                            <h1>Content of Tab 1</h1>
                            <p>This is the content for Tab 1.</p>
                        </div>
                    )}
                    {activeTab === 1 && (
                        <div >
                            <h1>Content of Tab 2</h1>
                            <p>This is the content for Tab 2.</p>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div >
                            <h1>Content of Tab 3</h1>
                            <p>This is the content for Tab 3.</p>
                        </div>
                    )}
                    {/* Add more content for additional tabs */}
                </div>
            </div>

        </>
    );
};

export default ProfileDetails;
