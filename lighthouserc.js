# Lighthouse CI Configuration
ci:
  collect:
    url:
      - http://localhost:8080
    settings:
      chromeFlags: '--no-sandbox --headless'
  assert:
    assertions:
      categories:performance: ['warn', {minScore: 0.8}]
      categories:accessibility: ['warn', {minScore: 0.9}]
      categories:best-practices: ['warn', {minScore: 0.8}]
      categories:seo: ['warn', {minScore: 0.8}]
  upload:
    target: 'temporary-public-storage'