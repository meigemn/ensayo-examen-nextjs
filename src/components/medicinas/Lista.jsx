import { obtenerMedicinas } from "@/lib/data";
import Link from "next/link";

async function ListaMedicinas() {
    const medicinas = await obtenerMedicinas();

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
                Lista de Medicinas
            </h2>
            <ul className="grid gap-4">
                {medicinas.map((medicina) => (
                    <li
                        key={medicina.id}
                        className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
                    >
                        <Link href={`/medicinas/${medicina.id}`}>
                            <h3 className="text-lg font-semibold text-gray-800">{medicina.nombre}</h3>
                        </Link>
                        <p className="text-sm text-gray-600">Via: {medicina.via}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ListaMedicinas;
