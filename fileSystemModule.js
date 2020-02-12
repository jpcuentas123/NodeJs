const fs = require('fs')

//Create a file

// fs.writeFile('Example.json',`{
//     "id":1,
//     "title": "'Example post'",
//     "content": "'My first Post blog'",
//     "idiom": "'en'"
// }`,error=>{
//     if(error)
//         console.log(error)
//     else
//         fs.readFile('Example.json','utf8',(error, file)=>{
//             if(error)
//                 console.log(error);
//             else
//                 console.log(file);
//         })
//         console.log('File successfully created')
// })
// fs.mkdir('DataBase', err => {
//     if (err)
//         console.log(err);
//     else {
//         fs.writeFile('Posts.json',`{
//                 "id":1,
//                 "title": "'Example post'",
//                 "content": "'My first Post blog'",
//                 "idiom": "'en'"
//             }`,error=>{
//                 if(error)
//                     console.log(error)
//                 else
//                     console.log('File successfully created')
//                     fs.rename('Posts.json', './DataBase/Posts.json', err => {
//                         if (err)
//                             console.log(err);
//                         else
//                             console.log('File moved and renamed');
//                     })
//             })
//     }
// })

// fs.appendFile('Database/Posts.json','Post no such',err=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Its Done');
// })

// fs.unlink('./DataBase/Posts.json',err=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('File is successfully deleted');
// })
fs.readdir("./",((err,files)=>{
    if(err){
        console.log(err)
    }else{
        console.log(files);
    }
}))