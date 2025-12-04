---
title: "Balance"
description: "AI-powered financial forecasting for variable-income workers. Built conversational AI with 7-tool agentic architecture."
role: "Product Leader & Founder"
year: "2022-Present"
thumbnail: "/images/balance-preview.png"
metrics: ["60% Retention", "81% Tipped Workers", "7-Tool Agentic System"]
order: 1
---

## The Problem

Variable-income workers—servers, bartenders, gig workers—can't use traditional budgeting tools. Their income is unpredictable, arriving in cash tips and fluctuating week to week. Most financial apps assume steady paychecks and fail spectacularly for the 81% of hospitality workers who rely on tips.

## The Approach

We built a conversational AI that understands variable income. Instead of rigid budget categories, Balance uses natural language to help users forecast cash flow based on their actual earning patterns.

### Technical Architecture

**7-Tool Agentic System**
- Safe tools (read-only queries) execute automatically
- Dangerous tools (financial actions) require user confirmation
- Classification system prevents accidental financial mistakes

**LLM-as-Judge Evaluation**
- 6-dimension scoring framework for response quality
- Prompt variant testing in production
- ML observability through Arize integration

**Structured Outputs**
- Schema validation for all AI responses
- Predictable data formats for frontend consumption
- Error handling for edge cases

## Key Decisions

**Conversational-first UX:** We pivoted from a traditional iOS native SaaS to conversational AI. Users don't want to categorize transactions—they want to ask "Can I afford rent this month?" and get an honest answer.

**Eval-driven development:** Before shipping any prompt change, we run it through the evaluation framework. This prevents the "it works in testing, breaks in production" problem that plagues most AI products.

**User confirmation for dangerous operations:** AI should never move money without explicit user consent. The safe/dangerous tool classification ensures users stay in control.

## Outcomes

- **60% retention** in a category where 80% churn is typical
- Serving **81% tipped workers** who are underserved by traditional fintech
- Production-grade **agentic architecture** with measurable quality metrics

## What I Learned

Building AI products requires a fundamentally different quality bar. You can't just ship and iterate—you need evaluation frameworks that catch subtle regressions. The users who depend on this product for financial decisions deserve that rigor.
