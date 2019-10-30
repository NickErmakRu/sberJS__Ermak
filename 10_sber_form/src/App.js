/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

class App extends React.Component {

  state = {
    isShow: false
  };

  handleToggle = () => {
    const { isShow } = this.state;
    this.setState({ isShow: !isShow });
  };

  render() {

    return (
        <Styles>
          <h1>Заявление на кредит</h1>
          <h2>Автокредит</h2>
          <Form
              onSubmit={onSubmit}
              initialValues={{oldCar: false, bankOffer: false, carModelInfo: false}}
              validate={values => {
                  const errors = {};
                  if (!values.lastName) {
                      errors.lastName = 'Required'
                  }
                  if (!values.firstName) {
                      errors.firstName = 'Required'
                  }
                  if (!values.middleName) {
                      errors.middleName = 'Required'
                  }
                  if (!values.carType) {
                      errors.carType = 'Required'
                  }
                  return errors
              }}

              render={({handleSubmit, form, submitting, pristine, values}) => (
                  <form onSubmit={handleSubmit}>
                    <div className='name-options'>

                      <div>
                        <label>Фамилия</label>
                          <Field name="lastName">
                              {
                                  ({input, meta}) => (
                                      <div>
                                          <input {...input} type="text" placeholder='Фамилия' />
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }
                          </Field>
                      </div>
                      <div>
                        <label>Имя</label>
                          <Field name="firstName">
                              {
                                  ({input, meta}) => (
                                      <div>
                                          <input {...input} type="text" placeholder='Имя' />
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }
                          </Field>
                      </div>
                      <div>
                        <label>Отчество</label>
                          <Field name="middleName">
                              {
                                  ({input, meta}) => (
                                      <div>
                                          <input {...input} type="text" placeholder='Отчество' />
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )
                              }
                          </Field>
                      </div>
                    </div>

                    <div className='car-type'>
                      <h3>Марка автомобиля</h3>
                        <Field name="carType">
                            {
                                ({input, meta}) => (
                                    <div>
                                        <input {...input} type="text" placeholder='например: Skoda' />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )
                            }
                        </Field>
                    </div>

                    <div className='car-model'>
                      <h3>Указать модель</h3>
                      <Field name="carModelInfo"
                             component="input"
                             type="checkbox"
                             onChange={this.handleToggle}
                      />
                    </div>

                      <div className='car-model-info'>
                        <Field
                            className={this.state.isShow ? "show-input" : "hidden"}
                            name="carModel"
                            component="input"
                            type="text"
                            placeholder='например: Rapid'
                        />
                      </div>


                    <h3 className='car-options-title'>Параметры кредита</h3>
                    <div className='car-options'>
                      <div>
                        <label>Срок кредита</label>
                        <Field name="creditTerm" component="select">
                          <option/>
                          <option>1 год</option>
                          <option>2 года</option>
                          <option>3 года</option>
                          <option>4 года</option>
                          <option>5 лет</option>
                        </Field>
                      </div>
                      <div>
                        <label>Стоимость автомобиля</label>
                        <Field
                            name="carCost"
                            component="input"
                            type="text"
                            placeholder='min - 300 000'
                        />
                      </div>
                      <div>
                        <label>Первоначальный взнос</label>
                        <Field
                            name="firstMoney"
                            component="input"
                            type="text"
                            placeholder='min - 20% от стоимости'
                        />
                      </div>
                    </div>


                    <div className='old-car'>
                      <h3>Автомобиль с пробегом</h3>
                      <Field name="oldCar" component="input" type="checkbox"/>
                    </div>


                    <div>
                      <label>Комментарий:</label>
                      <Field name="notes" component="textarea" placeholder="..."/>
                    </div>
                    <div className="buttons">
                      <button type="submit" disabled={submitting || pristine}>
                        Submit
                      </button>
                      <button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                      >
                        Reset
                      </button>
                    </div>
                    {/*<pre>{JSON.stringify(values, 0, 2)}</pre>*/}
                  </form>
              )}
          />
        </Styles>
    )
  }
}

export default App;
