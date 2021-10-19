const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choice: ['opt1','opt2','opt3','opt4','opt5','opt6'],  
    }
]


const inquirerMenu = async() => {

    console.clear()
    console.log('============================='.green);
    console.log('   Seleccione una opción'.green);
    console.log('=============================\n'.green);

    await inquirer.prompt([

    ])


}

module.exports = {
    inquirerMenu
}