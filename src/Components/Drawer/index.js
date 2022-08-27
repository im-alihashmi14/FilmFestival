/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import ReactNativeModal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import globalStyles from 'src/config/globalStyles';
import {fullHeight, fullWidth} from 'src/config/screenSize';
import Gradient from '../Gradient';
import Text from '../Text';
import View from '../View';
import {useStyles} from './style';

const Drawer = ({visible, setVisible}) => {
  const style = useStyles();
  const inset = useSafeAreaInsets();
  return (
    <ReactNativeModal
      isVisible={visible}
      transparent
      style={{
        height: fullHeight,
        width: fullWidth,
        margin: 0,
      }}
      animationOut={'fadeOutRight'}
      animationIn={'fadeInRight'}>
      <Pressable style={style.drawer} onPress={() => setVisible(false)}>
        <Pressable onPress={() => {}} style={style.container}>
          <Gradient
            colors={[
              'rgba(15, 29, 37, 0.725556)',
              '#0F1D25B9',
              '#011826',
              '#011826',
              '#011826',
            ]}
            style={{flex: 1}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Icon
              name="x"
              type="Octicons"
              color={globalStyles.Theme.liteBlue}
              size={25}
              style={style.icon(inset.top)}
              onPress={() => setVisible(false)}
            />
            <View style={style.drawerContainer}>
              <Item name="Home" />
              <Item name="Search" />
              <Item name="Spotlight Series" />
              <Item
                name="Podcasts"
                subItems={[
                  {name: 'Fashion'},
                  {name: 'Branding'},
                  {name: 'Technology'},
                  {name: 'Animation'},
                ]}
              />
              <Item
                name="Blogs"
                subItems={[
                  {name: 'Animation'},
                  {name: 'Branding'},
                  {name: 'Fashion'},
                  {name: 'Technology'},
                ]}
              />
            </View>
          </Gradient>
        </Pressable>
      </Pressable>
    </ReactNativeModal>
  );
};

export default Drawer;

const Item = ({name, subItems}) => {
  const style = useStyles();
  const [visible, setVisible] = useState(false);
  return (
    <View style={{marginBottom: '10%'}}>
      <TouchableOpacity
        style={style.item}
        onPress={() => setVisible(prev => !prev)}>
        <Text style={style.itemText}>{name}</Text>
        {subItems ? (
          <Icon
            name="chevron-down"
            type="Entypo"
            color={globalStyles.Theme.liteBlue}
            size={25}
            style={style.itemIcon}
          />
        ) : null}
      </TouchableOpacity>
      {subItems && visible
        ? subItems.map((subItem, index) => {
            return (
              <Text style={style.subItem} onPress={() => {}} key={index}>
                {subItem.name}
              </Text>
            );
          })
        : null}
    </View>
  );
};
