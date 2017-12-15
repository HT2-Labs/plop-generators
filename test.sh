npm link;
rm -rf test_project;
mkdir test_project;
cd test_project;
ht2-plop project "test_project" "test_description" "test_org" "circle" || exit 1;

npm install && \
npm run build && \
npm run lint && \
npm run duplication && \
npm run clean

cd ..;
