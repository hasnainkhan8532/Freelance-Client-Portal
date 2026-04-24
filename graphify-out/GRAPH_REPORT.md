# Graph Report - ./src  (2026-04-22)

## Corpus Check
- Corpus is ~2,944 words - fits in a single context window. You may not need a graph.

## Summary
- 30 nodes · 20 edges · 9 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `handleSubmit()` - 2 edges
2. `handleSubmit()` - 2 edges
3. `Aurora()` - 2 edges
4. `AuthFormField()` - 2 edges
5. `cn()` - 2 edges
6. `CardAction()` - 2 edges
7. `Label()` - 2 edges
8. `cn()` - 2 edges
9. `Input()` - 2 edges
10. `cn()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.67
Nodes (2): CardAction(), cn()

### Community 1 - "Community 1"
Cohesion: 0.67
Nodes (1): handleSubmit()

### Community 2 - "Community 2"
Cohesion: 0.67
Nodes (1): handleSubmit()

### Community 3 - "Community 3"
Cohesion: 0.67
Nodes (1): Aurora()

### Community 4 - "Community 4"
Cohesion: 0.67
Nodes (1): AuthFormField()

### Community 5 - "Community 5"
Cohesion: 0.67
Nodes (1): Label()

### Community 6 - "Community 6"
Cohesion: 0.67
Nodes (1): cn()

### Community 7 - "Community 7"
Cohesion: 0.67
Nodes (1): Input()

### Community 8 - "Community 8"
Cohesion: 0.67
Nodes (1): cn()

## Knowledge Gaps
- **Thin community `Community 0`** (4 nodes): `CardAction()`, `cn()`, `card.tsx`, `card.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 1`** (3 nodes): `create-account-page.tsx`, `handleSubmit()`, `create-account-page.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 2`** (3 nodes): `sign-in-page.tsx`, `handleSubmit()`, `sign-in-page.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 3`** (3 nodes): `Aurora()`, `Aurora.tsx`, `Aurora.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 4`** (3 nodes): `AuthFormField()`, `auth-form-field.tsx`, `auth-form-field.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 5`** (3 nodes): `label.tsx`, `Label()`, `label.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 6`** (3 nodes): `cn()`, `button.tsx`, `button.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (3 nodes): `input.tsx`, `Input()`, `input.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (3 nodes): `utils.ts`, `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._