const socket = io();
        const pytania = [
            "Pokonaj przeciwnika w walce, nie tracąc żadnych punktów zdrowia.",
            "Wygraj trzy rundy z rzędu.",
            "Zrób zrzut ekranu w trakcie aktywnej rozgrywki.",
            "Otwórz dowolną skrzynię ze skarbem, lootbox lub podobny pojemnik w grze.",
            "Użyj specjalnej umiejętności swojej postaci (np. zdolność Ultimate, zaklęcie, specjalny atak).",
            "Zużyj wszystkie punkty many/energii lub podobny zasób w trakcie jednej walki/rozgrywki.",
            "Ukończ poziom lub fragment obszaru bez wykonania ani jednego skoku. (gry w których takowy skok bądź dash istnieją nawet jako item bądź umiejętność do nabycia)",
            "Zniszcz wrogą wieżę, bazę lub inną kluczową strukturę obronną.",
            "Wykonaj cios krytyczny (widoczny w grze jako \"critical hit\" lub podobne oznaczenie i między innymi zwiększony damage).",
            "Wypełnij wszystkie sloty ekwipunku",
            "Podnieś przedmiot leżący na ziemi lub stole w świecie gry.",
            "Pokonaj przeciwnika używając wyłącznie podstawowego ataku (bez użycia umiejętności specjalnych bądź weapon artów).",
            "Zbierz dokładnie 10 monet lub podobnych przedmiotów kolekcjonerskich w jednej rozgrywce/sesji.",
            "Przeżyj 5 minut rozgrywki (bez pauzy) bez utraty jakichkolwiek punktów zdrowia. (musisz aktywnie grać)",
            "Zmień dowolne ustawienie w menu opcji gry.",
            "Pokonaj przeciwnika używając tylko jednej broni (bez zmiany broni w trakcie walki).",
            "Wykonaj trzy skoki w miejscu jeden po drugim. (bunnyhop)",
            "Otwórz mapę gry (minimapę lub pełną mapę, jeśli dostępna, liczy się mapa online).",
            "Znajdź przejście prowadzące do ukrytego obszaru na mapie (np. sekretne drzwi, ścieżka).",
            "Wykonaj combo składające się z co najmniej 3 ataków lub umiejętności (combo to sekwencja szybkich, udanych akcji, które połączone ze sobą dają bonus).",
            "Skorzystaj z punktu zapisu gry (checkpoint lub save point).",
            "Zbuduj prostą konstrukcję z dostępnych materiałów (np. ścianę, most, osłonę).",
            "Zdobądź nowy poziom doświadczenia (level up).",
            "Ukończ jedną misję poboczną lub opcjonalne zadanie.",
            "Wydaj zebrane punkty doświadczenia lub waluty gry na ulepszenia/przedmioty.",
            "Wykonaj unik bądź pare tuż przed ciosem przeciwnika, aby go całkowicie uniknąć. (perfect dodge/parry)",
            "Wejdź do wody i pozostań w niej przez co najmniej 5 sekund.",
            "Pokonaj przeciwnika bez używania broni (only bare fist fight [pozdrawiamy bleha i gundyra]).",
            "Zdobądź nowy element ekwipunku (np. hełm, zbroję, buty, amulet).",
            "Pokonaj dwóch przeciwników w ciągu 30 sekund.",
            "Skorzystaj z leczenia (np. zaklęcie, mikstura, apteczka).",
            "Włącz źródło światła (latarka, pochodnia, zaklęcie rozświetlające).",
            "Rzuć granatem lub zaklęciem obszarowym w grupę przeciwników. (aoe damage w swarm)",
            "Skorzystaj z punktu szybkiej podróży (wszelkiego rodzaju fast travell).",
            "Wejdź na najwyższy dostępny punkt na mapie.",
            "Zeskocz z dużej wysokości i przeżyj upadek.",
            "Zeskocz z dużej wysokości i umrzyj.",
            "Otwórz dowolne drzwi lub bramę.",
            "Zniszcz interaktywny obiekt (np. beczkę, skrzynkę, zniszczalną ścianę).",
            "Użyj pojazdu dostępnego w grze (np. samochodu, łodzi, konia).",
            "Zablokuj atak przeciwnika przy użyciu tarczy lub zdolności blokującej. (zwykły blok nie para)",
            "Zdobądź broń dystansową (np. łuk, kuszę, pistolet, karabin).",
            "Traf przeciwnika z dużej odległości (min 10 metrów).",
            "Przejdź przez most w grze.",
            "Znajdź ukrytą wiadomość lub napis w środowisku gry.(najlepiej pozostawiony przez innego gracza)",
            "Wejdź do budynku.",
            "Skorzystaj z windy w grze.",
            "Ukończ walkę mając mniej niż 10% punktów zdrowia.",
            "Wykonaj skok na przeciwnika i zadaj mu obrażenia tym atakiem.",
            "Otwórz ekwipunek postaci.",
            "Wystrzel wszystkie pociski ze swojej broni (opróżnij magazynek).",
            "Użyj teleportu w grze (nie chodzi o fast travel tylko teleport np do innego wymiaru czy miejsca).",
            "Zdobądź tarczę lub tymczasowy efekt ochrony.",
            "Pokonaj mini-bossa (silniejszy przeciwnik przed bossem końcowym).",
            "Użyj mikstury lub apteczki w celu odnowienia zdrowia/many.",
            "Uratuj sojusznika przed śmiercią (np. ożywiając go, osłaniając).",
            "Wykonaj atak z zaskoczenia (np. od tyłu, z ukrycia bądź BaCkStAp cuz its easy).",
            "Wejdź do tajnego pokoju lub ukrytej lokacji.",
            "Przetrwaj falę przeciwników.",
            "Znajdź sekretne przejście.",
            "Skorzystaj z nowej mechaniki gry (mechanika bądź przedmiot dodany nie mniej niż miesiąc temu[jeśli nie ma takiej gry dodaj kolejny miesiąc aż to skutku]).",
            "Zniszcz element otoczenia (np. drzwi, mur, ścianę, którą można zburzyć).",
            "Wykonaj kontratak tuż po ataku przeciwnika. (np countery jak w eldenie)",
            "Ukończ poziom lub zadanie na czas",
            "Użyj skradania się, aby nie zostać wykrytym przez przeciwników.",
            "Pokonaj przeciwnika używając tylko łuku, kuszy lub innej broni dystansowej.",
            "Przeskocz nad przeszkodą.",
            "Przebiegnij przez ogień lub lawę i przeżyj.",
            "Zniszcz wieżyczkę obronną lub stałe stanowisko strzeleckie.",
            "Wykonaj atak z powietrza (w trakcie skoku, spadania).",
            "Wykonaj ślizg postacią.",
            "Użyj specjalnego trybu widzenia (np. noktowizji, termowizji, trybu detektywa).",
            "Wejdź do jaskini.",
            "Włącz dźwignię lub przycisk aktywujący mechanizm.",
            "Skorzystaj z mechanizmu obronnego (np. sterując armatą, wieżyczką).",
            "Pokonaj przeciwnika używając wyłącznie pułapek.",
            "Zdobądź przedmiot znajdujący się na szczycie konstrukcji (np. wieży, wzgórza).",
            "Przejdź cały etap/poziom bez śmierci.",
            "Pokonaj przeciwnika o wyższym poziomie niż twoja postać.",
            "Pokonaj trzech przeciwników tym samym rodzajem ataku (np. tylko atakiem wręcz, tylko strzałem z łuku).",
            "Zdobądź nową broń i użyj jej w tej samej walce/sekcji rozgrywki.",
            "Wykonaj 5 uników z rzędu w trakcie jednej walki.",
            "Pokonaj przeciwnika wyłącznie przy użyciu ataków z powietrza (atakując z wyskoku).",
            "Przejdź etap bez użycia żadnych umiejętności specjalnych."
        ];

        let selekt = document.getElementById('selekt')
        let cells = document.querySelectorAll('.bingo-cell')
        let button = document.getElementById('butt')
        let playercount = document.getElementById('playercount')
        let reset = document.getElementById('reset')
        let arraylong = document.getElementById('arraylong')
        let place = 0
        const urlParams = new URLSearchParams(window.location.search)
        const roomName = urlParams.get('room')
        
        socket.emit('joinRoom', roomName)

        socket.on('amount', (playeramount) => {
            playercount.textContent = playeramount
        })

        window.addEventListener('load', function() {
            arraylong.textContent = pytania.length
        })

        socket.on('bingo', (bing) => {
            cells.forEach((cell, index) => {
                cell.textContent = bing[index]
            })
        })


        cells.forEach((cell, index) => {
            cell.addEventListener('click', function () {
                if (selekt.value == "") {
                    alert("wybierz kolor")
                }
                else {
                    if(cell.style.backgroundColor == "red" || cell.style.backgroundColor == "blue"){
                    alert("ktoś zaznaczył to pole szybciej od ciebie")
                }
                else{
                    cell.style.backgroundColor = selekt.value
                    socket.emit('colors', { index, color: selekt.value })
                }
            }
            })

        });


        socket.on('colors', (colors) => {
            cells[colors.index].style.backgroundColor = colors.color
        })


        button.addEventListener('click', () => {
            function shuffle(array) {
                let currentIndex = array.length;

                while (currentIndex != 0) {

                    let randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;

                    [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex], array[currentIndex]];
                }
            }
            shuffle(pytania)
            cells.forEach((cell, index) => {
                cell.textContent = pytania[index]
            })
            socket.emit('bingo', pytania)
        })


        reset.addEventListener('click', function() {
            cells.forEach(cell => {
                cell.style.backgroundColor = "initial"
                cell.textContent = ""
            })
            socket.emit('reset')
        })
        socket.on('reset', () => {
            cells.forEach(cell => {
                cell.style.backgroundColor = "initial"
                cell.textContent = ""
            })
            })