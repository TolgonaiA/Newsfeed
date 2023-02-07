import React from 'react';
import {useAuthor} from "./hooks/author";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Messages from "./containers/Messages";
import Header from "./containers/Header";

const App = () => {
  const {loading, error} = useAuthor();

  return (
    <div className='bg-emerald-300'>
      {loading && <Loader/>}
      {error && <Error error={error}/> }
      <Header/>
      <Messages/>
    </div>
  );
}

export default App;
