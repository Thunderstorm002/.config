#!/usr/bin/env sh

# Source: https://github.com/claudius-kienle/polybar-pipewire-control/blob/master/pipewire-control.bash

# Saves the currently default sink into a variable named `curSink`.
# It will return an error code when pulseaudio isn't running.
getCurSink() {
    curSinkName=$(pactl info | awk -F : '/Default Sink:/{print $2}')
    #curSink=$(pactl list sinks short | grep "bluez_output.AC_80_0A_6F_44_47.1" | awk '{print $1}')
    curSink=$(pactl list sinks short | grep $curSinkName | awk '{print $1}')
}

getCurVol() {
    getCurSink
    #echo $curSink
    VOL_LEVEL=$(pactl list sinks | grep -A 15 'Sink #'"$curSink"'' | grep 'Volume:' | grep -E -v 'Base Volume:' | awk -F : '{print $3; exit}' | grep -o -P '.{0,3}%' | sed 's/.$//' | tr -d ' ')
}

#getCurVol

case $1 in
    "--up")
       pactl set-sink-volume @DEFAULT_SINK@ +5%
        ;;
    "--down")
       pactl set-sink-volume @DEFAULT_SINK@ -5%
        ;;
    "--mute")
       pactl set-sink-mute @DEFAULT_SINK@ toggle
        ;;
    *)
      getCurVol    # echo "S: ${SOURCE} | : ${VOLUME} ${SINK}"
      echo "%{B#1B1B1B}%{F#4D4DFF} : %{F-} %{F#F3F4F5}${VOL_LEVEL}%%{F-}%{B-}"
# %{B#f00}%{F#000} black text on red background %{B- F-}

esac
