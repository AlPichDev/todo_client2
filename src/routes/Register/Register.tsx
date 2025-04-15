import React, { useState } from "react";
import { useRegisterMutation } from "../../app/apiSlice";

export let Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState('');
    const [email, setEmail] = useState('');
    let [register] = useRegisterMutation()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password === rPassword) {
            try {
                await register({ username, password, email }).unwrap();
                alert('Регистрация успешна!');
            } catch (err) {
                alert('Ошибка регистрации');
                console.log(err);
                
            }
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" required value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
                <input type="email" name="email"  placeholder="email"  required value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <input type="password" name="password"  placeholder="password"  required value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <input type="password" name="retypePassword"  placeholder="retypePassword"  required value={rPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRPassword(e.target.value)} />
                <input type="submit" name="Submit" />
            </form>
        </div>
    )
};

