/* eslint react/prop-types: 0 */
import { useState } from "react";

export default function Creador({ onCreate }) {
    const [texto, setTexto] = useState('');

    const handleButtonClick = () => {
        if (texto !== "") {
            onCreate(texto);
            setTexto('');
        }
    };
    return (
        <section className="flex justify-center p-10 bg-gray-800 max-w-6xl">
            <input
                type="text"
                className="w-10/12 px-4 py-3 rounded-xl mr-2 font-sans font-semibold text-lg uppercase overflow-x-auto focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Nueva tarea..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <button
                className="w-2/12 bg-green-500 hover:bg-green-600 rounded-xl text-white text-2xl font-bold transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleButtonClick}
            >
                Añadir
            </button>
        </section>
    );
}
