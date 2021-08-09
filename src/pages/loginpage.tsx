import React, { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
// import {History} from "history";
import { HiLockClosed } from "react-icons/hi";
import { ImSpinner } from "react-icons/im";
import { BiUser } from "react-icons/bi";
import * as yup from "yup";
import {  useFormik} from "formik";
import Inputs from "../components/input/input" 
import Button from "../components/button/button"
import { login } from "../api";
interface Props {}
const Login: FC<Props> = (props ) => {
  const history = useHistory();
  const {
    handleSubmit,
    getFieldProps,
    touched,
    isSubmitting,
    errors,
    // isValid
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup
      .object()
      .required()
      .shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      }),
    onSubmit: (data) => {
     login(data).then(() =>{
       history.push("/dashboard")
      });
    },
  });

  return (
    <div className="h-screen w-1/2">
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
              Log In to <span className="text-purple-600">CORK</span>
            </h2>
            <p className="mt-2 text-center text-sm font-medium text-gray-600">
              New here?
              <Link
                to="/signuppage"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create an account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md -space-y-px relative ">
              <div className="relative mb-8">
                <Inputs
                  id="email"
                  type="email"
                  autoComplete="current-password"
                  required
                  touched={touched.email}
                  error={errors.email}
                  {...getFieldProps("email")}
                  placeholder="Email address"
                />
                <BiUser className="text-purple-500 font-bold absolute top-3 left-2"></BiUser>
              </div>

              <div className="relative ">
                <Inputs
                  id="password"
                  type="password"
                  autoComplete="email"
                  required
                  touched={touched.password}
                  error={errors.password}
                  {...getFieldProps("password")}
                  placeholder="Password"
                />
                <HiLockClosed className="text-purple-500 font-bold absolute top-3 left-2"></HiLockClosed>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <input type="checkbox" />
                <label className="ml-2 ">Show Password</label>
              </div>
              <Button theme="primary">Log in</Button>
            </div>

            <div className="flex justify-center ">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Keep me loged in
              </label>
            </div>
            <div className="flex items-end justify-center ">
              <div className="text-sm">
                <Link
                  to="/forget-passord"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              {isSubmitting && (
                <ImSpinner className="mt-5 animate-spin "></ImSpinner>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default memo(Login);
