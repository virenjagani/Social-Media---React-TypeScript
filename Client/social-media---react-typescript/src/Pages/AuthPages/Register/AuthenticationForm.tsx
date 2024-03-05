import { useEffect, useRef, useState } from "react";
import "./AuthenticationForm.style.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../Redux/store";
import { GET_LOGIN_AUTH, GET_SIGNUP_AUTH } from "../../../Redux/Reducers/Slices/authAction";

const initialValueSignUp = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
  city: "",
  province: "",
};

const initialValueSignIn = {
  email: "",
  password: "",
};

const validationSchemaSignUp = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  password: Yup.string().required("Password is required"),
  city: Yup.string().required("City is required"),
  province: Yup.string().required("Province is required"),
});

const validationSchemaSignIn = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function Register() {
  const [inLogin, setInLogin] = useState<boolean>(true);

  const dispatch = useAppDispatch()

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

  useEffect(() => {
    console.log(inLogin, "inLogin");
  }, [inLogin]);

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
          {inLogin && (
            <Formik
              initialValues={initialValueSignIn}
              validationSchema={validationSchemaSignIn}
              onSubmit={(values, { setSubmitting }) => {
                dispatch({type:GET_LOGIN_AUTH,payload:values})
                setSubmitting(false);
              }}
              enableReinitialize
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                //  isSubmitting,
              }) => (
                <form
                  className="login"
                  onSubmit={handleSubmit}
                  ref={signInFormRef}
                >
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Email Address"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  <p style={{ color: "red" }}>
                    {errors.email && touched.email && errors.email}
                  </p>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <p style={{ color: "red" }}>
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>
                  {errors.password && touched.password && (
                    <>
                      <br />
                    </>
                  )}
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
              )}
            </Formik>
          )}
          {!inLogin && (
            <Formik
              initialValues={initialValueSignUp}
              validationSchema={validationSchemaSignUp}
              onSubmit={(values, { setSubmitting }) => {

                dispatch({type:GET_SIGNUP_AUTH,payload:values})

                setSubmitting(false);
              }}
              enableReinitialize
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                //  isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className="signup">
                  <div className="field">
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      placeholder="First Name"
                    />
                    {errors.firstName && touched.firstName && errors.firstName}
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    {errors.lastName && touched.lastName && errors.lastName}
                  </div>
                  <div className="field">
                    <input
                      type="type"
                      placeholder="Email Address"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                    {errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber}
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      placeholder="City"
                      name="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                    {errors.city && touched.city && errors.city}
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Province"
                      name="province"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.province}
                    />
                    {errors.province && touched.province && errors.province}
                  </div>
                  {/* <div className="field">
                      <input type="password" placeholder="Confirm password" />
                    </div> */}
                  <div className="field btn">
                    <div className="btn-layer"> </div>
                    <input type="submit" value="Signup" />
                  </div>
                </form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
