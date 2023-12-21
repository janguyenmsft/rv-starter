import { createContext, useState } from 'react';
import { FluentProvider, webLightTheme, webDarkTheme } from "@fluentui/react-components";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Home } from './pages/Home';

// Tenant ID 72f988bf-86f1-41af-91ab-2d7cd011db47
// AAD AppId c01dffb7-2d14-4fa0-affa-9b5edf3f6e49

const router = createBrowserRouter([
  { path: "/", element: <Home />, },
]);

export interface IAppContext {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  username: string;
  setUsername: (value: string) => void;
}

export const AppContext = createContext<IAppContext>(null);

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [username, setUsername] = useState('');

  const appContext: IAppContext = {
    isDark,
    setIsDark,
    username,
    setUsername
  };

  return (
    <AppContext.Provider value={appContext}>
      <FluentProvider className='h-full' theme={isDark ? webDarkTheme : webLightTheme}>
        <main className={'min-h-screen font-sans h-full flex flex-col' + (isDark ? ' dark' : '')}>
          <RouterProvider router={router} />
        </main>
      </FluentProvider>
    </AppContext.Provider>
  );
}
