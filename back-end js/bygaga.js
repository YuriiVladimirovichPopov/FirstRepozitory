const http = require('http')

let requestsCount = 0

const server = http.createServer((request, response) => {

    requestsCount++

    switch (request.url) {
        case'/students':
        response.write('students')
    }   
    response.write('bygagashechki:' + requestsCount)
    response.end()
})

server.listen(3003)