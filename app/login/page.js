"use client";
import axios from "axios";
import { useRef } from "react";

const Login = () => {
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  //   const apiBase = "https://api-todo.kaungmyatsoe.dev/api/v1";
  const apiBase = "http://localhost:5001/api/v1";
  const key = "YXGfJ5mv51sg2CLNl/hETVWBb6Dw2c1vmj7UOD941v0=";

  const logInHandler = async (e) => {
    e.preventDefault();
    if (refEmail.current.value && refPassword.current.value) {
      const authObj = {
        email: refEmail.current.value,
        password: refPassword.current.value,
      };
      const { data } = await axios({
        url: apiBase + "/auth/login",
        method: "post",
        data: authObj,
        withCredentials: true,
      });
      console.log(data);
    } else {
      alert("plz type data");
    }
  };

  const getAllToDos = async () => {
    const {data} = await axios({
      url: apiBase + "/todo/",
      method: "GET",
      withCredentials: true,
    });

    console.log(data);
  };

  return (
    <>
      <form onSubmit={(e) => logInHandler(e)}>
        <div>
          <input ref={refEmail} type="email" name="email" id="email" />
          <input
            ref={refPassword}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button>Log In</button>
      </form>
      <button onClick={getAllToDos}>Get All Todo</button>
    </>
  );
};

export default Login;
