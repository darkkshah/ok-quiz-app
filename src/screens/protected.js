import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fbAuth } from '../config/firebasemethod';
import ABLoader from '../components/loader/Loader';

export default function Protected(props) {
  const { Screen, setUser } = props;
  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  const checkAuth = () => {
    setLoader(true);
    fbAuth()
      .then((res) => {
        setLoader(false);
        if (setUser) {
          setUser({ email: res.email, uid: res.uid });
        }
      })
      .catch((err) => {
        setLoader(false);
        navigate('/login');
      });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return loader ? <><ABLoader /></> : <Screen />;
}
