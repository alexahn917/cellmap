# build single JS bundle
yarn build

# copy js bundle to GCP bucket
gsutil rsync -R build/ gs://projectcellmap/build
gsutil cp app.yaml gs://projectcellmap

# deploy ops-place project
gcloud app --project cellmap-215800 deploy
