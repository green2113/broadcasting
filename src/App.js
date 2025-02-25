import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/error/404';
import Home from './pages/form/main';
import AdminPage from './pages/form/admin';
import { supabase } from './supabase';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('broadcasting').select()

      if (todos.length > 0) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <main className='flex-grow p-4'>
          <Routes>
            <Route path="/form/1" element={<Home />} />
            <Route path="/form/adminpage" element={<AdminPage data={todos}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
