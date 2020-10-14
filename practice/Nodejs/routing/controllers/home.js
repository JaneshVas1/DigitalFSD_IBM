exports.getHome = (req, res, next) => {
    res.render('home',{titleView:'Home', msg:"Welcome to our world",path: '/home'})

};