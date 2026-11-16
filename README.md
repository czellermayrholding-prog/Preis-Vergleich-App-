# Mein Wochenmarkt · Smart Pricing

Web-App zum Verwalten der Verkaufspreise aus Foodware, mit Einkaufspreisen und Margen.
Läuft komplett im Browser: kein Server und keine Installation. Die Daten bleiben auf dem Gerät (localStorage).

## Funktionen
- **Foodware-Export importieren**: 7 Spalten ohne Kopfzeile, Semikolon, Windows-1252, Dezimalkomma. Fehlerhafte Dateien werden komplett abgelehnt, es wird dann nichts verändert.
- **Verkaufspreis ändern**: Die Änderung bleibt als „Änderung offen“ markiert, bis ein neuer Foodware-Export den Preis bestätigt.
- **Einkaufspreis netto und Lieferant erfassen**: Die Marge wird sofort berechnet: (Netto-VK − Netto-EK) ÷ Netto-VK.
  Farben: ab 50 % hellgrün, ab 40 % dunkelgrün, ab 30 % orange, darunter rot.
- **Preisvorschläge**: Verkaufspreis für 30 / 40 / 50 % Marge mit einem Tipp übernehmen.
- **Rechnungen hochladen**: PDF-Rechnungen werden auf dem Gerät gelesen, Positionen deinen Artikeln zugeordnet und nach deiner Prüfung als Einkaufspreise übernommen, mit Umrechnung je Kiste ÷ Inhalt. Zuordnungen merkt sich die App. Fotos und eingescannte PDFs liest nur die KI in der claude.ai-Version.
- **Suche, Filter** (Margenfarbe, offene Änderungen, Einheit) und Sortierung per Klick auf den Spaltenkopf.
- **Test-CSV-Export** im exakten Foodware-Format: alle Artikel oder nur die Änderungen. Texte bleiben byte-genau wie im Original, nur die Preise ändern sich.
- **Verlauf** aller Preisänderungen und Importe.
- **Backup** als JSON-Datei, zum Sichern oder zum Übertragen zwischen PC und iPhone.
- Auf dem iPhone über „Teilen → Zum Home-Bildschirm“ wie eine App nutzbar, auch offline.

## Ablauf mit Foodware
1. In Foodware den Artikel-Export erstellen und in der App importieren.
2. Preise und Einkaufspreise bearbeiten.
3. „Test-CSV exportieren“ und in Foodware importieren. Beim ersten Mal nur mit einem einzelnen Testartikel und nach einer Foodware-Sicherung, weil das Importformat von Foodware noch nicht verifiziert ist.
4. Einen neuen Foodware-Export erstellen und in der App importieren. Bestätigte Änderungen werden automatisch abgehakt.

## Starten
- Online über GitHub Pages: Settings → Pages → „Deploy from a branch“, Branch `main`, Ordner `/ (root)`. Danach läuft die App unter `https://czellermayrholding-prog.github.io/Preis-Vergleich-App-/`.
- Lokal: `index.html` doppelt anklicken. Das funktioniert auch ohne Server, nur ohne Offline-Modus.

## Grenzen (bewusst)
- Kein Abgleich zwischen Geräten: PC und iPhone haben jeweils eigene Daten. Zum Übertragen das Backup nutzen.
- Keine automatische Rückschreibung in Foodware. Der Lieferantenvergleich ist als „kommt bald“ markiert. Der PDF-Leser wird beim ersten Mal aus dem Internet geladen (cdnjs), danach geht er auch offline.
- Browserdaten können verloren gehen, wenn sie gelöscht werden. Darum regelmäßig ein Backup speichern.
