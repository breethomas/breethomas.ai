---
title: "An AI Lab on a Real Product"
description: "Banks assume variable means unpredictable. It doesn't. Balance is a free app for tipped and variable-income workers, and my hands-on lab for building AI on a real product."
role: "Balance · Co-Founder"
year: "2022-Present"
thumbnail: "/images/balance-preview.png"
metrics: ["12-Tool Agentic Assistant", "100+ Case Eval Set", "Server-Enforced Confirmation"]
order: 1
---

## The Problem

Banks assume variable income means unpredictable. It doesn't. Servers know exactly what a Friday night versus a Tuesday lunch earns. They're already doing the mental math. Traditional fintech ignores that intelligence.

## The Approach

Conversational AI that works with what users already know. Not rigid budget categories. Ask "Can I afford rent this month?" and get an honest answer based on actual earning patterns.

## The AI Work

**A 12-tool agentic assistant**
Eleven tools look things up, calculate or show choices. One edits a user's financial records (earnings, paydays, gigs), and it runs only after the user taps a confirmation card, and only the exact changes that card showed. That rule is enforced on the server, not in the prompt.

**Evals**
An LLM judge scores each case pass or fail against its own rubric, alongside deterministic checks: which tools were called or refused, and what a change includes or leaves out. More than 100 cases. Prompt changes get run against the set before they ship.

**Observability**
Every AI call is traced in PostHog.

## Key Decisions

**Pivot to conversational AI.** Started as an iOS app. Realized users don't want to categorize transactions. They want to ask questions and get answers.

**Eval-driven development.** Most AI products ship and pray. Here, changes go through the eval set first.

**Display vs do.** The assistant can show anything. It can only change someone's financial records with their explicit approval.

## What It Is

Balance is free and small on purpose. It's where I build, hands-on, the things I lead teams to build at work.
