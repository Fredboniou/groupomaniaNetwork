/*module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          email: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true
          },
          lastname: {
            allowNull: false,
            type: Sequelize.STRING
          },
          firstname: {
            allowNull: false,
            type: Sequelize.STRING
          },
          password: {
            allowNull: false,
            type: Sequelize.STRING
          },
          created: {
            allowNull: false,
            type: Sequelize.STRING
          },
          updated: {
            allowNull: false,
            type: Sequelize.STRING
          },
          presentation: {
            allowNull: true,
            type: Sequelize.STRING
          },
          isAdmin: {
            allowNull:false, 
            type: Sequelize.BOOLEAN
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
    });
    return User;
};*/