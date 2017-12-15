rm -rf test_project;
mkdir test_project;
cd test_project;
../node_modules/plop/src/plop.js project "test_project" "test_description" "test_org" "circle" || exit 1;

npm install && \
npm run build && \
npm run lint && \
npm run duplication && \
npm run clean

cd ..;
