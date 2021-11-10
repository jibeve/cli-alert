/**
 * @author jibeve <https://www.pixelforthemasses.com>
 */

const chalk = require('chalk');
const sym = require('log-symbols');


module.exports = (options) => {
    //console.log(`WORKING`);
    const defaultOptions = {
            type: 'error',
            msg: 'You forgot to define options',
            name: ""
    };
    const opts = {...defaultOptions, ...options};
    const {type, msg, name} = opts;

    const printName = name ? name : type.toUpperCase();

    if(type === 'success'){
        console.log( `\n ${sym.success} ${chalk.green.inverse(msg)}\n` )
    }

    if(type === 'error'){
        console.log(`\n ${sym.error} ${chalk.red.bold.inverse(msg)}\n`);
    }

    if(type === 'warning'){
        console.log(`\n ${sym.warning} ${chalk.yellow.bold.inverse(msg)}\n`);
    }
    if(type === 'info'){
        console.log(`\n ${sym.info} ${chalk.blue.bold.inverse(msg)}\n`);
    }
};
   
