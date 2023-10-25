-- CreateTable
CREATE TABLE "module" (
    "id" UUID NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,
    "deleted_at" TIMESTAMP(0),

    CONSTRAINT "module_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "module_name_key" ON "module"("name") WHERE 'deleted_at' IS NULL;
