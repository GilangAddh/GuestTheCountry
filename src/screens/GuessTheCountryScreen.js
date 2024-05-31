import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {countryList, objectImageList, objectNameList} from '../../data/Data';

const GuessTheCountryScreen = () => {
  const [answer, setAnswer] = useState('');
  const [index, setIndex] = useState();
  const [result, setResult] = useState('');
  const randomIndex = () => {
    const pickRandomIndex = Math.floor(Math.random() * countryList.length);
    setIndex(pickRandomIndex);
  };
  useEffect(() => {
    randomIndex();
  }, []);
  const checkAnswer = () => {
    if (answer.toLowerCase() === countryList[index]) {
      setResult('true');
    } else {
      setResult('false');
    }
    setTimeout(() => {
      setResult('');
      setAnswer('');
      randomIndex();
    }, 1500);
  };
  return (
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
    </View>
  );
};

export default GuessTheCountryScreen;
