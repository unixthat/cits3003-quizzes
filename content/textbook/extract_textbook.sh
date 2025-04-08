#!/bin/bash

# Set up variables
textbook_file="textbook3003.pdf"
OUTPUT_DIR="extracted_textbook"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Processing $textbook_file..."

# Extract table of contents
echo "Extracting table of contents..."
pdftotext -layout -f 1 -l 34 "$textbook_file" - > "$OUTPUT_DIR/toc.txt"

# Clean up table of contents
echo "Cleaning up table of contents..."
awk '
BEGIN { print "# Table of Contents\n" }
/^[0-9]+\.[0-9]+/ {
    # Clean up section headers and capture the title
    line = $0
    gsub(/^[ \t]+/, "", line)
    gsub(/[ \t]+$/, "", line)
    # Capture everything after the section number
    title = gensub(/^[0-9]+\.[0-9]+([0-9\.]*)[[:space:]]*/, "", 1, line)
    if (length(title) > 0) {
        print "## " line
    }
    next
}
' "$OUTPUT_DIR/toc.txt" > "$OUTPUT_DIR/table_of_contents.md"

# Extract and clean up main content
echo "Extracting main content..."
pdftotext -layout -f 35 -l 1000 "$textbook_file" "$OUTPUT_DIR/raw_content.txt"

echo "Cleaning up main content..."
awk '
BEGIN { 
    in_code_block = 0
    print "# Computer Graphics Textbook\n"
}
{
    # Basic cleanup first
    gsub(/^[ \t]+/, "")
    gsub(/[ \t]+$/, "")
    
    # Skip empty lines and page numbers
    if ($0 ~ /^[0-9]+$/ || $0 ~ /^Page [0-9]+$/ || length($0) == 0) {
        next
    }
    
    # Handle code blocks
    if ($0 ~ /^[[:space:]]*[{}]/ || $0 ~ /^[[:space:]]*(void|int|float|double|char|unsigned|struct|class|public|private|protected|static|const|#|\/\/)/) {
        if (!in_code_block) {
            in_code_block = 1
            print "\n```cpp"
        }
        print $0
        next
    }
    
    # End code block if we were in one
    if (in_code_block && !($0 ~ /^[[:space:]]*[{}]/ || $0 ~ /^[[:space:]]*(void|int|float|double|char|unsigned|struct|class|public|private|protected|static|const|#|\/\/)/)) {
        in_code_block = 0
        print "```\n"
    }
    
    # Handle chapter headers
    if ($0 ~ /^Chapter [0-9]+/) {
        print "\n## " $0 "\n"
        next
    }
    
    # Handle section headers
    if ($0 ~ /^[0-9]+\.[0-9]+[[:space:]]+[A-Z]/) {
        print "\n### " $0 "\n"
        next
    }
    
    # Handle subsection headers
    if ($0 ~ /^[0-9]+\.[0-9]+\.[0-9]+[[:space:]]+[A-Z]/) {
        print "\n#### " $0 "\n"
        next
    }
    
    # Handle figure captions more selectively
    if ($0 ~ /^FIGURE [0-9]+\.[0-9]+[[:space:]]+[A-Z]/) {
        print "\n*" $0 "*\n"
        next
    }
    
    # Skip short technical terms or labels
    if (length($0) < 40 && ($0 ~ /^[A-Za-z][A-Za-z \t]*$/ || $0 ~ /^[A-Za-z]+[ \t]*[A-Za-z]*[ \t]*[A-Za-z]*[ \t]*[A-Za-z]*[ \t]*$/)) {
        if ($0 ~ /^(The|A|An|In|On|At|By|To|For|With|This|That|These|Those|It|He|She|They|We|You|I)[ \t]/) {
            # This is likely a regular sentence, keep it
            print $0
        }
        next
    }
    
    # Print non-empty lines after cleaning
    if (length($0) > 0) {
        print $0
    }
}' "$OUTPUT_DIR/raw_content.txt" > "$OUTPUT_DIR/content.md"

# Clean up temporary files
rm -f "$OUTPUT_DIR/toc.txt" "$OUTPUT_DIR/raw_content.txt"

echo "Extraction completed successfully!" 