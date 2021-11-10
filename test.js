

const alert = require('./index.js');

console.clear();
alert();
alert({type: 'success', msg: 'All done!'});
alert({type: 'info', msg: 'No info for the moment!'});
alert({type: 'warning', msg: 'You did add nothing !'});
alert({type: 'error', msg: 'Something broke'});