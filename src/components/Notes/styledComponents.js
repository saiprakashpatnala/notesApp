// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  min-height: 100vh;
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-size: 35px;
  font-family: 'Bree Serif';
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 40px;
  padding: 20px;
  width: 60%;
  height: 200px;
  box-shadow: 5px 6px 7px 6px #aab8c8;
  border-radius: 4px;
`

export const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 5px;
  margin-top: 7px;
  margin-bottom: 7px;
`

export const Text = styled.textarea`
  border: none;
  outline: none;
  padding-left: 5px;
  margin-top: 7px;
  margin-bottom: 7px;
`

export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  align-self: flex-end;
  padding-top: 7px;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 7px;
  border-radius: 4px;
  border: none;
  outline: none;
  margin-top: 25px;
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  justify-content: flex-end;
`

export const SubHeader = styled.h1`
  color: #475569;
  font-size: 25px;
  font-family: 'Roboto';
`

export const Description = styled.p`
  color: #334155;
  font-size: 15px;
  font-family: 'Roboto';
`
export const Img = styled.img`
  height: 125px;
  width: 125px;
  color: #aab8c8;
`

export const NotesListElement = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  list-style-type: none;
  flex-wrap: wrap;
  margin-top: 30px;
  padding-left: 0px;
`

export default Container
