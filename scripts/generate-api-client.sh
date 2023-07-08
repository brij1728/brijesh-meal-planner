#!/bin/bash

# This script is used to generate the API client for the given swagger.json
# using https://github.com/OpenAPITools/openapi-generator-cli

swagger_filepath=$1
output_dir=$2

if [ -z "$swagger_filepath" ]; then
  echo "Please provide a swagger filepath"
  exit 1
fi

if [ -z "$output_dir" ]; then
  echo "Please provide an output directory"
  exit 1
fi

# clean output directory
rm -rf $output_dir

npx openapi-generator-cli \
  generate -g typescript-axios \
  -i $swagger_filepath \
  -o $output_dir

if [ $? -eq 0 ]; then
  echo "Successfully generated client"
else
  echo "Failed to generate client"
fi
