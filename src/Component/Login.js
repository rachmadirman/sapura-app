import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FooterSmall from "./FooterSmall";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)

  const [storedValue, setStoredValue] = useState(
    localStorage.getItem('storedValue') || ''
  );



  // useEffect(() => {
  //     userRef.current.focus
  // }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pass])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call fetch all API
      setLoading(true)
      const res = await axios.post("http://localhost:8081/demo/v1/sapura/login", JSON.stringify({ username: user, password: pass }), {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("response Login: ", JSON.stringify(res.data));
      console.log("User Login: " + user)
      setStoredValue(user)
      localStorage.setItem('storedValue', user)
      console.log("role: " + storedValue)

      setSuccess(true)
      setLoading(false)


    } catch (error) {
      setSuccess(false)
      setLoading(false)
    }

  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {success ? (
        navigate("/Home")
      ) : (
        <main>
          <section className="absolute w-screen h-screen">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div
              className="absolute top-0 w-full h-full bg-izeno-gradien-1"
              style={{
                //   backgroundImage:
                //     "url(" + require("assets/img/register_bg_2.png").default + ")",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
              }}
            ></div>
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white-300 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-1">
                        <img className="w-44 mx-auto" src={"LHDN-01.png"} alt="lhdn logo" />
                        <h6 className="text-izeno-black text-lg font-bold">
                          Tenant : iZeno
                        </h6>
                      </div>
                      <hr className="mt-3 border-b-1 border-gray-400" />
                      <div className="text-center mb-0 mt-2">
                        <h6 className="text-izeno-black text-sm font-bold">
                          Please input your credentials
                        </h6>
                      </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-3 pt-0">
                      <div className="text-gray-500 text-center mb-3 font-bold">
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="relative w-full mb-3">

                          <label
                            className="block uppercase text-izeno-black text-xs font-bold mb-2"
                            htmlFor="username"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Username"
                            style={{ transition: "all .15s ease" }}
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-izeno-black text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Password"
                            style={{ transition: "all .15s ease" }}
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}
                          />
                        </div>
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              id="customCheckLogin"
                              type="checkbox"
                              className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                              style={{ transition: "all .15s ease" }}
                            />
                            <span className="ml-2 text-sm font-semibold text-izeno-black">
                              Remember me
                            </span>
                          </label>
                        </div>

                        <div className="text-center mt-6">
                          <button
                            className="bg-izeno-main text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="submit"
                            style={{ transition: "all .15s ease" }}
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer>
              <FooterSmall absolute/>
            </footer>

          </section>
        </main>
      )}
    </>
  )
}

export default Login;