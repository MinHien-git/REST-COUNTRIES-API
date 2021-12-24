const express = require("express")
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser');
const fetch = require('node-fetch');


const PORT = process.env.PORT || 5000;
const app = express()
let nations;


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', async(req, res) => {
    const api_url = "https://restcountries.com/v3.1/all"
    const response = await fetch(api_url)
    nations = await response.json()
    let nation = req.query.nation
    let nationRegex = new RegExp(nation, "i")
    if (nation == undefined) {
        res.render('index', { nations: nations })
    } else {
        const nationality = []
        for (const na of nations) {
            if (nationRegex.test(na.name.common.toLowerCase())) {
                nationality.push(na)
            }
        }
        res.render('index', { nations: nationality })
    }

})

app.get('/:name', async(req, res) => {
    const api_url = "https://restcountries.com/v3.1/all"
    const response = await fetch(api_url)
    nations = await response.json()
    const nationName = req.params.name

    // res.json(nations)
    for (const nation of nations) {
        if (nation.name.common === nationName) {
            res.render('nation-infomation', { nation: nation })
        }
    }
})

app.listen(PORT, () => console.log(`Listen to ${PORT}`))