# VSEN Medical Equipment - Website Bán Thiết Bị Y Tế

Website bán thiết bị y tế được xây dựng với Laravel + React, tương tự GE Medical.

## 📋 Tổng Quan Dự Án

Dự án này là một website B2B để bán và quản lý thiết bị y tế, bao gồm:
- **Product Catalog**: Danh mục sản phẩm với tìm kiếm nâng cao
- **Content Management**: Newsroom, Resource Center
- **Lead Generation**: Form yêu cầu báo giá, liên hệ
- **Admin Panel**: Quản lý sản phẩm, nội dung, leads (Filament)

**Phase 1 (MVP)**: 3-4 tháng - Các tính năng cơ bản  
**Phase 2**: 4-6 tháng - E-commerce B2B, đa ngôn ngữ, CRM integration

Xem chi tiết: [`docs/01-Requirements.md`](docs/01-Requirements.md)

---

## 🛠 Tech Stack

### Backend
- **PHP**: 8.2+
- **Framework**: Laravel 12
- **Admin Panel**: Filament 3.x
- **Database**: PostgreSQL 15+
- **Cache/Session**: Redis 7+
- **Search**: PostgreSQL Full-Text Search (Phase 1), Elasticsearch (Phase 2)

### Frontend
- **React**: 18.2+
- **TypeScript**: 5.0+
- **Inertia.js**: 2.0+ (SPA-like experience)
- **Tailwind CSS**: 3.2+
- **Vite**: 7.0+ (Build tool)

### Development Tools
- **Docker Compose**: PostgreSQL & Redis containers
- **Laravel Sail**: (Optional) Docker development environment
- **Laravel Pail**: Real-time log viewer

---

## 📦 Yêu Cầu Hệ Thống

### Prerequisites
- **PHP**: 8.2 hoặc cao hơn
- **Composer**: 2.x
- **Node.js**: 18.x hoặc 20.x
- **npm**: 9.x hoặc 10.x
- **PostgreSQL**: 15+ (hoặc dùng Docker)
- **Redis**: 7+ (hoặc dùng Docker)
- **Git**: Để clone repository

### PHP Extensions Cần Thiết
```bash
php8.2-pgsql
php8.2-redis
php8.2-mbstring
php8.2-xml
php8.2-curl
php8.2-zip
php8.2-gd
php8.2-bcmath
php8.2-intl
php8.2-opcache
```

---

## 🚀 Bắt Đầu Development

### Bước 1: Clone Repository

```bash
git clone <repository-url>
cd web-vsen
```

### Bước 2: Cài Đặt Dependencies

```bash
# Cài đặt PHP dependencies
composer install

# Cài đặt Node.js dependencies
npm install
```

### Bước 3: Cấu Hình Environment

```bash
# Copy file .env.example sang .env
cp .env.example .env

# Tạo APP_KEY
php artisan key:generate
```

**Chỉnh sửa file `.env`** với các thông tin sau:

```env
APP_NAME="VSEN Medical Equipment"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

# Database (PostgreSQL)
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5433
DB_DATABASE=web_vsen
DB_USERNAME=postgres
DB_PASSWORD=secret

# Redis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

# Cache & Session
CACHE_STORE=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis

# Mail (Development - dùng Mailtrap hoặc Gmail SMTP)
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_mailtrap_username
MAIL_PASSWORD=your_mailtrap_password
MAIL_FROM_ADDRESS="noreply@vsen.local"
MAIL_FROM_NAME="${APP_NAME}"
```

### Bước 4: Khởi Động Database & Redis (Docker)

```bash
# Khởi động PostgreSQL và Redis containers
docker compose up -d

# Kiểm tra containers đang chạy
docker compose ps
```

**Lưu ý**: Nếu không dùng Docker, cần cài đặt PostgreSQL và Redis trực tiếp trên máy.

### Bước 5: Chạy Migrations

```bash
# Chạy database migrations
php artisan migrate

# (Tùy chọn) Chạy seeders để có dữ liệu mẫu
php artisan db:seed
```

### Bước 6: Tạo Admin User (Filament)

```bash
# Tạo user admin cho Filament panel
php artisan make:filament-user
```

Nhập thông tin:
- **Name**: Admin
- **Email**: admin@vsen.local
- **Password**: (chọn password mạnh)

### Bước 7: Khởi Động Development Server

**Cách 1: Sử dụng script `dev` (Khuyến nghị)**

```bash
composer run dev
```

Script này sẽ tự động chạy:
- Laravel server (`php artisan serve`)
- Queue worker (`php artisan queue:listen`)
- Log viewer (`php artisan pail`)
- Vite dev server (`npm run dev`)

**Cách 2: Chạy thủ công**

```bash
# Terminal 1: Laravel server
php artisan serve

# Terminal 2: Vite dev server
npm run dev

# Terminal 3: Queue worker (nếu có jobs)
php artisan queue:work

# Terminal 4: Log viewer (tùy chọn)
php artisan pail
```

### Bước 8: Truy Cập Website

- **Frontend**: http://localhost:8000
- **Admin Panel (Filament)**: http://localhost:8000/admin
- **Login**: Email và password đã tạo ở bước 6

---

## 📝 Development Workflow

### Cấu Trúc Thư Mục Quan Trọng

```
web-vsen/
├── app/
│   ├── Http/
│   │   ├── Controllers/     # Controllers
│   │   └── Middleware/       # Middleware
│   ├── Models/              # Eloquent models
│   └── Services/            # Business logic
├── database/
│   ├── migrations/          # Database migrations
│   ├── seeders/             # Database seeders
│   └── factories/           # Model factories
├── resources/
│   ├── js/
│   │   ├── Components/      # React components
│   │   ├── Layouts/         # Layout components
│   │   ├── Pages/           # Inertia pages
│   │   └── helpers.ts       # Helper functions
│   └── views/               # Blade templates (nếu có)
├── routes/
│   ├── web.php             # Web routes
│   └── admin.php           # Admin routes (Filament)
├── config/                  # Configuration files
└── tests/                   # Tests
```

### Quy Trình Development

1. **Tạo Migration**
   ```bash
   php artisan make:migration create_products_table
   ```

2. **Tạo Model**
   ```bash
   php artisan make:model Product
   ```

3. **Tạo Controller**
   ```bash
   php artisan make:controller ProductController
   ```

4. **Tạo Inertia Page (React)**
   ```bash
   # Tạo file trong resources/js/Pages/Products/Index.tsx
   ```

5. **Tạo Route**
   ```bash
   # Thêm route vào routes/web.php
   Route::get('/products', [ProductController::class, 'index']);
   ```

6. **Chạy Migrations**
   ```bash
   php artisan migrate
   ```

### Code Style & Standards

- **PHP**: Sử dụng Laravel Pint (đã cấu hình)
  ```bash
  composer pint
  ```

- **TypeScript/React**: Sử dụng ESLint + Prettier
  ```bash
  npm run lint
  ```

### Testing

```bash
# Chạy tất cả tests
composer test

# Hoặc
php artisan test
```

---

## 🔧 Common Commands

### Laravel Commands

```bash
# Tạo migration
php artisan make:migration create_table_name

# Chạy migrations
php artisan migrate

# Rollback migration
php artisan migrate:rollback

# Tạo model
php artisan make:model ModelName

# Tạo controller
php artisan make:controller ControllerName

# Tạo Filament resource
php artisan make:filament-resource ModelName

# Clear cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Optimize (Production)
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Frontend Commands

```bash
# Development mode (hot reload)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

### Docker Commands

```bash
# Khởi động containers
docker compose up -d

# Dừng containers
docker compose down

# Xem logs
docker compose logs -f

# Truy cập PostgreSQL
docker compose exec pgsql psql -U postgres -d web_vsen

# Truy cập Redis CLI
docker compose exec redis redis-cli
```

### Composer Scripts

```bash
# Setup project (lần đầu)
composer run setup

# Development (chạy tất cả services)
composer run dev

# Run tests
composer test
```

---

## 📚 Tài Liệu Tham Khảo

- **Requirements & User Stories**: [`docs/01-Requirements.md`](docs/01-Requirements.md)
- **Technical Architecture**: [`docs/02-Technical.md`](docs/02-Technical.md)
- **Design & UX**: [`docs/03-Design.md`](docs/03-Design.md)
- **Deployment Guide**: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)

### External Links

- [Laravel Documentation](https://laravel.com/docs)
- [Filament Documentation](https://filamentphp.com/docs)
- [Inertia.js Documentation](https://inertiajs.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 🐛 Troubleshooting

### Lỗi Database Connection

```bash
# Kiểm tra PostgreSQL đang chạy
docker compose ps

# Kiểm tra kết nối
php artisan tinker
>>> DB::connection()->getPdo();
```

### Lỗi Redis Connection

```bash
# Kiểm tra Redis
docker compose exec redis redis-cli ping
# Nên trả về: PONG
```

### Lỗi Vite/Assets không load

```bash
# Clear cache và rebuild
npm run build
php artisan view:clear
```

### Lỗi Permission (Linux/Mac)

```bash
# Cấp quyền cho storage và cache
chmod -R 775 storage bootstrap/cache
chown -R $USER:www-data storage bootstrap/cache
```

---

## 🔐 Security Notes

- **Không commit file `.env`** vào Git
- **APP_DEBUG=false** trong production
- **Sử dụng HTTPS** trong production
- **Đặt password mạnh** cho database và admin users

---

## 📞 Support & Contact

Nếu gặp vấn đề hoặc cần hỗ trợ:
1. Kiểm tra lại các bước setup ở trên
2. Xem logs: `storage/logs/laravel.log`
3. Xem Docker logs: `docker compose logs`
4. Liên hệ team lead hoặc xem tài liệu trong thư mục `docs/`

---

## 📄 License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
