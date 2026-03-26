import squareBrush from "@/assets/square-brush.svg";
import vama01 from "@/assets/vama-work-01.jpg";
import vama02 from "@/assets/vama-work-02.jpg";
import vama03 from "@/assets/vama-work-03.jpg";
import vama04 from "@/assets/vama-work-04.jpg";
import vama05 from "@/assets/vama-work-05.jpg";
import vama06 from "@/assets/vama-work-06.jpg";
import vama07 from "@/assets/vama-work-07.jpg";
import vama08 from "@/assets/vama-work-08.jpg";
import vama09 from "@/assets/vama-work-09.jpg";
import vama10 from "@/assets/vama-work-10.jpg";
import vama11 from "@/assets/vama-work-11.jpg";
import vama12 from "@/assets/vama-work-12.jpg";

const photos = [vama01, vama02, vama03, vama04, vama05, vama06, vama07, vama08, vama09, vama10, vama11, vama12];

const GallerySection = () => {
  return (
    <section id="galeria" className="w-full bg-background py-10 lg:py-[55px]">
      <div className="max-w-[1410px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <img src={squareBrush} alt="" className="w-[28px] h-[32px]" />
            <span className="text-primary text-xl font-bold uppercase">Trabajos Realizados</span>
          </div>
          <h2
            className="text-3xl lg:text-[46px] font-normal text-foreground/80 leading-tight"
            style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif" }}
          >
            Resultados reales, en casas reales
          </h2>
          <p className="text-foreground/60 text-base mt-2 max-w-[520px] mx-auto">
            Fotos de trabajos recientes en departamentos, casas y edificios de Buenos Aires.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
          {photos.map((photo, i) => (
            <div key={i} className="overflow-hidden aspect-square">
              <img
                src={photo}
                alt={`Trabajo de pintura VAMA ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="https://www.instagram.com/vamapinturadeobrasyservicios/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-[52px] px-8 font-bold text-base uppercase border-2 hover:bg-gray-50 transition-colors"
            style={{ borderColor: "hsl(var(--primary))", color: "hsl(var(--primary))" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
