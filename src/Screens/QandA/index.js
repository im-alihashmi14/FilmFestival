import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import Footer from 'src/Components/Footer';
import Header from 'src/Components/Header';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef} from 'src/config/screenSize';
import {useStyles} from './style';

const data = [
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
  {
    question: 'Is there any free trail on film festival?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
  },
];

const QandA = () => {
  const style = useStyles();
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: heightRef * 15}}
      style={style.main}
      showsVerticalScrollIndicator={false}>
      <Header />
      <View style={style.container}>
        <Text style={style.topText}>The FAQ’s</Text>
        <Text style={style.title}>Help Center</Text>
        <Text style={style.topText}>
          Your every question’s answer about sonder blue film festival will be
          here
        </Text>
        <View style={style.section}>
          <View style={style.left}>
            <Text style={style.topText}>Support</Text>
            <Text style={style.title2}>FAQ’s</Text>
            <Text style={style.topText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis
              tellus sit viverra pulvinar pretium neque purus. Sodales nulla
              cursus turpis nisl amet ipsum at etiam velit.
            </Text>
          </View>
          <View style={style.right}>
            {data.map((item, index) => {
              return <QnA item={item} key={index} />;
            })}
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default QandA;

const QnA = ({item}) => {
  const style = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <View style={style.qna}>
      <TouchableOpacity
        style={style.row}
        onPress={() => setOpen(prev => !prev)}>
        <Text style={style.question}>{item.question}</Text>
        <Icon
          name={open ? 'chevron-up' : 'chevron-down'}
          type="Entypo"
          color={globalStyles.Theme.liteBlue}
          size={fontRef * 20}
        />
      </TouchableOpacity>
      {open && (
        <View style={style.answerContainer}>
          <Text style={style.answer}>{item.answer}</Text>
        </View>
      )}
    </View>
  );
};
