const axios = require('axios').default
const fs = require('fs')

axios
    .get('https://www.google.com/search?q=example&tbm=isch')
    .then(res => {
        console.log(`statusCode: ${res.status}`)
        console.log(res.data)
        fs.writeFile('docout.html', res.data, err => {
            if (err) {
                console.error(err)
                return
            }
        })
    })
    .catch(error => {
        console.error(error)
    })