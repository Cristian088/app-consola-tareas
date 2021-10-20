const { guardaDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa, 
        leerInput} = require('./helpers/inquirer');
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
    }

    await pausa(); 

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
                console.log( tareas.listadoArr);
                break;
            case '3':
                
                break;
            case '4':
                
                break;
            case '5':
                
                break;
            case '6':
                
                break;

            default: 0
                break;
        }

        //guardaDB( tareas.listadoArr );

        await pausa();

    } while ( opt !== '0' );

}


main();