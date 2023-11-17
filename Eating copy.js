import { Text, Button } from 'react-native';
import styled from 'styled-components/native'
import MealBlock from './Meal';
import { useEffect, useState } from 'react';

const Eating = styled.View`
    width: 380px;
    max-width: 95%;
    border-radius: 30px;
    background-color: #fff;
    padding: 25px 20px;
    margin: 0 auto 20px;
`

const Eating__info = styled.View`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

const Eating__name = styled.Text`
    color: #5F70FE;
    font-size: 30px;
    font-weight: 600;
    line-height: 50px;
`

const Eating__count = styled.Text`
    color: #1010104D;
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
`

const Eating__container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -8px;
    margin-top: 15px;
`

const Eating__img = styled.Image`
    width: 45px;
    height: 45px;
`

const Eating__btn = styled.View`
    font-size: 12px;
    font-weight: 600;
    border-radius: 11px;
    width: 190px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: #5F70FE33;
    padding: 6px 0;
`

const Eating__plus = styled.Image`
    width: 12px;
    height: 12px;
    margin-top: 2px;
`

const Eating__text = styled.Text`
    color: #5F70FE;
    font-size: 16px;
    font-weight: 600;
`

const TextAbout = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.3;
  margin: 16px 0;
`

const eated = 70

export default function EatingBlock({name, needEat, meal}) {
    const [ state, setState ] = useState([]);

    useEffect(() => {
        setState(meal)
    }, [])

    function onClickBtn() {
        const newEl = ["dasksd", "1 стак.", 100]
        setState([...state, newEl])
    }

    function handleDelete(card) {
        setState(state => state.filter((c) => c[0] !== card[0]));
    }

  return (
      <Eating>
        <Eating__info>
            <Eating__name>{name}</Eating__name>
            <Eating__count><Text style={{color: '#5F70FE'}}>{eated}</Text> / {needEat}</Eating__count>
        </Eating__info>
        {   
            meal.length > 0
            ? meal.map(item => (
                <MealBlock key={item[0]} item={item} handleDelete={handleDelete}/>
            ))
            : <TextAbout>Вы пока ничего не добавили в {name}</TextAbout>

        }
        <Eating__container>
            <Eating__img source={require('./breakfast.png')}/>
            <Eating__btn onTouchEnd={onClickBtn}>
                <Eating__plus source={require('./plus.png')}/>
                <Eating__text>Добавить продукты</Eating__text>
            </Eating__btn>
        </Eating__container>
      </Eating>
  );
}