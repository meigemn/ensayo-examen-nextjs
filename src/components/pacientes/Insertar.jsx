import { insertarPaciente } from "@/lib/actions";
function PacienteInsertar() {
    return (
        <form action={insertarPaciente}>
            <input name="nombre" placeholder="Nombre" />
            <input name="fecha_nacimiento" placeholder="Fecha de Nacimiento" />
            <input name="plantaId" placeholder="Planta" />
            <button className="border-2 border-black">Insertar Paciente</button>
        </form>
    );
}
export default PacienteInsertar;