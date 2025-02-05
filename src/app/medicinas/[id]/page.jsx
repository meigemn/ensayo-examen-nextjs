import ItemMedicina from "@/components/medicinas/Item";
import { Suspense } from "react";


async function PaginaMedicina({ params, searchParams }) {
    const { id } = await params

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center justify-center">
            <h1 className="text-3xl font-bold text-center text-indigo-600">
                DATOS DE MEDICINA {id}
            </h1>
            <Suspense
                fallback={
                    <p className="text-blue-500 text-2xl font-bold text-center animate-pulse">
                        Obteniendo datos...
                    </p>
                }
            >
                <ItemMedicina id={id} />
            </Suspense>
        </div>
    )

}

export default PaginaMedicina;