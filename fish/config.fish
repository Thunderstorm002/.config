#------------------------ Setting the starship prompt -------------------------

starship init fish | source

#------------------------------------------------------------------------------

#------------------------ Set MANPAGER ----------------------------------------

# "bat" as a manpager
set -x MANPAGER "sh -c 'col -bx | bat -l man -p'"

# "nvim" as a manager
# set -x MANPAGER "nvim -c 'set ft=man' -"

#------------------------------------------------------------------------------

#------------------------ Zoxide - a replacement for cd command ---------------

zoxide init fish | source

#------------------------------------------------------------------------------

#------------------------ pywal setting for fish shell ------------------------

#set pywal wal --theme base16-black-metal-funeral
#eval $pywal
#eval clear

#------------------------------------------------------------------------------
