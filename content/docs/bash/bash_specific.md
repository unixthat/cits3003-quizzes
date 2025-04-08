# Bash-Specific Features

## Table of Contents
1. [Arrays](#arrays)
2. [Parameter Expansion](#parameter-expansion)
3. [Process Substitution](#process-substitution)
4. [Bash-specific Options](#bash-specific-options)
5. [Bash-specific Builtins](#bash-specific-builtins)

## Arrays

### Array Declaration and Usage
```bash
# Indexed arrays
declare -a fruits
fruits=("apple" "banana" "orange")
fruits[3]="grape"

# Associative arrays (Bash 4+)
declare -A user
user["name"]="John"
user["age"]=25

# Array operations
echo "${fruits[@]}"      # All elements
echo "${!fruits[@]}"     # All indices
echo "${#fruits[@]}"     # Number of elements
echo "${fruits[0]}"      # First element
echo "${fruits[-1]}"     # Last element
```

### Array Slicing
```bash
# Get subset of array
echo "${fruits[@]:1:2}"  # Elements 1-2
echo "${fruits[@]:1}"    # All elements from index 1
```

## Parameter Expansion

### Basic Expansion
```bash
name="John"
echo "${name}"           # Basic expansion
echo "${name:-default}"  # Use default if unset
echo "${name:=default}"  # Set default if unset
echo "${name:?error}"    # Error if unset
echo "${name:+value}"    # Use value if set
```

### String Manipulation
```bash
text="Hello World"
echo "${#text}"          # Length
echo "${text#H}"         # Remove shortest prefix
echo "${text##H}"        # Remove longest prefix
echo "${text%l}"         # Remove shortest suffix
echo "${text%%l}"        # Remove longest suffix
echo "${text/l/L}"       # Replace first occurrence
echo "${text//l/L}"      # Replace all occurrences
```

## Process Substitution

### Input/Output Redirection
```bash
# Compare outputs
diff <(command1) <(command2)

# Process multiple inputs
while read line; do
    echo "$line"
done < <(command)
```

## Bash-specific Options

### Shell Options
```bash
# Set options
set -e      # Exit on error
set -u      # Exit on undefined variable
set -o pipefail  # Exit on pipe failure
set -x      # Print commands before execution

# Unset options
set +e      # Don't exit on error
set +u      # Don't exit on undefined variable
```

### Shell Attributes
```bash
# Make variables readonly
readonly VAR="value"

# Export variables
export VAR="value"

# Declare variables with attributes
declare -i number=5      # Integer
declare -r constant=10   # Readonly
declare -x exported=20   # Exported
```

## Bash-specific Builtins

### Command Execution
```bash
# Command substitution
result=$(command)
result=`command`

# Arithmetic expansion
result=$(( 5 + 3 ))

# Brace expansion
echo {1..5}             # 1 2 3 4 5
echo {a,b,c}{1,2}       # a1 a2 b1 b2 c1 c2
```

### Job Control
```bash
# Background jobs
command &               # Run in background
jobs                    # List jobs
fg %1                  # Bring job to foreground
bg %1                  # Continue job in background

# Wait for completion
wait %1                # Wait for specific job
wait                   # Wait for all jobs
```

### Special Parameters
```bash
echo "$0"              # Script name
echo "$1"              # First argument
echo "$@"              # All arguments
echo "$#"              # Number of arguments
echo "$?"              # Last exit status
echo "$$"              # Process ID
echo "$!"              # Last background process ID
```

### Debugging
```bash
# Debug mode
set -x                 # Print commands
set -v                 # Print input lines
set -n                 # Read commands but don't execute

# Debug function
debug() {
    echo "DEBUG: $*" >&2
}

# Usage
debug "Variable value: $var"
```

### Error Handling
```bash
# Custom error handler
error_handler() {
    echo "Error on line $1"
    exit 1
}

trap 'error_handler ${LINENO}' ERR

# Cleanup on exit
cleanup() {
    rm -f /tmp/tempfile
}

trap cleanup EXIT
```

## Best Practices for Bash

1. **Array Usage**
   - Use declare for array initialization
   - Quote array expansions
   - Use proper array indexing
   - Handle sparse arrays carefully

2. **Parameter Expansion**
   - Use default values for safety
   - Handle unset variables
   - Use proper quoting
   - Consider performance impact

3. **Process Substitution**
   - Use for complex I/O operations
   - Handle cleanup properly
   - Consider portability
   - Watch for performance impact

4. **Shell Options**
   - Set appropriate options at start
   - Document option changes
   - Reset options when needed
   - Use set -e for safety

5. **Builtins Usage**
   - Prefer builtins over external commands
   - Use proper quoting
   - Handle errors appropriately
   - Document complex operations 