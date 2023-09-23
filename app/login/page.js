"use client";
import { useRef } from "react";

const Login = () => {
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const apiBase = "https://api-todo.kaungmyatsoe.dev/api/v1";

  const logInHandler = async (e) => {
    e.preventDefault();
    if (refEmail.current.value && refPassword.current.value) {
      const res = await fetch(apiBase + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          key: "YXGfJ5mv51sg2CLNl/hETVWBb6Dw2c1vmj7UOD941v0=",
        },
        body: JSON.stringify({
          email: refEmail.current.value,
          password: refPassword.current.value,
        }),
      });
      const d = await res.json();
      console.log(d);
    } else {
      alert("plz type data");
    }
  };

  const getAllToDos = async () => {
    const res = await fetch(apiBase + "/todo/", {
      method: "GET",
      headers: {
        key: "YXGfJ5mv51sg2CLNl/hETVWBb6Dw2c1vmj7UOD941v0=",
      },
    });
    const todos =await res.json();

    console.log(todos);
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
