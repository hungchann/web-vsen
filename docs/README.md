# Tài liệu Dự án - VSEN Medical Equipment Website

**Version:** 1.0  
**Date:** 2025-12-28

---

## Tổng quan

Thư mục này chứa tài liệu cho dự án website bán thiết bị y tế, được tối giản cho team nhỏ.

**Cấu trúc tài liệu (3 files):**
1. **01-Requirements.md** - Requirements, User Stories, Phase Comparison
2. **02-Technical.md** - Architecture, Database, API, Infrastructure
3. **03-Design.md** - Sitemap, Design System

---

## Danh sách Tài liệu

### 📄 [01-Requirements.md](./01-Requirements.md)
**Requirements & User Stories**

Bao gồm:
- Phân chia Phase 1 vs Phase 2
- Product Requirements (Phase 1)
- User Stories & Backlog (Phase 1)
- Sprint planning

**Đối tượng:** Product Owner, Development Team, Scrum Master

---

### 📄 [02-Technical.md](./02-Technical.md)
**Technical Documentation**

Bao gồm:
- System Architecture
- Technology Stack
- Database Schema (Phase 1)
- API Documentation
- Infrastructure & Deployment

**Đối tượng:** Backend Developers, Frontend Developers, DevOps

---

### 📄 [03-Design.md](./03-Design.md)
**Design Documentation**

Bao gồm:
- Sitemap & Information Architecture
- Design System (Colors, Typography, Components)
- Responsive Design

**Đối tượng:** UI/UX Designers, Frontend Developers

---

## Cách sử dụng

### Cho Product Owner
1. Đọc **01-Requirements.md** để hiểu requirements và user stories
2. Review Phase 1 scope

### Cho Development Team
1. Đọc **01-Requirements.md** để hiểu requirements
2. Đọc **02-Technical.md** để implement
3. Tham khảo **03-Design.md** cho UI/UX

### Cho Designers
1. Đọc **01-Requirements.md** để hiểu features
2. Đọc **03-Design.md** để thiết kế theo design system

---

## Technology Stack

### Backend
- Laravel 11.x
- PostgreSQL 15+
- Redis 7+
- Elasticsearch 8.x hoặc Meilisearch
- Filament 3.x (Admin)

### Frontend
- React 18+ (Laravel React Starter Kit)
- Vite
- Tailwind CSS

### Infrastructure (Phase 1 - MVP)
- **Single VPS** (8GB RAM, 4 vCPU, 200GB SSD) - **$45-48/month**
  - Tất cả services chạy trên 1 server (Laravel, PostgreSQL, Redis, Elasticsearch)
  - File Storage: VPS local disk (với automatic backup)
  - Email: Gmail SMTP (free)
  - **Phù hợp cho MVP** với traffic thấp (< 10,000 visits/month)

---

## Phase 1 Scope (MVP)

### ✅ Có trong Phase 1:
- Navigation & Search (Mega Menu, Search)
- Product Catalog (Listing, Detail, Filters)
- Content Management (News, Resources)
- Admin Panel (Filament)
- Basic Lead Generation (Quote requests, Contact forms)
- Basic Service Request (Form only)

### ❌ KHÔNG có trong Phase 1:
- Đa ngôn ngữ & Đa quốc gia
- Events & Webinars
- User Registration/Login
- Customer Portal
- Shopping Cart & Checkout
- CRM Integration

**Timeline:** 3-4 tháng

---

## Phase 2 Scope

- Đa ngôn ngữ & Đa quốc gia
- Events & Webinars
- User Authentication & Customer Portal
- B2B E-commerce
- Service Request System nâng cao
- CRM Integration
- Advanced Lead Gen
- Compliance (HIPAA, GDPR, WCAG 2.1)

**Timeline:** 4-6 tháng (sau Phase 1)

---

## Quick Start

### Development
```bash
composer install
npm install
php artisan migrate
npm run dev
```

### Deployment
Xem chi tiết trong **02-Technical.md**

---

## Notes

- Tài liệu được tối giản cho team nhỏ
- Focus vào Phase 1 (MVP)
- Phase 2 features sẽ được thêm sau
- Tất cả tài liệu sử dụng Markdown format

---

**Last Updated:** 2025-12-28
