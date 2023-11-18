#!/usr/bin/env sh

# Add this script to your wm startup file.

DIR="$HOME/.config/polybar/arcolinux"

# Terminate already running bar instances
# killall -q polybar
polybar-msg cmd quit

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

# Launch the bar
#polybar --reload mainbar-i3 -c "$DIR"/config.ini & disown
if type "xrandr" > /dev/null; then
  for m in $(xrandr --query | grep " connected" | cut -d" " -f1); do
    MONITOR=$m polybar --reload mainbar-i3 -c "$DIR"/config.ini &
  done
else
polybar --reload mainbar-i3 -c "$DIR"/config.ini &
fi
