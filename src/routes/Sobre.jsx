const Sobre = () => {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Sobre o Alerta Rápido</h1>

      <section className="mb-12 text-gray-700 text-lg space-y-4">
        <p>
          O <strong>Alerta Rápido</strong> nasceu da necessidade urgente de conectar tecnologia e comunidade na prevenção de desastres naturais,
          especialmente as enchentes que afetam milhares de brasileiros todos os anos. Criado por um time apaixonado por inovação e impacto social,
          o aplicativo tem como missão salvar vidas por meio da informação e da preparação.
        </p>
        <p>
          Nossa plataforma combina dados em tempo real de sensores ambientais, inteligência artificial e relatos da própria população para
          enviar alertas personalizados de forma rápida e acessível. Acreditamos que a tecnologia deve estar a serviço das pessoas, principalmente
          daquelas em situação de maior vulnerabilidade.
        </p>
        <p>
          O projeto foi desenvolvido pensando na inclusão digital e no acesso fácil à informação, com uma interface intuitiva, linguagem clara e
          integração com serviços locais de emergência.
        </p>
        <p>
          Mais do que um app, o Alerta Rápido é um compromisso com a segurança, a cidadania e o direito de todos a viverem em um ambiente mais
          seguro e preparado.
        </p>
      </section>

      <section className="bg-gray-100 rounded-xl shadow-inner p-6 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
        <p>
          Ser referência nacional em soluções tecnológicas para gestão de riscos urbanos, promovendo cidades mais resilientes e conectadas com suas comunidades.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Nossos Valores</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Empatia:</strong> Desenvolvemos com foco nas pessoas e em suas realidades.</li>
          <li><strong>Transparência:</strong> Priorizamos dados confiáveis, acessíveis e verificáveis.</li>
          <li><strong>Inovação:</strong> Buscamos constantemente aprimorar nossa tecnologia e abordagem.</li>
          <li><strong>Colaboração:</strong> Acreditamos na força da comunidade e na construção coletiva de soluções.</li>
        </ul>
      </section>
    </main>
  );
};

export default Sobre;
