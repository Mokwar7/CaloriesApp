import styled from 'styled-components/native'

const Meal = styled.View`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
`

const Meal__container = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Meal__name = styled.Text`
    opacity: 0.75;
    font-size: 16px;
    font-weight: 600;
    color: #101010;
`

const Meal__button = styled.Image`
    height: 15px;
    width: 15px;
`

const Meal__about = styled.Text`
    opacity: 0.3;
    font-size: 14px;
    font-weight: 600;
    color: #101010;
`

export default function MealBlock({item, handleDelete}) {
    function handleClickDelete(item) {
        handleDelete(item)
    }
  return (
      <Meal>
        <Meal__container>
            <Meal__name>{item[0]}</Meal__name>
            <Meal__button onTouchEnd={handleClickDelete} source={require('./Vector.png')}/>
        </Meal__container>
        <Meal__container>
            <Meal__about>{item[1]}</Meal__about>
            <Meal__about>{item[2]} ккал</Meal__about>
        </Meal__container>
      </Meal>
  );
}