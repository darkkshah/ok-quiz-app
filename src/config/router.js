import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Protected from '../screens/protected';
import AdminPanel from '../screens/adminPanel';
import QuizApp from '../screens/quizapp';
import { useState } from 'react';

export default function AppRouter() {
  const [user, setUser] = useState({ email: '', uid: '' });
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Protected setUser={setUser} Screen={user.email === "shahmeerkhan@gmail.com" ? AdminPanel : QuizApp} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}
