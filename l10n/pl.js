OC.L10N.register(
    "suspicious_login",
    {
    "New login location detected" : "Wykryto nową lokalizację logowania",
    "A new login into your account was detected. The IP address %s was classified as suspicious. If this was you, you can ignore this message. Otherwise you should change your password." : "Wykryto nowe logowanie do Twojego konta. Adres IP %s został sklasyfikowany jako podejrzany. Jeśli byłeś to Ty, to możesz zignorować tę wiadomość. W przeciwnym razie należy zmienić hasło.",
    "Suspicious Login" : "Suspicious Login",
    "New login detected" : "Wykryto nowe logowanie",
    "Detect and warn about suspicious IPs logging into Nextcloud\n\t" : "Wykryj i ostrzeż o logowaniu do Nextcloud z podejrzanego adresu IP\n\t",
    "More information ↗" : "Więcej informacji↗",
    "You can get more info by pressing the button which will open %s and show info about the suspicious IP-address." : "Możesz uzyskać więcej informacji, naciskając przycisk, który otworzy %s i pokaże informacje o podejrzanym adresie IP.",
    "Suspicious login detection" : "Wykrywanie podejrzanego logowania",
    "The suspicious login app is enabled on this instance. It will keep track of IP addresses users successfully log in from and build a classifier that warns if a new login comes from a suspicious IP address." : "Aplikacja \"Suspicious Login\" jest włączona na tej instancji. Będzie ona sprawdzać adresy IP, z których logują się użytkownicy i zbuduje klasyfikator, który będzie ostrzegać o nowych logowaniach z podejrzanych adresów IP.",
    "Training data statistics" : "Statystyki danych treningowych",
    "So far the app has captured {total} logins (including client connections), of which {distinct} are distinct (IP, UID) tuples." : "Do tej pory aplikacja wykryła {total} logowań (wliczając połączenia klientów), z których {distinct} są różnymi krotkami (IP, UID).",
    "IPv4" : "IPv4",
    "IPv6" : "IPv6",
    "Classifier model statistics" : "Statystyki modelu klasyfikatora",
    "No classifier model has been trained yet. This most likely means that you just enabled the app recently. Because the training of a model requires good data, the app waits until logins of at least {days} days have been captured." : "Nie nauczono jeszcze żadnego modelu klasyfikatora. To najprawdopodobniej oznacza, że niedawno uruchomiłeś aplikację. Ponieważ uczenie modelu wymaga dobrych danych, aplikacja czeka, aż zostaną wykonane logowania co najmniej przez {days} dni.",
    "During evaluation, the latest model (trained {time}) has shown to capture {recall}% of all suspicious logins (recall), whereas {precision}% of the logins classified as suspicious are indeed suspicious (precision). Below you see a visualization of historic model performance." : "Podczas ewaluacji najnowszy model (wytrenowany {time}) pokazał, że przechwytuje {recall}% wszystkich podejrzanych logowań (odwołań), podczas gdy {precision}% loginów sklasyfikowanych jako podejrzane są rzeczywiście podejrzanymi (dokładność). Poniżej znajduje się wizualizacja historii wydajności modelu.",
    "Precision" : "Precyzja",
    "Recall" : "Odwołaj"
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
