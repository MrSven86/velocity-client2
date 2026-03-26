import squareBrush from "@/assets/square-brush.svg";

const areas = [
  "Belgrano", "Palermo", "Núñez", "Colegiales", "Villa Urquiza",
  "Recoleta", "Barrio Norte", "Villa del Parque", "Caballito", "Flores",
  "Almagro", "Chacarita", "Saavedra", "Villa Pueyrredón", "GBA Norte",
];

const ServiceAreasSection = () => {
  return (
    <section className="w-full bg-background py-10 lg:py-[50px]">
      <div className="max-w-[1410px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-7">
          <div className="flex items-center justify-center gap-2 mb-1">
            <img src={squareBrush} alt="" className="w-[26px] h-[30px]" />
            <span className="text-primary text-lg font-bold uppercase">Zona de Trabajo</span>
          </div>
          <h2
            className="text-2xl lg:text-[38px] font-normal text-foreground/80 leading-tight"
            style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif" }}
          >
            Trabajamos en todo Buenos Aires
          </h2>
          <p className="text-foreground/60 text-base mt-2">Con base en Belgrano, atendemos CABA y Gran Buenos Aires.</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {areas.map((area) => (
            <span
              key={area}
              className="px-4 py-2 text-sm font-semibold border"
              style={{ borderColor: "hsl(var(--primary))", color: "hsl(var(--primary))", background: "rgba(0,192,239,0.04)" }}
            >
              {area}
            </span>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-5">
          ¿Tu barrio no está en la lista? Consultanos igual — nos movemos por toda la ciudad.
        </p>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
