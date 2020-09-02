# Migration `20200902121722-migration`

This migration has been generated at 9/2/2020, 2:17:22 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "Post" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"title" TEXT NOT NULL,
"body" TEXT NOT NULL,
"createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200902121722-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,32 @@
+datasource DS {
+  // optionally set multiple providers
+  // example: provider = ["sqlite", "postgresql"]
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+// TODO: Please remove the following example:
+// model UserExample {
+//   id    Int     @id @default(autoincrement())
+//   email String  @unique
+//   name  String?
+// }
+
+model Post {
+  // id field to uniquely identify each post as Integer datatype
+  // @id lets prisma know this is the primary key column,
+  // @default (autoincrement()) lets this column increase by 1 each time a new post is created
+  id        Int      @id @default(autoincrement())
+  title     String
+  body      String
+  // createdAt field to show when the post is created.
+  // @default(now()) stores the exact time when the post is created
+  createdAt DateTime @default(now())
+}
```


