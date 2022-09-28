import React, { FC } from 'react'
import singUpImg from '../../assets/images/singUpImg.png'
import exit from '../../assets/images/exit.png'
import Button from '../../components/UI/button/Button'
import Input from '../../components/UI/input/Input'
import './singUp.scss'
import { Formik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchSingUp } from '../../store/reducers/singUpSlice'
import { Link } from 'react-router-dom'
import { LINKUP, LOGIN } from '../../links/links'

export interface IFormSingUp {
  firstName: string
  lastName: string
  email: string
  password: string
}

const SingUpPage: FC = () => {
  const dispatch = useAppDispatch()
  const { isLoading, isError, success } = useAppSelector(state => state.singUp)

 
const validate = (values:IFormSingUp) => {
  const errors = {} as IFormSingUp;
  if (!values.email) {
    errors.email = 'Required';

  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors

}

  return (
    <div className='sing-up'>
      <div className="sing-up-img">
        <img src={singUpImg} alt="singUpImg" />
      </div>
      <div className="sing-up-form">
        <div className='form-block'>
          <h2>Sing Up</h2>
          <p>Just a few quick steps to create your account</p>


          {isLoading && <div className='loading'>Loading...</div>}
          <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
            validate={validate}
            onSubmit={(values: IFormSingUp, { setSubmitting }) => {
              dispatch(fetchSingUp(values))
              setSubmitting(false)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-block-item">
                  <div className='input-name'>
                 <div className='required'> {errors.firstName && touched.firstName && errors.firstName}</div>
                  <Input
                    placeholder='First Name'
                    type='text'
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  </div>
                  <div className='input-name'>
                  <div className='required'>{errors.lastName && touched.lastName && errors.lastName}</div>
                  <Input
                    placeholder='Last Name'
                    type='text'
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  </div>
                </div>
                <span className='required'>{errors.email && touched.email && errors.email}</span>
                <Input
                  placeholder='Email addres'
                  type='email'
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className='required'>{errors.password && touched.password && errors.password}</span>
                <Input
                  placeholder='Password'
                  type='password'
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span className='required'>{errors.password && touched.password && errors.password}</span>
                <Input
                  placeholder='Confirm password'
                  type='password'
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {isError && <div className='fetchError'>{isError}</div>}
                {!success ? <Button type='submit' disabled={isSubmitting}>Next</Button>
                  : <Button><Link to={LOGIN}>Next</Link></Button>
                }
              </form>
            )}
          </Formik>

          <div className="back">
            <p>Back to <Link to={LOGIN}><span>login</span></Link> </p>
          </div>
        </div>
        <span className='exit'>
          <Link to={LINKUP}><img src={exit} alt="exit" /></Link>
        </span>
      </div>
    </div>
  )
}

export default SingUpPage