import squareBrush from "@/assets/square-brush.svg";
import vama01 from "@/assets/vama-work-01.jpg";
import vama02 from "@/assets/vama-work-02.jpg";
import vama03 from "@/assets/vama-work-03.jpg";
import vama05 from "@/assets/vama-work-05.jpg";
import vama06 from "@/assets/vama-work-06.jpg";
import vama07 from "@/assets/vama-work-07.jpg";

const services = [
  {
    image: vama01,
    title: "Pintura Interior",
    description: "Paredes, techos y aberturas con terminaciones impecables. Usamos las mejores pinturas del mercado y trabajamos con sumo cuidado para que tu hogar quede perfecto.",
  },
  {
    image: vama02,
    title: "Pintura Exterior y Fachadas",
    description: "Renovamos la fachada de tu casa, edificio u oficina. Trabajos prolijos con preparación de superficie, sellado y pintura de calidad que resiste el tiempo.",
  },
  {
    image: vama03,
    title: "Revoques y Emparejamiento",
    description: "Arreglamos grietas, humedad y superficies irregulares antes de pintar. El trabajo queda listo para pintar, sin sorpresas ni retoques posteriores.",
  },
  {
    image: vama05,
    title: "Pintura de Techos",
    description: "Techos pintados con materiales antihumedad y antihongos. Trabajamos en departamentos, casas y edificios con el equipo adecuado para cada altura.",
  },
  {
    image: vama06,
    title: "Trabajos Comerciales y Consorcios",
    description: "Pintamos locales, oficinas y espacios comunes de edificios. Trabajamos para consorcios con la misma responsabilidad y puntualidad de siempre.",
  },
  {
    image: vama07,
    title: "Durlock y Reformas Generales",
    description: "Colocación de durlock, zócalos y pequeñas reformas que acompañan la pintura. Un solo equipo para todo el trabajo, sin coordinar múltiples contratistas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="w-full bg-background py-10 lg:py-[55px]">
      <div className="max-w-[1410px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <img src={squareBrush} alt="" className="w-[32px] h-[36px]" />
            <span className="text-primary text-xl lg:text-2xl font-bold uppercase leading-6">Nuestros Servicios</span>
          </div>
          <h2
            className="text-3xl lg:text-[50px] font-normal text-foreground/80 leading-tight lg:leading-[56px]"
            style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif" }}
          >
            Pintura residencial y comercial en CABA
          </h2>
          <p className="text-foreground/60 text-base lg:text-lg leading-7 mt-2 max-w-[600px] mx-auto">
            Pintura interior, exterior, revoques y reformas — todo con el mismo nivel de prolijidad y cuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[12px]">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <img src={service.image} alt={service.title} className="w-full h-[210px] object-cover" />
              <div className="pt-[14px] px-[16px] pb-[16px]">
                <h3
                  className="text-xl lg:text-[22px] font-normal text-foreground mb-2"
                  style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground leading-6">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="https://wa.me/5491139034512"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-[56px] px-10 font-bold text-base uppercase text-white hover:opacity-90 transition-opacity"
            style={{ background: "var(--gradient-cta)" }}
          >
            Pedí un Presupuesto Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
