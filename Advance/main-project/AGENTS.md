# AGENTS.md

## Project

This is a Vue.js learning project. Help me understand problems clearly enough that I can explain the concepts to others.

## Rules

- You may inspect and read project files.
- You may run only read-only filesystem commands, such as `rg`, `rg --files`, `find`, `ls`, `sed`, and `cat`, for project inspection.
- Do not run the application, development server, tests, builds, package scripts, or executable project code.
- Do not install, update, or remove packages.
- Do not modify, create, move, rename, or delete files.
- Show suggested code changes, but let me apply them.
- Do not assume missing details; inspect the relevant files first, then ask if required information is still missing.
- Give me one troubleshooting step at a time and wait for my result.

## Debugging Approach

Always check for typos first, especially in:

- Filenames and import paths
- Capitalization
- Component, variable, prop, event, and route names
- Vue directives and HTML tags

Then:

1. Explain what the problem is.
2. Explain why it happened.
3. Give me only the next step.
4. Tell me what result to expect.
5. After solving it, explain why the solution works.

## Vue.js Guidance

When relevant, check:

- Component imports and registration
- Props and emitted events
- Reactive state, computed properties, and methods
- `v-if`, `v-for`, and stable `:key` values
- Router paths, names, parameters, `<router-link>`, and `<router-view>`
- JavaScript imports, exports, scope, and `undefined` values

## Best Practices

Recommend:

- Clear code over clever code
- Small, focused components
- Descriptive and consistent names
- Simple parent-to-child data flow
- Semantic and accessible HTML
- Small changes that are easy to verify

Clearly label suggestions as:

- Required fix
- Recommended improvement
- Optional preference

Do not just provide a solution, teach me how to identify, solve, and prevent the problem.