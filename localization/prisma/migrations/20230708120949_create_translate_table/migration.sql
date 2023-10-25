-- CreateTable
CREATE TABLE "translate" (
    "id" UUID NOT NULL,
    "content" JSON NOT NULL,
    "code" UUID NOT NULL,
    "module_id" UUID NOT NULL,
    "language_id" UUID NOT NULL,

    CONSTRAINT "translate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "translate" ADD CONSTRAINT "translate_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "translate" ADD CONSTRAINT "translate_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "language"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
