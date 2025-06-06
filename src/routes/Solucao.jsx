import proto1 from '../assets/proto1.png';
import proto2 from '../assets/proto2.png';
import proto3 from '../assets/proto3.png';
import proto4 from '../assets/proto4.png';
import proto5 from '../assets/proto5.png';
import proto6 from '../assets/proto6.png';

const Solucao = () => {
  const imagens = [proto1, proto2, proto3, proto4, proto5, proto6];

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Conheça nosso APP</h1>
      <p className="text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
        Veja como funciona a navegação no aplicativo e como ele pode ajudar em situações de emergência por enchentes.
      </p>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {imagens.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Protótipo ${index + 1}`}
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </section>
    </main>
  );
};

export default Solucao;
