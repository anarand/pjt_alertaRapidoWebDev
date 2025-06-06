const Login = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Entrar no Alerta Rápido</h1>
        
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="seuemail@exemplo.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Ainda não tem uma conta?{' '}
          <a href="/cadastro" className="text-indigo-600 hover:underline font-semibold">
            Cadastre-se aqui
          </a>
        </p>
      </div>
    </main>
  );
};

export default Login;
