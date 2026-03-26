import noiseBg from "@/assets/noise.png";

const reviews = [
  {
    name: "Juli Pisani",
    stars: 5,
    text: "Tuvimos una experiencia excelente con Marcelo y Vanesa. Desde la visita del presupuesto hasta el final del trabajo, el trato y la comunicación fueron muy profesionales. Durante toda la obra fueron puntuales, resolutivos y detallistas. El departamento quedó divino con muy buenas terminaciones. Cumplieron con los plazos estimados y el presupuesto nos pareció acorde con el trabajo que realizaron.",
    badge: "Guía Local · 167 reseñas",
  },
  {
    name: "fgct",
    stars: 5,
    text: "SUMAMENTE RECOMENDABLES. Tanto Marcelo como Vanesa hicieron un excelente trabajo, muy responsables, prolijos, profesionales y predispuestos. Se nota la experiencia que tienen, cumplieron con lo pactado por demás. Además de ser muy honestos y muy buenas personas. Los volveremos a contratar y los seguiremos recomendando.",
    badge: "Guía Local · 196 reseñas",
  },
  {
    name: "Fer Lopez",
    stars: 5,
    text: "¡Los mejores siempre! Cumplen en tiempo y forma, no se van del presupuesto y sobre todo prolijo. ¡Gracias por todo!",
    badge: "Guía Local · 41 reseñas",
  },
  {
    name: "Elena Sarabia",
    stars: 5,
    text: "Maravilloso servicio, cumplimiento y precio. Los recomiendo con 5 estrellas porque me han dejado, en tiempo y forma, un trabajo perfecto. Serán siempre recomendados porque lo merecen.",
    badge: null,
  },
  {
    name: "Daniel Auletta",
    stars: 5,
    text: "VAMA: Buena gente y muy profesional. Destacó la competencia de Marcelo quien me hizo con su empresa varios trabajos en mi casa con excelentes resultados. Lo recomiendo por su profesionalismo pero por sobre todo por su empatía y humanidad. Siempre ha tenido con nosotros gestos amables y generosos.",
    badge: "Guía Local · 32 reseñas",
  },
  {
    name: "Alexander Rojas",
    stars: 5,
    text: "Lo contraté en 2 ocasiones, y la verdad muy profesional su trabajo. Me encantó como quedó mi casa. Un presupuesto accesible y lo mejor fue que cumplió con la fecha pactada. Lo recomiendo al 100%.",
    badge: null,
  },
];

const GoogleLogo = () => (
  <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="22" fill="white" />
    <path fillRule="evenodd" clipRule="evenodd" d="M37.6 22.5c0-1.28-.11-2.51-.33-3.69H22v6.98h8.73a7.47 7.47 0 01-3.24 4.9v4.07h5.24C35.65 31.77 37.6 27.5 37.6 22.5z" fill="#4285F4" />
    <path fillRule="evenodd" clipRule="evenodd" d="M22 38c4.38 0 8.06-1.45 10.73-3.93l-5.24-4.07c-1.45.97-3.3 1.55-5.49 1.55-4.22 0-7.8-2.85-9.08-6.68H7.5v4.2A16.18 16.18 0 0022 38z" fill="#34A853" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.92 24.87A9.72 9.72 0 0112.39 22c0-.99.17-1.95.53-2.87v-4.2H7.5A16.18 16.18 0 006 22c0 2.61.63 5.09 1.5 7.07l5.42-4.2z" fill="#FBBC05" />
    <path fillRule="evenodd" clipRule="evenodd" d="M22 12.45c2.38 0 4.51.82 6.19 2.42l4.63-4.63C30.05 7.58 26.37 6 22 6A16.18 16.18 0 007.5 14.93l5.42 4.2C14.2 15.3 17.78 12.45 22 12.45z" fill="#EA4335" />
  </svg>
);

const StarFill = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="hsl(var(--star))"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
);

const ReviewsSection = () => {
  return (
    <section id="resenas" className="w-full relative overflow-hidden pb-12 lg:pb-[80px]">
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,192,239,0.10)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url(${noiseBg})`, backgroundRepeat: "repeat", backgroundSize: "300px 300px", opacity: 0.45 }} />

      <div className="relative z-10 pt-12 lg:pt-[70px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 px-4">
          <div className="flex items-center gap-3 mb-4">
            <GoogleLogo />
            <div className="flex flex-col items-start leading-tight">
              <span className="font-bold text-lg" style={{ color: "#111827" }}>Excelente en Google</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-bold text-[15px]" style={{ color: "#111827" }}>4.7</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <StarFill key={i} />)}
                </div>
                <span className="text-gray-500 text-sm">· 31 reseñas</span>
              </div>
            </div>
          </div>
          <h2
            className="font-normal text-3xl lg:text-[46px] leading-tight"
            style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif", color: "#374151" }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-500 mt-2 text-base max-w-[500px]">Reseñas reales de Google — sin filtros, sin edición.</p>
        </div>

        {/* Reviews grid */}
        <div className="max-w-[1410px] mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-5 flex flex-col gap-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                  style={{ background: "var(--gradient-cta)" }}>
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold text-[15px] text-gray-800">{review.name}</p>
                  {review.badge && <p className="text-xs text-gray-400">{review.badge}</p>}
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: review.stars }).map((_, j) => <StarFill key={j} />)}
              </div>
              <p className="text-gray-600 text-sm leading-6 flex-1">"{review.text}"</p>
              <div className="flex items-center gap-1 pt-1">
                <GoogleLogo />
                <span className="text-xs text-gray-400">Reseña de Google</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA under reviews */}
        <div className="flex justify-center mt-10 px-4">
          <a
            href="https://wa.me/5491139034512"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-[56px] px-10 font-bold text-base uppercase text-white hover:opacity-90 transition-opacity"
            style={{ background: "var(--gradient-cta)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Consultá sin compromiso
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
