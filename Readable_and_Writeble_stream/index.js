const fs = require('fs')

const readStream = fs.createReadStream('./example.txt', 'utf8')//This method read the file by chunks and dont try to read completly off once time
const writeStream = fs.createWriteStream('./example2.txt', 'utf8')

// readStream.on('data', (chunk) => {
//     console.log("Data event \nData is equal to : " + chunk)
//     writeStream.write(chunk, err => {
//         if (err)
//             console.log(err);
//         else
//             console.log(`File writed`);
//         const readStream2 = fs.createReadStream('./example2.txt','utf8')

//         readStream2.on('data',chunk2=>{
//             console.log(`Data of file 2 is equal to: ${chunk2}`);

//         })
//     })

// })

readStream.pipe(writeStream)

