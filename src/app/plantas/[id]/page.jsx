import ItemPlanta from "@/components/plantas/Item";
import { Suspense } from "react";


async function PaginaPlanta({ params, searchParams }) {
    const { id } = await params

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center justify-center">
            <h1 className="text-3xl font-bold text-center text-indigo-600">
                DATOS DE PLANTA {id}
            </h1>
            <Suspense
                fallback={
                    <p className="text-blue-500 text-2xl font-bold text-center animate-pulse">
                        Obteniendo datos...
                    </p>
                }
            >
                <ItemPlanta id={id} />
            </Suspense>
        </div>
    )

}

export default PaginaPlanta;