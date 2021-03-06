# JourneyJournal
Grupowy Projekt Inżynierski

## Instalacja
```
[Node v6.10.2 with npm] (https://nodejs.org/en/blog/release/v6.10.2/)
```
```
[Angular] (https://angular.io/docs/ts/latest/cli-quickstart.html)
```
```
[Ionic] (npm install -g ionic)
```
```
[Cordova v7.0.1] (npm install -g cordova@7.0.1)
```
```
[MongoDB] (https://docs.mongodb.com/manual/installation/)
```
```
$ git clone git@github.com:kanonieer/JourneyJournal.git JourneyJournal
$ cd JourneyJournal/client
$ npm install
$ cd ../server
$ npm install
$ cd ../mobile
$ npm install
```

## Użycie
* Server
```
$ cd server
$ npm run start:dev
```
* Client
```
$ cd client
$ ng serve
```
* Ionic
```
$ cd mobile
$ ionic serve
```

> SERVER: localhost:8080 <br>
> CLIENT: localhost:4200 <br>
> MOBILE: localhost:8100

## Idea
Aplikacja mobilna "Journey Journal" zbiera informację (zdjęcia, trasę, przebieg) o przebytej przez użytkownika podróży. Przesyła informację na serwer. Dane o podróży pakuje w bazie danych, zdjęcia przechowuje na dysku cloudowym użytkownika. Strona webowa pozwala na przeglądanie podróży, dzielenie się linkami do galerii, udostępnianie zdjęć.

## Warstwy
1. Mobile - Ionic 3 + Angular 5 (Android)
2. Web - Angular 4 (Chrome, Mozilla, Safari, Opera)
3. Server - Node.js + Express
4. Hosting - Cloudinary
5. Baza danych - Mongo

## Widoki
1. Mobile:
    - niezarejestrowany (register):
        - rejestracja przez facebook / email
    - niezalogowany (login):
        - logowanie przez facebook / email
    - zalogowany:
        - journeys:
            - lista podróży usera (VirtualScroll)
            - możliwość wyszukania konkretnej podróży (Searchbar)
            - szybkie usuwanie oraz edycja wybranej podróży (ItemSliding)
            - dodanie nowej podróży (FabButton)
            - odświeżenie wszystkich podróży w razie błędu (Refresher)
            - menu (Side)
        - addJourney:
            - ustalenie tytułu
            - ustalenie okresu trwania podróży (start - end)
        - detailsJourney:
            - zdjęcia danej podróży (InfiniteScroll):
                - powiększenie po kliknięciu (Slides with lazy loading):
                    - edycja tytułu zdjęcia (AlertController)
                    - ustawienie zdjęcia jako tło wybranej podróży
                    - dodanie do ulubionych
                    - usunięcie zdjęcia
                - możliwość usunięcia po przytrzymaniu (AlertController)
            - dodanie nowego zdjęcia (FabButton):
                - aparat (Camera plugin)
                - biblioteka zdjęć w telefonie (ImagePicker plugin)
            - podręczne menu (PopoverController):
                - edycja podróży (ModalController)
                - usuwanie podróży (AlertController)
                - ustawienia (ModalController)
        - about:
            - krótka informacja na temat aplikacji
        - settings:
            - account:
                - zalogowany przez email:
                    - zmiana emaila
                    - zmiana hasła
                    - podpięcie / odpięcie konta facebook
                - zalogowany tylko przez facebook (brak konta email):
                    - podpięcie konta "lokalnego" (email)
            - GPS:
                - włączenie lokalizacji
                - zmiana trybu lokalizacji
            - images:
                - zmiana jakości zdjęć (aparat oraz biblioteka)
                - możliwość zapisywania zrobionych zdjęć dodatkowo na urządzeniu (biblioteka zdjęć)
            - usuwanie konta

2. Web:
    - niezarejestrowany:
        - rejestracja przez facebook / email
    - niezalogowany:
        - logowanie przez facebook / email
    - zalogowany:
        - journeys:
            - lista wszystkich podróży usera
            - journey:
                - tytuł
                - okres trwania, przebyte kilometry
                - czas trwania, liczba zdjęć
                - mapa
                - generowanie linku do galerii
                - możliwość wydruku (?)
                - zdjęcia:
                    - powiększenie (slider?)
                    - udostępnienie (facebook)
        - summary:
            - wyświetla podsumowanie wszystkich podróży usera
            - łączne przebyte kilometry
            - łączną liczbę zrobionych zdjęć
            - liczbę przebytych podróży
            - liczbę dni w podróży
            - itp
        - profile:
            - pozwala na zarządzanie kontem
            - pozwala na usunięcie konta
            - pozwala na dodanie dysku cloudowego
            - pozwala na zmianę dysku cloudowego
        - about:
            - krótkie info odnośnie projektu

## Budowa obiektów / klas
1. Zdjęcie (plik)

2. Etap
    - data rozpoczęcia
    - data zakończenia
    - nazwa

3. Zdjęcie (obiekt):
    - plik (1)
    - data utworzenia
    - miejsce (lon, lat)
    - etap (2)

4. Podróż:
    - data rozpoczęcia
    - data zakończenia
    - trasa
    - etapy (2) []
    - zdjęcia (3) []

5. User:
    - email + hasło / facebook
    - podróże (4) []
    - dysk []

## Hosting
1. Cloudinary
https://cloudinary.com