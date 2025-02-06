import { eliminarMedicina } from "@/lib/actions";
function MedicinaEliminar({ medicina }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-2xl text-red-600 font-bold mb-4 text-center">¿Desea eliminar los siguientes datos?</h1>
                
                <p className="text-lg mb-4">Medicina: <span className="font-semibold">{medicina.nombre}</span></p>
                <p className="text-lg mb-6">via: <span className="font-semibold">{medicina.via}</span></p>
                <form action={eliminarMedicina}>
                
                    <div className="flex justify-center space-x-4">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Eliminar
                        </button>
                        <button
                            type="button"
                            className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MedicinaEliminar;