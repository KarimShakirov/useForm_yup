import * as yup from "yup";

export const schema = yup.object().shape({
    firstName: yup.string().required('Please enter name!'),
    lastName: yup.string().required('Please enter last name!'),
    email: yup.string().email().required('Please enter your email!'),
    age: yup.number().positive().integer().typeError("Please enter your age!").required(),
    password: yup.string().min(4).max(15).required("Please enter password!"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null])
})