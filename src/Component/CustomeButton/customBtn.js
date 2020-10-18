import React from "react";
import "./customBtn.scss";

const CustomBtn = ({ children, isGoogleSignIn,...props }) => (
    <button 
    className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...props}>
        {children}
    </button>
)

export default CustomBtn