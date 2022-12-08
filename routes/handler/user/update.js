const bcrypt = require("bcrypt");
const {User} = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
        nama: "string|empty:false",
        umur : 'string|empty:false',
        asal : 'string|empty:false',
        email: "email|empty: false",
        password: "string|min:6"
    };

    const validate = v.validate(req.body, schema);

    if (validate.lenght){
        return res.status(200).json({
            status: "error",
            message: validate,
        });
    }

    const id = req.params.id;
    const user = await User.findByPk(id);

    if (!user){
        return res.status(200).json({
            status: "error",
            message: "User not found",
        });
    }

    const email = req.body.email;
    if (email){
        const checkEmail = await User.findOne({
            where: {email}
        });

        if(checkEmail && email !== user.email){
            return res.status(200).json({
                status: "error",
                message: "User not found",
            });
        }
    }

    const passwd = await bcrypt.hash(req.body.password,10);
    const{
        nama, umur, asal
    } = req.body;

    await user.update({
        email, umur, asal, pass:passwd, nama
    });

    return res.status(200).json({
        status: "succes",
        message: {
            id: user.id, nama, email, asal, umur
        }
    })
};
