import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";


const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
    {error && <span>{ alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner1">
<<<<<<< HEAD
            <img src="/assets/images/blood-Donation.jpg" alt="loginImage" />
=======
            <img src="/assets/images/Blood-Donation.jpg" alt="loginImage" />
>>>>>>> 682949145f427f3a45c98a3857f6fd678cb1f7bf
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
