import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function RegulaminPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-background">
        <h1 className="text-3xl font-bold mb-8">Regulamin Świadczenia Usług</h1>
        
        <div className="space-y-6 text-background/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-background">§1 Postanowienia ogólne</h2>
            <p>1. Niniejszy regulamin określa zasady korzystania z siłowni POWERHUB oraz zakupu karnetów dostępu poprzez aplikację mobilną i stronę internetową.</p>
            <p>2. Operatorem siłowni i sprzedawcą jest firma <strong>Studio Sprawności i Zdrowia Jerzy Pacer</strong> z siedzibą: <strong>Skomielna Biała 888, 32-434</strong>, NIP: <strong>6812116894</strong>, zwana dalej "Operatorem".</p>
            <p>3. Kontakt z Operatorem jest możliwy pod adresem e-mail: <strong>pacerjerzy@gmail.com</strong> lub numerem telefonu: <strong>+48 795 767 621</strong>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-background">§2 Zasady zakupu karnetów i płatności</h2>
            <p>1. Płatności za karnety obsługiwane są przez zewnętrznego operatora płatności (np. PayU, BLIK, karty płatnicze).</p>
            <p>2. Ceny karnetów podane są w polskiej walucie (PLN) i zawierają podatek VAT.</p>
            <p>3. Zakupiony karnet ma formę cyfrową i przypisywany jest automatycznie do konta Użytkownika w aplikacji bezpośrednio po potwierdzeniu płatności.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-background">§3 Realizacja usługi i dostawa</h2>
            <p>1. Usługa (dostęp do siłowni 24/7) ma charakter cyfrowy. Otwieranie drzwi odbywa się za pomocą aplikacji na smartfonie z użyciem technologii Bluetooth/WiFi.</p>
            <p>2. Dostęp do obiektu aktywowany jest natychmiast po zaksięgowaniu płatności za karnet.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-background">§4 Odstąpienie od umowy i zwroty</h2>
            <p>1. Zgodnie z ustawą o prawach konsumenta, Konsumentowi przysługuje prawo do odstąpienia od umowy zawartej na odległość w terminie 14 dni bez podania przyczyny.</p>
            <p><strong>2. UWAGA: Ze względu na to, że usługa (dostęp do siłowni) jest udostępniana i aktywowana natychmiast po opłaceniu (treść cyfrowa/usługa rozpoczęta za wyraźną zgodą), Konsument wyrażając zgodę na natychmiastowe rozpoczęcie świadczenia usługi, traci prawo do odstąpienia od umowy.</strong></p>
            <p>3. W przypadku problemów technicznych z aplikacją lub zamkiem, Użytkownik ma prawo złożyć reklamację na adres e-mail Operatora. Reklamacje rozpatrywane są w terminie 14 dni.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-background">§5 Zasady korzystania z obiektu</h2>
            <p>1. Siłownia jest dostępna 24 godziny na dobę, 7 dni w tygodniu.</p>
            <p>2. Karnet jest imienny. Udostępnianie konta w aplikacji lub wpuszczanie osób trzecich bez ważnego karnetu jest surowo zabronione i skutkuje natychmiastowym zablokowaniem konta.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
