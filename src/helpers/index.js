const { apiBaseUrl } = require('../config/config');

const completeComments = (comments, users) => {
  let completeComments = [];
  // Loop igennem alle vores kommentarer
  comments.forEach(comment => {
    // Loop igennem de brugere vi har modtaget
    users.forEach(user => {
      // Hvis vi har et match
      if (user._id === comment.creatorId) {
        comment.firstName = user.firstName;
        comment.image = `${apiBaseUrl}/uploads/${user.imagePath}`;
        completeComments.push(comment);
      }
    });
  });
  return completeComments;
};

module.exports = {
  completeComments
};
