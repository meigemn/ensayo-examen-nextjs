import { obtenerMedicina } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ItemMedicina({ id }) {
    const medicina = await obtenerMedicina(id)
    // console.log(medicina);

    if (!medicina) notFound()

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center">
            <p className="text-2xl font-bold text-center">{medicina.nombre}</p>
            <p className="text-gray-700 italic text-center"> via:{medicina.via}</p>
        </div>
    );
}