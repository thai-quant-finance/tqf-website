# tqf-website

Static bilingual website for the Thai Association of Quantitative Analysts and Financial Engineers.

## Content structure

The site now uses two content layers:

- `assets/site-data.js`
  - Synced source data from the official TQF website.
  - Treat this as the upstream content snapshot.
- `assets/content-db.js`
  - Curated local website database for long-term maintenance.
  - Update this file for activities, collaborators, academic pages, articles, publications, navigation, and other website-managed content.
- `data/jobs.csv`
  - Primary database for the regularly updated vacancy directory.
  - Supports bilingual content, display order, active status, publish and expiry dates, logos, and source links.
- `data/job-employers.csv`
  - Employer-name and logo directory used by the jobs database.
  - Add an employer once, then use its `employer_key` value in the `employer_short` column of `jobs.csv`.
- `data/job-skills.csv`
  - Bilingual quantitative-skill tags linked to vacancies by `job_id`.
  - Use `sort_order` to control tag order and `tone` for one of `navy`, `gold`, `teal`, `blue`, or `slate`.
- `assets/jobs-db.js`
  - Generated browser-safe copy of the three job CSV files.
  - Allows the vacancy pages to work when the HTML files are opened directly without a local web server.

## Update workflow

For official source changes:

1. Run `scripts/sync-source.py` to refresh `assets/site-data.js`.
2. Review the rendered pages.

For recurring website updates:

1. Edit `assets/content-db.js` for general website content.
2. Edit `data/jobs.csv` for vacancies. Use `||` between multiple responsibilities or qualifications in a CSV cell.
3. Run `node scripts/sync-jobs-db.js` after changing any job CSV file.
4. Set `active` to `false`, or set an `expires_date` in `YYYY-MM-DD` format, to remove a vacancy from the live list.
5. Set `published_date` in `YYYY-MM-DD` format to control the newest-first order; `sort_order` is used when dates match or are blank.
6. Keep each JavaScript collection grouped by function:
   - `navigation`
   - `activities`
   - `collaborators`
   - `academicPages`
   - `careerPages`
   - `publications`
   - `articles`

This split keeps frequent website edits separate from the official-source sync process.
