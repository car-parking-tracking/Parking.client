import * as yup from 'yup'

export const yupSchemaRegForm = yup.object().shape({
  last_name: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(2, 'Минимальное количество символов: 2')
    .max(20, 'Максимальное количество символов: 20')
    .matches(/^[-a-zа-яёA-ZА-ЯЁ]+$/, 'Используйте буквы русского или английского алфавита'),
  first_name: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(1, 'Минимальное количество символов: 1')
    .max(15, 'Максимальное количество символов: 15')
    .matches(/^[-a-zа-яёA-ZА-ЯЁ]+$/, 'Используйте буквы русского или английского алфавита'),
  email: yup
    .string()
    .required('Поле обязательно для заполнения')
    .matches(/^[\w-]+@[a-zA-Z]+\.[a-zA-Z]+$/, 'Некорректный формат почты'),
  password: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(8, 'Минимальное количество символов: 8')
    .max(32, 'Максимальное количество символов: 32')
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+=[\]{}|;:\\'"<>,.?/-]*$/, 'Пароль от 8 символов, без пробелов'),
  password_repeat: yup
    .string()
    .required('Поле обязательно для заполнения')
    .oneOf([yup.ref('password'), ''], 'Пароли не совпадают'),
  checkbox: yup.bool().oneOf([true], 'Необходимо принять условия').required(),
})

export const yupSchemaAuthForm = yup.object().shape({
  email: yup
    .string()
    .required('Поле обязательно для заполнения')
    .matches(/^[\w-]+@[a-zA-Z]+\.[a-zA-Z]+$/, 'Некорректный формат почты'),
  password: yup.string().required('Поле обязательно для заполнения'),
})

export const yupSchemaResetForm = yup.object().shape({
  email: yup
    .string()
    .required('Поле обязательно для заполнения')
    .matches(/^[\w-]+@[a-zA-Z]+\.[a-zA-Z]+$/, 'Некорректный формат почты'),
})

export const yupRecoverPasswordForm = yup.object().shape({
  password_old: yup.string().required('Поле обязательно для заполнения'),
  password_new: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(8, 'Минимальное количество символов: 8')
    .max(32, 'Максимальное количество символов: 32')
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+=[\]{}|;:\\'"<>,.?/-]*$/, 'Пароль от 8 символов, без пробелов'),
  password_repeat: yup
    .string()
    .required('Поле обязательно для заполнения')
    .oneOf([yup.ref('password_new'), ''], 'Пароли не совпадают'),
})

export const yupUpdatePasswordForm = yup.object().shape({
  password_new: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(8, 'Минимальное количество символов: 8')
    .max(32, 'Максимальное количество символов: 32')
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+=[\]{}|;:\\'"<>,.?/-]*$/, 'Пароль от 8 символов, без пробелов'),
  password_repeat: yup
    .string()
    .required('Поле обязательно для заполнения')
    .oneOf([yup.ref('password_new'), ''], 'Пароли не совпадают'),
})

export const yupProfileForm = yup.object().shape({
  last_name: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(2, 'Минимальное количество символов: 2')
    .max(20, 'Максимальное количество символов: 20')
    .matches(/^[-a-zа-яёA-ZА-ЯЁ]+$/, 'Используйте буквы русского или английского алфавита'),
  first_name: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(1, 'Минимальное количество символов: 1')
    .max(15, 'Максимальное количество символов: 15')
    .matches(/^[-a-zа-яёA-ZА-ЯЁ]+$/, 'Используйте буквы русского или английского алфавита'),
  email: yup
    .string()
    .required('Поле обязательно для заполнения')
    .matches(/^[\w-]+@[a-zA-Z]+\.[a-zA-Z]+$/, 'Некорректный формат почты'),
})

export const yupSearchForm = yup.object().shape({
  search: yup.string().matches(/^[-а-яёА-ЯЁ0-9,.№/ ]+$/, 'Может содержать только буквы кириллицы, цифры и спецсимволы'),
})
