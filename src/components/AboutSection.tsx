import squareBrush from "@/assets/square-brush.svg";
import vama13 from "@/assets/vama-work-13.jpg";
import vama14 from "@/assets/vama-work-14.jpg";

const AboutSection = () => {
  return (
    <section className="w-full" style={{ backgroundColor: "#dce9ef" }}>
      <div className="max-w-[1410px] mx-auto px-4 sm:px-8 py-12 lg:py-[80px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left: text */}
          <div className="w-full lg:w-[52%]">
            <div className="flex items-center gap-2 mb-3">
              <img src={squareBrush} alt="" className="w-[26px] h-[26px]" />
              <span className="font-bold text-lg uppercase tracking-wide" style={{ color: "hsl(var(--primary))" }}>Sobre Nosotros</span>
            </div>
            <h2
              className="text-3xl lg:text-[46px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif", color: "#1a1a1a" }}
            >
              25 años de experiencia.<br />El mismo equipo en cada trabajo.
            </h2>
            <p className="text-base lg:text-[17px] leading-7 text-gray-600 mb-5">
              Marcelo Abreu fundó VAMA hace 25 años en su ciudad natal, Pehuajó. Desde hace 12 años opera en Buenos Aires junto a Vanesa, su socia y compañera. Juntos atienden cada proyecto de principio a fin — sin tercerizar, sin sorpresas.
            </p>
            <p className="text-base lg:text-[17px] leading-7 text-gray-600 mb-8">
              Cada cliente recibe atención directa de Marcelo: visita el lugar, da el presupuesto, ejecuta el trabajo y lo entrega. Esa continuidad es lo que más valoran quienes los contratan, y lo que más se repite en sus reseñas de Google.
            </p>

            {/* Key evidentials */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { num: "25", label: "años de experiencia" },
                { num: "4.7★", label: "promedio en Google" },
                { num: "31", label: "reseñas verificadas" },
                { num: "27/31", label: "calificaciones de 5 estrellas" },
              ].map(({ num, label }) => (
                <div key={label} className="bg-white p-4 border-l-4" style={{ borderColor: "hsl(var(--primary))" }}>
                  <span className="block text-2xl font-extrabold" style={{ color: "hsl(var(--primary))", fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif" }}>{num}</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5491139034512"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-[56px] px-8 font-bold text-base uppercase text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--gradient-cta)" }}
            >
              Hablar con Marcelo
            </a>
          </div>

          {/* Right: photos */}
          <div className="w-full lg:w-[44%] flex flex-col gap-3">
            <img src={vama13} alt="Trabajo de pintura VAMA Belgrano" className="w-full h-[240px] lg:h-[280px] object-cover shadow-md" />
            <img src={vama14} alt="Terminaciones impecables VAMA" className="w-full h-[200px] lg:h-[230px] object-cover shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
