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
