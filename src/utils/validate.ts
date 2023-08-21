import * as yup from 'yup';

export const yupSchemaRegForm = yup.object().shape({
  last_name: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(2, 'Минимальное количество символов: 2')
    .max(20, 'Максимальное количество символов: 20')
    .matches(/^[-a-zа-яёA-ZА-ЯЁ]+$/, 'Может содержать только буквы латиницы, кириллицы и тире'),
  first_name: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(1, 'Минимальное количество символов: 1')
    .max(15, 'Максимальное количество символов: 15')
    .matches(/^[-a-zа-яёA-ZА-ЯЁ]+$/, 'Может содержать только буквы латиницы, кириллицы и тире'),
  email: yup
    .string()
    .required('Поле обязательно для заполнения')
    .matches(/^[\w-]+@[a-zA-Z]+\.[a-zA-Z]+$/, 'Введите корректный email'),
  password: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(6, 'Минимальное количество символов: 6')
    .max(10, 'Максимальное количество символов: 10')
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+=[\]{}|;:\\'"<>,.?/-]*$/, 'Может содержать только буквы латиницы, цифры и спецсимволы'),
  password_repeat: yup
    .string()
    .required('Поле обязательно для заполнения')
    .oneOf([yup.ref('password'), ''], 'Пароли не совпадают'),
});

export const yupSchemaAuthForm = yup.object().shape({
  email: yup
    .string()
    .required('Поле обязательно для заполнения')
    .matches(/^[\w-]+@[a-zA-Z]+\.[a-zA-Z]+$/, 'Введите корректный email'),
  password: yup
    .string()
    .required('Поле обязательно для заполнения')
});

export const yupRecoverPasswordForm = yup.object().shape({
  password_old: yup
    .string()
    .required('Поле обязательно для заполнения'),
  password_new: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(6, 'Минимальное количество символов: 6')
    .max(10, 'Максимальное количество символов: 10')
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+=[\]{}|;:\\'"<>,.?/-]*$/, 'Может содержать только буквы латиницы, цифры и спецсимволы'),
});

export const yupSearchForm = yup.object().shape({
  search: yup
    .string()
    .matches(/^[-а-яёА-ЯЁ0-9 ]+$/, 'Может содержать только буквы латиницы, цифры и спецсимволы'),
});
