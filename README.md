# Vedic Encyclopedia System

Full-Stack Web Application for ISKCON Sanjeevani IT Cell

## Overview

The Vedic Encyclopedia System is a full-stack content management platform developed for **ISKCON Sanjeevani IT Cell** to manage, organize, and publish structured Vedic articles.

The system provides secure admin access, categorized article management, and controlled publishing workflows with role-based data protection.

---

## Problem Statement

Managing Vedic articles manually leads to:

* Lack of structured categorization
* No controlled publishing workflow
* No role-based access security
* Difficulty in scalable content management

This platform solves those problems with a secure, database-driven architecture.

---

## Key Features

### Admin Authentication

* Secure login system using Supabase Authentication
* Protected admin dashboard routes

### Category & Article Management

* Create, edit, delete categories
* Full CRUD operations for articles
* Relational database structure (Category → Articles)

### Draft & Publish Workflow

* Articles stored with status control (`draft` / `published`)
* Only published articles visible to public users

### Role-Based Access Control

* Implemented Supabase Row Level Security (RLS)
* Restricted article creation/editing to authorized users
* Enforced database-level access policies

### Responsive UI

* Built using Next.js App Router
* Styled with Tailwind CSS
* Optimized for clean content readability

---

## Tech Stack

Frontend:

* Next.js (App Router)
* React
* Tailwind CSS

Backend:

* Supabase (PostgreSQL)
* Supabase Authentication
* Row Level Security (RLS)

Deployment:

* Vercel

---

## Database Design

Core Tables:

* `categories`
* `articles`
* `users`

Key Relationships:

* Each article belongs to a category
* Article status controls visibility
* RLS ensures secure row-level data access

---

## Security Implementation

* Supabase Auth for admin access
* Protected routes in frontend
* Database-level RLS policies for:

  * Insert
  * Update
  * Delete
  * Select

Security logic is enforced at the database layer, not just UI level.

---

## Project Structure

```
/app
  /admin
  /articles
  /categories
/components
/lib
```

Modular component-based structure following Next.js best practices.

---

## Deployment

Live Project:
[https://team-b-iskcon-vedic-encyclopedia.vercel.app/](https://team-b-iskcon-vedic-encyclopedia.vercel.app/)

---

## Learning Outcomes

* Real-world database schema design
* Implementing Row Level Security policies
* Secure authentication workflows
* Team collaboration in a full-stack environment
* Production-style deployment

---

## Contributors

Developed as a team project under
**ISKCON Sanjeevani IT Cell**
