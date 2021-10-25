const { guardaDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa, 
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoCheckList} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require('colors');

console.clear()

const main = async() => {

    console.log('Hola mundo.');
    
    let opt = '';
    const tareas = new Tareas();
    
    const tareasDB = leerDB();

    if ( tareasDB ) {
        TODO: 'Establecer las tareas.'
        tareas.cargarTareasFromArray(tareasDB);
    }

    //await pausa(); 

    do {
        //Imprimir el menu.
        opt = await inquirerMenu();

        switch ( opt ) {
            case '1':
                TODO: 'Crear tareas.'
                    const desc = await leerInput('Descripción: ');
                    tareas.crearTarea(desc); 

                break;
            case '2':
                TODO: 'listar las tareas creadas.'
                tareas.listadoCompleto();  
                break;
            case '3':
                TODO: 'listar las tareas completas.'
                tareas.listarPendientesCompletadas(true);           
                break;
            case '4':
                TODO: 'listar las tareas pendientes.'
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                TODO: 'Check las tareas completadas'
                    const ids = await mostrarListadoCheckList( tareas.listadoArr );
                    tareas.toggleCompletadas(ids);
                break;
            case '6':
                TODO: 'Borrar tareas'
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {

                    const ok = await confirmar('¿Está seguro?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada correctamente');
                    }
                }
                break;
            default: 0
                break;
        }

        guardaDB( tareas.listadoArr );

        await pausa();

    } while ( opt !== '0' );

}


main();