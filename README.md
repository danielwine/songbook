# **User Story - Adminisztrátori szerepkör**


## **Tábortűz dalszövegkönyv - Campfire songbook app**
---
---
## _**1. Főoldal / előadói nézet**_
---

**1. agilis felhasználói történet:**
> _A főoldalon közvetlenül az előadók listája látható._

**Elfogadási kritérium:**  

Egy reszponzív, mobilra optimalizált listanézetben az alkalmazás kezdőoldalán megjelenik az összes, adatbázisban szereplő előadó, ABC sorrendben megjelenítve. Mindegyik név mellett számláló jelzi, hogy az adott előadóhoz hány bejegyzés tartozik.

---

**2. agilis felhasználói történet:**

> _Az adott előadót kiválasztva megjelenik az előadott dalok listája._

**Elfogadási kritérium:**

Az egyes előadókra kattintva egy új nézet megjeleníti az adott előadóhoz kapcsolódó dalok nevét ABC rendben, azok fontosabb adataival (legalább az album és a műfaj tulajdonságokkal) együtt.

---
---
## _**2. A dalok összesített listája**_
---

**1. agilis felhasználói történet:**

> _Minden adatbázisban tárolt dal összesített formában, ömlesztve is áttekinthető és szerkeszthető._

**Elfogadási kritérium:**

A dalok ikonra / menüpontra kattintáskor megjelenik a dalok összesített nézete. A dalok attribútumai, tulajdonságai a következők:
az előadó neve, az album neve, amin az adott dal szerepel, az első megjelenés éve, a zeneszerző(k) neve(i), a szövegíró(k) neve(i), a műfaj megnevezése és opcionálisan a dal hossza.

---

**2. agilis felhasználói történet:**

> _Új dalok adhatóak hozzá a számlistához._

**Elfogadási kritérium:**  
- A fentebb meghatározott alapadatok rögzítésével lehetőség van új dallal bővíteni az adatbázist. Ez új párbeszédablak megjelenésével történik. A hozzáadást követően a lista automatikusan frissül, miután az adatbázisban rögzültek az új dal adatai és a párbeszédablak eltűnik.

---

**3. agilis felhasználói történet:**

> _A dal tulajdonságai módosíthatóak._

**Elfogadási kritérium:**  
- Az adott dal szerkesztés ikonjára kattintva megjelenik a szerkesztőfelület párbeszédablaka. Itt lehetőség van módosítani az adott dal egyes attribútumain. A változtatásokat az adatbázis letárolja és ez az esemény automatikusan a lista frissülését és a párbeszédablak eltűnését eredményezi.

---

**4. agilis felhasználói történet:**

> _Bármelyik dal törölhető._

**Elfogadási kritérium:**  
- Az adott melletti törlés gombra kattintással törölhető az elem.
- A törlést követően frissül a listaoldal, a törölt elem onnan is eltávolításra kerül.

---

**5. agilis felhasználói történet:**

> _A dalok műfaj szerint listázhatók._

**Elfogadási kritérium:**  
A műfaj (genre) kiválasztásával újratöldődik a listaoldal, ahol már csak az adott műfaj(ok)hoz tartozó adatok láthatók.

---

**6. agilis felhasználói történet:**

> _Bármilyen egyéb kulcsszóra is lehet keresni függetlenül a műfajtól._

**Elfogadási kritérium:**  
A kulcsszó beírásával frissül a listaoldal, ahol már csak az adott kulcsszónak megfelelő adatok jelennek meg.

---

**7. agilis felhasználói történet:**

> _A dalok tulajdonságai alapján sorrendbe rendezhetőek az adatok._

**Elfogadási kritérium:**  
- A megjelenési év és a dalhossz tulajdonságok numerikusan növekvő vagy csökkenő sorrendben rendezhetőek.
- Az előadó neve, albumcím, zeneszerző, szövegíró, műfaj tulajdonságok ABC szerinti és fordított sorrendben rendezhetőek.

---

**8. agilis felhasználói történet:**

> _Az újonnan megadott adatok validációja automatikusan megtörténik._

**Elfogadási kritérium:**  
- Nem megfelelő formátum esetén a beviteli mező alatt hibaüzenet jelenik meg.
- Az üzenet leírja a helyes, szabványos formátumot.

---
---
## _**3. A dalszöveg nézet**_
---

**1. agilis felhasználói történet:**

>  _Az adott dalt kiválasztva megtekinthető a dal szövege._

**Elfogadási kritérium:**  
- Az egyes dalokra rákattintva új nézet jelenik meg, mely tartalmazza az adott elem részleteit, elsősorban a dalszöveget.

---

**2. agilis felhasználói történet:**

> _A dalszöveg szerkeszthető._

**Elfogadási kritérium:**  
- A szerkesztést jelölő ikonra kattintva a dalszöveg módosíthatóvá válik
- A regisztrált felhasználó számára lehetséges az így végrehajtott módosítások mentése perzisztens módon a mentés ikonra kattintással.

---
---

## _**4. Egyéb (al)oldalak**_

Az alábbiak a következő lehetséges (al)oldalakra érvényesek:

**_Előadók_**

**_Albumok_**

**_Zeneszerzők_**

**_Szövegírók_**

**_Műfajok_**

---

**1. agilis felhasználói történet:**
> _Az adott aloldalon listanézetben láthatóak az elemek és azok attribútumai_

**Elfogadási kritérium:**  
- Az aloldal megjeleníti az összes előadót / albumot / zeneszerzőt / szövegírót / minden műfajt.
- Míg a műfajlista egyszerű felsorolás, addig a személyekről vezetett nyilvántartás tartalmaz egyéb adatokat is (esetleg születési év, milyen zenekarhoz, előadóhoz köthető, stb.).
- Előadók esetében kisméretű borítókép is látható
- Albumok esetében kisméretű borítókép is látható a megjelenési év kötelezően megadandó adata mellett.

---

**2. agilis felhasználói történet:**

> _Új elem és azok tulajdonságai adhatóak hozzá._

**Elfogadási kritérium:**  
- Új elemet egy párbeszédpanelben a fentiekben meghatározott adatok megadásával lehet hozzáadni, a változtatás azonnal láthatóvá válik az automatikusan frissült listában. 
- A párbeszédpanel a rögzítést követően eltűnik.

---

**3. agilis felhasználói történet:**

> _Az elemek tulajdonságait szerkeszteni lehet._

**Elfogadási kritérium:**  
- Az adott elem szerkesztés ikonjára kattintva megjelenik a szerkesztőfelület párbeszédablaka. Itt lehetőség van módosítani az adott elem egyes attribútumain. A változtatásokat az adatbázis letárolja és ez az esemény automatikusan a lista frissülését és a párbeszédablak eltűnését eredményezi.

---

**4. agilis felhasználói történet:**

> _Az elem törölhető._

**Elfogadási kritérium:**  
- Az adott elem melletti törlés gombra kattintással törölhető az elem.
- A törlést követően frissül a listaoldal, a törölt elem onnan is eltávolításra kerül.

---
---

## _**4. Bejelentkezési felület**_
---

**1. agilis felhasználói történet:**
> _Az adminisztrációs felületre be lehet jelentkezni._

**Elfogadási kritérium:**  

- Felhasználói név és jelszó megadásával a felhasználó képes bejelentkezni az adminisztrációs felületre.
- Felhasználó fiókkal nem rendelkező látogatóknak a rendszer felkínálja a regisztráció lehetőségét.

---
---

---

## **A projekt további adatai**

**Prioritás:**  
magas

**Megvalósítás időtartama:**  
4 hét

**Későbbi továbbfejlesztési lehetőségek:**  

- Az albumok és előadók esetében csak fotót tartalmazó kártyanézet elkészítése
- Műsörfüzetek (azaz setlist-ek) létrehozásának lehetősége, ami dalok gyűjteményét, meghatározott sorrendű kollekcióját jelentené
- Akkordok kezelésének lehetősége
- Különböző szöveges formátumok támogatása, fájlból való importálás és fájlba történő exportálás végett

---
---

## **Linkek:**  

- [A dokumentáció itt lesz érhető el.]()

- [A kiegészítő anyagok itt lesznek elérhetők.]()
