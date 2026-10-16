# Contributing

Thanks for contributing back to the template!
Just a few simple things for guidance.

Clone it:

```bash
git clone https://github.com/eng-enablement-platform/eep-template-web-dev-starter.git
```

There's no build step - open the folder in VS Code and use **Open with Live Server** on `index.html` (see the [README](README.md#quick-start)).

> [!NOTE]
> The `.eep/` folder tells the [create-eep](https://github.com/eng-enablement-platform/create-eep) CLI how to turn the template into a project (starter README, files to remove etc.).
> If you add, rename or remove something it references, update `.eep/template.json` and `.eep/README.md` too.

## Testing a change

Try your branch the way a user would, by generating a project from it once it's pushed:

```bash
npx create-eep@latest my-test --template web-dev-starter --ref <your-branch>
```

## Branches

```
<type>/<issue-number>-<brief-description>

feat/EEP-123-dark-mode
fix/EEP-456-nav-focus
```

- `feat/` - new features
- `fix/` - bug fixes
- `docs/` - documentation-only changes
- `chore/` - tooling, config
- Ad-hoc (no issue): `fix/<brief-description>` is fine for small isolated fixes

The branch prefix mirrors the [commit type](#commits).

## Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/).
Every message starts with one of:

```
feat:      new feature
fix:       bug fix
refactor:  neither fixes a bug nor adds a feature
chore:     tooling, config
docs:      documentation only
BREAKING CHANGE: incompatible change
```

Commit types drive releases: `feat:` and `fix:` end up in the changelog and decide the next version number, so pick them carefully.

## Pull requests

- **Fill out the PR template.** GitHub pre-fills it from `.github/pull_request_template.md` - describe the problem, the solution, how to verify, and any AI/agent assistance used.
- **Self-review before publishing.** Resolve conflicts, check the page on a narrow (mobile) and wide screen, and confirm the change actually works.
- **Keep it small and in scope.** Don't bundle unrelated work. For large changes, stack PRs rather than opening one giant diff.
- **Stay on it after it's up.** Once threads are resolved and approvals are in, merge promptly.

## Releases

Template releases are automated with [release-please](https://github.com/googleapis/release-please) - never edit `CHANGELOG.md` or `version.txt` by hand.

1. Merge PRs to `main` with conventional commits - `fix:` means a patch release, `feat:` a minor one, and `docs:` / `chore:` / `ci:` don't trigger a release.
2. release-please keeps a single **Release PR** open with the next version and changelog, updating it on every merge.
3. Merge the Release PR to release: it tags the commit (`vX.Y.Z`) and creates a GitHub Release.
