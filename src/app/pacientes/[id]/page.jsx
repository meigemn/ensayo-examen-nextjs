import ItemPaciente from "@/components/pacientes/Item";
import { Suspense } from "react";


async function PaginaPaciente({ params, searchParams }) {
    const { id } = await params

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center justify-center">
            <h1 className="text-3xl font-bold text-center text-indigo-600">
                DATOS DE PACIENTE {id}
            </h1>
            <Suspense
                fallback={
                    <p className="text-blue-500 text-2xl font-bold text-center animate-pulse">
                        Obteniendo datos...
                    </p>
                }
            >
                <ItemPaciente id={id} />
            </Suspense>
        </div>
    )

}

export default PaginaPaciente;