# Guide: Integrating a Headless CMS with Next.js and Deploying to AWS

This document outlines the architecture and steps to integrate a headless CMS (e.g., Sanity, Strapi, Payload) into your Next.js application, build out a dynamic blog section, and deploy the entire solution to AWS.

## 1. Architectural Overview

We will use a **decoupled architecture**. This is the standard for modern web development and provides the best scalability, security, and developer experience.

-   **Frontend (Next.js):** Your existing application. It will be responsible for rendering the UI. It will fetch data from the CMS via an API at build-time and client-side.
-   **Headless CMS:** The backend where you manage content. It provides a content API (GraphQL or REST) that the Next.js app consumes.
-   **Deployment (AWS):**
    -   The Next.js app will be deployed to **AWS Lambda** via **API Gateway** and **CloudFront**. We'll use a framework like **SST (Serverless Stack)** to manage this.
    -   A self-hosted CMS (Strapi/Payload) should be deployed to a container service like **AWS Fargate** for better stability. A managed CMS like Sanity doesn't require backend hosting.

This guide uses **Sanity** as the primary example because it's easy to get started with, but the Next.js principles are the same for any headless CMS.

---

## 2. Designing the Blog Section in Next.js

Your current `/app/(stubs)/blog` is a placeholder. We will replace it with dynamic pages that fetch content from the CMS.

### Step 2.1: File Structure for the Blog

Create the following file structure inside the `app/` directory:

```
app/
└── blog/
    ├── page.tsx          // -> Renders the list of all blog posts
    └── [slug]/
        └── page.tsx      // -> Renders a single blog post based on its slug
```

### Step 2.2: Setting Up the Sanity Client

First, install the necessary Sanity client library.

```bash
npm install next-sanity
```

Now, create a file to configure the client. This allows you to fetch data from your Sanity project.

**`lib/sanity.ts`**
```typescript
import { createClient } from 'next-sanity'

// Ensure these are in your .env.local file
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-09'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation, this is fine
})
```

### Step 2.3: Building the Blog Listing Page

This page will fetch all blog posts and display them in a list. We will use Static Site Generation (SSG) with a `revalidate` time (Incremental Static Regeneration - ISR) to ensure the page is fast and updates automatically as you publish new posts.

**`app/blog/page.tsx`**
```tsx
import { client } from '@/lib/sanity';
import Link from 'next/link';

export const revalidate = 60; // Revalidate this page every 60 seconds

async function getPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "author": author->name,
    _createdAt
  }`;
  const posts = await client.fetch(query);
  return posts;
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <Link href={`/blog/${post.slug}`} key={post._id} className="block group">
            <div className="border rounded-lg overflow-hidden">
              <img src={post.mainImage || '/placeholder.jpg'} alt={post.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary">{post.title}</h2>
                <p className="text-muted-foreground">
                  By {post.author} on {new Date(post._createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

### Step 2.4: Building the Single Post Page

This dynamic page will fetch and display a single post based on the `slug` from the URL.

**`app/blog/[slug]/page.tsx`**
```tsx
import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';

export const revalidate = 60; // Revalidate this page every 60 seconds

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "mainImage": mainImage.asset->url,
    "author": author->name,
    _createdAt,
    body
  }`;
  const post = await client.fetch(query, { slug });
  return post;
}

// This component will render Sanity's rich text content
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(800).auto('format').url()}
          className="my-6 rounded-lg"
        />
      );
    },
  },
  // Custom styles for block types
  block: {
    h1: ({children}: any) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({children}: any) => <h2 className="text-3xl font-semibold my-4">{children}</h2>,
    blockquote: ({children}: any) => <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">{children}</blockquote>,
  },
};


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-5xl font-extrabold mb-4">{post.title}</h1>
      <p className="text-muted-foreground mb-8">
        By {post.author} on {new Date(post._createdAt).toLocaleDateString()}
      </p>
      <img src={post.mainImage} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
      
      <div className="prose dark:prose-invert lg:prose-xl max-w-none">
        <PortableText value={post.body} components={ptComponents} />
      </div>
    </article>
  );
}

// Helper function to generate image URLs from Sanity image assets
// You might need to install @sanity/image-url
// npm install @sanity/image-url
import imageUrlBuilder from '@sanity/image-url';
function urlFor(source: any) {
    return imageUrlBuilder(client).image(source);
}
```

---

## 3. Setting up the Headless CMS (Sanity)

1.  **Initialize Sanity:** In a **new terminal window** and a separate folder outside your Next.js project, run:
    ```bash
    npm create sanity@latest
    ```
    Follow the prompts to log in, create a new project, and choose the "Blog" schema template.

2.  **Define Content Schemas:** Sanity created a `schemas/post.ts` file for you. You can customize it with fields like title, slug, author, main image, and a `body` using `blockContent`.

3.  **Deploy the Sanity Studio:** The Studio is a separate React application where you edit your content. Deploy it so your team can access it.
    ```bash
    sanity deploy
    ```
    This will give you a `your-project.sanity.studio` URL.

4.  **Add CORS Origins:** For your Next.js app to be able to fetch data, you must add its URL to the Sanity project's CORS list.
    -   Go to [manage.sanity.io](https://manage.sanity.io).
    -   Navigate to your project -> API -> CORS Origins.
    -   Add `http://localhost:3000` for local development.
    -   **Important:** You will also need to add your production URL once it's deployed (e.g., `https://your-domain.com`).

---

## 4. Deployment to AWS

### Part 4.1: Deploying the Next.js App with SST

**SST (Serverless Stack)** is a framework that makes it incredibly easy to deploy full-stack applications to AWS. It will automatically configure Lambda, API Gateway, and CloudFront for your Next.js app.

1.  **Install SST:** In your Next.js project root, run:
    ```bash
    npx create-sst@latest
    ```

2.  **Configure SST:** This will create an `sst.config.ts` file. Configure it to deploy your Next.js app.

    **`sst.config.ts`**
    ```typescript
    import { SSTConfig } from "sst";
    import { NextjsSite } from "sst/constructs";

    export default {
      config(_input) {
        return {
          name: "proforce-website",
          region: "us-east-1", // Choose your preferred AWS region
        };
      },
      stacks(app) {
        app.stack(function Site({ stack }) {
          const site = new NextjsSite(stack, "site", {
            // Bind environment variables from your .env.local file
            environment: {
              NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
              NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
              // Add any other env vars here
            },
          });

          stack.addOutputs({
            SiteUrl: site.url,
          });
        });
      },
    } satisfies SSTConfig;
    ```

3.  **Deploy:** Run the deploy command. SST will handle the rest.
    ```bash
    npx sst deploy
    ```
    After deployment, SST will output your public `SiteUrl`. **Remember to add this URL to your Sanity CORS origins.**

### Part 4.2: Note on Deploying Strapi / Payload (Self-Hosted CMS)

You **should not** deploy a stateful CMS like Strapi or Payload directly to AWS Lambda. They require a persistent file system and a long-running server process, which is what services like **AWS Fargate** are designed for.

The architecture would be:
1.  **Containerize the CMS:** Create a `Dockerfile` for your Strapi/Payload application.
2.  **Database:** Use a managed database service like **Amazon RDS** (e.g., Postgres).
3.  **Media Storage:** Use an **S3 Bucket** for image and file uploads.
4.  **Run on Fargate:** Define an **ECS Task** with your container and run it as a **Fargate Service** behind a Load Balancer.

This setup is more complex but provides the stable, long-running environment that a self-hosted CMS needs.
