import { test, expect } from '@playwright/test';




test("verify book slot button", async ({page})=>{



await page.goto("https://sncsoftwaresolutionsslotbookings.netlify.app/")

await page.locator("//button[normalize-space()='Book Now']").click()

await expect(page.locator("//button[normalize-space()='Book Slot']")).toBeVisible();


 




})












