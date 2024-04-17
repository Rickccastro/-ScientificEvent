import { Container, Header, Item } from "./styles";
import { Button } from '../../components/Button';

import {Input} from "../../components/Input"
import { useState, useEffect } from 'react'


import { useNavigate } from "react-router-dom";
import { api } from '../../services/api'


export function Revisores() {
  const [article, setArticle] = useState([])
  const [correction, setCorrection] = useState("");
  const [title, setTitle] = useState("");


  const navigate=useNavigate();

  function handleBack(){
    navigate(-1)
  }

    function addCorrection(){
    api.post("revisor/correction",{title,correction},{withCredentials:true});

    if (!title || !correction) {
     alert("Preencha todos os campos");
     return
    }

      alert("Correção cadastrada com sucesso")
      handleBack();
    }

  useEffect(() => {
    async function getArticle() {
      const response = await api.get("revisor/articles");
        
      // Extrair a lista de artigos da resposta JSON
      const articlesArray = response.data.articles.map(article => ({
        title: article.title,
        description: article.description,
        user_id: article.user_id,
        id: article.id,
        correction: article.correction
      }));
  
      setArticle(articlesArray);
    }
  
    getArticle();
  }, []);


  return (
    <Container>
      <Header>
        <h1>Artigos para correção</h1>

        <nav>
          <Button title="Voltar" onClick={() => navigate('/')} />
        </nav>
      </Header>


      {Array.isArray(article) && article.map((articleItem) => (
        <Item key={articleItem.id}>
          <span>{articleItem.title}:<br></br></span>
          <span>{articleItem.correction}<br></br></span>
          <span>{articleItem.description}</span>
          <Input 
          placeholder="Titulo do Artigo"
          onChange={e => setTitle(e.target.value)}/>
          
          <textarea
          name="" id="" cols="168" rows="10"
          onChange={e => setCorrection(e.target.value)}
        ></textarea>
        <Button title="Salvar" onClick={() => addCorrection(title,correction)}  />            
        </Item>
        ))
      }


    </Container>
  )
}