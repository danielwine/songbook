## **1. Az alkalmazás célja**

- Az alkalmazás feladata, hogy egy magyar nyelvű, örökzöld popzenei klasszikusokból álló dalszöveggyűjteményt és a hozzá kézzel hozzáadott metaadatokat kezelje és menedzselje.
A dalszövegek forrása a 90-es évek végén kézről kézre terjedt word dokumentum, a "Magyar Dalok.doc" (ennek mintegy felét tartalmazza a seeder - az akkordok egy későbbi változatban kerülnek bele).

## **2. Az alkalmazás telepítése**

- Forkolni kell az adott GitHub repository tartalmát: (https://github.com/danielwine/vizsgaremek)   
- Klónozzuk a célgépen a forkolt GitHub repository tartalmát: (git clone <forkolt_repository_URL-je>
- Telepítsük az alkalmazás függőségeit:
  - cd backend
  - npm install
  - cd ../frontend
  - npm install
- Ha még nincsen fenn a célgépen, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal (ha szükséges)

## **3. Az alkalmazás konfigurálása**

A /frontend/environments mappában állítsuk be az API-végpont elérési útvonalát: (ha szükséges)
  - _environment.ts_ állomány: http://127.0.0.1:3000/  
  - _environment.prod.ts_ állomány: http://localhost:3000/ 
        (szerverre való telepítéskor itt a domain nevet adjuk meg helyette)

## **4. Az alkalmazás indítása**

- Docker nélküli futtatáshoz
  - A terminálban adjuk ki az `ng build` parancsot
  - A /frontend/dist/frontend mappa tartalmát másoljuk a /backend/public mappába   
  - Lépjünk be a /backend mappába és adjuk ki az `npm start` parancsot
  - Az alkalmazás ezután a localhost:3000-es porton érhető el

- Docker-rel történő futtatáshoz:

A megadott Docker container indítása és inicializálása:
  - A Docker-nek és a docker-compose parancssori alkalmazásoknak vagy Windows-on a Docker Desktop-nak telepítve kell lenniük
  - A /backend mappába belépve a terminálban ki kell adni az `npm run docker` parancsot (windows-on vegyük ki a sudo-t a package.json megfelelő sorából)
  - Ha szükséges, a /frontend mappába belépve a terminálban az `npm start` paranccsal indítható a frontend

_Megjegyzés_:  
A belépéshez egy érvényes e-mail-cím és jelszó páros:

Felhasználó  | Jelszó
------------ | -------------
admin        | test1

## **5. A végpontok dokumentációja**

A végpontok a swagger segítségével leírtak, dokumentáltak
- Ez az alábbi URL-en érhető el: https://localhost:3000/api-docs

---

## **Linkek:**  

- a User Story-ra a README.md(./README.md)-ben olvasható
