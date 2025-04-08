# Zsh-Specific Features

## Table of Contents
1. [Arrays and Lists](#arrays-and-lists)
2. [Globbing and Pattern Matching](#globbing-and-pattern-matching)
3. [Zsh-specific Options](#zsh-specific-options)
4. [Zsh-specific Builtins](#zsh-specific-builtins)
5. [Completion System](#completion-system)

## Arrays and Lists

### Array Declaration and Usage
```zsh
# Indexed arrays
fruits=("apple" "banana" "orange")
fruits[4]="grape"  # Arrays start at 1 by default

# Associative arrays
typeset -A user
user[name]="John"
user[age]=25

# Array operations
echo $fruits        # All elements
echo ${(k)user}     # All keys
echo $#fruits       # Number of elements
echo $fruits[1]     # First element
echo $fruits[-1]    # Last element
```

### Array Modifiers
```zsh
# Array transformation
echo ${(U)fruits}   # Uppercase
echo ${(L)fruits}   # Lowercase
echo ${(j:, )fruits}  # Join with comma and space
echo ${(u)fruits}   # Unique elements
```

## Globbing and Pattern Matching

### Extended Globbing
```zsh
# Enable extended globbing
setopt extended_glob

# Pattern matching
ls **/*.txt         # Recursive globbing
ls *.txt~old.txt    # Exclude pattern
ls file<1-10>.txt   # Range pattern
ls file<->.txt      # Numeric range
```

### Pattern Matching Operators
```zsh
# String matching
[[ $string =~ pattern ]]  # Regex match
[[ $string == pattern ]]  # Pattern match
[[ $string = pattern ]]   # Exact match

# File matching
[[ -f file.txt ]]   # Regular file
[[ -d directory ]]  # Directory
[[ -L symlink ]]    # Symbolic link
```

## Zsh-specific Options

### Shell Options
```zsh
# Set options
setopt AUTO_CD      # Change directory without cd
setopt EXTENDED_GLOB # Extended globbing
setopt NO_CASE_GLOB # Case-insensitive globbing
setopt NUMERIC_GLOB_SORT # Numeric sort
setopt AUTO_PUSHD   # Push directories to stack

# Unset options
unsetopt AUTO_CD
```

### Shell Attributes
```zsh
# Variable attributes
typeset -i number=5  # Integer
typeset -r constant=10  # Readonly
typeset -x exported=20  # Exported
typeset -A array      # Associative array
```

## Zsh-specific Builtins

### Command Execution
```zsh
# Command substitution
result=$(command)
result=`command`

# Arithmetic expansion
result=$(( 5 + 3 ))

# Brace expansion
echo {1..5}         # 1 2 3 4 5
echo {a,b,c}{1,2}   # a1 a2 b1 b2 c1 c2
```

### Directory Stack
```zsh
# Directory navigation
pushd directory     # Push directory
popd               # Pop directory
dirs -v            # List directory stack
cd -2              # Change to second directory in stack
```

### Special Parameters
```zsh
echo $0            # Script name
echo $1            # First argument
echo $@            # All arguments
echo $#            # Number of arguments
echo $?            # Last exit status
echo $$            # Process ID
echo $!            # Last background process ID
```

## Completion System

### Basic Completion
```zsh
# Enable completion system
autoload -Uz compinit
compinit

# Completion styles
zstyle ':completion:*' menu select
zstyle ':completion:*' matcher-list 'm:{a-zA-Z}={A-Za-z}'
```

### Custom Completion
```zsh
# Define completion function
_mycommand() {
    local -a options
    options=(
        '--help:Show help'
        '--version:Show version'
    )
    _describe 'command' options
}

# Register completion
compdef _mycommand mycommand
```

### Completion Styles
```zsh
# Set completion styles
zstyle ':completion:*' verbose yes
zstyle ':completion:*:descriptions' format '%B%d%b'
zstyle ':completion:*:messages' format '%d'
zstyle ':completion:*:warnings' format 'No matches for: %d'
```

## Best Practices for Zsh

1. **Array Usage**
   - Use proper array indexing (1-based)
   - Utilize array modifiers
   - Handle array transformations
   - Use associative arrays when needed

2. **Globbing**
   - Enable extended globbing when needed
   - Use recursive globbing carefully
   - Consider performance impact
   - Handle pattern matching properly

3. **Completion System**
   - Customize completion styles
   - Create custom completions
   - Handle completion caching
   - Document completion functions

4. **Shell Options**
   - Set appropriate options
   - Use zsh-specific features
   - Document option changes
   - Consider portability

5. **Directory Navigation**
   - Use directory stack
   - Enable auto-pushd
   - Handle directory changes
   - Manage directory history 