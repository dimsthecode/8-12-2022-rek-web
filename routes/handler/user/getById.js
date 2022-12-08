const{User} = require('../../../models');

module.exports =  async(req, res) =>{
    const id = req.params.id;
    const data = await User.findByPk(id,{
        attributes :['id','npm','nama','email']
    });

    return res.status(200).json({
        status : 'OK',
        message : 'Sukses Ambil Data dengan Id',
        data : data
    })
}