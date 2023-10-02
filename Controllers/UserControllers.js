const Client = require("../Models/Client")





exports.login = async (req, res) => {
    try {
        const result = await Client.findOne({ email: req.body.email })

        if (result) {
            if (result.password == req.body.password) {
                console.log('connected')
                res.status(200).send('connected')
            }
            else {
                res.status(400).send('vérifier password')
            }
        } else {
            res.status(400).send('vérifier email')

        }
    } catch (error) {
        res.status(500).send('erreur 500')
    }


}