export interface Agent {
  id: string;
  name: string;
  role: string;
  color: string;
  icon: string;
  reasoning: string[];
  downloadUrl: string;
}

export interface FoundationCard {
  id: string;
  title: string;
  summary: string;
  deepDive: string;
}

export const AGENTS: Agent[] = [
  {
    id: 'product',
    name: 'Product Agent',
    role: 'Strategy & Roadmap',
    color: 'var(--color-agent-product)',
    icon: 'Package',
    downloadUrl: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/product-skill.md',
    reasoning: [
      'Analyzing market trends for Q3...',
      'Prioritizing feature backlog based on user feedback.',
      'Drafting PRD for the new AI integration module.',
      'Syncing with R&D on technical feasibility.'
    ]
  },
  {
    id: 'rd',
    name: 'R&D Agent',
    role: 'Engineering & Innovation',
    color: 'var(--color-agent-rd)',
    icon: 'Code2',
    downloadUrl: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/rnd-skill.md',
    reasoning: [
      'Evaluating vector database performance metrics.',
      'Optimizing inference latency for the LLM pipeline.',
      'Implementing multi-agent communication protocols.',
      'Refactoring the orchestration layer for scalability.'
    ]
  },
  {
    id: 'finance',
    name: 'Finance Agent',
    role: 'Budget & ROI',
    color: 'var(--color-agent-finance)',
    icon: 'BarChart3',
    downloadUrl: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/finance-skill.md',
    reasoning: [
      'Calculating token cost efficiency per request.',
      'Projecting ROI for the automated workflow deployment.',
      'Auditing infrastructure spend across cloud providers.',
      'Preparing budget allocation for the next sprint.'
    ]
  },
  {
    id: 'sales',
    name: 'Sales Agent',
    role: 'Growth & Revenue',
    color: 'var(--color-agent-sales)',
    icon: 'TrendingUp',
    downloadUrl: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/sales-skill.md',
    reasoning: [
      'Identifying high-value leads in the enterprise sector.',
      'Drafting personalized outreach based on agentic insights.',
      'Closing the feedback loop with Product on feature requests.',
      'Forecasting quarterly revenue growth from AI services.'
    ]
  }
];

export const FOUNDATION_CARDS: FoundationCard[] = [
  {
    id: 'mcp',
    title: 'MCPs (Model Context Protocol)',
    summary: 'MCP is the open standard that allows AI models to interact with external data sources and tools without custom, brittle integrations.',
    deepDive: 'Model Context Protocol (MCP) acts as a universal translator between LLMs and your local or remote data. Instead of writing unique code for every tool, MCP provides a structured way for the model to discover capabilities, read file systems, query databases, and trigger API actions. It ensures that "do this for me" is backed by a secure, standardized execution layer that handles authentication and data formatting automatically.'
  },
  {
    id: 'skills',
    title: 'Skills',
    summary: 'Skills are the "SOPs" of the AI world—reusable, version-controlled instruction sets that define exactly how an agent should execute a specific workflow.',
    deepDive: 'A Skill is more than just a prompt; it is a comprehensive bundle of logic. It includes system instructions, tool definitions, hand-off protocols, and success criteria. \n\n**How to add Skills to Claude:**\n1. Open a Project in Claude.ai.\n2. Go to the "Project Knowledge" or "Custom Instructions" section.\n3. Upload your `.md` skill file or paste the content.\n4. Claude will now follow these specific SOPs for every interaction within that project.'
  },
  {
    id: 'apps',
    title: 'ChatGPT and apps',
    summary: 'The bridge between pure reasoning and real-world impact. Connected applications allow AI to step out of the chat box and into your existing software stack.',
    deepDive: 'Connected apps (or "Actions") turn an LLM into an active participant in your organization. By linking to services like Slack, Google Calendar, Jira, or your internal CRM, the assistant gains the ability to pull context from where your work actually lives and push results back into those systems. This eliminates the "copy-paste tax" and allows for autonomous background tasks, such as monitoring an inbox or updating a project roadmap based on a meeting transcript.'
  },
  {
    id: 'gpts',
    title: 'Custom GPTs',
    summary: 'Specialized assistants tuned for high-performance in a narrow domain, combining specific knowledge with a tailored persona.',
    deepDive: 'Custom GPTs represent the first step toward a multi-agent ecosystem. Unlike a generic model, a Custom GPT is pre-loaded with specialized knowledge (via RAG), specific behavioral constraints, and a clear mission statement. This specialization reduces "hallucination" and increases relevance. In a professional setting, you might have a "Legal Review GPT," a "Code Auditor GPT," and a "Brand Voice GPT," each acting as a high-fidelity expert in its respective field.'
  }
];

export const DAY2_CURRICULUM = [
  {
    id: 'desktop',
    title: 'Claude Desktop',
    body: 'Claude Desktop is the full local app for working with Claude. The most powerful capability there for heavy work is Cowork: it is built to run complex, multi-step tasks—planning, using tools, and producing outputs—beyond a single short reply.'
  },
  {
    id: 'project-skills',
    title: 'Skills in your project',
    body: 'We covered Skills in a project context: what they are and how to add them to a project so the same detailed instructions travel with the work and stay usable across sessions and teammates.'
  },
  {
    id: 'create-agent',
    title: 'Create your agent now',
    intro: 'Use this sequence when you want to turn a recurring workflow into something you can run with Claude.',
    steps: [
      'Identify repetitive tasks you perform often. Those are the best candidates for a skill or a dedicated setup.',
      'Talk it through. If you can describe the task clearly, AI can usually help. Start brainstorming with Claude until the steps, inputs, and desired output are obvious.',
      'Generate a skill file. Ask Claude to generate a skill file for that workflow. Claude can draft the file and help you install it in the right place for your project or environment.',
      'Use it, then refine. Run the skill on real work. Iterate and improve the instructions as you discover edge cases and better wording.'
    ],
    outro: 'You do not need a perfect spec on day one; the skill gets better each time you use it.'
  },
  {
    id: 'demo-narrative',
    title: 'What we demonstrated',
    body: 'We demonstrated a full flow from a kickoff email, then Product, R&D, Finance, and Sales agents producing artifacts—showing Cowork and multi-agent work end to end.'
  }
];

export const RESOURCES = [
  {
    id: 'product',
    name: 'product-skill.md',
    downloadUrl: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/product-skill.md',
    source: `# Product Lead — PRD Skill

## Context
The Product Lead translates business vision into actionable product requirements.

## Before you start
- Sync with stakeholders on the core problem statement.

## Your task
- Create a comprehensive PRD that guides the R&D and Finance teams.

## Required page structure
1. Table of contents
2. TL;DR
3. Overview
4. Problem statement
5. Target market
6. Core features
7. Success metrics
8. Launch timeline
9. Dependencies & risks`,
    preview: `# Product Lead — PRD Skill

## Context
The Product Lead translates business vision into actionable product requirements.

## Before you start
- Sync with stakeholders on the core problem statement.

## Your task
- Create a comprehensive PRD that guides the R&D and Finance teams.

## Required page structure
1. Table of contents
2. TL;DR
3. Overview
4. Problem statement
5. Target market
6. Core features
7. Success metrics
8. Launch timeline
9. Dependencies & risks`
  },
  {
    id: 'rd',
    name: 'rnd-skill.md',
    downloadUrl: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/rnd-skill.md',
    source: `# R&D Lead — Technical Feasibility Skill

## Context
The R&D Lead evaluates the technical viability of proposed features and defines the engineering roadmap.

## Before you start
- Read the PRD from Confluence.

## Step 1 — Read the PRD from Confluence
- Understand the core features and success metrics.

## Step 2 — Write the Technical Feasibility page to Confluence
- Define the architecture and tech stack.
- Identify potential technical blockers.

## Step 3 — Create Jira epic and stories
- Create a main Epic.
- Create at least 5 linked stories.

## Step 4 — Generate API scaffold inline
- Provide a basic API structure for the proposed features.`,
    preview: `# R&D Lead — Technical Feasibility Skill

## Context
The R&D Lead evaluates the technical viability of proposed features and defines the engineering roadmap.

## Before you start
- Read the PRD from Confluence.

## Step 1 — Read the PRD from Confluence
- Understand the core features and success metrics.

## Step 2 — Write the Technical Feasibility page to Confluence
- Define the architecture and tech stack.
- Identify potential technical blockers.

## Step 3 — Create Jira epic and stories
- Create a main Epic.
- Create at least 5 linked stories.

## Step 4 — Generate API scaffold inline
- Provide a basic API structure for the proposed features.`
  },
  {
    id: 'finance',
    name: 'finance-skill.md',
    downloadUrl: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/finance-skill.md',
    source: `# Finance Lead — Pricing & Deal Structure Skill

## Context
The Finance Lead is responsible for ensuring that all deals are structured for maximum ROI and that pricing reflects the technical complexity and market value.

## Before you start
- Review the latest market benchmarks.
- Ensure you have access to the R&D Technical Feasibility page.

## Step 1 — Read both Confluence pages
- Read the PRD.
- Read the R&D Technical Feasibility page.

## Step 2 — Reconcile before pricing
- Identify any discrepancies between product requirements and technical estimates.

## Step 3 — Write the Pricing page to Confluence
- Use the required page structure.
- Maintain a professional and analytical tone.`,
    preview: `# Finance Lead — Pricing & Deal Structure Skill

## Context
The Finance Lead is responsible for ensuring that all deals are structured for maximum ROI and that pricing reflects the technical complexity and market value.

## Before you start
- Review the latest market benchmarks.
- Ensure you have access to the R&D Technical Feasibility page.

## Step 1 — Read both Confluence pages
- Read the PRD.
- Read the R&D Technical Feasibility page.

## Step 2 — Reconcile before pricing
- Identify any discrepancies between product requirements and technical estimates.

## Step 3 — Write the Pricing page to Confluence
- Use the required page structure.
- Maintain a professional and analytical tone.`
  },
  {
    id: 'sales',
    name: 'sales-skill.md',
    downloadUrl: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/sales-skill.md',
    source: `# Sales Lead — Prospect Outreach Skill

## Context
The Sales Lead drives growth by identifying and engaging with high-potential prospects.

## Before you start
- Read both the PRD and the Pricing pages on Confluence.

## Step 1 — Read both Confluence pages
- Understand the product value proposition and deal structure.

## Step 2 — Draft the prospect outreach email via Gmail
- Follow the email requirements and structure.
- Maintain a persuasive yet professional tone.

## Step 3 — Create the discovery call in Google Calendar
- Set up the meeting with all relevant stakeholders.`,
    preview: `# Sales Lead — Prospect Outreach Skill

## Context
The Sales Lead drives growth by identifying and engaging with high-potential prospects.

## Before you start
- Read both the PRD and the Pricing pages on Confluence.

## Step 1 — Read both Confluence pages
- Understand the product value proposition and deal structure.

## Step 2 — Draft the prospect outreach email via Gmail
- Follow the email requirements and structure.
- Maintain a persuasive yet professional tone.

## Step 3 — Create the discovery call in Google Calendar
- Set up the meeting with all relevant stakeholders.`
  },
  {
    id: 'create-skill-convo',
    name: 'create-product-skill-conversation.md',
    downloadUrl: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/create-product-skill-conversation.md',
    source: `# Skill Creation Conversation — Product Lead

This document shows a full conversation with Claude on how to create a product skill. 
Follow these steps to create your own skill: describe your workflow, define the inputs and outputs, and let Claude refine the logic into a structured skill file.

---

## How to use this file
Run this conversation in a fresh Claude session to recreate the Product Lead skill.
Each turn is labeled. Claude's questions are included exactly as asked.
Your responses are included exactly as given. At the end, Claude produces the skill file.

---

## Turn 1

**USER**
I want to build a Claude skill for our product team at Perion Networks.
When someone says they're the Product Lead, Claude should know exactly
what to do for a new product launch.

---

**CLAUDE**
Great — I want to make sure the skill is precise enough to actually work
reliably in your team's workflow, so let me ask a few things.

When the Product Lead activates this skill, where does the input come from?
For example — does someone paste a kickoff brief into chat, or is there an
email already in their inbox that Claude should go and find?

---

## Turn 2

**USER**
The CEO sends a kickoff email. It's in the inbox. Claude should find it and read it.

---

**CLAUDE**
Good. And what's the main deliverable the Product Lead needs to produce
from that email — a document, a plan, something in a project management
tool, or a combination?

---

## Turn 3

**USER**
A PRD. Published to our Confluence space. It's called Perion Pulse.

---

**CLAUDE**
Perfect. Two more things before I write the skill.

First — what sections do you want in the PRD? I can propose a standard
structure for a SaaS product launch and you tell me if anything is missing,
or you can describe what you need.

Second — once the PRD is published, who reads it next? That determines
what the handoff instructions at the end of the skill should say.

---

## Turn 4

**USER**
Propose the structure. And R&D, Finance, and Sales all read it.

---

**CLAUDE**
Here's the structure I'd propose for a Perion product launch PRD:

1. Overview — what the product is and why Perion is building it now
2. Problem statement — the pain advertisers have today and why it isn't solved
3. Target market — buyer persona and user persona
4. Core features — what ships, described for both technical and business readers
5. Success metrics — adoption, engagement, business impact, NPS
6. Launch timeline — milestone table with owner, date, status
7. Dependencies & risks — what could delay launch and what must be true first

One more thing — should the page have any mandatory structure at the top
before the content sections? For example a table of contents with anchor
links, or a TL;DR summary for people who won't read the whole thing?

---

## Turn 5

**USER**
Yes — TOC with links and a TL;DR with 5 key bullets right after it.

---

**CLAUDE**
That's everything I need. Here is the skill file:

---

## Generated skill file
Save the content below as \`product-skill.md\` in your Claude skills folder.

\`\`\`markdown
---
name: product-lead
description: >
  Activate this skill when the user says "I'm the Product Lead" or "product hat"
  or asks Claude to act as the Product Lead for a product launch at Perion Networks.
  This skill searches Gmail for the CEO kickoff email, reads it, and writes a
  complete PRD to the Perion Pulse Confluence space with TOC, TL;DR, and 7 sections.
---

# Product Lead — PRD Skill

## What this skill does
1. Searches Gmail for the most recent CEO kickoff email and reads it in full
2. Extracts product vision, target market, features, and priorities from the email
3. Asks for missing context only if it cannot be inferred from the email
4. Writes a complete PRD to the Perion Pulse Confluence space with TOC, TL;DR,
   and 7 sections
5. Confirms the published page URL and tells the user which teams should read it next

## Context
You are the Product Lead at Perion Networks. The CEO has sent a company-wide kickoff
email approving a new product launch. Your job is to find that email in Gmail, read it,
and translate the business vision into a detailed, well-structured Product Requirements
Document published to Confluence.

This document becomes the single source of truth for R&D, Finance, and Sales at Perion.
Everything else in the launch depends on what you write here.
Do not begin writing until you have read the email.

## Before you start
Search Gmail for the most recent email with the product name in the subject line.
Read the full email before doing anything else.

Then check: do you have the following?
- Product name — infer from the email subject if not stated explicitly
- Confluence space — default to Perion Pulse (space key: PP) on amconsultingai.atlassian.net

Only ask the user if you genuinely cannot infer these from the email.

## Your task
Read the kickoff email carefully. Extract the business intent, the product concept,
the target audience, and the implied priorities. Then write a complete, professional
PRD and publish it to Confluence.

Do not invent facts. Base every section on what the email contains.
Where information is genuinely missing, write a clearly marked placeholder:
*[To be confirmed by Product Lead]*

## Required page structure
The page must open with a TOC, then a TL;DR, then the 7 content sections in order.

### Table of contents (first element on the page)
Generate a TOC with anchor hyperlinks to every section on the page.
Sections to link: TL;DR, Overview, Problem statement, Target market, Core features,
Success metrics, Launch timeline, Dependencies & risks.
Format as a linked list so readers can jump directly to any section.

### TL;DR (immediately after TOC)
Write exactly 5 bullet points. Each bullet is one key takeaway a reader must walk
away with after skimming this page. Cover:
- What the product is
- Who it is for
- The core problem it solves
- The most important feature
- The launch target date or milestone

One sentence per bullet. No sub-bullets.

### 1. Overview
Two to three paragraphs. Describe what the product is, why Perion is building it now,
and how it fits into the Perion One platform strategy. Write for a senior reader who
is not deeply technical.

### 2. Problem statement
Describe the core pain point the product solves. Name the audience, what they do today
to work around the problem, and why that workaround is insufficient.
Make this feel urgent and grounded in the ad-tech market reality.

### 3. Target market
Define the ideal customer profile clearly:
- Who is the target buyer (company type, size, industry)?
- Who is the end user (role, day-to-day context)?
- What is the minimum qualifying condition for a prospect?

Write one paragraph on the buyer persona and one on the user persona.

### 4. Core features
List and describe each core feature. For each:
- One sentence on what it does
- One sentence on why it matters to the advertiser or agency

Use features stated or implied by the kickoff email. If features were not explicitly
named, derive them logically from the problem and target market — mark these clearly.

### 5. Success metrics
Define how Perion will measure success at launch and at 6 months. Include:
- Adoption (accounts or users within 90 days of GA)
- Engagement (sessions, frequency, or depth of use)
- Business impact (ARR, retention, or time-to-insight reduction)
- Customer satisfaction (NPS at 60 days post-onboarding)

Where specific targets are not known, write the metric name and mark the target
as *[TBD — Finance/Leadership to confirm]*

### 6. Launch timeline
Write a milestone table with columns: Milestone | Owner | Target Date | Status

Milestones to include (use real dates relative to today):
- PRD published → Product → today → Done
- Technical feasibility published → R&D → Day 3
- Pricing structure published → Finance → Day 3
- Jira epic and stories created → R&D → Day 3
- API scaffold complete → R&D → Week 3
- Dashboard UI complete → R&D → Week 6
- Internal QA → R&D → Week 8
- Pilot with first account → Sales → Week 10
- GA launch → All → Week 12

### 7. Dependencies & risks
Two to three bullets per category.

**Risks:** What could delay or derail the launch?
**Dependencies:** What must be true before this plan can succeed?

Base these on the actual email content and Perion's known platform context.
No generic filler.

## Tone and style
- Professional, direct, and confident
- Written as a senior product leader at a public ad-tech company
- No filler phrases ("In conclusion", "It is worth noting", "As mentioned above")
- Tables for features and milestones
- Sentence case for all headings

## After publishing
Tell the user:
- The page was created/updated successfully with its direct URL
- These teams should read it next: R&D, Finance, Sales
- Suggested next step: "Switch to your R&D hat — ask Claude to read this
  PRD and write the technical feasibility plan."
\`\`\``,
    preview: `# Skill Creation Conversation — Product Lead

This document shows a full conversation with Claude on how to create a product skill. 
Follow these steps to create your own skill: describe your workflow, define the inputs and outputs, and let Claude refine the logic into a structured skill file.

---

## How to use this file
Run this conversation in a fresh Claude session to recreate the Product Lead skill.
Each turn is labeled. Claude's questions are included exactly as asked.
Your responses are included exactly as given. At the end, Claude produces the skill file.

---

## Turn 1

**USER**
I want to build a Claude skill for our product team at Perion Networks.
When someone says they're the Product Lead, Claude should know exactly
what to do for a new product launch.

---

**CLAUDE**
Great — I want to make sure the skill is precise enough to actually work
reliably in your team's workflow, so let me ask a few things.

When the Product Lead activates this skill, where does the input come from?
For example — does someone paste a kickoff brief into chat, or is there an
email already in their inbox that Claude should go and find?

---

## Turn 2

**USER**
The CEO sends a kickoff email. It's in the inbox. Claude should find it and read it.

---

**CLAUDE**
Good. And what's the main deliverable the Product Lead needs to produce
from that email — a document, a plan, something in a project management
tool, or a combination?

---

## Turn 3

**USER**
A PRD. Published to our Confluence space. It's called Perion Pulse.

---

**CLAUDE**
Perfect. Two more things before I write the skill.

First — what sections do you want in the PRD? I can propose a standard
structure for a SaaS product launch and you tell me if anything is missing,
or you can describe what you need.

Second — once the PRD is published, who reads it next? That determines
what the handoff instructions at the end of the skill should say.

---

## Turn 4

**USER**
Propose the structure. And R&D, Finance, and Sales all read it.

---

**CLAUDE**
Here's the structure I'd propose for a Perion product launch PRD:

1. Overview — what the product is and why Perion is building it now
2. Problem statement — the pain advertisers have today and why it isn't solved
3. Target market — buyer persona and user persona
4. Core features — what ships, described for both technical and business readers
5. Success metrics — adoption, engagement, business impact, NPS
6. Launch timeline — milestone table with owner, date, status
7. Dependencies & risks — what could delay launch and what must be true first

One more thing — should the page have any mandatory structure at the top
before the content sections? For example a table of contents with anchor
links, or a TL;DR summary for people who won't read the whole thing?

---

## Turn 5

**USER**
Yes — TOC with links and a TL;DR with 5 key bullets right after it.

---

**CLAUDE**
That's everything I need. Here is the skill file:

---

## Generated skill file
Save the content below as \`product-skill.md\` in your Claude skills folder.

\`\`\`markdown
---
name: product-lead
description: >
  Activate this skill when the user says "I'm the Product Lead" or "product hat"
  or asks Claude to act as the Product Lead for a product launch at Perion Networks.
  This skill searches Gmail for the CEO kickoff email, reads it, and writes a
  complete PRD to the Perion Pulse Confluence space with TOC, TL;DR, and 7 sections.
---

# Product Lead — PRD Skill

## What this skill does
1. Searches Gmail for the most recent CEO kickoff email and reads it in full
2. Extracts product vision, target market, features, and priorities from the email
3. Asks for missing context only if it cannot be inferred from the email
4. Writes a complete PRD to the Perion Pulse Confluence space with TOC, TL;DR,
   and 7 sections
5. Confirms the published page URL and tells the user which teams should read it next

## Context
You are the Product Lead at Perion Networks. The CEO has sent a company-wide kickoff
email approving a new product launch. Your job is to find that email in Gmail, read it,
and translate the business vision into a detailed, well-structured Product Requirements
Document published to Confluence.

This document becomes the single source of truth for R&D, Finance, and Sales at Perion.
Everything else in the launch depends on what you write here.
Do not begin writing until you have read the email.

## Before you start
Search Gmail for the most recent email with the product name in the subject line.
Read the full email before doing anything else.

Then check: do you have the following?
- Product name — infer from the email subject if not stated explicitly
- Confluence space — default to Perion Pulse (space key: PP) on amconsultingai.atlassian.net

Only ask the user if you genuinely cannot infer these from the email.

## Your task
Read the kickoff email carefully. Extract the business intent, the product concept,
the target audience, and the implied priorities. Then write a complete, professional
PRD and publish it to Confluence.

Do not invent facts. Base every section on what the email contains.
Where information is genuinely missing, write a clearly marked placeholder:
*[To be confirmed by Product Lead]*

## Required page structure
The page must open with a TOC, then a TL;DR, then the 7 content sections in order.

### Table of contents (first element on the page)
Generate a TOC with anchor hyperlinks to every section on the page.
Sections to link: TL;DR, Overview, Problem statement, Target market, Core features,
Success metrics, Launch timeline, Dependencies & risks.
Format as a linked list so readers can jump directly to any section.

### TL;DR (immediately after TOC)
Write exactly 5 bullet points. Each bullet is one key takeaway a reader must walk
away with after skimming this page. Cover:
- What the product is
- Who it is for
- The core problem it solves
- The most important feature
- The launch target date or milestone

One sentence per bullet. No sub-bullets.

### 1. Overview
Two to three paragraphs. Describe what the product is, why Perion is building it now,
and how it fits into the Perion One platform strategy. Write for a senior reader who
is not deeply technical.

### 2. Problem statement
Describe the core pain point the product solves. Name the audience, what they do today
to work around the problem, and why that workaround is insufficient.
Make this feel urgent and grounded in the ad-tech market reality.

### 3. Target market
Define the ideal customer profile clearly:
- Who is the target buyer (company type, size, industry)?
- Who is the end user (role, day-to-day context)?
- What is the minimum qualifying condition for a prospect?

Write one paragraph on the buyer persona and one on the user persona.

### 4. Core features
List and describe each core feature. For each:
- One sentence on what it does
- One sentence on why it matters to the advertiser or agency

Use features stated or implied by the kickoff email. If features were not explicitly
named, derive them logically from the problem and target market — mark these clearly.

### 5. Success metrics
Define how Perion will measure success at launch and at 6 months. Include:
- Adoption (accounts or users within 90 days of GA)
- Engagement (sessions, frequency, or depth of use)
- Business impact (ARR, retention, or time-to-insight reduction)
- Customer satisfaction (NPS at 60 days post-onboarding)

Where specific targets are not known, write the metric name and mark the target
as *[TBD — Finance/Leadership to confirm]*

### 6. Launch timeline
Write a milestone table with columns: Milestone | Owner | Target Date | Status

Milestones to include (use real dates relative to today):
- PRD published → Product → today → Done
- Technical feasibility published → R&D → Day 3
- Pricing structure published → Finance → Day 3
- Jira epic and stories created → R&D → Day 3
- API scaffold complete → R&D → Week 3
- Dashboard UI complete → R&D → Week 6
- Internal QA → R&D → Week 8
- Pilot with first account → Sales → Week 10
- GA launch → All → Week 12

### 7. Dependencies & risks
Two to three bullets per category.

**Risks:** What could delay or derail the launch?
**Dependencies:** What must be true before this plan can succeed?

Base these on the actual email content and Perion's known platform context.
No generic filler.

## Tone and style
- Professional, direct, and confident
- Written as a senior product leader at a public ad-tech company
- No filler phrases ("In conclusion", "It is worth noting", "As mentioned above")
- Tables for features and milestones
- Sentence case for all headings

## After publishing
Tell the user:
- The page was created/updated successfully with its direct URL
- These teams should read it next: R&D, Finance, Sales
- Suggested next step: "Switch to your R&D hat — ask Claude to read this
  PRD and write the technical feasibility plan."
\`\`\``
  }
];
