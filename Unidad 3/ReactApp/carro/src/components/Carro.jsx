import React from "react";

export default function Carro({Visible, toggleCarro}) {

    const CarroStyles = {
        width: Visible ? '100%' : '0px',
        height: '100%',
        position: 'fixed',
        zIndex: '99',
        backgroundColor: 'white',
        top: '0px',
        right: '0px',
        transition: '0.5s'
    }

    const BtnCloseStyles = {
        fontSize: '2rem',
        position: 'absolute',
        top: '0px',
        right: '20px',
        cursor: 'pointer',
        display: Visible ? 'block' : 'none'
    }


    return <div style={CarroStyles}>
        <span onClick={toggleCarro}
            style={BtnCloseStyles}>
            <i className="fa-solid fa-xmark"></i>
        </span>


    </div>
}
