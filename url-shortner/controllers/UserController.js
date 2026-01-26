import UserService from "../services/UserService.js";

export async function register(req, res) {
    try{
        console.log("This is register "+req.email)
        const send = await UserService.register(req.body)
        return res.status(201).json({send});
    }catch(err){
        res.status(400).json({error: err.message});
    }

}

const login= async(req, res)=>{
    try{
        const send = await UserService.login(req.body)
        res.status(200).json({send})

    }catch(err){
        res.status(400).json({error: err.message});
    }
}

export default{
    register,
    login
};