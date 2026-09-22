# Agent Rule Book

Guidelines and constraints for AI agents working in this repository.

## 1. Code Validation & Verification
- **Never create a build to check functionality**: Do NOT run `npm run build` or trigger production builds simply to verify code correctness, functionality, or syntax.
- **Run ESLint instead**: Always run `npm run lint` or `npx eslint` to validate changes and verify code quality.

## 2. Icon Strategy
- **Check Custom Icons First**: If icons are needed, first verify whether custom project SVG icons exist in `src/assets/svg/`.
- **Use `lucide-react` as Fallback**: If an icon is not present in `src/assets/svg/`, use the appropriate icon from `lucide-react`.
