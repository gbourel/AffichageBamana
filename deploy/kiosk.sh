#!/bin/bash

# Desactive l'extinction automatique de l'ecran
xset s noblank
# Pas de screensaver
xset s off
# Shuts display management system off
xset -dpms

# Cache le curseur de la souris
unclutter -idle 2 -root &

# Pas de barre d'erreur au lancement si crash
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/$USER/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/$USER/.config/chromium/Default/Preferences

/usr/bin/chromium-browser --noerrdialogs --disable-infobars --kiosk https://python.nsix.fr &

# Change d'onglet toutes les 10 secondes
while true; do
   xdotool keydown ctrl+Next; xdotool keyup ctrl+Next;
   sleep 10
done
