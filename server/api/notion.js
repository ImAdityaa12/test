// server/api/notion-to-md.js
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import fs from 'fs';

export default defineEventHandler(async (event) => {
    const notion = new Client({ auth: "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" });
    const n2m = new NotionToMarkdown({ notionClient: notion });
    const blogPages = [];

    const databaseId = '12172e4817528069aaa7f8a59aad69fe';
    const response = await notion.databases.query({ database_id: databaseId });
    console.log(response);

    // Use for...of instead of forEach to handle async operations properly
    for (const page of response.results) {
        const pageId = page.id;

        const mdblocks = await n2m.pageToMarkdown(pageId);
        const mdString = n2m.toMarkdownString(mdblocks);

        // Safely access the properties to avoid undefined errors
        const title = page?.properties?.Name?.title?.[0]?.plain_text || 'Untitled';
        const description =page.properties?.desc?.rich_text?.[0]?.text?.content || 'No description';
        const icon = page.properties?.icon?.files?.[0]?.external?.url || '';
        const titleImage = page.properties?.titleImage?.files?.[0]?.external?.url || '';
        const category = page.properties?.category?.rich_text?.[0]?.text?.content || 'General';
        const author = page.properties?.author?.rich_text?.[0]?.text?.content || 'Anonymous';
        const authorPicture = page.properties?.authorPicture?.files?.[0]?.external?.url || '';

        const metadata = `---
title: "${title}"
description: "${description}"
icon: "${icon}"
titleImage: "${titleImage}"
category: "${category}"
author: "${author}"
authorPicture: "${authorPicture}"
---`;

        const finalMarkdown = metadata + '\n' + mdString.parent;
        const fileName = `${title}.md`;

        // Save the markdown to the filesystem
        try {
            fs.writeFileSync(`./content/blog/${fileName}`, finalMarkdown);
        } catch (err) {
            console.error('Error writing markdown file:', err);
        }

        const pageJson = {
                title: title,
                description: description,
                icon: icon,
                titleImage:titleImage,
                category:category,
                author:author,
                authorPicture:authorPicture,



            body: mdString.parent,
        }
        
        blogPages.push(pageJson);
    }

    return { success: true , blogPages: blogPages};
});
