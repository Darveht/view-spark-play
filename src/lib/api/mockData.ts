
export interface Media {
  id: string;
  title: string;
  type: 'movie' | 'series';
  year: number;
  rating: string;
  duration: string;
  description: string;
  imageUrl: string;
  backdropUrl: string;
  videoUrl: string;
  trailerUrl: string;
  genres: string[];
  cast: string[];
  episodes?: Episode[];
}

export interface Episode {
  id: string;
  title: string;
  episodeNumber: number;
  seasonNumber: number;
  duration: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}

const mockData: Media[] = [
  {
    id: "1",
    title: "Cosmos: Nuevos Mundos",
    type: "series",
    year: 2023,
    rating: "12",
    duration: "10 episodios",
    description: "Un viaje fascinante a través del universo, explorando los secretos de la galaxia y las maravillas de la naturaleza. Narrado por expertos en astrofísica.",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Documental", "Ciencia", "Espacio"],
    cast: ["Carlos Jiménez", "Elena Martínez", "Pedro Sánchez"],
    episodes: [
      {
        id: "1-1",
        title: "Los orígenes del cosmos",
        episodeNumber: 1,
        seasonNumber: 1,
        duration: "45m",
        description: "Exploramos el origen del universo y la formación de las primeras estrellas.",
        imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=800&auto=format&fit=crop",
        videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4"
      },
      {
        id: "1-2",
        title: "Viaje hacia las estrellas",
        episodeNumber: 2,
        seasonNumber: 1,
        duration: "42m",
        description: "Un recorrido por los diferentes tipos de estrellas y su ciclo de vida.",
        imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800&auto=format&fit=crop",
        videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4"
      },
      {
        id: "1-3",
        title: "Galaxias distantes",
        episodeNumber: 3,
        seasonNumber: 1,
        duration: "48m",
        description: "Exploramos las galaxias más lejanas del universo observable.",
        imageUrl: "https://images.unsplash.com/photo-1534841090574-cba2d662b62e?q=80&w=800&auto=format&fit=crop",
        videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4"
      }
    ]
  },
  {
    id: "2",
    title: "El Último Horizonte",
    type: "movie",
    year: 2024,
    rating: "16",
    duration: "2h 15m",
    description: "En un futuro post-apocalíptico, un grupo de supervivientes busca el último lugar habitable en la Tierra mientras luchan contra fuerzas desconocidas.",
    imageUrl: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Ciencia Ficción", "Acción", "Drama"],
    cast: ["Ana López", "Roberto García", "María González"]
  },
  {
    id: "3",
    title: "Conexión Oscura",
    type: "series",
    year: 2022,
    rating: "18",
    duration: "3 temporadas",
    description: "Una detective con habilidades especiales investiga una serie de crímenes paranormales que parecen estar conectados con su propio pasado.",
    imageUrl: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Thriller", "Crimen", "Suspense"],
    cast: ["Laura Fernández", "David Morales", "Carmen Vidal"],
    episodes: [
      {
        id: "3-1",
        title: "Revelaciones",
        episodeNumber: 1,
        seasonNumber: 1,
        duration: "52m",
        description: "Una detective descubre una escena del crimen que desafía la explicación lógica.",
        imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop",
        videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4"
      },
      {
        id: "3-2",
        title: "Sombras",
        episodeNumber: 2,
        seasonNumber: 1,
        duration: "55m",
        description: "La investigación revela conexiones entre varios casos aparentemente no relacionados.",
        imageUrl: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=800&auto=format&fit=crop",
        videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4"
      }
    ]
  },
  {
    id: "4",
    title: "Alma de Guerrero",
    type: "movie",
    year: 2021,
    rating: "16",
    duration: "1h 58m",
    description: "Un joven boxeador de un barrio marginal lucha por cumplir sus sueños mientras enfrenta problemas familiares y las dificultades de su entorno.",
    imageUrl: "https://images.unsplash.com/photo-1590056121545-edf11492d3ee?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Drama", "Deportes", "Acción"],
    cast: ["Javier Méndez", "Carlos Torres", "Sofía Ramírez"]
  },
  {
    id: "5",
    title: "Isla Perdida",
    type: "series",
    year: 2023,
    rating: "14",
    duration: "2 temporadas",
    description: "Un grupo de turistas queda varado en una misteriosa isla tras un accidente aéreo, descubriendo que el lugar esconde secretos sobrenaturales.",
    imageUrl: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1551018612-9715965c6742?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Aventura", "Misterio", "Ciencia Ficción"],
    cast: ["Marta Herrera", "Antonio Díaz", "Elena Fuentes"],
    episodes: [
      {
        id: "5-1",
        title: "Náufragos",
        episodeNumber: 1,
        seasonNumber: 1,
        duration: "58m",
        description: "Un grupo de personas sobrevive a un accidente aéreo y termina en una isla aparentemente desierta.",
        imageUrl: "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?q=80&w=800&auto=format&fit=crop",
        videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4"
      },
      {
        id: "5-2",
        title: "Señales",
        episodeNumber: 2,
        seasonNumber: 1,
        duration: "47m",
        description: "Los supervivientes comienzan a notar extraños acontecimientos en la isla.",
        imageUrl: "https://images.unsplash.com/photo-1588281345136-9893572e8fa4?q=80&w=800&auto=format&fit=crop",
        videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4"
      }
    ]
  },
  {
    id: "6",
    title: "Historia de Nosotros",
    type: "movie",
    year: 2024,
    rating: "12",
    duration: "2h 05m",
    description: "Un emotivo relato que sigue a una pareja a lo largo de 30 años, mostrando cómo su relación evoluciona a través de los altibajos de la vida.",
    imageUrl: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1499516387605-0d549bc7e9bd?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Romance", "Drama", "Comedia"],
    cast: ["Isabel Castro", "Daniel López", "Clara Sánchez"]
  },
  {
    id: "7",
    title: "Código Ancestral",
    type: "series",
    year: 2022,
    rating: "16",
    duration: "1 temporada",
    description: "Un arqueólogo descubre una antigua civilización que poseía tecnología avanzada, desencadenando una carrera global para encontrar sus secretos.",
    imageUrl: "https://images.unsplash.com/photo-1514195037031-83d60ed3b448?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1536854150886-354a3ceaf935?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Aventura", "Historia", "Acción"],
    cast: ["Ricardo Blanco", "Luisa Ortega", "Miguel Ángel Torres"]
  },
  {
    id: "8",
    title: "La Ciudad de las Sombras",
    type: "movie",
    year: 2023,
    rating: "18",
    duration: "2h 22m",
    description: "En una metrópolis corrupta, un detective privado investiga la desaparición de una joven heredera, descubriendo una conspiración que llega hasta las más altas esferas del poder.",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1518183214770-9cffbec72538?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Noir", "Crimen", "Thriller"],
    cast: ["Pablo Ruiz", "Marina González", "Alberto Sanz"]
  },
  {
    id: "9",
    title: "Voces del Pasado",
    type: "series",
    year: 2024,
    rating: "16",
    duration: "2 temporadas",
    description: "Una médium ayuda a resolver crímenes al comunicarse con las víctimas, pero su don comienza a afectar su vida personal y su salud mental.",
    imageUrl: "https://images.unsplash.com/photo-1618945524163-32451704cbb8?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Supernatural", "Crimen", "Drama"],
    cast: ["Teresa Campos", "Héctor Navarro", "Julia Martín"]
  },
  {
    id: "10",
    title: "Viaje al Abismo",
    type: "movie",
    year: 2021,
    rating: "12",
    duration: "1h 45m",
    description: "Una expedición submarina descubre una nueva especie en las profundidades del océano, pero pronto se dan cuenta de que han despertado algo que debería haber permanecido oculto.",
    imageUrl: "https://images.unsplash.com/photo-1551614336-06a20a6dd55f?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1557344252-14e499eb4a34?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Aventura", "Ciencia Ficción", "Terror"],
    cast: ["Gonzalo Pérez", "Lucía Fernández", "Raúl Moreno"]
  },
  {
    id: "11",
    title: "Despertar",
    type: "series",
    year: 2023,
    rating: "14",
    duration: "3 temporadas",
    description: "En un futuro cercano, la humanidad ha desarrollado una tecnología que permite compartir sueños, pero pronto se descubre que esta tecnología tiene efectos secundarios peligrosos.",
    imageUrl: "https://images.unsplash.com/photo-1536341516991-71570536f98e?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Ciencia Ficción", "Drama", "Thriller"],
    cast: ["Diego Martínez", "Sara López", "Andrés Gutiérrez"]
  },
  {
    id: "12",
    title: "El Laberinto Verde",
    type: "movie",
    year: 2022,
    rating: "16",
    duration: "2h 08m",
    description: "Un grupo de exploradores se adentra en la selva amazónica en busca de una planta con propiedades curativas milagrosas, enfrentándose a peligros naturales y sobrenaturales.",
    imageUrl: "https://images.unsplash.com/photo-1506259091721-347e791bab0f?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=1500&auto=format&fit=crop",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    trailerUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    genres: ["Aventura", "Supervivencia", "Thriller"],
    cast: ["Valentina Ortiz", "Mario Ramos", "Beatriz Molina"]
  }
];

// Function to get all media items
export function getAllMedia(): Media[] {
  return mockData;
}

// Function to get featured content (random selection)
export function getFeaturedContent(): Media {
  const randomIndex = Math.floor(Math.random() * mockData.length);
  return mockData[randomIndex];
}

// Function to get content by category/type
export function getContentByCategory(category: string): Media[] {
  switch (category) {
    case 'continue-watching':
      // In a real app, this would be personalized
      return mockData.slice(0, 4);
    case 'trending':
      return mockData.slice(3, 9);
    case 'new-releases':
      return mockData.slice(5, 11);
    case 'recommended':
      return mockData.slice(8, 13);
    case 'movies':
      return mockData.filter(item => item.type === 'movie');
    case 'series':
      return mockData.filter(item => item.type === 'series');
    default:
      return mockData;
  }
}

// Function to get content by ID
export function getContentById(id: string): Media | undefined {
  return mockData.find(item => item.id === id);
}

// Function to search content
export function searchContent(query: string): Media[] {
  const lowercaseQuery = query.toLowerCase();
  return mockData.filter(item => {
    return (
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.genres.some(genre => genre.toLowerCase().includes(lowercaseQuery)) ||
      item.cast.some(actor => actor.toLowerCase().includes(lowercaseQuery))
    );
  });
}

// Function to get similar content
export function getSimilarContent(id: string): Media[] {
  const content = getContentById(id);
  if (!content) return mockData.slice(0, 6);
  
  // Find content with similar genres
  return mockData
    .filter(item => item.id !== id && item.genres.some(genre => content.genres.includes(genre)))
    .slice(0, 6);
}
