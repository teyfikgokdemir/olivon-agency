"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Package, RotateCcw, SlidersHorizontal, Store, TrendingUp, Truck, Megaphone } from "lucide-react";

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

const platformLogos = [
  { name: "Shopify", src: "/partners/shopify.svg", className: "shopify-logo" },
  { name: "ikas", src: "/partners/ikas.svg", className: "ikas-logo" },
  { name: "WooCommerce", src: "https://woocommerce.com/wp-content/uploads/2025/01/Logo-White.png", className: "woocommerce-logo" },
];

function PlatformLogoRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "platform-logo-row is-compact" : "platform-logo-row"} aria-label="Kendi mağazanız için desteklenen altyapılar">
      {platformLogos.map((platform) => (
        <span className="platform-logo-item" key={platform.name} title={platform.name}>
          <img className={platform.className} src={platform.src} alt={platform.name} loading="lazy" decoding="async" />
        </span>
      ))}
    </div>
  );
}

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
  const [marketplaceCost, setMarketplaceCost] = useState(20);
  const [productCost, setProductCost] = useState(35);
  const [shippingCost, setShippingCost] = useState(5);
  const [adCost, setAdCost] = useState(10);
  const [returnOtherCost, setReturnOtherCost] = useState(3);
  const ownedStoreCost = 4;

  const result = useMemo(() => {
    const marketplaceFees = revenue * (marketplaceCost / 100);
    const ownedStoreFees = revenue * (ownedStoreCost / 100);
    const marketplaceRemainder = revenue - marketplaceFees;
    const ownedStoreRemainder = revenue - ownedStoreFees;
    const advantage = ownedStoreRemainder - marketplaceRemainder;
    const commonCostRate = productCost + shippingCost + adCost + returnOtherCost;
    const commonCosts = revenue * (commonCostRate / 100);
    const marketplaceNetContribution = marketplaceRemainder - commonCosts;
    const ownedStoreNetContribution = ownedStoreRemainder - commonCosts;

    return {
      marketplaceFees,
      ownedStoreFees,
      marketplaceRemainder,
      ownedStoreRemainder,
      advantage,
      advantageRate: revenue > 0 ? (advantage / revenue) * 100 : 0,
      commonCostRate,
      commonCosts,
      marketplaceNetContribution,
      ownedStoreNetContribution,
    };
  }, [revenue, marketplaceCost, productCost, shippingCost, adCost, returnOtherCost]);

  const number = (value: number) => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value);
  const money = (value: number) => `${number(value)} TL`;

  const trackComplete = () => {
    window.dispatchEvent(new CustomEvent("olivon-analytics-event", {
      detail: {
        name: "profit_calculator_complete",
        params: {
          revenue,
          marketplace_total_cost: marketplaceCost,
          owned_store_cost_assumption: ownedStoreCost,
          product_cost: productCost,
          shipping_cost: shippingCost,
          ad_cost: adCost,
          returns_other_cost: returnOtherCost,
        },
      },
    }));
  };

  return (
    <section className="profit-lab shell profit-lab-simple" id="karlilik">
      <div className="profit-intro">
        <p className="section-index">PAZARYERİ Mİ, KENDİ MAĞAZANIZ MI?</p>
        <h2>Satış aynı.<br /><em>Kalan farklı.</em></h2>
        <p>Önce yalnızca kanal maliyetini görün. İsterseniz ürün, kargo, reklam ve iade gibi ortak giderleri açıp daha gerçekçi net katkı senaryosu oluşturun.</p>

        <PlatformLogoRow />

        <div className="assumption-note">
          Varsayılan pazaryeri toplam kesintisi %20'dir. Komisyon + hizmet/işlem bedellerini temsil eden sadeleştirilmiş örnek değerdir ve kategoriye göre değişebilir.
        </div>
      </div>

      <div className="calculator calculator-modern calculator-simple calculator-elite">
        <div className="calculator-toolbar">
          <div><SlidersHorizontal size={18} /><span>Senaryonuzu ayarlayın</span></div>
          <span>2 adım · canlı sonuç</span>
        </div>

        <div className="calculator-inputs calculator-sliders calculator-sliders-focus">
          <SliderField label="Aylık ciro" value={revenue} min={100000} max={5000000} step={50000} unit=" TL" formatter={number} onChange={setRevenue} />
          <SliderField label="Pazaryeri toplam kesintisi" value={marketplaceCost} min={10} max={30} step={1} unit="%" onChange={setMarketplaceCost} />
        </div>

        <div className="channel-comparison channel-comparison-elite" aria-live="polite">
          <article className="channel-card marketplace-card">
            <div className="channel-card-head"><span><Store size={18} /> Pazaryeri</span><small>Toplam kesinti %{marketplaceCost}</small></div>
            <strong>{money(result.marketplaceRemainder)}</strong>
            <p>Cirodan kanal kesintileri sonrası kalan</p>
            <div className="channel-cost"><span>Tahmini kanal maliyeti</span><b>-{money(result.marketplaceFees)}</b></div>
          </article>

          <article className="channel-card owned-card">
            <div className="channel-card-head"><span><TrendingUp size={18} /> Kendi mağazanız</span><small>Örnek kanal maliyeti %{ownedStoreCost}</small></div>
            <strong>{money(result.ownedStoreRemainder)}</strong>
            <p>Ödeme + temel altyapı maliyeti sonrası kalan</p>
            <PlatformLogoRow compact />
            <div className="channel-cost"><span>Tahmini kanal maliyeti</span><b>-{money(result.ownedStoreFees)}</b></div>
          </article>
        </div>

        <div className="profit-advantage profit-advantage-elite" aria-live="polite">
          <span>Aynı ciroda tahmini aylık kanal avantajı</span>
          <strong>+{money(Math.max(0, result.advantage))}</strong>
          <small>Cironun yaklaşık %{Math.max(0, result.advantageRate).toFixed(0)}'i pazaryeri kanal maliyeti farkından işletmenizde kalabilir.</small>
        </div>

        <details className="profit-detail-panel">
          <summary>
            <span>Detaylı kârlılık hesabı</span>
            <small>Ürün · kargo · reklam · iade / diğer</small>
          </summary>
          <div className="profit-detail-body">
            <p className="profit-detail-note">Bu giderler iki satış modelinden de eşit düşülür. Böylece kanal avantajı şişirilmeden, her iki tarafta tahmini net katkıyı görebilirsiniz.</p>

            <div className="profit-detail-grid">
              <label className="profit-mini-field">
                <span><Package size={14} /> Ürün maliyeti</span>
                <strong>%{productCost}</strong>
                <input type="range" min="10" max="70" step="1" value={productCost} onChange={(event) => setProductCost(Number(event.target.value))} />
              </label>
              <label className="profit-mini-field">
                <span><Truck size={14} /> Kargo / lojistik</span>
                <strong>%{shippingCost}</strong>
                <input type="range" min="0" max="15" step="1" value={shippingCost} onChange={(event) => setShippingCost(Number(event.target.value))} />
              </label>
              <label className="profit-mini-field">
                <span><Megaphone size={14} /> Reklam / edinme</span>
                <strong>%{adCost}</strong>
                <input type="range" min="0" max="30" step="1" value={adCost} onChange={(event) => setAdCost(Number(event.target.value))} />
              </label>
              <label className="profit-mini-field">
                <span><RotateCcw size={14} /> İade + diğer</span>
                <strong>%{returnOtherCost}</strong>
                <input type="range" min="0" max="15" step="1" value={returnOtherCost} onChange={(event) => setReturnOtherCost(Number(event.target.value))} />
              </label>
            </div>

            <div className="profit-detail-summary" aria-live="polite">
              <div>
                <span>Ortak giderler</span>
                <strong>%{result.commonCostRate}</strong>
                <small>-{money(result.commonCosts)}</small>
              </div>
              <div>
                <span>Pazaryeri net katkı</span>
                <strong>{money(result.marketplaceNetContribution)}</strong>
                <small>Kanal + ortak giderler sonrası</small>
              </div>
              <div className="is-owned">
                <span>Kendi mağazanız net katkı</span>
                <strong>{money(result.ownedStoreNetContribution)}</strong>
                <small>Kanal + ortak giderler sonrası</small>
              </div>
            </div>
          </div>
        </details>

        <details className="profit-assumptions">
          <summary>Hesaplama varsayımları</summary>
          <p>Pazaryeri oranı; komisyon, hizmet ve işlem benzeri kanal kesintilerini tek oranda toplar. Kendi mağaza tarafında ödeme ve temel altyapı için örnek %4 oran kullanılır. Detaylı hesapta ürün, kargo, reklam ve iade/diğer giderleri iki kanala da aynı oranda uygulanır. Gerçek sonuçlar sözleşme, kategori, ödeme sağlayıcısı, vergi yapısı ve operasyon modeline göre değişebilir.</p>
        </details>

        <div className="calculator-foot">
          <span>Karşılaştırma finansal danışmanlık veya platform fiyat teklifi değildir; karar öncesi hızlı bir kanal maliyeti senaryosudur.</span>
          <a href="/iletisim?source=profit-lab" onClick={trackComplete}>Markanıza özel analiz <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
