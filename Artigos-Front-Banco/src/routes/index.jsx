import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes" 

import { USER_VOLUNTEER } from "../utils/volunteer.js"

import { api } from '../services/api.js';

import {RevisorRoutes} from "../routes/revisor.routes"
import { AutorRoutes} from "../routes/autor.routes"
import { useEffect } from 'react';
export function Routes() {

  const {user}=useAuth();

  
  function AcessRoute(){
    switch(user.volunteer_reviewer){
      case USER_VOLUNTEER.REVISOR:
       return  <RevisorRoutes/>

      default: 
       return <AutorRoutes/>
    }
  }
  return (
    <BrowserRouter>

      { user ? <AcessRoute /> : <AuthRoutes />
  
      }
    </BrowserRouter>
  );
}