const t = process.argv[2] ?? '';
process.stdout.write(JSON.stringify({ echo: t, version: 3, tool: 'uat-repo-echo/echo.mjs' }));
