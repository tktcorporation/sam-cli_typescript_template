default: install build validate test

validate:
	sam validate

package: bundle
	echo "package cloudformation template..."
	aws cloudformation package \
		--template-file template.yml \
		--output-template-file packaged.yml \
		--s3-bucket "${S3_BUCKET}" \
		--s3-prefix sam

deploy:
	echo "deploy stack ${STACK_NAME}..."
	sam deploy \
		--template-file packaged.yaml \
		--stack-name "${STACK_NAME}" \
		--capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM

local-package: validate
	cd ./app && make package

deploy-stack: local-package package deploy

local-api: local-package
	sam local start-api --debug
	# --docker-network sam-app-net
