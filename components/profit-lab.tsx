"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";

type SliderFieldProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  formatter?: (value: number) => string;
  onChange: (value: number) => void;
};

function SliderField({ label, value, min, max, step, unit, formatter, onChange }: SliderFieldProps) {
  const progress = ((value - min) / (max - min)) * 100;
  const displayValue = formatter ? formatter(value) : String(value);

  return (
    <label className="profit-slider-field">
      <span className="profit-slider-topline">
        <span>{label}</span>
        <strong>{displayValue}<small>{unit}</small></strong>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{ "--slider-progress": `${progress}%` } as React.CSSProperties}
      />
      <span className="profit-slider-scale" aria-hidden="true">
        <small>{formatter ? formatter(min) : min}{unit}</small>
        <small>{formatter ? formatter(max) : max}{unit}</small>
      </span>
    </label>
  );
}

export function ProfitLab() {
  const [revenue, setRevenue] = useState(500000);
  const [averageOrder, setAverageOrder] = useState(1250);
  const [grossMargin, setGrossMargin] = useState(48);
  const [adRate, setAdRate] = useState(10);
  const [shipping, setShipping] = useState(95);
  const [marketCommission, setMarketCommission] = useState(20);

  const scenarios = useMemo(() => {
    const orders = Math.max(1, revenue / Math.max(1, averageOrder));
    const commonCost = revenue * (1 - grossMargin / 100) + revenue * (adRate / 100) + orders * shipping;
    return [
      { name: "Pazaryeri", fee: revenue * (marketCommission / 100), fixed: 0 },
      { name: "Shopify", fee: revenue * .035, fixed: 2500 },
      { name: "WooCommerce", fee: revenue * .032, fixed: 3500 },
      { name: "ikas", fee: revenue * .0359, fixed: 3329 },
    ].map((item) => ({ ...item, profit: revenue - commonCost - item.fee - item.fixed }));
  }, [revenue, averageOrder, grossMargin, adRate, shipping, marketCommission]);

  const maxProfit = Math.max(...scenarios.map((item) => item.profit), 1);
  const bestScenario = scenarios.reduce((best, current) => current.profit > best.profit ? current : best, scenarios[0]);
  const marketplace = scenarios[0];
  const advantage = Math.max(0, bestScenario.profit - marketplace.profit);

  const number = (value: number) => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value);
  const money = (value: number) => `${number(value)} TL`;

  const trackComplete = () => {
    window.dispatchEvent(new CustomEvent("olivon-analytics-event", {
      detail: {
        name: "profit_calculator_complete",
        params: {
          revenue,
          average_order_value: averageOrder,
          gross_margin: grossMargin,
          marketplace_commission: marketCommission,
        },
      },
    }));
  };

  return (
    <section className="profit-lab shell" id="karlilik">
      <div className="profit-intro">
        <p className="section-index">CANLI SENARYO / KÂRLILIK LABORATUVARI</p>
        <h2>Satış aynı.<br /><em>Kalan para farklı.</em></h2>
        <p>Altı kısa ayarla senaryonuzu oluşturun. Rakam yazmak yerine kaydırın; sonuçlar anında güncellensin.</p>
        <div className="partner-proof">
          <a href="https://www.shopify.com" target="_blank" rel="noreferrer"><img src="/partners/shopify.svg" alt="Shopify" loading="lazy" /><strong>SHOPIFY EKOSİSTEMİ</strong></a>
          <a href="https://ikas.com" target="_blank" rel="noreferrer"><img src="/partners/ikas.svg" alt="ikas" loading="lazy" /><strong>İKAS PARTNER DESTEĞİ</strong></a>
        </div>
        <div className="assumption-note">Ön değerlendirme: vergi, iade, personel, uygulama/tema, bakım ve kategoriye özel giderler dahil değildir. Platform ücretleri ve oranlar projede güncel verilerle doğrulanır.</div>
      </div>

      <div className="calculator calculator-modern">
        <div className="calculator-toolbar">
          <div><SlidersHorizontal size={18} /><span>Senaryonuzu ayarlayın</span></div>
          <span>Sonuçlar canlı güncellenir</span>
        </div>

        <div className="calculator-inputs calculator-sliders">
          <SliderField label="Aylık satış" value={revenue} min={100000} max={3000000} step={50000} unit=" TL" formatter={number} onChange={setRevenue} />
          <SliderField label="Ortalama sepet" value={averageOrder} min={300} max={5000} step={50} unit=" TL" formatter={number} onChange={setAverageOrder} />
          <SliderField label="Brüt ürün marjı" value={grossMargin} min={20} max={80} step={1} unit="%" onChange={setGrossMargin} />
          <SliderField label="Reklam gideri" value={adRate} min={0} max={35} step={1} unit="%" onChange={setAdRate} />
          <SliderField label="Sipariş başı kargo" value={shipping} min={0} max={250} step={5} unit=" TL" formatter={number} onChange={setShipping} />
          <SliderField label="Pazaryeri komisyonu" value={marketCommission} min={5} max={35} step={1} unit="%" onChange={setMarketCommission} />
        </div>

        <div className="profit-highlight" aria-live="polite">
          <span>Bu senaryoda en yüksek tahmini katkı</span>
          <strong>{bestScenario.name}</strong>
          <em>{money(bestScenario.profit)}</em>
          <small>{advantage > 0 ? `Pazaryerine göre yaklaşık ${money(advantage)} daha fazla aylık katkı.` : "Pazaryeri ile fark sınırlı görünüyor."}</small>
        </div>

        <div className="scenario-results" aria-live="polite">
          {scenarios.map((item, index) => (
            <div className={index === 0 ? "scenario marketplace" : item.name === bestScenario.name ? "scenario is-best" : "scenario"} key={item.name}>
              <div className="scenario-head"><span>{item.name}</span><strong>{money(item.profit)}</strong></div>
              <div className="profit-bar"><i style={{ width: `${Math.max(4, item.profit / maxProfit * 100)}%` }} /></div>
              <small>{item.name === bestScenario.name ? "En güçlü senaryo" : "Tahmini aylık net katkı"}</small>
            </div>
          ))}
        </div>

        <div className="calculator-foot">
          <span>Bu araç teklif veya finansal danışmanlık değildir; karşılaştırmalı ön senaryo üretir.</span>
          <a href="/iletisim?source=profit-lab" onClick={trackComplete}>Markanıza özel analiz <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
