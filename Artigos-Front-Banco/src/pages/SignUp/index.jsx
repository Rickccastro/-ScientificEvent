import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineMapsHomeWork,MdOutlineWork } from "react-icons/md";
import { RiCellphoneFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";


import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react';

import { api } from '../../services/api';


import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const [address,setAddress] =useState("");
    const [phone,setPhone] =useState("");
    const [employment_location,setEmploymentLocation] =useState("");
    const [card_number,setCardNumber] =useState("");
    const [card_expiry_date,setCardExpiry] =useState("");
    const [card_brand,setCardBrand] =useState("");
    const [volunteer_reviewer,setVolunteerReviewer] =useState("");  

    
    const navigate= useNavigate();

     function handleSingUp(){

        if(!name|| !email || !password || !address|| !phone || !employment_location || !card_number || !card_expiry_date || !card_brand || !volunteer_reviewer){

         return alert("Preencha todos os campos")
        }

        api.post("/users", { name,email,password,address,phone,employment_location,card_number,card_expiry_date,card_brand,volunteer_reviewer} )
        .then(() => {
            alert("Usuario cadastrado com sucesso")
            navigate(-1)
        })
        .catch(error=>{
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel Cadastrar")
            }
        })
    }
 
  return (
    <Container>
      <Form>
        <h1>Cadastro</h1>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="endereço"
          type="text"
          icon={MdOutlineMapsHomeWork}
          onChange={e => setAddress(e.target.value)}
        />

        <Input
          placeholder="telefone"
          type="text"
          icon={RiCellphoneFill}
          onChange={e => setPhone(e.target.value)}

        />
        <Input
          placeholder="local de emprego"
          type="text"
          icon={MdOutlineWork}
          onChange={e => setEmploymentLocation(e.target.value)}

        />
         <Input
          placeholder="Número do cartão"
          type="text"
          icon={FaAddressCard}
          onChange={e => setCardNumber(e.target.value)}

        />

        <Input
          placeholder="Data de vencimento do cartão"
          type="text"
          icon={FaAddressCard}
          onChange={e => setCardExpiry(e.target.value)}

        />

        <Input
          placeholder="Marca do cartão"
          type="text"
          icon={FaAddressCard}
          onChange={e => setCardBrand(e.target.value)}

        />
        <Input
          placeholder="Voluntarios: Autor ou Revisor"
          type="text"
          icon={FaPen}
          onChange={e => setVolunteerReviewer(e.target.value)}

        />  
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
          title="Cadastrar" onClick={handleSingUp}
        />

        <Link to="/">
          <FiArrowLeft />
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}