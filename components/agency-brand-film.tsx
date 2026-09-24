export function AgencyBrandFilm() {
  return (
    <section className="olivon-agency-film shell" aria-label="Olivon marka filmi">
      <div className="olivon-agency-film-frame">
        <video autoPlay muted loop playsInline preload="metadata" aria-label="Olivon dijital ajans marka filmi">
          <source src="/videos/olivon-agency-brand-film.mp4" type="video/mp4" />
        </video>
      </div>
      <style>{`
        .olivon-agency-film{padding-top:18px;padding-bottom:34px}
        .olivon-agency-film-frame{position:relative;overflow:hidden;width:100%;height:clamp(420px,calc(100svh - 190px),620px);border:1px solid rgba(255,122,94,.18);border-radius:30px;background:#160f0c;box-shadow:0 30px 90px rgba(17,10,8,.22)}
        .olivon-agency-film-frame::after{content:"";position:absolute;inset:0;pointer-events:none;border:1px solid rgba(255,255,255,.06);border-radius:inherit}
        .olivon-agency-film-frame video{display:block;width:100%;height:100%;object-fit:cover;object-position:center;background:#160f0c}
        @media(max-width:760px){.olivon-agency-film{padding-top:8px;padding-bottom:24px}.olivon-agency-film-frame{height:auto;aspect-ratio:16/9;border-radius:20px}}
      `}</style>
    </section>
  );
}
