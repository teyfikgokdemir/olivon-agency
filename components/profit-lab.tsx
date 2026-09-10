"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

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
    ].map(item => ({ ...item, profit: revenue - commonCost - item.fee - item.fixed }));
  }, [revenue, averageOrder, grossMargin, adRate, shipping, marketCommission]);

  const maxProfit = Math.max(...scenarios.map(item => item.profit), 1);
  const money = (value: number) => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value) + " TL";
  const formatNumber = (value: number) => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);
  const parseNumber = (value: string) => Number(value.replace(/[^\d]/g, "")) || 0;

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
        <p>Rakamlarınızı girin; pazaryeri ile kendi e-ticaret altyapınız arasındaki tahmini aylık net katkı farkını anında görün.</p>
        <div className="partner-proof">
          <a href="https://www.shopify.com" target="_blank" rel="noreferrer"><img src="/partners/shopify.svg" alt="Shopify" loading="lazy" /><strong>SHOPIFY EKOSİSTEMİ</strong></a>
          <a href="https://ikas.com" target="_blank" rel="noreferrer"><img src="/partners/ikas.svg" alt="ikas" loading="lazy" /><strong>İKAS PARTNER DESTEĞİ</strong></a>
        </div>
        <div className="assumption-note">Ön değerlendirme: vergi, iade, personel, uygulama/tema, bakım ve kategoriye özel giderler dahil değildir. Platform ücretleri ve oranlar projede güncel verilerle doğrulanır.</div>
      </div>
      <div className="calculator">
        <div className="calculator-inputs">
          <label><span>Aylık satış</span><div><input inputMode="numeric" value={formatNumber(revenue)} onChange={e => setRevenue(parseNumber(e.target.value))} /><small>TL</small></div></label>
          <label><span>Ortalama sepet</span><div><input inputMode="numeric" value={formatNumber(averageOrder)} onChange={e => setAverageOrder(parseNumber(e.target.value))} /><small>TL</small></div></label>
          <label><span>Brüt ürün marjı</span><div><input type="number" value={grossMargin} onChange={e => setGrossMargin(Number(e.target.value))} /><small>%</small></div></label>
          <label><span>Reklam gideri</span><div><input type="number" value={adRate} onChange={e => setAdRate(Number(e.target.value))} /><small>%</small></div></label>
          <label><span>Sipariş başı kargo</span><div><input inputMode="numeric" value={formatNumber(shipping)} onChange={e => setShipping(parseNumber(e.target.value))} /><small>TL</small></div></label>
          <label><span>Pazaryeri komisyonu</span><div><input type="number" value={marketCommission} onChange={e => setMarketCommission(Number(e.target.value))} /><small>%</small></div></label>
        </div>
        <div className="scenario-results" aria-live="polite">
          {scenarios.map((item, index) => (
            <div className={index === 0 ? "scenario marketplace" : "scenario"} key={item.name}>
              <div className="scenario-head"><span>{item.name}</span><strong>{money(item.profit)}</strong></div>
              <div className="profit-bar"><i style={{ width: `${Math.max(4, item.profit / maxProfit * 100)}%` }} /></div>
              <small>Tahmini aylık net katkı</small>
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
