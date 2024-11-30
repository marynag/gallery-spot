# Gallery Spot

A simple web application inspired by Unsplash, allowing users to explore, search, and view collections of stunning photos. The site is built with responsive design principles and supports server-side rendering for optimal performance.

---

## **Features**

1. **Gallery Layouts**

   - Switch between 3-column and 5-column gallery displays with a button toggle.
   - Images dynamically adjust to fill space, mimicking Unsplash's layout.

2. **Pagination**

   - Navigate through gallery pages seamlessly.

3. **Image Details**

   - Clicking on an image opens a detailed view page with additional info such as:
     - Description
     - Tags
     - Likes
     - Photo details

4. **Tag-Based Collections**

   - Clickable tags on image detail pages lead to curated collections of related images.

5. **Search Functionality**

   - Perform searches to find specific images by keyword.

6. **Unsplash-inspired UI**

   - Clean and modern design, closely resembling Unsplash's styling.

7. **Responsive and Adaptive Design**

8. **Server-Side Rendering (SSR)**

---

## **Technologies Used**

- **Next.js**: Framework for server-side rendering and static site generation.
- **React**: Component-based UI library for building the frontend.
- **Tailwind CSS**: For styling the application with a focus on responsiveness.

---

## **Setup Instructions**

1. Install dependencies:
   ```bash
   yarn install
   ```
2. Create a `.env` file in the project root and add your Unsplash API key:
   ```plaintext
   NEXT_PUBLIC_ACCESS_KEY=your_access_key
   NEXT_PUBLIC_API_URL=your_api_url
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```
4. Open your browser and visit:
   ```plaintext
   http://localhost:3000
   ```
