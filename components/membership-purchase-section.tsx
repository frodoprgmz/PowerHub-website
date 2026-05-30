export function MembershipPurchaseSection() {
  return (
    <section id="zakup-karnetu" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-4 block">
            Zakup karnetu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-balance text-foreground">
            Jak kupić karnet w Powerhub
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            Szybki proces zakupu karnetu krok po kroku. Wykonaj wszystkie punkty, aby aktywować dostęp do siłowni.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-6">
            <ol className="space-y-4">
              <li className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background font-semibold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Wyślij wiadomość</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Napisz wiadomość o treści <span className="font-semibold">wejście jednorazowe</span> lub <span className="font-semibold">karnet miesięczny</span> na numer <span className="font-semibold">795 575 339</span>.
                </p>
              </li>

              <li className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background font-semibold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Wykonaj przelew</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Przelej kwotę zależną od wybranej wejściówki na konto bankowe <span className="font-semibold">6710 2034 6600 0940 2023 0250 3</span>.
                </p>
              </li>

              <li className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background font-semibold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Podaj dane</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  W tytule przelewu wpisz swoje imię i nazwisko, abyśmy mogli szybko powiązać płatność z kontem.
                </p>
              </li>

              <li className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background font-semibold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Wyślij potwierdzenie</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Prześlij potwierdzenie przelewu na numer <span className="font-semibold">795 575 339</span>, aby finalnie aktywować Twój karnet.
                </p>
              </li>

              <li className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background font-semibold">
                    5
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Zapoznaj się z regulaminem</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Przeczytaj regulamin siłowni pod linkiem:
                  <a
                    href="https://docs.google.com/document/d/1XoosNadBGCNW5ACm23FxR9HDBUFG0eIpyYvqN1ZJ2Z4/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground font-semibold underline"
                  >
                    dokument regulaminu
                  </a>
                  .
                </p>
              </li>

              <li className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background font-semibold">
                    6
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Zobowiązanie do regulaminu</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Wraz z zakupem karnetu zobowiązujesz się do przestrzegania regulaminu siłowni.
                </p>
              </li>
            </ol>
          </div>

          <aside className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-6">
              <span className="text-muted-foreground uppercase tracking-widest text-xs">
                Gotowe? Przejdź do płatności
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">
                Wybierz plan i aktywuj karnet
              </h3>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                1. Wyślij SMS lub wiadomość WhatsApp na numer <span className="font-semibold">795 575 339</span>.
              </p>
              <p>
                2. Przelej wybraną kwotę na konto: <span className="font-semibold">6710 2034 6600 0940 2023 0250 3</span>.
              </p>
              <p>
                3. Tytuł przelewu: imię i nazwisko.
              </p>
              <p>
                4. Prześlij potwierdzenie płatności na numer <span className="font-semibold">795 575 339</span>.
              </p>
            </div>

            <a
              href="tel:+48795575339"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-foreground px-7 py-3 text-sm font-semibold uppercase tracking-wider text-background transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20"
            >
              Wyślij potwierdzenie
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
