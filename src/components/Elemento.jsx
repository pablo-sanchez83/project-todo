/* eslint react/prop-types: 0 */

import TrashIcon from "../assets/trash.svg"

function Elemento({ data, onDelete }) {
    return (
      <li className="flex items-center justify-between w-full max-w-6xl p-4 mt-2 bg-gray-800 text-white rounded-md">
        <span className="text-lg uppercase">{data}</span>
        <button
          className="ml-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
          onClick={onDelete}        
        >
          <img src={TrashIcon} alt="Trash Delete Icon" className="h-8 w-6"/>
        </button>
      </li>
    );
  }
  
  export default Elemento;
  