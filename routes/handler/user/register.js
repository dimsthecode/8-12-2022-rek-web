const{User} = require('../../../models');
const bcrypt = require('bcrypt');
const Valid = require('fastest-validator');
const v = new Valid();

module.exports = async(req, res)=>{
    const schema = {
        nama : 'string|empty:false',
        npm  : 'string|empty:false',
        gender  : 'string|empty:false',
        jurusan : 'string|empty:false',
        asal : 'string|empty:false',
        umur : 'string|empty:false',
        email : 'email|empty:false',
        password : 'string|min:6',
        token : 'string|empty:true',
    }

    const validate = v.validate(req.body, schema)
    if (validate.lenght){
        return res.status(400).json({
            status : 'ERROR',
            message : validate
        });
    }

    const validationEmail = await User.findOne({
        where : {email : req.body.email},
        attributes : ['id','nama','npm','email']
    });
    if (validationEmail){
        return res.status(400).json({
            status : 'ERROR',
            msg : 'Email is empty'
        })
    }
    const passwd = await bcrypt.hash(req.body.password, 10);

    const data = {
        nama : req.body.nama,
        npm  : req.body.npm,
        gender  : req.body.gender,
        jurusan : req.body.jurusan,
        asal : req.body.asal,
        umur : req.body.umur,
        email : req.body.email,
        password : passwd
    }

    const createData = await User.create(data);

    return res.status(200).json({
        status : 'OK',
        message : 'Sukses Melakukan Register',
        data : createData
    })
}