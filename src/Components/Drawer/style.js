import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {fontRef} from 'src/config/screenSize';

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '60%',
  },
  drawer: {
    flex: 1,
    alignItems: 'flex-end',
    // ...breakpoints.up('sm', {display: 'none'}),
  },
  icon: top => ({
    position: 'absolute',
    right: '20%',
    top: top ?? 0,
  }),
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerContainer: {
    marginTop: '50%',
    paddingLeft: '10%',
  },
  itemText: {
    color: globalStyles.Theme.white,
    fontSize: fontRef * 20,
    fontWeight: '600',
  },
  itemIcon: {
    marginLeft: '5%',
  },
  subItem: {
    marginLeft: '7%',
    marginTop: '5%',
    fontSize: fontRef * 10,
    fontWeight: '400',
    color: globalStyles.Theme.white,
  },
}));
