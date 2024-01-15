import React, { useState } from 'react';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import moment from 'moment';
import { Timer } from './Timer';

export default function App() {
  const [fullStart, setFullStart] = useState(0);
  const [laps, setLaps] = useState([]);
  const [now, setNow] = useState(0);
  const [start, setStart] = useState(0);
  const timer = now - start;
  let intervalTimer;

  const onStart = () => {
    const now = new Date().getTime();
    setFullStart(now);
    setStart(now);
    setNow(now);
    setLaps([0]);
    intervalTimer = setInterval(() => {
      setNow(new Date().getTime());
    }, 1);
  };

  const onStop = () => {
    clearInterval(intervalTimer);
    const [firstLap, ...others] = laps;
    setLaps([firstLap - start + now, ...others]);
    setStart(0);
    setNow(0);
    setFullStart(0);
  };

  const onReset = () => {
    setStart(0);
    setNow(0);
    setLaps([]);
  };

  const onLap = () => {
    const timeStamp = new Date().getTime();
    const [firstLap, ...others] = laps;
    setStart(timeStamp);
    setNow(timeStamp);
    setLaps([0, firstLap - start + now, ...others]);
  };

  return (
    <View style={styles.container}>
      {laps.length == 0 && (
        <View>
          <Button title='Старт' onPress={onStart}/>
        </View>
      )}

      {laps.length > 0 && (
        <View style={{padding:100}}>
          <Timer
            interval={now - fullStart}
            style={styles.timer}
          />

          <Text>Секундомер</Text>
          <Text>Время: {moment(timer).format('mm:ss.SSS')}</Text>
          <ScrollView>

            {laps.map((lap, index) => (
              <Text key={index}>
                Круг {index + 1}: {moment(lap).format('mm:ss.SSS')}
              </Text>
            ))}

          </ScrollView>
          <Button title='Сброс' onPress={onReset}/>
          <Button title='Круг' onPress={onLap} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timer: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 20,
  },
});
