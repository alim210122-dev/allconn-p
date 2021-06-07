module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { // Mysql에는 users(복수) 테이블 생성
        
        email : {},
        nickname : {},
        password : {},


    },{
        charset : 'utf8',
        collate : 'uft8_general_ci'


    });

    return User;
}