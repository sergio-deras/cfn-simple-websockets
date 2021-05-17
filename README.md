# Pre-reqs
* sam cli
* aws cli

# Commands
Default __stack-name__ = api-web-socket-app

## Deploy sequence
```
sam build
sam deploy [--no-confirm-changeset]
```

## If you need the API URI
```
aws cloudformation describe-stacks --stack-name <stack-name>  --query "Stacks[0].Outputs[?OutputKey=='WebSocketURI'].OutputValue" --output text
```

## Test
```
mkdir test 
cd test
npm install wscat
./node_modules/.bin/wscat -c <wss location>
```

## Destroy stack
```
aws cloudformation delete-stacks --stack-name <stack-name>    
```


If you want to change the defaults, use 
```
sam deploy --guided
```