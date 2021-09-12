install: install-deps

install-deps:
	npm ci
lint:
	npx eslint .
test:
	npm test
test-watch:
	npx jest --watch
test-coverage:
	npx jest --coverage