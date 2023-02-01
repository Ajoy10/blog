const bcrypt = require("bcrypt");
const db = require("../../database");

const RegisterUser = (email, password, user_name, next) => {
  //validate email
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!EMAIL_REGEX.test(email)) {
    next(new Error("Invalid email!"));
    return;
  }

  //validate password
  const PASSWORD_REGEX =
    /^(?=.*[A-Z]).(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/g;
  // Minimum nine characters, at least one capital letter, one number and one special character

  if (!PASSWORD_REGEX.test(password)) {
    next(new Error("Invalid password!"));
    return;
  }
  //TODO: validate user_name

  // Check whether email already exists
  db.query(
    "SELECT email FROM users WHERE email = $1",
    [email],
    (err, result) => {
      if (err) {
        next(err);
        return;
      }

      if (result.rowCount > 0) {
        next(new Error("Email already registered!"));
        return;
      }

      // Hash password
      HashPassword(password, (err, hashedPassword) => {
        if (err) {
          next(err);
          return;
        }

        //Insert new user record
        const values = {
          username: user_name,
          email: email,
          password: hashedPassword,
          role: "member",
          display_name: user_name,
          account_status: "unverified",
        };

        const q =
          "INSERT INTO users(user_id,username,email,password,role,display_name,account_status)" +
          " VALUES(uuid_generate_v4(), $1, $2, $3, $4, $5, $6)";

        db.query(q, Object.values(values), (err, res) => {
          if (err) {
            console.error(err);
            next(new Error("Internal error!"));
            return;
          }
          // console.log(res);
          next(null);
        });
      });
    }
  );
};

const HashPassword = (password, next) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.error(err);
      next(new Error("Internal error!"));
    }

    bcrypt.hash(password, salt, (err, hashedPassword) => {
      if (err) {
        console.error(err);
        next(new Error("Internal error!"));
      }
      next(null, hashedPassword);
    });
  });
};

module.exports = { RegisterUser };
