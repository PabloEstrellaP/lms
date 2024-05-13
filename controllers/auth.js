import { response } from 'express'

import User from '../models/mongo/users.js'
import { generarJWT } from '../helpers/JWT.js'

export const login = async (req, res = response) => {
    try {
        const { email, password } = req.body

        if(!email || !password) return res.status(404).json({
            ok: false,
            msg: `Email or Password not found`
        })

        const user = await User.findOne({
            email,
            password
        })

        if (!user) return res.status(400).json({
            ok: false,
            msg: `user not found`
        })

        const token = await generarJWT(user._id);

        res.cookie('isLogedLMS', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            // maxAge: 1000
            expires: new Date('2024-05-14')
        });

        
        return res.status(200).json({
            ok: true,
            msg: 'Login',
            token
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            ok: false,
            msg: error
        });
    }
}
