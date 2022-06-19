echo "Switching to branch master"
# git checkout master

echo "Building app.."
npm run build

echo "Deploying files to server.."
scp -r build/* supinfo@192.168.0.21:/var/www/supidrive/
scp -r build/* supinfo@192.168.0.22:/var/www/supidrive/

echo "Deploy is finished!"