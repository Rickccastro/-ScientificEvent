import { FiUser } from 'react-icons/fi';
import { FaPen } from "react-icons/fa";


import { Container } from "./styles";
import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';
import { MdOutlineLibraryBooks } from "react-icons/md";
import { useAuth } from '../../hooks/auth';
import { USER_VOLUNTEER } from '../../utils/volunteer';


export function Home() {

  const { user } = useAuth();

  

  return (
    <Container>
      <Header />

      <main>
        <Feature title="Participantes" icon={FiUser} to="/participantes" />


        {user.volunteer_reviewer === USER_VOLUNTEER.REVISOR && <Feature title="Revisores" icon={FaPen} to="/revisores" />}
        <Feature title="Relatório dos Artigos" icon={MdOutlineLibraryBooks} to="/relatorios" />

      </main>
    </Container>
  )
}