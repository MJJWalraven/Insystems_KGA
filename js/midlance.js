window.Midlance = {
    "bijdrageGezamelijkeKosten": 1500,
    "vakantiegeldEnSocialeLasten":0.1,
    "werkgeverskosten":600,
    "werknemersverzekeringen":100,
    "nbpercentage":5,
    "initialize":function() {
        window.Midlance.basisSalaris = 3000;
        window.Midlance.urenPerWeek = 40;
        window.Midlance.uurtarief = 90;
        window.Midlance.nietWerkbareDagen = 20;
        window.Midlance.pensioenDeelname = false;
        window.Midlance.leaseAuto = false;
        window.Midlance.laptop = false;
        window.Midlance.telefoon = false;
        setTimeout(function(){window.Midlance.heartbeat();}, 2000);
    },
    "heartbeat":function() {
        setTimeout(function(){window.Midlance.heartbeat();}, 2000);
        window.Midlance.werkbareUrenPerJaar = (255 - window.Midlance.nietWerkbareDagen) * 8 * (window.Midlance.urenPerWeek/40);
        window.Midlance.nietWerkbareDagenGecorrigeerd = window.Midlance.nietWerkbareDagen * (window.Midlance.urenPerWeek/40);
        if(window.Midlance.nietWerkbareDagenGecorrigeerd < 20) {
            window.Midlance.nietWerkbareDagenGecorrigeerd = 20;
        }
        window.Midlance.bonusPercentage = 75 - ((window.Midlance.basisSalaris - 3000) * 0.015);
        window.Midlance.parttimeFactor = window.Midlance.urenPerWeek/40;
        window.Midlance.persoonlijkeKosten = (12+(12*window.Midlance.vakantiegeldEnSocialeLasten)) * window.Midlance.basisSalaris * window.Midlance.parttimeFactor + 12 * (window.Midlance.bijdrageGezamelijkeKosten + window.Midlance.werkgeverskosten + window.Midlance.werknemersverzekeringen);
        if(window.Midlance.pensioenDeelname) {
            window.Midlance.persoonlijkeKosten = window.Midlance.persoonlijkeKosten + 2000;
        }
        if(window.Midlance.leaseAuto) {
            window.Midlance.persoonlijkeKosten = window.Midlance.persoonlijkeKosten + 12000;
        }
        if(window.Midlance.laptop) {
            window.Midlance.persoonlijkeKosten = window.Midlance.persoonlijkeKosten + 480;
        }
        if(window.Midlance.telefoon) {
            window.Midlance.persoonlijkeKosten = window.Midlance.persoonlijkeKosten + 480;
        }
        window.Midlance.persoonlijkeOmzet = window.Midlance.werkbareUrenPerJaar * window.Midlance.uurtarief;
        window.Midlance.persoonlijkResultaatBovenkant = window.Midlance.persoonlijkeOmzet - window.Midlance.persoonlijkeKosten;
        window.Midlance.persoonlijkResultaatOnderkant = ((1-(window.Midlance.nbpercentage/100)) * window.Midlance.persoonlijkeOmzet) - window.Midlance.persoonlijkeKosten;
        window.Midlance.jaarinkomenVan = (12.96 * window.Midlance.basisSalaris * window.Midlance.parttimeFactor) + (window.Midlance.persoonlijkResultaatOnderkant * (window.Midlance.bonusPercentage/100));
        window.Midlance.jaarinkomenTot = (12.96 * window.Midlance.basisSalaris * window.Midlance.parttimeFactor) + (window.Midlance.persoonlijkResultaatBovenkant * (window.Midlance.bonusPercentage/100));
    }
};
if(define) {
    define("Midlance", [], function() {
      Midlance.initialize();
      return Midlance;
    });
}