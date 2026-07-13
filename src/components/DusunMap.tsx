"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Koordinat Dusun Karangnongko (sama dengan embed Google Maps sebelumnya)
const CENTER: [number, number] = [-8.2189295, 110.9836164];

// Pin custom bergaya tema hijau situs
const pinIcon = L.divIcon({
  className: "",
  html: `
    <div style="position:relative;width:36px;height:44px;">
      <svg viewBox="0 0 24 24" width="36" height="44" fill="#15803d" stroke="#ffffff" stroke-width="1.2" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,0.35));">
        <path d="M12 0C7 0 3 4 3 9c0 6.5 9 15 9 15s9-8.5 9-15c0-5-4-9-9-9z"/>
        <circle cx="12" cy="9" r="3.5" fill="#ffffff" stroke="none"/>
      </svg>
    </div>`,
  iconSize: [36, 44],
  iconAnchor: [18, 44],
  popupAnchor: [0, -40],
});

export default function DusunMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: CENTER,
      zoom: 16,
      scrollWheelZoom: false, // biar scroll halaman tidak "nyangkut" di peta
    });
    mapRef.current = map;

    const satelit = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "Citra © Esri, Maxar, Earthstar Geographics",
        maxZoom: 19,
      }
    );

    const jalan = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    });

    satelit.addTo(map);
    L.control
      .layers({ Satelit: satelit, Jalan: jalan }, undefined, { position: "topright" })
      .addTo(map);

    L.marker(CENTER, { icon: pinIcon })
      .addTo(map)
      .bindPopup(
        `<div style="font-family:inherit;min-width:170px;">
          <strong style="font-size:13px;">Dusun Karangnongko</strong><br/>
          <span style="font-size:11px;color:#64748b;">Desa Watukarung, Kec. Pringkuku,<br/>Kab. Pacitan, Jawa Timur</span>
        </div>`
      )
      .openPopup();

    // Batas wilayah dusun dari GeoJSON (hasil mapping)
    fetch("/Karangnongko_Batas.geojson")
      .then((r) => r.json())
      .then((data) => {
        if (mapRef.current !== map) return; // komponen sudah di-unmount
        const batas = L.geoJSON(data, {
          style: {
            color: "#15803d",
            weight: 2.5,
            fillColor: "#22c55e",
            fillOpacity: 0.12,
          },
        }).addTo(map);
        batas.bindTooltip("Batas Dusun Karangnongko", { sticky: true });
        map.fitBounds(batas.getBounds(), { padding: [28, 28] });
      })
      .catch(() => {
        // jika file gagal dimuat, peta tetap tampil tanpa garis batas
      });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
