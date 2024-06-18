import React from 'react';
import Marquee from 'react-fast-marquee';
import { Container } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode';

const Image = () => {

    const darkMode = useDarkMode(false);

  const containerStyle = {
    width: "98vw", // Full width of the viewport
    height: "300px",
    margin: "100px auto", // Center horizontally
    marginBottom: "-75px",
    overflowX: "hidden",
  };

  const inContainerStyle = {
    padding: "10px",
    backgroundColor: darkMode.value ? '#000' : '#fff',
  };

  const myMarqueeStyle = {
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  };

  const imgStyle = {
    width: "200px",
    height: "auto",
    margin: "150px",
  };

  const responsiveStyle = `
    @media (max-width: 768px) {
      img {
        margin: 50px !important; /* Reduce margin on smaller screens */
      }
    }
  `;

  const images = [
    "https://images.unsplash.com/photo-1612810806563-4cb8265db55f?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1603352525945-bb62a311295b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1561535756-5233cff0a759?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  

  return (
    <Container fluid style={containerStyle}>
      <div style={inContainerStyle}>
        <style>{responsiveStyle}</style> {/* Inject responsive styles */}
        <Marquee speed={100} direction="right" loop={false} delay={0} style={myMarqueeStyle}>
          {images.map((src, idx) => (
            <div key={idx}>
              <img src={src} alt={`image_${idx}`} style={imgStyle} />
            </div>
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default Image;
