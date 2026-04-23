import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { mapDialog, isPathbrowserImage } from "../src/mapper.ts";
import { lookup } from "../src/mapping-table.ts";
import type { DialogNode } from "aem-to-sanity-core";

// Fetcher used when no includes are expected. Throws loudly if called.
const noFetch = async () => {
  throw new Error("unexpected fetcher call");
};

/**
 * Build a minimal dialog root wrapping a single field node under
 * `root.items.<key>`. Mirrors the structure the mapper walks.
 */
function dialogWith(key: string, child: DialogNode): DialogNode {
  return {
    "sling:resourceType": "cq/gui/components/authoring/dialog",
    items: {
      [key]: child,
    },
  } as unknown as DialogNode;
}

describe("mapping-table: pathbrowser", () => {
  it("maps the Coral resource type to the pathbrowser kind", () => {
    const entry = lookup(
      "granite/ui/components/coral/foundation/form/pathbrowser",
    );
    assert.equal(entry?.kind, "pathbrowser");
  });

  it("maps the legacy (non-Coral) alias to the pathbrowser kind", () => {
    const entry = lookup("granite/ui/components/foundation/form/pathbrowser");
    assert.equal(entry?.kind, "pathbrowser");
  });
});

describe("isPathbrowserImage", () => {
  it("returns true when rootPath is under /content/dam", () => {
    const node = { rootPath: "/content/dam/foo", name: "./ctaLink" } as unknown as DialogNode;
    assert.equal(isPathbrowserImage(node, "ctaLink"), true);
  });

  it("returns true when the last name token is 'image'", () => {
    const node = { rootPath: "/content", name: "./desktopImage" } as unknown as DialogNode;
    assert.equal(isPathbrowserImage(node, "desktopImage"), true);
  });

  it("returns true for a bare 'image' field", () => {
    const node = { rootPath: "/content" } as unknown as DialogNode;
    assert.equal(isPathbrowserImage(node, "image"), true);
  });

  it("returns true for an 'img' suffix", () => {
    const node = { rootPath: "/content" } as unknown as DialogNode;
    assert.equal(isPathbrowserImage(node, "heroImg"), true);
  });

  it("matches case-insensitively on a trailing ALL-CAPS 'IMAGE'", () => {
    const node = { rootPath: "/content" } as unknown as DialogNode;
    assert.equal(isPathbrowserImage(node, "MobileIMAGE"), true);
  });

  it("returns false for generic internal link fields", () => {
    const node = { rootPath: "/content", name: "./ctaLink" } as unknown as DialogNode;
    assert.equal(isPathbrowserImage(node, "ctaLink"), false);
  });

  it("returns false when rootPath is missing and name is not image-like", () => {
    const node = { name: "./navigationPath" } as unknown as DialogNode;
    assert.equal(isPathbrowserImage(node, "navigationPath"), false);
  });

  // Regression: the earlier `/image/i` substring rule mis-routed these.
  for (const stringField of [
    "preImageLink",
    "bgImagePath",
    "imageCaptionText",
    "imageSrc",
    "imageUrl",
    "imageAltText",
  ]) {
    it(`returns false for '${stringField}' (image token is not the last word)`, () => {
      const node = { rootPath: "/content" } as unknown as DialogNode;
      assert.equal(isPathbrowserImage(node, stringField), false);
    });
  }
});

describe("mapDialog: pathbrowser routing", () => {
  it("emits a Sanity `image` when rootPath is under /content/dam", async () => {
    // Even when the field name is not image-like, rootPath under /content/dam
    // signals a DAM asset picker → `image`.
    const dialog = dialogWith("assetPicker", {
      "sling:resourceType":
        "granite/ui/components/coral/foundation/form/pathbrowser",
      rootPath: "/content/dam/dbi",
      name: "./ctaAsset",
      fieldLabel: "CTA Asset",
    } as unknown as DialogNode);

    const { fields, unmapped } = await mapDialog(dialog, noFetch);
    assert.equal(unmapped.length, 0);
    assert.equal(fields.length, 1);
    assert.equal(fields[0].name, "ctaAsset");
    assert.equal(fields[0].type, "image");
    assert.equal(fields[0].title, "CTA Asset");
  });

  it("emits a Sanity `image` when the field name matches /image/i", async () => {
    // rootPath is /content (not /content/dam), but the author persists to a
    // field clearly named `desktopImage` → `image`.
    const dialog = dialogWith("desktopimage", {
      "sling:resourceType":
        "granite/ui/components/coral/foundation/form/pathbrowser",
      rootPath: "/content",
      name: "./desktopImage",
      fieldLabel: "Desktop Image",
    } as unknown as DialogNode);

    const { fields, unmapped } = await mapDialog(dialog, noFetch);
    assert.equal(unmapped.length, 0);
    assert.equal(fields.length, 1);
    assert.equal(fields[0].name, "desktopImage");
    assert.equal(fields[0].type, "image");
  });

  it("emits a Sanity `string` when neither rootPath nor name signals an asset", async () => {
    // /content rootPath + `ctaLink` field name → internal content link → string
    // (same as the existing `pathfield` mapping).
    const dialog = dialogWith("ctalink", {
      "sling:resourceType":
        "granite/ui/components/coral/foundation/form/pathbrowser",
      rootPath: "/content",
      name: "./ctaLink",
      fieldLabel: "CTA Link",
      fieldDescription: "CTA Link",
    } as unknown as DialogNode);

    const { fields, unmapped } = await mapDialog(dialog, noFetch);
    assert.equal(unmapped.length, 0);
    assert.equal(fields.length, 1);
    assert.equal(fields[0].name, "ctaLink");
    assert.equal(fields[0].type, "string");
    assert.equal(fields[0].title, "CTA Link");
    assert.equal(fields[0].description, "CTA Link");
  });

  it("treats the legacy (non-Coral) alias identically", async () => {
    // Same routing logic under the legacy resource-type prefix.
    const dialog = dialogWith("ctalink", {
      "sling:resourceType":
        "granite/ui/components/foundation/form/pathbrowser",
      rootPath: "/content/dbi",
      name: "./ctaLink",
      fieldLabel: "CTA Link",
    } as unknown as DialogNode);

    const { fields, unmapped } = await mapDialog(dialog, noFetch);
    assert.equal(unmapped.length, 0);
    assert.equal(fields.length, 1);
    assert.equal(fields[0].name, "ctaLink");
    assert.equal(fields[0].type, "string");
  });

  it("routes the legacy alias to `image` for DAM rootPath", async () => {
    const dialog = dialogWith("hero", {
      "sling:resourceType":
        "granite/ui/components/foundation/form/pathbrowser",
      rootPath: "/content/dam",
      name: "./heroAsset",
      fieldLabel: "Hero Asset",
    } as unknown as DialogNode);

    const { fields, unmapped } = await mapDialog(dialog, noFetch);
    assert.equal(unmapped.length, 0);
    assert.equal(fields[0].type, "image");
  });

  it("pathfield routes to `image` when rootPath is under /content/dam", async () => {
    // Consistency with pathbrowser: a pathfield pointed at DAM is the same
    // intent — an asset picker stored as a path — so it should also become
    // a Sanity `image`.
    const dialog = dialogWith("damPicker", {
      "sling:resourceType": "granite/ui/components/coral/foundation/form/pathfield",
      rootPath: "/content/dam/dbi",
      name: "./backgroundAsset",
      fieldLabel: "Background Asset",
    } as unknown as DialogNode);

    const { fields, unmapped } = await mapDialog(dialog, noFetch);
    assert.equal(unmapped.length, 0);
    assert.equal(fields[0].type, "image");
  });

  it("pathfield stays `string` for non-DAM rootPath with a link-style name", async () => {
    const dialog = dialogWith("ctaLink", {
      "sling:resourceType": "granite/ui/components/coral/foundation/form/pathfield",
      rootPath: "/content",
      name: "./ctaLink",
      fieldLabel: "CTA Link",
    } as unknown as DialogNode);

    const { fields } = await mapDialog(dialog, noFetch);
    assert.equal(fields[0].type, "string");
  });
});
