# Sanity Studio with recursive document structure

## Usage

1. Clone the repo
2. Open `sanity.json and change `projectId` and `dataset` to a project you're member of. If you haven't gotten started with Sanity yet, head over to https://www.sanity.io/docs/getting-started-with-sanity-cli

```
"api": {
  "projectId": "MY-PROJECT-ID",
  "dataset": "DATASET-NAME"
}
```

3. In your Studio folder, type: `sanity install && sanity start`
4. Open your browser at http://localhost:3333 (or wherever the Studio is running)
5. Create a couple of documents with the `isRoot` boolean set
6. Create a bunch of other (non root) documents and add them as childre to each other or the root documents
7. Kick back and behold the depths of your document hierarchy with!
