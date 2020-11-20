module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define('message', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          userId: {
            type: Sequelize.INTEGER,
            references: { //association avec Users
              model: 'Users',
              key: 'id'
            }
          },
          postId: {
            type: Sequelize.INTEGER,
            references: { //association avec Posts
              model: 'Posts',
              key: 'id'
            }
          },
          messages: {
            type: Sequelize.STRING
          },
          createMessage: {
            type: Sequelize.STRING
          },
          modifMessage: {
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
    return Message;
};