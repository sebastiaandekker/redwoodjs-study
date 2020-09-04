# Migration `20200903101638-migration`

This migration has been generated at 9/3/2020, 12:16:38 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "Contact" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"name" TEXT NOT NULL,
"email" TEXT NOT NULL,
"message" TEXT NOT NULL,
"createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200902121722-migration..20200903101638-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -29,4 +29,12 @@
   // createdAt field to show when the post is created.
   // @default(now()) stores the exact time when the post is created
   createdAt DateTime @default(now())
 }
+
+model Contact {
+  id        Int      @id @default(autoincrement())
+  name      String
+  email     String
+  message   String
+  createdAt DateTime @default(now())
+}
```


