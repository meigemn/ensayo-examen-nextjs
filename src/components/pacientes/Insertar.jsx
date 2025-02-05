import { insertarPaciente } from "@/lib/actions";

function PacienteInsertar({grupos}) {
    return (
        <form action={insertarPaciente}>
            <input name="nombre" placeholder="Nombre" />
            <input name="fecha_nacimiento" type='date' />

            <select name="grupoId" >{/* grupo id es el que se coge en el action */}
                {
                    grupos.map(grupo =>
                        <option key={grupo.id} value={grupo.id}>
                            {grupo.nombre}
                        </option>
                    )
                }

            </select>

            <button className="border-2 border-black" >Insertar paciente</button>
        </form>
    );
}

export default PacienteInsertar;