import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserRepository from "../repositories/UserRepository.js";
import EmailService from "../services/EmailService.js"

class UserService{
    static async register ({userName, email, password}){
        const existing = await UserRepository.findByEmail(email.trim());
        if (existing) throw new Error("Email already registered");
        const hashed = await bcrypt.hash(password, 10)
        const user = await UserRepository.create({userName, email, password: hashed});

        await EmailService.sendLoginNotification()
        return {user: {id: user._id, userName: user.userName, email: user.email}};

    }
    
    static async login({email, password}){
        const user = await UserRepository.findByEmail(email.trim());
        if (!user) throw new Error("Invalid credentials");
        console.log("User found:", user);

        const validLogin = await bcrypt.compare(password.trim(), user.password);
        if (!validLogin) throw new Error("Invalid credentials");
        console.log("Password match:", validLogin);

        const token = jwt.sign(
        {id: user._id, email: user.email},
        process.env.JWT_SECRET || "mysecret",
        {expiresIn: "1h"}
        );
        return {token, user: {id: user._id, userName: user.userName, email: user.email}};
    }

}

export default UserService