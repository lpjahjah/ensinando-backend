const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        cd_login_usuario: Sequelize.STRING,
        nm_usuario: Sequelize.STRING,
        cd_senha_usuario: Sequelize.INTEGER,
      },
      {
        sequelize,
        // eslint-disable-next-line comma-dangle
      }
    );
  }
}

module.exports = User;
