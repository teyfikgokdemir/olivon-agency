import { CheckCircle2 } from "lucide-react";

export function ServiceEssentials({
  audience,
  deliverables,
  process,
  fitNote,
}: {
  audience: string[];
  deliverables: string[];
  process: string[];
  fitNote: string;
}) {
  return (
    <section className="service-essentials shell" aria-label="Hizmet kapsamı ve çalışma modeli">
      <div className="service-essentials-head">
        <p className="section-index">KAPSAM & UYGUNLUK</p>
        <h2>Başlamadan önce kapsamı netleştiriyoruz.</h2>
        <p>{fitNote}</p>
      </div>
      <div className="service-essentials-grid">
        <article><span>01</span><h3>Kimler için uygun?</h3><ul>{audience.map(item => <li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul></article>
        <article><span>02</span><h3>Ne teslim ediyoruz?</h3><ul>{deliverables.map(item => <li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul></article>
        <article><span>03</span><h3>Süreç nasıl ilerler?</h3><ul>{process.map(item => <li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul></article>
      </div>
      <p className="service-duration"><strong>Proje süresi:</strong> Sabit bir gün sayısı vermek yerine kapsam, içerik hazırlığı, entegrasyon sayısı ve onay akışına göre başlangıçta takvim çıkarıyoruz. Böylece teklif ile teslim planı aynı kapsam üzerinden ilerliyor.</p>
    </section>
  );
}
