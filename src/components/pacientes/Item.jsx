import { obtenerPaciente } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ItemPaciente({ id }) {
    const paciente = await obtenerPaciente(id)
    // console.log(paciente);

    if (!paciente) notFound()

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center">
            <p className="text-2xl font-bold text-center">{paciente.nombre}</p>
            <p className="text-2xl font-bold text-center">{paciente.fechaNacimiento.toLocaleDateString()}</p>

            
        </div>
    );
}