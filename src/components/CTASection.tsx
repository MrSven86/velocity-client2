import ctaBg from "@/assets/cta-background.png";

const CTASection = () => {
  return (
    <section id="contacto" className="w-full relative overflow-hidden py-14 lg:py-[80px]">
      <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />

      <div className="relative z-10 max-w-[700px] mx-auto px-4 sm:px-8 text-center">
        <h2
          className="text-3xl lg:text-[48px] font-normal text-white leading-tight mb-4"
          style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif" }}
        >
          ¿Querés renovar tu espacio?
        </h2>
        <p className="text-white/80 text-base lg:text-lg leading-7 mb-8 max-w-[540px] mx-auto">
          Contanos qué necesitás y te damos un presupuesto sin cargo. Respondemos el mismo día.
        </p>

        {/* Process steps */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
          {[
            { num: "1", label: "Mandanos un mensaje por WhatsApp" },
            { num: "2", label: "Coordinamos una visita gratuita" },
            { num: "3", label: "Recibís el presupuesto el mismo día" },
          ].map(({ num, label }) => (
            <div key={num} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg" style={{ background: "hsl(var(--primary))" }}>{num}</div>
              <p className="text-white/80 text-sm max-w-[130px]">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5491139034512"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-[56px] px-10 font-bold text-base uppercase text-white hover:opacity-90 transition-opacity"
            style={{ background: "var(--gradient-cta)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Escribir por WhatsApp
          </a>
          <a
            href="tel:+541139034512"
            className="flex items-center justify-center gap-2 h-[56px] px-8 font-bold text-base uppercase text-white border-2 border-white/70 hover:bg-white/10 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Llamar: 11 3903-4512
          </a>
        </div>
        <p className="text-white/50 text-xs mt-3">Sin compromiso · Lunes a sábado, 7 a 19 hs</p>
      </div>
    </section>
  );
};

export default CTASection;
