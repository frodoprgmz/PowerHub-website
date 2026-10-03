import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PolitykaPrywatnosciPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-foreground">
        
        <div className="mb-8">
          <a href="/" className="inline-block px-6 py-3 bg-silver text-background font-bold rounded hover:opacity-90 transition-opacity">
            ← Wróć do strony głównej
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-8">Polityka Prywatności</h1>
        
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">§1 Administrator Danych</h2>
            <p>Administratorem Twoich danych osobowych jest <strong>Studio Sprawności i Zdrowia Jerzy Pacer</strong>, adres: <strong>Skomielna Biała 888, 32-434</strong>, NIP: <strong>6812116894</strong>, e-mail: <strong>pacerjerzy@gmail.com</strong>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">§2 Jakie dane zbieramy i w jakim celu?</h2>
            <p>Przetwarzamy dane niezbędne do obsługi aplikacji mobilnej, płatności i dostępu do siłowni:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Adres e-mail i imię – w celu założenia konta w aplikacji oraz komunikacji.</li>
              <li>Dane płatnicze (historia transakcji) – w celu realizacji zakupu karnetu (dane kart płatniczych przetwarzane są wyłącznie przez operatora PayU).</li>
              <li>Logi z wejść (historia otwarcia zamka) – w celach bezpieczeństwa i weryfikacji posiadania aktywnego karnetu przy wejściu do obiektu 24/7.</li>
              <li>Wizerunek (monitoring wizyjny w obiekcie) – w celu zapewnienia bezpieczeństwa osób i mienia na terenie siłowni.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">§3 Odbiorcy Danych</h2>
            <p>Twoje dane mogą być przekazywane podmiotom przetwarzającym je na nasze zlecenie (np. dostawca hostingu serwera, operator płatności PayU w celu finalizacji transakcji). Nie sprzedajemy Twoich danych podmiotom trzecim.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">§4 Twoje Prawa (RODO)</h2>
            <p>Posiadasz prawo dostępu do treści swoich danych, ich poprawiania, żądania ich usunięcia (o ile nie kłóci się to z obowiązkiem przechowywania dowodów księgowych za zakupione karnety) oraz prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
