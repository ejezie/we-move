import { AuthLeft } from "@/components";
import "./AuthBlock.scss";

interface AuthBlockProps {
  Form: JSX.Element;
}

const AuthBlock = ({ Form }: AuthBlockProps) => {
  return (
    <div className="auth center">
      <div className="auth_left">
        <AuthLeft />
      </div>
      <div className="auth_right center">
          <Form />
      </div>
    </div>
  );
};

export default AuthBlock;
