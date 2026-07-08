"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const CENTER: [number, number] = [-8.2189295, 110.9836164];

export default function MapLeaflet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef      = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let mounted = true;

    (async () => {
      const L = (await import("leaflet")).default;

      if (!mounted || !containerRef.current) return;

      // Fix marker icon paths (webpack breaks default paths)
      L.Icon.Default.mergeOptions({
        iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(containerRef.current, {
        center: CENTER,
        zoom: 15,
        scrollWheelZoom: false,
        zoomControl: false,
      });

      mapRef.current = map;

      // Zoom control di kanan bawah
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Tile: CartoDB Positron — bersih, kontras baik
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map);

      // Marker custom — warna primary green
      const pinIcon = L.divIcon({
        className: "",
        html: `<div style="
          width:28px;height:36px;
          background:linear-gradient(135deg,#15803d,#16a34a);
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          border:3px solid white;
          box-shadow:0 2px 8px rgba(0,0,0,.35);
        "></div>`,
        iconSize: [28, 36],
        iconAnchor: [14, 36],
        popupAnchor: [0, -38],
      });

      L.marker(CENTER, { icon: pinIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:sans-serif;font-size:13px;line-height:1.5">
            <strong>Dusun Karangnongko</strong><br>
            <span style="color:#6b7280">Desa Watukarung, Pringkuku<br>Kabupaten Pacitan</span>
          </div>`,
          { maxWidth: 220 }
        )
        .openPopup();

      // Fetch boundary polygon dari Nominatim (OpenStreetMap)
      try {
        const res = await fetch(
          "https://nominatim.openstreetmap.org/search" +
            "?q=Karangnongko%2C+Watukarung%2C+Pringkuku%2C+Pacitan%2C+Indonesia" +
            "&polygon_geojson=1&format=json&limit=5",
          { headers: { "Accept-Language": "id" } }
        );
        const results: Array<{
          geojson?: { type: string; coordinates: unknown };
          display_name?: string;
        }> = await res.json();

        if (!mounted) return;

        // Ambil hasil pertama yang punya polygon
        const hit = results.find(
          (r) =>
            r.geojson &&
            (r.geojson.type === "Polygon" || r.geojson.type === "MultiPolygon")
        );

        if (hit?.geojson) {
          const poly = L.geoJSON(hit.geojson as Parameters<typeof L.geoJSON>[0], {
            style: {
              color:       "#15803d",
              weight:      2.5,
              opacity:     0.85,
              dashArray:   "7 5",
              fillColor:   "#22c55e",
              fillOpacity: 0.10,
            },
          }).addTo(map);

          // Sesuaikan viewport ke boundary
          map.fitBounds(poly.getBounds(), { padding: [48, 48] });
        }
      } catch {
        // Nominatim gagal → peta tetap tampil di koordinat utama
      }
    })();

    return () => {
      mounted = false;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
