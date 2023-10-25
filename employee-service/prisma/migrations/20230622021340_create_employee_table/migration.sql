-- CreateTable
CREATE TABLE "employee" (
    "id" UUID NOT NULL,
    "code" VARCHAR(64) NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,
    "deleted_at" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);
