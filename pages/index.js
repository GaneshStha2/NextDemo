import TextInput from "@/components/Common/TextInput";
import { registerUser } from "@/services/api/user.api";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onRegister = () => {
   // console.log(user);
    registerUser(user)
      .then(() => {})
      .catch(() => {});
  };

  return (
    <>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example1c">
                              Your Name
                            </label>{" "}
                            <TextInput
                              value={user.name}
                              onChange={(e) =>
                                setUser({ ...user, name: e.target.value })
                              }

                            />
                           
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">
                              Your Email
                            </label>{" "}
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={user.email}
                              onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                              }
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4c">
                              Password
                            </label>{" "}
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              value={user.password}
                              onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                              }
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4cd">
                              Repeat your password
                            </label>{" "}
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              value={user.confirmPassword}
                              onChange={(e) =>
                                setUser({
                                  ...user,
                                  confirmPassword: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            //arrow function
                            onClick={onRegister}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// const SelectComponent = ({ options }) => {
//   useEffect(() => {
//     $(".select2").select2();
//     $('.select2').focus();
//   }, []);

//   return (
//     <select
//       className="form-control form-control-lg mb-3 select2"
//       aria-label=".form-control-lg example"
//     >
//       <option selected>Open this select menu</option>
//       {options.map((item, index) => {
//         return <option value={item.value}>{item.name}</option>;
//       })}
//     </select>
//   );
// };
