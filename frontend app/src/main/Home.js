import React from 'react';
import './home.css';

const Home = () => {
    const myStyle = {
        backgroundImage: "url('/donate1.jpg')", // Assuming donate1.jpg is directly inside the public folder
        height: "100vh",
        marginTop: "-50px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
    };
    
    const handleLoginClick = () => {
        window.location.href = 'http://localhost:3000/donorlogin';
    };
    
    return (
        <div className='home'>  
            <div class='hero'>
                {/* <div class="hero-one"></div> */}
                <div class="hero-two"></div>    
                <h1 class="header-title"><span class="header-primary">Join Your Hand!</span></h1>
                <p>Join with us to save the people who are facing problems to survive..</p>
                <button className='buttonhome' onClick={handleLoginClick}>login</button>
            </div>
        </div>
    );
    
    
}



export default Home;
