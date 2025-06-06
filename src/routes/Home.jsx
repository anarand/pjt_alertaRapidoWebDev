const Home = () => {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Bem-vindo ao Alerta Rápido</h1>
      <p className="text-xl text-center mb-12 text-gray-700">
        É um aplicativo mobile criado para proteger a população de áreas com risco de alagamento. Ele envia alertas em tempo real sobre enchentes, usando dados de sensores, previsão do tempo e relatos da própria comunidade. Com uma interface simples e acessível, o app ajuda moradores a se prepararem com antecedência, evitarem áreas perigosas e agirem com segurança.
      </p>

      {/* Seção: Por que esse app é necessário? */}
      <section className="bg-gray-100 py-12 px-6 rounded-xl shadow-inner">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
          Por que esse app é necessário?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-blue-600">8,2M</p>
            <p className="text-gray-600 mt-2">Brasileiros vivendo em áreas de risco de enchentes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-blue-600">1.600+</p>
            <p className="text-gray-600 mt-2">Municípios com alta probabilidade de enchentes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-blue-600">+50%</p>
            <p className="text-gray-600 mt-2">Aumento recente na frequência de enchentes</p>
          </div>
        </div>

        <p className="text-center text-gray-700 max-w-4xl mx-auto text-lg">
          Mais de 8,2 milhões de brasileiros vivem em áreas de risco de enchentes, e muitos municípios enfrentam alta probabilidade de alagamentos.
          A falta de comunicação rápida e eficaz deixa moradores vulneráveis, sem tempo para evacuação, causando perdas materiais e danos à segurança e à saúde.
        </p>
      </section>
    </main>
  );
};

export default Home;
