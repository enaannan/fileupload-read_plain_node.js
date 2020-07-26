const http = require('http');
const { on } = require('process');
const port= process.env.PORT||3000;
const url = require('url');
const fs = require('fs');
const path = require('path');
const { parse } = require('path');


const server = http.createServer((req,res)=>{



    const purl= url.parse(req.url,true);

    // save filename param
    var filename =purl.query['filename']; 

//readfile route
if(purl.pathname == '/readfile'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});

        
// readfile event
fs.readFile(path.join('files',filename),'utf8',(err,data)=>{
  
    if(err){
        res.end(JSON.stringify('file does not exist'))
    }

       
    console.log(data);
   
 })
 
        res.end(JSON.stringify('file read'));

   
  
    }
    else if(purl.pathname == '/uploadfile'){
        res.writeHead(200,{'Content-Type': 'text/plain;charset=UTF-8'});
    
    var data = '';
    req.on('data', (chunk)=>{
        data+=chunk.toString();
    });
    req.on('end',()=>{
        console.log(data)
        fs.writeFile('./files/newfile.txt',data,err=>{
            if(err){
                console.error(err)
                return
            }
         
        })
        res.end(JSON.stringify('done uploading successfully'));
    })
    
        res.end(JSON.stringify('uploading complete'));

    }
else{
res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
res.end(JSON.stringify('welcome hoome'))
}}
)


server.listen(port,()=>{
    console.log(`listening on port ${port}`);
});














// const data = JSON.stringify(
//     {
//     data:"this is the data"
//     }
// )

// const options = {
//     hostname :'localhost',
//     port:3000,
//     path:'/uploadimage',
//     method:'POST',
//     header:{
//         'Content-Type': 'mulipart/form-data',
//         'Content-Length':data.length

//     }
// }

// const req = http.request(options,res=>{
//     console.log(res.statusCode);
//     res.on('data',d=>{
//         process.stdout.write(d);
//     })
  
// })



// req.on('error',(e)=>{
//     console.log(e);
// })

// req.write(data);
// req.end;