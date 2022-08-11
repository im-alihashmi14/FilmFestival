import {isPhone} from 'src/config/screenSize';

export default {
  movies: [
    require('./Images/movie1.png'),
    require('./Images/movie2.png'),
    require('./Images/movie3.png'),
  ],
  background: require('./Images/background.png'),
  profileIcon: require('./Images/profileIcon.png'),
  emailIcon: require('./Images/Message.png'),
  passwordIcon: require('./Images/Lock.png'),
  bgImage: isPhone
    ? require('./Images/bgImage.png')
    : require('./Images/bgOther.png'),
};
