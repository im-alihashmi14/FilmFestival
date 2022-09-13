import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, isPhone, widthRef} from 'src/config/screenSize';
import {responsiveSize} from 'src/Helper/Responsive';

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  main: {
    flex: 1,
  },
  scroll: {
    padding: heightRef * 30,
  },
  textTop: {
    fontSize: responsiveSize({Tablet: 32, Handset: 22}) * fontRef,
    color: globalStyles.Theme.white,
    fontWeight: '600',
  },
  textTop2: {
    fontSize: responsiveSize({Tablet: 32, Handset: 22}) * fontRef,
    color: globalStyles.Theme.white,
    fontWeight: '600',
    marginTop: heightRef * 30,
  },
  textCheckView: {
    flexDirection: 'row',
    paddingTop: heightRef * responsiveSize({Tablet: 16, Handset: 10}),
    alignItems: 'center',
  },
  textCheck: {
    marginLeft: widthRef * 6,
    color: globalStyles.Theme.white,
    fontSize: responsiveSize({Tablet: 16, Handset: 10}) * fontRef,
  },
  textDesc: {
    color: globalStyles.Theme.white,
    fontSize: responsiveSize({Tablet: 15, Handset: 12}) * fontRef,
    display: isPhone ? 'flex' : 'none',
  },
  container: {
    width: '100%',
    backgroundColor: globalStyles.Theme.backgroundColor,
    borderRadius: widthRef * 35,
    borderColor: globalStyles.Theme.cyan,
    borderWidth: widthRef,
    marginTop: heightRef * 27,
    paddingTop: heightRef * 33,
    paddingHorizontal: widthRef * 25,
    paddingBottom: heightRef * 15,
  },
  parent: {
    borderBottomWidth: heightRef,
    borderBottomColor: globalStyles.Theme.border,
    paddingBottom: heightRef * 20,
    ...breakpoints.up('sm', {
      flexDirection: 'row',
    }),
  },
  left: {
    fontSize: responsiveSize({Tablet: 32, Handset: 22}) * fontRef,
    color: globalStyles.Theme.white,
  },
  right: {
    color: globalStyles.Theme.white,
    fontSize: responsiveSize({Tablet: 15, Handset: 12}) * fontRef,
  },
  row: {
    ...breakpoints.up('sm', {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    }),
  },
  toggleRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: heightRef * 15,
    ...breakpoints.up('sm', {
      marginBottom: 0,
    }),
  },
  bottom: {
    marginTop: heightRef * 20,
    ...breakpoints.up('sm', {
      flexDirection: 'row',
    }),
  },
  leftBottom: {
    flex: 1,
  },
  promoText: {
    color: globalStyles.Theme.white,
    fontSize: responsiveSize({Tablet: 16, Handset: 12}) * fontRef,
  },
  rightBottom: {
    justifyContent: 'space-between',
  },
  discount: {
    fontSize: responsiveSize({Tablet: 16, Handset: 12}) * fontRef,
    color: globalStyles.Theme.border,
  },
  subTotal: {
    fontSize: responsiveSize({Tablet: 18, Handset: 14}) * fontRef,
    color: globalStyles.Theme.white,
  },
  price: {
    fontSize: responsiveSize({Tablet: 26, Handset: 26}) * fontRef,
    color: globalStyles.Theme.white,
    fontWeight: '600',
  },
  textInput: {
    flex: 1,
    backgroundColor: globalStyles.Theme.placeholder,
    borderRadius: heightRef * responsiveSize({Tablet: 15, Handset: 10}),
    paddingHorizontal: heightRef * 7,
    color: globalStyles.Theme.white,
    marginRight: widthRef * 15,
    ...breakpoints.up('sm', {
      flex: 0.65,
    }),
  },
  rowInput: {
    flexDirection: 'row',
    marginVertical: heightRef * 13,
    ...breakpoints.up('sm', {
      marginBottom: 0,
    }),
  },
  scrollSummary: {
    paddingHorizontal: widthRef * 15,
    paddingBottom: heightRef * 50,
    ...breakpoints.up('sm', {
      paddingHorizontal: widthRef * 140,
      flexDirection: 'column-reverse',
    }),
  },
  cardRow: {
    flexDirection: 'row',
    marginVertical: 25 * heightRef,
  },
  card: {
    height: heightRef * 25,
    width: widthRef * 38,
    marginRight: widthRef * 5,
  },
  stripe: {
    height: heightRef * 26,
    width: widthRef * 62,
    marginRight: widthRef * 5,
  },
  rowCheck: {
    flexDirection: 'row',
    marginVertical: heightRef * 10,
    justifyContent: 'space-between',
  },
  container2: {
    marginTop: heightRef * 10,
    paddingHorizontal: widthRef * 40,
    ...breakpoints.up('sm', {
      paddingHorizontal: widthRef * 10,
    }),
  },
  checkBox: {
    flexDirection: 'row',
    borderBottomWidth: heightRef,
    borderBottomColor: globalStyles.Theme.border,
    paddingBottom: heightRef * 25,
  },
  amountText: {
    marginTop: heightRef * 30,
    fontSize: responsiveSize({Tablet: 20, Handset: 18}) * fontRef,
    fontWeight: '600',
    color: globalStyles.Theme.white,
  },
  address: {
    color: globalStyles.Theme.white,
    width: '65%',
    marginVertical: heightRef * 15,
    fontSize: responsiveSize({Tablet: 20, Handset: 12}) * fontRef,
  },
  title: {
    color: globalStyles.Theme.white,
    marginBottom: heightRef * 10,
    lineHeight: responsiveSize({Tablet: 26, Handset: 15}) * fontRef,
    fontWeight: '400',
    fontSize: responsiveSize({Tablet: 16, Handset: 12}) * fontRef,
  },
  value: {
    color: globalStyles.Theme.white,
    paddingBottom: heightRef * 10,
    lineHeight: responsiveSize({Tablet: 26, Handset: 15}) * fontRef,
    fontWeight: '400',
    fontSize: responsiveSize({Tablet: 18, Handset: 14}) * fontRef,
  },
  values: {
    ...breakpoints.up('sm', {
      flex: 1,
    }),
  },
  borderTab: {
    ...breakpoints.up('sm', {
      borderWidth: 0,
    }),
  },
}));
