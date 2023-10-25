-- CreateTable
CREATE TABLE "market" (
    "id" UUID NOT NULL,
    "title" VARCHAR(64) NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "market_pkey" PRIMARY KEY ("id")
);
