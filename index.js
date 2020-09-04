const path = require('path')
const fs = require('fs')

const myPath = path.resolve(__dirname, 'homework.txt')

function myLogger (log) {
  let stream = fs.createWriteStream(myPath, {flags:'a'});
  stream.once('open', function(fd) {
    stream.write(log + "\n");
    stream.end(); 
  });
}

myLogger('aaa')
myLogger('bbb')
myLogger('ccc')
myLogger('ddd')
myLogger('eee')
myLogger('fff')
myLogger('ggg')
myLogger('hhh')
myLogger('iii')
myLogger('jjj')
myLogger('kkk')
myLogger('lll') 

let count = 0;
require('fs').createReadStream(myPath)
  .on('data', function(chunk) {
    for (let i=0; i < chunk.length; ++i)
      if (chunk[i] == 10) count++;
      moreLines()
  })
  .on('end', function() {
    console.log(count);
  });
 let linesTodelete = 0;
 let arrayOfDeletedLines = [];

function deleteLines (count) {
linesTodelete = (count - 11 )

for (let i = 0; i <= linesTodelete; i++) {
  arrayOfDeletedLines.push(i);
}
}
  
function moreLines (){
  deleteLines (count);
 if (count > 10) {
    const removeLines = (data, lines = []) => {
        return data
            .split('\n')
            .filter((val, idx) => lines.indexOf(idx) === -1)
            .join('\n');
    }
    
    fs.readFile(myPath, 'utf8', (err, data) => {
        if (err) throw err;
    
        fs.writeFile(myPath, removeLines(data, arrayOfDeletedLines), 'utf8', function(err) {
            if (err) throw err;
            console.log("the lines have been removed.");
        });
    })
}
}








  
