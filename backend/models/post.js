module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          title: {
            allowNull: false,
            type: Sequelize.STRING
          },
          content: {
            allowNull: false,
            type: Sequelize.STRING
          },
          userId: {
            allowNull: false,
            type: Sequelize.INTEGER,
          },
          posted: {
            allowNull: false,
            type: Sequelize.STRING
          },
          modified: {
            allowNull: false,
            type: Sequelize.STRING
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
    return Post;
};