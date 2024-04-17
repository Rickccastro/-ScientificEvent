import { FiUser, FiLogOut } from 'react-icons/fi';

import { Container, User } from './styles';
import { useNavigate } from "react-router-dom";

import {useAuth} from "../../hooks/auth"

export function Header() {

    const {signOut,user}=useAuth();
    const navigate=useNavigate();

    function handleSignOut(){
        navigate("/");
        signOut();
}
    
    return (
        <Container>
            <h1>Menu</h1>

            <aside>
                <User>
                    <span>Olá, <strong>{user.name}</strong></span>
                    <small>
                        <FiUser /> Perfil:{user.volunteer_reviewer}
                    </small>
                </User>
            </aside>

            <button type="button" onClick={handleSignOut}>
                <FiLogOut size={24} />
            </button>
        </Container>
    );
};