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
1. Mobile - Ionic 2 + Angular 2 (Android)
2. Web - Angular 2 (Chrome, Mozilla, Safari, Opera)
3. Server - Node.js + Express
4. Hosting - Cloudinary
5. Baza danych - Mongo

## Widoki
1. Mobile:
    - niezalogowany:
        - logowanie przez facebook / email
    - zalogowany:    
        - new journey:
            - tworzenie nowej podróży
            - ustalenie daty rozpoczęcia i zakończenia
        - undergoing journeys:
            - wyświetlenie listy trwającej / zaplanowanych podróży
        - archival journeys:
            - lista odbytych podróży
        - profile
            - zarządzanie kontem

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