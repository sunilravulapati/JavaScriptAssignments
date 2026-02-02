import jwt from 'jsonwebtoken'

export function verifyToken(req,res,next){
    //logic
    //1. get token from req cookies
    //console.log(req.cookies)
    let signedToken = req.cookies.token
    if(!signedToken){
        return res.status(401).json({message:"please login first"})
    }
    //2. verify the token(decode)
    let decodedToken = jwt.verify(signedToken,'secret')
    console.log("decoded token: ",decodedToken)
    next()
}