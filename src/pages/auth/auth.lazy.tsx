import {lazy} from "react";

const AuthLazy= lazy(()=> import("./comb-login-signup"));

export default AuthLazy;