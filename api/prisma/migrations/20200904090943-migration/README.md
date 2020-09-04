# Migration `20200904090943-migration`

This migration has been generated at 9/4/2020, 11:09:43 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200904090559-migration..20200904090943-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,8 +1,9 @@
 datasource DS {
   // optionally set multiple providers
-  provider = ["sqlite", "postgresql"]
-  url = "***"
+  // example: provider = ["sqlite", "postgresql"]
+  provider = "sqlite"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
```


