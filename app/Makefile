default: install build test

install:
	npm install

test:
	# export DEVICES_DYNAMODB_TABLE=TestDevicesTable
	# export MESSAGES_DYNAMODB_TABLE=TestMessagesTable
	# docker-compose up -d
	# npm test
	# docker-compose down

integration-test:
	# jest src/integrationTests

build:
	npm run build

clean:
	rm -rf ./dist
	rm -f ./handler.zip
	rm -f ./../handler.zip
	rm -f ./packaged.yaml
	rm -rf ./node_modules

bundle:
	echo "package src and modules into zipped handler..."
	rm -rf node_modules
	npm install --production
	cp -R node_modules dist && cd dist && rm -rf tests && zip -r -q ../../handler.zip .

package: clean install build bundle
