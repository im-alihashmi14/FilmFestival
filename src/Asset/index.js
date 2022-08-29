import {isPhone} from 'src/config/screenSize';

export default {
  movies: [
    require('./Images/movie1.png'),
    require('./Images/movie2.png'),
    require('./Images/movie3.png'),
  ],
  director: [
    require('./Images/director2.png'),
    require('./Images/director1.png'),
    require('./Images/director3.png'),
  ],
  movie4: require('./Images/movie4.png'),

  background: require('./Images/background.png'),
  profileIcon: require('./Images/profileIcon.png'),
  emailIcon: require('./Images/Message.png'),
  passwordIcon: require('./Images/Lock.png'),
  bgImage: isPhone
    ? require('./Images/bgImage.png')
    : require('./Images/bgOther.png'),
  Movies: [
    require('./movies/1.png'),
    require('./movies/2.png'),
    require('./movies/3.png'),
    require('./movies/4.png'),
    require('./movies/5.png'),
    require('./movies/6.png'),
  ],
  Diretors: [
    require('./directors/1.png'),
    require('./directors/2.png'),
    require('./directors/3.png'),
    require('./directors/4.png'),
  ],
  check: require('./icons/check.png'),
};
