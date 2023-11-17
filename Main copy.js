import styled from 'styled-components/native'
import CounterBlock from './Counter';
import EatingBlock from './Eating';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const MaiWindow = styled.ScrollView`
  width: 100%;
  min-height: 100%;
  background-color: #F1F1F1;
`

const TextAbout = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.3;
  margin: 16px 0;
`


export default function Main() {
    const nav = useNavigation()
  const [name, setName] = useState('')
  const [calls, setCalls] = useState('')
  const [meal, setMeal] = useState([])

  function onChangeName(text) {
    setName(text)
  }

  function onChangeCalls(text) {
    setCalls(text)
  }

  function onPressLearnMore() {
    const newEl = [name, name + calls, calls]
    setMeal([...meal, newEl])
    nav.navigate('Ad')
  }

  return (
    <MaiWindow>
      <CounterBlock />
      <TextAbout>Подробный рацион всего дня</TextAbout>
      <TextInput  editable
        maxLength={40}
        onChangeText={text => onChangeName(text)}
        value={name}
        style={{padding: 10, backgroundColor: '#101010', color: '#fff'}}/>
        <TextInput  editable
        maxLength={40}
        onChangeText={text => onChangeCalls(text)}
        value={calls}
        style={{padding: 10, backgroundColor: '#101010', color: '#fff'}}/>
        <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      <EatingBlock name='Завтрак' needEat={329} meal={meal} />
      <EatingBlock name='Обед' needEat={700} meal={meal}/>
      <EatingBlock name='Ужин' needEat={490} meal={meal}/>
      <EatingBlock name='Перекус' needEat={150} meal={meal}/>
    </MaiWindow>
  );
}