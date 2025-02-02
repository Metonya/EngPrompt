EngPrompt - AI-Optimized Multilingual Translation for GitHub Copilot 🚀

<div align="center">

[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/Metonya.engprompt?color=blue&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=Metonya.engprompt)

</div>

EngPrompt is a powerful VS Code extension that enhances your GitHub Copilot experience by automatically transforming prompts from any language into AI-optimized English. Whether you're coding in Spanish, Japanese, German, or any other language, EngPrompt ensures your communications with GitHub Copilot are crystal clear and technically precise.

Key Benefits:
- Seamless GitHub Copilot integration
- Universal language support (not limited to any specific language)
- AI-optimized technical English output
- Markdown checklist generation for project planning
- Real-time translation maintaining technical accuracy

Perfect for global development teams using GitHub Copilot who want to maximize their AI pair programming experience while working in their preferred language.

## 🎯 Prerequisites

Before we embark on this magical journey, make sure you have:

- 💳 Active GitHub Copilot subscription
- 📦 VS Code 1.95.0 or higher
- 🤖 GitHub Copilot Chat extension

## 🌟 Key Features

### 🔄 Smart Translation
- Three distinct translation modes for different needs
- Maintains technical terminology accuracy
- Ensures precise documentation standards
- Optimizes your prompts for better AI/ML understanding

**Available Commands:**
- Default mode for English translation
- Intelligent multilingual translation (automatically detects desired language)
- Checklist generation in English

![Engprompt Demo](https://raw.githubusercontent.com/Metonya/EngPrompt/main/images/engprompt.png)

**Multilingual Translation:**
Simply express your desired target language naturally in your prompt, and AI will understand!

Examples:
```
@engprompt /translate what is ollama tr
@engprompt /translate Hello World Türkçe
```

The AI automatically detects the target language from your natural request - whether you mention it at the end (tr, Türkçe),
or include it naturally in your sentence. No specific format is required!

![Translation Demo](https://raw.githubusercontent.com/Metonya/EngPrompt/main/images/translate.png)

### 📋 Intelligent Checklists
- Transforms requirements into structured task lists
- Creates hierarchical markdown checklists
- Organizes complex processes into manageable steps
- Perfect for project planning and documentation

![Checklist Demo](https://raw.githubusercontent.com/Metonya/EngPrompt/main/images/checklist.png)

## ⚡ Quick Commands

- `@engprompt` - Convert your text to optimized technical English
- `@engprompt /translate` - Translate your text to any target language (use "to [Language]:" syntax)
- `@engprompt /checklist` - Generate a structured markdown checklist in English

## 💡 Use Cases

1. **Better AI Interactions**: Get improved responses from GitHub Copilot and other AI tools by converting your native language queries into optimized English prompts
2. **Documentation**: Create clear, professional documentation even when writing in your native language
3. **Project Planning**: Convert requirements written in your native language into well-structured English checklists
4. **Team Communication**: Ensure technical concepts are accurately conveyed across language barriers

## 🔍 How It Works

1. Type your text in any language
2. Choose the appropriate command:
   - `@engprompt` for English translation
   - `@engprompt /translate` for specific language translation
   - `@engprompt /checklist` for English checklist generation
3. Get clear, technically precise output in your desired format

## 🚀 Installation

### For Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile the extension:
   ```bash
   npm run compile
   ```
4. Press F5 in VS Code to start debugging
   > This will open a new VS Code window with the extension loaded

### Distribution

Want to package the extension for distribution? Easy peasy:

1. Install vsce globally:
   ```bash
   npm install -g @vscode/vsce
   ```
2. Package the extension:
   ```bash
   vsce package
   ```
   This creates a `.vsix` file you can distribute!
