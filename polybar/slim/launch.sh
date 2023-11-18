#!/usr/bin/env bash

# Terminate already running bar instances
# killall -q polybar
polybar-msg cmd quit

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

# Launch the bar
polybar -q main -c "$HOME"/.config/polybar/slim/config.ini & disown
