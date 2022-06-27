# **User Story - Adminisztrátori szerepkör**


## **Tábortűz dalszövegkönyv - Campfire songbook app**
---
---
## _**1. Főoldal / előadói nézet**_
---

**1. agilis felhasználói történet:**
> _A főoldalon közvetlenül az előadók listája látható._

**Elfogadási kritérium:**  

Egy egyszerűsített listanézetben az alkalmazás kezdőoldalán megjelenik az összes, adatbázisban szereplő előadó, ABC sorrendben megjelenítve. Mindegyik név mellett számláló jelzi, hogy az adott előadóhoz hány bejegyzés tartozik.

---

**2. agilis felhasználói történet:**

> _Az adott előadót kiválasztva megjelenik az előadott dalok listája._

**Elfogadási kritérium:**

Az egyes előadókra kattintva egy másik nézet (egyszerű lista) megjeleníti az adott előadóhoz kapcsolódó dalok nevét ABC rendben.

---

**3. agilis felhasználói történet:**

>  _Az adott dalt kiválasztva (egy harmadik nézetben) megtekinthető a dal szövege._

**Elfogadási kritérium:**  
- Az egyes dalokra rákattintva új nézet jelenik meg, mely tartalmazza az adott elem részleteit, elsősorban a dalszöveget. A betűtípusnak monospace típusúnak kell lennie, hogy a később hozzáadásra kerülő akkordok karakterre pontosan a szöveg megfelelő részei felett helyezkedhessenek el.

---

**4. agilis felhasználói történet:**

> _Az egyszerű listák kereshetők_

**Elfogadási kritérium:**  
- Az egyszerű (gördülő konténerben) elhelyezett adatok fölött keresőmezők könnyítik meg a gyorskeresést.

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

> _A dalok műfaj szerint szűrhetőek._

**Elfogadási kritérium:**  
A műfaj (genre) kiválasztásával és a kulcsszó megadásával frissül a listaoldal, ahol már csak az adott műfaj(ok)hoz tartozó adatok láthatók.

---

**6. agilis felhasználói történet:**

> _Bármilyen egyéb kulcsszóra is lehet keresni függetlenül a műfajtól._

**Elfogadási kritérium:**  
Egy tetszőleges kulcsszó beírásával frissül a listaoldal, ahol minden olyan elem megjelenik, amelyiknek valamely tulajdonsága (részben) tartalmazza a kulcsszóval megadott értéket.

---

**7. agilis felhasználói történet:**

> _Az újonnan megadott adatok validációja automatikusan megtörténik._

**Elfogadási kritérium:**  
- Nem megfelelő formátum esetén egy snackbar-ban megjelenő üzenet figyelmeztet a helytelen kitöltésre és a nem, vagy nem megfelelően kitöltött mezők figyelemfelkeltő színűre váltanak.

---
---

## _**3. Egyéb (al)oldalak**_

Az alábbiak a következő lehetséges (al)oldalakra érvényesek:

**_Előadók_**

**_Albumok_**

**_Zeneszerzők_**

**_Szövegírók_**

---

**1. agilis felhasználói történet:**
> _Az adott aloldalon listanézetben láthatóak az elemek és azok attribútumai_

**Elfogadási kritérium:**  
- Az aloldal megjeleníti az összes előadót / albumot / zeneszerzőt / szövegírót / minden műfajt.
- A személyekről vezetett nyilvántartás tartalmazhat egyéb adatokat is, de a hozzárendelt dalok száma mindenképpen látható.
- Előadók esetében egy fotó linkje is megadható.
- Albumok esetében az albumborító képe link formájában megadható.

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

> _A dalokhoz nem kapcsolt elemek törölhetőek._

**Elfogadási kritérium:**  
- Az adott elem melletti törlés gombra kattintással törölhető az elem.
- Törölni azonban csak azokat az elemeket lehet, amelyekhez (már) nincs hozzárendelve egyetlen dal sem.
- A törlést követően frissül a listaoldal, a törölt elem onnan is eltávolításra kerül.

---
---

## _**4. Bejelentkezési felület**_
---

**1. agilis felhasználói történet:**
> _Az adminisztrációs felületre be lehet jelentkezni._

**Elfogadási kritérium:**  

- Felhasználói név és jelszó megadásával a felhasználó képes bejelentkezni az adminisztrációs felületre.

---
---

---

## **A projekt további adatai**

**Prioritás:**  
magas

**Megvalósítás időtartama:**  
4 hét

**Későbbi továbbfejlesztési lehetőségek:**  

- Az albumok és előadók esetében csak fotót tartalmazó kártyanézet elkészítése, illetve a belinkelt képek megjelenítése.
- Műsörfüzetek (azaz setlist-ek) létrehozásának lehetősége, ami dalok gyűjteményét, meghatározott sorrendű kollekcióját jelentené
- Akkordok kezelésének lehetősége
- Különböző szöveges formátumok támogatása, fájlból való importálás és fájlba történő exportálás végett

---
---

## **Linkek:**  

- [A dokumentáció és a telepítési útmutató itt érhető el.](./DOCUMENTATION.md)
