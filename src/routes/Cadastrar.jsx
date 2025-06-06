const Cadastrar = () => {
  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cadastrar</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Nome" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Senha" className="w-full border p-2 rounded" />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Criar Conta
        </button>
      </form>
    </main>
  );
};

export default Cadastrar;
