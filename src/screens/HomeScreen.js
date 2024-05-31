import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
  const [number, setNumber] = useState(0);

  const decreaseNumber = () => {
    setNumber(number - 1);
  };
  const increaseNumber = () => {
    setNumber(number + 1);
  };
  useEffect(() => {
    setNumber(10);
    alert('You can increase or decrease the number');
  }, []);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <TouchableOpacity onPress={decreaseNumber}>
          <Text
            style={{
              fontSize: 40,
              borderColor: 'black',
              borderWidth: 1,
              padding: 8,
              margin: 20,
            }}>
            -
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 40}}>{number}</Text>
      <TouchableOpacity onPress={increaseNumber}>
        <Text
          style={{
            fontSize: 40,
            borderColor: 'black',
            borderWidth: 1,
            padding: 8,
            margin: 20,
          }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
