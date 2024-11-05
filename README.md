This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Popsa.com - React Frontend test skeleton

## Getting Started

Node version used: v20.18.0.

Run the development server:

```bash
npm install

npm run dev

```

## To run test

```bash

npm run test

```

Open [http://localhost:3000/image-sorter](http://localhost:3000/image-sorter) with your browser to see the result.

## Method

I first approached the task by breaking down the UI, to understand the problem and how I was going to structure the code.

I decided to use DnD-kit (something I have not used before) after some research and consideration. I went for this framework as I saw some working examples and thought it was a reliable framework, with the core functionality needed for multiple container drag and drop features.

This feature works across both mobile and desktop, and allows for the user to swap placements of photos.

In order to properly implement the swap functionlaity, I had to add a custom swapItems helper to accuratley swap the images on drag end. This was slightly complex as it required having access to both the section ID and the image index within that section. Once I had these, I was then able to track, using drag events, the image index that was active and the image/section index it was dragged over, to then swap these items in the array (and hence the positioning on the UI).

I decided to use the useSortable hook as it seemed to be a great way of handling multiple droppable containers.

Overall, I aimed to keep the code as clean and modular as possible.

## Future Improvements with more time

- I would have liked to have got the image circle on drag functionality working along with the animation on drop, however I prioritised ensuring the core DnD functionality with swap worked first. Potentially, could pair dndkit with framer-motion to achieve the correct drop animations.
- Look into making use of the useSortable indexes: I realised that dndkit has built in indexes when doing some final touches. If I were to use these, I could implement a hook and provider, to pass the indexes further up the tree for the parent components to use. However, would need to look into best way of doing this and the benefits over how I've currently done it.
- More tests! With more time/as a future improvement I would have added tests for both the drag and drop functionality and the swapItems helper, as well as smaller component level tests. I would use RTL for snapshots and component testing.
