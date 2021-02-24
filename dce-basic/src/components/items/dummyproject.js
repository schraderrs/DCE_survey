const dummyProject = {
  details: [
    {
      title: "Elfstedentocht Demo",
      info:
        "Het elfstedentocht zal door verschillende dorpen gaan. Hiervoor zijn er een aantal scenario's opgesteld waar u wat over mag zeggen.",
    },
  ],
  questions: [
    "Hoe groot is de kans dat de app een contact met een besmet persoon mist?",
    "Hoe groot is de kans dat de app onterecht aangeeft dat u contact had met een besmet persoon?",
    "Wie krijgt er een melding als blijkt dat u in contact bent geweest met een besmet persoon?",
    "Hoe snel kunt u zich laten testen op corona als u een melding krijgt dat u in contact bent geweest met een besmet persoon?",
    "Wat doet de overheid om het gebruik van de app te stimuleren of om vrijwilligheid daarvan te garanderen?",
    "Hoeveel sterftegevallen worden voorkomen door de app?",
    "Hoeveel minder huishoudens komen er langdurig in de financiële problemen door de app?",
    "Wanneer houdt het bijhouden van de contacten weer op?",
  ],
  scenarios: [
    {
      title: "Geen verandering",
      body: [
        "100 van 100 contacten met een bemet persoon worden niet opgemerkt.",
        "Geen meldingen",
        "Geen meldingen",
        "U kunt zicht na 30 dagen testen",
        "-",
        "8000",
        "0",
        "-",
      ],
    },
    {
      title: "Scenario A",
      body: [
        "15 van 100 contacten met een bemet persoon worden niet opgemerkt.",
        "15 van 100 meldingen zijn onterecht.",
        "U krijgt een melding, met een advies om 14 dagen in quarantaine te gaan.",
        "U kunt zich na 10 dagen laten testen",
        "Winkels (en later horecazaken, bioscopen en culturele instellingen) mogen zelf bepalen of ze alleen klanten toelaten die de app hebben geïnstalleerd.",
        "1000",
        "250 000",
        "De overheid bekijkt gaandeweg wanneer het mogelijk is om het bijhouden van de contacten via de app stop te zetten.",
      ],
    },
    {
      title: "Scenario B",
      body: [
        "15 van 100 contacten met een bemet persoon worden niet opgemerkt.",
        "10 van 100 meldingen zijn onterecht.",
        "U krijgt een melding, met een advies om 14 dagen in quarantaine te gaan.",
        "U kunt zich na 5 dagen laten testen",
        "Winkels (en later horecazaken, bioscopen en culturele instellingen) mogen zelf bepalen of ze alleen klanten toelaten die de app hebben geïnstalleerd.",
        "1000",
        "50 000",
        "De overheid bekijkt gaandeweg wanneer het mogelijk is om het bijhouden van de contacten via de app stop te zetten.",
      ],
    },
  ],
};

export default dummyProject 