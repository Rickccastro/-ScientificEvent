    import { createContext,useContext,useState,useEffect } from "react";

    import { api } from "../services/api";

    export const AuthContext=createContext({})

    function AuthProvider({children}){
        const[data,setData]=useState({})

        
        async function signIn({email,password}){
            try{
                /**conectando com o back sessions passando email e senha */
                const response=await api.post("/sessions",
                {email, password },
            );
                /**pegando usuario e token da resposta */
                const {user,token}=response.data
                
                /**armazenando no localStorage */
                localStorage.setItem("@scientificevent:user",JSON.stringify(user));
                localStorage.setItem("@scientificevent:token",token);

                api.defaults.headers.common['Authorization']=`Bearer ${token}`;

            
                /**armazenando no estado o usuario */
                setData({user})
            }
            catch(error){
                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert("não foi possivel entrar")
                }
            }
        }

        function signOut(){
            /**retira o token e usuario do localstorage e reseta o setData */
             localStorage.removeItem("@scientificevent:user");
             localStorage.removeItem("@scientificevent:token");

            setData({});
        }

        useEffect(()=>{
            /**recuperando os itens do localStorage que foram previamente armazenados */
                const user = localStorage.getItem("@scientificevent:user");
                const token = localStorage.getItem("@scientificevent:token");

                if(user && token){
                    api.defaults.headers.common['Authorization']=`Bearer ${token}`;

                    /**define os dados recuperados do localStorage no estado do component*/
                    setData({
                        token,
                        user:JSON.parse(user)
                    })
                }

        },[])
        
        return(
            /**define os metodos do contexto */
            <AuthContext.Provider value={
                {signIn,
                signOut,
                user:data.user,
                }}>
            {children}

            </AuthContext.Provider>
        )
    }

    function useAuth(){
    const context= useContext(AuthContext)
    return context
    }

    export {AuthProvider,useAuth}