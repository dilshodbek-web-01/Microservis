-- CreateTable
CREATE TABLE "_EmployeeToJobs" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EmployeeToJobs_AB_unique" ON "_EmployeeToJobs"("A", "B");

-- CreateIndex
CREATE INDEX "_EmployeeToJobs_B_index" ON "_EmployeeToJobs"("B");

-- AddForeignKey
ALTER TABLE "_EmployeeToJobs" ADD CONSTRAINT "_EmployeeToJobs_A_fkey" FOREIGN KEY ("A") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToJobs" ADD CONSTRAINT "_EmployeeToJobs_B_fkey" FOREIGN KEY ("B") REFERENCES "jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
