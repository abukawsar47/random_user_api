const users = require("../json/users.json");

module.exports.getAllUsers = (req, res, next) => {
  const { limit, page } = req.query;
  res.send(users.slice(0, limit));
};

module.exports.getRandomUser = (req, res) => {
  const string = JSON.stringify(users);
  const parsedUser = JSON.parse(string);

  res.send(parsedUser[Math.floor(Math.random() * parsedUser.length)]);
};

module.exports.saveAUser = (req, res) => {
  if (
    req.body.id == undefined ||
    req.body.gender == undefined ||
    req.body.name == undefined ||
    req.body.contact == undefined ||
    req.body.address == undefined ||
    req.body.photoURL == undefined
  ) {
    res.send("A user value is missing");
  } else {
    users.push(req.body);
    res.send("Data has been saved");
  }
};
module.exports.deleteAUser = (req, res) => {
  const string = JSON.stringify(users);
  const parsedUser = JSON.parse(string);

  const index = parsedUser.findIndex((object) => {
    return object.id === req.body.id;
  });

  if (index == -1) {
    res.send("ID did not match");
  } else {
    users.splice(index, 1);
    res.send("Deleted successfully");
  }
};
module.exports.saveAUser = (req, res) => {
  if (
    req.body.id == undefined ||
    req.body.gender == undefined ||
    req.body.name == undefined ||
    req.body.contact == undefined ||
    req.body.address == undefined ||
    req.body.photoURL == undefined
  ) {
    res.send("A user value is missing");
  } else {
    users.push(req.body);
    res.send("Data has been saved");
  }
};

module.exports.deleteAUser = (req, res) => {
  const string = JSON.stringify(users);
  const parsedUser = JSON.parse(string);

  const index = parsedUser.findIndex((object) => {
    return object.id === req.body.id;
  });

  if (index == -1) {
    res.send("Id not found");
  } else {
    users.splice(index, 1);
    res.send("Successfully Deleted");
  }
};

module.exports.updateAUser = (req, res) => {
  const string = JSON.stringify(users);
  const parsedUser = JSON.parse(string);

  const i = parsedUser.findIndex((object) => {
    return object.id === req.query.id;
  });

  if (i == -1) {
    console.log(i);
    res.send("Id not found");
  } else {
    if (req.body.name != undefined) {
      users.name = req.body.name;
    }
    if (req.body.gender != undefined) {
      users.gender = req.body.gender;
    }
    if (req.body.address != undefined) {
      users.address = req.body.address;
    }
    if (req.body.contact != undefined) {
      users.contact = req.body.contact;
    }
    if (req.body.photoURL != undefined) {
      users.photoURL = req.body.photoUrl;
    }
    res.send("Successfully Updated User");
  }
};
