const schedule = require('node-schedule');
const tarefa1 = schedule.scheduleJob('*/1 * 0 * * 4', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(() => {
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1');
}, 150000);

