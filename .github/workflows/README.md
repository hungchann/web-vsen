# GitHub Actions Workflows

## Overview

Repository này sử dụng GitHub Actions để tự động hóa CI/CD pipeline.

## Workflows

### 1. `deploy.yml` - Deploy to VPS

**Trigger:**
- Push vào branch `main`
- Manual trigger (`workflow_dispatch`)

**Mục đích:**
- Build production assets (npm build)
- Deploy code lên VPS qua SSH
- Chạy migrations và optimize Laravel
- Restart các services (queue workers, PHP-FPM)

**Không bao gồm tests** - deploy trực tiếp lên production.

### 2. `test.yml` - Run Tests (Future)

**Status:** File rỗng/skeleton để implement trong tương lai

**Mục đích tương lai:**
- Chạy tests cho PR vào branch `beta`
- Test với PostgreSQL và Redis services
- Verify build assets

### 3. `quality-check.yml` - Code Quality Check

**Trigger:**
- Pull request vào branch `beta`

**Mục đích:**
- Kiểm tra code style (PHP Pint)
- Chạy ESLint cho TypeScript/React
- TypeScript type checking
- Verify build assets hoạt động

**Lưu ý:** Các bước check có `continue-on-error: true` để không block PR, nhưng vẫn hiển thị warnings.

## Workflow Process

```
┌─────────────────┐
│  Developer PR   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Branch Beta   │
│  ─────────────  │
│ Quality Checks  │
│ (Lint, Type)    │
└────────┬────────┘
         │
         ▼ (Merge after review)
┌─────────────────┐
│   Branch Main   │
│  ─────────────  │
│   Auto Deploy   │
│   → VPS         │
└─────────────────┘
```

## Required GitHub Secrets

Để deploy workflow hoạt động, cần setup các secrets sau trong GitHub:

1. **VPS_HOST** - IP hoặc domain của VPS (ví dụ: `123.45.67.89`)
2. **VPS_USER** - SSH username (ví dụ: `root` hoặc `ubuntu`)
3. **VPS_SSH_KEY** - Private SSH key để kết nối VPS
4. **VPS_PORT** (optional) - SSH port (mặc định: `22`)

### Cách setup SSH key:

```bash
# Tạo SSH key pair
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/vps_deploy_key

# Copy public key lên VPS
ssh-copy-id -i ~/.ssh/vps_deploy_key.pub user@your-vps-ip

# Copy private key vào GitHub Secrets
cat ~/.ssh/vps_deploy_key
# Copy toàn bộ output vào secret VPS_SSH_KEY trong GitHub
```

## Deployment Process

Khi push code lên `main`, workflow sẽ:

1. ✅ Checkout code
2. ✅ Build production assets (`npm run build`)
3. ✅ Copy files lên VPS qua SCP
4. ✅ Backup version hiện tại
5. ✅ Sync files mới (preserve `.env` và `storage`)
6. ✅ Install dependencies (`composer install`, `npm ci`)
7. ✅ Build assets trên VPS
8. ✅ Run migrations
9. ✅ Cache Laravel config/routes/views
10. ✅ Restart queue workers và PHP-FPM

## Future Improvements

- [ ] Implement tests trong `test.yml`
- [ ] Add staging environment deployment
- [ ] Add automated rollback on deployment failure
- [ ] Add deployment notifications (Slack, Discord, etc.)
- [ ] Add health checks sau deployment
- [ ] Add database backup trước khi migrate
