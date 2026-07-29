import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${pathname}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://vibepolar.app${pathname}`, {
      headers: {
        accept: "text/html",
        host: "vibepolar.app",
        "x-forwarded-host": "vibepolar.app",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function htmlFor(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("server-renders the VibePolar public home page", async () => {
  const html = await htmlFor("/");

  assert.match(html, /<html lang="ja">/);
  assert.match(html, /街のVibeが、地図になる。/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /href="\/support"/);
  assert.match(html, /content="https:\/\/vibepolar\.app\/og\.png"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("server-renders the privacy policy", async () => {
  const html = await htmlFor("/privacy");

  assert.match(html, /プライバシーポリシー \| VibePolar/);
  assert.match(html, /緯度・経度そのものをVibePolarのデータベースへ/);
  assert.match(html, /匿名アカウントを削除/);
  assert.match(html, /Supabase/);
  assert.match(html, /mailto:vibemap\.support@gmail\.com/);
});

test("server-renders support and account deletion guidance", async () => {
  const html = await htmlFor("/support");

  assert.match(html, /サポート \| VibePolar/);
  assert.match(html, /よくあるご質問/);
  assert.match(html, /マイページ/);
  assert.match(html, /匿名アカウントとデータの削除/);
  assert.match(html, /mailto:vibemap\.support@gmail\.com/);
});
