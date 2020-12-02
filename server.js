const app = require('express')()

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/test-client.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
