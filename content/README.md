# CITS3003 Extracted Content

This directory contains all extracted markdown content from the course PDFs.

## Directory Structure

```
content/
├── lectures/              # Lecture content
│   ├── week1/            # Week 1 lecture notes
│   ├── week2/            # Week 2 lecture notes
│   ├── ...               # Additional weeks
│   └── complete_lectures.md  # Combined lecture notes
│
└── textbook/             # Textbook content
    ├── content.md        # Main textbook content
    ├── table_of_contents.md  # Textbook TOC
    └── extract_textbook.sh   # Extraction script
```

## Content Organization

- Lecture content is organized by week
- Each week contains markdown files extracted from that week's lecture slides
- Textbook content is split into main content and table of contents
- All content maintains the structure and formatting from source PDFs

## Usage

This content is used for:
1. Generating course website materials
2. Creating searchable documentation
3. Building quiz content and study materials

## Maintenance

When updating content:
1. Use extraction scripts to regenerate content from source PDFs
2. Verify markdown formatting is preserved
3. Update any dependent materials (website, quizzes, etc.)
4. Keep content synchronized with source PDFs 