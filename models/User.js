
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          npm: {
            type: DataTypes.STRING,
            allowNull: false
          },
          nama: {
            type: DataTypes.STRING,
            allowNull: false
          },
          gender:{
            type: DataTypes.ENUM,
            values:['Laki-Laki', 'Perempuan'],
            allowNull: false
          },
          jurusan:{
            type: DataTypes.STRING,
            allowNull: false
          },
          asal:{
            type: DataTypes.STRING,
            allowNull: false
          },
          umur:{
            type: DataTypes.STRING,
            allowNull: false
          },
          email:{
            type: DataTypes.STRING,
            allowNull: false
          },
          password:{
            type: DataTypes.STRING,
            allowNull: false
          },
          token:{
            type: DataTypes.TEXT,
            allowNull: true
          },
          createdAt:{
          field : "created_ad",
          type : DataTypes.DATE
          },
          updatedAt:{
            field : "updated_ad",
            type : DataTypes.DATE
          },
    },{
        tableName: "users"
    });
    return User;
}