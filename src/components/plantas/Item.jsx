import { obtenerPlanta } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ItemPlanta({ id }) {
    const planta = await obtenerPlanta(id)
    // console.log(planta);

    if (!planta) notFound()

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center">
            <p className="text-2xl font-bold text-center">{planta.nombre}</p>
            <p className="text-gray-700 italic text-center">{planta.jefePlanta}</p>
        </div>
    );
}