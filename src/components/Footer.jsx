const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* Descrição */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Alerta Rápido</h3>
          <p className="text-sm text-gray-300">
            O Alerta Rápido conecta tecnologia e comunidades para salvar vidas em áreas de risco de enchentes.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Explorar</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Início</a></li>
            <li><a href="/solucao" className="hover:underline">Solução</a></li>
            <li><a href="/suporte" className="hover:underline">Suporte</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/contato" className="hover:underline">Contato</a></li>
            <li><a href="/parcerias" className="hover:underline">Parcerias</a></li>
          </ul>
        </div>

        {/* Botão do app */}
        <div className="flex flex-col items-start sm:items-end justify-between">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow mb-4"
          >
            Clique aqui e baixe o app!
          </a>
          <p className="text-xs text-gray-400 sm:text-right">
            © 2025 Rand Software. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
