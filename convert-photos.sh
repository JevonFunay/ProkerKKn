#!/bin/bash
# Jalankan setelah upload foto baru ke folder public/
# Usage: ./convert-photos.sh

PROFILE='/System/Library/ColorSync/Profiles/sRGB Profile.icc'
PUBLIC="$(dirname "$0")/public"

for f in "$PUBLIC"/*.jpg "$PUBLIC"/*.jpeg "$PUBLIC"/*.JPG "$PUBLIC"/*.JPEG; do
  [ -f "$f" ] && sips -m "$PROFILE" "$f" --out "$f" 2>/dev/null && echo "✓ $(basename "$f")"
done

echo "Selesai — semua foto sudah di-convert ke sRGB."
