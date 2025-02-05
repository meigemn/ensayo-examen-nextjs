import ListaPlantas from "@/components/plantas/Lista";
import { Suspense } from "react";

 export default function PaginaPlantas() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold">LISTA DE PLANTAS</h1>
            <Suspense fallback={"Obteniendo plantas"}>
                <ListaPlantas />
            </Suspense>
        </div>
    );
}
