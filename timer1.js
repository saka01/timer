
const alarm = (setAlarm) => {

  for (let i = 2; i < process.argv.length; i++) {

    if (process.argv[i] === NaN || process.argv[i] < 0) {
      
    }else{
    setTimeout(()=>process.stdout.write('\x07'),process.argv[i]*1000)

    }
  }

}

alarm();

console.log('Done...')