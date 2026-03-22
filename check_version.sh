#!/usr/bin/env bash
set -Eeu

readonly REGEX="image_name\": \"(.*)\""
readonly JSON=`cat docker/image_name.json`
[[ ${JSON} =~ ${REGEX} ]]
readonly IMAGE_NAME="${BASH_REMATCH[1]}"

function echo_package_version()
{
  local -r name="${1}"
  local -r pattern=" ${name}@"
  local -r command="npm list | grep -E '${pattern}'"
  docker run --rm -i ${IMAGE_NAME} sh -c "${command}"
}

readonly MY_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
readonly EXPECTED=3.7.1
readonly ACTUAL="$(echo_package_version jquery)"

#echo_package_version jsdom

if echo "${ACTUAL}" | grep -q "${EXPECTED}"; then
  # Note: If I upgrade jquery to 4.0.0 I cannot get it to play nicely with jsdom
  echo "VERSION CONFIRMED as ${EXPECTED}"
else
  echo "VERSION EXPECTED: ${EXPECTED}"
  echo "VERSION   ACTUAL: ${ACTUAL}"
  exit 42
fi
