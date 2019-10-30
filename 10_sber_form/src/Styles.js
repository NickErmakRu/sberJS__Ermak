import styled, { css } from 'styled-components'

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const btnDefault = css`
  ${btn('#ffffff', '#d5d5d5')} color: #555;
`

const btnPrimary = btn('#4f93ce', '#285f8f')

export default styled.div`
  font-family: sans-serif;

  h1, h2, h3 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }
  
  h3 {
    margin-top: 50px;
  }
  
  .name-options, .car-options {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 20px;
  }
  
  .car-options select, .car-options input {
    width: 300px;
    height: 25px;
    font-size: 18px;
  }
  
  .car-options {
    margin-bottom: 0px;
  }
  
  .car-options-title {
    text-align: start;
    margin-left: 30px;
  }
  
  .name-options input {
    width: 300px;
    height: 25px;
    font-size: 18px;
  }
  
  .car-type input {
    width: 300px;
    height: 25px;
    font-size: 18px;
    margin-left: 0px;
  }
  
  .car-type span {
    margin-left: 10px;
  }
  
  .old-car, .car-model {
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 30px auto 30px 30px;
  }
  
  .old-car h3, .car-model h3 {
    margin: 0 auto;
  }
  
  .car-model {
    width: 200px;
    margin-bottom: 0;
  }
  
  .car-type {
    display: flex;
    flex-direction: column;
  }
  
  .car-type h3 {
    text-align: start;
    margin-left: 25px;
  }
  
  .car-type input {
    width: 500px;
  }
  
  .car-model-info {
    width: 350px;
    margin-left: 10px;
    margin-bottom: 50px;
  }
  
  .car-options-title {
    margin-top: 0px;
  }
  
  .hidden {
    display: none;
  }
    
  .show-input {
    display: block;
  }
  
  span {
    color: red;
    font-weight: bold;
  }
    

  form {
    max-width: 1000px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3%;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        width: 110px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type='checkbox'] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }
    button {
      margin: 0 10px;
      &[type='submit'] {
        ${btnPrimary};
      }
      &[type='button'] {
        ${btnDefault};
      }
    }
    pre {
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
`
