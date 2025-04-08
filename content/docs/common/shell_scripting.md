# Shell Scripting Guide

## Table of Contents
1. [Basic Concepts](#basic-concepts)
2. [Variables and Data Types](#variables-and-data-types)
3. [Control Structures](#control-structures)
4. [Functions](#functions)
5. [File Operations](#file-operations)
6. [Error Handling](#error-handling)
7. [Best Practices](#best-practices)

## Basic Concepts

### Script Structure
```bash
#!/bin/bash  # or #!/bin/zsh for zsh scripts
# Script name: example.sh
# Description: Brief description of what the script does
# Author: Your Name
# Date: YYYY-MM-DD

# Global variables
VERSION="1.0.0"
DEBUG=false

# Function definitions
function print_help() {
    echo "Usage: $0 [options]"
    echo "Options:"
    echo "  -h    Show this help message"
    echo "  -v    Enable verbose output"
}

# Main script logic
main() {
    # Your code here
}

# Script entry point
main "$@"
```

### Running Scripts
```bash
# Make script executable
chmod +x script.sh

# Run script
./script.sh

# Run with arguments
./script.sh arg1 arg2

# Run with options
./script.sh -v --debug
```

## Variables and Data Types

### Variable Declaration and Usage
```bash
# Simple variables
name="John"
age=25
PI=3.14159

# Arrays
# Bash
fruits=("apple" "banana" "orange")
# Zsh
fruits=("apple" "banana" "orange")

# Associative arrays (Bash 4+)
declare -A user
user["name"]="John"
user["age"]=25

# Zsh associative arrays
typeset -A user
user[name]="John"
user[age]=25
```

### Variable Scope
```bash
# Global variables
GLOBAL_VAR="I'm global"

# Local variables (in functions)
function example() {
    local LOCAL_VAR="I'm local"
    echo "$LOCAL_VAR"
}
```

## Control Structures

### Loops

#### For Loops
```bash
# Numeric range
for i in {1..5}; do
    echo "Number: $i"
done

# List of items
for item in apple banana orange; do
    echo "Fruit: $item"
done

# Command output
for file in $(ls *.txt); do
    echo "File: $file"
done

# C-style for loop (Bash)
for ((i=1; i<=5; i++)); do
    echo "Number: $i"
done
```

#### While Loops
```bash
# Counter-based
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    ((count++))
done

# Reading input
while read line; do
    echo "Line: $line"
done < input.txt

# Infinite loop with break
while true; do
    echo "Processing..."
    if [ "$condition" = "true" ]; then
        break
    fi
done
```

### Conditionals

#### If Statements
```bash
# Basic if
if [ condition ]; then
    # commands
fi

# If-elif-else
if [ condition1 ]; then
    # commands
elif [ condition2 ]; then
    # commands
else
    # commands
fi

# Nested if
if [ condition1 ]; then
    if [ condition2 ]; then
        # commands
    fi
fi
```

#### Case Statements
```bash
case $variable in
    "pattern1")
        # commands
        ;;
    "pattern2"|"pattern3")
        # commands
        ;;
    *)
        # default commands
        ;;
esac
```

## Functions

### Function Definition and Usage
```bash
# Basic function
function hello() {
    echo "Hello, $1!"
}

# Function with return value
function add() {
    local result=$(( $1 + $2 ))
    return $result
}

# Function with output
function get_name() {
    echo "John Doe"
}

# Using functions
hello "World"
add 5 3
name=$(get_name)
```

## File Operations

### File Testing
```bash
# File existence and type
if [ -f file.txt ]; then    # Regular file
if [ -d directory ]; then    # Directory
if [ -L symlink ]; then     # Symbolic link

# File permissions
if [ -r file.txt ]; then    # Readable
if [ -w file.txt ]; then    # Writable
if [ -x script.sh ]; then   # Executable

# File size
if [ -s file.txt ]; then    # Non-empty
if [ -N file.txt ]; then    # Modified since last read
```

### File Manipulation
```bash
# Copy files
cp source.txt destination.txt
cp -r source_dir/ destination_dir/

# Move files
mv old_name.txt new_name.txt

# Remove files
rm file.txt
rm -r directory/

# Create directories
mkdir -p path/to/directory
```

## Error Handling

### Exit Codes
```bash
# Check command success
if command; then
    echo "Success"
else
    echo "Failed"
fi

# Custom exit codes
function process_file() {
    if [ ! -f "$1" ]; then
        return 1
    fi
    # Process file
    return 0
}
```

### Error Trapping
```bash
# Trap errors
set -e  # Exit on error
set -u  # Exit on undefined variable
set -o pipefail  # Exit on pipe failure

# Custom error handler
trap 'echo "Error on line $LINENO"' ERR
trap 'cleanup' EXIT
```

## Best Practices

1. **Script Organization**
   - Use clear, descriptive names
   - Include header documentation
   - Group related functions
   - Use consistent indentation

2. **Variable Usage**
   - Quote all variable expansions
   - Use meaningful variable names
   - Declare variables at the top
   - Use local variables in functions

3. **Error Handling**
   - Check return codes
   - Use error trapping
   - Provide meaningful error messages
   - Clean up temporary files

4. **Performance**
   - Minimize subshell usage
   - Use built-in commands when possible
   - Avoid unnecessary loops
   - Use appropriate data structures

5. **Security**
   - Validate input
   - Use secure temporary files
   - Avoid eval and similar commands
   - Set appropriate permissions

6. **Maintainability**
   - Comment complex logic
   - Use functions for reusable code
   - Follow consistent style
   - Keep scripts focused and small 