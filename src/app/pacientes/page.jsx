import ListaPacientes from "@/components/pacientes/Lista";
import { Suspense } from "react";

 export default function PaginaPlantas() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold">LISTA DE PACIENTES</h1>
            <Suspense fallback={"Obteniendo plantas"}>
                <ListaPacientes />
            </Suspense>
        </div>
    );
}