import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Participantes } from '../pages/Participantes';
import { NotFound } from '../pages/NotFound';
import { Revisores } from '../pages/Revisores';
import { Relatorios } from '../pages/Relatorios';

export function RevisorRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/participantes" element={<Participantes />} />
      <Route path="/revisores" element={<Revisores />} />
      <Route path="/relatorios" element={<Relatorios />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}