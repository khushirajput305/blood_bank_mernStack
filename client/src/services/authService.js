import { userLogin } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("please provide all fields");
    }
    store.dispatch(userLogin({ role,email, password }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    console.log(
      "register",
      e,
      name,
      role,
      email,
      password,
      organisationName,
      hospitalName,
      website,
      address,
      phone
    );
  } catch (error) {
    console.log(error);
  }
};
