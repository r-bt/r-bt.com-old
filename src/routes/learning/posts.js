import { onMount } from "svelte";
import { writable } from "svelte/store";
import config from "../../config";

export const posts = writable([]);
export const status = writable("");

export const getPosts = () => {
  status.set("loading");
  fetch(
    `${config.NOTION_API}/table/489999d5f3d240c0a4fedd9de71cbb6f?v=193cd8d6cfaf4b09b93cbf6377e90b8b`
  )
    .then(async (resp) => {
      status.set("loaded");
      posts.set(
        (await resp.json()).filter(
          (item) => item.Status === "Visible" && item.slug
        )
      );
    })
    .catch((err) => {
      status.set("error");
    });
};
