// import React from "react";
// import "./Login.css";

// function Login() {
//   return (
//     <div className="login-container">
//       <form>
//         <h1>Login</h1>
//         <div className="input-container">
//           <label htmlFor="email">Phone:</label>
//           <input type="email" name="email" required />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import styled from "styled-components";
import mobile from "./data/mobile-phone.svg";
import { useNavigate } from "react-router-dom";
import Contact from "../Contact";

const Container = styled.div`
  background-color: #1a1a2a;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginCard = styled.div`
  width: 60%;
  height: 20%;
  background-color: #ffffff;
  margin: auto;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  height: 80%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #1a1a2a;
`;

const Wrapper = styled.div`
  height: 80%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrap = styled.div`
  margin-top: 10%;

  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width : 100%;
  border : 0px;
  border-bottom : 1px solid #1A1A2A;
  color : #1A1A2A;
  font-size  : 1.3em;
  background-color : #FAFAFA
  outline : none;
  height : 40px;
  margin-top : 20px;
  &:focus 
  {
    outline : none;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  margin: 40px auto 0px auto;
  background-color: #1a1a2a;
  color: #ffffff;
  border-radius: 5px;
  border: 0px;
  font-size: 1.2em;
  &:hover {
    background-color: #2a2a3a;
    cursor: pointer;
  }
`;

const Text = styled.div`
  font-size: ${(props) => (props.type === "title" ? 3 : props.size)}em;
  font-weight: ${(props) => (props.type === "title" ? 600 : 400)}em;
  text-align: right;
  color: "#1A1A2A";
  cursor: pointer;
`;

const incorrectStyle = {
  borderBottom: "2px solid #FF0000",
};

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [incorrect, setIncorrect] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <LoginCard>
          <Logo>
            <img src={mobile} alt="picture here" />
          </Logo>
          <Wrapper>
            <Text type="title">Login</Text>
            {incorrect ? <Text>Incorect username or password</Text> : null}
            <InputWrap>
              <Input
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                style={incorrect ? incorrectStyle : null}
              />

              <Input
                placeholder="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                style={incorrect ? incorrectStyle : null}
              />
              <br />
              <br />
              <div>
                <input type="checkbox" /> Remember Me
              </div>
              <Button
                onClick={() =>
                  username === "test.abc.com"
                    ? setIncorrect(true)
                    : navigate("/admin-panel")
                }
              >
                Sign In
              </Button>
            </InputWrap>
            <br />
            <br />
            <br />
          </Wrapper>
        </LoginCard>
      </Container>
      <Contact />
    </>
  );
};

export default Login;
