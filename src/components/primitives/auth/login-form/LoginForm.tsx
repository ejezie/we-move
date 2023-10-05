import Input from "@/components/widgets/Input/Input";
import { Form, Field } from "react-final-form";

const LoginForm = () => {
  const onSubmit = (values: { [key in string]: string | number }) => {
    console.log(values);
  };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="" component={Input}/>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default LoginForm;
