import React from 'react';
import {FlatList as RNFlatList, FlatListProps} from 'react-native';

const FlatList = ({...rest}: FlatListProps) => {
  return (
    <RNFlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      {...rest}
    />
  );
};

export default FlatList;
