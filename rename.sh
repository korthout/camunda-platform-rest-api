#!/usr/bin/env bash

set -xe

function findAndReplace() {
  local pattern="$1"
  find . -type f \
    -not -name 'rename.sh' \
    -not -path '*.git/*' \
    -not -path '*.idea/sonarlint/*' \
    -not -path '*target/*' \
    -print0 | xargs -0 -r sed -i '' -E "$pattern"
}

git checkout -b 3-actually-rename-files

git mv src/main/kotlin/com/github/korthout/zeeberestclient src/main/kotlin/com/github/korthout/camundarestapi
git mv src/test/kotlin/com/github/korthout/zeeberestclient src/test/kotlin/com/github/korthout/camundarestapi
git add .
git commit --message "refactor: mv to new package"

findAndReplace 's/com\.github\.korthout\.zeeberestclient/com.github.korthout.camundarestapi/g'
git add .
git commit --message "refactor: use new package in code"

for filename in $(find . -type f -name '*ZeebeRestClient*')
do rename 's/ZeebeRestClient/CamundaPlatformRestApi/' "$filename"
done
git add .
git commit --message "refactor: rename classes"

findAndReplace 's/ZeebeRestClient/CamundaPlatformRestApi/g'
git add .
git commit --message "refactor: use new class names"

findAndReplace 's/zeebe-rest-client/camunda-platform-rest-api/g'
git add .
git commit --message "refactor: rename artifacts"

findAndReplace 's/Zeebe REST Client/Camunda Platform REST API/g'
findAndReplace 's/Zeebe REST client/Camunda Platform REST API/g'
git add .
git commit --message "refactor: rename project references"

findAndReplace 's/ZEEBE_REST_CLIENT/CAMUNDA_PLATFORM_REST_API/g'
git add .
git commit --message "refactor: rename env vars"

findAndReplace 's/with a Zeebe cluster/with Camunda Platform 8/g'
findAndReplace 's/with a \[Zeebe\]\(github\.com\/camunda\/zeebe\) cluster/with [Camunda Platform 8](https:\/\/camunda.com\/platform\/)/g'
git add .
git commit --message "docs: update references to cluster"

mvn spotless:apply
git add .
git commit --message "style: apply spotless"