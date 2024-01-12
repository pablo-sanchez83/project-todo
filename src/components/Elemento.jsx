/* eslint react/prop-types: 0 */

import TrashIcon from "../assets/trash.svg"
import EditIcon from "../assets/edit.svg"

function Elemento({ data, onDelete, onEdit }) {
  return (
    <li className="flex items-center w-full max-w-6xl p-4 mt-2 bg-gray-800 text-white rounded-md animate-flip-down animate-once animate-duration-[600ms] animate-ease-in-out">
      <span className="text-lg uppercase w-10/12 bg-gray-600 px-3 py-2 h-12 rounded shadow-2xl">{data}</span>
      <div className="w-2/12 flex justify-evenly">
        <button
          className="ml-2 px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-300 focus:outline-none focus:ring focus:border-blue-300 shadow-2xl h-12"
          onClick={onEdit}
        >
          <img src={EditIcon} alt="Edit icon" className="h-8 w-6" />
        </button>
        <button
          className="ml-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition duration-300 focus:outline-none focus:ring focus:border-blue-300 shadow-2xl"
          onClick={onDelete}
        >
          <img src={TrashIcon} alt="Trash Delete Icon" className="h-8 w-6" />
        </button>
      </div>
    </li>
  );
}

export default Elemento;
