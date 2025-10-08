# Vunaq GitHub Pages

[![Deploy GitHub Pages](https://github.com/Vunaq/vunaq.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Vunaq/vunaq.github.io/actions/workflows/deploy.yml)
[![CI - Validation and Testing](https://github.com/Vunaq/vunaq.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/Vunaq/vunaq.github.io/actions/workflows/ci.yml)

A modern, responsive GitHub Pages site with automated CI/CD deployment pipeline.

## 🚀 Live Site

Visit the live site at: [https://vunaq.github.io](https://vunaq.github.io)

## 📋 Features

- **Responsive Design**: Mobile-first, responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Automated Deployment**: CI/CD pipeline using GitHub Actions
- **Code Validation**: Automated HTML, CSS, and JavaScript validation
- **Performance Monitoring**: Lighthouse CI integration for performance tracking
- **Security Scanning**: Basic security checks in the CI pipeline

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Validation**: Custom validation scripts, Lighthouse CI

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── .github/
│   └── workflows/
│       ├── deploy.yml  # Deployment workflow
│       └── ci.yml      # CI validation workflow
├── lighthouserc.js     # Lighthouse CI configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🔄 CI/CD Pipeline

### Deployment Workflow (`.github/workflows/deploy.yml`)

Automatically deploys the site to GitHub Pages when changes are pushed to the `main` branch:

1. **Build**: Prepares the site files
2. **Deploy**: Publishes to GitHub Pages

### CI Workflow (`.github/workflows/ci.yml`)

Runs on every push and pull request to ensure code quality:

1. **Validation**: Checks HTML, CSS, and JavaScript syntax
2. **Lighthouse CI**: Performance and accessibility auditing
3. **Security Scan**: Basic security checks

## 🚀 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Vunaq/vunaq.github.io.git
   cd vunaq.github.io
   ```

2. Serve locally using Python:
   ```bash
   python3 -m http.server 8080
   ```

3. Open your browser and navigate to `http://localhost:8080`

## 📝 Making Changes

1. Make your changes to the HTML, CSS, or JavaScript files
2. Test locally to ensure everything works
3. Commit and push to trigger the CI/CD pipeline:
   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   git push origin main
   ```

The site will automatically be validated and deployed if all checks pass.

## 🔧 Configuration

### Lighthouse CI
Lighthouse CI is configured via `lighthouserc.js` to ensure:
- Performance score ≥ 80%
- Accessibility score ≥ 90%
- Best practices score ≥ 80%
- SEO score ≥ 80%

### GitHub Pages Settings
Ensure your repository has GitHub Pages enabled:
1. Go to Settings → Pages
2. Select "GitHub Actions" as the source
3. The workflow will handle the rest

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Ensure all CI checks pass
5. Submit a pull request

## 📊 Monitoring

- **Deployment Status**: Check the Actions tab for deployment status
- **Performance**: Lighthouse reports are generated on each CI run
- **Uptime**: Monitor via GitHub Pages status

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using GitHub Pages and GitHub Actions**