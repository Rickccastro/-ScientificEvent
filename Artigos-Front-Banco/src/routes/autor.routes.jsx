import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Participantes } from '../pages/Participantes';
import { NotFound } from '../pages/NotFound';
import { Relatorios } from '../pages/Relatorios';

export function AutorRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/participantes" element={<Participantes />} />
      <Route path="/relatorios" element={<Relatorios />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}