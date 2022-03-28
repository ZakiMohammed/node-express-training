const fs = require('fs')
const path = require('path')

const fooPath = path.join(__dirname, 'files', 'foo.txt')

// const content = fs.readFileSync(fooPath, 'utf-8')
// console.log(content)

// fs.readFile(fooPath, 'utf-8', (err, data) => {
//     if (err) {
//         console.log('Error', err)
//     } else {
//         console.log('File Data:', data)
//     }
// })

fs.writeFile(fooPath, 'Hello Update Foo', (err) => {
    if (err) {
        console.log('Error', err)
    } else {
        console.log('File Update')
    }
})