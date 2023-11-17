import styled from 'styled-components/native'

const ContainerAddingFood = styled.ScrollView`
  width: 100%;
  min-height: 100%;
`

const AddingFood = styled.View`
  width: 100%;
  min-height: 100%;
  background-color: #F1F1F1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`

const TextAbout = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  margin: 75px 0 5px;
`

const Input = styled.TextInput`
  background-color: #fff;
  padding: 10px;
  width: 380px;
  border-radius: 10px;
  max-width: 95%;
`

const NameInput = styled.Text`
  color: #5f70fe;
  font-size: 16px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 5px;
  text-align: left;
  width: 380px;
  max-width: 95%;
`

const Button = styled.View`
  padding: 12px 42px;
  background-color: #5f70fe;
  border-radius: 15px;
  margin-top: 35px;
  font-weight: 700;
`

const ButtonText = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: 700;
`


export default function AddFood() {
  return (
    <ContainerAddingFood>
      <AddingFood>
        <TextAbout>Добавить продукт</TextAbout>
        <NameInput>Название</NameInput>
        <Input placeholder="Пюрешка" keyboardType="text" />
        <NameInput>Кол-во калорий на 100г.</NameInput>
        <Input placeholder="500 ккал" keyboardType="numeric" />
        <NameInput>Кол-во белков на 100г.</NameInput>
        <Input placeholder="25 г." keyboardType="numeric" />
        <NameInput>Кол-во углеводов на 100г.</NameInput>
        <Input placeholder="11 г." keyboardType="numeric" />
        <NameInput>Кол-во жиров на 100г.</NameInput>
        <Input placeholder="29 г." keyboardType="numeric" />
        <NameInput>Общий вес</NameInput>
        <Input placeholder="170 г." keyboardType="numeric" />
        <Button>
          <ButtonText>Добавить продукт</ButtonText>
        </Button>
      </AddingFood>
    </ContainerAddingFood>
  );
}