import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from '@/pages/root.tsx';
import Error from '@/pages/error.tsx';
import Result, { loader as resultLoader } from '@/components/Reslut/index.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: ':year/:city/:district',
        element: <Result />,
        loader: resultLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
