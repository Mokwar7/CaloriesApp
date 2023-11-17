import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native'

const Counter = styled.View`
  width: 380px;
  max-width: 95%;
  border-radius: 30px;
  background: rgba(95, 112, 254, 0.70);
  margin: 60px auto 0;
  display: flex;
  padding: 25px 20px;
`

const Counter__names = styled.View`
  width: 100%;
  height: 35px;
  margin: 0 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Counter__name = styled.Text`
  font-size: 30px;
  font-weight: 600;
`

const Counter__cals = styled.View`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Counter__cals_text = styled.Text`
  font-size: 55px;
  font-weight: 600;
`

const Counter__span = styled.View`
  width: 100%;
  height: 10px;
  background-color: #10101099;
  margin: 15px auto 5px;
  border-radius: 10px;
`

const Counter__span_after = styled.View`
  height: 10px;
  width: 100px;
  border-radius: 10px;
  background-color: #fff;
`

const Counter__text = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  color: #101010;
  opacity: 0.6;
`

let needCals = 1996
let eatedCals = 2800
if (eatedCals > needCals) {
  needCals = eatedCals
}
let leftCals = needCals - eatedCals
let spanReady = eatedCals <= needCals ? 100 * (eatedCals / needCals) + '%' : '100%'

export default function CounterBlock() {
  const nav = useNavigation()
  function onClickBtn() {
    nav.navigate('Home')
}
  return (
      <Counter onTouchEnd={onClickBtn}>
        <Counter__names>
          <Counter__name style={{color: '#fff'}}>Съедено</Counter__name>
          <Counter__name style={{color: '#101010', opacity: 0.6}}>Осталось</Counter__name>
        </Counter__names>
        <Counter__cals>
          <Counter__cals_text style={{color: '#fff'}}>{eatedCals}<Text style={{fontSize: 25}}> ккал</Text></Counter__cals_text>
          <Counter__cals_text style={{color: '#101010', opacity: 0.6}}>{leftCals}</Counter__cals_text>
        </Counter__cals>
        <Counter__span><Counter__span_after style={{width: spanReady}}/></Counter__span>
        <Counter__text>Цель каллорий: {needCals}</Counter__text>
      </Counter>
  );
}