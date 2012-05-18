REPORTER = list
MOCHA = ./node_modules/.bin/mocha -t 10000 --ignore-leaks --reporter $(REPORTER)

test: unit integration

unit:
	$(MOCHA) ./test/unit/*.js

integration:
	$(MOCHA) ./test/integration/*.js

,PHONY: test
