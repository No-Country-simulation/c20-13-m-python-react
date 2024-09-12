import React from "react";
import "../styles/whatsapp-icon.css";


export const WhatsAppIcon = () => {
    const whatsappLink = "https://wa.me/59170733299"; 
  
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Chat with us on WhatsApp"
      >
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    );
}
