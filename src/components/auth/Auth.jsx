
import {useState} from 'react';
import {supabase} from '../../lib/supabase';

const Auth = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = async (type) => {
    if ( type === 'login' ) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if ( error ) alert(error.message);
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if ( error ) alert(error.message);
    }
  } 

  return(
    <div className="p-4 max-w-md mx-auto">
      <input
        placeholder="Email"
        className='border p-2 w-full mb-2'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex gap-2">
        <button 
          className="bg-green-600 text-white px-4 py-2" 
          onClick={() => handleLogin('login')}
        >
          Logga in
        </button>
        <button 
          className="bg-blue-600 text-white px-4 py-2"
           onClick={() => handleLogin('signup')}
        >
          Registrera
        </button>
      </div>

    </div>
  );

}
export default Auth;