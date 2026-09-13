"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, SlidersHorizontal, Store, TrendingUp } from "lucide-react";

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
  const [marketCommission, setMarketCommission] = useState(20);
  const [marketServiceCost, setMarketServiceCost] = useState(2);
  const [ownedStoreCost, setOwnedStoreCost] = useState(4);

  const result = useMemo(() => {
    const marketplaceRate = marketCommission + marketServiceCost;
    const marketplaceFees = revenue * (marketplaceRate / 100);
    const ownedStoreFees = revenue * (ownedStoreCost / 100);
    const marketplaceRemainder = revenue - marketplaceFees;
    const ownedStoreRemainder = revenue - ownedStoreFees;
    const advantage = ownedStoreRemainder - marketplaceRemainder;

    return {
      marketplaceRate,
      marketplaceFees,
      ownedStoreFees,
      marketplaceRemainder,
      ownedStoreRemainder,
      advantage,
      advantageRate: revenue > 0 ? (advantage / revenue) * 100 : 0,
    };
  }, [revenue, marketCommission, marketServiceCost, ownedStoreCost]);

  const number = (value: number) => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value);
  const money = (value: number) => `${number(value)} TL`;

  const trackComplete = () => {
    window.dispatchEvent(new CustomEvent("olivon-analytics-event", {
      detail: {
        name: "profit_calculator_complete",
        params: {
          revenue,
          marketplace_commission: marketCommission,
          marketplace_service_cost: marketServiceCost,
          owned_store_cost: ownedStoreCost,
        },
      },
    }));
  };

  return (
    <section className="profit-lab shell profit-lab-simple" id="karlilik">
      <div className="profit-intro">
        <p className="section-index">PAZARYERİ Mİ, KENDİ MAĞAZANIZ MI?</p>
        <h2>Satış aynı.<br /><em>Kesinti farklı.</em></h2>
        <p>Aynı ciroda yalnızca satış kanalına bağlı kesintileri karşılaştırın. Pazaryeri komisyon ve hizmet giderlerini; kendi mağazanızdaki ödeme ve altyapı maliyetiyle yan yana görün.</p>

        <div className="owned-platforms" aria-label="Kendi mağazanız için desteklenen altyapılar">
          <span>Shopify</span>
          <span>ikas</span>
          <span>WordPress / WooCommerce</span>
        </div>

        <div className="assumption-note">
          Reklam, kargo, ürün maliyeti, personel ve vergi gibi iki modelde de oluşabilecek ortak giderler karşılaştırmaya dahil edilmez. Amaç yalnızca kanal maliyetinin etkisini göstermektir.
        </div>
      </div>

      <div className="calculator calculator-modern calculator-simple">
        <div className="calculator-toolbar">
          <div><SlidersHorizontal size={18} /><span>Senaryonuzu kaydırarak ayarlayın</span></div>
          <span>Canlı karşılaştırma</span>
        </div>

        <div className="calculator-inputs calculator-sliders calculator-sliders-simple">
          <SliderField label="Aylık satış" value={revenue} min={100000} max={5000000} step={50000} unit=" TL" formatter={number} onChange={setRevenue} />
          <SliderField label="Pazaryeri komisyonu" value={marketCommission} min={5} max={35} step={1} unit="%" onChange={setMarketCommission} />
          <SliderField label="Pazaryeri hizmet / işlem gideri" value={marketServiceCost} min={0} max={10} step={0.5} unit="%" onChange={setMarketServiceCost} />
          <SliderField label="Kendi mağazanız ödeme + altyapı maliyeti" value={ownedStoreCost} min={1} max={10} step={0.5} unit="%" onChange={setOwnedStoreCost} />
        </div>

        <div className="channel-comparison" aria-live="polite">
          <article className="channel-card marketplace-card">
            <div className="channel-card-head"><span><Store size={18} /> Pazaryeri</span><small>Toplam kesinti %{result.marketplaceRate.toFixed(1).replace(".0", "")}</small></div>
            <strong>{money(result.marketplaceRemainder)}</strong>
            <p>Satış kanalı kesintileri sonrası kalan tutar</p>
            <div className="channel-cost"><span>Kanal maliyeti</span><b>-{money(result.marketplaceFees)}</b></div>
          </article>

          <article className="channel-card owned-card">
            <div className="channel-card-head"><span><TrendingUp size={18} /> Kendi e-ticaret siteniz</span><small>Shopify · ikas · WooCommerce</small></div>
            <strong>{money(result.ownedStoreRemainder)}</strong>
            <p>Ödeme + altyapı maliyeti sonrası kalan tutar</p>
            <div className="channel-cost"><span>Kanal maliyeti</span><b>-{money(result.ownedStoreFees)}</b></div>
          </article>
        </div>

        <div className="profit-advantage" aria-live="polite">
          <span>Bu senaryoda kendi mağazanızın tahmini aylık kanal avantajı</span>
          <strong>{money(result.advantage)}</strong>
          <small>Cironun yaklaşık %{Math.max(0, result.advantageRate).toFixed(1).replace(".0", "")} kadarı satış kanalı maliyet farkından korunuyor.</small>
        </div>

        <div className="calculator-foot">
          <span>Bu karşılaştırma finansal danışmanlık veya platform fiyat teklifi değildir; oranları kendi sözleşmelerinize göre ayarlayabilirsiniz.</span>
          <a href="/iletisim?source=profit-lab" onClick={trackComplete}>Markanıza özel analiz <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
