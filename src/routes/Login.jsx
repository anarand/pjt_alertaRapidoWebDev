const Login = () => {
  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Senha" className="w-full border p-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Entrar
        </button>
      </form>
    </main>
  );
};

export default Login;
