# Implementimi i Google Sign-In

## 🔐 Veçoria e Identifikimit me Google

Kjo veçori shton mundësinë e identifikimit me Google OAuth në aplikacionin ekzistues të Task Manager.

## 🛠️ Detajet e Implementimit

### Skedarët e Shtuar/Modifikuar:

- **`hooks/useGoogleAuth.js`** - Hook personalizuar React që merret me rrjedhën e plotë të OAuth me Google
- **`firebase.js`** - Konfigurimi i përditësuar i Firebase me persistencë identifikimi
- **`login.jsx`** - Integrimi i butonit të Google Sign-In dhe trajtimit të gabimeve
- **`register.jsx`** - Shtimi i opsionit të Google Sign-Up

### Konfigurimi në Google Cloud Console:

1. **Konfigurimi i OAuth 2.0 Client**:
   - Krijimi i ID-së së klientit për aplikacion web
   - Konfigurimi i URI-të të ridrejtimit të autorizuara:
     - `https://auth.expo.io`
     - `http://localhost:8081` (gjate zhvillimit)
     - `https://auth.expo.io/@leartbalidemaj/week-3-1a`

2. **Identifikimi në Firebase**:
   - Aktivizimi i metodës së identifikimit me Google në Firebase Console
   - Konfigurimi i ID-së së klientit OAuth në projektin Firebase
  

### Rrjedha e Identifikimit:

1. Përdoruesi shtyp "Identifikohu me Google"
2. Expo Auth Session merret me rrjedhën e OAuth
3. Google kthen ID token
4. Firebase krijon kredencialet dhe identifikon përdoruesin
5. Përdoruesi ridrejtohet automatikisht në aplikacionin kryesor

- URI-të e sakta të ridrejtimit të regjistruara në Google Cloud Console

## ⚙️ Konfigurimi

Implementimi përdor `useIdTokenAuthRequest` nga Expo Auth Session për shkëmbim të besueshëm të token-it dhe menaxhim automatik të URI-ve të ridrejtimit.
