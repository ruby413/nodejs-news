const express = require('express');
const Article = require('../schemas/article');
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post('/', async (req, res)=>{
    let token = req.cookies["access-token"];
    let decode = jwt.verify(token, process.env.COOKIE_SECRET, (err, decoded) => {return err ? false : decoded;});
    let subject = req.body.subject;
    let image = req.body.image;
    let contents = req.body.contents;

    if(token){
        let article = new Article({ 
            email :  decode.email,
            name :  decode.name,
            subject : subject,
            image :  image,
            contents : contents
        })
        res.render('post', {title: 'NewsPage', subject: subject, image: image, contents: contents, data : "login", status : "post"})
        await article.save()
    }
})

router.get('/', (req, res)=>{
    let token = req.cookies["access-token"];
    if(token){
        res.render('report', {title: 'Report', data : "login", status : "post"})
    }
})

router.post('/save', (req, res) => {
    return res.redirect('/post')
});



module.exports = router;