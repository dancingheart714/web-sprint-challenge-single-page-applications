import * as Yup from "yup";

const FormSchema = Yup.object().shape({
 size: Yup
    .string()
    .required("required")
    .oneOf(["Small", "Medium", "Large"]),

 instructions: Yup
    .string()

});

export default FormSchema;
