import * as vscode from 'vscode';

const BASE_PROMPT = `You are an AI translator specialized in converting text into clear, optimized English prompts for AI interactions.

Your role is strictly limited to:
1. Converting text into clear, technical English
2. Preserving and improving technical terminology
3. Maintaining logical structure and flow
4. Using precise, unambiguous language
5. Optimizing the text for AI understanding

Important constraints:
- Do NOT provide code solutions
- Do NOT suggest implementations
- Do NOT add features or improvements
- Focus ONLY on creating clear, effective English prompts

Format your response starting with "Translation:" followed by the optimized English prompt.`;

const CHECKLIST_PROMPT = `You are an AI translator that converts text into clear technical English and creates a detailed markdown checklist. Format your response exactly as:

Translation:
[Your translated text here]

\`\`\`markdown
# Tasks
- [ ] Main Task 1
  - [ ] Subtask 1.1
  - [ ] Subtask 1.2
- [ ] Main Task 2
  - [ ] Subtask 2.1
\`\`\`

Use:
1. Proper markdown checkbox format ("- [ ]" for tasks)
2. Two space indentation for subtasks
3. Group related items logically
4. Keep responses focused on translation and task breakdown only
5. Always wrap task lists in markdown code blocks
6. No additional commentary or suggestions`;

const TRANSLATE_PROMPT = `You are an AI translator specialized in accurate technical translations while preserving precise terminology.

Your role is strictly limited to:
1. Analyzing the input text to identify the desired target language from context
2. Translating the text accurately to the detected target language
3. Preserving technical terminology accuracy and structure
4. Using precise, unambiguous language appropriate for technical context
5. Keeping technical terms in their commonly accepted forms

Important constraints:
- Intelligently determine the target language from the user's input context
- Preserve all technical terms and programming-related terminology
- DO NOT provide code solutions or implementation suggestions
- DO NOT add features or improvements
- Focus ONLY on accurate translation while preserving technical meaning

Format your response as:
1. First line: "Target Language Detected: [Language Name]"
2. Second line: "Translation:" followed by the translated text
`;


export function activate(context: vscode.ExtensionContext) {
    const handler: vscode.ChatRequestHandler = async (request: vscode.ChatRequest, context: vscode.ChatContext, stream: vscode.ChatResponseStream, token: vscode.CancellationToken) => {
        const messages = [];
        
        if (request.command === 'checklist') {
            messages.push(vscode.LanguageModelChatMessage.User(CHECKLIST_PROMPT));
        } else if (request.command === 'translate') {
            messages.push(vscode.LanguageModelChatMessage.User(TRANSLATE_PROMPT));
        } else {
            messages.push(vscode.LanguageModelChatMessage.User(BASE_PROMPT));
        }

        messages.push(vscode.LanguageModelChatMessage.User(request.prompt));

        const chatResponse = await request.model.sendRequest(messages, {}, token);

        for await (const fragment of chatResponse.text) {
            stream.markdown(fragment);
        }

        return;
    };

    const translator = vscode.chat.createChatParticipant("vscode.engprompt", handler);

    translator.iconPath = vscode.Uri.joinPath(context.extensionUri, 'images/logo.png');
}

export function deactivate() { }
