# Copy-paste values for "New article" — What Is GitHub?

Use the values below in your admin **New article** form.

---

## Title
```
What Is GitHub? A Beginner-Friendly Guide to Version Control and Code Collaboration
```

## Slug (URL)
Leave as "auto from title" or use:
```
what-is-github-version-control-code-collaboration-guide
```

## Topic
```
Software
```
*(Alternatively: Career, or Development.)*

## Excerpt
```
GitHub is a web platform where programmers store, manage, and collaborate on code. It’s built on Git, which tracks every change you make. This guide covers repos, branching, pull requests, why GitHub matters for your portfolio and open source, and how it compares to GitLab, Bitbucket, and other alternatives.
```

## Analogy / plain-language version (optional)

*For deeper understanding; readers can switch to "In plain terms". Markdown supported.*

---

**Git** is like the **rulebook** for a special kind of notebook. The rulebook says: “Write on one page at a time. When you’re happy with a page, save it with a label. You can always go back to any old page later.”

**GitHub** is like the **shared notebook in the cloud**. Everyone has a way to see the same project. You can save your own “pages” (versions), suggest changes to someone else’s page, and the history of who wrote what and when is kept safely. If something goes wrong, you can flip back to an earlier page.

So: **Git** = the rules for tracking changes. **GitHub** = the place on the web where people use those rules to store and collaborate on code.

---

## Body (copy everything below this line)

**GitHub** is a web platform used by programmers to **store, manage, and collaborate on code**. It’s built around **Git**, a tool that tracks changes in files over time.

Think of GitHub as **Google Drive for code—but much more powerful**. It helps developers save their code, track every change, and work with others on the same project. This guide walks through the core ideas, how repos and collaboration work, why GitHub matters for your career and open source, and what alternatives exist.

---

## Git vs GitHub: the important difference

Before diving in, it helps to separate the two:

| Tool       | What it is                            |
| ---------- | ------------------------------------- |
| **Git**    | The tool that tracks code changes     |
| **GitHub** | The website that hosts Git projects   |

- **Git** = the engine (runs on your computer and tracks history).  
- **GitHub** = the online platform (hosting, collaboration, and community).

You use **Git** to create versions and history locally; you use **GitHub** to store that history online and work with others. Other platforms like GitLab and Bitbucket also host Git repositories; GitHub is the most widely used.

---

## The core idea: version control

When you code, you constantly change files. Without version control, one bad edit can leave you with no way to undo. GitHub (via Git) helps you:

- Save **every version** of your code  
- Go back to **previous versions** if something breaks  
- See **who changed what and when**

Example:

- Version 1: Basic website  
- Version 2: Added login page  
- Version 3: Fixed bug  

GitHub keeps **all those versions safely stored**. That’s version control: a time machine for your project.

---

## Repositories (repos)

A **repository** is basically a **project folder** on GitHub. It’s where one project’s code and history live.

Inside a repo you can store:

- Code files  
- Images and assets  
- Documentation  
- Project notes (e.g. README, contributing guides)

Example repo structure:

```
my-website
 ├── index.html
 ├── style.css
 ├── script.js
 └── README.md
```

Each repo has its own version history, issues, and (optionally) collaborators. When people say “check my GitHub,” they usually mean “look at my repositories.”

---

## Branching: safe experimentation

Developers use **branches** to try new ideas without breaking the main code. Think of branches as parallel copies of the project.

Example:

- **`main`** branch → stable, production-ready code  
- **`login-feature`** branch → new login system being built  

You do your work on the feature branch. If it works, you **merge** it into `main`. If it doesn’t, you can delete the branch or keep iterating. The main line stays clean until changes are ready.

---

## Collaboration: working with others

GitHub makes teamwork straightforward. Developers can:

- Work on the **same project from different locations**  
- Suggest improvements without touching the main code  
- **Review** each other’s code before it’s merged  

A common workflow, especially in **open-source projects**, looks like this:

1. **Fork** the project (copy it to your own GitHub account).  
2. **Clone** it to your computer and make changes.  
3. **Push** your branch and open a **pull request** (PR)—a request to merge your changes into the original project.  
4. Maintainers (or teammates) **review** the code, suggest edits, and then **merge** when it’s ready.

That’s how thousands of open-source projects accept contributions from developers around the world.

---

## Why GitHub matters for programmers

GitHub is widely used because it:

- **Stores code safely online** – No single laptop is the only copy.  
- **Tracks every change** – Full history and blame so you can see why something changed.  
- **Makes teamwork easy** – Branches, PRs, code review, and discussions in one place.  
- **Shows your portfolio to employers** – A profile with repos and activity is a standard part of a developer’s resume.  
- **Hosts open-source projects** – You can contribute to and learn from real-world code.

Many famous projects live on GitHub, including parts of **Linux**, **React**, **TensorFlow**, and countless libraries and tools. If you’re learning or job-hunting, having a GitHub account and a few clear repos is almost expected.

---

## Essential Git commands (when you’re ready)

Once you create a repo on GitHub, you’ll typically use Git from the command line (or a GUI) to sync your work. The commands you’ll use most:

- **`git clone <url>`** – Download a repo to your computer.  
- **`git add .`** – Stage changes.  
- **`git commit -m "message"`** – Save a version with a description.  
- **`git push`** – Upload your commits to GitHub.  
- **`git pull`** – Download the latest changes from GitHub.

Learning these five will get you through most day-to-day workflows. From there you can add branching (`git checkout -b branch-name`), merging, and working with pull requests.

---

## Example: a typical workflow

A developer building a website might:

1. Write code on their computer.  
2. Save versions using **Git** (`add` → `commit`).  
3. **Push** the project to **GitHub**.  
4. Collaborate with others (branches, PRs, code review).  
5. Use GitHub (or linked tools) to **deploy** the website.

So: local work with Git, cloud backup and collaboration on GitHub, then deploy. That pattern is standard across the industry.

---

## Alternatives to GitHub

Several platforms do similar things: host Git repos, support collaboration, and often add extras like CI/CD or project management. Most of them use **Git** underneath.

### GitLab

One of the **biggest competitors to GitHub**.

- Code hosting, similar to GitHub  
- Built-in **CI/CD** (automated testing and deployment)  
- Issue tracking and project management  
- Can be **self-hosted** (run on your own servers)

**Why people use it:** More DevOps tools built in; attractive for teams that want an all-in-one platform or full control of their code and infrastructure.

### Bitbucket

Owned by **Atlassian** (same company as **Jira**).

- Git repositories  
- Strong integration with Jira  
- Good for **team and project management**

**Why companies use it:** Fits well in corporate environments already using Jira and Confluence.

### SourceForge

One of the **earliest platforms for open-source software**, before GitHub became dominant.

- Project hosting, code downloads, community collaboration  

**Note:** It’s less popular today but still used for some legacy or niche open-source projects.

### Codeberg

A **community-run** Git hosting platform based on **Gitea**.

- Open-source  
- Privacy-focused  
- No large corporate ownership  

**Why people use it:** Preference for non-corporate, ethical, or privacy-conscious hosting.

### AWS CodeCommit

Part of **Amazon Web Services**.

- Private Git repositories  
- Tight integration with other AWS services  
- Aimed at companies already using AWS  

**Why companies use it:** Keeps code and pipelines inside the same cloud provider.

### Quick comparison

| Platform           | Best for                                  |
| ------------------ | ----------------------------------------- |
| **GitHub**         | Open source, large community, portfolios  |
| **GitLab**         | Full DevOps workflow, self-hosting        |
| **Bitbucket**      | Corporate teams using Jira                 |
| **Codeberg**       | Open source and privacy-focused           |
| **AWS CodeCommit** | Companies already using AWS               |

In practice, **GitHub is the most widely used**. Most open-source projects and developer portfolios are hosted there, so it’s the default place to learn, share, and get noticed. The concepts (repos, branches, PRs) transfer to GitLab, Bitbucket, and others.

---

## Simple definition

**GitHub** is a platform where programmers **store, track, and collaborate on code using Git**. You keep every version, work with others through branches and pull requests, and show your work to the world—or keep it private. Whether you’re learning, building a portfolio, or contributing to open source, GitHub is where a huge part of that happens. Create an account, make a repo, and push your first commit when you’re ready.
