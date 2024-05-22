import React from 'react';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const mainStyle = {
    padding: '300px 0px',
    backgroundImage: 'url(https://images.unsplash.com/photo-1504903271097-d7e7c7f5f7ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
};

const mainStyle1 = {
    padding: '300px 0px',
    backgroundImage: 'url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
};

const heroStyle = {
    maxWidth: '600px',
    margin: '0 auto',
};

const h1Style = {
    fontSize: '96px',
    marginTop: '-30px',
    color: '#000',
    textAlign: 'center',
};

const pStyle = {
    fontSize: '18px',
    marginBottom: '-20px',
    color: '#000',
    textAlign: 'center',
};

const pStyle1 = {
    fontSize: '18px',
    marginTop: '-110px',
    color: '#000',
    textAlign: 'center',
    marginBottom: '200px',
};

const pStyle2 = {
    fontSize: '18px',
    marginTop: '-110px',
    color: '#000',
    textAlign: 'center',
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
            <Header />
            <section style={mainStyle}>
                <div style={heroStyle}></div>
            </section>
            <section>
                <h4 style={pStyle}>Just Do it</h4><br />
                <h1 style={h1Style}>Jordan</h1><br />
                <h4 style={pStyle1}>Get ready to feel the responsive energy return of air zoom and all new reactX foam</h4>
            </section>
            <section style={mainStyle1}>
                <div style={heroStyle}></div>
            </section>
            <section>
                <h4 style={pStyle}>Just Do it</h4><br />
                <h1 style={h1Style}>Jordan</h1><br />
                <h4 style={pStyle2}>Get ready to feel the responsive energy return of air zoom and all new reactX foam</h4>
            </section>
            <Footer />
        </>
    );
};

export default Main;
