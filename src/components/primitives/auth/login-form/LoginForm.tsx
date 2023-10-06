import Input from "@/components/widgets/Input/Input";
import Button from "@/components/widgets/button/Button";
import { Form, Field } from "react-final-form";

const LoginForm = () => {
  const onSubmit = (values: { [key in string]: string | number }) => {
    console.log(values);
  };
  return (
    <div className="login_form">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="login_form_wrap">
            <div>
              <Field name="email" component={Input} />
            </div>
            <div>
              <Field name="password" component={Input} />
            </div>
            <Button text="Submit" type="submit" />
          </form>
        )}
      />
    </div>
  );
};

export default LoginForm;
