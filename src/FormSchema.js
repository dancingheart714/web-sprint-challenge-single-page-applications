import * as Yup from "yup";

const FormSchema = Yup.object().shape({
 size: Yup
    .string()
    .required("required")
    .oneOf(["Small", "Medium", "Large"]),

sauce: Yup
    .string()
    .oneOf(["Original Red", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"]),

 instructions: Yup
    .string()

});

export default FormSchema;
