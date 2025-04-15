import { useState } from "react";
import { useLoginMutation } from "../../app/apiSlice";
import s from "./Login.module.scss"

export let Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  let [login] = useLoginMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let a = await login({ password, email }).unwrap();
      localStorage.setItem('token', a.token)
      alert('Вход Выполнен');
    } catch (err) {
      alert('Ошибка Входа');
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  )
};

