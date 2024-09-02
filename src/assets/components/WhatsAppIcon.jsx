import React, { useState } from 'react';
import '../styles/whatsapp-icon.css';


const WHATSAPP_URL = "https://wa.me/59170733299";

export const WhatsAppIcon = () => {
    const [position, setPosition] = useState({ top: 20, left: 20})

    const handleIcon = (event) => {
        setPosition({
            top: event.clientY - 50, 
            left: event.clientX - 50 
        });
    };

    return (
        <div 
            className="whatsapp-icon" 
            style={{ top: `${position.top}px`, right: `${position.right}px` }} 
            onMouseMove={handleIcon}
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
        >
            <i class="fa-brands fa-whatsapp"></i>
        </div>
    );
}
