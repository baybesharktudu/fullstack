import User from "../models/user.model.js"

export const register = async (req, res) => {
    const { email, fullname, password } = req.body

    // case 1:
    if (!email || !fullname || !password) return res.status(403).json(
        { message: "Vui lòng nhập đầy đủ các trường" })

    // đk tk
    const findUser = await User.findOne({ email: email })

    if (findUser) return res.status(403).json(
        { message: "TK đã tồn tại" })

    const newUser = new User({
        email: email,
        fullname: fullname,
        password: password
    })
    
    const saved = await newUser.save()
    res.status(201).json(saved)
}
