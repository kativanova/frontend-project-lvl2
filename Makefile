install: install-deps

install-deps:
	npm ci
lint:
	npx eslint .
test:
	npm test
test-watch:
	npm test -- --watch
test-coverage:
	npm test -- --coverage --coverageProvider=v8
