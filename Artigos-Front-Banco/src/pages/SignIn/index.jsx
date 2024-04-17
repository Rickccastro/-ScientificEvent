import { useState } from "react";
import { FiMail, FiLock, FiUserPlus } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignIn() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} =useAuth()

    function handleSignIn(){
        signIn({email,password})
    }

  return (
    <Container>
      <Form>
        <h1>Login para o evento</h1>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Entrar" onClick={handleSignIn}
        />

        <Link to="/register">
          <FiUserPlus />
          Iniciar inscrição
        </Link>
      </Form>
    </Container>
  )
}