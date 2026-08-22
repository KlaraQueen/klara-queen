import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { contactData } from "../../data/contactData";

const mail = contactData.email;

function Privacy() {
  return (
    <S.Page>
      <S.Inner>
        <S.Header>
          <S.Title>Polityka prywatności</S.Title>
          <S.Lead>
            Poniżej opisujemy, jak korzystamy z danych przy serwisie
            studioklara.pl i powiązanych usługach.
          </S.Lead>
        </S.Header>

        <S.Body>
          <h2>1. Administrator</h2>
          <p>
            Administratorem Twoich danych osobowych w rozumieniu RODO jest
            osoba prowadząca działalność pod marką{" "}
            <strong>Studio Klara Queen</strong> (zwana dalej „Administratorem”
            lub „my”). W sprawach dotyczących danych osobowych możesz
            skontaktować się z nami mailowo:{" "}
            <a href={`mailto:${mail}`}>{mail}</a>.
          </p>

          <h2>2. Dane, które zbieramy i skąd</h2>
          <p>
            <strong>Serwis wizytówkowy:</strong> przeglądanie strony
            (adres IP, identyfikatory urządzenia i przeglądarki, czas żądania,
            typ przeglądarki) mogą być rejestrowane także przez infrastrukturę
            hostingu i certyfikatu HTTPS — w zakresie niezbędnym do działania i
            zabezpieczenia witryny.
          </p>
          <p>
            <strong>
              Dane przechowywane lokalnie w przeglądarce („localStorage”):
            </strong>{" "}
            w stopce wyświetlany jest prosty licznik odwiedzin zapisywany w
            pamięci Twojej przeglądarki (np. wartość licznika i znacznik czasu
            sesji). Dane te pozostają na Twoim urządzeniu i służą wyłącznie do
            prezentacji licznika — nie są wysyłane do zewnętrznego narzędzia
            analitycznego w ramach niniejszej strony.
          </p>
          <p>
            <strong>Konto użytkownika (panel):</strong> jeśli założysz konto lub
            zalogujesz się (w tym przez Google), przetwarzamy dane potrzebne do
            uwierzytelnienia i obsługi konta, w szczególności identyfikator
            konta, adres e-mail oraz — jeśli podasz — imię i nazwisko/nazwa
            wyświetlana, dane profilu zapisane w bazie. Realizujemy to z
            wykorzystaniem usług <strong>Google Firebase</strong> (Firebase
            Authentication, Cloud Firestore, ewentualnie Firebase Storage dla
            zasobów publikowanych w serwisie).
          </p>
          <p>
            <strong>Kontakt e-mail:</strong> jeśli napiszesz do nas na podany
            adres, przetwarzamy treść wiadomości oraz metadane (np. adres
            nadawcy, data) w celu udzielenia odpowiedzi.
          </p>

          <h2>3. Cele i podstawy prawne</h2>
          <p>Dane przetwarzamy w celu:</p>
          <ul>
            <li>
              <strong>świadczenia usług drogą elektroniczną</strong> —
              wyświetlania strony, obsługi konta (art. 6 ust. 1 lit. b RODO);
            </li>
            <li>
              <strong>komunikacji</strong> — odpowiedzi na wiadomości (art. 6
              ust. 1 lit. b lub f RODO — uzasadniony interes kontaktu z osobami
              odwiedzającymi stronę);
            </li>
            <li>
              <strong>bezpieczeństwa</strong> oraz ewentualnej ochrony
              roszczeń — logi techniczne (art. 6 ust. 1 lit. f RODO —
              uzasadniony interes);
            </li>
            <li>
              spełnienia{' '}
              <strong>
                obowiązków prawnych, jeżeli na nas ciąży taki obowiązek
              </strong>{' '}
              (art. 6 ust. 1 lit. c RODO).
            </li>
          </ul>

          <h2>4. Odbiorcy danych</h2>
          <p>
            Dane mogą być powierzane dostawcom IT w zakresie niezbędnym do
            hostingu, certyfikatu SSL oraz usług Firebase (Google). Polityka
            prywatności Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
            . Warunki Firebase:{" "}
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              firebase.google.com/support/privacy
            </a>
            .
          </p>

          <h2>5. Okres przechowywania</h2>
          <p>
            Dane konta i treści w bazie przechowujemy przez czas posiadania
            konta i realizacji usługi, a następnie przez okres przedawnienia
            roszczeń lub wymagany przepisami, jeśli dotyczy. Wiadomości e-mail
            z korespondencji przetwarzamy przez czas potrzebny do obsługi
            sprawy, a w uzasadnionych przypadkach dłużej (np. archiwum
            korespondencji biznesowej).
          </p>

          <h2>6. Twoje prawa</h2>
          <p>Przysługuje Ci m.in. prawo do:</p>
          <ul>
            <li>dostępu do danych i kopii danych;</li>
            <li>sprostowania danych;</li>
            <li>usunięcia danych („prawo do bycia zapomnianym”) — w granicach prawa;</li>
            <li>ograniczenia przetwarzania;</li>
            <li>przenoszenia danych — gdy przetwarzanie jest zautomatyzowane i opiera się na zgodzie lub umowie;</li>
            <li>wniesienia sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie;</li>
            <li>cofnięcia zgody — gdy przetwarzanie na niej opieramy (wówczas nie wpływa to na zgodność z prawem przetwarzania przed cofnięciem).</li>
          </ul>
          <p>
            Skargę możesz złożyć do organu nadzorczego (w Polsce: Prezes Urzędu
            Ochrony Danych Osobowych,{" "}
            <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">
              uodo.gov.pl
            </a>
            ).
          </p>

          <h2>7. Pliki cookies i treści osadzone</h2>
          <p>
            Nie stosujemy w kodzie strony narzędzi typu Google Analytics ani
            piksela reklamowego w rozumieniu klasycznych skryptów śledzących
            marketingowych.{" "}
            <strong>Firebase</strong> może wykorzystywać mechanizmy
            przechowywania danych w przeglądarze (np. do utrzymania sesji
            logowania) — zgodnie z dokumentacją Google.
          </p>
          <p>
          </p>
          <p>
            Linki do serwisów zewnętrznych (np. media społecznościowe, sklep
            Allegro) prowadzą poza naszą witrynę — obowiązują tam odrębne
            polityki prywatności tych podmiotów.
          </p>

          <h2>8. Dobrowolność i wymóg podania danych</h2>
          <p>
            Podanie danych przy kontakcie e-mailowym jest dobrowolne, lecz
            potrzebne do odpowiedzi. Założenie konta wymaga podania danych
            wymaganych przez wybraną metodę logowania (np. e-mail od dostawcy
            tożsamości).
          </p>

          <h2>9. Zmiany</h2>
          <p>
            Politykę możemy zaktualizować; bieżąca wersja jest zawsze pod
            adresem studioklara.pl w tej podstronie. Zalecamy okresowe
            zapoznanie się z treścią.
          </p>

          <small>
            Ostatnia aktualizacja: maj {new Date().getFullYear()} r.
          </small>

          <p style={{ marginTop: "24px" }}>
            <Link to="/">← Powrót na stronę główną</Link>
          </p>
        </S.Body>
      </S.Inner>
    </S.Page>
  );
}

export default Privacy;
