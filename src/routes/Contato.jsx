const Contato = () => {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Fale Conosco</h1>
      <p className="mb-6">
        Tem dúvidas, sugestões ou encontrou um problema? Envie uma mensagem para nossa equipe!
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full border rounded p-2 mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="seuemail@exemplo.com"
            className="w-full border rounded p-2 mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Mensagem</label>
          <textarea
            placeholder="Digite sua mensagem aqui..."
            className="w-full border rounded p-2 mt-1 h-32 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          Enviar
        </button>
      </form>
    </main>
  );
};

export default Contato;
