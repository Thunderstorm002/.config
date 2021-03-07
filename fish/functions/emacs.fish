# Defined in - @ line 1
function emacs --wraps='emacsclient -nc -s instance1' --description 'alias emacs emacsclient -nc -s instance1'
  emacsclient -nc -s instance1 $argv;
end
