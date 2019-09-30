import * as Yup from 'yup';

const LoginFormValidation = Yup.object().shape({
  userName: Yup.string().required('Campo requerido'),
  userPassword: Yup.string().required('Campo requerido'),
});

const RecoveryFormValidation = Yup.object().shape({
  userName: Yup.string().required('Campo requerido'),
  userEmail: Yup.string()
    .email('Email inválido')
    .required('Campo Requerido'),
});

const RegisterFormValidation = Yup.object().shape({
  name: Yup.string().required('Campo requerido'),
  userName: Yup.string().required('Campo requerido'),
  clientEmail: Yup.string()
    .email('Email inválido')
    .required('Campo Requerido'),
  userPassword: Yup.string().required('Campo requerido'),
  userPasswordConfirm: Yup.string()
    .oneOf([Yup.ref('userPassword')], 'La contraseña de confirmación es distinta')
    .required('Campo requerido'),
});

const PetFormValidation = Yup.object().shape({
  petBirthDay: Yup.string().required('Campor requerido'),
  raceId: Yup.string()
    .nullable()
    .required('Campor requerido'),
  habitadId: Yup.string()
    .nullable()
    .required('Campor requerido'),
  petName: Yup.string().required('Campor requerido'),
  sexId: Yup.string()
    .nullable()
    .required('Campor requerido'),
  petSizeId: Yup.string()
    .nullable()
    .required('Campor requerido'),
  specieId: Yup.string()
    .nullable()
    .required('Campor requerido'),
  petWeight: Yup.string().required('Campor requerido'),
});

const validators = {
  LoginFormValidation,
  RecoveryFormValidation,
  RegisterFormValidation,
  PetFormValidation,
};

export default validators;
