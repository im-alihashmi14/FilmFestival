import React from 'react';
import RNVideoPlayer from 'react-native-video-player';
import {fullHeight, fullWidth} from 'src/config/screenSize';

const VideoPlayer = () => {
  return (
    <RNVideoPlayer
      video={{
        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      }}
      videoWidth={fullWidth}
      videoHeight={fullHeight}
      thumbnail={{
        uri: 'https://i.pinimg.com/originals/be/b8/5d/beb85da5406bbd3fb982a8d78d923dc7.jpg',
      }}
    />
  );
};

export default VideoPlayer;
