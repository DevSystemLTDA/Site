import React from "react";
import './MainContent.css';

function MainContent() {
    return (
        <main>
            <h3>Quais são nossos serviços?</h3>
            <div className="blocos">
                <div className="bloco">
                    <h3 style={{color: "purple",}}>Sites</h3>
                    <p>
                        Na DevSystems, criamos sites sob medida que são modernos, responsivos
                        e otimizados para oferecer a melhor experiência ao usuário.
                    </p>
                </div>
                <div className="bloco">
                    <h3 style={{color: "purple",}}>Sistemas</h3>
                    <p>
                        A DevSystems se destaca na criação de sistemas personalizados que otimizam
                        processos e aumentam a eficiência operacional.
                    </p>
                </div>
                
            </div>
            <div id="about">
                <h3>Um pouco sobre a gente!</h3>
                <p>
                    Bem-vindo à DevSystems! Somos especialistas em desenvolvimento de sistemas e sites 
                    personalizados. Nossa missão é transformar ideias inovadoras em soluções digitais de
                    alta performance, ajudando nossos clientes a alcançar seus objetivos de negócios com
                    eficiência e excelência.
                    Na DevSystems, acreditamos que a tecnologia é a chave para o sucesso no mundo moderno. Nossa equipe de
                    desenvolvedores altamente qualificados está comprometida em entregar produtos de qualidade, adaptados
                    às necessidades específicas de cada cliente. Desde pequenas empresas até grandes corporações,
                    oferecemos soluções escaláveis e robustas que impulsionam o crescimento e a inovação.
                </p>
            </div>
        </main>

    );
}

export default MainContent;