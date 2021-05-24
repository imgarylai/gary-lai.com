#!/usr/bin/env node

const { join } = require("path");
const matter = require("gray-matter");
const { prompt } = require("enquirer");
const fs = require("fs");
const dayjs = require("dayjs");
const POSTS_PATH = join(process.cwd(), "src/posts");
const slugify = require("slugify");

const getFilePath = (filename) => {
  const slug = slugify(filename, {
    strict: true,
    lower: true,
  });
  return join(POSTS_PATH, `${slug}.mdx`);
};

prompt([
  {
    type: "input",
    name: "filename",
    message: `What is the file name?`,
    required: true,
    validate: (filename) => {
      return fs.existsSync(getFilePath(filename))
        ? `${getFilePath(filename)} exists.`
        : true;
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the post title?",
    required: true,
  },
  {
    type: "input",
    name: "description",
    message: "What is the post description?",
  },
])
  .then((response) => {
    const { title, description, filename } = response;
    const filePath = getFilePath(filename);
    const data = matter.stringify("", {
      title: title,
      description: description,
      date: `${dayjs().format()}`,
    });

    fs.writeFileSync(filePath, data);
    console.log(`Post ${title} was created at ${filePath}`);
    console.log(data);
  })
  .catch(console.log);
