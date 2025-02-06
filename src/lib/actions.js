'use server'
import { revalidatePath } from 'next/cache'

import prisma from '@/lib/prisma'


//  ------------------------ PACIENTES ------------------------


export async function insertarPaciente(formData) {
    const nombre = formData.get('nombre');
    const jefePlanta = new Date(formData.get('jefePlanta'));



    await prisma.paciente.create({
        data: {
            nombre: nombre,
            jefePlanta: jefePlanta, 
        }
    })

    revalidatePath('/pacientes')

}



export async function modificarPaciente(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const fechaNacimiento = new Date(formData.get('fechaNacimiento'))


    await prisma.paciente.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            fechaNacimiento: fechaNacimiento,
        }
    })

    revalidatePath('/pacientes')
}



export async function eliminarPaciente(formData) {
    const id = Number(formData.get('id'))

    await prisma.paciente.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/pacientes')

}

//  ------------------------ MEDICINAS ------------------------


export async function insertarMedicina(formData) {
    const nombre = formData.get('nombre');
    const via = new Date(formData.get('via'));



    await prisma.medicina.create({
        data: {
            nombre: nombre,
            via: via, 
        }
    })

    revalidatePath('/medicinas')

}



export async function modificarMedicina(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const via = new Date(formData.get('via'))


    await prisma.medicina.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            via: via,
        }
    })

    revalidatePath('/medicinas')
}



export async function eliminarMedicina(formData) {
    const id = Number(formData.get('id'))

    await prisma.medicina.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/medicinas')

}
//  ------------------------ PLANTA ------------------------


export async function insertarPlanta(formData) {
    const nombre = formData.get('nombre');
    const jefePlanta = formData.get('jefePlanta');

    await prisma.planta.create({
        data: {
            nombre: nombre,
            jefePlanta: jefePlanta, 
        }
    })

    revalidatePath('/plantas')

}

export async function modificarPlanta(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const jefePlanta = formData.get('jefePlanta');


    await prisma.planta.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            jefePlanta: jefePlanta,
        }
    })

    revalidatePath('/plantas')
}

export async function eliminarPlanta(formData) {
    const id = Number(formData.get('id'))

    await prisma.planta.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/plantas')

}