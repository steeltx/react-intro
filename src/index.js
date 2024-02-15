import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './Components/App';

function App(props) {
    return (
        <h1>{props.saludo}, {props.nombre}</h1>
    );
}

// HOC
// recibe un componente en su primera llamada
function withSaludo(WrappedComponent) {
    // recibe un parametro
    return function WrappedComponentWithSaludo(saludo) {
        // al ultimo nivel se llama el componente recibido y parametro del segundo llamado
        return function ComponenteDeVerdad(props) {
            return (
                <>
                    {/* se  le pasan todas las props ademas del parametro de la segunda funcion*/}
                    <WrappedComponent {...props} saludo={saludo} />
                    <p>Estamos acompañando al WrappedComponent</p>
                </>
            )
        }
    } 
}

// llamar 2 veces indicandole los parametros de cada funcion
const AppWithSaludo = withSaludo(App)('Hola');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App  saludo='Buenas' nombre='Juan' />
    <AppWithSaludo nombre='Juan' />
);
