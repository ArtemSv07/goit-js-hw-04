// this - points to the parent element - profile
const profile = {
  username: 'Jacob',
  playTime: 300,
  //change the value of the key - username: '...'
  changeUsername(newName) {
    this.username = newName;
  },
 //add to the key - playTime: 300 + ...
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  //return the result with the values ​of the keys
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
