root = 'ai/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
            [root+'main/usecases', emoji.code+'Use Cases'],
            [root+'main/mcp', 'MCP'],
        ]
    },
    {
        title: 'Ассистенты',
        themes: [
            [root+'assistants/cursor',  emoji.items+'Cursor'],
            [root+'assistants/cline',   emoji.items+'Cline'],
            [root+'assistants/copilot', emoji.items+'GitHub Copilot'],
        ]
    },
]
