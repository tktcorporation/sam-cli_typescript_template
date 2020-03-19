# AWS SAM CLI with Typescript

## Structure
ApiGateway + Lambda with Typescript

## Requirements

* AWS CLI already configured with Administrator permission
* [nodejs12.x installed](https://nodejs.org/en/download/releases/)
* [Docker installed](https://www.docker.com/community-edition)
* [aws-sam-cli installed](https://github.com/awslabs/aws-sam-cli)
* Typescript installed

## Local run

```bash
make local-api
```

and visit http://127.0.0.1:3000/{path}
ex) http://127.0.0.1:3000/hello

## Packaging and deployment

Set a project name to PROJECT_NAME in Makefile

```Makefile
PROJECT_NAME={ProjectName}
```

```bash
# Build and test during development
make

# Build, Package and Deploy
make deploy-stack ENV={dev, prod}
```

Individual lambda functions can be tested using the SAM CLI:
```bash
# Updates the handler.zip lambda package that SAM references
make local-package

sam local invoke <LAMBDA_FUNCTION_NAME>
```

#### Packaging notes:
- The `devDependencies` are installed in order for `tsc` to compile the TypeScript code to Javascript
- The dev `node_modules` are then removed and the production dependencies are installed and zipped in the lambda package
