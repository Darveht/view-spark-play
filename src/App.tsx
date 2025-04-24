
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Series from "./pages/Series";
import Peliculas from "./pages/Peliculas";
import MiLista from "./pages/MiLista";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Watch from "./pages/Watch";
import Perfil from "./pages/Perfil";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/series" element={<Series />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/mi-lista" element={<MiLista />} />
          <Route path="/search" element={<Search />} />
          <Route path="/series/:id" element={<Detail />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
