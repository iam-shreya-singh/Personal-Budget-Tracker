# Personal-Budget-Tracker
Django , REST, React/Angular with Zustand integration

**Overview**
A full‑stack expense & budget management tool built with Django REST Framework + React 18 + Zustand + D3.js. 
Authenticated users can record income & expenses, set monthly budgets, and visualize the spending.

# **Quick Start Guide**
# clone & install
git clone https://github.com/iam-shreya-singh/Personal-Budget-Tracker.git
cd Personal-Budget-Tracker

# **Key Features**
* Token‑based login (Simple‑JWT)
* CRUD transactions with category tags & amount validation
* Monthly budget target per user
* Filter + paginated transaction list
* Dashboard & Budget vs Spend visualized in interactive D3.js charts

  # Auth System Setup

- Implemented JWT-based login using Django REST Framework + SimpleJWT
- API endpoint `/api/token/` returns valid access & refresh tokens
- Auth tested via Postman using Codespaces public URL
- Environment: GitHub Codespaces + Django 5 + REST Framework
- Superuser credentials:
  - Username: `user1`
  - Password: `spaceuser123`




