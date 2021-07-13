import { BrowserRouter, Route, Switch as SwitchRouter } from 'react-router-dom';

import { Home } from "../pages/Home";
import { NewRoom } from "../pages/NewRoom";
import { Room } from '../pages/Room';
import { AdminRoom } from '../pages/AdminRoom';

import { AuthContextProvider } from '../contexts/AuthContext';

export function Routes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <SwitchRouter>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </SwitchRouter>
      </AuthContextProvider>
    </BrowserRouter>
  );
}