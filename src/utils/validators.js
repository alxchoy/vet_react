import * as Yup from 'yup';

const LoginFormValidation = Yup.object().shape({
  userName: Yup.string().required('Campo requerido'),
  userPassword: Yup.string().required('Campo requerido'),
});

const validators = {
  LoginFormValidation,
};

export default validators;
