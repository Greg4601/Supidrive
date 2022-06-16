# echo "Change Directory to frontend"
# cd /frontend/

echo "Switching to branch master"
git checkout master

echo "Building app.."
npm run build

echo "Deploying files to server.."
scp -r build/* supinfo@192.168.0.21:/var/www/supidrive/
scp -r build/* supinfo@192.168.0.22:/var/www/supidrive/

# echo "############## je suis dans la matrice front end"
# ls

# echo "Change Directory to backend"
# cd /backend/

# echo "############## je suis dans la matrice back end"
# ls

# echo "Switching to branch master"
# git checkout master

# echo "Building app.."
# # npm run build
# npm run start

# echo "Deploying files to server.."
# scp -r build/* supinfo@192.168.0.21:/var/www/supidrive/
# scp -r build/* supinfo@192.168.0.22:/var/www/supidrive/

echo "Deploy is finished!"