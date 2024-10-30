import  Navbar  from './component/Navbar';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />

    <div className="bg-gray-100 min-h-screen my-24">
      {/* Encabezado */}
      <header className="bg-brandPrimary text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Prostate Growth</h1>
          <p className="text-lg mt-2">Advanced treatment for prostate enlargement.</p>
        </div>
      </header>

      {/* Sección de Introducción */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is HoLEP Surgery?</h2>
        <p className="text-lg text-gray-700">
        HoLEP is the latest and most advanced minimally invasive treatment available to treat benign prostate enlargement (Prostatic Hyperplasia) and it is already performed in Puebla! HoLEP stands for Holmium Laser Enucleation of the Prostate (Holmium Laser Enucleation of the Prostate). This is an avant-garde technique that offers multiple benefits to our patients, being a laser superior to those previously known for its cutting and coagulation capacity.
        </p>
      </section>

      {/* Sección de Beneficios */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">HoLEP Surgery</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Prostate lesion</li>
            <li>No bleeding</li>
            <li>Ambulatory surgery (you go home the same day)</li>
            
          </ul>
        </div>
      </section>

      {/* Sección de Procedimiento */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is the procedure like?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore esse in reiciendis autem distinctio, provident reprehenderit deleniti aliquid? Voluptatum velit aliquid cum quis iste autem non asperiores eius ipsam.
        </p>
        <img src="/images/procedimiento-holep.jpg" alt="HoLEP procedure" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </section>

      {/* Sección de Testimonios */}
      <section className="bg-white py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Patient Testimonials</h2>
    <div className="space-y-8">

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex mb-2">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
        </div>
        <p className="text-lg text-gray-700">
          "I recently met with Dr. Bruno Rubi, when he consulted at the Riberas hospital in Ajijic."
        </p>
        <p className="mt-4 text-right text-gray-500">- Louis Solomon</p>
        <p className="mt-4 text-right text-gray-500">3 months ago</p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex mb-2">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
        </div>
        <p className="text-lg text-gray-700">
          "He is an eminence, he explains absolutely everything in such a way that you understand perfectly both the condition and the treatment and he gives you possible solutions for the condition Excellent human being."
        </p>
        <p className="mt-4 text-right text-gray-500">- Paola Gutiérrez</p>
        <p className="mt-4 text-right text-gray-500">8 months ago</p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex mb-2">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
        </div>
        <p className="text-lg text-gray-700">
          "The doctor gave my dad the best service there can be, great doctor, explains everything very well. Very grateful to him and his staff."
        </p>
        <p className="mt-4 text-right text-gray-500">- Dulce Hernandez</p>
        <p className="mt-4 text-right text-gray-500">8 months ago</p>
      </div>

    </div>
  </div>
</section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Q&A</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Is HoLEP surgery painful?</h3>
            <p className="text-lg text-gray-700">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam eveniet reiciendis fugit recusandae quisquam eius, nobis obcaecati quibusdam ipsam aspernatur laborum blanditiis, voluptas laboriosam harum doloribus a vel dolorum!
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">How long does recovery take?</h3>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iusto asperiores, odio dolor dicta quos modi optio cum deserunt sequi adipisci, fugiat error nulla ducimus molestias eaque quae tempore nisi?
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">What results can I expect?</h3>
            <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tenetur veritatis ipsum minima illum dolorum assumenda quisquam magnam et consectetur nemo, velit ab, eos pariatur vitae aperiam obcaecati perferendis voluptatem.
            </p>
          </div>
        </div>
      </section>


    </div>


    </div>
  );
};

export default App;