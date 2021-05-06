# Pre-reqs
* sam cli
* aws cli

# Commands
If you want to change the defaults, use 
```
sam deploy --guided
```
Default stack-name = api-web-socket-app
```
sam deploy --no-confirm-changeset
aws cloudformation describe-stacks --stack-name <stack-name>  --query "Stacks[0].Outputs[?OutputKey=='WebSocketURI'].OutputValue" --output text
aws cloudformation delete-stacks --stack-name <stack-name>    
```
