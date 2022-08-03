import React from 'react';
import {FlatList as RNFlatList, FlatListProps} from 'react-native';

const FlatList = ({data, contentContainerStyle, ...rest}: FlatListProps) => {
  return (
    <RNFlatList
      keyExtractor={(item, index) => index.toString()}
      data={data}
      contentContainerStyle={contentContainerStyle}
      {...rest}
    />
  );
};

export default FlatList;
