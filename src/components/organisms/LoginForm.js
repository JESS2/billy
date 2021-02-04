import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Button';
import {postLogin} from "../../api/users";
import Input from "../atoms/Input";
import ErrorText from "../atoms/ErrorText";

const StyledForm = styled.div`
  width: 100%;
  align-items: center;
  padding: 50px 40px;
  text-align: center;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  
  input {
    margin: 5px 0;
  }
  
  button {
    margin-top: 30px;
    min-width: 50%;
    text-align: center;
    max-width: 100%;
  }
`;

export default function LoginForm() {
  const history = useHistory();
  const [user, setUser] = useState({email: 'user1@test.com', password: 'billy12!@'});
  const [errorText ,setErrorText] = useState('');

  const onClickSignIn = () => {
    postLogin(user.email, user.password).then(data => {
      if (data) {
        history.push(`/list`);
      } else {
        setErrorText('아이디 또는 비밀번호를 확인해 주세요.');
      }
    });
  }

  const onChangeInput = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  return <>
    <StyledForm>
      <label htmlFor="user-id" />
      <Input id="user-id" type="text" name="email" placeholder="Email ID" value={user.email} onChange={onChangeInput}/>
      <label htmlFor="user-pw" />
      <Input id="user-pw" type="password" name="password" placeholder="Password" value={user.password} onChange={onChangeInput}/>
      <ErrorText>{errorText}</ErrorText>
      <Button onClick={onClickSignIn}>
        SIGN IN
      </Button>
    </StyledForm>
  </>;
}