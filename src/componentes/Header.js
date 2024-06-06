import React from "react";
import './Header.css';


function Header() {
    return (
        <header >
            <div className="header">
            <div >
                <img src="/logo_dev.png" />
                </div>
                <div>
                <h1 className="tit" style={{fontSize: 40, padding: 2}}>Desenvolvimento de <br/><span className="highlight">Sistemas!</span></h1>
            </div>
            </div>
            <div className="sub">
                <h2>Temos tudo que sua loja precisa em nossos serviços!</h2>
            </div>
        </header>
    );
}

export default Header;