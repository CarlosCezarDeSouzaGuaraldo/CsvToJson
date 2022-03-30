const csv = require('csv-parser')
const fs = require('fs')
const results = []

const writeJson = () => {

    fs.writeFile('./challenge/output.json', JSON.stringify(results), (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("File written successfully");
        }
    });
}

fs.createReadStream('./challenge/input.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        writeJson()
    });