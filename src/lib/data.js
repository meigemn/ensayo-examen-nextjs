'use server'
import prisma from "@lib/prisma";

/* ---------Plantas--------- */ 


async function obtenerPlantas() {
    const plantas = await prisma.planta.findMany()
    return plantas
}


async function obtenerPlanta(id) {
    const planta = await prisma.planta.findUnique({
        where: { id: +id }
    })
    return planta
}
/* ---------Paciente--------- */ 


async function obtenerPacientes() {
    const pacientes = await prisma.paciente.findMany()
    return pacientes
}


async function obtenerPaciente(id) {
    const paciente = await prisma.paciente.findUnique({
        where: { id: +id },
        include: {
            medicinas: true,/* relacion entre medicinas */
            planta: true/* relacion entre plantas */
        }
    })
    return paciente
}
/* ---------Medicina--------- */ 


async function obtenerMedicinas() {
    const medicinas = await prisma.medicina.findMany()
    return medicinas
}


async function obtenerMedicina(id) {
    const medicina = await prisma.medicina.findUnique({
        where: { id: +id }
    })
    return medicina
}

export {
    obtenerPlantas,
    obtenerPlanta,

    obtenerPacientes,
    obtenerPaciente,
    
    obtenerMedicinas,    
    obtenerMedicina
}