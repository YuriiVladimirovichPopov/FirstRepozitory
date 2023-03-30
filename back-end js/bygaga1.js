const http = require('http')

let requestsCount = 0

const server = http.createServer((request, response) => {

    requestsCount++

    switch (request.url) {
        case '/students':
        response.write('students ')
        break;
        case '/kids':
            response.write('kids are back-end creaters ')
            break;
            default:
                response.write('404 not found ')

    }   
    response.write('bygagashechki:' + requestsCount)
    response.end()
})

server.listen(3003)