const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");

function parseCsv(text) {
  const records = [];
  let record = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"') {
      if (quoted && next === '"') {
        field += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      record.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      record.push(field);
      if (record.some((value) => value !== "")) records.push(record);
      record = [];
      field = "";
    } else {
      field += char;
    }
  }

  if (field || record.length) {
    record.push(field);
    records.push(record);
  }

  const [headers, ...rows] = records;
  return rows.map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] || ""])));
}

function readCsv(filename) {
  return parseCsv(fs.readFileSync(path.join(projectRoot, "data", filename), "utf8"));
}

const database = {
  jobs: readCsv("jobs.csv"),
  employers: readCsv("job-employers.csv"),
  skills: readCsv("job-skills.csv"),
};

const allowedJobCategories = new Set([
  "Risk Management",
  "Quant Researcher",
  "Quant Trader",
  "Quant Developer",
  "Financial Engineer",
  "Quantitative Analyst",
]);
const invalidCategoryJobs = database.jobs.filter(
  (job) => !allowedJobCategories.has(job.job_category),
);

if (invalidCategoryJobs.length) {
  throw new Error(
    `Invalid or missing job_category for: ${invalidCategoryJobs.map((job) => job.id).join(", ")}`,
  );
}

const output = `window.TQF_JOBS_DB = ${JSON.stringify(database, null, 2)};\n`;
fs.writeFileSync(path.join(projectRoot, "assets", "jobs-db.js"), output, "utf8");

console.log(`Synced ${database.jobs.length} jobs, ${database.employers.length} employers, and ${database.skills.length} skills.`);
