# Defined in - @ line 1
function ls --wraps='exa --header --long --group-directories-first' --description 'alias ls exa --header --long --group-directories-first'
  exa --header --long --group-directories-first $argv;
end
