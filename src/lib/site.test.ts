import { describe, expect, it } from "vitest";
import { bookingMessage, business, whatsappUrl } from "./site";

describe("booking WhatsApp link", () => {
  it("uses the South African form of 0760293750", () => {
    expect(business.whatsapp).toBe("27760293750");
    expect(whatsappUrl("Hi")).toBe("https://wa.me/27760293750?text=Hi");
  });
  it("prefills the visitor's chosen service", () => {
    expect(bookingMessage({ name: "Ann", phone: "1", service: "Gates", date: "", location: "", details: "New gate" })).toContain("Service: Gates");
  });
});

describe("Rivoningo contact and service details", () => {
  it("uses the email shown in the updated business image", async () => {
    const { business } = await import("./site");
    expect(business.email).toBe("rivoningosteelinterior@gmail.com");
  });

  it.each(["Kitchen units", "Wall wardrobes", "TV stands", "Partitioning", "Storage shelves", "Renovations", "Carports", "Gates", "Wall panels", "Window frames", "Security doors"])("retains existing service: %s", async (service) => {
    const { services } = await import("./site");
    expect(services).toContain(service);
  });

  it.each(["Kitchens", "Remodeling existing kitchens", "Bedroom cabinets", "Bathroom vanities", "Floating shelves", "Bars", "Offices", "Bulk head"])("adds the service shown in the photo: %s", async (service) => {
    const { services } = await import("./site");
    expect(services).toContain(service);
  });
});
