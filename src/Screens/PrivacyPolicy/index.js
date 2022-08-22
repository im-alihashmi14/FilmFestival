import React from 'react';
import {ScrollView} from 'react-native';
import Footer from 'src/Components/Footer';
import Header from 'src/Components/Header';
import Image from 'src/Components/Image';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {heightRef} from 'src/config/screenSize';
import {useStyles} from '../TermsNConditions/style';
const data = [
  {
    title: 'Main heading',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies semper lectus et mauris sed dis scelerisque. Turpis potenti orci scelerisque quam consectetur aliquam a. Consequat sit aliquam elementum risus. Ullamcorper ut morbi dignissim cras sit turpis potenti.',
  },
  {
    title: 'Main heading',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies semper lectus et mauris sed dis scelerisque. Turpis potenti orci scelerisque quam consectetur aliquam a. Consequat sit aliquam elementum risus. Ullamcorper ut morbi dignissim cras sit turpis potenti.',
  },
  {
    title: 'Main heading',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies semper lectus et mauris sed dis scelerisque. Turpis potenti orci scelerisque quam consectetur aliquam a. Consequat sit aliquam elementum risus. Ullamcorper ut morbi dignissim cras sit turpis potenti.',
  },
  {
    title: 'Main heading',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies semper lectus et mauris sed dis scelerisque. Turpis potenti orci scelerisque quam consectetur aliquam a. Consequat sit aliquam elementum risus. Ullamcorper ut morbi dignissim cras sit turpis potenti.',
  },
  {
    title: 'Main heading',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies semper lectus et mauris sed dis scelerisque. Turpis potenti orci scelerisque quam consectetur aliquam a. Consequat sit aliquam elementum risus. Ullamcorper ut morbi dignissim cras sit turpis potenti.',
  },
];

const PrivacyPolicy = () => {
  const style = useStyles();
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: heightRef * 15}}
      style={style.main}
      showsVerticalScrollIndicator={false}>
      <Header />
      <View style={style.container}>
        <Text style={style.header}>Privacy and Policy</Text>
        <Text style={style.headerDescription}>
          It include all the term and condition of sonder blu
        </Text>
        {data.map((item, index) => {
          return <Section item={item} key={index} />;
        })}
      </View>
      <Footer />
    </ScrollView>
  );
};

export default PrivacyPolicy;

const Section = ({item}) => {
  const style = useStyles();
  return (
    <View style={style.section}>
      <View style={style.row}>
        <Image
          source={require('src/Asset/Images/cross.png')}
          style={style.icon}
        />
        <Text style={style.title}>{item.title}</Text>
      </View>
      <Text style={style.description}>{item.description}</Text>
    </View>
  );
};
