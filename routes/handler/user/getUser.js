const{User} = require('../../../models');

module.exports =  async(req, res) =>{
    const allData = await User.findAll({
        attributes :['id','npm','nama','email']
    });

    return res.status(200).json({
        status : 'OK',
        message : 'Sukses Ambil Data',
        data : allData
    })
}