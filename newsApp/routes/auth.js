const User = require('../schemas/user');
const msg = require('../routes/errormsg');
const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();

module.exports = function (passport) {
    router.post('/login', async (req, res) => {
        let { email, password } = req.body;
        const isUserId = await User.findOne({email: email});
        const isUserPw = await User.findOne({password: password});
        if(isUserId && isUserPw){
            const opts = {}
            opts.expiresIn = 120;  
            const secret = process.env.COOKIE_SECRET; 
            const token = jwt.sign({ email }, secret, opts);
            res.cookie('access-token', token);
            return res.redirect('/')
        }
        return res.status(401).json({ message: "Auth Failed" })
    });


    router.post('/join', async (req, res, next) =>{
        try{
            const isUser = await User.findOne({email: req.body.email});
            if(isUser){
                res.render('join', {err: msg[50001]})
            }else{
                let {email, name, password} = req.body
                let user = new User({ 
                    email : email,
                    name :  name,
                    password : password,
                    privilege : "normal" 
                })
                await user.save()
                res.redirect('/login')
            }   
        }catch(error){
            res.status(500).render('join', {err: msg[40001]})
        }
    })
    
    router.get('/logout', (req, res) => {
        req.logout();
        req.session.destroy((err) => {
            res.redirect('/')
        })
    })
    
    return router
}
