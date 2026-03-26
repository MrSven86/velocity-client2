import footerBg from "@/assets/footer-bg.png";

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden">
      <img src={footerBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.75)" }} />

      <div className="relative z-10 max-w-[1410px] mx-auto px-4 sm:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span className="text-2xl font-extrabold uppercase tracking-tight" style={{ color: "hsl(var(--primary))", fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif" }}>VAMA</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">Pintura Profesional</span>
            </div>
            <p className="text-white/60 text-sm leading-6">
              Marcelo Abreu · Pintor Profesional<br />
              25 años de experiencia.<br />
              Belgrano, Buenos Aires.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Servicios</h4>
            <ul className="flex flex-col gap-1.5 text-white/60 text-sm">
              {["Pintura Interior", "Pintura Exterior y Fachadas", "Revoques y Emparejamiento", "Pintura de Techos", "Trabajos Comerciales", "Durlock y Reformas"].map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Contacto</h4>
            <div className="flex flex-col gap-3 text-white/60 text-sm">
              <a href="https://wa.me/5491139034512" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +54 11 3903-4512 (WhatsApp)
              </a>
              <a href="tel:+541139034512" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                11 3903-4512 (Llamadas)
              </a>
              <a href="https://www.instagram.com/vamapinturadeobrasyservicios/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                @vamapinturadeobrasyservicios
              </a>
              <div className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 mt-0.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>Migueletes 1931, Belgrano<br />Buenos Aires, Argentina</span>
              </div>
              <div className="text-white/40 text-xs mt-1">
                Lun–Vie: 7:00–19:00 · Sáb: 8:00–17:00
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/30 text-xs">
          © {new Date().getFullYear()} VAMA Pintura de Obras y Servicios · Belgrano, Buenos Aires
        </div>
      </div>
    </footer>
  );
};

export default Footer;
