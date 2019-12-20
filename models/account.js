'use strict';
module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {});
    Account.associate = function(models) {
        // associations can be defined here
    };
    return Account;
};