# Zadanie rekrutacyjne

## [🔗 LIVE DEMO ON NETLIFY](https://66931069997015a7c28c6040--dulcet-tulumba-08731f.netlify.app/)

## WYKONANE ZADANIA

### CELE GŁÓWNE

- [x] Pocięta strona ma wypełniać całe okno przeglądarki (nie zamykać contentu w kontenerze o stałej szerokości). Przy reponsywności możesz zastosować dowolne breakpointy, samemu uznaj jak będzie najlepiej.

- [x] Header powinien być na stałe przyklejony do topu, Logo HTML5 w headerze powinno linkować do '/' .

- [x] Stopka strony w przypadku małej ilości treści w contencie powinna i tak być na samym dole strony a nie 'doklejać' się pod contentem.

- [x] W bloku pierwszym są radiobuttony, ich wybór a następnie kliknięcie przycisku w bloku drugim wykona akcję podmiany lub doklejenia tekstu w bloku ostatnim. Treści które mają zostać użyte należy pobrać z JSONa (szczegóły niżej). Opcja pierwsza wybierze zawsze treść pierwszą, opcja druga drugą a opcja losowa dowolną z pozostałych. Każda osobna treść w ostatnim bloku powinna być objęta tagiem `<article>`. Doklejając treść należy uniknąć powielania już istniejącej treści (w przypadku użycia opcji losowej należy wylosować kolejną jeszcze nie użytą treść).

- [x] Button 'pokaż' w footerze po kliknięciu pokazuje ramkę (wysuwa ją spod footera) z 2 klikalnymi opcjami. Pierwsza przywraca stronę do początkowych ustawień, druga w headerze dokleja Twoje imię i nazwisko.

### PLIK JSON

- [x] Zbudować plik z tablicą przynajmniej 6 elementów zawierających dowolną treść. Wolno w JSONie trzymać dodatkowe dane jeżeli uprości to wykonanie zadania.

### WARUNKI

- [x] Nie używać bootstrapa/tailwinda ani innych podobnych frameworków.
- [x] Zastosować SCSS.
- [x] Poniżej 960px według uznania dokonać zmian w projekcie by jak najlepiej przedstawić stronę (najlepiej wykorzystać przykład projektu mobilnego).

### DODATKOWE PLUSY

- [x] Osadzenie całego zadania w jakimś JSowym frameworku (najlepiej Angular).
- [x] Brak plików graficznych w końcowym projekcie (brak plików typu jpg, gif, png, svg).
- [x] CSS IS AWESOME w footerze - po najechaniu myszką ramka (bez tekstu) powinna wykonać animowany obrót.
- [x] Zastosowanie BEM.
- [x] Spełnianie zasad a11y.
- [x] Logiczne wykorzystanie jednostek rem, em, vh, vw (w efekcie jak najmniejsze użycie jednostki px) - w taki sposób by w efekcie responsywność spełniona została jak najmniejszą ilością kodu.
- [x] Mobile first.
- [x] Doklejając treść sprawić by w ostatnim bloku treści były posortowane alfabetycznie.
- [x] Przy doklejaniu treści w przypadku niemożliwości spełnienia warunku by była unikalna wyświetlić stosowny komunikat (np. alert/dialog/modal).
- [x] Button w footerze ("pokaż") wysuwający ramkę bez użycia JSa.

  _Użyłem co prawda JSa żeby zareagować na kliknięcie, ale samo pojawienie się ramki jest spowodowane zmianą styli. Możliwe byłoby użycie np checkboxa i zmiana styli gdy jest "checked" ale myślę, że nie o to chodziło w tym zadaniu._

- [x] Rezultat prac wrzucić do podglądu na jakąś darmową platformę (np. netlify/heroku).

### ZADANIE NA 6

- [ ] Wykorzystać localStorage do załadowania treści z pliku i ich późniejszego przechowywania oraz napisać dodatkową funkcjonalność pozwalającą na zarządzanie nimi (dodawanie/edycja/usuwanie).
