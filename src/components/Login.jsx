import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", email, password);
  };

  return (
    <div className="ml-3">
      <h6 className='text-center bg-danger'>Usuario para proveedores</h6>
      <div>
      <form onSubmit={handleLogin}  className='d-flex'>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='bg-dark text-center text-light rounded-circle'>Ingresar</button>
      </form>
      </div>
    </div>
  );
}

export default Login;