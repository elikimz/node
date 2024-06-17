import cron from 'node-cron';
cron.schedule('*/10 * * * * *' ,() => {
    console.log("hello")
  
  });
  cron.schedule(' * * * * *' ,() => {
    console.log("hello kimkim")
  
  });