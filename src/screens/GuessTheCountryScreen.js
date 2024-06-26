import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {countryList, objectImageList, objectNameList} from '../../data/Data';
import {ScrollView} from 'react-native-gesture-handler';

const GuessTheCountryScreen = props => {
  const [answer, setAnswer] = useState('');
  const [index, setIndex] = useState();
  const [result, setResult] = useState('');
  const [life, setLife] = useState(3);
  const [score, setScore] = useState(0);

  const {navigation} = props;

  const randomIndex = () => {
    const pickRandomIndex = Math.floor(Math.random() * countryList.length);
    setIndex(pickRandomIndex);
  };
  useEffect(() => {
    const homePage = navigation.addListener('focus', () => {
      randomIndex();
      setScore(0);
      setLife(3);
    });
    return homePage;
  }, []);

  const checkAnswer = () => {
    if (answer.toLowerCase() === countryList[index]) {
      setResult('true');
      setScore(score + 10);
    } else {
      setResult('false');
      setLife(life - 1);
    }
    setTimeout(() => {
      setResult('');
      setAnswer('');
      randomIndex();
    }, 1500);
  };

  useEffect(() => {
    if (score === 50) {
      navigation.navigate('Win');
    }
  }, [score]);

  useEffect(() => {
    if (life === 0) {
      navigation.navigate('GameOver');
    }
  }, [life]);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textDecorationLine: 'underline',
            fontSize: 28,
            fontFamily: 'serif',
            marginBottom: 16,
          }}>
          Guess The Country
        </Text>
        <Image
          style={{
            width: 250,
            height: 250,
            borderRadius: 10,
          }}
          source={{uri: objectImageList[index]}}
        />
        <View
          style={{
            margin: 8,
            backgroundColor: 'lavender',
            padding: 4,
            borderWidth: 1,
          }}>
          <Text style={{fontSize: 18}}>{objectNameList[index]}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 8,
          }}>
          <TextInput
            style={{
              borderWidth: 1,
              width: '50%',
              padding: 8,
            }}
            placeholder="Write your answer"
            onChangeText={text => setAnswer(text)}
            value={answer}
          />
          <TouchableOpacity
            style={{
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              padding: 8,
              marginLeft: 8,
              backgroundColor: 'skyblue',
            }}
            onPress={() => checkAnswer()}>
            <Text style={{fontSize: 18}}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Text>{result}</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            flexDirection: 'row',
          }}>
          <View
            style={{
              borderWidth: 1,
              padding: 8,
              alignItems: 'center',
              backgroundColor: 'mistyrose',
              borderRadius: 20,
              flex: 1,
              margin: 8,
            }}>
            <Text>Score : {score}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 8,
              alignItems: 'center',
              backgroundColor: 'mistyrose',
              borderRadius: 20,
              flex: 1,
              margin: 8,
            }}>
            <Text>Life : {life}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default GuessTheCountryScreen;
