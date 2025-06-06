import { FaWater, FaCity, FaExclamationTriangle } from "react-icons/fa";

const Home = () => {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700 drop-shadow-md">
        Bem-vindo ao Alerta Rápido
      </h1>
      
      <p className="text-xl leading-relaxed max-w-3xl mx-auto text-center mb-14 text-gray-800">
        O Alerta Rápido é um aplicativo mobile desenvolvido para proteger comunidades que vivem em áreas suscetíveis a enchentes. 
        Com alertas em tempo real baseados em dados de sensores, previsões meteorológicas e relatos da própria população, o app oferece uma interface simples e intuitiva para que todos possam se preparar, evitar riscos e agir com segurança.
      </p>

      {/* Seção: Por que esse app é necessário? */}
      <section className="bg-gradient-to-tr from-blue-50 to-white py-14 px-8 rounded-2xl shadow-lg border border-blue-100">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Por que esse app é necessário?
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <FaWater className="text-6xl text-blue-600 mb-4" />
            <p className="text-5xl font-extrabold text-blue-700">8,2M</p>
            <p className="mt-3 text-gray-700 font-medium">Brasileiros vivendo em áreas de risco de enchentes</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <FaCity className="text-6xl text-blue-600 mb-4" />
            <p className="text-5xl font-extrabold text-blue-700">1.600+</p>
            <p className="mt-3 text-gray-700 font-medium">Municípios com alta probabilidade de enchentes</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <FaExclamationTriangle className="text-6xl text-blue-600 mb-4" />
            <p className="text-5xl font-extrabold text-blue-700">+50%</p>
            <p className="mt-3 text-gray-700 font-medium">Aumento recente na frequência de enchentes</p>
          </div>
        </div>

        <p className="text-center max-w-4xl mx-auto text-lg leading-relaxed text-gray-800">
          Mais de 8,2 milhões de brasileiros vivem em áreas vulneráveis a enchentes, enfrentando riscos crescentes devido à urbanização desordenada e mudanças climáticas. 
          A falta de comunicação rápida e eficiente deixa as comunidades despreparadas para agir em emergências, causando perdas materiais, ameaças à saúde e até vidas. 
          O Alerta Rápido atua para mudar essa realidade, conectando tecnologia, dados e pessoas em tempo real.
        </p>
      </section>

      {/* Chamada para ação */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Quer se proteger? Baixe nosso app!</h3>
        <p className="mb-8 text-gray-700 max-w-xl mx-auto leading-relaxed">
          Receba notificações instantâneas, acesse dicas de segurança e reporte ocorrências na sua região. Junte-se a milhares que já estão prevenidos!
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 px-8 rounded-full shadow-lg">
          Baixar App
        </button>
      </section>
    </main>
  );
};

export default Home;
