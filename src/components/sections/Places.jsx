import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    {
      id: 1,
      title: "Brasília - DF",
      description: "Visita à sede do Governo Federal",
      coverImage: "/places/brasilia/deputados.jpeg",
      date: "2025",
      photos: [
        { url: "/places/brasilia/stfout.jpeg", caption: "Fachada do STF" },
        { url: "/places/brasilia/stfout2.jpeg", caption: "Fachada do STF - 2" },
        { url: "/places/brasilia/senadofederal.jpeg", caption: "Senado Federal" },
        { url: "/places/brasilia/alvorada.jpeg", caption: "Palacio do Planalto" },
        { url: "/places/brasilia/deputados.jpeg", caption: "Câmara dos Deputados "},
        { url: "/places/brasilia/catedral.jpeg", caption: "Catedral de Brasilia"},
        { url: "/places/brasilia/arteindigena.jpeg", caption: "Artes Indigenas"},
        { url: "/places/brasilia/soldados.jpeg", caption: "Vista"},

        // Add more photos here
      ]
    },
    // Add more places as needed
  ];

  return (
    <section id="lugares" className="py-24 px-6 bg-slate-900 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-16">
          <div className="h-px flex-grow bg-amber-300"></div>
          <h2 className="text-4xl md:text-5xl px-6 font-serif">Lugares Visitados</h2>
          <div className="h-px flex-grow bg-amber-300"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {places.map((place) => (
            <motion.div
              key={place.id}
              layoutId={`place-${place.id}`}
              onClick={() => setSelectedPlace(place)}
              className="cursor-pointer bg-slate-800 rounded-lg overflow-hidden shadow-xl 
                transform transition-transform duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64">
                <img
                  src={place.coverImage}
                  alt={place.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-serif text-white">{place.title}</h3>
                  <p className="text-amber-300 mt-2">{place.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPlace && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlace(null)}
              className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`place-${selectedPlace.id}`}
              className="fixed inset-4 md:inset-16 z-50 bg-slate-900 rounded-lg overflow-hidden"
            >
              <div className="h-full overflow-y-auto">
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="absolute top-4 right-4 text-white p-2 z-10 hover:text-amber-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-6">
                  <h2 className="text-3xl font-serif mb-4">{selectedPlace.title}</h2>
                  <p className="text-amber-300 mb-8">{selectedPlace.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedPlace.photos.map((photo, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative aspect-video"
                      >
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-sm text-white">{photo.caption}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Places;
