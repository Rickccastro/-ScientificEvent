import { Container, Header, Item } from "./styles";
import { Button } from '../../components/Button';
import { useState } from 'react';
import { Input } from "../../components/Input";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import { api } from '../../services/api';

export function Participantes() {

  const [article, setArticle] = useState({})
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleBack() {
    navigate(-1)
  }


  function handleCreateArticle() {
    if (!title || !description) {
      return alert("Preencha os campos do artigo")

    }

    api.post("/article", { title, description })
    alert("Artigo cadastrado com sucesso")
    handleBack();

  }

  useEffect(() => {
    async function fetchArticle() {
      const response = await api.get(`/article/allMyArticle`)

     // Extrair a lista de artigos da resposta JSON
     const articlesArray = response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      user_id: article.user_id,
      id: article.id
    }));

    setArticle(articlesArray);
    }

    fetchArticle()
  }, []);


  return (
    <Container>
      <Header>
        <h1>Criação de Artigos</h1>

        <nav>
          <Button title="Voltar" onClick={() => handleBack()} />
        </nav>
      </Header>


      <form action="">

        <Input
          placeholder="Título"
          onChange={e => setTitle(e.target.value)} />

        <textarea
          name="" id="" cols="30" rows="10"
          onChange={e => setDescription(e.target.value)}
        ></textarea>

        <Button
          title="Salvar" onClick={handleCreateArticle}
        />
      </form>

      {Array.isArray(article) && article.map((articleItem) => (
        <Item key={articleItem.id}>
          <span>{articleItem.title}</span>
          <span>{articleItem.description}</span>
        </Item>
        ))
      }

    </Container>
  )
}