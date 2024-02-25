import { useRef, useState } from "react";
import "./AuthenticationForm.style.css";

function Register() {
  const [inLogin, setInLogin] = useState<boolean>(true);

  const signInFormRef = useRef<HTMLFormElement | null>(null);
  const signInTextRef = useRef<HTMLDivElement | null>(null);
  const loginButtonRef = useRef<HTMLInputElement | null>(null);

  const handleSignIn = () => {
    if (signInFormRef.current && signInTextRef.current) {
      signInFormRef.current.style.marginLeft = "0%";
      signInTextRef.current.style.marginLeft = "0%";
    }
    setInLogin(true);
  };

  const handleSignup = () => {
    if (signInFormRef.current && signInTextRef.current) {
      signInFormRef.current.style.marginLeft = "-50%";
      signInTextRef.current.style.marginLeft = "-50%";
    }
    if (loginButtonRef.current) {
      loginButtonRef.current.style.left = "50%";
    }
    setInLogin(false);
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="title login" ref={signInTextRef}>
          Login Form
        </div>
        <div className="title signup">Signup Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            className="slide"
            id={inLogin ? "login" : "signup"}
            checked
          />
          <input
            type="radio"
            className="slide"
            id={!inLogin ? "login" : "signup"}
          />
          <label
            htmlFor="login"
            className="slide login"
            onClick={() => handleSignIn()}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className="slide signup"
            onClick={() => handleSignup()}
          >
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form action="#" className="login" ref={signInFormRef}>
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <a href="">Signup now</a>
            </div>
          </form>
          <form action="#" className="signup">
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Confirm password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
