# Migration `20200904093822-migration`

This migration has been generated at 9/4/2020, 11:38:22 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200904090943-migration..20200904093822-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
-  provider = "sqlite"
-  url = "***"
+  provider = ["sqlite", "postgresql"]
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
```


