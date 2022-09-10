import React, { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../../assets/images/loginImg.png'
import Button from '../../components/UI/button/Button'
import Input from '../../components/UI/input/Input'
import exit from '../../assets/images/exit.png'
import './login.scss'
import { Formik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchLogin } from '../../store/reducers/loginSlice'

export interface IFormLogin {
  email: string
  password: string
}

const LoginPage: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isLoading, isError, isAuth } = useAppSelector(state => state.login)

  useEffect(() => {
    if(isAuth){
      navigate('/linkUp')
   }
  }, [isAuth, navigate])
  
 

  return (
    <div className='login'>
      <div className="login-img">
        <img src={loginImg} alt="loginImg" />
      </div>
      <div className="login-form">
        <div className="login-form-block">
          <h2>Welcome</h2>
          <p>Enter information below for login</p>

          {isLoading && <div className='loading'>Loading...</div>}

          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {} as IFormLogin
              if (!values.email) {
                errors.email = 'Required';

              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }

              if (!values.password) {
                errors.password = 'Required'
              }
              return errors

            }}
            onSubmit={(values: IFormLogin, { setSubmitting }) => {
              dispatch(fetchLogin(values))
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
                <span className='required'>{errors.email && touched.email && errors.email}</span>
                <Input
                  placeholder='Email'
                  type='email'
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                   <span className='required'>{errors.password && touched.password && errors.password}</span>
                <Input
                  placeholder='Password'
                  type='passward'
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Button type='submit' disabled={isSubmitting}>
                  Login
                </Button>
              </form>
            )}
          </Formik>
          {isError && <div className='fetchError'>{isError}</div>}

          <div className="back">
            <Link to='/singUp'> <p>New user?<span>Sing up</span></p></Link>
          </div>
        </div>
        <span className='exit'>
          <Link to='/linkup'><img src={exit} alt="exit" /></Link>
        </span>

      </div>
    </div>
  )
}

export default LoginPage