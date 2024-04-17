import { Button } from '../../components/Button';

import { Container,Item,Header} from "./styles";
import { useEffect ,useState} from "react";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

export function Relatorios() {
  const navigate=useNavigate()
  const [article, setArticle] = useState({})

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchArticle() {
      const response = await api.get(`/article/showArticleCorrection`)

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

    fetchArticle()
  }, []);

  return (
    <Container>
      <Header>
        <h1>Relatorio de Artigos</h1>
        <nav>
          <Button title="Voltar" onClick={() => handleBack()} />
        </nav>
      </Header>

      {Array.isArray(article) && article.map((articleItem) => (
        <Item key={articleItem.id}>
          <span>{articleItem.title}</span>
          <span>{articleItem.description}</span>
          <span>Correção: {articleItem.correction}</span>
        </Item>
        ))
      }
    </Container>

  )
}