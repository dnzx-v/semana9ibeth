import React, { useState } from 'react';
import './App.css';

function App() 

function App()
  const (const,setCout)=setSate(0)

  let menus  ={
    (nombre:"inicio")
    (nombre:"nosotros ")
    (nombre:"historia")
    (nombre:"contacto")
  };

  return (
  <nav>
    <ul>
      <li><a href="#inicio">{props.menus}</a></li>
      <li><a href="#nosotros">{props.menus}</a></li>
      <li><a href="#servicios">{props.menus}</a></li>
      <li><a href="#contacto">{props.menu}</a></li>
    </ul>
  </nav>
  </>
} 


  

  const [vistaActual, setVistaActual] = useState('inicio');

  return (
    <div className="app-container">

      <header className="header-institucional">
        <div className="logo-container">
          <span className="instituto-tag">INSTITUTO DE EDUCACIÓN SUPERIOR TECNÓLOGICO PÚBLICO</span>
          <h1>“TRUJILLO”</h1>
        </div>
        <nav className="nav-menu">
          <button 
            className={vistaActual === 'inicio' ? 'activo' : ''} 
            onClick={() => setVistaActual('inicio')}
          >
            Inicio
          </button>
          <button 
            className={vistaActual === 'ideas' ? 'activo' : ''} 
            onClick={() => setVistaActual('ideas')}
          >
            Ideas Clave
          </button>
          <button 
            className={vistaActual === 'contacto' ? 'activo' : ''} 
            onClick={() => setVistaActual('contacto')}
          >
            Contacto
          </button>
        </nav>
      </header>

      <main className ="main-content">
        {vistaActual === 'inicio' && (
          <section className="card-seccion">
            <h2>Desarrollo Web Front End</h2>
            <p>Bienvenido al sistema interactivo desarrollado con componentes modernos en React[cite: 1].</p>
            <ul className="features-list">
              <li> Entorno optimizado con Vite</li>
              <li>  Actualización dinámica de vistas sin recargar el DOM</li>
              <li>  Estructura limpia basada en buenas prácticas</li>
            </ul>
          </section>
        )}

        {vistaActual === 'ideas' && (
          <section className="card-seccion">
            <h2>Resumen de la Sesión: Ideas Clave</h2>
            <div className="idea-item"> <strong>React:</strong> Permite construir interfaces con componentes reutilizables.</div>
            <div className="idea-item"> <strong>SPA:</strong> Actualiza partes de la interfaz sin recargar todo el documento en cada interacción.</div>
            <div className="idea-item"> <strong>Vite:</strong> Facilita crear y ejecutar el entorno de desarrollo con máxima velocidad.</div>
            <div className="idea-item"> <strong>JSX:</strong> Describe la interfaz y permite insertar expresiones JavaScript de forma fluida.</div>
            <div className="idea-item">  <strong>Buenas Prácticas:</strong> Ayudan a mantener el código claro, mantenible y escalable.</div>
          </section>
        )}

        {vistaActual === 'contacto' && (
          <section className="card-seccion">
            <h2>Información Académica</h2>
            <p><strong>Unidad Didáctica:</strong> Desarrollo Web Front End</p>
            <p><strong>Institución:</strong> IESTP Trujillo</p>
            <p><strong>Periodo Académico:</strong> 2026-II</p>
          </section>
        )}
      </main>

      <footer className="footer-institucional">
        <p>IESP TRUJILLO &bull; 2026-II</p>
      </footer>
    </div>
  );
}

export default App;


