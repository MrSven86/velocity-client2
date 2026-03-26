import heroBg from "@/assets/hero-background.png";
import iconUnmatched from "@/assets/icon-unmatched.svg";
import iconUnbeatable from "@/assets/icon-unbeatable.svg";
import iconExceptional from "@/assets/icon-exceptional.svg";
import vama01 from "@/assets/vama-work-01.jpg";
import vama04 from "@/assets/vama-work-04.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[500px] lg:min-h-[620px] overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.38)" }} />

      <div className="relative max-w-[1410px] mx-auto px-4 sm:px-8 py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        {/* Left: text */}
        <div className="max-w-[680px]">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5" style={{ background: 'hsl(var(--primary))', borderRadius: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span className="text-white text-xs font-bold uppercase tracking-wider">Belgrano · CABA y GBA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[54px] font-extrabold uppercase leading-tight text-white"
            style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Pintura Profesional<br/>con Terminaciones<br/>Impecables
          </h1>

          <p className="mt-4 text-base lg:text-xl font-semibold text-white/90 leading-relaxed max-w-[560px]"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
            25 años de experiencia, cumplimos los plazos y el presupuesto pactado — siempre.
          </p>

          {/* Value badges */}
          <div className="flex flex-wrap gap-4 lg:gap-8 mt-5">
            {[
              { icon: iconUnmatched, label: "Trabajo Prolijo." },
              { icon: iconUnbeatable, label: "Presupuesto Accesible." },
              { icon: iconExceptional, label: "Puntual y Confiable." },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <img src={icon} alt="" className="w-6 h-6" />
                <span className="text-white text-base font-semibold">{label}</span>
              </div>
            ))}
          </div>

          {/* Star evidence */}
          <div className="flex items-center gap-2 mt-5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i <= 5 ? "hsl(var(--star))" : "rgba(255,255,255,0.3)"}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <span className="text-white font-bold">4.7</span>
            <span className="text-white/80 text-sm">en Google · 31 reseñas</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="https://wa.me/5491139034512" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-[260px] h-[56px] text-base font-bold uppercase text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--gradient-cta)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Pedí tu Presupuesto Gratis
            </a>
            <a href="tel:+541139034512"
              className="flex items-center justify-center gap-2 w-full sm:w-[220px] h-[56px] text-base font-bold uppercase text-white border-2 border-white/80 hover:bg-white/10 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Llamar Ahora
            </a>
          </div>
          <p className="text-white/60 text-xs mt-2">Sin cargo · Te respondemos en el día</p>
        </div>

        {/* Right: photo stack */}
        <div className="hidden lg:flex flex-col gap-3 flex-shrink-0">
          <img src={vama01} alt="Trabajo de pintura VAMA" className="w-[260px] h-[175px] object-cover shadow-2xl" style={{ border: "3px solid rgba(255,255,255,0.2)" }} />
          <img src={vama04} alt="Terminaciones de pintura VAMA" className="w-[260px] h-[175px] object-cover shadow-2xl ml-6" style={{ border: "3px solid rgba(255,255,255,0.2)" }} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
