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
  const mealBreakfas = [["Кофе с молоком и сахаром", "1 чашк.", 25], ["Печенье", "2 шт.", 147], ["Мармелад", "2 шт.", 40]]
  const mealLunch = [["Суп", "1 тар.", 256], ["Чай", "1 чашк.", 51]]
  const mealDinner= [["Кофе", "1 чашк.", 73], ["Сосиски", "1 шт.", 290], ["Макарано", "210 гр.", 0]]
  const mealSnack= []

  function testAdd(name, cals, prot, carb, fat, weight) {
    console.log(name, cals, prot, carb, fat, weight)
  }

  return (
    <MaiWindow>
      <CounterBlock />
      <TextAbout>Подробный рацион всего дня</TextAbout>
      <EatingBlock name='Завтрак' needEat={329} meal={mealBreakfas} />
      <EatingBlock name='Обед' needEat={700} meal={mealLunch}/>
      <EatingBlock name='Ужин' needEat={490} meal={mealDinner}/>
      <EatingBlock name='Перекус' needEat={150} meal={mealSnack}/>
    </MaiWindow>
  );
}