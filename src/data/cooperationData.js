export const cooperationData = {
  hero: {
    title: "Współpraca",
    subtitle:
      "Prosty proces, pełna transparentność, gwarancja spokojnego snu. Oto, jak budujemy Twoją cyfrową przyszłość.",
  },
  steps: [
    {
      id: 1,
      number: "1",
      title: "Wybór Drogi i Start",
      content:
        "Współpracę zaczynamy od formalności, abyś mogła spać spokojnie. Masz dwie ścieżki:",
      options: [
        {
          label: "Bezpośrednio:",
          description:
            "Piszesz do nas e-mail, ustalamy szczegóły, przesyłamy dane do faktury (bez VAT) i po opłaceniu ruszamy z kopyta.",
        },
        {
          label: "Allegro:",
          description:
            "Kupujesz na aukcji, korzystasz z bezpiecznych płatności platformy i automatycznie trafiasz do kolejki realizacji.",
        },
      ],
      note: "Ważne: Przystępujemy do pracy natychmiast po zaksięgowaniu wpłaty lub otrzymaniu potwierdzenia z Allegro.",
    },
    {
      id: 2,
      number: "2",
      title: "Strategia i Materiały",
      content:
        "Nie musisz być techniczna. Przesyłamy Ci interaktywną ankietę, która poprowadzi Cię za rękę.",
      sections: [
        {
          label: "Twoje Zadanie:",
          description:
            "Wybierasz sekcje, które mają się pojawić (np. O nas, Portfolio, Cennik).",
        },
        {
          label: "Nasze Wsparcie:",
          description:
            "Jeśli nie masz tekstów – przygotujemy je. Jeśli brak Ci zdjęć – wygenerujemy unikalne grafiki AI.",
        },
        {
          label: "Domena:",
          description:
            "Podajesz 2-3 propozycje nazwy (np. twojanazwa.pl). My sprawdzamy dostępność i rejestrujemy tę wolną.",
        },
      ],
    },
    {
      id: 3,
      number: "3",
      title: "Realizacja: 48h Roboczych",
      content:
        "Tutaj dzieje się magia. Kodujemy Twoją stronę w czystym React.js.",
      details: [
        {
          label: "Czas:",
          description: "Standardowy czas realizacji to 48 godzin roboczych.",
        },
        {
          label: "Zasada Wypoczętego Eksperta:",
          description:
            "Liczymy tylko dni robocze (poniedziałek – piątek). Weekendy i święta to czas na regenerację, bo tylko wypoczęty programista gwarantuje kod bez błędów i design na najwyższym poziomie.",
        },
        {
          label: "Technologia:",
          description:
            "Konfigurujemy darmowy serwer (GitHub Pages) i spinamy wszystko z Twoją nową domeną.",
        },
      ],
    },
    {
      id: 4,
      number: "4",
      title: 'Przekazanie "Kluczy do Biznesu"',
      content: "Twoja strona ożywa. Ale na tym nie kończymy:",
      deliverables: [
        "Otrzymujesz od nas komplet haseł i dostępów do konta serwera i domeny.",
        "Dostajesz prostą instrukcję, co zrobić za rok, żeby przedłużyć domenę (koszt ok. 80 zł – bez naszych marż).",
        "Strona jest Twoją własnością na zawsze. Możesz ją rozwijać, przenosić i modyfikować bez żadnych ograniczeń.",
      ],
    },
  ],
  guarantee: {
    title: 'Pakiet "Spokojna Głowa"',
    subtitle: "Twoja Gwarancja",
    description:
      "Wiemy, że biznes się zmienia. Numer telefonu może ulec zmianie, cennik może podskoczyć. Dlatego nasza współpraca nie kończy się na oddaniu strony:",
    benefits: [
      {
        icon: "3x",
        title: "3 Lata Opieki",
        description:
          "Masz u nas 3 darmowe pakiety poprawek do wykorzystania przez 36 miesięcy.",
      },
      {
        icon: "⚡",
        title: "Błyskawiczny Serwis",
        description:
          "Potrzebujesz zmiany? Piszesz e-mail, a my wprowadzamy poprawkę w kodzie.",
      },
      {
        icon: "💰",
        title: "Uczciwe Stawki",
        description:
          "Po wykorzystaniu darmowych pakietów, drobne zmiany to koszt rzędu 10-50 zł. Bez abonamentów, bez naciągania.",
      },
    ],
  },
  materials: {
    title: "Jak Przygotować Materiały?",
    subtitle: "Twoja Checklista",
    intro:
      "Nie musisz być copywriterem ani fotografem. Nasza strona jest elastyczna – dopasuje się do tego, co masz. Jeśli brakuje Ci jakiejś sekcji (np. cennika czy zespołu), po prostu ją ukryjemy, a layout nadal będzie wyglądał perfekcyjnie.",
    sections: [
      {
        icon: "📋",
        title: "Co Warto Przygotować?",
        items: [
          {
            label: "Fundament (Hero & Domena)",
            points: [
              "Wymyśl chwytliwe hasło (np. 'Twoje wspomnienia w najlepszym świetle').",
              "Podaj 2-3 propozycje adresu strony (np. mojafirma.pl). Pamiętaj: krótko i łatwo do podyktowania. Unikaj nazw zastrzeżonych marek!",
            ],
          },
          {
            label: "Tożsamość (O nas & Zespół)",
            points: [
              "Napisz kilka zdań o swojej pasji i tym, co Cię wyróżnia.",
              "Pokaż 'ludzką twarz' biznesu – prześlij zdjęcie przy pracy. Klienci kupują oczami, ale ufają ludziom, których widzą.",
            ],
          },
          {
            label: "Twoje Sukcesy (Statystyki & Portfolio)",
            points: [
              "Pochwal się liczbami (lata pracy, zadowoleni klienci) lub kluczowymi zaletami.",
              "Wybierz do 12 najlepszych zdjęć do galerii. Dzielimy je na kategorie (np. Biznes, Sesje, Projekty).",
            ],
          },
          {
            label: "Konkrety (Usługi & Cennik)",
            points: [
              "Opisz krótko do 10 usług.",
              "Podaj ceny lub pakiety. Jeśli wyceniasz indywidualnie – napiszemy o tym!",
            ],
          },
          {
            label: "Kontakt & Social Media",
            points: [
              "Przygotuj e-mail, telefon i linki do profili (Instagram, Facebook, TikTok itd.).",
              "Sprawimy, że klient skontaktuje się z Tobą jednym kliknięciem.",
            ],
          },
        ],
      },
      {
        icon: "💎",
        title: "Nasze Wsparcie Kreatywne",
        highlight: true,
        items: [
          {
            label: "Teksty",
            points: [
              "Na podstawie krótkiej ankiety ubierzemy Twoje myśli w profesjonalne słowa.",
            ],
          },
          {
            label: "Grafiki AI",
            points: [
              "Jeśli nie masz własnych fotografii do tła lub sekcji 'O nas', wygenerujemy dla Ciebie unikalne, wysokiej jakości grafiki AI.",
            ],
          },
        ],
      },
      {
        icon: "⚠️",
        title: "Ważne Informacje Techniczne",
        items: [
          {
            label: "Szybkość Ponad Wszystko",
            points: [
              "Limity zdjęć (np. do 12 w galerii) stosujemy celowo. Dzięki temu Twoja strona ładuje się błyskawicznie na każdym smartfonie. W sieci: mniej znaczy więcej!",
            ],
          },
          {
            label: "Elastyczność",
            points: [
              "Niezależnie od tego, czy wybierzesz 5, czy 10 sekcji, my zadbamy o zachowanie idealnych proporcji i estetyki.",
            ],
          },
          {
            label: "48h Roboczych",
            points: [
              "Nasz zegar rusza, gdy otrzymamy od Ciebie komplet materiałów. Pracujemy w dni robocze, aby dostarczyć Ci kod najwyższej jakości.",
            ],
          },
        ],
      },
    ],
  },
  cta: {
    primary: "Zacznij Współpracę",
    secondary: "Wróć do Pytań",
  },
};
