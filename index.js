const app = require('express')()
const port = 3000

app.get('/', (req, res) => {
    res.json({
        message: 'Hello NODE JS'
    })
})

app.listen(port, () => {
    console.log('server start: ', `http://localhost:${port}`);

})