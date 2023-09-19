import { Client } from "@notionhq/client";

const notionClient = new Client({ auth: process.env.NOTION_API_KEY });

export const getPages = async () => {
  try {
    const response = await notionClient.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });
    return response.results;
  } catch (error) {
    throw error;
  }
};

export const getPageContent = async (pageId) => {
  const res = await notionClient.blocks.children.list({ block_id: pageId });
  return res.results;
};

export const getPageBySlug = async (slug) => {
  const res = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });
  return res.results || undefined;
};
