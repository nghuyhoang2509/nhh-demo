const jwt = require('jsonwebtoken')
class SiteController{

    //[GET] /
    async index(req,res,next){
        res.render('home')
    }


}

module.exports = new SiteController