// src/Main.js
import React from 'react';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const mainStyle = {
    textAlign: 'center',
    padding: '200px 0px',
    backgroundImage: 'url(https://images.unsplash.com/photo-1504903271097-d7e7c7f5f7ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: '#fff',
};

const heroStyle = {
    maxWidth: '600px',
    margin: '0 auto',
};

const h1Style = {
    fontSize: '48px',
    marginBottom: '20px',
};

const pStyle = {
    fontSize: '18px',
    marginBottom: '40px',
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
};

const buttonHoverStyle = {
    backgroundColor: '#555',
};

const Main = () => {
    return (
        <>
        <Header/>
            <main style={mainStyle}>
                <section style={heroStyle}>
                    <h1 style={h1Style}>Just Do It</h1>
                    <p style={pStyle}>Discover the latest styles from Nike</p>
                    <button
                        style={buttonStyle}
                        onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Shop Now
                    </button>
                </section>
                {/* <Footer/> */}
            </main>
        </>
    );
}

export default Main;
