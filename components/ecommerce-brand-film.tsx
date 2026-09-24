export function EcommerceBrandFilm() {
  return (
    <section className="olivon-brand-film shell" aria-label="Olivon e-ticaret dönüşüm filmi">
      <div className="olivon-brand-film-frame">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Olivon e-ticaret tasarım, dönüşüm ve operasyon filmi"
        >
          <source src="/videos/olivon-ecommerce-film.mp4" type="video/mp4" />
        </video>
      </div>
      <style>{`
        .olivon-brand-film{padding-top:18px;padding-bottom:34px}
        .olivon-brand-film-frame{position:relative;overflow:hidden;width:100%;height:clamp(420px,calc(100svh - 190px),620px);border:1px solid rgba(255,122,94,.18);border-radius:30px;background:#160f0c;box-shadow:0 30px 90px rgba(17,10,8,.22)}
        .olivon-brand-film-frame::after{content:"";position:absolute;inset:0;pointer-events:none;border:1px solid rgba(255,255,255,.06);border-radius:inherit}
        .olivon-brand-film-frame video{display:block;width:100%;height:100%;object-fit:cover;object-position:center;background:#160f0c}
        @media(max-width:760px){.olivon-brand-film{padding-top:8px;padding-bottom:24px}.olivon-brand-film-frame{height:auto;aspect-ratio:16/9;border-radius:20px}}
      `}</style>
    </section>
  );
}
