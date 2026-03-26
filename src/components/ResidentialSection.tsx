// "Yes, I understand" + "Yes, I believe" section — friendly explanation + key evidentials

const ResidentialSection = () => {
  return (
    <section className="w-full bg-background py-10 lg:py-[60px]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8 text-center">
        <h2
          className="text-2xl lg:text-[38px] font-normal leading-tight mb-4"
          style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif", color: "#1a1a1a" }}
        >
          ¿Por qué VAMA y no otro pintor?
        </h2>
        <p className="text-base lg:text-[17px] leading-7 text-gray-600 mb-8 max-w-[700px] mx-auto">
          Hay muchos pintores en Buenos Aires. Lo que más escuchamos de nuestros clientes es que en otras experiencias el trabajo quedó mal, no se cumplió el plazo o el precio final no fue el acordado. Con VAMA, eso no pasa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              ),
              title: "Cumplimos lo pactado",
              text: "El precio del presupuesto es el precio final. Sin sorpresas al terminar.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ),
              title: "Puntuales y organizados",
              text: "Llegamos a horario, trabajamos sin interrupciones y entregamos en fecha.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              ),
              title: "El mismo equipo siempre",
              text: "Marcelo y Vanesa atienden el trabajo directamente. Sin subcontratistas desconocidos.",
            },
          ].map(({ icon, title, text }) => (
            <div key={title} className="flex flex-col items-center gap-3 p-5 bg-gray-50 border border-gray-100">
              <div>{icon}</div>
              <h3 className="font-bold text-[16px] text-gray-800">{title}</h3>
              <p className="text-sm text-gray-500 leading-6 text-center">{text}</p>
            </div>
          ))}
        </div>

        {/* Gold copy from reviews — highlighted */}
        <div className="bg-white border-l-4 p-5 text-left shadow-sm max-w-[700px] mx-auto" style={{ borderColor: "hsl(var(--primary))" }}>
          <p className="text-gray-700 text-base italic leading-7">
            "El servicio es de lo mejor que hay en Buenos Aires. Una calidad de excelencia la que manejan."
          </p>
          <p className="text-sm text-gray-400 mt-2 font-semibold">— Emanuel De La Cruz, cliente de VAMA · Google</p>
        </div>
      </div>
    </section>
  );
};

export default ResidentialSection;
